import React, { useContext } from "react";
import { useStore } from "./PeopleContext";
import {
  Card,
  Button,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Container,
  Col
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const People = (props) => {
  const context = useStore();
  return (
    <>
      <Container>
        <Row>
          <Col sm="8">
            <h2>People: </h2>
            {context.people.map((p) => (
              <Card key={Math.random() * 10000000}>
                <CardBody>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>
                    {p.firstName} {p.lastName}
                  </CardText>
                </CardBody>
                <CardFooter>
                  <Button>Go somewhere</Button>
                </CardFooter>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default People;
