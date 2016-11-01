$(window).ready(function(){
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
    
    $("[type='submit']").on("click",function(ev){
        ev.preventDefault();
        
        var formData = new FormData();
        var titleValue = $("[name='title']").val();
        var contentValue = $("[name='content']").val();
        var fileInput = $("[name='images']")[0];
        
        formData.append("title",titleValue);
        formData.append("content",contentValue);
        formData.append("file",fileInput.files[0]);
        
        var articles = new Articles();
        articles.addArticle(formData);
        

    });
    
});