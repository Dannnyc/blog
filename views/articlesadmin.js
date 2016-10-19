$(window).ready(function(){
    /*This needs to be added on every page that should be accesed only by admin users*/
     function checkSession(){
        $.ajax({
            url:"https://test-danciocoiu.c9users.io/curs22/session",
            type:"GET",
            success:function(resp) {
                resp = JSON.parse(resp);
                if (resp.logged ===  false){
                    window.location.href = "https://test-danciocoiu.c9users.io/curs27blog/"
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
     
    function listArticles(){
        var articleModels = articles.models;
        for (var i=0; i<articleModels.length; i++){
            var articleData = articleModels[i];
            var articleHtml = "<li data-article-id="+articleData.id+"><h3>"+articleData.title+"</h3>"+
                    "<div>"+articleData.content+"</div>"+
                    "<img src=../uploads/"+articleData.images+">"
                    "<div class='js-article-comments'></div>"+
                    "<textarea class='comment-text'>xz</textarea>"+
                    "<button class=js-add-comment>Add Comment</button>"
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
        //here we are appending to the form data, our image
        formData.append("file",fileInput.files[0]);
        
        $.ajax({
            url:"https://test-danciocoiu.c9users.io/curs22/articles/add",
            type:"POST",
            data:formData,
            processData:false,
            contentType:false,
            success:function(resp){
                listArticles()
            },
            error:function(){
                console.log("oopsss");
            }
        });
        
    });


});  