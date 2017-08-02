
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

const assert = require( "should" );

//: @server:
const cobralize = require( "./cobralize.js" );
//: @end-server





//: @server:


describe( "cobralize", ( ) => {
	
	describe( `"cobralize( "Hello World" )"`, ( ) => {
		it( "should have value 'HELLO_WORLD'", ( ) => {

			assert.equal( cobralize( "Hello World" ), "HELLO_WORLD" );

		} );
	} );

	describe( `"cobralize( "hello_world" )"`, ( ) => {
		it( "should have value 'HELLO_WORLD'", ( ) => {

			assert.equal( cobralize( "hello_world" ), "HELLO_WORLD" );

		} );
	} );

	describe( `"cobralize( "helloWorld" )"`, ( ) => {
		it( "should have value 'HELLO_WORLD'" , ( ) => {

			assert.equal( cobralize( "helloWorld" ), "HELLO_WORLD" );

		} );
	} );

	describe( `"cobralize( "hello world" )"`, ( ) => {
		it( "should have value 'HELLO_WORLD'", ( ) => {

			assert.equal( cobralize( "hello world" ), "HELLO_WORLD" );

		} );
	} );
	
} );

//: @end-server







