const initState = {
    tasksArray: []
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
      case "addTask":
        const newTask = {
          title: action.title,
          description: action.description,
          isDone: action.isDone,
          ID: action.ID
        };
        return {
            ...state,
            tasksArray: [...state.tasksArray, newTask ]
        }
      case "changeToDone":
        const index_a = state.tasksArray.findIndex((currentValue) => {
          return currentValue.ID === action.ID;
        });
        let newArray_a = state.tasksArray;
        newArray_a[index_a].isDone = true;
        return {
          ...state,
          tasksArray: newArray_a
        }
      case "deleteTask":
        const index_b = state.tasksArray.findIndex((currentValue) => {
          return currentValue.ID === action.ID;
        });
        let newArray_b = state.tasksArray;
        newArray_b.splice(index_b, 1);
        return {
          ...state,
          tasksArray: newArray_b
        }
      default:
        return state;
    }
  }

  export default rootReducer;