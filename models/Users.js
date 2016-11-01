function Users(){
    

}
Users.prototype.login = function(email, password) {
       
        
        var ajaxOptions = {
            url:"https://test-danciocoiu.c9users.io/curs22/login",
            type:"POST",
            dataType:"json",
            data:{
                email:email,
                password:password
            },
            success:function(resp){
                window.currentUser = resp;
            },
            error:function(xhr,status,errorMessage){
                console.log("Error status:"+status);
            },
            complete:function(){
                console.log("AJAX Req has completed");
            }
        };
        return $.ajax(ajaxOptions);
    }
