import React from 'react'

export default function About({title,text,src= "https://via.placeholder.com/215"}) {
  return (
    <aside>
        <img src= {src} alt='blog logo'/>
        <p> {text} </p>
    </aside>
  )
}
