import { useState } from 'react'

function ComicForm( {setComics}) {
  
  // const [imgSrc, setImgSrc] = useState("")
  // const [issue, setIssue] = useState("")
  // const [title, setTitle] = useState("")
  // const [description, setDescription] = useState ("")
 
  const [formData, setFormData] = useState ({
    title: '',
    image_url: '',
    issue: '',
    description: ''
  })
  
  function handleSubmit(event){
    event.preventDefault();
    fetch('http://localhost:3000/comics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify (formData)
  })
    .then(res=>res.json())
    .then(newComicObj => {
      setFormData({title:'', image_url:'', issue:'', description: ''})
      setComics(comics =>[...comics, newComicObj])
    })
  }


  return (

    <form onSubmit={handleSubmit} className="comic-form">

      <h2>Add A New Issue</h2>

      <label htmlFor="image_url">Image URL: </label>
      <input name="image_url"
      value={formData.image_url}
      onChange={(event) =>setFormData( {...formData, image_url: event.target.value} )}
      />
      
      <label htmlFor="title">Title: </label>
      <input name="title"
      value={formData.title}
      onChange={(event) =>setFormData( {...formData, title: event.target.value} )} 
      />

      <label htmlFor="issue">Issue Number: </label>
      <input name="issue"
      value={formData.issue}
      onChange={(event) =>setFormData( {...formData, issue: event.target.value} )} 
      />

      <label htmlFor="description">Description: </label>
      <input name="description"
      value={formData.description}
      onChange={(event) =>setFormData( {...formData, description: event.target.value}  )} 
      />

      <input type="submit" value="Add Issue" />

    </form>

  )
}

export default ComicForm
