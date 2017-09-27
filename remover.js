var currentLocation = window.location;
var selector_name = '';

switch (currentLocation.host) {
    case "m.huffpost.com":
    case "huffpost.com":    
    case "huffingtonpost.co.uk":
    case "huffingtonpost.com":
    selector_name = '.read-more-link';
    break;
}

if (selector_name) {
    document.addEventListener("DOMContentLoaded", function(event) {
        var read_more = document.querySelector(selector_name);
        read_more.click()
    });
}