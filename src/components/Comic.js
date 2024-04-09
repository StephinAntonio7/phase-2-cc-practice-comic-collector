import { useState } from 'react';

function Comic({comic, comics, setComics}) {


const [showImage, setShowImage] = useState (true)

  function handleClick(){
    // setShowImage to the opposite of what it currently is
    setShowImage (!showImage)
  }

  function handleRemove(event){
    event.stopPropagation()
  //remove from front end
    const filteredComics = comics.filter(c=> c.id !== comic.id)
    setComics(filteredComics)
  
    // remove from backend
    fetch(`http://localhost:3000/comics${comic.id}`, {
      method: 'DELETE'
    })
  }
  

  return (
    <div onClick={handleClick} className="comic-item">


    {
    showImage 
    ? 
      <img onClick={handleClick} src={comic.image_url} alt={comic.title} />
    : 
     <>
      <h3 onClick={handleClick}>{comic.title}</h3>
      <h4 onClick={handleClick}>{comic.issue}</h4>
      <h5 onClick={handleClick}>{comic.description}</h5>
      </>
    }
     
      <button onClick={handleRemove}>Remove</button>
    
    </div>
  )

}

export default Comic
