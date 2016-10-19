$(window).ready(function(){
    var user = new User();
    var userDef = User.login();
    userDef.done(redirect);
    
    function login(){
        var email = $("[name='email-value']").val();
        var password = $("[name='password']").val();
        
        var ajaxOptions = {
            url:"https://test-danciocoiu.c9users.io/curs22/login",
            type:"POST",
            dataType:"json",
            data:{
                email:email,
                password:password
            },
            success:function(resp){
                console.log(resp);
            },
            error:function(xhr,status,errorMessage){
                console.log("Error status:"+status);
            },
            complete:function(){
                console.log("AJAX Req has completed");
            }
        };
        $.ajax(ajaxOptions);
    }
})