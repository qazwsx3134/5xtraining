
// Expenses Reducer

const dataReducerDefaultState = {};

export default (state = dataReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return {
        ...state,
        data: action.data,
      };

    case 'REMOVE_DATA':
      return state.filter(({ id }) => id !== action.id);

    case 'EDIT_DATA':
      return state.map((data) => {
        if (data.id === action.id) {
          return {
            ...data,
            ...action.updates,
          };
        }
        return data;
      });
    default:
      return state;
  }
};
