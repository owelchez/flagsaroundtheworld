function clock()
{
	$('#start').on('click', stopwatch.start);
};

var stopwatch = 
{
	time:0,
	lap:1,
	reset: function()
	{
	    stopwatch.time = 0;
	    stopwatch.lap = 1;
	    $('#timer').html('00:00');
	    $('#laps').html('');
	},
    start: function()
    {
    	$('#start').on('click', function(){
        	$('#start').hide();
        })
        counter = setInterval(stopwatch.count, 1000);
    },
    
    count: function()
    {
        stopwatch.time++;
        var converted = stopwatch.timeConverter(stopwatch.time);
        $('#timer').html(converted);
    },

    timeConverter: function(t)
    {
        var minutes = Math.floor(t/60);
        var seconds = t - (minutes * 60);
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        if (minutes === 0){
            minutes = "00";
        } else if (minutes < 10){
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    }
};

clock();

$('#start').on('click', function(){
        	$('#start').hide();
        })

$('.hideWrapper').hide();





/*$('div:not(#myDiv)').hide();  // hide everything that isn't #myDiv
$('#myDiv').appendTo('body');  // move #myDiv up to the body*/














if(document.getElementById('gender_Male').checked) {
  //Male radio button is checked
}else if(document.getElementById('gender_Female').checked) {
  //Female radio button is checked
}