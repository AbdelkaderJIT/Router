import Form from 'react-bootstrap/Form';
import {useEffect, useState } from 'react';
import MovieCard from "./MovieCard";

import Button from 'react-bootstrap/Button';
import Filter from './Filter';


function MovieList() {

   var [movie,setMovie] = useState([{
      title : "V for vendetta",
      description : "V for Vendetta is a 2006 dystopian political action film directed by James McTeigue from a screenplay by the Wachowskis. It is based on the 1988–89 DC",
      posterUrl : "https://img-assets.drafthouse.com/images/shows/v-for-vendetta/vforvendetta_hero.jpg?auto=compress&crop=focalpoint&fit=crop&fp-x=0.465&fp-y=0.4066&h=1080&q=80&w=1920",
      rating : "5" 
  }
  ]);



  var [newmovie,setNewmovie] = useState({
   title : "",
   description : "",
   posterUrl : "",
   rating : "" 
}
)


useEffect(() => {
   
},[movie]);

   const handleSubmit = (event) => {

      event.preventDefault();
      setMovie ([...movie, newmovie]);
      setNewmovie ({
      title : "",
      description : "",
      posterUrl : "",
      rating : ""
   })

   

   };


    return  ( 
        <>
        <h1 style={{marginBottom:"100px"}}>Gomycode Movies</h1>
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
        {
        movie.map((el ,index)=>(
        <MovieCard key={index} el= {el} />
        )
        
     )
        }
        </div>
        
        <div style={{width:"400px",marginTop:"50px"}}> 


<Form  onSubmit={handleSubmit}>

<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
  <h3 style={{color:"pink", marginBottom:"20px"}}>Add a new movie </h3>
  <Form.Label>Title</Form.Label>
  <Form.Control 
  ype="text" 
  defaultValue={newmovie.title}
  onChange={(e)=> newmovie.title = e.target.value}
  
  
  rows={1} />
  <Form.Label>Description</Form.Label>
  <Form.Control 
   style={{height:"150px"}}
   as="textarea"
   type="text"
   defaultValue={newmovie.description} 
   onChange={(e)=> newmovie.description = e.target.value}
   rows={1} />
  <Form.Label>Poster URL image</Form.Label>
  <Form.Control 
  type="text" 
  defaultValue={newmovie.posterUrl} 
  onChange={(e)=> newmovie.posterUrl=e.target.value}
  rows={1} />
  <Form.Label>Rate this movie</Form.Label>
  <Form.Select defaultValue={movie.rating} onChange={(e)=> newmovie.rating= e.target.value} aria-label="Rating select">
      <option value="1" >One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      <option value="4">Four</option>
      <option value="5">Five</option>
    </Form.Select>
</Form.Group>
<Button type="submit">Add movie</Button>
</Form>


         </div>

         <h1 style={{marginBottom:"50px", color:"pink"}}>Sorted movies by rating</h1>
         <div style={{display:"flex", justifyContent:"space-evenly"}}>
           
        {


       movie.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)).map((el ,index)=>(
        <Filter key={index} el= {el} />
        )
        
     )
        }
        </div>


     </>);
}


export default MovieList;