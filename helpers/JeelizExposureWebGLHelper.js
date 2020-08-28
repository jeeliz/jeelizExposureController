"use strict";

/*
  The functions of this helpers have not been included into the main script (JeelizExposureController.js)
  Because they are already included into most of Jeeliz libraries.
*/

const JeelizExposureWebglHelper = (function(){

  let _domCanvas = null, _domVideo = null;
  let _gl = null, _glFillViewportVBO = null, _glFillViewportVBOind = null, _glTextureVideo = null, _glFbo = null;
  let _lastCurrentTime = -1;

  // private functions:
  function create_FBO(){
    _glFbo = _gl.createFramebuffer();
  }

  function bind_FBO(){
    _gl.bindFramebuffer(_gl.FRAMEBUFFER, _glFbo);
  }

  function create_VBO(){
    _glFillViewportVBO = _gl.createBuffer();
    _gl.bindBuffer(_gl.ARRAY_BUFFER, _glFillViewportVBO);
    _gl.bufferData(_gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),_gl.STATIC_DRAW);

    _glFillViewportVBOind = _gl.createBuffer();
    _gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER,_glFillViewportVBOind);
    _gl.bufferData(_gl.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2]),_gl.STATIC_DRAW);
  }

  function set_attribPointer(){
    _gl.vertexAttribPointer(0, 2, _gl.FLOAT, false,8,0) ;
  }

  function create_videoTexture(){
    _glTextureVideo = _gl.createTexture();
    _gl.bindTexture(_gl.TEXTURE_2D, _glTextureVideo);
    _gl.pixelStorei(_gl.UNPACK_FLIP_Y_WEBGL, true);
    _gl.texParameteri(_gl.TEXTURE_2D, _gl.TEXTURE_MAG_FILTER, _gl.NEAREST);
    _gl.texParameteri(_gl.TEXTURE_2D, _gl.TEXTURE_MIN_FILTER, _gl.NEAREST);
    _gl.texParameteri(_gl.TEXTURE_2D, _gl.TEXTURE_WRAP_S, _gl.CLAMP_TO_EDGE);
    _gl.texParameteri(_gl.TEXTURE_2D, _gl.TEXTURE_WRAP_T, _gl.CLAMP_TO_EDGE);
  }

  function update_videoTexture(){
    _gl.bindTexture(_gl.TEXTURE_2D, _glTextureVideo);
    if (_lastCurrentTime === _domVideo['currentTime']){
      return;
    }
    _lastCurrentTime = _domVideo['currentTime'];
    _gl.texImage2D(_gl.TEXTURE_2D, 0, _gl.RGBA, _gl.RGBA, _gl.UNSIGNED_BYTE, _domVideo);
  }

  // public methods:
  const that = {
    /*
    <dict> spec with properties:
      <string> canvasId: ID of the canvas in the DOM where Web_gl context will be initialized
      <function> callbackReady: launched when ready with <string> errorCode or false as argument
      <videoElement> video

    */
    'init': function(spec){
      // init canvas and Web_gl context
      _domCanvas = document.getElementById(spec['canvasId']);
      _domCanvas['width'] = _domCanvas['height']=256; 

      try {
        _gl = _domCanvas.getContext('webgl',{antialias: false});
      } catch(e){
        spec['callbackReady']('_gl_INCOMPATIBLE');
        return false;
      }

      // take care of the video:
      _domVideo = spec['video'];

      // create webgl objects
      create_VBO();
      create_FBO();
      create_videoTexture();

      // initialize JeelizExposureController
      JeelizExposureController['init']({
        'GL': _gl,
        'videoElement': _domVideo,
        'callbackReady': function(errCode){
          if (!errCode){
            set_attribPointer();
          }
          spec['callbackReady'](errCode);
        }

      })
      return true;
    }, //end init

    'adjust': function(area, adjustedLightness, epsilon, relaxationFactor, callback){
      bind_FBO();
      update_videoTexture();
      JeelizExposureController['adjust'](_glTextureVideo, area, adjustedLightness, epsilon, relaxationFactor, callback);
    }
  };
  return that;
})();
