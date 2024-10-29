import { useState } from 'react';
import { People } from './components/People';

function App() {

  const [persons, setPersons] =  useState([
    {
      id: 1,
      name: "Nava",
      role: "Frontend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar6.png",

    },
    {
      id: 2,
      name: "Samuel",
      role: "Backend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar1.png",

    },
    {
      id: 3,
      name: "Villa",
      role: "Fullstack   Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar3.png",

    },
  ]);

  return (
    <div className='App'>
      <div className='container'> 
        <People 
          persons={persons} 
          setPersons={setPersons}
        />
      </div>
    </div>
  )
}

export default App
