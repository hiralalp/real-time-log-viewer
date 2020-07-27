
$(document).ready(function(){
    //connect to the socket server.
    var socket = io.connect('http://' + document.domain + ':' + location.port + '/test');
    //var numbers_received = [];

    //receive details from server
    socket.on('newnumber', function(msg) {
        console.log("Received number" + msg.number);
        //maintain a list of ten numbers
        //if (numbers_received.length >= 1){
        //    numbers_received.shift()
        //}            
        //numbers_received.push(msg.number);
        numbers_string = '';
        for (var i = 0; i < msg.number.length; i++){
            numbers_string = numbers_string + '<p>' + msg.number[i].toString() + '</p>';
        }
        $('#log').html(numbers_string);
    });

});