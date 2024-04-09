import { useState, useEffect } from 'react'
import ComicsContainer from "./ComicsContainer"
import ComicForm from "./ComicForm"

function App() {

const [comics, setComics] =useState([])

useEffect (() => {
  fetch("http://localhost:3000/comics")
  .then(res =>res.json())
  .then (data => setComics(data))
  // the empty array is so that theres not an infinite render from the function 
}, [])

  // function createComic (description, title, issue, image_url) {
  //   fetch ('http://localhost:8004/comics', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept':'application/json'
  //     },
  //     body: JSON.stringify ({description, title, issue, image_url})
  //   })
  //     .then (res => res.json () )
  //     // .then (newComic => {
  //     //   setFormData({title: '', image_url: '', description: '', issue: ''})
  //     //   setComics(comics=> [...comics, newComic])
  // //})
  //     .then(newComic => setComics ( [...comics, newComic]))
  // }

  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Accept':'application/json'
  //   },
  //   body: JSON.stringify ({description, title, issue, image_url})
  // })
    // .then (res => res.json () )
    // .then(setComics (comics => {
    //   return comics.filter (comic => comic.id !== id)
    // }))


  return (
    <div className="App">

      <h1>Comicbook Collector</h1>

      <div className="grid with-sidebar">

        <div className="flex-container">
          <ComicsContainer comics={comics} setComics={setComics}/>
        </div>

        <div className="sidebar">
          <ComicForm setComics={setComics}/>
        </div>

      </div>


    </div>
  );
}

export default App;
