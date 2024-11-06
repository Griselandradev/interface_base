import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import TableMain from "./components/TableMain";
import LoaderAllItems from "../../services/LoaderAllItems";

const Main = () => {
  const params = useParams();
  const url = `http://localhost:3001/brakes`;
  const id = params.id;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await LoaderAllItems(url, id);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id, url]);

  return (
    <div>
      <h1>Interfaz SBS</h1>
      {isLoading ? (
        <p>Cargando datos...</p>
      ) : (
        <TableMain data={data} />
      )}
    </div>
  );
};

export default Main;