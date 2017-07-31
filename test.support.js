
"use strict";

/*;
              	@test-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "cobralize",
              			"path": "cobralize/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/cobralize.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should",
              			"cobralize": "cobralize"
              		}
              	@end-include
              */

var assert = require("should");



//: @client:
var cobralize = require("./cobralize.support.js");
//: @end-client






//: @client: 

describe("cobralize", function () {

	describe("\"cobralize( \"Hello World\" )\"", function () {
		it("should have value 'HELLO_WORLD'", function () {

			assert.equal(cobralize("Hello World"), "HELLO_WORLD");

		});
	});

	describe("\"cobralize( \"hello_world\" )\"", function () {
		it("should have value 'HELLO_WORLD'", function () {

			assert.equal(cobralize("hello_world"), "HELLO_WORLD");

		});
	});

	describe("\"cobralize( \"helloWorld\" )\"", function () {
		it("should have value 'HELLO_WORLD'", function () {

			assert.equal(cobralize("helloWorld"), "HELLO_WORLD");

		});
	});

	describe("\"cobralize( \"hello world\" )\"", function () {
		it("should have value 'HELLO_WORLD'", function () {

			assert.equal(cobralize("hello world"), "HELLO_WORLD");

		});
	});


});


//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiY29icmFsaXplIiwiZGVzY3JpYmUiLCJpdCIsImVxdWFsIl0sIm1hcHBpbmdzIjoiO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLFlBQVlELFFBQVMsd0JBQVQsQ0FBbEI7QUFDQTs7Ozs7OztBQU9BOztBQUVBRSxTQUFVLFdBQVYsRUFBdUIsWUFBTzs7QUFFN0JBLDhDQUEwQyxZQUFPO0FBQ2hEQyxLQUFJLGlDQUFKLEVBQXVDLFlBQU87O0FBRTdDSixVQUFPSyxLQUFQLENBQWNILFVBQVcsYUFBWCxDQUFkLEVBQTBDLGFBQTFDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBQyw4Q0FBMEMsWUFBTztBQUNoREMsS0FBSSxpQ0FBSixFQUF1QyxZQUFPOztBQUU3Q0osVUFBT0ssS0FBUCxDQUFjSCxVQUFXLGFBQVgsQ0FBZCxFQUEwQyxhQUExQzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUMsNkNBQXlDLFlBQU87QUFDL0NDLEtBQUksaUNBQUosRUFBd0MsWUFBTzs7QUFFOUNKLFVBQU9LLEtBQVAsQ0FBY0gsVUFBVyxZQUFYLENBQWQsRUFBeUMsYUFBekM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFDLDhDQUEwQyxZQUFPO0FBQ2hEQyxLQUFJLGlDQUFKLEVBQXVDLFlBQU87O0FBRTdDSixVQUFPSyxLQUFQLENBQWNILFVBQVcsYUFBWCxDQUFkLEVBQTBDLGFBQTFDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQSxDQW5DRDs7O0FBc0NBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEB0ZXN0LWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC10ZXN0LWxpY2Vuc2VcclxuXHJcblx0QHRlc3QtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwiY29icmFsaXplXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImNvYnJhbGl6ZS90ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvY29icmFsaXplLmdpdFwiXHJcblx0XHR9XHJcblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcclxuXHJcblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXHJcblx0XHRcdFwiY29icmFsaXplXCI6IFwiY29icmFsaXplXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcclxuXHJcblxyXG5cclxuLy86IEBjbGllbnQ6XHJcbmNvbnN0IGNvYnJhbGl6ZSA9IHJlcXVpcmUoIFwiLi9jb2JyYWxpemUuc3VwcG9ydC5qc1wiICk7XHJcbi8vOiBAZW5kLWNsaWVudFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogQGNsaWVudDogXHJcblxyXG5kZXNjcmliZSggXCJjb2JyYWxpemVcIiwgKCApID0+IHtcclxuXHRcclxuXHRkZXNjcmliZSggYFwiY29icmFsaXplKCBcIkhlbGxvIFdvcmxkXCIgKVwiYCwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBoYXZlIHZhbHVlICdIRUxMT19XT1JMRCdcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggY29icmFsaXplKCBcIkhlbGxvIFdvcmxkXCIgKSwgXCJIRUxMT19XT1JMRFwiICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIGBcImNvYnJhbGl6ZSggXCJoZWxsb193b3JsZFwiIClcImAsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgaGF2ZSB2YWx1ZSAnSEVMTE9fV09STEQnXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGNvYnJhbGl6ZSggXCJoZWxsb193b3JsZFwiICksIFwiSEVMTE9fV09STERcIiApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBgXCJjb2JyYWxpemUoIFwiaGVsbG9Xb3JsZFwiIClcImAsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgaGF2ZSB2YWx1ZSAnSEVMTE9fV09STEQnXCIgLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBjb2JyYWxpemUoIFwiaGVsbG9Xb3JsZFwiICksIFwiSEVMTE9fV09STERcIiApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBgXCJjb2JyYWxpemUoIFwiaGVsbG8gd29ybGRcIiApXCJgLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGhhdmUgdmFsdWUgJ0hFTExPX1dPUkxEJ1wiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBjb2JyYWxpemUoIFwiaGVsbG8gd29ybGRcIiApLCBcIkhFTExPX1dPUkxEXCIgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRcclxufSApO1xyXG5cclxuXHJcbi8vOiBAZW5kLWNsaWVudFxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==
//# sourceMappingURL=test.support.js.map
