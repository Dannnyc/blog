$(window).ready(function(){
    /*This needs to be added on every page that should be accesed only by admin users*/
     function checkSession(){
        $.ajax({
            url:"https://test-danciocoiu.c9users.io/curs22/session",
            type:"GET",
            success:function(resp) {
                //resp = JSON.parse(resp);
                if (resp.logged ===  false){
                    window.location.href = "https://test-danciocoiu.c9users.io/curs27blog/pages/index.html"
                } else {
                    console.log("user is admin");
                }
            }
        })
    }
    checkSession();    
    
    var articlesContainer = $(".js-articles");
    var articles = new Articles();
    var articlesDef = articles.getArticles();
    articlesDef.done(listArticles);
     
    $( "#logout" ).click( function() {
            $.ajax({
            url:"https://test-danciocoiu.c9users.io/curs22/logout",
            type:"GET",
            success:function(resp) {
                   window.location.href = "https://test-danciocoiu.c9users.io/curs27blog/pages/index.html"
                
            }
        })
    }); 
     
    function listArticles(){
        var articleModels = articles.models;
        for (var i=0; i<articleModels.length; i++){
            var articleData = articleModels[i];
            var articleHtml = "<li data-article-id="+articleData.id+"><h3>"+articleData.title+"</h3>"+
                    "<div>"+articleData.content+"</div>"+
                    "<img src=../../uploads/"+articleData.images+">"+
                    "<button class='js-delete-article' data-article-id="+articleModels[i].id+">Delete</button>"+
                    "<button class='js-edit-article'><a href='https://test-danciocoiu.c9users.io/curs27blog/pages/editarticle.html?id=" + articleModels[i].id + "'>Edit content</a></button>"+
                    "</li>";
                    articlesContainer.append(articleHtml);
        }
             
             
        
       $(".js-delete-article").on( "click", function() {
         var articleId = $(this).data("article-id");
         var list = $(this).closest('.article-list');
         var articleDef = articles.delete(articleId);
         articleDef.done($(this).closest('.article-list').remove());
         location.reload();
        });
    }
    
 });    