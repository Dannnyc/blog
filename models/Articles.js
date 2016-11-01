function Articles(){
    this.models = [];
}

Articles.prototype.getArticles = function() {
    var that= this;
    return $.ajax({
            url:"https://test-danciocoiu.c9users.io/curs22/articles",
            type:"GET",
            dataType:"json",
            success:function(resp){
                for(var i = 0; i<resp.length; i++){
                    var article = new Article(resp[i]);
                    that.models.push(article);
                }
            },
            error:function(xhr,status,errorMessage){
                console.log("Error status:"+status);
            }
        });
}

Articles.prototype.delete = function(articleId){
    
    //Do AJAX request to URL:https://test-danciocoiu.c9users.io/curs22/delete?id=+articleId"
    //Method POST 
    return $.ajax({
            url:"https://test-danciocoiu.c9users.io/curs22/articles/delete?id="+articleId,
            type:"POST",
            dataType:"json",
            success:function(resp){
            },
            error:function(xhr,status,errorMessage){
                console.log("Error status:"+status);
            }
        });
}

Articles.prototype.getArticle = function(articleId){
    var that= this;
    return $.ajax({
            url:"https://test-danciocoiu.c9users.io/curs22/articles/get?id="+articleId,
            type:"GET",
            dataType:"json",
            success:function(resp){
                var article = new Article(resp);
                that.model = article;
            },
            error:function(xhr,status,errorMessage){
                console.log("Error status:"+status);
            }
        });
}




    //Do AJAX request to URL: https://test-danciocoiu.c9users.io/curs22/articles/add"
    //Method POST
Articles.prototype.addArticle = function(formData){    
        $.ajax({
            url:"https://test-danciocoiu.c9users.io/curs22/articles/add",
            type:"POST",
            data:formData,
            processData:false,
            contentType:false,
            success:function(resp){
                window.location.href = "https://test-danciocoiu.c9users.io/curs27blog/pages/articlesadmin.html";
            },
            error:function(){
                console.log("oopsss1");
            }
        });
        
};

Articles.prototype.updateArticle = function(formData){   
        $.ajax({
            url:"https://test-danciocoiu.c9users.io/curs22/articles/update",
            type:"POST",
            data:formData,
            processData:false,
            contentType:false,
            success:function(resp){
                window.location.href = "https://test-danciocoiu.c9users.io/curs27blog/pages/articlesadmin.html";
            },
            error:function(){
                console.log("oopsss2");
            }
        });
};

