function Comments(){
    this.models = [];
}


Comments.prototype.add = function(commentData){
    var that= this;
    $.ajax({
            url:"https://test-danciocoiu.c9users.io/curs22/comments/add",
            data:commentData,
            dataType:"json",
            type:"POST",
            success:function(resp){
                that.model = commentData;
                that.model.id = resp.id;
               
            },
           error:function(xhr,status,errorMessage){
                console.log("Error status:"+status);
            }
        });
}


Comments.prototype.getComments = function(articleId){
     var that= this;
      return $.ajax({
            url:"https://test-danciocoiu.c9users.io/curs22/comments",
            type:"GET",
            data:{
                id:articleId
            },
            success:function(resp){
               for(var i = 0; i<resp.length; i++){
                    var comment = new Comment(resp[i]);
                    that.models.push(comment);
                }
            },
            error:function(){
                console.log("Error displaying comments");
            }
        });
    }
    