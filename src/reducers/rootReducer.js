const initState = {
    control: "test",
    tasksArray: []
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
      case "addTask":
        const newTask = {
          title: action.title,
          description: action.description
        };
        return {
            ...state,
            tasksArray: [...state.tasksArray, newTask ]
        }
      default:
        return state;
    }
  }

  export default rootReducer;