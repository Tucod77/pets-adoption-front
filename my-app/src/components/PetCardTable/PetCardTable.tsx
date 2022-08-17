import { Container, Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import { PetContext } from "../../contexts/PetContext";
import { PetContextType } from "../../contexts/PetContextType";
import PetCard from "../PetCard/PetCard";
import SideBar from "../SideBar/SideBar";

const PetCardTable = () => {
  const { pets } = useContext<PetContextType>(PetContext);
  const [test, setTest] = useState<number>(0);

  return (
    <>
      <Container maxWidth="xl">
        <SideBar></SideBar>
        <p>Numero de click nos views de cards {test}</p>
        <Grid container spacing={2}>
          {pets.map((pet) => (
            <Grid item xs={12} sm={6} md={3} key={pet.id}>
              <PetCard petInfo={pet} onClick={() => setTest(test + 1)} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default PetCardTable;
