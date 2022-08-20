import NavBar from "./components/NavBar";
import Form from "./components/Form";
import List from "./components/List";
import { BaseColaboradores as collabs } from "./components/BaseColaboradores";
import { useState, useEffect } from "react";

function App() {
  const [BaseColaboradores, setCollabs] = useState([]);

  useEffect(() => {
    setCollabs(collabs);
  }, []);

  function createCollab(collabName, collabMail) {
    setCollabs([
      ...BaseColaboradores,
      {
        nombre: collabName,
        id: BaseColaboradores.length + 1,
        correo: collabMail,
      },
    ]);
  }
  return (
    <div className="App">
      <NavBar />
      <Form createCollab={createCollab} />
      <hr className="mt-10 mb-10 mr-6 ml-6 border-t-2 border-gray-200" />
      <List BaseColaboradores={BaseColaboradores} />
    </div>
  );
}

export default App;
