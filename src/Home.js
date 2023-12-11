import { Link } from "react-router-dom";

const Home = () => {
    return (
      <div style={{ 
        backgroundImage: `url("https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg")`,
        height:"1080",
        width:"1920"
        }}>
            
       <h1 style={{display:"flex", justifyContent:"center",padding:"300px", color:"white", fontSize:"100px"}}>Welcome to 123movies.com </h1>

       <Link> <button>Go to list of movies</button></Link>
      </div>
    );
  };
  export default Home;
  