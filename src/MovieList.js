import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import ReactStars from 'react-stars';
import Button from 'react-bootstrap/Button';
import Filter from './Filter';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';


function MovieList() {


  let[ProfileList,setProfileList]=useState("")
  console.log(ProfileList,"aminnnne")
  useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res)=>setProfileList(res.data))
      .catch((err)=>console.log(err))
  }

  ,[])

   var [movie,setMovie] = useState([{
      title : "V for vendetta",
      description : "V for Vendetta is a 2006 dystopian political action film directed by James McTeigue from a screenplay by the Wachowskis. It is based on the 1988–89 DC",
      posterUrl : "https://img-assets.drafthouse.com/images/shows/v-for-vendetta/vforvendetta_hero.jpg?auto=compress&crop=focalpoint&fit=crop&fp-x=0.465&fp-y=0.4066&h=1080&q=80&w=1920",
      rating : "5",
      id:"1" 
  }
  ]);



  const [show, setShow] = useState(false);
  const [search, setSearch ] = useState("");
  const [searchByRating, setSearchByRating ] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  



  var [newmovie,setNewmovie] = useState({
   title : "",
   description : "",
   posterUrl : "",
   rating : "" 
}
)




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
   const ratingChanged = (newRating) => {
    setSearchByRating (newRating);
   
  }
 


    return  ( 
        <>
        <h1 style={{marginBottom:"100px"}}>Gomycode Movies</h1>


        


        <div style={{display:"flex", flexDirection:"column", padding:"50px",}}>

  <label>Search your movie</label>
<input style={{margin:"20px"}}  onChange={(event) => setSearch(event.target.value)} />
<ReactStars
  count={5}
  size={24}
  color2={'#ffd700'} 
  onChange={ratingChanged}
  />
</div>



<div style={{display:"flex", justifyContent:"space-evenly"}}>
        {


       movie.filter((el)=>el.title.toLowerCase().includes(search.toLowerCase()) &&
       el.rating >= searchByRating).map((el)=>(
        <Filter  el= {el} />
        )
        
     )
        }
        </div>
        
        <Button style={{marginTop:"400px"}} variant="primary" onClick={handleShow}>
        Add Movie
      </Button>
       
        <div style={{width:"400px",marginTop:"50px"}}> 

       

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Adding a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>


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


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>





         </div>

         


     </>);
}


export default MovieList;