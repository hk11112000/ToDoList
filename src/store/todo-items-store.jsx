import { createContext, useReducer } from "react";
export const TodoItemsContext = createContext([]);
const todoItemsReducer = (currTodoItems, action) => {
    let newToDoItems = currTodoItems;
    if (action.type === "NEW_ITEM") {
      newToDoItems = [
        ...currTodoItems,
        { todo: action.payload.itemName, todate: action.payload.itemDueDate },
      ];
    } else if (action.type === "DELETE_ITEM") {
      newToDoItems = currTodoItems.filter((item) => {
        return item.todo != action.payload.itemName;
      });
    }
    return newToDoItems;
  };

const TodoItemsContextProvider = ({children}) => {
  
  const [itemList, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addToDo = (itemName, itemDueDate) => {
    if (itemName.length === 0 || itemDueDate.length === 0) {
      console.error(`Please Enter Task and Data`);
    } else {
      const newItemAction = {
        type: "NEW_ITEM",
        payload: {
          itemName,
          itemDueDate,
        },
      };
      dispatchTodoItems(newItemAction);
    }
  };
  const deleteI = (event) => {
    const fetchData = event.target.parentElement.firstChild.innerText;
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: fetchData,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return <TodoItemsContext.Provider
    value={{ itemList: itemList, addNewItem: addToDo, deleteItem: deleteI }}
    
  >{children}</TodoItemsContext.Provider>;
};

export default TodoItemsContextProvider;
