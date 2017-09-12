window.onload=init;
function init () {
  var button=document.getElementById("addButton");
  button.onclick=handleButtonClik;
  loadPlaylist();
}
function handleButtonClik() {
  var textInput=document.getElementById("songTextInput");
  var songName=textInput.value;
  if (songName=="") {
    alert("Please enter a Song name");
  } else {
    var li=document.createElement("li");
    li.innerHTML =songName;
    var ul=document.getElementById("playlist");
    ul.appendChild(li);
    save(songName);
  }
}
