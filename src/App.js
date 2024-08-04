import { useState } from 'react';
import Banner from './components/banner';
import Form from './components/form';
import Houses from './components/houses';

function App() {

  const houses = [
    {
      name: "Grifinoria",
      primaryColor: "#A31111",
      secondaryColor: "#C9A25E"
    },
    {
      name: "Sonserina",
      primaryColor: "#636561",
      secondaryColor: "#12530F"
    },
    {
      name: "Corvinal",
      primaryColor: "#16416B",
      secondaryColor: "#7E7E7F"
    },
    {
      name: "Lufa-Lufa",
      primaryColor: "#1A1915",
      secondaryColor: "#D79606"
    }
  ]

  const [collaborators, setCollaborators] = useState([])

  const newCollaboratorAdd = (collaborator) => {
    // console.log(collaborator)
    setCollaborators([...collaborators, collaborator])
  }

  console.log(collaborators.houses)

  return (
    
    <div className="App">
      <Banner/>
      <Form  houses={houses.map(houses => houses.name)} registredCollaborator={collaborator => newCollaboratorAdd(collaborator)}/>

      {houses.map(houses => <Houses 
        key={houses.name} 
        nome={houses.name} 
        primaryColor={houses.primaryColor} 
        secondaryColor={houses.secondaryColor}
        collaborators={collaborators.filter(collaborator => collaborator.casa === houses.name)}
      />)}

    </div>
  );
}

export default App
