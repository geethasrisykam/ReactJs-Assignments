function loadjson(file,callback) {
 var xhr = new XMLHttpRequest();
 xhr.overrideMimeType("application/json");
 xhr.open("GET",file,true);
 xhr.onreadystatechange=function(){
  if(xhr.readyState === 4 && xhr.status == "200"){
   callback(xhr.responseText);
  }
 };
 xhr.send(null);
}

loadjson("data.json",function(text){
 var data = JSON.parse(text); // serialised data
 console.log(data);
 basic(data.details);
 basic1(data.details1);
})
var child1 = document.querySelector(".child1");
function basic1(det){
 var image = document.createElement("img");
 image.src="images/img.jpg";
 child1.appendChild(image);

 var name = document.createElement("h4");
 name.textContent="Name : " + det.name;
 child1.appendChild(name);
 child1.appendChild(document.createElement("br"));

 var email = document.createElement("a");
 email.href="mailto:geethasrisykam585c@gmail.com";
 email.textContent="Email : " + det.email;
 child1.appendChild(email);
 child1.appendChild(document.createElement("br"));
 var phoneno = document.createElement("h4");
 phoneno.textContent="Phone no : " + det.phoneno;
 child1.appendChild(phoneno);
 //document.body.innerHTML = "<button >Today's date is</button>"

}

var child2 = document.querySelector(".child2");
function basic(det){
 var image = document.createElement("img");
 image.src="images/img.jpg";
 child2.appendChild(image);

 var name = document.createElement("h4");
 name.textContent="Name : " + det.name;
 child2.appendChild(name);
 child2.appendChild(document.createElement("br"));

 var email = document.createElement("a");
 email.href="mailto:geethasrisykam585c@gmail.com";
 email.textContent="Email : " + det.email;
 child2.appendChild(email);
 child2.appendChild(document.createElement("br"));

 var phoneno = document.createElement("h4");
 phoneno.textContent="Phone no : " + det.phoneno;
 child2.appendChild(phoneno);//document.body.innerHTML = "<button >Today's date is</button>"
}


