import * as actionTypes from "./actionTypes";
import { TIMEOUT_VALUE } from "../.const";

export function addArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.ADD_ARTICLE,
    article,
  };

  return simulateHttpRequest(action);
}

export function editArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.EDIT_ARTICLE,
    article,
  };

  return simulateHttpRequest(action);
}

export function removeArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.REMOVE_ARTICLE,
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
