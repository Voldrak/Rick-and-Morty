export const initialState = {
    favorite: [],
  };

  const reducer = (state, action) => {

      switch (action.type) {
          case "favorite_char":
           
                return {
                  ...state,
                  favorite: [...state.favorite, action.obj],
                };

          case "delete_char_favorite":
            return{
              ...state,
              favorite: state.favorite.filter(
                (obj) => obj.id !== action.obj.id
              ),
            }

          default:
              return{
                  ...state,
              }
      }
  }

  export default reducer;