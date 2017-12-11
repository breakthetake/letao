$(function () {
    // 定义变量
    var myPageNum = 1;
    var myPageSize = 5;

    // 1.页面打开获取数据 渲染页面
    function getData() {
        $.ajax({
            url: "/category/querySecondCategoryPaging",
            data: {
                page: myPageNum,
                pageSize: myPageSize
            },
            success: function (backData) {
                console.log(backData)
                $('tbody').html(template('second', backData));
                $("#pagintor").bootstrapPaginator({
                    bootstrapMajorVersion: 3, //默认是2，如果是bootstrap3版本，这个参数必填
                    currentPage: myPageNum, //当前页
                    totalPages: Math.ceil(backData.total/backData.size), //总页数
                    size: "small", //设置控件的大小，mini, small, normal,large
                    onPageClicked: function (event, originalEvent, type, page) {
                        // 为按钮绑定点击事件 page:当前点击的按钮值
                        myPageNum =page;
                        // 重新获取数据
                        getData();
                    }
                });

            }
        })
    }

    // 默认调用一次
    getData();

    $("#fileupload").fileupload({
        dataType:"json",
        //e：事件对象
        //data：图片上传后的对象，通过e.result.picAddr可以获取上传后的图片地址
        done:function (e, data) {
          console.log(data);
          $('form img').attr('src',data.result.picAddr);
        }
      });

    $.ajax({
        url:'/category/queryTopCategoryPaging',
        data:{
            page:1,
            pageSize:256
        },
        success:function (data) {
            console.log(data);
            $('.dropdown-menu').html('');
            $.each(data.rows,function(i,n){
                console.log(n);
                var $li = $("<li><a href='javascript:void(0);'>"+n.categoryName+"</a></li>");
                $('.dropdown-menu').append($li);
            });
        }
    });
    $('.dropdown-menu').on('click','a',function () {  
        var clickName=$(this).html();
        $('.select-value').html(clickName);
    })
})