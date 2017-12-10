$(function () {
    var mypageNum = 1;
    var mypageSize = 5;

    function getData() {
        $.ajax({
            url: '/user/queryUser',
            data: {
                page: mypageNum,
                pageSize: mypageSize
            },
            success: function (backData) {
                console.log(backData);
                $('tbody').html(template('user', backData));
                $("#pagintor").bootstrapPaginator({
                    bootstrapMajorVersion: 3, //默认是2，如果是bootstrap3版本，这个参数必填
                    currentPage: mypageNum, //当前页
                    totalPages: Math.ceil(backData.total / backData.size), //总页数
                    size: "small", //设置控件的大小，mini, small, normal,large
                    onPageClicked: function (event, originalEvent, type, page) {
                        //为按钮绑定点击事件 page:当前点击的按钮值
                        console.log(page);
                        // 设置给变量
                        mypageNum = page;
                        // 重新获取数据
                        getData();
                    }
                });
            }
        });
    };
    getData();

    $('tbody').on('click', 'button', function () {
        var id = $(this).parent().attr('data-id');
        var isDelete = undefined;
        if($(this).html()=="启用"){
            isDelete = 0;
        }else{
            isDelete = 1;
        }
        $.ajax({
            url:'/user/updateUser',
            data:{
                id:id,
                isDelete:isDelete
            },
            type:'post',
            success:function (backData) {  
                getData();
            }
        })
    })
})