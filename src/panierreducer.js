const initialPanierState = {
  panier: [],
};

export const panierReducer = (state = initialPanierState, action) => {
  switch (action.type) {
    case "ADD_TO_PANIER":
      return {...state, panier: [...state.panier, action.payload],
      };

    case "REMOVE_FROM_PANIER":
      return { ...state, panier: state.panier.filter((panier) => panier.id !== action.payload),
      };

    default:
      return state;
  }
};
