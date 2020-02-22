// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require_tree .
//= require jquery
//= require Chart.min


$(function(){
 
        var drawGraph = function(data){
            var ctx = document.getElementById('comparison').getContext('2d');
          // データ1
            var data1 = {
                label:'商品1',
                data:data[1],
                backgroundColor: "rgba(250, 50, 50, 0.3)",
                borderColor: "rgba(200, 50, 50, 0.3)",
                pointHoverBackgroundColor: "rgba(200, 50, 50, 0.3)",
                pointHoverBorderColor: "rgba(200, 50, 50, 0.3)",
            };
          // データ2
            var data2 = {
                label:'商品2',
                data:data[2],
                backgroundColor: "rgba(50, 50, 250, 0.3)",
                borderColor: "rgba(50, 50, 200, 0.3)",
                pointHoverBackgroundColor: "rgba(50, 50, 200, 0.3)",
                pointHoverBorderColor: "rgba(50, 50, 200, 0.3)",
            }
          // ラベル(横軸)
            var label = data[0];
 
          // データの設定
            var config = {
                type: 'radar', // グラフの種類（レーダーチャートを指定）
                data: { labels: label, datasets: [data1, data2]},
 
                // オプション設定
                options: {
                    //凡例の設定
                    legend: {
                      position: 'left',
                    },
                    // レスポンシブ指定
                    responsive: true,
                    //スケールの設定
                    scale: {
                        pointLabels: {
                            fontSize: 15,
                        },
                        ticks: {
                            // 目盛り値のカスタマイズ
                            stepSize: 1,
                            // 最小値の値を0指定
                            beginAtZero:true,
                            min: 0,
                            // 最大値を指定
                            max: 5,
                        }
                    }
                }
            }
 
          var myChartGraph = new Chart(ctx, config);
 
        };
 
        // ラベルの設定
        var data = [['価格', 'デザイン', '処理能力', '拡張性', 'ブランド力','機能性'],
                    [3, 5, 4, 2, 4, 2],
                    [5, 3, 3, 4, 3, 4]]
        drawGraph(data);
    })
