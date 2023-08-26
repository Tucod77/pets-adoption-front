import { Pet, PetDto } from "../models/Pet";

export interface PetContextType {
  pets: Pet[],
  addPet(pet: PetDto): void,
  removePet(id: number): void,
  updatePet(id: number, updateInfo: Partial<Pet>): void
}