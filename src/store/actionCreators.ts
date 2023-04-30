import ActionTypes from "./actionTypes";
import { TIMEOUT_VALUE } from "../.const";

export function addArticle(article: IArticle) {
  const action: ArticleAction = {
    type: ActionTypes.ADD_ARTICLE,
    article,
  };

  return simulateHttpRequest(action);
}

export function editArticle(article: IArticle) {
  const action: ArticleAction = {
    type: ActionTypes.EDIT_ARTICLE,
    article,
  };

  return simulateHttpRequest(action);
}

export function removeArticle(article: IArticle) {
  const action: ArticleAction = {
    type: ActionTypes.REMOVE_ARTICLE,
    article,
  };

  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: ArticleAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, TIMEOUT_VALUE);
  };
}
