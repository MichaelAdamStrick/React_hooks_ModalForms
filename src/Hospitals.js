import React, { useContext } from "react";
import { useStore } from "./ModalContext";
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

const Hospitals = (props) => {
  const context = useStore();
  return (
    <>
      <Container>
        <Row>
          <Col sm="8">
            <h2>Hospitals: </h2>
            {context.HospitalDetails.length > 0 ? (
              context.HospitalDetails.map((h) => (
                <Card key={h.id}>
                  <CardBody>
                    <CardTitle>hospital: {h.id} </CardTitle>
                    <CardText>
                      {h.HospitalName} {h.Address} {h.id}
                    </CardText>
                  </CardBody>
                  <CardFooter>
                    <Button>Go somewhere</Button>
                    <button
                      className="float-right btn btn-danger btn-sm ml-2"
                      onClick={() => {
                        props.editRow(context.HospitalDetails);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="float-right btn btn-danger btn-sm"
                      style={{ marginLeft: 10 }}
                      onClick={() =>
                        context.dispatch({ type: "DELETEHOSPITAL", payload: h })
                      }
                    >
                      Delete
                    </button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <tr>
                <td colSpan={8}>No hospitals</td>
              </tr>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Hospitals;
