const Card = ({ data }) => {
  const safeData = Array.isArray(data) ? data : [];
  console.log('Data:', safeData);

  const readMore = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className='cardContainer'>
      {safeData.map((currItem, index) => {
        if (!currItem.urlToImage) {
          return null;
        } else {
          return (
            <div className='card' key={index}>
              <img src={currItem.urlToImage} alt="Card Image" />
              <div className="cardContent">
                <a className='title' onClick={() => readMore(currItem.url)} style={{ cursor: 'pointer' }}>
                  {currItem.title}
                </a>
                <p>{currItem.description}</p>
                <button onClick={() => readMore(currItem.url)}>Read More</button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;
