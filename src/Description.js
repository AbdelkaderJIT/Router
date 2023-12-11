import { useParams,useNavigate } from "react-router-dom"
import {useState} from "react"
const Description=()=>{

    const {IdMovie}=useParams()

    var [moviedata,setMoviedata] = useState([{
        title : "V for vendetta",
        description : "V for Vendetta is a 2006 dystopian political action film directed by James McTeigue from a screenplay by the Wachowskis. It is based on the 1988–89 DC",
        posterUrl : "https://img-assets.drafthouse.com/images/shows/v-for-vendetta/vforvendetta_hero.jpg?auto=compress&crop=focalpoint&fit=crop&fp-x=0.465&fp-y=0.4066&h=1080&q=80&w=1920",
        rating : "5" ,
        id :"1"
    }
    ]);

    console.log(IdMovie,"helllllo")
    const movie=moviedata.find((el)=>Number(el.id)=== Number(IdMovie))
    console.log(movie,"movieeee")
    const navigate=useNavigate()
    const redirection=()=>{
navigate("/")
    }
    return(
        <>

        <button onClick={redirection} >Home</button>
<h1>{movie.description}</h1>
        </>
    )
}
export default Description