$(window).ready(function(){
    var articlesContainer = $(".js-articles");
    var articles = new Articles();
    var articlesDef = articles.getArticles();
    articlesDef.done(listArticles);
  
    
     
   function listArticles(){
        var articleModels = articles.models;
        for (var i=0; i<articleModels.length; i++){
            var articleData = articleModels[i];
            var articleHtml = "<li data-article-id="+articleData.id+"><a href='/curs27blog/pages/article.html?id="+ articleModels[i].id+"'>"+"<h3>"+articleData.title+"</h3>"+"</a>"+
                    "<div>"+articleData.content+"</div>"+
                    "<img src=../../uploads/"+articleData.images+">"+
                    
                    "</li>";
                    articlesContainer.append(articleHtml);
        }
    }
    
    
   
 
    
});    