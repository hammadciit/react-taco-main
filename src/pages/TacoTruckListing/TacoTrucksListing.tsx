import { FC, useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import apiClient from "../../services/apiClient/apiClient";
import foodItems from "../../Assets/foodItems.jpg";
import "./TacoTruckListing.css";

interface IProps {}

export const TacoTrucksListing: FC<IProps> = ({}) => {
  const [fetchedFoodRecords, setFoodRecords] = useState<[]>();

  const getFoodTruckListing = async () => {
    try {
      const { data } = await apiClient.get("/api/get_food_trucks");
      console.log("data= ", data?.all_resturants);
      setFoodRecords(data?.all_resturants);
    } catch (error) {
      console.log("error= ", error);
    }
  };

  useEffect(() => {
    getFoodTruckListing();
  }, []);

  return (
    <Container>
      <Row>
        {fetchedFoodRecords?.map((foodRecord: any, index: number) => (
          <Col md={{ span: 3, offset: 0 }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={foodItems} />
              <Card.Body>
                <Card.Title>{foodRecord?.restaurant_name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {foodRecord?.food_items}
                </Card.Subtitle>
                <Card.Link
                  href={`http://maps.google.com/?q=${foodRecord?.latitude},${foodRecord?.longitude}`}
                >
                  View on Google Maps
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
