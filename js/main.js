function homago_feed(){
    console.log("grabbing some hangouts");

    var allEvents = [''];

    $.getJSON("/js/events.json", function(data) {
        console.log("hellooooo the json is hurr");

        var events = data.events;
        var numOfEvents = data.events.length;
        for(i=0; i < numOfEvents; i++) {
            event = events[i];
            eventRow = "<tr><td>" + event.category.name + "</td><td>" + event.name + "</td></li>";
            allEvents.push(eventRow);
        }
        document.getElementById("homago-feed").innerHTML = allEvents;
        console.log(allEvents);
    })
        .error(function(j, t, e) { console.log(e);})
    return false;
}

$(document).ready(function(){
    homago_feed();
});
