/**
 * Created by joshuabrown on 5/3/16.
 */
'use strict';

//reduce!  It's a powerful map feature.
const words = [ 'Beachball',
    'Rodeo',
    'Angel',
    'Aardvark',
    'Xylophone',
    'November',
    'Chocolate',
    'Papaya',
    'Uniform',
    'Joker',
    'Clover',
    'Bali' ];
const alphabetical = words.reduce( ( a, x ) => {
    if( ! a[ x[ 0 ] ] ) a[ x[ 0 ] ] = [ ];
    a[ x[ 0 ]].push( x );
    return a;
}, {}  );

console.log( 'alphabetical is', alphabetical );

//let barry = new Array( 16 ).fill( 0 );
//console.log( 'barry before digitty  map', barry );
//const one_barry = barry.map( ()=>1);
//console.log( 'maps can be used by smart-asses instead of fill to be abstruse', one_barry );
//one_barry.fill( 'filler', 8 );
//console.log( 'one_barry doing some filler...', one_barry );


// filter it
//const cards = [];
//for( let suit of ['\u2665', '\u2663', '\u25c6', '\u2660'] ){
//    for( let value = 1; value < 13; value++ ){
//        cards.push( { suit, value } );
//    }
//}
//
//const face_enabled = cards.map( ( ( x )=>{
//    switch( x.value ){
//        case 1:
//            x.value = 'A';
//            break;
//        case 10:
//            x.value = 'J';
//            break;
//        case 11:
//            x.value = 'Q';
//            break;
//        case 12:
//            x.value = 'K';
//            break;
//        default:
//            // shouldn't be here!
//            break;
//    }
//    return { suit: x.suit, value: x.value };
//} ) );
//
//console.log( 'ace_enabled is', face_enabled );
//
//const just_twos = cards.filter( c => c.value === 2 );
//const just_kings = face_enabled.filter( c => c.value === 'K' );
//console.log( just_twos );
//console.log( just_kings );

//// map it.
//const items = [ 'hairbrush', 'Lexus' ];
//const prices = [ 5, 50000 ];
//console.log( 'items are', items, 'prices are', prices );
//// no combine them into a super array
//const new_arr = items.map( ( x, i ) => ( { item: x, price: prices[ i ] } )  );
//console.log( 'new_arr is', new_arr );

//const arr = [ 5, 7, 12, 15, 17.5, 36 ];
//console.log( arr.some( x => x%2 === 0 ) );  // report if there any elements that are divisible by two
////console.log( arr.some( x => Number.isInteger( Math.sqrt( x ) ) ) );  // is there a square, in there?
//console.log( arr.every( x => Number.isInteger( x ) ) );  // test them all!

//const arr = [ { name: 'Suzanne' }, { name: 'Victor' }, { name: 'Bob', age: 41 } ];
////arr.sort( ( a, b ) => a.name < b.name ) ;
//console.log( 'arr findIndex of Victor', arr.findIndex( o => o.name === 'Victor' ) );
//console.log( 'arr findIndex of Suzanne', arr.findIndex( o => o.name === 'Suzanne' ) );
//console.log( 'arr findIndex of age: 41', arr.findIndex( o => o.age === 41) );
//console.log( 'the arr is now', arr );

//let arr = ['a', 'b', 'c'];
//let result = arr.concat( 4, 5, 6 ); // returns
//console.log( 'result after concat is', result, 'and arr is now', arr );
//arr = result.slice( -4, -3 );
//console.log( 'arr after slice is', arr, 'and result is now', result );

//const arr = ['a', 'b', 'c'];
//let result = arr.push( 'e' );
//console.log( 'result is', result, 'and arr is now', arr ); // returns the new value of array.length().
//result = arr.pop(); // returns the value of the element popped
//console.log( 'result after pop is', result, 'and arr is now', arr );
//result = arr.shift(); // returns
//console.log( 'result after shift is', result, 'and arr is now', arr );
//result = arr.unshift('Z'); // returns
//console.log( 'result after unshift is', result, 'and arr is now', arr );

//const message = ( function(){
//    const secret = "I'm a secret";
//    return `The secret is ${ secret.length } characters long.`;
//})();
//console.log( message );
//
//const f = ( function(){
//    let count = 0;
//    return function(){
//        return `I have been called ${ ++count } time(s)`;
//    };
//})();
//console.log( f() );
//console.log( f() );
//console.log( f() );
//console.log( f() );

//{
//    // outer block
//    let x = { color: 'blue'};
//    let y = x;
//    let z = 3;
//    {
//        // inner block
//        let x = 5;
//        console.log( `x inner block is ${ x }`);
//        console.log(y.color);
//    }
//    console.log( `x outer block after inner block is ${ x }`);
//}
//console.log( 'typeof x', typeof( x ));

//let user = { name: 'Irena', age: 25 };
//
//function greet( user ){
//    console.log(`Hello, ${ user.name }`);
//}
//function getBirthYear( user ){
//    return new Date().getFullYear() - user.age;
//}
//
//greet( user );
//console.log( user.name, 'was born on or about', getBirthYear( user ) );

