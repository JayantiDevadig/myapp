import logo from "./logo.svg";
import "./App.css";
import jay from "./image/jay.jpeg";
import Form from"./components/From";
import ToDoList from "./ToDoList";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
function Profile() {
  return (
    <div>
      <h2>
        <u>PORTFOLIO</u>
      </h2>
      <p> name : jay</p>
      <p> email : jay@gmail.com</p>
      <p>contact : 9972772003</p>
      <img src={jay} />
    </div>
  );
}
function Skills() {
  return (
    <div>
      <h3>
        <u>Skills</u>
      </h3>
      <ul>
        <li> Good communication skills</li>
        <li>Basics of java</li>
        <li>MySQL</li>
        <li>HTML</li>
      </ul>
    </div>
  );
}
function Projects() {
  return (
    <div>
      <h3>
        <u>Projects</u>
      </h3>
      <ul>
        <li>Taxi managements system</li>
        <li>Online college event management</li>
        <li>Atom simulation</li>
        <li>MyMessenger</li>
      </ul>
    </div>
  );
}

function About() {
  return <div>This is about me</div>;
}

function Contact() {
  return <div>Contact me</div>;
}





function Teams() {
    return(
        <div className="a">
        <h2>my team members are:</h2>
        <li>jay</li>
        <li>manasa</li>
        <li>akshata</li>
        <li>neha</li>
        <li>sahana</li>
        <li>teja</li>
        <li>kavya</li>
    
        </div>
    );
  
  }
function NavBar() {
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/teams">Team</Link>
      <Link to="/add-student">add-student</Link>
      <Link to="/to-do-list"> ToDoList</Link>
    
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>

            <Route path="/About" element={<About/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/Teams" element={<Teams/>}></Route>
            <Route path="/add-student" element={<Form/>}></Route>
            <Route path="/to-do-list" element={<ToDoList/>}></Route>
          
        </Routes>
    
      </BrowserRouter>
    </div>
  );
}

export default App;
