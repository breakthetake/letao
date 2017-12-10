$(function () {  
    $('.r-head >a').first().click(function () {  
        $('.manage-left').toggle();
        $('.manage-right').toggleClass("fullScreen");
    });
    // $('.manage-right a.glyphicon-log-out').click(function () {  
    //     $('.modal-sure').modal('show');
    // })
    $('.modal-sure .btn-primary').click(function () {  
        $('.modal-sure').modal('hide');
        $.ajax({
            url:'/employee/employeeLogout',
            success:function (backData) {
                 window.location.href='./login.html';
            }
        });
    });

    //侧边栏用户管理展开与收起
    $('.l-main ul >li:eq(1)>a').click(function () {  
        $(this).siblings('ol').slideToggle();
    });
})