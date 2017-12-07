$(function () {
    // $('button[type=submit]').click(function (event) {
    //     event.preventDefault();
    //     $.ajax({
    //         url: '/employee/employeeLogin',
    //         data: $('form').serialize(),
    //         type: 'post',
    //         success: function (data) {
    //             console.log(data);
    //         }
    //     })
    // })
    $('form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },

        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    stringLength: {
                        min: 4,
                        max: 30,
                        message: '用户名长度必须在4到30之间'
                    },
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: '用户名长度必须在6到30之间'
                    },
                }
            }
        },
        
    }).on('success.form.bv', function (e) {
        e.preventDefault();
        NProgress.start();
        $.ajax({
            url: '/employee/employeeLogin',
            data: $('form').serialize(),
            type: 'post',
            success: function (backData) {
                console.log(backData);
                if(backData.success == true){
                    window.location.href = './index.html';
                }else{
                    var validator = $('form').data('bootstrapValidator');
                    if(backData.error == 1000){
                        validator.updateStatus('username', 'INVALID', 'callback');
                    }else if(backData.error == 1001){
                        validator.updateStatus('password', 'INVALID', 'callback');
                        
                    }
                }
                setTimeout(function () {  
                    NProgress.done();
                },1000);

            }
        })
    });
    $('button[type=reset]').click(function () {  
        var validator = $("form").data('bootstrapValidator');
        validator.resetForm();
    })
    
})