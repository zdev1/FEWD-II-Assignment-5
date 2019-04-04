/*eslint-env browser*/

//STEP 1
function onClick() {
    "use strict";
    window.alert("I have been clicked");
}

//STEP 2
window.document.getElementById("button1").onclick = onClick;

//STEP 3
window.document.getElementById("button2").addEventListener("click", onClick);

//STEP 4
window.document.getElementById("button3").addEventListener("click", function () {
    "use strict";
    window.alert("I have been clicked");
});

//STEP 5
function button4func () {
    
 window.document.getElementById("button4").addEventListener("click", function() {
        "use strict";
        window.alert("I have been clicked");
    });
}

 window.addEventListener("load", button4func);

//STEP 6
window.document.getElementById("redirect").addEventListener("click", function (e) {
    e.preventDefault();
    alert("You're trying to go to Google, but you should stay here!")
})

//STEP 7
window.document.getElementById("button5").addEventListener("click", function() {
    window.document.getElementById("button5"). disabled = true;
    var button5Text =
    window.document.getElementById("text1").value;
    window.alert(button5Text);
});

//STEP 8
window.document.getElementById("newPage").addEventListener("click", function ()  {
    nextPage();
});
function nextPage() {
  nextPg = window.open("newpage.html, ", "width=300,height=300");
    nextPg.addEventListener("load", function () {
        onresizenextPage();
    });
}
function onresizenextPage() {
    nextPg.resizeTo(500, 300);
}

//STEP 9
var javaScript;
function javascriptAlert () {
    "use strict";
    window.console.log("I'm learning JavaScript");
}
function start() {
    "use strice"
    javaScript = window.setInterval(javascriptAlert, 2000);
}
function stop() {
    "use strict"
    window.clearInterval(javaScript);
}

window.document.getElementById("2buttons").addEventListener("click", function () {
    console.log(srcElement.value);
    if (srcElement.value == "Stop!") {
    } else if (srcElement.value == "Start") {
        start();    
}
});


//STEP 10
