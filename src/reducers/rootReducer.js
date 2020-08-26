const initState = {
    control: 1,
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
        console.log(`wartość action.ID ${action.ID}`);
        const index_a = state.tasksArray.findIndex((currentValue) => {
          return currentValue.ID === action.ID;
        });
        console.log(index_a);
        if (index_a >= 0) {
          let newArray_a = state.tasksArray;
          newArray_a[index_a].isDone = true;
          return {
            ...state,
            tasksArray: newArray_a
          };
        }
        else {
          console.log("coś sie zwaliło przy ustawianiu done");
          return state;
        }

      case "deleteTask":
        console.log(`wartość action.ID ${action.ID}`);
        const index_b = state.tasksArray.findIndex((currentValue) => {
          return currentValue.ID === action.ID;
        });
        console.log(index_b);
        if (index_b >= 0) {
          let newArray_b = state.tasksArray;
          newArray_b.splice(index_b, 1);
          return {
            ...state,
            tasksArray: newArray_b
          }
        }
        else {
          console.log("coś się zwaliło przy usuwaniu");
          return state;
        }


      default:
        return state;
    }
  }

  export default rootReducer;