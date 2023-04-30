import React, { useCallback } from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

type Props = {
  article: IArticle;
  removeArticle: (article: IArticle) => void;
};

export const Article: React.FC<Props> = ({ article, removeArticle }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteArticle = useCallback(
    (article: IArticle) => dispatch(removeArticle(article)),
    [dispatch, removeArticle]
  );

  return (
    <div className="Article">
      <div>
        <h1>{article.name}</h1>
        <p>{article.age}</p>
        <p>{article.birthdate}</p>
      </div>
      <button onClick={() => deleteArticle(article)}>Delete</button>
    </div>
  );
};

export default Article;
