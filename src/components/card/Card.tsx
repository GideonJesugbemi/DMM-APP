import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import React, { ReactNode } from "react";
import { CardProps } from "../../assets/jsons/top-deals";



const CardWrapper: React.FC<CardProps> = ({ ...cardItems }) => {
//   const Img = require(`../../assets/images/${cardItems.image}`);
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={cardItems.image} alt="homepage bg" className="" />
      </CardHeader>
      <CardBody className="flex justify-between">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {cardItems.name}
        </Typography>
        <Typography>{cardItems.price}</Typography>
      </CardBody>
      <CardBody className="flex justify-between">
        <Typography className="flex flex-col">
          {cardItems.passenger} passenger
          {cardItems.luggage} luggages
        </Typography>
        <Button>Read More</Button>
      </CardBody>
    </Card>
  );
};

export default CardWrapper;
