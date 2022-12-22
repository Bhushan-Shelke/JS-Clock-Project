setInterval(showTime, 1000);

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
 
    if (hour >= 12) {
        hour = hour - 12;
        am_pm = "PM";
    }
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    document.getElementById("hour")
            .innerHTML = hour;
            document.getElementById("min")
            .innerHTML = min;
            document.getElementById("sec")
            .innerHTML = sec;
            document.getElementById("ok").innerHTML = am_pm;}