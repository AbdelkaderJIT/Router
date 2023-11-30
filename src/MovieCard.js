import Card from 'react-bootstrap/Card';

import ReactStars from 'react-stars'


const  MovieCard = (props) => {
    console.log(props.el)
    return ( 
<>

        <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={props.el.posterUrl} />
      <Card.Body>
        <Card.Title>Title: {props.el.title} </Card.Title>
        <Card.Text>
         Movie description: {props.el.description} 
        </Card.Text>
        <Card.Text>
        <ReactStars
  count={5}
  size={24}
  color2={'#ffd700'} 
  value={props.el.rating}
  edit={false}
  />
        </Card.Text>
      </Card.Body>
    </Card>


</>
  );
}

export default MovieCard;