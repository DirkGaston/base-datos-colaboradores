import { BaseColaboradores } from "./BaseColaboradores";

const List = () => {
  return (
    <div className="prose-lg ml-6 ">
      <h1>Listado de Colaboradores</h1>
      {BaseColaboradores.body.map((block) => Components(block))}
    </div>
  );
};

// export default List;
