import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ButtonClick from "../components/Button";
import PopupMenu from "../components/PopupMenu";
import Navbar from "../components/Navbar";

const apiTodos = `https://683034d0f504aa3c70f6d45a.mockapi.io/todo/`;

function Edit() {
  const { id } = useParams();
  const editButtonStyle = `px-8 py-1 bg-yellow-400 rounded-2xl hover:bg-yellow-300`

  const [todo, setTodo] = useState({
    name: "",
    status:"",
  });

  const [loading, SetLoading] = useState(false);
  const [isOpen, setOpen] = useState(false)

  const fetchData = async (todoId) => {
    try {
      const response = await axios.get(`${apiTodos}${todoId}`);
      console.log(response.data);
      setTodo(response.data);
    } catch (error) {
      console.log("This something wrong", error);
    } finally {
      SetLoading(false);
    }
  };
  const handleEditClick = () => {
    setOpen(true); 
  };

  const handlePopupConfirm = async() => {
    await updateName();
    setOpen(false);
  }

  const handleNameChange = (event) => {
    setTodo((previousState) => ({
      ...previousState,
      name: event.target.value,
    }));
  };

  const updateName = async () => {
    try{
        const nameToUpdate = todo.name.trim() === '' ? 'Empty name' : todo.name;
        await axios.put(`${apiTodos}${id}`,{
            name: nameToUpdate
        })
        SetLoading(false)

    }
    catch(error){
        console.log("Something is wrong", error)
    }
    
  }



  useEffect(() => {
    fetchData(id);
  }, [id]);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center">
      {loading && <div>Loading...</div>}
      {!loading && (
        <>
        <div className="flex flex-col gap-2 max-w-full px-20 py-10 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-2">
                ID: {todo.id}
                <input
                  className="bg-white border-2 border-black rounded-md text-gray-400 text-center"
                  type="text"
                  onChange={handleNameChange}
                  value={todo.name}
                />
                  <input
                  className="bg-gray-200 border-2 border-gray-400 rounded-md text-gray-400 text-center"
                  value={todo.status}
                  type="text"
                  disabled
                  
                />
              
            </div>
          </div>
          <div className="flex justify-center">{todo.name}</div>
          <div className="flex gap-2 items-center justify-center">
            <ButtonClick 
              design={editButtonStyle} 
              name={'Edit'} 
              action={handleEditClick}
            />
            {isOpen && (
              <PopupMenu 
                onClose={() => setOpen(false)} 
                onConfirm={handlePopupConfirm}
                detail={`Are you sure you want to edit the name to "${todo.name}"?`}
              />
            )}
          </div>
        </div>
        </>
      )}
      </div>
      
    </>
  );
}

export default Edit;
