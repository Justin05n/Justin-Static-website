var today = new Date();
var hourNow = today.getHours;
var greeting;

if (hourNow > 18){//6:00 pm
    greeting = "Good afternoon";

}else if (hourNow > 12){//12:00 pm
    greeting = "Good evening";

}else if (hourNow > 0 ){//12:00 midnight
    greeting = "Good morning";
}else{
    greeting = today;
}

document.write('<h3> ' + greeting + '</h3>');
var continer = document.getElementById('container');
var button=document.getElementById('close');

button.click(function(e){
    container.hide();
}
)