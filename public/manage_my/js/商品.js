$(function () {
    // 0.定义变量
    var myPageNum = 1;
    var myPageSize = 5;

    // 1页面打开 获取数据
    function getData() {
        $.ajax({
            url: "/product/queryProductDetailList",
            data: {
                page: myPageNum,
                pageSize: myPageSize,
            },
            success: function (backData) {
                // console.log(bacKData);
                // 渲染数据
                $('tbody').html(template('products', backData));
                // 初始化 分页控件
                $(".pagination").bootstrapPaginator({
                    bootstrapMajorVersion: 3, //默认是2，如果是bootstrap3版本，这个参数必填
                    currentPage: myPageNum, //当前页
                    totalPages: Math.ceil(backData.total / backData.size), //总页数
                    size: "small", //设置控件的大小，mini, small, normal,large
                    onPageClicked: function (event, originalEvent, type, page) {
                        // 为按钮绑定点击事件 page:当前点击的按钮值
                        myPageNum = page;
                        // 重新获取数据
                        getData();
                    }
                });
            }
        })
    }
    // 默认调用一次 getData()
    getData();

    // 文件上传
    $("#fileupload").fileupload({
        dataType: "json",
        //e：事件对象
        //data：图片上传后的对象，通过e.result.picAddr可以获取上传后的图片地址
        done: function (e, data) {
            console.log(data);
              $('<img style="width:100px;height:100px;" src="' + data.result.picAddr + '"/>').appendTo('form .form-group:last');
              if ($('form .form-group:last img').length == 3) {
                // 人为更新字段
                $('form').data('bootstrapValidator').updateStatus('pic1', 'VALID');
            }
        }
    });

    // 超出禁止选择图片
    $('#fileUpload').click(function (event) {
        // 图片==3
        if ($('form .form-group:last img').length == 3) {
            // 阻止file的 默认行为
            event.preventDefault();
        }
        console.log('你点我啦');
    })


    // 表单验证

    //使用表单校验插件
    $('form').bootstrapValidator({
        //1. 指定不校验的类型，默认为[':disabled', ':hidden', ':not(:visible)'],可以不设置
        excluded: [],

        //2. 指定校验时的图标显示，默认是bootstrap风格
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },

        //3. 指定校验字段
        fields: {
            //校验用户名，对应name表单的name属性
            proName: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '分类不能为空'
                    },
                }
            },
            oldPrice: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                }
            },
            price: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                }
            },
            proDesc: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                }
            },
            size: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                }
            },
            statu: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                }
            },
            num: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                }
            },
            brandId: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                }
            },
        }
    }).on('success.form.bv', function (e) {
        e.preventDefault();
        //使用ajax提交逻辑
        $.ajax({
            url:'/product/addProduct',
            data:$('form').serialize(),
            type:'post',
            success:function (backData) {  
                console.log(backData);
                $('form input').val('');
                $('.modal-add').modal('hide');
                getData();
            }
        })
    });
})