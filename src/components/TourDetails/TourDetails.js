import { Link, useParams } from 'react-router-dom';
 
// Rendered when the user visits '/articles/objects'
export default function TourDetails() {
 
  let { title } = useParams();
  // title will be equal to the string 'objects'
 
  return (
    <article>
      <h1>{title}</h1>
    </article>
  );
}
//state ->

// Tour Details:

// Once the user clicks on any of the cities cards that you created,
// it should show details about that city (Note :-
// You can handle this feature by wrapping each card by 
//Link and pass the id of the card of tour that you clicked as props and then receive 
//the id of these tour by using hook that called useParams and then after you log of id 
//and you insure it was received you have 
//to render only the whole information of this tour include description).

// You have to create function to get information of the clicked tour
// by passing of the id to this function and filter then to return on the information of this tour .

// Hint:

// You may use the filter method for Tour Details.
// You may use Link from react-route-dom.






