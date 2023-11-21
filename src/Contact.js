import React from 'react'

const Contact = ({data, onClickChange}) => {

  const {email, dob, name, picture, gender} = data.results[0];

  function handleClick (){
    onClickChange();
  }

  console.log(data);
  
  return (
    <>
      {
        <div>
         <p>Name: {name.first} {name.last}</p>
         <p>Gender: {gender}</p>
         <p>email: {email}</p>
         <p>DOB: {dob.date}</p> 
         <img src={picture.large} alt="user_pic" />
        </div>
      }
      <button onClick={handleClick}>Click here to display another contact</button>
    </>
  )
}

export default Contact