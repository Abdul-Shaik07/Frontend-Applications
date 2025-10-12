import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  
  // const [count, setCount] = useState(0)

  // const isLoggedIn = true;
  // const prompt = prompt("enter the value");

  // const element = <h1>{isLoggedIn ? "Welcome back!" : "Please log in again"}</h1>

  // const messages = ["0", "telugu"];

  // if(isLoggedIn) {
  //   return <h1>Welcome back!</h1>
  // }
  // return <h1>Please log in again</h1>

  // const fullName = "Shaik Abdul";
  // const profession = "Java Developer";
  // const contact = "abdulabbu@gmail.com";
  
  
  
  const details = {
    fullName: "Shaik Abdul",
    profession: "Java Developer",
    contact: "abdulabbu@gmail.com",
    linkedin: "https://www.linkedin.com/in/shaikabdul07/",
    github: "https://github.com/Abdul-Shaik07"
  }
  //destructing with props 
  const {fullName, profession, contact, linkedin, github} = details;

  const navItems = [
      {
        label: "About",
        href: "#about"
      },
      {
        label: "Projects",
        href: "#projects"
      },
      {
        label: "Contact",
        href: "#contact"
      }
    ]

  const projects = [
    {
      title: "AI Powered Health Care App",
      technologies: "Java, Springboot, MicroServices, React, MySQL, MongoDB, PostgreSQL",
      link: "https://mail.google.com/mail/u/0/#inbox/FMfcgzQcpwknVLmmlwfZwrwbVJcbtPDt"
    },
    {
      title: "Microservices based E-commerce App",
      technologies: "Java, Springboot, MicroServices, MySQL",
      link: "https://github.com/"
    }
  ]
  
  return (
    <>
      <div className="portfolio">
        <Header details={details} navItems={navItems}/>
        <About details={details}/>
        <Projects projects={projects}/>
        <Contact contact = {contact}/>
        <Footer/>
      </div>

    {/* {element}
    {messages.length > 0 && <h1>You have {messages.length} unread messages</h1>} */}
    {/* {isLoggedIn && <h1>Welcome back!</h1>} */}
    
    {/* <button className='button' onClick={() => {prompt}}>click me!</button> */}

      {/* <table style={{border: '2px solid red', }}>
        <thead style={{border: '2px solid red'}}>
          <tr>
            <th>sno</th>
            <th>name</th>
            <th>mobileNumber</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Abbbu</td>
            <td>9885850560</td>
            <td>23</td>
          </tr>
        </tbody>
      </table> */}


    </>
  )
}

export default App
