/**
 * Created by Team Kony.
 * Copyright (c) 2017 Kony Inc. All rights reserved.
 */
konymp = {};
konymp.charts = konymp.charts || {};

konymp.charts.donut = function(){
  
};

konymp.charts.donut.prototype.createClass = function(name, rules) {
  	var style = document.createElement('style');
    style.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(style);
    if(!(style.sheet||{}).insertRule) 
        (style.styleSheet || style.sheet).addRule(name, rules);
    else
        style.sheet.insertRule(name+"{"+rules+"}",0);
};

konymp.charts.donut.prototype.createDonutChart = function(id,labels,series,options,opacity,enableAnimation){
  var ptr=0;
  var chart = new Chartist.Pie(id, {
    labels:labels,
    series: series[0]

  }, options, [
    ['screen and (min-width: 640px)', {
      chartPadding: 60,
      labelOffset: 40,
      labelDirection: 'implode',
      labelInterpolationFnc: function(value) {
        return value;
      }
    }],
    ['screen and (min-width: 1024px)', {
      labelOffset: 40,
      chartPadding: 20
    }]
  ]);
  chart.on('draw', function (data) {  
    if(data.type === 'slice') {
      
      var pathLength = data.element._node.getTotalLength();
      var wid = document.getElementById('pie1').offsetHeight;
      wid = wid/5;
      data.element.attr({
        style:'opacity:'+opacity+';stroke-width:'+wid+"px;",
        'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
      }); 
     
      var animationDefinition = {
        'stroke-dashoffset': {
          id: 'anim' + data.index,
          dur: 100 * data.value / data.totalDataSum,
          from: -pathLength + 'px',
          to: '0px',
          fill: 'freeze'
        }
      };
      if(!enableAnimation){
        return;
      }
      if (data.index !== 0) {
        animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
      }

      data.element.attr({
        'stroke-dashoffset': -pathLength + 'px'
      });
      
      data.element.animate(animationDefinition, false);
      if (parseInt(data.endAngle) === 360) {
        var index = data.index;
        var dur = 1000 * data.value / data.totalDataSum / 2;
        var from = 0;
        var to = -pathLength / 3;
        for (var i = 0; i < 4; i++) {
          data.element.animate({
            'stroke-dashoffset': {
              id: 'anim' + (index + 1),
              dur: dur,
              from: from + 'px',
              to: to + 'px',
              fill: 'freeze',
              begin: 'anim' + index + '.end'
            }
          }, false);

          index++;
          dur /= 1.75;

          var t = from;
          from = to;
          to = t / 2.5;
        }
      }
    }
  });
};

konymp.charts.donut.prototype.createDonutCharts_UI = function(lbls,srs,legends,enableAnimation)
{
  var myNode = document.getElementById("legends");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  var sum = function(a, b) { return a + b;};
  var offset  = document.getElementById('pie1').offsetWidth;
  var width = parseInt(offset/3);
  this.createDonutChart.call(this,'#pie1',lbls,srs,{
    showLabel:true,
    labelInterpolationFnc: function(srs,sum,value, idx) {
      return  srs[0][idx].value || srs[0][idx];
    }.bind(this,srs,sum),
    plugins:legends===true? [
      Chartist.plugins.legend( {
        horizontalAlign: "right",
        clickable:false,
        position: document.getElementById('legends')
      })
    ]:[],
    donut: true,
    donutWidth: width,
  },0.9,enableAnimation);

};

konymp.charts.donut.prototype.Updatecss = function(colors)
{
   var regColorcode = /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/;
  for(var i in colors)
    {
      if(colors[i]!==""&&regColorcode.test(colors[i]))
      {  
       this.createClass('.ct-legend .ct-series-'+i+':before',"  background-color:"+colors[i]+"; border-color:"+colors[i]+";");
        var _char = String.fromCharCode(parseInt(97+Number(i)));
        this.createClass('.ct-series-'+_char+' .ct-slice-donut',"  stroke:"+colors[i]+";");
      }
    }
};

konymp.charts.donut.prototype.setProperties = function(properties){
    this.createClass(".ct-legend.ct-legend-inside","position: absolute;top: 0;left: 0;margin-left:0px;"+
                 "font-family :Arial, Helvetica, sans-serif;"+
		         " font-size : "+parseInt(properties._legendFontSize)*10+"%; color : "+properties._legendFontColor+";"
                );
};

konymp.charts.donut.prototype.Generate_DoughnutChart = function(title,labels,data,colors,properties){
  if(document.readyState === "complete")
{
    this.setProperties(properties);
   document.getElementById('lblTitle').style.color = properties._titleFontColor||'#000000';
   document.getElementById('lblTitle').style.fontSize =properties._titleFontSize!==undefined? parseInt(properties._titleFontSize)*10+'%':'120%'; 
   document.getElementById('lblTitle').style.fontFamily = 'Arial, Helvetica, sans-serif';
   document.getElementById('lblTitle').innerHTML = title;
   document.body.style.backgroundColor = properties._bgColor;
    this.Updatecss(colors);
    this.createDonutCharts_UI(labels,[data],properties._enableLegend,properties._enableChartAnimation);
    return true;
  }
  else
  {
    return false;
  }
};

window.onload = function(){
  console.log(navigator.userAgent);
  	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    	return true;
	}
  var x = new konymp.charts.donut();
    var data = [
                            {
                                "colorCode": "#F00008",
                                "label": "Rent",
                                "value": "40"
                            },
                            {
                                "colorCode": "#FF4C42",
                                "label": "Dining",
                                "value": "20"
                            },
                            {
                                "colorCode": "#FFC53C",
                                "label": "Shopping",
                                "value": "15"
                            },
                            {
                                "colorCode": "#E67102",
                                "label": "Health",
                                "value": "10"
                            },
                            {
                                "colorCode": "#493F40",
                                "label": "Gas",
                                "value": "7"        
                            },
							{
                                "colorCode": "#458637",
                                "label": "Travel",
                                "value": "5"        
                            },
							{
                                "colorCode": "#1044C5",
                                "label": "Other",
                                "value": "3"        
                            }
                        ];
  
  var Data = data.map(function(obj){
          return Number(obj.Value||obj.value);
        });
        var labels = data.map(function(obj){
          return obj.label;
        });
        var colors = data.map(function(obj){
          return obj.colorCode;
        });
  var properties = {_titleFontSize:12,
                    _titleFontColor:"#000000",
                    _enableLegend:true,
                    _legendFontSize:10,
                    _legendFontColor:"#000000",
                    _bgColor:"#ffffff",
                    _enableChartAnimation:true,
    				_enableStaticPreview: true
  };
  x.Generate_DoughnutChart("",labels,data,colors,properties);
};
