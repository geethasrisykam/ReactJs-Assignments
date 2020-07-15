//function loadjson(file,callback) {
// var xhr=new XMLHttpRequest();
// xhr.overrideMimeType("application/json");
// xhr.open("GET",file,true);
// xhr.onreadystatechange=function(){
// if(xhr.readyState === 4 && xhr.status == "200"){
// callback(xhr.responseText);
// }
// };
// xhr.send(null);
// body...
//}
//loadjson("data.json",function (text) {
// // body...
// var data=JSON.parse(text);//serilization--serilize the data
// console.log(data);//display in the console
// basic(data.details);
// careerinfo(data.careerobjective);
// education(data.educationalqualification);
// skills(data.technicalskills);
//})

function loadjson(file){
return new Promise((resolve,reject)=>{
return fetch(file).then (response=>{
if(response.ok){
resolve(response.json());
}
else{
reject(new Error('error'));
}
})
})
}
var newfile=loadjson("data1.json");
newfile.then(data1=>{
console.log(data1);
basic(data1.details);
careerinfo(data1.careerobjective);
education(data1.educationalqualification);
skills(data1.projects);
techskills(data1.techskills);
hobbies(data1.hobbies);
declaration(data1.declaration);
})
 var child1=document.querySelector(".child1");
 function basic(det) {
  var image=document.createElement("img");
  image.src="images/img.jpg";
  child1.appendChild(image);

  var name=document.createElement("h4");
  name.textContent=det.name;
  child1.appendChild(name);
  // body...
  var email=document.createElement("a");
  email.href="mailto:geethasrisykam585c@gmail.com";
  email.textContent=det.email;
  child1.appendChild(email);

  var number=document.createElement("h4");
  number.textContent=det.number;
  child1.appendChild(number);
  
  child1.appendChild(document.createElement("hr"));
  
 }

 function techskills(info1) {
  var heading1=document.createElement("h5");
  heading1.textContent="Tech Skills : ";
  child1.appendChild(heading1);
  
  for(i=0;i<info1.skills.length;i++){
    var title=document.createElement("li");
  title.textContent=info1.skills[i];
  child1.appendChild(title);
    }
    
    child1.appendChild(document.createElement("hr"));
 }

  function hobbies(info1) {
    var heading1=document.createElement("h5");
  heading1.textContent="Hobbies : ";
  child1.appendChild(heading1);
  
  
  for(i=0;i<info1.info.length;i++){
    var title=document.createElement("li");
  title.textContent=info1.info[i];
  child1.appendChild(title);
    }
 }


 var child2=document.querySelector(".child2");
 function careerinfo(info1){
  var heading=document.createElement("h5");
  heading.textContent="Career Objective : ";
  child2.appendChild(heading);
  
  var p=document.createElement("p");
  p.textContent=info1.info;
  child2.appendChild(p);
  child2.appendChild(document.createElement("br"));
  child2.appendChild(document.createElement("hr"));
 }
 function education(edu){
  var heading1=document.createElement("h5");
  heading1.textContent="Educatational Details : ";
  child2.appendChild(heading1);
  
  var table1=document.createElement("table");
  table1.border="1";
  child2.appendChild(table1);

  tabledata="";
  tabledata+="<tr><th>"+"SNO"+"</th><th>"+"College/School"+"</th><th>"+"Course"+"</th><th>"+"University/Board"+"</th><th>"+"Year Of Pass"+"</th><th>"+"Percentile"+"</th></tr>"
  for(i=0;i<edu.length;i++){
  tabledata+="<tr><td>"+edu[i].sno+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>" + edu[i].university + "</td><td>"+edu[i].passoutyear+"</td><td>"+edu[i].percentile+"</td></tr>";
  }
  table1.innerHTML=tabledata;
  child2.appendChild(document.createElement("br"));
  child2.appendChild(document.createElement("hr"));
 }
 function skills(info1){
 
  var heading1=document.createElement("h5");
  heading1.textContent="Projects : ";
  child2.appendChild(heading1);
  
  for(i=0;i<info1.info.length;i++){
    var title=document.createElement("li");
  title.textContent=info1.info[i];
  child2.appendChild(title);
    }
    child2.appendChild(document.createElement("br"));
    child2.appendChild(document.createElement("hr"));
 

 }
 function declaration(info1){
  var heading1 = document.createElement("h5");
  heading1.textContent="Declaration : ";
  child2.appendChild(heading1);
  child2.appendChild(document.createElement("input"))
  var title=document.createElement("h4");
  title.textContent=info1.info;
  child2.appendChild(title);
 }