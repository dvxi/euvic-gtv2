import * as actionTypes from "./actionTypes";

const initialState: ArticleState = {
  articles: [
    {
      id: 1,
      name: "Pierwszy",
      age: 12,
      birthdate: "2020-01-01",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Drugi",
      age: 20,
      birthdate: "2002-11-21",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
};

const reducer = (
  state: ArticleState = initialState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
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
    case actionTypes.REMOVE_ARTICLE:
      console.log(action.article.id);
      const updatedArticles = state.articles.filter(
        (article) => article.id !== action.article.id
      );
      return {
        ...state,
        articles: updatedArticles,
      };
    case actionTypes.EDIT_ARTICLE:
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
