interface IArticle {
  id: number;
  name: string;
  age: number;
  birthdate: string;
  description: string;
}

type ArticleState = {
  articles: IArticle[];
};

type ArticleAction = {
  type: string;
  article: IArticle;
};

type DispatchType = (args: ArticleAction) => ArticleAction;
