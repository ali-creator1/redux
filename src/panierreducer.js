const initialPanierState = {
  panier: [],
};

export const panierReducer = (state = initialPanierState, action) => {
  switch (action.type) {
    case "AJOUTER_ARTICLE":
      return {
        ...state,
        panier: [...state.panier, action.payload],
      };

    case "SUPPRIMER_ARTICLE":
      return {
        ...state,
        panier: state.panier.filter(
          (item, index) => index !== action.payload
        ),
      };

    default:
      return state;
  }
};
