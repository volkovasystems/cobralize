"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining
              		a copy of this software and associated documentation files
              		(the "Software"), to deal in the Software without restriction,
              		including without limitation the rights to use, copy, modify, merge,
              		publish, distribute, sublicense, and/or sell copies of the Software,
              		and to permit persons to whom the Software is furnished to do so,
              		subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included
              		in all copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
              		OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              		MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
              		IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
              		CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
              		TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
              		SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "cobralize",
              			"path": "cobralize/cobralize.js",
              			"file": "cobralize.js",
              			"module": "cobralize",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/cobralize.git",
              			"test": "cobralize-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Transform any human readable alphanumeric string divided by certain
              			characters into underscore separated uppercase form.
              	@end-module-documentation
              
              	@include:
              		{
              			"disdo": "disdo",
              			"falzy": "falzy"
              		}
              	@end-include
              */

var disdo = require("disdo");
var falzy = require("falzy");

var DROP_PATTERN = /^[0-9]+/;
var SPACE_PATTERN = /\s+/g;

var cobralize = function cobralize(text) {
	/*;
                                          	@meta-configuration:
                                          		{
                                          			"text:required": "string"
                                          		}
                                          	@end-meta-configuration
                                          */

	if (falzy(text) || typeof text != "string") {
		return text;
	}

	return disdo(text).toUpperCase().replace(DROP_PATTERN, "").replace(SPACE_PATTERN, "_");
};

module.exports = cobralize;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvYnJhbGl6ZS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImRpc2RvIiwicmVxdWlyZSIsImZhbHp5IiwiRFJPUF9QQVRURVJOIiwiU1BBQ0VfUEFUVEVSTiIsImNvYnJhbGl6ZSIsInRleHQiLCJ0b1VwcGVyQ2FzZSIsInJlcGxhY2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyREEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNRSxlQUFlLFNBQXJCO0FBQ0EsSUFBTUMsZ0JBQWdCLE1BQXRCOztBQUVBLElBQU1DLFlBQVksU0FBU0EsU0FBVCxDQUFvQkMsSUFBcEIsRUFBMEI7QUFDM0M7Ozs7Ozs7O0FBUUEsS0FBSUosTUFBT0ksSUFBUCxLQUFpQixPQUFPQSxJQUFQLElBQWUsUUFBcEMsRUFBOEM7QUFDN0MsU0FBT0EsSUFBUDtBQUNBOztBQUVELFFBQU9OLE1BQU9NLElBQVAsRUFBY0MsV0FBZCxHQUE2QkMsT0FBN0IsQ0FBc0NMLFlBQXRDLEVBQW9ELEVBQXBELEVBQXlESyxPQUF6RCxDQUFrRUosYUFBbEUsRUFBaUYsR0FBakYsQ0FBUDtBQUNBLENBZEQ7O0FBZ0JBSyxPQUFPQyxPQUFQLEdBQWlCTCxTQUFqQiIsImZpbGUiOiJjb2JyYWxpemUuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmdcclxuXHRcdGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXNcclxuXHRcdCh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcclxuXHRcdGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsXHJcblx0XHRwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLFxyXG5cdFx0YW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcclxuXHRcdHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXHJcblx0XHRpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXHJcblx0XHRPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXHJcblx0XHRNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuXHJcblx0XHRJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWVxyXG5cdFx0Q0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCxcclxuXHRcdFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFXHJcblx0XHRTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwiY29icmFsaXplXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImNvYnJhbGl6ZS9jb2JyYWxpemUuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwiY29icmFsaXplLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwiY29icmFsaXplXCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2NvYnJhbGl6ZS5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwiY29icmFsaXplLXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0VHJhbnNmb3JtIGFueSBodW1hbiByZWFkYWJsZSBhbHBoYW51bWVyaWMgc3RyaW5nIGRpdmlkZWQgYnkgY2VydGFpblxyXG5cdFx0XHRjaGFyYWN0ZXJzIGludG8gdW5kZXJzY29yZSBzZXBhcmF0ZWQgdXBwZXJjYXNlIGZvcm0uXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJkaXNkb1wiOiBcImRpc2RvXCIsXHJcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBkaXNkbyA9IHJlcXVpcmUoIFwiZGlzZG9cIiApO1xyXG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xyXG5cclxuY29uc3QgRFJPUF9QQVRURVJOID0gL15bMC05XSsvO1xyXG5jb25zdCBTUEFDRV9QQVRURVJOID0gL1xccysvZztcclxuXHJcbmNvbnN0IGNvYnJhbGl6ZSA9IGZ1bmN0aW9uIGNvYnJhbGl6ZSggdGV4dCApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwidGV4dDpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0aWYoIGZhbHp5KCB0ZXh0ICkgfHwgdHlwZW9mIHRleHQgIT0gXCJzdHJpbmdcIiApe1xyXG5cdFx0cmV0dXJuIHRleHQ7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZGlzZG8oIHRleHQgKS50b1VwcGVyQ2FzZSggKS5yZXBsYWNlKCBEUk9QX1BBVFRFUk4sIFwiXCIgKS5yZXBsYWNlKCBTUEFDRV9QQVRURVJOLCBcIl9cIiApO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBjb2JyYWxpemU7XHJcbiJdfQ==
//# sourceMappingURL=cobralize.support.js.map
