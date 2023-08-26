export interface Pet {
  id: number;
  name: string;
  breed: string;
  age: number;
  size: string;
  castrated: boolean;
  vacinated: boolean;
}

export interface PetDto {
  name: string;
  breed: string;
  age: number;
  size: string;
  castrated: boolean;
  vacinated: boolean;
}
