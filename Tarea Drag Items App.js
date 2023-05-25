import React, { useState, useRef } from 'react';
import './App.css';
 
const App = () => {
  
  let dragItem = useRef();
  let dragOverItem = useRef();
  const [list, setList] = useState(['Item 1','Item 2','Item 3','Item 4','Item 5','Item 6']);
 
  const dragStart = (e, index) => {
    //posicion incial del item que quiero mover
    dragItem.current = index;
  };

  const dragEnter = (e, index) => {
    //posicion de donde quiero dejar el item
    dragOverItem.current = index;    
  };

  const drop = () => {
    const nuevaLista = [...list];
    const itemArrastrado = nuevaLista[dragItem.current];
    //elimino item que se encuentre en la posicion inicial que quiero mover
    nuevaLista.splice(dragItem.current, 1);
    //agrego item en la posicion donde lo quiero dejar
    nuevaLista.splice(dragOverItem.current, 0, itemArrastrado);
    setList(nuevaLista);
    dragItem.current = null;
    dragOverItem.current = null;
  };
 
  return (
    <>
    {
    list &&
    list.map((item, index) => (
      <div style={{backgroundColor:'lightblue', margin:'20px 25%', textAlign:'center', fontSize:'40px'}}
        onDragStart={(e) => dragStart(e, index)}
        onDragEnter={(e) => dragEnter(e, index)}
        onDragEnd={drop}
        key={index}
        draggable> 
          {item}
      </div>
      ))}
    </>
  );
};
export default App;
