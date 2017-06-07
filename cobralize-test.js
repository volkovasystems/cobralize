
const assert = require( "assert" );
const cobralize = require( "./cobralize.js" );

assert.equal( cobralize( "Hello World" ), "HELLO_WORLD", "should have value 'HELLO_WORLD'" );

assert.equal( cobralize( "hello_world" ), "HELLO_WORLD", "should have value 'HELLO_WORLD'" );

assert.equal( cobralize( "helloWorld" ), "HELLO_WORLD", "should have value 'HELLO_WORLD'" );

assert.equal( cobralize( "hello world" ), "HELLO_WORLD", "should have value 'HELLO_WORLD'" );

console.log( "ok" );
