// import React from 'react'

const Card = ({data=[]}) => {
  console.log(data)
  return (
    <div className='cardConatiner'>
      {data.map((currItem,index)=>{
        return(
          <div className='card' key={index}>
            <img src={currItem.urlToImage} alt="Card Image"/>
            <div className="cardcontent">
              <a>{currItem.title}</a>
              <p>{currItem.description}</p>
              <button>Read More</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Card