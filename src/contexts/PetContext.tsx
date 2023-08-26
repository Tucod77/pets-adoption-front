import React, { createContext, useState } from "react";
import { Pet, PetDto } from "../models/Pet";
import { PetContextType } from "./PetContextType";

export const PetContext = createContext<PetContextType>({
  pets: [],
  addPet: () => {},
  removePet: () => {},
  updatePet: () => {},
});

const PetProvider = (props: any) => {
  const [pets, setPets] = useState<Pet[]>([
    {
      id: 1,
      name: "Freddy",
      breed: "special",
      age: 3,
      size: "P",
      castrated: true,
      vacinated: false,
    },
    {
      id: 2,
      name: "Faraday",
      breed: "Frajola",
      age: 3,
      size: "M",
      castrated: true,
      vacinated: false,
    },
    {
      id: 3,
      name: "Jaja",
      breed: "Jaguatirica",
      age: 2.5,
      size: "M",
      castrated: true,
      vacinated: false,
    },
    {
      id: 4,
      name: "Murphy",
      breed: "Frajola",
      age: 1.5,
      size: "P",
      castrated: true,
      vacinated: false,
    },
    {
      id: 5,
      name: "Mione",
      breed: "Orange",
      age: 2,
      size: "M",
      castrated: true,
      vacinated: false,
    },
  ]);

  const addPet = (pet: PetDto) => {
    const newPet: Pet = {
      id: pets.length + 1,
      ...pet,
    };
    setPets([...pets, newPet]);
  };

  const removePet = (id: number) => {
    setPets(pets.filter((p) => p.id !== id));
  };

  const updatePet = (id: number, updateInfo: Partial<Pet>) => {
    let pet = pets.find((p) => p.id === id);

    if (!pet) return;

    pet = { ...pet, ...updateInfo };
  };

  return (
    <PetContext.Provider value={{ pets, addPet, removePet, updatePet }}>
      {props.children}
    </PetContext.Provider>
  );
};

export default PetProvider;
