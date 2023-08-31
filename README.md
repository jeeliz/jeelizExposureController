Jeeliz Exposure controller
==========================

For some applications, we would like to set the camera exposure so that a specific area of the video has a set average color lightness. Thanks to [ImageCapture API](https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture), it is now possible to adjust the camera driver settings directly in the web browser (like exposure, saturation, brightness, ...). 

But it is not supported by all browsers yet. You can check the compatibility table [here](https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture#Browser_compatibility).

## Architecture

  * `/demos/`: demonstrations
  * `/helpers/`: helpers to get the video feed through *WebRTC* or to initialize the WebGL context,
  * `./JeelizExposureController.js`: main script of the library

## Demonstrations

Included in this repository:

  * `/demos/basic`: the exposure is tuned according to an area at the center of the video. It should be served with an HTTPS static server.

Other demonstrations:

  * *Camera auto exposure adjuster*: The user's face is detected and tracked, then the exposure of the camera is adjusted according to the face lightness. It is useful when there is a strong backlight or if the ambient luminosity is low. The demonstration is available on [Jeeliz GlanceTracker Github repository](https://github.com/jeeliz/jeelizGlanceTracker). You can check the live demo here: [jeeliz.com/demos/glanceTracker/demos/cameraExposureAdjuster/](https://jeeliz.com/demos/glanceTracker/demos/cameraExposureAdjuster/).

If it does not work on your computer, this is a video screenshot:

<p align="center">
<a href='https://www.youtube.com/watch?v=G-Q4kRqxsTU'><img src='https://img.youtube.com/vi/G-Q4kRqxsTU/0.jpg'></a>
</p>

You can subscribe to the [Jeeliz Youtube channel](https://www.youtube.com/channel/UC3XmXH1T3d1XFyOhrRiiUeA) or to the [@Jeeliz_AR Twitter account](https://twitter.com/Jeeliz_AR) to be kept informed of our cutting edge developments.

## Compatibility

To run this library, you need:

  * A browser implementing *Image Capture API*. The compatibility tables are here: [developer.mozilla.org/en-US/docs/Web/API/ImageCapture](https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture#browser_compatibility),

  * A webcam which driver allows to adjust the exposure (not a Mac).

This API is still very experimental and its specification may change before it becomes implemented on Firefox and Edge, then Safari.


## License

The MIT License (MIT)

Copyright (c) 2018 Jeeliz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## References

 * [Jeeliz website](https://jeeliz.com)
 * [Doc about Image Capture API on developers.google.com](https://developers.google.com/web/updates/2016/12/imagecapture)
 * [Specifications on MDN](https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture)
