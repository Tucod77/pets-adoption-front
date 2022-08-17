import React from 'react'
import PetCard from '../../components/PetCard/PetCard';
import PetCardTable from '../../components/PetCardTable/PetCardTable';

const Home = () => {
    return (
        <>
          <h1>My Pets</h1> 
          <br />
          <PetCardTable />
        </>
    );
}

export default Home;