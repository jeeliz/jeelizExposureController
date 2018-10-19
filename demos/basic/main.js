"use strict";

/*
DEMO SETTINGS:
*/
const SETTINGS={
	area: {//adjust lightness using this area
		x: 0, //0-> center
		y: 0, //0-> center
		w: 0.25,
		h: 0.25
	},
	lightness: 0.5, //adjust lightness, between 0 and 1
	epsilon: 0.05,  //tolerancy for lightness target
	delay: 50,    //delay between 2 adjustements in ms
}

//globals:
let DOMVIDEO;


function main(){
	//get video with getUserMedia:

	DOMVIDEO=document.getElementById('webcamVideo');
	JeelizMediaStreamAPIHelper.get(DOMVIDEO, init, function(){
		alert('ERROR in main.js: Cannot get video bro');
	}, {
		video: {
			facingMode: {ideal: 'environment'},
		 	width: {/*min: 200, max: 640,*/ ideal: 800},
			height: {/*min: 160, max: 480,*/ ideal: 600}
		},
		audio: false
	});
} 

function init(){
	JeelizExposureWebglHelper.init({
		video: DOMVIDEO,
		callbackReady: function(errCode){
			if(errCode){
				alert('ERROR in main.js: Sthing happens bad bro :( '+errCode);
			} else {
				display_area();
				adjust();
			}
		},
		canvasId: "webglCanvas"
	});
}

function get_cssPosStr(v){
	return Math.round(v).toString()+'px';
}

function display_area(){
	const domAreaStyle=document.getElementById('areaMarker').style;
	//center of the area between [0,1]:
	const ctr_xn=0.5+0.5*SETTINGS.area.x;
	const ctr_yn=0.5+0.5*SETTINGS.area.y;

	//corner of the area between [0,1]:
	const cr_xn=ctr_xn-0.5*SETTINGS.area.w;
	const cr_yn=ctr_yn-0.5*SETTINGS.area.h;

	domAreaStyle.left=get_cssPosStr(cr_xn*DOMVIDEO.videoWidth);
	domAreaStyle.top=get_cssPosStr(cr_yn*DOMVIDEO.videoHeight);
	domAreaStyle.width=get_cssPosStr(SETTINGS.area.w*DOMVIDEO.videoWidth);
	domAreaStyle.height=get_cssPosStr(SETTINGS.area.h*DOMVIDEO.videoHeight);

	DOMVIDEO.parentElement.style.width=get_cssPosStr(DOMVIDEO.videoWidth);
}

function adjust(){
	//console.log('INFO in main.js: adjust()');
	JeelizExposureWebglHelper.adjust(
			SETTINGS.area,
			SETTINGS.lightness, SETTINGS.epsilon,
			function(isSuccess){
				if (isSuccess){
					console.log('Exposure is fine now :)');
				}
				setTimeout(adjust, SETTINGS.delay);
			}
			);
}