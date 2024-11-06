import React from 'react';

const TableMain = ({ data }) => {
  // Comprobación si hay datos para mostrar
  if (!data || data.length === 0) {
    return <p>No hay datos disponibles.</p>;
  }

  return (
    <table className="table table-striped-columns p-2">
      <thead>
        <tr>
          <th>Id</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.data}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableMain;