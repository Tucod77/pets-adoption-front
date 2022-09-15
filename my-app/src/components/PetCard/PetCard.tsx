import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Pet } from "../../models/Pet";

const PetCard = (props: { petInfo: Pet; onClick: any }) => {
  const { name, age, breed, size, castrated, vacinated } = props.petInfo;

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="./logo512.jpg"
          alt="logo React"
        />
        <CardContent>
          <Typography>{name}</Typography>
          <Typography>
            <ul>
              <li>Age: {age}</li>
              <li>Breed: {breed}</li>
              <li>Size: {size}</li>
              <li>Castrated: {castrated ? "Yes" : "No"}</li>
              <li>Vacinated: {vacinated ? "Yes" : "No"}</li>
            </ul>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={props.onClick}>
            View
          </Button>
          <Button size="small">Save</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default PetCard;