//const bruce = { name: 'Bruce', age: '33' };
//const madeline = { name: 'Madeline', age: '23' };
//
//function greet(){
//    return `Hello, I'm ${ this.name }`;
//}

//console.log( greet() );  // failure
//console.log( greet( bruce ) );  // failure
//console.log( greet( madeline ) );  // failure
//console.log( greet.call( bruce ) );
//console.log( greet.call( madeline ) );

// call is all about using a function as if it was a method
// you then pass more arguments, if greet wants two arguments, greet.call( bruce, arg1, arg2 );

//function updater( birth_year, occupation ){
//    this.birth_year = birth_year;
//    this.occupation = occupation;
//}
//
//console.log( 'bruce is\n', bruce, '\nbefore updater' );
//updater.call( bruce, 1949, 'architect' );
//console.log( 'bruce is\n', bruce, '\nafter updater' );

// apply is similar but arguments are passed as an array
//console.log( Math.min.apply( null, arr ) );
//console.log( Math.min.apply( bruce, arr ) ); // doing an apply to bruce at random cause don't matter
//console.log( Math.min( arr ) );
//console.log( Math.max.apply( null, arr ) );

// es6 feature: block-scoped "let" declaration
//const sentences = [
//    { subject: 'JavaScript', verb: 'is', object: 'great' },
//    { subject: 'Elephants', verb: 'are', object: 'large' }
//];
// es6 feature: object destructuring
//function say( { subject, verb, object } ){
//     es6 feature: template strings
//    console.log( `${subject} ${verb} ${object}` );
//    console.log( subject, verb, object );
//}
// es6 feature: for..of
//for( let s of sentences ){
//    say( s );
//}

//const now = new Date();
//console.log( now.getTime() );
//const numStr = '33.3';
//const num = Number( numStr );
//console.log( 'numStr is', numStr, 'num is', num );

//for( let temp, i = 0, j = 1; j < 30; temp = i, i = j, j = i + temp ) console.log( j );

//let s = '3';
//for(; s.length < 10; s = ' ' + s );  // this actually a for loop!
////console.log( `s is now: ${s}` );
//
//const player = { name: 'Thomas', rank: 'Midshipman', age:'25'};
//for( let prop in player ){
//    if( !player.hasOwnProperty( prop ) ) continue;  // important for objects you didn't create, omits the prototypes
//    //console.log( prop + ': ' + player[ prop ] );
//}

// destructuring assignent,
//const normal_obj = { b: 2, c: 3, d: 4 };
//const { a, b, c } = normal_obj;
//console.log('destructuring { b: 2, c: 3, d: 4 }');
//console.log('a is', a);
//console.log('b is', b);
//console.log('c is', c);

// destructuring assignent, arrays
//const normal_arr = [ 'bob', 'dave', 14 ];
//let [ guy, other_guy ] = normal_arr;
//console.log( `guy is ${ guy } and other_guy is ${ other_guy }` );

// add a degree sign, or any other unicode you wish:
//const my_temp = 21.5;
//const temp_msg = `my_temp is ${ my_temp }\u00b0C`;
//const unicode_fun_msg = 'three-quarter is \u00be, wonderwoman is \u02ac, Jews say \u05dd\u05dc\u05e9' +
//    '  dubsupset dubsubset \u22d0\u22d1, recycle \u2672, radioactive \u2622, beer! \u1f37a';
//console.log( temp_msg );
//console.log( unicode_fun_msg );
//
//function f( o ){
//    o.messsage = 'set in f';
//    o = {
//        message: 'new object!'
//    };
//    console.log(`inside f: o.message = "${o.message}" (after assignment)`);
//}
//let o = {
//    message: 'initial value'
//};
//console.log(`before calling f: o.message = "${o.message}"`);
//f( o );
//console.log(`after calling f: o.message = "${o.message}"`);
//
//function spread_em( ...bobs ){
//    for( let i = 0; i < bobs.length; i++ ){
//        console.log('and the bob is', bobs[ i ] );
//    }
//}
//spread_em( 'tom', 'dick', 'harry', 100 );

//function g( a, b = 'yowza!', c = 3 ){
//    return `${ a } - ${ b } - ${ c }`;
//}
//function loggy( msg ){
//    console.log( msg );
//}
//
//loggy( g() );
//loggy( g( 10, 20, 30 ) );
//loggy( g( {},'not-yowza!', 'bob' ) );

// ES6 function literal shorthand for methods:
//const foo = {
//  name: 'bar',
//    say_name(){ console.log( 'my name is', this.name ); }
//};
//
//foo.say_name();
//
//const f1 = () => 'hello';
//console.log( 'f1 says', f1() );
//
//
//const f2 = name => `${ name }`;
//console.log( 'f2 says', f2( 'Banana') );
//
//const f3 = name => `Hello, you have passed ${ name } as an argment`;
//console.log( f3( 'giraffe') );
//
//const f4 = ( a, b ) => a + b;
//console.log( f4( 3, 4 ) );



