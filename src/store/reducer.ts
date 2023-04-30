import ActionTypes from "./actionTypes";
import { INITIAL_STATE } from "../.const";

const initialState: ArticleState = INITIAL_STATE;

const reducer = (
  state: ArticleState = initialState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case ActionTypes.ADD_ARTICLE:
      const newArticle: IArticle = {
        id: state.articles.length + 1,
        name: action.article.name,
        age: action.article.age,
        birthdate: action.article.birthdate,
        description: action.article.description,
      };
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      };
    case ActionTypes.REMOVE_ARTICLE:
      console.log(action.article.id);
      const updatedArticles = state.articles.filter(
        (article) => article.id !== action.article.id
      );
      return {
        ...state,
        articles: updatedArticles,
      };
    case ActionTypes.EDIT_ARTICLE:
      const updatedArticle: IArticle = {
        id: action.article.id,
        name: action.article.name,
        age: action.article.age,
        birthdate: action.article.birthdate,
        description: action.article.description,
      };
      const updatedArticles2 = state.articles.filter(
        (article) => article.id !== action.article.id
      );
      return {
        ...state,
        articles: updatedArticles2
          .concat(updatedArticle)
          .sort((a, b) => a.id - b.id),
      };
  }
  return state;
};

export default reducer;
