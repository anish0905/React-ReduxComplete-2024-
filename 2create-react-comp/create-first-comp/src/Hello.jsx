import React from 'react'

const Hello = () => {
  let myName = 'Anish';
  let number = 456;
  let fullName = ()=>{
    return 'Anish kumar';
  }
  return (
    <div>Hello this is my {number } and I am the future Speaking . I am your student {fullName()}</div>
    
  )
}

export default Hello