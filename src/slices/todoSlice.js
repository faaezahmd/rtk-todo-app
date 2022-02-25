import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items = action.payload;
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    fetchTodos: (state) => {
      state.items = [
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false,
        },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false,
        },
        {
          userId: 1,
          id: 3,
          title: "fugiat veniam minus",
          completed: false,
        },
        {
          userId: 1,
          id: 4,
          title: "et porro tempora",
          completed: true,
        },
        {
          userId: 1,
          id: 5,
          title:
            "laboriosam mollitia et enim quasi adipisci quia provident illum",
          completed: false,
        },
        {
          userId: 1,
          id: 6,
          title: "qui ullam ratione quibusdam voluptatem quia omnis",
          completed: false,
        },
        {
          userId: 1,
          id: 7,
          title: "illo expedita consequatur quia in",
          completed: false,
        },
      ];
    },
    updateStatus: (state, action) => {
      const index = state.items.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.items[index].completed = action.payload.completed;
      //   state.items[action.payload] = {
      //     ...state.items[action.payload],
      //     completed: true,
      //   };
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const {
  addTodo,
  deleteTodo,
  fetchTodos,
  updateStatus,
} = todoSlice.actions;

export default todoSlice.reducer;
