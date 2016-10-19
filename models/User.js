function User(options){
    this.first_name	= options.first_name;
    this.last_name = options.last_name;
    this.id = options.id;
    this.age = options.age;
    this.email = options.email;
}

User.prototype.login = function(){
        
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
        $.ajax(ajaxOptions);
    
}