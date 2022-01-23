

$("body").html("<div class='container'><span id='day'></span><span id='hours'></span><span id='doubleDots'>:</span><span id='minutes'></span><span id='doubleDots'>:</span><span id='seconds'></span><span id='amPm'></span></div>");

let dateNow = new Date();
let daysName = ["SUN","MON","TUE","WED","TH","FR","SAT"];
console.log(dateNow);
clock();
setInterval(clock,1000);



function clock(){
        dateNow = new Date();
        if(dateNow.getHours()>12){
            hoursNow = dateNow.getHours()-12;
        } else {
            hoursNow = dateNow.getHours();
        }

        if(dateNow.getHours()<12)  $("#amPm").html("&nbsp;AM&nbsp;");
        else  $("#amPm").html("&nbsp;PM&nbsp;");
        

        $("#day").html("&nbsp;"+daysName[dateNow.getDay()]+"&nbsp;");

        if(hoursNow<=9){
            $("#hours").html("0"+hoursNow);
        } else {
            $("#hours").html(hoursNow);
        }

        if(dateNow.getMinutes()<=9){
            $("#minutes").html("0"+dateNow.getMinutes());
        } else {
            $("#minutes").html(dateNow.getMinutes());
        }
    
        if(dateNow.getSeconds()<=9){
            $("#seconds").html("0"+dateNow.getSeconds());
        } else {
            $("#seconds").html(dateNow.getSeconds());
        }
 
}
