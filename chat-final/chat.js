// setTimeout(function(){
    // var username = prompt("What would you like your username to be?");},2000);

function send(){
    var item = document.getElementById("chat");
    var list = document.getElementById("chat2");
    var listitem = document.createElement("li");
    listitem.appendChild(document.createTextNode(item.value));
    list.appendChild(listitem);
    item.value='';
    
    
}   

