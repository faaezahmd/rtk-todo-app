import { useEffect } from "react";
import { fetchTodos, deleteTodo, updateStatus } from "../../slices/todoSlice";
import { useGetTodosQuery } from "../../services/todosApi";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../../components/Todo/List";
import CompletedList from "../../components/Todo/CompletedList";

function ListContainer(props) {
  const { data, error, isLoading } = useGetTodosQuery();
  //   const todoItems = useSelector((state) => state.todo.items);
  const dispatch = useDispatch();

  const deleteItem = (event, id) => {
    dispatch(deleteTodo(id));
    event.preventDefault();
  };

  const completeItem = (event, payload) => {
    dispatch(updateStatus(payload));
    event.preventDefault();
  };

  //   useEffect(() => {
  //     dispatch(useGetTodosQuery());
  //   }, []);

  return (
    <div className="ListContainer">
      {!isLoading && (
        <TodoList
          todoItems={data}
          deleteTodo={deleteItem}
          completeTodo={completeItem}
        />
      )}
      {!isLoading && (
        <CompletedList
          todoItems={data.filter((item) => item.completed === true)}
        />
      )}
    </div>
  );
}

export default ListContainer;
