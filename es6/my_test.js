/**
 * Created by joshuabrown on 5/3/16.
 */
'use strict';

const EventEmitter = require('events').EventEmitter;

class CountDown extends EventEmitter{
    constructor( seconds, superstitious ){
        super();
        this.seconds = seconds;
        this.superstitious = !!superstitious;
    }
    go(){
        const countdown = this;
        const timeoutIds = [];
        return new Promise(function(resolve, reject){
            for(let i = countdown.seconds; i >= 0; i-- ){
                timeoutIds.push( setTimeout(function(){
                        if( countdown.superstitious && i === 13 ){
                            timeoutIds.forEach( clearTimeout );
                            return reject( new Error('not counting that one!'));
                        }
                        countdown.emit('tick', i );
                        if( i === 0 ) resolve();
                }, ( countdown.seconds - i ) * 1000 ) );
            }
        });
    }
}

function launch (){
    return new Promise(function( resolve, reject ){
        console.log('liftoff!');
        if( Math.random()>.5 ){
            // failure condition selected!
            reject('broke!');
        }
        setTimeout(function(){
            resolve('in orbit!');
        }, 2*1000 );
    });
}

const mission = new CountDown( 5, false )
    .on( 'tick', function( i ){
        if( i > 0 ) console.log( i + '...');
    });

mission.go()
    .then( launch )
    .then( function(msg){
        console.log(msg);
    })
    .then( function(){
        console.log('go!');
    })
    .catch(function(err){
        console.log('houston, we have a problem', err.message);
    });