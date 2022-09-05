import NavBar from "./components/NavBar";
import Form from "./components/Form";
import List from "./components/List";
import { BaseColaboradores as collabs } from "./components/BaseColaboradores";
import { useState, useEffect } from "react";

function App() {
  const [BaseColaboradores, setCollabs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCollabs(collabs);
  }, []);

  function createCollab(collabName, collabMail) {
    setCollabs([
      ...BaseColaboradores,
      {
        name: collabName.trim(),
        id: BaseColaboradores.length + 1,
        email: collabMail.trim(),
      },
    ]);
    setSearchTerm("");
  }

  return (
    <div className="App">
      <NavBar setSearchTerm={setSearchTerm} />
      <Form createCollab={createCollab} />
      <hr className="mt-10 mb-10 mr-6 ml-6 border-t-2 border-gray-200" />
      <List BaseColaboradores={BaseColaboradores} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
