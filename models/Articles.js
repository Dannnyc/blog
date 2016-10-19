function Articles(){
    this.models = [];
}

Articles.prototype.getArticles = function(){
    var that = this;
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
    
}

Articles.prototype.add = function(){
         $.ajax({
            url:"https://test-danciocoiu.c9users.io/curs22/articles/add",
            type:"POST",
            data:formData,
            processData:false,
            contentType:false,
            success:function(resp){
                getArticles()
            },
            error:function(){
                console.log("oopsss");
            }
        });
    //Do AJAX request to URL: https://test-danciocoiu.c9users.io/curs22/articles/add"
    //Method POST
    
}