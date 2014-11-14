/**
 * Created by Zack Jordan on 11/14/14.
 */

var quotes = quotes.quotes;

function $(id) {
    return document.getElementById(id);
}

window.onload = function() {
    $("quote").innerHTML = "";
    $("author").innerHTML = "";

    showQuote();
}

function showQuote() {
    var id = Math.floor(Math.random() * quotes.length);
    var quoteObject = quotes[id];

    $("quote").innerHTML = quoteObject.quote;
    $("author").innerHTML = quoteObject.author;
}