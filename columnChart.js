var defaultTitle = "Basic drilldown";
var drilldownTitle = "More about ";
// Create the chart
Highcharts.chart('container', {
  chart: {
      type: 'column',
  },
  title: {
      text: 'TV Shows'
  },
  subtitle: {
      //text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
  },
  accessibility: {
      announceNewData: {
          enabled: true
      }
  },
  xAxis: {
      type: 'category'
  },
  yAxis: {
      title: {
          text: 'Total'
      }

  },
  legend: {
      enabled: false
  },
  plotOptions: {
      series: {
          borderWidth: 0,
          dataLabels: {
              enabled: true
              //format: '{point.y:.1f}%'
          }
      }
  },

  tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      //pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },

  series: [
      {
          name: "TV Shows",
          colorByPoint: true,
          data: [
              { name: "1925",
                y: 1,
                drilldown: "1925"},

              { name: "1946",
                y: 1,
                drilldown: "1946"},

              { name: "1963",
                y: 1,
                drilldown: "1963"},

              { name: "1967",
                y: 1,
                drilldown: "1967"},

              { name: "1968",
                y: 1,
                drilldown: "1968"},

              { name: "1972",
                y: 1,
                drilldown: "1972"},

              { name: "1974",
                y: 1,
                drilldown: "1974"},

              { name: "1977",
              y: 1,
              drilldown: "1977"},

              { name: "1979",
              y: 1,
              drilldown: "1979"},

              { name: "1981",
              y: 1,
              drilldown: "1981"},

              { name: "1985",
              y: 1,
              drilldown: "1985"},

              { name: "1986",
              y: 2,
              drilldown: "1986"},
          ]
      }
  ],
  drilldown: {
      series: [
        //1925
          { id: "1925",
            name: "Rating",
            data: [{ name: "TV-PG",
                    y: 1,
                    drilldown: "TV-PG - 1925"
                }]
          },
          //DD2
          { id:"TV-PG - 1925",
          name: "TV Shows",
          data:[{ name: "TV Shows",
                  y: 1,
              drilldown: "TV Shows - 1925"
              }]
        },
          //DD3
          { id:"TV Shows - 1925",
          name: "1 Season",
          data:[{ name: "1 Season",
                  y: 1,
              drilldown: "1 Season - 1925"
              }]
          },
          //DD4
          { id:"1 Season - 1925",
          name: "2018",
          data:[{ name: "2018",
                  y: 1,
              drilldown: "2018 - 1925"
              }]
          },
          //DD5
          { id:"2018 - 1925",
          name: "Pioneers: First Women Filmmakers*",
          data:[{ name: "Pioneers: First Women Filmmakers*",
                  y: 1
              }]
          },  

        //1946
          { id: "1946",
          name: "TV-14",
            data: [{ name: "TV-14",
                  y: 1,
                  drilldown: "TV-14 - 1946"
                }]
          },
          { id:"TV-14 - 1946",
            name: "TV Shows",
            data:[{ name: "TV Shows",
                    y: 1,
                drilldown: "TV Shows - 1946"
                }]
          },
          { id:"TV Shows - 1946",
            name: "1 Season",
            data:[{ name: "1 Season",
                    y: 1,
                drilldown: "1 Season - 1946"
                }]
          },
          { id:"1 Season - 1946",
            name: "2017",
            data:[{ name: "2017",
                    y: 1,
                  drilldown: "2017 - 1946"
                }]
          },
          { id:"2017 - 1946",
          name: "Pioneers of African-American Cinema",
          data:[{ name: "Pioneers of African-American Cinema",
                  y: 1
              }]
          },  


          //1963
          { id: "1967",
            name: "TV-G",
            data: [{ name: "TV-G",
                  y: 1,
                  drilldown: "TV-G - 1967"
                }]
          },
            { id:"TV-G - 1967",
            name: "Classic & Cult TV, TV Comedies",
            data:[{ name: "Classic & Cult TV, TV Comedies",
                    y: 1,
                drilldown: "Classic & Cult TV, TV Comedies - 1967"
                }]
          },
          { id:"Classic & Cult TV, TV Comedies - 1967",
            name: "8 Season",
            data:[{ name: "8 Season",
                    y: 1,
                drilldown: "8 Season - 1967"
                }]
          },
          { id:"8 Season - 1967",
            name: "2017",
            data:[{ name: "2017",
                    y: 1,
                  drilldown: "2017 - 1967"
                }]
          },
          { id:"2017 - 1967",
          name: "The Twilight Zone (Original Series)",
          data:[{ name: "The Twilight Zone (Original Series)",
                  y: 1
              }]
          },  
          
          //1963
          { id: "1963",
            name: "TV-PG",
            data: [{ name: "TV-PG",
                  y: 1,
                  drilldown: "TV-PG - 1963"
                }]
          },
            { id:"TV-PG - 1963",
            name: "Classic & Cult TV, TV Sci-Fi & Fantasy",
            data:[{ name: "Classic & Cult TV, TV Sci-Fi & Fantasy",
                    y: 1,
                drilldown: "Classic & Cult TV, TV Sci-Fi & Fantasy - 1963"
                }]
          },
          { id:"Classic & Cult TV, TV Sci-Fi & Fantasy - 1963",
            name: "4 Season",
            data:[{ name: "4 Season",
                    y: 1,
                drilldown: "4 Season - 1963"
                }]
          },
          { id:"4 Season - 1963",
            name: "2017",
            data:[{ name: "2017",
                    y: 1,
                  drilldown: "2017 - 1963"
                }]
          },
          { id:"2017 - 1963",
          name: "The Twilight Zone (Original Series)",
          data:[{ name: "The Twilight Zone (Original Series)",
                  y: 1
              }]
          },  

          //1968
          { id: "1968",
            name: "TV-PG",
            data: [{ name: "TV-PG",
                  y: 1,
                  drilldown: "TV-PG - 1968"
                }]
          },
            { id:"TV-PG - 1968",
            name: "Classic & Cult TV, TV Action & Adventure, TV Sci-Fi & Fantasy",
            data:[{ name: "Classic & Cult TV, TV Action & Adventure, TV Sci-Fi & Fantasy",
                    y: 1,
                drilldown: "Classic & Cult TV, TV Action & Adventure, TV Sci-Fi & Fantasy - 1968"
                }]
          },
          { id:"Classic & Cult TV, TV Action & Adventure, TV Sci-Fi & Fantasy - 1968",
            name: "3 Season",
            data:[{ name: "3 Season",
                    y: 1,
                drilldown: "3 Season - 1968"
                }]
          },
          { id:"3 Season - 1968",
            name: "2017",
            data:[{ name: "2017",
                    y: 1,
                  drilldown: "2017 - 1968"
                }]
          },
          { id:"2017 - 1968",
          name: "Star Trek",
          data:[{ name: "Star Trek",
                  y: 1
              }]
          },  

          //1972
          { id: "1972",
            name: "TV-14",
            data: [{ name: "TV-14",
                  y: 1,
                  drilldown: "TV-14 - 1972"
                }]
          },
            { id:"TV-14 - 1972",
            name: "International TV Shows, TV Comedies",
            data:[{ name: "International TV Shows, TV Comedies",
                    y: 1,
                drilldown: "International TV Shows, TV Comedies - 1972"
                }]
          },
          { id:"International TV Shows, TV Comedies - 1972",
            name: "1 Season",
            data:[{ name: "1 Season",
                    y: 1,
                drilldown: "1 Season - 1972"
                }]
          },
          { id:"1 Season - 1972",
            name: "2018",
            data:[{ name: "2018",
                    y: 1,
                  drilldown: "2018 - 1972"
                }]
          },
          { id:"2018 - 1972",
          name: "Monty Python's Fliegender Zirkus",
          data:[{ name: "Monty Python's Fliegender Zirkus",
                  y: 1
              }]
          }, 

          //1974
          { id: "1974",
            name: "NR",
            data: [{ name: "NR",
                  y: 1,
                  drilldown: "NR - 1974"
                }]
          },
            { id:"NR - 1974",
            name: "British TV Shows, Classic & Cult TV, International TV Shows",
            data:[{ name: "British TV Shows, Classic & Cult TV, International TV Shows",
                    y: 1,
                drilldown: "British TV Shows, Classic & Cult TV, International TV Shows - 1974"
                }]
          },
          { id:"British TV Shows, Classic & Cult TV, International TV Shows - 1974",
            name: "4 Season",
            data:[{ name: "4 Season",
                    y: 1,
                drilldown: "4 Season - 1974"
                }]
          },
          { id:"4 Season - 1974",
            name: "2018",
            data:[{ name: "2018",
                    y: 1,
                  drilldown: "2018 - 1974"
                }]
          },
          { id:"2018 - 1974",
          name: "Monty Python's Flying Circus",
          data:[{ name: "Monty Python's Flying Circus",
                  y: 1
              }]
          },


          //1977
          { id: "1977",
            name: "TV-PG",
            data: [{ name: "TV-PG",
                  y: 1,
                  drilldown: "TV-PG - 1977"
                }]
          },
            { id:"TV-PG - 1977",
            name: "British TV Shows, Classic & Cult TV, TV Comedies",
            data:[{ name: "British TV Shows, Classic & Cult TV, TV Comedies",
                    y: 1,
                drilldown: "British TV Shows, Classic & Cult TV, TV Comedies - 1977"
                }]
          },
          { id:"British TV Shows, Classic & Cult TV, TV Comedies - 1977",
            name: "10 Season",
            data:[{ name: "10 Season",
                    y: 1,
                drilldown: "10 Season - 1977"
                }]
          },
          { id:"10 Season - 1977",
            name: "2018",
            data:[{ name: "2018",
                    y: 1,
                  drilldown: "2018 - 1977"
                }]
          },
          { id:"2018 - 1977",
          name: "Dad's Army",
          data:[{ name: "Dad's Army",
                  y: 1
              }]
          },


          //1979
          { id: "1977",
            name: "TV-PG",
            data: [{ name: "TV-PG",
                  y: 1,
                  drilldown: "TV-PG - 1979"
                }]
          },
            { id:"TV-PG - 1979",
            name: "Classic & Cult TV, Kids' TV, Spanish-Language TV Shows",
            data:[{ name: "Classic & Cult TV, Kids' TV, Spanish-Language TV Shows",
                    y: 1,
                drilldown: "Classic & Cult TV, Kids' TV, Spanish-Language TV Shows - 1979"
                }]
          },
          { id:"Classic & Cult TV, Kids' TV, Spanish-Language TV Shows - 1979",
            name: "1 Season",
            data:[{ name: "1 Season",
                    y: 1,
                drilldown: "1 Season - 1979"
                }]
          },
          { id:"1 Season - 1979",
            name: "2017",
            data:[{ name: "2017",
                    y: 1,
                  drilldown: "2017 - 1979"
                }]
          },
          { id:"2017 - 1979",
          name: "El Chavo",
          data:[{ name: "El Chavo",
                  y: 1
              }]
          },


          //1981
          { id: "1981",
            name: "TV-Y7",
            data: [{ name: "TV-Y7",
                  y: 1,
                  drilldown: "TV-Y7 - 1981"
                }]
          },
            { id:"TV-Y7 - 1981",
            name: "Anime Series, Kids' TV",
            data:[{ name: "Anime Series, Kids' TV",
                    y: 1,
                drilldown: "Anime Series, Kids' TV - 1981"
                }]
          },
          { id:"Anime Series, Kids' TV - 1981",
            name: "1 Season",
            data:[{ name: "1 Season",
                    y: 1,
                drilldown: "1 Season - 1981"
                }]
          },
          { id:"1 Season - 1981",
            name: "2018",
            data:[{ name: "2018",
                    y: 1,
                  drilldown: "2018 - 1981"
                }]
          },
          { id:"2018 - 1981",
          name: "Ninja Hattori",
          data:[{ name: "Ninja Hattori",
                  y: 1
              }]
          },


          //1985
          { id: "1985",
            name: "TV-MA",
            data: [{ name: "TV-MA",
                  y: 1,
                  drilldown: "TV-MA - 1985"
                }]
          },
            { id:"TV-MA - 1985",
            name: "Anime Series",
            data:[{ name: "Anime Series",
                    y: 1,
                drilldown: "Anime Series - 1985"
                }]
          },
          { id:"Anime Series - 1985",
            name: "1 Season",
            data:[{ name: "1 Season",
                    y: 1,
                drilldown: "1 Season - 1985"
                }]
          },
          { id:"1 Season - 1985",
            name: "2016",
            data:[{ name: "2016",
                    y: 1,
                  drilldown: "2016 - 1985"
                }]
          },
          { id:"2016 - 1985",
          name: "Robotech",
          data:[{ name: "Robotech",
                  y: 1
              }]
          },


          //1986
          { id: "1986",
            name: "Rating",
            data: [{ name: "TV-14",
                  y: 1,
                  drilldown: "TV-14 - 1986"
                },
                { name: "TV-PG",
                  y: 1,
                  drilldown: "TV-PG - 1986"
                },]
          },
          //TV-14 - 1986
            { id:"TV-14 - 1986",
            name: "TV Dramas",
            data:[{ name: "TV Dramas",
                    y: 1,
                drilldown: "TV Dramas - 1986"
                }]
          },
          { id:"TV Dramas - 1986",
            name: "1 Season",
            data:[{ name: "1 Season",
                    y: 1,
                drilldown: "1 Season - 1986"
                }]
          },
          { id:"1 Season - 1986",
            name: "2019",
            data:[{ name: "2019",
                    y: 1,
                  drilldown: "2019 - 1986"
                }]
          },
          { id:"2019 - 1986",
          name: "Shaka Zulu",
          data:[{ name: "Shaka Zulu",
                  y: 1
              }]
          },
           //TV-PG - 1986
           { id:"TV-PG - 1986",
           name: "Anime Series",
           data:[{ name: "Anime Series",
                   y: 1,
               drilldown: "Anime Series - 1986"
               }]
         },
         { id:"Anime Series - 1986",
           name: "3 Season",
           data:[{ name: "3 Season",
                   y: 1,
               drilldown: "3 Season - 1986"
               }]
         },
         { id:"3 Season - 1986",
           name: "2020",
           data:[{ name: "2020",
                   y: 1,
                 drilldown: "2020 - 1986"
               }]
         },
         { id:"2020 - 1986",
         name: "Saint Seiya",
         data:[{ name: "Saint Seiya",
                 y: 1
             }]
         },

          
        
      ]
  }
});