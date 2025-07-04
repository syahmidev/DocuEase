$(function() {
  'use strict';

  $.plot('#flotBar1', [{
    data: [[0, 3], [1, 8], [2, 5], [3, 13],[4,5], [5,7],[6,4], [7,6], [8,3], [9,7]]
  }], {
    series: {
      bars: {
        show: true,
        lineWidth: 0,
        fillColor: '#b3c4cc',
        barWidth: .5
      },
      highlightColor: '#007bff'
    },
    grid: {
      borderWidth: 1,
      borderColor: '#e5e5e5',
      hoverable: true
    },
    yaxis: {
      tickColor: '#d9d9d9',
      font: {
        color: '#5f6d7a',
        size: 10
      }
    },
    xaxis: {
      tickColor: '#d9d9d9',
      font: {
        color: '#5f6d7a',
        size: 10
      }
    }
  });

  $.plot('#flotBar2', [{
    data: [[0, 3], [2, 8], [4, 5], [6, 13],[8,5], [10,7],[12,8], [14,10]],
    bars: {
      show: true,
      lineWidth: 0,
      fillColor: '#007bff',
      barWidth: .8
    }
  },{
    data: [[1, 5], [3, 7], [5, 10], [7, 7],[9,9], [11,5],[13,4], [15,6]],
    bars: {
      show: true,
      lineWidth: 0,
      fillColor: '#aab7db',
      barWidth: .8
    }
  }], {
    grid: {
      borderWidth: 1,
      borderColor: '#D9D9D9'
    },
    yaxis: {
      tickColor: '#d9d9d9',
      font: {
        color: '#666',
        size: 10
      }
    },
    xaxis: {
      tickColor: '#d9d9d9',
      font: {
        color: '#666',
        size: 10
      }
    }
  });

  var newCust = [[0, 2], [1, 3], [2,6], [3, 5], [4, 7], [5, 8], [6, 10]];
  var retCust = [[0, 1], [1, 2], [2,5], [3, 3], [4, 5], [5, 6], [6,9]];

  var plot = $.plot($('#flotLine1'),[
    {
      data: newCust,
      label: 'New Customer',
      color: '#007bff'
    },
    {
      data: retCust,
      label: 'Returning Customer',
      color: '#f10075'
    }],
    {
      series: {
        lines: {
          show: true,
          lineWidth: 2
        },
        shadowSize: 0
      },
      points: {
        show: false,
      },
      legend: {
        noColumns: 1,
        position: 'nw'
      },
      grid: {
        hoverable: true,
        clickable: true,
        borderWidth: 0,
        labelMargin: 5
      },
      yaxis: {
        min: 0,
        max: 15,
        color: '#eee',
        font: {
          size: 10,
          color: '#999'
        }
      },
      xaxis: {
        color: '#eee',
        font: {
          size: 10,
          color: '#999'
        }
      }
    });

    var plot = $.plot($('#flotLine2'),[
      {
        data: newCust,
        label: 'New Customer',
        color: '#560bd0'
      },
      {
        data: retCust,
        label: 'Returning Customer',
        color: '#85d00b'
      }],
      {
        series: {
          lines: {
            show: true,
            lineWidth: 2
          },
          shadowSize: 0
        },
        points: {
          show: true,
        },
        legend: {
          noColumns: 1,
          position: 'ne'
        },
        grid: {
          hoverable: true,
          clickable: true,
          borderColor: '#ddd',
          borderWidth: 0,
          labelMargin: 5
        },
        yaxis: {
          min: 0,
          max: 15,
          color: '#eee',
          font: {
            size: 10,
            color: '#999'
          }
        },
        xaxis: {
          color: '#eee',
          font: {
            size: 10,
            color: '#999'
          }
        }
      });



      var plot = $.plot($('#flotArea1'),[
        {
          data: newCust,
          label: 'New Customer',
          color: '#f10075'
        },
        {
          data: retCust,
          label: 'Returning Customer',
          color: '#007bff'
        }],
        {
          series: {
            lines: {
              show: true,
              lineWidth: 1,
              fill: true,
              fillColor: { colors: [ { opacity: 0 }, { opacity: 0.8 } ] }
            },
            shadowSize: 0
          },
          points: {
            show: false,
          },
          legend: {
            noColumns: 1,
            position: 'nw'
          },
          grid: {
            hoverable: true,
            clickable: true,
            borderColor: '#ddd',
            borderWidth: 0,
            labelMargin: 5
          },
          yaxis: {
            min: 0,
            max: 15,
            color: '#eee',
            font: {
              size: 10,
              color: '#999'
            }
          },
          xaxis: {
            color: '#eee',
            font: {
              size: 10,
              color: '#999'
            }
          }
        });

        var plot = $.plot($('#flotArea2'),[
          {
            data: newCust,
            label: 'New Customer',
            color: '#85d00b'
          },
          {
            data: retCust,
            label: 'Returning Customer',
            color: '#560bd0'
          }],
          {
            series: {
              lines: {
                show: true,
                lineWidth: 1,
                fill: true,
                fillColor: { colors: [ { opacity: 0 }, { opacity: 0.3 } ] }
              },
              shadowSize: 0
            },
            points: {
              show: true,
            },
            legend: {
              noColumns: 1,
              position: 'nw'
            },
            grid: {
              hoverable: true,
              clickable: true,
              borderColor: '#ddd',
              borderWidth: 0,
              labelMargin: 5
            },
            yaxis: {
              min: 0,
              max: 15,
              color: '#eee',
              font: {
                size: 10,
                color: '#999'
              }
            },
            xaxis: {
              color: '#eee',
              font: {
                size: 10,
                color: '#999'
              }
            }
          });



          var piedata = [
            { label: 'Series 1', data: [[1,10]], color: '#6610f2'},
            { label: 'Series 2', data: [[1,30]], color: '#007bff'},
            { label: 'Series 3', data: [[1,90]], color: '#85d00b'},
            { label: 'Series 4', data: [[1,70]], color: '#00cccc'},
            { label: 'Series 5', data: [[1,80]], color: '#494c57'}
          ];

          $.plot('#flotPie1', piedata, {
            series: {
              pie: {
                show: true,
                radius: 1,
                label: {
                  show: true,
                  radius: 2/3,
                  formatter: labelFormatter,
                  threshold: 0.1
                }
              }
            },
            grid: {
              hoverable: true,
              clickable: true
            }
          });

          $.plot('#flotPie2', piedata, {
            series: {
              pie: {
                show: true,
                radius: 1,
                innerRadius: 0.5,
                label: {
                  show: true,
                  radius: 2/3,
                  formatter: labelFormatter,
                  threshold: 0.1
                }
              }
            },
            grid: {
              hoverable: true,
              clickable: true
            }
          });

          function labelFormatter(label, series) {
            return '<div style="font-size:8pt; text-align:center; padding:2px; color:white;">' + label + '<br/>' + Math.round(series.percent) + '%</div>';
          }

        });
