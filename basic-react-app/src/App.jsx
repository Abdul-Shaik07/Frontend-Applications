import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Cards from './components/Cards'

function App() {

  const navItems = [
    {
      href: "#all",
      title: "All" 

    },
    {
      href: "#developers",
      title: "Developers"
    },
    {
      href: "#testers",
      title: "Testers"
    }
  ]

  const cards = [
    {
      image: "https://media.licdn.com/dms/image/v2/D5603AQF3shnnULkzTA/profile-displayphoto-scale_200_200/B56ZlOVk4yJ8Ac-/0/1757955904372?e=1762992000&v=beta&t=WkfYCPVHByB-qYNkICgbQV1gyWL1vyc6xf1p8EQkTlE",
      name: "Shaik Abdul",
      role: "Java Full Stack Developer",
      category: "developer",
      github: "https://github.com/Abdul-Shaik07",
      linkedin: "https://www.linkedin.com/in/shaikabdul07/",
      email: "abdul.shaik@xyz.com"
    },
    {
      image: "https://media.licdn.com/dms/image/v2/D5603AQHmdGsgT0uIig/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723767896300?e=1762992000&v=beta&t=RNWTei_zy4rvUDduEoT2MwCiQeUrgM1gwb2cT_dLVhc",
      name: "Saikumar Madella",
      role: "Main Frame Developer",
      category: "developer",
      github: "https://github.com/Abdul-Shaik07",
      linkedin: "https://www.linkedin.com/in/shaikabdul07/",
      email: "saikumar.madella@xyz.com"
    },
    {
      image: "https://media.licdn.com/dms/image/v2/D5603AQEdJJpKtJj4eQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1674920127197?e=1762992000&v=beta&t=JZAg1BIjlm7zS2bxsG2V7ZL27uE0veqaEZWzDerYiAE",
      name: "Sai Krishna Vuppalapati",
      role: "SAP ABAP Developer",
      category: "developer",
      github: "https://github.com/Abdul-Shaik07",
      linkedin: "https://www.linkedin.com/in/shaikabdul07/",
      email: "saikrishna.v@xyz.com" 
    },
    {
      image: "https://media.licdn.com/dms/image/v2/D5603AQGSwY79DCWYXA/profile-displayphoto-shrink_200_200/B56ZWsytvwHsAY-/0/1742360731525?e=1762992000&v=beta&t=kAoDKw-X0nckXQ2_NDGIs2uVZJO87pHUG2tt7yjH2Os",
      name: "Shanmugam Avula",
      role: "React Js Developer",
      category: "developer",
      github: "https://github.com/Abdul-Shaik07",
      linkedin: "https://www.linkedin.com/in/shaikabdul07/",
      email: "shanmugam.avula@xyz.com"
    },
    {
      image: "https://media.licdn.com/dms/image/v2/D5603AQHadTyBwhZQOg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1712027828687?e=1762992000&v=beta&t=gtjJRI07sxm1PwZWHCAynr7Es5ikr7Igir0mVVRsjTo",
      name: "Sreenivasula Reddy",
      role: "Angular Developer",
      category: "developer",
      github: "https://github.com/Abdul-Shaik07",
      linkedin: "https://www.linkedin.com/in/shaikabdul07/",
      email: "sreenu.reddy@xyz.com"
    },
    {
      image: "https://media.licdn.com/dms/image/v2/D5603AQF5IjoS8tD3vQ/profile-displayphoto-scale_200_200/B56ZnT2jbWI8AY-/0/1760195919060?e=1762992000&v=beta&t=VCGWVgSLd7W_HlgkjAToX8P2oCM81CfduPzr9ymKqs0",
      name: "Sai Charan Ugranam",
      role: "Automation Tester",
      category: "tester",
      github: "https://github.com/Abdul-Shaik07",
      linkedin: "https://www.linkedin.com/in/shaikabdul07/",
      email: "sai.charan@xyz.com" 
    }
  ]


  return (
    <>
      <Header navItems = {navItems}/>
      <Cards cards = {cards}/>
    </>
  )
}

export default App
