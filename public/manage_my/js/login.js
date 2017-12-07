$(function () {  
    $('button[type=submit]').click(function (event) {  
        event.preventDefault();
        $.ajax({
            url:'/employee/employeeLogin',
            data:$('form').serialize(),
            type:'post',
            success:function (data) { 
                console.log(data);
             }
    })
    })
    
})