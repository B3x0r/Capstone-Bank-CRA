import React from "react";
import { Card } from "react-bootstrap";

function Home() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="dmitry-demidko-eBWzFKahEaU-unsplash.jpg"
        body={
          <img
            src="dmitry-demidko-eBWzFKahEaU-unsplash.jpg"
            alt="money by Dmitry Demidko"
          />
        }
      />
      <Card.Body>
        <Card.Title>Welcome to Capstone Bank</Card.Title>
        <Card.Text>The best way to manage your imaginary funds</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Home;
