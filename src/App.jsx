import { useState } from "react";
import NavBar from "./components/NavBar";
import Input from "./components/Input";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Input />
      <hr className="mt-10 mb-10 mr-6 ml-6 border-t-2 border-gray-200" />
      <List />
    </div>
  );
}

export default App;
