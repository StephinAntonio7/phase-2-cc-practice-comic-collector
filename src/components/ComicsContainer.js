import Comic from "./Comic"


function ComicsContainer({comics, setComics}) {


    const mappedComics = comics.map (comic => {
      return <Comic key={comic.id} comic={comic} comics={comics} setComics={setComics} />
    })
  

  return (
    <>
      {mappedComics}
    </>
  )

}

export default ComicsContainer
