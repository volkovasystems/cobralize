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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvYnJhbGl6ZS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImRpc2RvIiwicmVxdWlyZSIsImZhbHp5IiwiRFJPUF9QQVRURVJOIiwiU1BBQ0VfUEFUVEVSTiIsImNvYnJhbGl6ZSIsInRleHQiLCJ0b1VwcGVyQ2FzZSIsInJlcGxhY2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyREEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNRSxlQUFlLFNBQXJCO0FBQ0EsSUFBTUMsZ0JBQWdCLE1BQXRCOztBQUVBLElBQU1DLFlBQVksU0FBU0EsU0FBVCxDQUFvQkMsSUFBcEIsRUFBMEI7QUFDM0M7Ozs7Ozs7O0FBUUEsS0FBSUosTUFBT0ksSUFBUCxLQUFpQixPQUFPQSxJQUFQLElBQWUsUUFBcEMsRUFBOEM7QUFDN0MsU0FBT0EsSUFBUDtBQUNBOztBQUVELFFBQU9OLE1BQU9NLElBQVAsRUFBY0MsV0FBZCxHQUE2QkMsT0FBN0IsQ0FBc0NMLFlBQXRDLEVBQW9ELEVBQXBELEVBQXlESyxPQUF6RCxDQUFrRUosYUFBbEUsRUFBaUYsR0FBakYsQ0FBUDtBQUNBLENBZEQ7O0FBZ0JBSyxPQUFPQyxPQUFQLEdBQWlCTCxTQUFqQiIsImZpbGUiOiJjb2JyYWxpemUuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nXG5cdFx0YSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlc1xuXHRcdCh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbixcblx0XHRpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLFxuXHRcdHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsXG5cdFx0YW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcblx0XHRzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG5cdFx0aW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG5cdFx0T1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuXHRcdE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC5cblx0XHRJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWVxuXHRcdENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsXG5cdFx0VE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEVcblx0XHRTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJjb2JyYWxpemVcIixcblx0XHRcdFwicGF0aFwiOiBcImNvYnJhbGl6ZS9jb2JyYWxpemUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImNvYnJhbGl6ZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJjb2JyYWxpemVcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2NvYnJhbGl6ZS5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImNvYnJhbGl6ZS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdFRyYW5zZm9ybSBhbnkgaHVtYW4gcmVhZGFibGUgYWxwaGFudW1lcmljIHN0cmluZyBkaXZpZGVkIGJ5IGNlcnRhaW5cblx0XHRcdGNoYXJhY3RlcnMgaW50byB1bmRlcnNjb3JlIHNlcGFyYXRlZCB1cHBlcmNhc2UgZm9ybS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZGlzZG9cIjogXCJkaXNkb1wiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgZGlzZG8gPSByZXF1aXJlKCBcImRpc2RvXCIgKTtcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5cbmNvbnN0IERST1BfUEFUVEVSTiA9IC9eWzAtOV0rLztcbmNvbnN0IFNQQUNFX1BBVFRFUk4gPSAvXFxzKy9nO1xuXG5jb25zdCBjb2JyYWxpemUgPSBmdW5jdGlvbiBjb2JyYWxpemUoIHRleHQgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJ0ZXh0OnJlcXVpcmVkXCI6IFwic3RyaW5nXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCBmYWx6eSggdGV4dCApIHx8IHR5cGVvZiB0ZXh0ICE9IFwic3RyaW5nXCIgKXtcblx0XHRyZXR1cm4gdGV4dDtcblx0fVxuXG5cdHJldHVybiBkaXNkbyggdGV4dCApLnRvVXBwZXJDYXNlKCApLnJlcGxhY2UoIERST1BfUEFUVEVSTiwgXCJcIiApLnJlcGxhY2UoIFNQQUNFX1BBVFRFUk4sIFwiX1wiICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvYnJhbGl6ZTtcbiJdfQ==
//# sourceMappingURL=cobralize.support.js.map
