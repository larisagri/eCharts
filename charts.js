var chartResSo = echarts.init(document.getElementById('reseauxSociaux'));

var chart = {
    title : {
        text: 'Les Chiffres des réseaux sociaux 2016',
        subtext: 'Nombre d’utilisateurs dans le monde et en France (en millions)',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['Facebook','Instagram','Twitter','Linkedin','Snapchat','Youtube']
    },
    calculable : true,
    series : [
        {
            name:'Nombre d’utilisateurs dans le monde',
            type:'pie',
            radius : [20, 110],
            center : ['25%', '50%'],
            roseType : 'radius',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:1790, name:'Facebook'},
                {value:600, name:'Instagram'},
                {value:317, name:'Twitter'},
                {value:106, name:'Linkedin'},
                {value:300, name:'Snapchat'},
                {value:1000, name:'Youtube'}
            ]
        },
        {
            name:'Nombre d’utilisateurs en France',
            type:'pie',
            radius : [20, 110],
            center : ['75%', '50%'],
            roseType : 'radius',

            data:[
                {value:31, name:'Facebook'},
                {value:11.8, name:'Instagram'},
                {value:5.09, name:'Twitter'},
                {value:8.34, name:'Linkedin'},
                {value:10.3, name:'Snapchat'},
                {value:25.7, name:'Youtube'}
            ]
        }
    ]
};

chartResSo.setOption(chart);
