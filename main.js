/**
 * Created by joshuabrown on 5/2/16.
 */
document.addEventListener('DOMContentLoaded', function (event) {
    'use strict';
    paper.install( window );
    paper.setup( document.getElementById('mainCanvas') );

    //var c;
    //for( var x = 25; x < 400; x += 50 ){
    //    for( var y = 25; y < 400; y += 50 ){
    //        c = Shape.Circle( x, y, 20 );
    //        c.fillColor = 'green';
    //    }
    //}

    var tool = new Tool();

    var c = Shape.Circle( 200, 200, 100 );
    c.fillColor = 'black';
    var text = new PointText( 200, 200 );
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 35;
    text.content = 'hello world';

    tool.onMouseDown = function( event ){
        c = Shape.Circle( event.point, 20 );
        c.fillColor = 'green';
    };

    paper.view.draw();

} );