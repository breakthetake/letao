$(function () {
    var myChart1 = echarts.init(document.getElementById('main_left'));
    var myChart2 = echarts.init(document.getElementById('main_right'));
    // 指定图表的配置项和数据
    var option1 = {
        title: {
            text: '2017年注册人数'
        },
        tooltip: {},
        legend: {
            data: ['人数']
        },
        xAxis: {
            data: ["1月", "2月", "3月", "4月", "5月", "6月"]
        },
        yAxis: {},
        series: [{
            name: '人数',
            type: 'bar',
            data: [5000, 20000, 36000, 10000, 10000, 20000]
        }]
    };
    option2 = {
        title : {
            text: '热门品牌来源',
            subtext: '2017-6',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['耐克','阿迪','百伦','安踏','李宁']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'耐克'},
                    {value:310, name:'阿迪'},
                    {value:234, name:'百伦'},
                    {value:135, name:'安踏'},
                    {value:1548, name:'李宁'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    
    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option1);
    myChart2.setOption(option2);

    // $('.r-head >a').first().click(function () {  
    //     $('.manage-left').toggle();
    //     $('.manage-right').toggleClass("fullScreen");
    // });
    // // $('.manage-right a.glyphicon-log-out').click(function () {  
    // //     $('.modal-sure').modal('show');
    // // })
    // $('.modal-sure .btn-primary').click(function () {  
    //     $('.modal-sure').modal('hide');
    //     $.ajax({
    //         url:'/employee/employeeLogout',
    //         success:function (backData) {
    //              window.location.href='./login.html';
    //         }
    //     })
       
    // });

    // //侧边栏用户管理展开与收起
    // $('.l-main ul >li:eq(1)>a').click(function () {  
    //     $(this).siblings('ol').slideToggle();
    // })

})