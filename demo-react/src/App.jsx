import React from 'react'
import './App.css'
import Cards from './components/Cards'
import FoodItems from './components/FoodItems'
import CounterExample from './components/CounterExample'
import IncrementAndDecrementBadges from './components/IncrementAndDecrementBadges'
import AddingCounters from './components/AddingCounters'
import Form from './components/Form'

function App() {

  const cards = [
  {
    title: "Springboot",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit reiciendis laborum quod, similique voluptatibus a dolores deleniti ex Ispa good!",
  
  },
  {
    title: "ReactJS",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit reiciendis laborum quod, similique voluptatibus a dolores deleniti ex Ispa good!",
    
  },
  {
    title: "MySQL",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit reiciendis laborum quod, similique voluptatibus a dolores deleniti ex Ispa good!",
   
  },
  {
    title: "MongoDB",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit reiciendis laborum quod, similique voluptatibus a dolores deleniti ex Ispa good!",
  }
]

  const foodItems = [
    {
      image: "https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?b=1&s=612x612&w=0&k=20&c=2CBPkgQI2PiNySSNi1tvwVSYFqOBgfgrgDPCyelIVrk=",
      title: "Hyderabadi Chicken Biryani",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit reiciendis laborum quod, similique voluptatibus a dolores deleniti ex Ispa good!",
      price: "RS 250",
      button: "order now"
    },
    {
      image: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
      title: "Dry White Pasta",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit reiciendis laborum quod, similique voluptatibus a dolores deleniti ex Ispa good!",
      price: "RS 176.32",
      button: "order now"
    },
    {
      image: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
      title: "Biryani",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit reiciendis laborum quod, similique voluptatibus a dolores deleniti ex Ispa good!",
      price: "RS 250",
      button: "order now"
    },
    {
      image: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
      title: "Biryani",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit reiciendis laborum quod, similique voluptatibus a dolores deleniti ex Ispa good!",
      price: "RS 250",
      button: "order now"
    }
  ]

  const counterExample = [
    { name: "Decrement" },
    { name: "Increment" },
    { name: "Reset" }
  ]

  const addingCounters = [
    {
      id: 1,
      value: 0
    }
  ]

  const form = {
      text: '',
      checkbox: false,
      radio: '',
      select: ''
    }
    
  return (
    <>
      <Cards cards={cards} />
      <FoodItems foodItems={foodItems} />
      <CounterExample counterExample = {counterExample} />
      <IncrementAndDecrementBadges />
      <AddingCounters addingCounters = {addingCounters} />
      <Form form = {form} />
    </>
  )
}

export default App;