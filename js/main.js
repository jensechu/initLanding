function homago_feed(){
    console.log("grabbing some hangouts");

    $.getJSON("js/events.json", function(data) {
        console.log("hellooooo the json is hurr");

        var events = data.events;
        var numOfEvents = data.events.length;
        for(i=0; i < numOfEvents; i++) {
            event = events[i];
            startsAt = new Date(event.starts_at * 1000).toLocaleString();
            eventRow = "<tr><td>" + event.category.name + "</td><td>  <a href='" + event.url + "'>" + event.name + "</a></td><td>" + startsAt + "</td></tr>";
            $("#homago-feed").append(eventRow);
        }
    })
        .error(function(j, t, e) { console.log(e);})
    return false;
}

$(document).ready(function(){
    $(document).foundation();
    homago_feed();
});
