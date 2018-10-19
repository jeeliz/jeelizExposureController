 # Jeeliz Exposure controller

 For some applications, we would like to set the camera exposure so that a specific area of the video has a set average color lightness. Thanks to [ImageCapture API](https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture), it is now possible to adjust the camera driver settings directly in the web browser (like exposure, saturation, brightness, ...). 

 But is is not supported by all browsers yet. You can check the compatibility table [here](https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture#Browser_compatibility).



## Architecture

* `/demos/`: demonstrations
* `/helpers/`: helpers to get the video feed through *WebRTC* or to initialize the WebGL context,
* `./JeelizExposureController.js`: main script of the library



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