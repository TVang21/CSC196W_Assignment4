

function bigger() {
    // alert("hello world!");
    document.getElementById("bigButton");
    document.getElementById("textArea").style.fontSize = "24pt";
    

}


function fancyText() {
    document.getElementById("fancify");
    document.getElementById("textArea").style.fontFamily = "cursive";
    document.getElementById("textArea").style.fontWeight = "bold";
    document.getElementById("textArea").style.color = "blue";
    document.getElementById("textArea").style.backgroundColor = "beige";
    document.getElementById("textArea").style.textDecoration = "underline";

}

function boringText() {
    document.getElementById("boringBen");
    document.getElementById("textArea").style.fontFamily = "inherit";
    document.getElementById("textArea").style.fontSize = "inherit";
    document.getElementById("textArea").style.fontWeight = "inherit";
    document.getElementById("textArea").style.color = "inherit";
    document.getElementById("textArea").style.backgroundColor = "inherit";
    document.getElementById("textArea").style.textTransform = "inherit";
    document.getElementById("textArea").style.textDecoration = "inherit";
}


function moo() {
    document.getElementById("mooButton");
    document.getElementById("textArea").style.textTransform = "uppercase";
    addMoo();
}

function addMoo() {
    var moo = '-Moo';
    var str = document.getElementById("textArea").value;
    var parts = str.split(".");
    str = parts.join(moo);
    document.getElementById("textArea").value = str + ".";
}

function alertFunction() {
    alert("That's too fancy!");
}
