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

const disdo = require( "disdo" );
const falzy = require( "falzy" );

const DROP_PATTERN = /^[0-9]+/;
const SPACE_PATTERN = /\s+/g;

const cobralize = function cobralize( text ){
	/*;
		@meta-configuration:
			{
				"text:required": "string"
			}
		@end-meta-configuration
	*/

	if( falzy( text ) || typeof text != "string" ){
		return text;
	}

	return disdo( text ).toUpperCase( ).replace( DROP_PATTERN, "" ).replace( SPACE_PATTERN, "_" );
};

module.exports = cobralize;
