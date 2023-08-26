import React from "react";
import MultipleSelectCheckmarks from '../../components/Filter/Filter';
import './NewPet.css'

const NewPet = () => {
  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
    return (
        <>
        <div className='sideBar'>
          <MultipleSelectCheckmarks 
          options={names}
          filterName="Cidade"/>
          <MultipleSelectCheckmarks 
          options={names}
          filterName="Abrigo"/>
          <MultipleSelectCheckmarks 
          options={names}
          filterName="Idade"/>
          <MultipleSelectCheckmarks 
          options={names}
          filterName="Tamanho"/>
          <MultipleSelectCheckmarks 
          options={names}
          filterName="Cor"/>
          <MultipleSelectCheckmarks 
          options={names}
          filterName="Genero"/>
          <MultipleSelectCheckmarks 
          options={names}
          filterName="Habilidade"/>
          <MultipleSelectCheckmarks 
          options={names}
          filterName="Amigavel com"/>
          <MultipleSelectCheckmarks 
          options={names}
          filterName="Cuidados Especiais"/>
        </div>
    </>
  );
};

export default NewPet;
