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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi minus sapiente autem laborum inventore iste incidunt culpa, sequi in unde! Ipsum deserunt doloremque quam deleniti assumenda molestiae animi et vel, quae cumque ullam magni, maxime, quibusdam totam nostrum incidunt beatae est reprehenderit aut. Ut vel doloremque adipisci doloribus, ea nemo incidunt natus cupiditate maxime animi nisi maiores beatae! Esse voluptates, modi quia amet molestiae inventore, est quibusdam reiciendis nihil maiores voluptatem sit vero eius, sunt quam iste asperiores. Natus esse rem dolore voluptate exercitationem enim perspiciatis corrupti error sed asperiores fugiat reprehenderit quisquam est tempora optio quia, maiores fuga, laboriosam vel non explicabo repudiandae. Itaque atque alias molestiae repellendus, a similique laboriosam mollitia quos, animi doloremque explicabo minus sequi ab nam velit quis repellat ducimus quas placeat veniam autem accusamus eum, quia voluptatem. A quia quo ipsam, iste dignissimos, soluta natus labore beatae hic necessitatibus fugit ab sint eos adipisci, aperiam doloremque impedit! Reiciendis facilis nostrum ad optio repudiandae temporibus minima fugiat explicabo at nihil quae distinctio laboriosam quam amet alias voluptatum omnis sequi, eveniet enim! Illo culpa quos dolorem, recusandae ipsa dolores deserunt eos tenetur explicabo consequuntur, repellendus pariatur porro laborum sapiente dignissimos mollitia rerum quam! Reiciendis numquam adipisci, nihil quam alias nemo libero! Laudantium reiciendis provident perspiciatis nemo sunt eligendi ipsam optio illo iure laboriosam aut veniam tempore ea consequatur laborum fugit hic ad temporibus quam, amet esse odio! Quo nisi, nam officiis illo maiores possimus porro quis? Nihil, molestiae placeat? Atque natus voluptas aperiam rem provident accusamus, voluptatibus nulla ullam velit optio eos perspiciatis amet modi odit nemo, tempora earum. Natus dolores expedita nesciunt eius! Fuga, doloremque vero praesentium, nisi repellat commodi eius recusandae doloribus qui eligendi magnam nam dolor perspiciatis iure maxime asperiores laboriosam natus expedita aut neque? Cupiditate ipsum, porro tenetur, assumenda debitis saepe minus natus doloribus quis eum velit ullam vel? Delectus necessitatibus aut, voluptate odit dolor suscipit dolores officia sunt cumque. Repellendus, nostrum ut incidunt nesciunt quas inventore soluta quo! Esse ipsum nulla, debitis inventore cumque et eum distinctio sit. Quasi, officia voluptates? Dicta vel fuga itaque quaerat, accusantium incidunt laudantium id quos repellendus, eveniet sequi. Reiciendis optio numquam necessitatibus perspiciatis quasi eligendi, exercitationem nobis consequatur molestias debitis voluptatem culpa, neque totam repudiandae, adipisci nihil porro rerum autem minima nam tempore ut cupiditate. Libero voluptatibus corporis fugiat molestias minima quas officiis. Aspernatur fugiat expedita commodi quidem quisquam, fugit autem nisi ex, praesentium, laboriosam tenetur! Rem ipsum architecto blanditiis. Quia, nam provident distinctio obcaecati harum consequatur aperiam cumque esse quo. Nam deleniti hic dicta eius. Mollitia eos numquam architecto dignissimos voluptates vel quae! Maxime ducimus optio numquam quae dolor, quasi iure quia possimus. Eos illum deserunt earum ex numquam recusandae ea nam, at facere quis ipsum iure aperiam temporibus neque velit explicabo quidem, esse possimus eaque facilis. Doloribus at quis odio nihil quidem eveniet recusandae voluptas officia animi, sed deleniti ducimus tempore perferendis, exercitationem, explicabo dolor assumenda harum earum optio necessitatibus? Quo itaque doloribus accusamus, inventore velit nulla, veritatis sapiente vero reprehenderit eum neque?</p>
    </>
  )
}

export default App
