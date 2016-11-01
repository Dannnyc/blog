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
    
    
    var articleContainer = $(".js-article");
    var articles = new Articles();
    var id = location.search.split('id=')[1]
    var articleDef = articles.getArticle(id);
    articleDef.done(populateArticle);
    
    function populateArticle(){
        var articleModel = articles.model;
        $("[name='title']").val(articleModel.title);
        $("[name='content']").val(articleModel.content);
    }
    
    $("[type='submit']").on("click",function(ev){
        ev.preventDefault();
        
        var formData = new FormData();
        var titleValue = $("[name='title']").val();
        var contentValue = $("[name='content']").val();
        
        formData.append("title",titleValue);
        formData.append("id",id);
        formData.append("content",contentValue);
        
        articles.updateArticle(formData);
        
    });
});