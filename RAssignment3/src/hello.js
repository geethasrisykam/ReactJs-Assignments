import React from 'react'
import data from "./data/data.json"
import Img from './gayatri.jpg';
import './hello.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img from './logo.svg';

export default function hello(props) {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>console.log(data))

    let info = data.profiles[props.location.data.i];
    console.log(info.details);
    return (
        <div>
            <div class="parent">
				<div class="first">
                    <div class="card">
		<               div class="one">
			                <img  src={Img} class="img" alt="sample image"/>
			                <b>

    <p>{info.details.name}</p>
    <p>{info.details.email}</p>
    <p>{info.details.number}</p>
		                    </b>
		                    
		                </div>
                    </div>
                    <hr />
                    <div class="card6">
		                <div class="two">
			            <b>TECH SKILLS:</b>
			            <ul>
    <li>{info.techskills.skills[0]}</li>
    <li>{info.techskills.skills[1]}</li>
    <li>{info.techskills.skills[2]}</li>
    <li>{info.techskills.skills[3]}</li>
    <li>{info.techskills.skills[4]}</li>
    <li>{info.techskills.skills[5]}</li>
    <li>{info.techskills.skills[6]}</li>
    <li>{info.techskills.skills[7]}</li>
    <li>{info.techskills.skills[8]}</li>
    <li>{info.techskills.skills[9]}</li>
    <li>{info.techskills.skills[10]}</li>
    <li>{info.techskills.skills[11]}</li>
    <li>{info.techskills.skills[12]}</li>
			            </ul>
		                </div>
	                </div>	
                    <hr/>
                    <div class="card1">
		                <div class="three"><b>HOBBIES:</b>
		                    <ol class="space">
    <li>{info.hobbies.info[0]}</li>
    <li>{info.hobbies.info[1]}</li>
    <li>{info.hobbies.info[2]}</li>
	                        </ol>
	                    </div>
                    </div>
				</div>
                <div class="second">
		            <div class="card2">
		                <div class="twoone">
				            <b>CARRER OBJECTIVE:</b>
    <p>{info.careerobjective.info}</p>
		                </div>
	                </div>
                    <hr/>
                    <div class="card5">
		<div class="twotwo">
			<b><p>EDUCATIONAL DETAILS:</p></b>
            
			<center>
			<table id="customers">

				<tr>
					<th>SNo</th>
					<th>Course</th>
					<th>College/School</th>
					<th>University/Board</th>
					<th>Year of Pass</th>
					<th>Percentage</th>
				 </tr>
				 <tr>
				 	<td>{info.educationalqualification[0].sno}</td>
				 	<td>{info.educationalqualification[0].institute}</td>
				 	<td>{info.educationalqualification[0].degree}</td>
				 	<td>{info.educationalqualification[0].university}</td>
				 	<td>{info.educationalqualification[0].passoutyear}</td>
				 	<td>{info.educationalqualification[0].percentile}</td>

				 </tr>
				 <tr>
                 <td>{info.educationalqualification[1].sno}</td>
				 	<td>{info.educationalqualification[1].institute}</td>
				 	<td>{info.educationalqualification[1].degree}</td>
				 	<td>{info.educationalqualification[1].university}</td>
				 	<td>{info.educationalqualification[1].passoutyear}</td>
				 	<td>{info.educationalqualification[1].percentile}</td>

				 	
				 </tr>
				 <tr>
                 <td>{info.educationalqualification[2].sno}</td>
				 	<td>{info.educationalqualification[2].institute}</td>
				 	<td>{info.educationalqualification[2].degree}</td>
				 	<td>{info.educationalqualification[2].university}</td>
				 	<td>{info.educationalqualification[2].passoutyear}</td>
				 	<td>{info.educationalqualification[2].percentile}</td>

				 	
				 </tr>
			</table>
			</center>
		</div>
	</div>
    <hr/>
    <div class="card3">
		<div class="twothree">
			<b><p>PROJECTS</p></b>
			<ul>
				
    <li>{info.projects.info[0]}</li>
    <li>{info.projects.info[1]}</li>
    <li>{info.projects.info[2]}</li>
    <li>{info.projects.info[3]}</li>
			</ul>
		</div>
	</div>
    <hr/>
    <div class="card4">
    <div class="twofour"><b>DECLARATION</b><p><input type="checkbox" /> <b>{info.declaration.info} </b>{info.declaration.info1}</p></div>

    </div>
    
                </div>
            </div>
        </div>
    )
}
