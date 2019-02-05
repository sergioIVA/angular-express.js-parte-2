const express = require("express");

//service
const ArticleService = require("../../services/article");

// define route
const router = express.Router();


//initialize article service
const articleService = new ArticleService();


router.get("/", async function (req, res, next) {
    const query=req.query;   



    try {
        const articles = await articleService.getArticles(query);

        res.status(200).json(articles);

    } catch (err) {
        next(err);
    }
});

router.get("/:id", async function (req, res, next) {
    const { id } = req.params;

    try {
        const article=await articleService.getArticle({id});

        res.status(200).json(
            article
        );

    } catch (err) {
        next(err);
    }

});


router.put("/:id",async function(req,res,next){
    const {id} =req.params;
    const {body:article}=req;

    try{
        const updateArticle=await articleService.updateArticle({
            id,
            article
        });

        res.status(200).json(
            updateArticle
        );

    }catch(err){
        next(err);
    }
});

router.post("/",async function(req,res,next){
    const {body:article}=req;
    console.log(article);

    try{

        const articleNew=await articleService.createArticle({article});
        console.log(articleNew);
        res.status(201).json(
            articleNew
        ); 

    }catch(err){
        next(err);
    }
});

router.delete("/:id",async function(req, res, next) {
  const { id } = req.params;
  console.log(id);


  try {
    const deletedArticle = await articleService.deleteArticle({ id });

    res.status(200).json(deleteArticle);
  } catch (err) {
    next(err);
  }
});


module.exports = router;
