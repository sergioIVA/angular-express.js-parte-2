const MongoLib = require("../lib/mongo");

class ArticleService {


  constructor() {
    this.collection = "articles"
    this.mongoDB = new MongoLib();
  }

  async getArticles(query) {

    if(typeof query.name !== 'undefined'){
      query={name: { $regex:query.name }};
    }
    const articles = await this.mongoDB.getAll(this.collection, query);

    return articles || [];
  }

  async getArticle({ id }) {
    console.log(id);
    const article = await this.mongoDB.get(this.collection, id);
    return article || {};
  }

  async createArticle({ article }) {
    const createArticletId = await this.mongoDB.create(this.collection, article);

    return createArticletId;
  }

  async updateArticle({ id, article }) {
    const updateArticleId = await this.mongoDB.update(
      this.collection,
      id,
      article
    );

    return updateArticleId;
  }

  async deleteArticle({ id}) {
    const deletedArticleId = await this.mongoDB.delete(
      this.collection,
      id
    );

    return deletedArticleId;
  }

}

module.exports = ArticleService;