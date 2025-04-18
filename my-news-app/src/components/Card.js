
const Card = ({ data }) => {
  const safeData = Array.isArray(data) ? data : [];
  console.log('Data:', safeData);

  return (
    <div className='cardContainer'>
      {safeData.map((currItem, index) => (
        <div className='card' key={index}>
          <img src={currItem.urlToImage} alt="Card Image" />
          <div className="cardContent">
            <a className='title'>{currItem.title}</a>
            <p>{currItem.description}</p>
            <button>Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
