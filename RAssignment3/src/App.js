import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import './App.css';
import Hello from "./hello";
import {Route,Link, BrowserRouter} from 'react-router-dom';
import data from './data/data.json';
import Img from './gayatri.jpg';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Route exact path="/" component={Wish} />
         <Route path="/Hello" component={Hello} />
         </BrowserRouter>
    </div>
  );
}
let Wish=()=>{
  let  detail = data.profiles;
  console.log(detail);
  return (
    <div className="row justify-content-center">
     
      {detail.map((value,index)=> (
        <div className="col-sm-10 col-md-4 col-lg-4 mt-1 card container-fluid d-flex justify-content-center" key={index}>
         
          <div className="text-center">
            <div className="card-body text-dark">
              <h1>{value.details.name}</h1>
              <div className="overflow">
                <img src={Img} alt="image1" className="card-img-top"/>
              </div>
             
              <Link to={{pathname:'/hello', data:{i:index}}} className="btn btn-outline-success">Profile</Link>
            </div>
          </div>
          </div>
      ))}
    </div>
  );
}

export default App;
