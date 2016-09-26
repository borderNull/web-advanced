window.onload = function() {
 var skillsBtn = document.getElementById("skills__btn");

 skillsBtn.addEventListener('click', function() {

 	var data = {
 		"frontend": {
 			"html" : document.getElementById("html").value,
 			"css" : document.getElementById("css").value,
 			"js" : document.getElementById("js").value
 		},
 		"backend": {
 			"php" : document.getElementById("php").value,
 			"nodejs" : document.getElementById("nodejs").value,
 			"mongo.db" : document.getElementById("mongodb").value
 		},
 		"workflow": {
 			"git": document.getElementById("git").value,
 			"gulp": document.getElementById("gulp").value,
 			"bower": document.getElementById("bower").value
 		}
 	};
 	 var xhr = new XMLHttpRequest();
	   xhr.open('POST','/skills');
	   xhr.setRequestHeader('Content-type','application/json; charset=utf8 ');
	   xhr.send(JSON.stringify(data));
 
 });
};