export default function getNews(search) {
  return fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=4d00b78bac564a3b93bd57a5e0214553`)
      .then(res => res.json())
      .then(json => json.articles.map(article => ({
        title: article.title,
        author: article.author,
        description: article.description
      })));
};

