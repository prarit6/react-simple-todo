import "../app.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ButtonClick from "../components/Button";
import Navbar from "../components/Navbar";
import axios from "axios";
import LoaderSpinner from "../components/LoaderSpinner";

function App() {
  const apiTodos = `https://683034d0f504aa3c70f6d45a.mockapi.io/todo/`;
  const editButtonStyle = `px-6 py-1 bg-yellow-400 rounded-2xl hover:bg-yellow-300`;
  const deleteButtonStyle = `px-6 py-1 bg-red-400 rounded-2xl hover:bg-red-300`;
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(apiTodos);
      setTodos(response.data);
      setLoading(false);
    } catch (error) {
      console.log("This something wrong", error);
    }
  };

  const DeleteTodos = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`${apiTodos}${id}`);
      await fetchData();
      setLoading(false);
    } catch (error) {
      console.log(`Something is wrong `, error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading && <><LoaderSpinner/></>}
      {!loading && (
        <>
        <Navbar/>
        <div className="max-w-full p-4 m-4 bg-white border border-gray-200 rounded-lg shadow-sm">
          
          {todos.map((data, index) => (
              <div className="flex justify-between" key={index}>
                <div className="flex flex-col justify-center my-2">
                  <div>
                    {data.id}. {data.name}
                    <div>{data.status}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link to={`todos/${data.id}`}>
                    <ButtonClick design={editButtonStyle} name={"Edit"} />
                  </Link>
                  <ButtonClick
                    design={deleteButtonStyle}
                    name={"Delete"}
                    action={async () => {
                      await DeleteTodos(data.id);
                    }}
                  />
                </div>
              </div>
          ))}
        </div>
        </>
      )}
    </>
  );
}

export default App;
