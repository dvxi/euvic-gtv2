import * as actionTypes from './actionTypes';

const initialState : ArticleState = {
    articles: [
        {
            id: 1,
            title: "Post numer 1",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquet nisl, eget al"
        },
        {
            id: 2,
            title: "Post numer 2",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquet nisl, eget al"
        },
    ]
}

const reducer = (
    state: ArticleState = initialState,
    action: ArticleAction
) : ArticleState => {
    switch(action.type) {
        case actionTypes.ADD_ARTICLE:
            const newArticle : IArticle = {
                id: Math.random(),
                title: action.article.title,
                body: action.article.body
            }
            return {
                ...state,
                articles: state.articles.concat(newArticle),
            }
        case actionTypes.REMOVE_ARTICLE:
            const updatedArticles = state.articles.filter( article => article.id !== action.article.id);
            return {
                ...state,
                articles: updatedArticles
            }
    }
    return state;
}

export default reducer;