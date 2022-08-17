import { Grid } from "@mui/material";
import React, { useContext } from "react";
import { PetContext } from "../../contexts/PetContext";
import { PetContextType } from "../../contexts/PetContextType";
import PetCard from "../PetCard/PetCard";

const PetCardTable = () => {
  const { pets } = useContext<PetContextType>(PetContext);

  return (
    <>
      <Grid container spacing={2}>
        {pets.map((pet) => (
          <Grid item xs={12} sm={6} md={3} key={pet.id}>
            <PetCard petInfo={pet} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PetCardTable;
