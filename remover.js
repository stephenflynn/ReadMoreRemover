var currentLocation = window.location;
var selector_name = '';

switch (currentLocation.hostname) {
    case "www.aol.com":
    case "aol.com":
        selector_name = '.article-show-more';
    break; 
    case "m.huffpost.com":
    case "www.huffpost.com":    
    case "www.huffingtonpost.co.uk":
    case "www.huffingtonpost.com":
    case "huffpost.com":    
    case "huffingtonpost.co.uk":
    case "huffingtonpost.com":    
        selector_name = '.read-more-link';
    break;
    case "www.inquisitr.com":
        selector_name = '.inq-article-readmore--btn';
    break;
    case "www.qz.com":
    case "qz.com":
        selector_name = '.read-full-story-button';
    break;   
    case "www.thejournal.ie":
        selector_name = '#readmore';
    break;     
}

if (selector_name) {
        var read_more = document.querySelector(selector_name);
        read_more.click();
}