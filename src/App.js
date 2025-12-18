import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const panier = useSelector((state) => state.panier.panier);

  const dispatch = useDispatch();
  const [article, setArticle] = useState("");

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>

      <hr />

      <h2>Panier :</h2>

      <input
        type="text"
        value={article}
        onChange={(e) => setArticle(e.target.value)}
        placeholder="Nom de l'article"
      />

      <button
        onClick={() => {
          if (article.trim()) {
            dispatch({ type: "AJOUTER_ARTICLE", payload: article });
            setArticle("");
          }
        }}
      >
        Ajouter
      </button>

      <ul>
        {panier.map((item, index) => (
          <li key={index}>
            {item}
            <button
              onClick={() =>
                dispatch({ type: "SUPPRIMER_ARTICLE", payload: index })
              }
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Counter;
