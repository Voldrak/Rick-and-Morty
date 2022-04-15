export const initialState = {
    favorite: [],
  };

  const reducer = (state, action) => {
      switch (action.type) {
          case "favorite_char":
              return{
                ...state,
                favorite: action.favorite,
              }

              default:
                  return{
                      ...state,
                  }
      }
  }

  export default reducer;