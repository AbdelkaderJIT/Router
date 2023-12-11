import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const  Filter = ({el}) => {
    
    return ( 
<>


            
        <Card style={{ width: '18rem' , height:"8rem" }} >
      <Card.Img variant="top" src={el.posterUrl} />
      <Card.Body>
        <Card.Title>Title: {el.title} </Card.Title>
        <Card.Text>
         Movie description: {el.description} 
        </Card.Text>
        <Card.Text>
         Rating : {el.rating} Stars
        </Card.Text>
      </Card.Body>
    </Card>
    <Link to = {`/Description/${el.id}`} ><button>See description</button></Link>

</>
  );
}

export default Filter;