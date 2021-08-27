// pages/places.js
/*import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { CardColumns, CardDeck } from "react-bootstrap";

const PlacesPage = ({ data }) => {
  const place = data.googlePlacesPlace;
  const reviews = place.childrenGooglePlacesReview.map((r, index) => (

    <CardColumns 
    as={Col} 
    xs={12}
    md={6}
    lg={4}
    className="py-3 d-flex align-items-stretch"
    key={index}>

    <Card >
      {/*<img height="50" width="50" src={r.profile_photo_url} />* /}
      <div className="d-flex justify-content-center">
      <img loading="lazy" src={r.profile_photo_url} height="50" width="50" />
      </div>
      <Card.Body>
      
       <Card.Title>
       <strong>  {r.author_name}  </strong>
         </Card.Title>  - {r.rating}
    
      <p>{`${r.text.substring(0, 250)} ...`}</p>
      </Card.Body>
    </Card>
    </CardColumns>
  ));
  return (
    <Layout>
      <Container>
        <Row>
          <Col xs={12}>
      <h1>{place.name}</h1>
      <p>total ratings: {place.user_ratings_total}</p>
      <p>average: {place.rating}</p>
      <h3>Recent Reviews</h3>
      <CardDeck>
      {reviews}
      </CardDeck>
      </Col>
      </Row>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    googlePlacesPlace {
      name
      rating
      childrenGooglePlacesReview {
        author_name
        text
        rating
        profile_photo_url
      }
      user_ratings_total
    }
  }
`;

export default PlacesPage;
*/