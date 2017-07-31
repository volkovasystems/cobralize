
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





//: @bridge:
var path = require("path");
//: @end-bridge







//: @bridge:

describe("cobralize", function () {


	var directory = __dirname;
	var testBridge = path.resolve(directory, "bridge.html");
	var bridgeURL = "file://" + testBridge;

	describe("\"cobralize( \"Hello World\" )\"", function () {
		it("should have value 'HELLO_WORLD'", function () {

			assert.equal(cobralize(true, true));

		});
	});

	describe("\"cobralize( \"hello_world\" )\"", function () {
		it("should have value 'HELLO_WORLD'", function () {

			assert.equal(cobralize(true, true));

		});
	});

	describe("\"cobralize( \"helloWorld\" )\"", function () {
		it("should have value 'HELLO_WORLD'", function () {

			assert.equal(cobralize(true, true));

		});
	});

	describe("\"cobralize( \"hello world\" )\"", function () {
		it("should have value 'HELLO_WORLD'", function () {

			assert.equal(cobralize(true, true));

		});
	});
});



//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJkaXJlY3RvcnkiLCJfX2Rpcm5hbWUiLCJ0ZXN0QnJpZGdlIiwicmVzb2x2ZSIsImJyaWRnZVVSTCIsIml0IiwiZXF1YWwiLCJjb2JyYWxpemUiXSwibWFwcGluZ3MiOiI7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7OztBQVFBOztBQUVBRSxTQUFVLFdBQVYsRUFBdUIsWUFBTzs7O0FBRzdCLEtBQUlDLFlBQVlDLFNBQWhCO0FBQ0EsS0FBSUMsYUFBYUosS0FBS0ssT0FBTCxDQUFjSCxTQUFkLEVBQXlCLGFBQXpCLENBQWpCO0FBQ0EsS0FBSUksd0JBQXVCRixVQUEzQjs7QUFFQUgsOENBQTBDLFlBQU87QUFDaERNLEtBQUksaUNBQUosRUFBdUMsWUFBTzs7QUFFN0NULFVBQU9VLEtBQVAsQ0FBYUMsVUFBWSxJQUFaLEVBQWtCLElBQWxCLENBQWI7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFSLDhDQUEwQyxZQUFPO0FBQ2hETSxLQUFJLGlDQUFKLEVBQXVDLFlBQU87O0FBRTdDVCxVQUFPVSxLQUFQLENBQWFDLFVBQVksSUFBWixFQUFrQixJQUFsQixDQUFiOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBUiw2Q0FBeUMsWUFBTztBQUMvQ00sS0FBSSxpQ0FBSixFQUF3QyxZQUFPOztBQUU5Q1QsVUFBT1UsS0FBUCxDQUFhQyxVQUFZLElBQVosRUFBa0IsSUFBbEIsQ0FBYjs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQVIsOENBQTBDLFlBQU87QUFDaERNLEtBQUksaUNBQUosRUFBdUMsWUFBTzs7QUFFN0NULFVBQU9VLEtBQVAsQ0FBYUMsVUFBWSxJQUFaLEVBQWtCLElBQWxCLENBQWI7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7QUFPQSxDQXRDRDs7OztBQTBDQSIsImZpbGUiOiJ0ZXN0LmJyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEB0ZXN0LWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC10ZXN0LWxpY2Vuc2VcclxuXHJcblx0QHRlc3QtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwiY29icmFsaXplXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImNvYnJhbGl6ZS90ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvY29icmFsaXplLmdpdFwiXHJcblx0XHR9XHJcblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcclxuXHJcblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXHJcblx0XHRcdFwiY29icmFsaXplXCI6IFwiY29icmFsaXplXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogQGJyaWRnZTpcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XHJcbi8vOiBAZW5kLWJyaWRnZVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBicmlkZ2U6XHJcblxyXG5kZXNjcmliZSggXCJjb2JyYWxpemVcIiwgKCApID0+IHtcclxuXHJcblx0XHJcblx0bGV0IGRpcmVjdG9yeSA9IF9fZGlybmFtZTtcclxuXHRsZXQgdGVzdEJyaWRnZSA9IHBhdGgucmVzb2x2ZSggZGlyZWN0b3J5LCBcImJyaWRnZS5odG1sXCIgKTtcclxuXHRsZXQgYnJpZGdlVVJMID0gYGZpbGU6Ly8keyB0ZXN0QnJpZGdlIH1gO1xyXG5cclxuXHRkZXNjcmliZSggYFwiY29icmFsaXplKCBcIkhlbGxvIFdvcmxkXCIgKVwiYCwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBoYXZlIHZhbHVlICdIRUxMT19XT1JMRCdcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbChjb2JyYWxpemUgKCB0cnVlLCB0cnVlICkgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggYFwiY29icmFsaXplKCBcImhlbGxvX3dvcmxkXCIgKVwiYCwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBoYXZlIHZhbHVlICdIRUxMT19XT1JMRCdcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbChjb2JyYWxpemUgKCB0cnVlLCB0cnVlICkgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggYFwiY29icmFsaXplKCBcImhlbGxvV29ybGRcIiApXCJgLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGhhdmUgdmFsdWUgJ0hFTExPX1dPUkxEJ1wiICwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbChjb2JyYWxpemUgKCB0cnVlLCB0cnVlICkgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggYFwiY29icmFsaXplKCBcImhlbGxvIHdvcmxkXCIgKVwiYCwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBoYXZlIHZhbHVlICdIRUxMT19XT1JMRCdcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbChjb2JyYWxpemUgKCB0cnVlLCB0cnVlICkgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG59ICk7XHJcblxyXG5cclxuXHJcbi8vOiBAZW5kLWJyaWRnZVxyXG5cclxuXHJcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
