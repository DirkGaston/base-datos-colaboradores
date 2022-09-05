const List = ({ BaseColaboradores, searchTerm }) => {
  if (BaseColaboradores.length === 0) {
    return <h1 className="text-4xl">No hay colaboradores</h1>;
  }

  return (
    <div className="prose-lg ml-6 ">
      <h1>Listado de Colaboradores</h1>
      <ul>
        {BaseColaboradores.filter(
          (collab) =>
            collab.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            collab.email.toLowerCase().includes(searchTerm.toLowerCase())
        ).map((collab) => (
          <li key={collab.id} className="list-disc">
            {collab.name} - {collab.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
