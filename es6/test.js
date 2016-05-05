/**
 * Created by joshuabrown on 5/3/16.
 */
'use strict';
// es6 feature: block-scoped "let" declaration
const sentences = [
    { subject: 'JavaScript', verb: 'is', object: 'great' },
    { subject: 'Elephants', verb: 'are', object: 'large' }
];
// es6 feature: object destructuring
function say( { subject, verb, object } ){
    // es6 feature: template strings
    //console.log( `${subject} ${verb} ${object}` );
    //console.log( subject, verb, object );
}
// es6 feature: for..of
for( let s of sentences ){
    say( s );
}

const now = new Date();
//console.log( now.getTime() );
const numStr = '33.3';
const num = Number( numStr );
//console.log( 'numStr is', numStr, 'num is', num );

//for( let temp, i = 0, j = 1; j < 30; temp = i, i = j, j = i + temp ) console.log( j );

let s = '3';
for(; s.length < 10; s = ' ' + s );  // this actually a for loop!
//console.log( `s is now: ${s}` );

const player = { name: 'Thomas', rank: 'Midshipman', age:'25'};
for( let prop in player ){
    if( !player.hasOwnProperty( prop ) ) continue;  // important for objects you didn't create, omits the prototypes
    //console.log( prop + ': ' + player[ prop ] );
}

// destructuring assignent,
const normal_obj = { b: 2, c: 3, d: 4 };
const { a, b, c } = normal_obj;
//console.log('destructuring { b: 2, c: 3, d: 4 }');
//console.log('a is', a);
//console.log('b is', b);
//console.log('c is', c);

// destructuring assignent, arrays
const normal_arr = [ 'bob', 'dave', 14 ];
let [ guy, other_guy ] = normal_arr;
//console.log( `guy is ${ guy } and other_guy is ${ other_guy }` );

// add a degree sign, or any other unicode you wish:
const my_temp = 21.5;
const temp_msg = `my_temp is ${ my_temp }\u00b0C`;
const unicode_fun_msg = 'three-quarter is \u00be, wonderwoman is \u02ac, Jews say \u05dd\u05dc\u05e9' +
    '  dubsupset dubsubset \u22d0\u22d1, recycle \u2672, radioactive \u2622, beer! \u1f37a';
//console.log( temp_msg );
console.log( unicode_fun_msg );

function f( o ){
    o.messsage = 'set in f';
    o = {
        message: 'new object!'
    };
    console.log(`inside f: o.message = "${o.message}" (after assignment)`);
}
let o = {
    message: 'initial value'
};
console.log(`before calling f: o.message = "${o.message}"`);
f( o );
console.log(`after calling f: o.message = "${o.message}"`);
