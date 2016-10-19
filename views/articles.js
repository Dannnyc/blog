$(window).ready(function(){
    var articlesContainer = $(".js-articles");
    var articles = new Articles();
    var articlesDef = articles.getArticles();
    articlesDef.done(listArticles);
  
    
     
    function listArticles(){
        var articleModels = articles.models;
        for (var i=0; i<articleModels.length; i++){
            var articleData = articleModels[i];
            var articleHtml = "<li data-article-id="+articleData.id+"><h3>"+articleData.title+"</h3>"+
                    "<div>"+articleData.content+"</div>"+
                    "<img src=../../uploads/"+articleData.images+">"+
                    "</li>";
                    articlesContainer.append(articleHtml);
        }
    }
    
    
    var formData = new FormData();
    var titleValue = $("[name='title']").val();
    var contentValue = $("[name='content']").val();
    var fileInput = $("[name='images']")[0];
        
    formData.append("title",titleValue);
    formData.append("content",contentValue);
    formData.append("file",fileInput.files[0]);
    
    
    
});    