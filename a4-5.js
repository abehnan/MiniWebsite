function clickMe() {
    var inputColor = prompt("Please enter a new background color:\nThe accepted options are 'red' or 'blue'.", "");
    if (inputColor == 'red') {
        document.getElementById("loginbar").style.backgroundColor = 'rgb(77, 4, 4)';
        document.getElementById("titlebar").style.backgroundColor = 'rgb(170, 23, 23)';
        document.getElementById("menubar").style.backgroundColor = 'rgb(206, 73, 73)';
        document.getElementById("bottombox").style.backgroundColor = 'rgb(77, 4, 4)';
        document.getElementById("categories").style.backgroundColor = '#994747';
    }
    else if (inputColor == 'blue') {
        document.getElementById("loginbar").style.backgroundColor = '#15315e';
        document.getElementById("titlebar").style.backgroundColor = '#145bce';
        document.getElementById("menubar").style.backgroundColor = '#588de2';
        document.getElementById("bottombox").style.backgroundColor = '#15315e';
        document.getElementById("categories").style.backgroundColor = '#90b1e5';
    }
    else {
        alert("The only accepted colors are: 'red' or 'blue'");

    }
}
