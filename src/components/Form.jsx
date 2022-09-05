import { useState } from "react";

const Form = ({ createCollab }) => {
  const [collabName, setCollabName] = useState("");
  const [collabMail, setCollabMail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createCollab(collabName, collabMail);
    setCollabName("");
    setCollabMail("");
  };
  return (
    <div className="inputContainer ml-6 mr-6">
      <form onSubmit={handleSubmit}>
        <div className="mb-6 mt-10">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Nombre del Colaborador
          </label>
          <input
            type="name"
            id="name"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ingresa el nombre del colaborador"
            onChange={(e) => {
              setCollabName(e.target.value);
            }}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Correo del Colaborador
          </label>
          <input
            type="email"
            id="email"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ingresa correo del colaborador"
            onChange={(e) => {
              setCollabMail(e.target.value);
            }}
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Agregar Colaborador
        </button>
      </form>
    </div>
  );
};

export default Form;
