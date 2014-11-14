/**
 * Created by Zack Jordan on 11/14/14.
 */

var quotes = [
    {
        quote:"It is our choices that show what we truly are, far more than our abilities.",
        author:"Albus Dumbledore"
    },
    {
        quote:"Anyone who has never made a mistake has never tried anything new.",
        author:"Albert Einstein"
    },
    {
        quote:"If you don't know where you are going, you'll end up someplace else.",
        author:"Yogi Berra"
    },
    {
        quote:"A wise man will make more opportunities than he finds.",
        author:"Francis Bacon"
    },
    {
        quote:"The trouble with most of us is that we would rather be ruined by praise than saved by criticism.",
        author:"Norman Vincent Peale"
    }
];

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