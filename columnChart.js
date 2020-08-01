https://docs.google.com/spreadsheets/d/1pcQ_VS5BA8O2q4jbl6WhEmz4ATbfnTJsGmgKcnHCnEY/edit#gid=0
// Create the chart
Highcharts.chart('container', {
  chart: {
      type: 'column',
  },
  title: {
      text: 'Series de Netflix'
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

              { name: "1988",
              y: 2,
              drilldown: "1988"},

              { name: "1989",
              y: 1,
              drilldown: "1989"},

              { name: "1990",
              y: 3,
              drilldown: "1990"},

              { name: "1991",
              y: 1,
              drilldown: "1991"},

              { name: "1992",
              y: 2,
              drilldown: "1992"},

              { name: "1993",
              y: 3,
              drilldown: "1993"},

              { name: "1994",
              y: 1,
              drilldown: "1994"},

              { name: "1995",
              y: 2,
              drilldown: "1995"},

              { name: "1996",
              y: 3,
              drilldown: "1996"},

              { name: "1997",
              y: 4,
              drilldown: "1997"},

              { name: "1998",
              y: 3,
              drilldown: "1998"},

              { name: "1999",
              y: 4,
              drilldown: "1999"},

              { name: "2000",
              y: 3,
              drilldown: "2000"},

              { name: "2001",
              y: 4,
              drilldown: "2001"},

              { name: "2002",
              y: 3,
              drilldown: "2002"},

              { name: "2003",
              y: 8,
              drilldown: "2003"},

              { name: "2004",
              y: 9,
              drilldown: "2004"},

              { name: "2005",
              y: 12,
              drilldown: "2005"},

              { name: "2006",
              y: 9,
              drilldown: "2006"},

              { name: "2007",
              y: 11,
              drilldown: "2007"},
              
              { name: "2008",
              y: 20,
              drilldown: "2008"},

              { name: "2009",
              y: 34,
              drilldown: "2009"},

              { name: "2010",
              y: 38,
              drilldown: "2010"},



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

         //1988
         { id: "1988",
            name: "Rating",
            data: [{ name: "TV-G",
                  y: 1,
                  drilldown: "TV-G - 1988"
                },
                { name: "TV-PG",
                  y: 1,
                  drilldown: "TV-PG - 1988"
                },]
          },
          //TV-G 1988
         { id:"TV-G - 1988",
         name: "Docuseries, Reality TV",
         data:[{ name: "Docuseries, Reality TV",
                 y: 1,
             drilldown: "Docuseries, Reality TV - 1988"
             }]
       },
        { id:"Docuseries, Reality TV - 1988",
          name: "1 Season",
          data:[{ name: "1 Season",
                  y: 1,
              drilldown: "1 Season - 1988"
              }]
        },
        { id:"1 Season - 1988",
          name: "2017",
          data:[{ name: "2017",
                  y: 1,
                drilldown: "2017 - 1988"
              }]
        },
        { id:"2017 - 1988",
        name: "High Risk",
        data:[{ name: "High Risk",
                y: 1
            }]
        },
        //TV-PG - 1988
        { id:"TV-PG - 1988",
        name: "TV Dramas",
        data:[{ name: "TV Dramas",
                y: 1,
            drilldown: "TV Dramas - 1988"
            }]
      },
      { id:"TV Dramas - 1988",
        name: "5 Season",
        data:[{ name: "5 Season",
                y: 1,
            drilldown: "5 Season - 1988"
            }]
      },
      { id:"5 Season - 1988",
        name: "2020",
        data:[{ name: "2020",
                y: 1,
              drilldown: "2020 - 1988"
            }]
      },
      { id:"2020 - 1988",
      name: "Highway to Heaven",
      data:[{ name: "Highway to Heaven",
              y: 1
          }]
      },


      //1989
        { id: "1989",
        name: "Rating",
        data: [{ name: "TV-Y7",
                y: 1,
                drilldown: "TV-Y7 - 1989"
            }]
          },
          { id:"TV-Y7 - 1989",
          name: "Kids' TV",
          data:[{ name: "Kids' TV",
                  y: 1,
              drilldown: "Kids' TV - 1989"
              }]
          },
          { id:"Kids' TV - 1989",
          name: "1 Season",
          data:[{ name: "1 Season",
                  y: 1,
              drilldown: "1 Season - 1989"
              }]
          },
          { id:"1 Season - 1989",
          name: "2016",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "2016 - 1989"
              }]
          },
          { id:"2016 - 1989",
          name: "The Super Mario Bros. Super Show!",
          data:[{ name: "The Super Mario Bros. Super Show!",
                  y: 1
              }]
          },  

          //1990
          { id: "1990",
          name: "Rating",
          data: [{ name: "TV-14",
                y: 1,
                drilldown: "TV-14 - 1990"
              },
              { name: "TV-MA",
                y: 1,
                drilldown: "TV-MA - 1990"
              },
              { name: "TV-PG",
              y: 1,
              drilldown: "TV-PG - 1990"
            },]      
        },
        //TV-14 1990
          { id:"TV-14 - 1990",
          name: "Docuseries",
          data:[{ name: "Docuseries",
                  y: 1,
              drilldown: "Docuseries - 1990"
              }]
        },
          { id:"Docuseries - 1990",
            name: "1 Season",
            data:[{ name: "1 Season",
                    y: 1,
                drilldown: "1 Season - 1990"
                }]
          },
          { id:"1 Season - 1990",
            name: "2017",
            data:[{ name: "2017",
                    y: 1,
                  drilldown: "2017 - 1990"
                }]
          },
          { id:"2017 - 1990",
          name: "Ken Burns: The Civil War",
          data:[{ name: "Ken Burns: The Civil War",
                  y: 1
              }]
          },
          //TV-MA - 1990
          { id:"TV-MA - 1990",
          name: "Classic & Cult TV, Crime TV Shows, TV Dramas",
          data:[{ name: "Classic & Cult TV, Crime TV Shows, TV Dramas",
                  y: 1,
              drilldown: "Classic & Cult TV, Crime TV Shows, TV Dramas - 1990"
              }]
        },
        { id:"Classic & Cult TV, Crime TV Shows, TV Dramas - 1990",
          name: "2 Season",
          data:[{ name: "2 Season",
                  y: 1,
              drilldown: "2 Season - 1990"
              }]
        },
        { id:"2 Season - 1990",
          name: "2017",
          data:[{ name: "2017",
                  y: 1,
                drilldown: "2017 - 1990"
              }]
        },
        { id:"2017 - 1990",
        name: "Twin Peaks",
        data:[{ name: "Twin Peaks",
                y: 1
            }]
        },
        //TV-PG - 1990
        { id:"TV-PG - 1990",
        name: "Classic & Cult TV, Kids' TV, TV Comedies",
        data:[{ name: "Classic & Cult TV, Kids' TV, TV Comedies",
                y: 1,
            drilldown: "Classic & Cult TV, Kids' TV, TV Comedies - 1990"
            }]
      },
      { id:"Classic & Cult TV, Kids' TV, TV Comedies - 1990",
        name: "5 Season",
        data:[{ name: "5 Season",
                y: 1,
            drilldown: "5 Season - 1990"
            }]
      },
      { id:"5 Season - 1990",
        name: "2014",
        data:[{ name: "2014",
                y: 1,
              drilldown: "2014 - 1990"
            }]
      },
      { id:"2014 - 1990",
      name: "Pee-wee's Playhouse",
      data:[{ name: "Pee-wee's Playhouse",
              y: 1
          }]
      },

      //1991
      { id: "1991",
      name: "Rating",
      data: [{ name: "TV-G",
              y: 1,
              drilldown: "TV-G - 1991"
          }]
        },
        { id:"TV-G - 1991",
        name: "TV Shows",
        data:[{ name: "TV Shows",
                y: 1,
            drilldown: "TV Shows - 1991"
            }]
        },
        { id:"TV Shows - 1991",
        name: "1 Season",
        data:[{ name: "1 Season",
                y: 1,
            drilldown: "1 Season - 1991"
            }]
        },
        { id:"1 Season - 1991",
        name: "2016",
        data:[{ name: "2016",
                y: 1,
            drilldown: "2016 - 1991"
            }]
        },
        { id:"2016 - 1991",
        name: "Bob Ross: Beauty Is Everywhere",
        data:[{ name: "Bob Ross: Beauty Is Everywhere",
                y: 1
            }]
        },  

          //1992
         { id: "1992",
         name: "Rating",
         data: [{ name: "TV-Y",
               y: 1,
               drilldown: "TV-Y - 1992"
             },
             { name: "TV-PG",
               y: 1,
               drilldown: "TV-PG - 1992"
             },]
       },
          //TV-Y 1992
          { id:"TV-Y - 1992",
          name: "British TV Shows, Kids' TV, TV Comedies",
          data:[{ name: "British TV Shows, Kids' TV, TV Comedies",
                  y: 1,
              drilldown: "British TV Shows, Kids' TV, TV Comedies - 1992"
              }]
        },
        { id:"British TV Shows, Kids' TV, TV Comedies - 1992",
          name: "10 Season",
          data:[{ name: "10 Season",
                  y: 1,
              drilldown: "10 Season - 1992"
              }]
        },
        { id:"10 Season - 1992",
          name: "2015",
          data:[{ name: "2015",
                  y: 1,
                drilldown: "2015 - 1992"
              }]
        },
        { id:"2015 - 1992",
        name: "Danger Mouse: Classic Collection",
        data:[{ name: "Danger Mouse: Classic Collection",
                y: 1
            }]
        },
        //TV-PG - 1992
        { id:"TV-PG - 1992",
        name: "Classic & Cult TV, TV Comedies",
        data:[{ name: "Classic & Cult TV, TV Comedies",
                y: 1,
            drilldown: "Classic & Cult TV, TV Comedies - 1992"
            }]
      },
      { id:"Classic & Cult TV, TV Comedies - 1992",
        name: "11 Season",
        data:[{ name: "11 Season",
                y: 1,
            drilldown: "11 Season - 1992"
            }]
      },
      { id:"11 Season - 1992",
        name: "2017",
        data:[{ name: "2017",
                y: 1,
              drilldown: "2017 - 1992"
            }]
      },
      { id:"2017 - 1992",
      name: "Cheers",
      data:[{ name: "Cheers",
              y: 1
          }]
      },

      //1993
      { id: "1993",
      name: "Rating",
      data: [{ name: "TV-MA",
            y: 1,
            drilldown: "TV-MA - 1993"
          },
          { name: "TV-Y",
            y: 1,
            drilldown: "TV-Y - 1993"
          },
          { name: "TV-PG",
            y: 1,
            drilldown: "TV-PG - 1993"
          },]
    },
          //TV-MA 1993
          { id:"TV-MA - 1993",
          name: "TV Dramas",
          data:[{ name: "TV Dramas",
                  y: 1,
              drilldown: "TV Dramas - 1993"
              }]
        },
        { id:"TV Dramas - 1993",
          name: "1 Season",
          data:[{ name: "1 Season",
                  y: 1,
              drilldown: "1 Season - 1993"
              }]
        },
        { id:"1 Season - 1993",
          name: "2019",
          data:[{ name: "2019",
                  y: 1,
                drilldown: "2019 - 1993"
              }]
        },
        { id:"2019 - 1993",
        name: "Tales of the City (1993)",
        data:[{ name: "Tales of the City (1993)",
                y: 1
            }]
        },
        //TV-Y - 1993
        { id:"TV-Y - 1993",
        name: "Kids' TV",
        data:[{ name: "Kids' TV",
                y: 1,
            drilldown: "Kids' TV - 1993"
            }]
      },
      { id:"Kids' TV - 1993",
        name: "1 Season",
        data:[{ name: "1 Season",
                y: 1,
            drilldown: "1 Season - 1993"
            }]
      },
      { id:"1 Season - 1993",
        name: "2018",
        data:[{ name: "2018",
                y: 1,
              drilldown: "2018 - 1993"
            }]
      },
      { id:"2018 - 1993",
      name: "The Adventures of Sonic the Hedgehog",
      data:[{ name: "The Adventures of Sonic the Hedgehog",
              y: 1
          }]
      },
      //TV-PG - 1993
      { id:"TV-PG - 1993",
      name: "TV Action & Adventure, TV Sci-Fi & Fantasy",
      data:[{ name: "TV Action & Adventure, TV Sci-Fi & Fantasy",
              y: 1,
          drilldown: "TV Action & Adventure, TV Sci-Fi & Fantasy - 1993"
          }]
      },
      { id:"TV Action & Adventure, TV Sci-Fi & Fantasy - 1993",
        name: "11 Season",
        data:[{ name: "7 Season",
                y: 1,
            drilldown: "7 Season - 1993"
            }]
      },
      { id:"7 Season - 1993",
        name: "2018",
        data:[{ name: "2018",
                y: 1,
              drilldown: "2018 - 1993"
            }]
      },
      { id:"2018 - 1993",
      name: "Star Trek: The Next Generation",
      data:[{ name: "Star Trek: The Next Generation",
              y: 1
          }]
      },

      //1994
      { id: "1994",
      name: "Rating",
      data: [{ name: "TV-G",
              y: 1,
              drilldown: "TV-G - 1994"
          }]
        },
        { id:"TV-G - 1994",
        name: "TV Shows",
        data:[{ name: "TV Shows",
                y: 1,
            drilldown: "TV Shows - 1994"
            }]
        },
        { id:"TV Shows - 1994",
        name: "1 Season",
        data:[{ name: "1 Season",
                y: 1,
            drilldown: "1 Season - 1994"
            }]
        },
        { id:"1 Season - 1994",
        name: "2016",
        data:[{ name: "2016",
                y: 1,
            drilldown: "2016 - 1994"
            }]
        },
        { id:"2016 - 1994",
        name: "Chill with Bob Ross",
        data:[{ name: "Chill with Bob Ross",
                y: 1
            }]
        },  
          

        //1995
      { id: "1995",
      name: "Rating",
      data: [{ name: "TV-14",
            y: 1,
            drilldown: "TV-14 - 1995"
          },
          { name: "TV-Y7-FV",
            y: 1,
            drilldown: "TV-Y7-FV - 1995"
          },]
    },
          //TV-14 1995
          { id:"TV-14 - 1995",
          name: "Anime Series, International TV Shows",
          data:[{ name: "Anime Series, International TV Shows",
                  y: 1,
              drilldown: "Anime Series, International TV Shows - 1995"
              }]
        },
        { id:"Anime Series, International TV Shows - 1995",
          name: "1 Season",
          data:[{ name: "1 Season",
                  y: 1,
              drilldown: "1 Season - 1995"
              }]
        },
        { id:"1 Season - 1995",
          name: "2019",
          data:[{ name: "2019",
                  y: 1,
                drilldown: "2019 - 1995"
              }]
        },
        { id:"2019 - 1995",
        name: "Neon Genesis Evangelion",
        data:[{ name: "Neon Genesis Evangelion",
                y: 1
            }]
        },
        //TV-Y7-FV - 1995
        { id:"TV-Y7-FV - 1995",
        name: "Kids' TV",
        data:[{ name: "Kids' TV",
                y: 1,
            drilldown: "Kids' TV - 1995"
            }]
      },
      { id:"Kids' TV - 1995",
        name: "2 Season",
        data:[{ name: "2 Season",
                y: 1,
            drilldown: "2 Season - 1995"
            }]
      },
      { id:"2 Season - 1995",
        name: "2016",
        data:[{ name: "2016",
                y: 1,
              drilldown: "2016 - 1995"
            }]
      },
      { id:"2016 - 1995",
      name: "V.R. Troopers",
      data:[{ name: "V.R. Troopers",
              y: 1
          }]
      },

       //1996
       { id: "1996",
       name: "Rating",
       data: [{ name: "TV-PG",
             y: 1,
             drilldown: "TV-PG - 1996"
           },
           { name: "TV-Y7-FV",
             y: 2,
             drilldown: "TV-Y7-FV - 1996"
           },]
     },
           //TV-PG 1996
           { id:"TV-PG - 1996",
           name: "Docuseries",
           data:[{ name: "Docuseries",
                   y: 1,
               drilldown: "Docuseries - 1996"
               }]
         },
         { id:"Docuseries - 1996",
           name: "1 Season",
           data:[{ name: "1 Season",
                   y: 1,
               drilldown: "1 Season - 1996"
               }]
         },
         { id:"1 Season - 1996",
           name: "2017",
           data:[{ name: "2017",
                   y: 1,
                 drilldown: "2017 - 1996"
               }]
         },
         { id:"2017 - 1996",
         name: "Ken Burns: The West",
         data:[{ name: "Ken Burns: The West",
                 y: 1
             }]
         },
         //TV-Y7-FV - 1996
         { id:"TV-Y7-FV - 1996",
         name: "Kids' TV",
         data:[{ name: "Kids' TV",
                 y: 2,
              drilldown: "Kids' TV - 1996"
             },]
       },
       { id:"Kids' TV - 1996",
         name: "1 Season",
         data:[{ name: "1 Season",
                 y: 2,
             drilldown: "1 Season - 1996"
             }]
       },
       { id:"1 Season - 1996",
         name: "2016",
         data:[{ name: "2016",
                 y: 2,
               drilldown: "2016 - 1996"
             }]
       },
       { id:"2016 - 1996",
       name: "TV Show",
       data:[{ name: "Mighty Morphin Alien Rangers",
               y: 1
           },
           { name: "Power Rangers Zeo",
              y: 1
            },]
       },

        //1997
        { id: "1997",
        name: "Rating",
        data: [{ name: "TV-Y7-FV",
              y: 3,
              drilldown: "TV-Y7-FV - 1997"
              },
              { name: "TV-Y",
                y: 1,
                drilldown: "TV-Y - 1997"
              },]
        },
            //TV-Y7-FV 1997
            { id:"TV-Y7-FV - 1997",
            name: "Kids' TV, TV Comedies",
            data:[{ name: "Kids' TV, TV Comedies",
                    y: 3,
                drilldown: "Kids' TV, TV Comedies - 1997"
                },]
          },
          { id:"Kids' TV, TV Comedies - 1997",
            name: "Seasons",
            data:[{ name: "1 Season",
                    y: 2,
                drilldown: "1 Season - 1997"
                },
                { name: "2 Season",
                y: 1,
                drilldown: "2 Season - 1997"
                }]
          },
          { id:"1 Season - 1997",
            name: "2016",
            data:[{ name: "2016",
                    y: 2,
                  drilldown: "2016-1 - 1997"
                }]
          },
          { id:"2016-1 - 1997",
          name: "TV Shows",
          data:[{ name: "Ninja Turtles: The Next Mutation",
                  y: 1
              },
              { name: "Power Rangers Turbo",
                y: 1
              },]
          },
          { id:"2 Season - 1997",
            name: "2016",
            data:[{ name: "2016",
                    y: 1,
                  drilldown: "2016 - 1997"
                }]
          },
          { id:"2016 - 1997",
          name: "TV Shows",
          data:[{ name: "Big Bad Beetleborgs",
                  y: 1
              },]
          },
          //TV-Y - 1997
          { id:"TV-Y - 1997",
          name: "Kids' TV",
          data:[{ name: "Kids' TV",
                  y: 1,
               drilldown: "Kids' TV - 1997"
              },]
        },
        { id:"Kids' TV - 1997",
          name: "4 Season",
          data:[{ name: "4 Season",
                  y: 1,
              drilldown: "4 Season - 1997"
              }]
        },
        { id:"4 Season - 1997",
          name: "2014",
          data:[{ name: "2014",
                  y: 1,
                drilldown: "2014 - 1997"
              }]
        },
        { id:"2014 - 1997",
        name: "TV Show",
        data:[{ name: "The Magic School Bus",
                y: 1
            },]
        },

      // 1998
        { id: "1998",
        name: "Rating",
        data: [{ name: "TV-Y7-FV",
              y: 1,
              drilldown: "TV-Y7-FV - 1998"
              },
              { name: "TV-Y7",
                y: 1,
                drilldown: "TV-Y7 - 1998"
              },
              { name: "TV-14",
              y: 1,
              drilldown: "TV-14 - 1998"
            }]
        },

        { id:"TV-Y7-FV - 1998",
            name: "Kids",
            data:[{ name: "Kids' TV",
                    y: 1,
                drilldown: "Kids' TV - 1998"
                },
              
              ]
        },

        { id:"Kids' TV - 1998",
          name: "1 Season",
          data:[{ name: "1 Season",
                  y: 1,
              drilldown: "1 Season - 1998"
              }]
        },

        { id:"1 Season - 1998",
          name: "2016",
          data:[{ name: "2016",
                  y: 1,
                drilldown: "2016 - 1998"
              }]
        },

        { id:"2016 - 1998",
        name: "TV Show",
        data:[{ name: "Power Rangers in Space",
                y: 1
            },]
        },

        { id:"TV-Y7 - 1998",
            name: "Kids' TV, TV Thrillers",
            data:[
                { name: "Kids' TV, TV Thrillers",
                y: 1,
                drilldown: "Kids' TV, TV Thrillers - 1998"
                },
                
              ]
        },
        
        { id:"Kids' TV, TV Thrillers - 1998",
          name: "5 Season",
          data:[{ name: "5 Season",
                  y: 1,
              drilldown: "5 Season - 1998"
              }]
        },

        { id:"5 Season - 1998",
          name: "2014",
          data:[{ name: "2014",
                  y: 1,
                drilldown: "2014 - 1998"
              }]
        },

        { id:"2014 - 1998",
        name: "TV Show",
        data:[{ name: "Goosebumps",
                y: 1
            },]
        },

        { id:"TV-14 - 1998",
            name: "Anime Series, International TV Shows",
            data:[
                { name: "Anime Series, International TV Shows",
                y: 1,
                drilldown: "Anime Series, International TV Shows - 1998"
                },
                
              ]
        },
        
        { id:"Anime Series, International TV Shows - 1998",
          name: "3 Season",
          data:[{ name: "3 Season",
                  y: 1,
              drilldown: "3 Season - 1998"
              }]
        },

        { id:"3 Season - 1998",
          name: "2020",
          data:[{ name: "2020",
                  y: 1,
                drilldown: "2020 - 1998"
              }]
        },

        { id:"2020 - 1998",
        name: "TV Show",
        data:[{ name: "Rurouni Kenshin",
                y: 1
            },]
        },

      // 1999

        { id: "1999",
        name: "Rating",
        data: [{ name: "TV-Y7-FV",
              y: 1,
              drilldown: "TV-Y7-FV - 1999"
              },
              { name: "TV-PG",
                y: 1,
                drilldown: "TV-PG - 1999"
              },
              { name: "TV-14",
              y: 2,
              drilldown: "TV-14 - 1999"
            }]
        },

        // TV-Y7-FV
        { id:"TV-Y7-FV - 1999",
            name: "Category",
            data:[{ name: "Kids' TV",
                    y: 1,
                drilldown: "Kids' TV - 1999"
                },
              
              ]
        },

        { id:"Kids' TV - 1999",
            name: "Seasons",
            data:[{ name: "1 season",
                    y: 1,
                drilldown: "1 season Kids' TV - 1999"
                },
              
              ]
        },

        { id:"1 season Kids' TV - 1999",
            name: "Year added",
            data:[{ name: "2016",
                    y: 1,
                drilldown: "1 season Kids' TV 2016 - 1999"
                },
              
              ]
        },

        { id:"1 season Kids' TV 2016 - 1999",
            name: "TV Show",
            data:[{ name: "Power Rangers Lost Galaxy",
                    y: 1,
                },
              
              ]
        },

        // TV-14
        { id:"TV-14 - 1999",
            name: "Category",
            data:[{ name: "British TV Shows, TV Comedies",
                    y: 1,
                drilldown: "British TV Shows, TV Comedies - 1999"
                },
                { name: "TV Comedies, TV Sci-Fi & Fantasy",
                    y: 1,
                drilldown: "TV Comedies, TV Sci-Fi & Fantasy - 1999"
                }
              
              ]
        },

        { id:"British TV Shows, TV Comedies - 1999",
            name: "Seasons",
            data:[{ name: "1 season",
                    y: 1,
                drilldown: "1 season British TV Shows, TV Comedies - 1999"
                },
              
              ]
        },

        { id:"1 season British TV Shows, TV Comedies - 1999",
            name: "Year added",
            data:[{ name: "2016",
                    y: 1,
                drilldown: "1 season British TV Shows, TV Comedies 2016 - 1999"
                },
              
              ]
        },

        { id:"1 season British TV Shows, TV Comedies 2016 - 1999",
            name: "TV Show",
            data:[{ name: "Chewin' the Fat",
                    y: 1,
                },
              
              ]
        },

        { id:"TV Comedies, TV Sci-Fi & Fantasy - 1999",
            name: "Seasons",
            data:[{ name: "1 season",
                    y: 1,
                drilldown: "1 season TV Comedies, TV Sci-Fi & Fantasy - 1999"
                },
              
              ]
        },

        { id:"1 season TV Comedies, TV Sci-Fi & Fantasy - 1999",
            name: "Year added",
            data:[{ name: "2018",
                    y: 1,
                drilldown: "1 season TV Comedies, TV Sci-Fi & Fantasy 2018 - 1999"
                },
              
              ]
        },

        { id:"1 season TV Comedies, TV Sci-Fi & Fantasy 2018 - 1999",
            name: "TV Show",
            data:[{ name: "Mystery Science Theater 3000",
                    y: 1,
                },
              
              ]
        },


        // TV-PG
        { id:"TV-PG - 1999",
            name: "Category",
            data:[{ name: "TV Action & Adventure, TV Sci-Fi & Fantasy",
                    y: 1,
                drilldown: "TV Action & Adventure, TV Sci-Fi & Fantasy - 1999"
                },
              
              ]
        },

        { id:"TV Action & Adventure, TV Sci-Fi & Fantasy - 1999",
            name: "Seasons",
            data:[{ name: "7 season",
                    y: 7,
                drilldown: "7 season TV Action & Adventure, TV Sci-Fi & Fantasy - 1999"
                },
              
              ]
        },

        { id:"7 season TV Action & Adventure, TV Sci-Fi & Fantasy - 1999",
            name: "Year added",
            data:[{ name: "2017",
                    y: 1,
                drilldown: "7 season TV Action & Adventure, TV Sci-Fi & Fantasy 2017 - 1999"
                },
              
              ]
        },

        { id:"7 season TV Action & Adventure, TV Sci-Fi & Fantasy 2017 - 1999",
            name: "TV Show",
            data:[{ name: "Star Trek: Deep Space Nine",
                    y: 1,
                },
              
              ]
        },

        // 2000

        { id: "2000",
        name: "Rating",
        data: [{ name: "TV-Y7-FV",
              y: 1,
              drilldown: "TV-Y7-FV - 2000"
              },
              { name: "TV-Y",
                y: 1,
                drilldown: "TV-Y - 2000"
              },
              { name: "TV-PG",
              y: 1,
              drilldown: "TV-PG - 2000"
            }]
        },

        // TV-Y
        { id:"TV-Y - 2000",
            name: "Category",
            data:[{ name: "Anime Series, Kids' TV",
                    y: 1,
                drilldown: "Anime Series, Kids' TV - 2000"
                },
              
              ]
        },

        { id:"Anime Series, Kids' TV - 2000",
            name: "Seasons",
            data:[{ name: "1 season",
                    y: 1,
                drilldown: "1 season Anime Series, Kids' TV - 2000"
                },
              
              ]
        },

        { id:"1 season Anime Series, Kids' TV - 2000",
            name: "Year added",
            data:[{ name: "2018",
                    y: 1,
                drilldown: "1 season Anime Series, Kids' TV 2018 - 2000"
                },
              
              ]
        },

        { id:"1 season Anime Series, Kids' TV 2018 - 2000",
            name: "TV Show",
            data:[{ name: "Pokemon: Indigo League",
                    y: 1,
                },
              
              ]
        },

        // TV-Y7-FV
        { id:"TV-Y7-FV - 2000",
            name: "Category",
            data:[{ name: "Kids' TV",
                    y: 1,
                drilldown: "Kids' TV - 2000"
                },
              
              ]
        },

        { id:"Kids' TV - 2000",
            name: "Seasons",
            data:[{ name: "1 season",
                    y: 1,
                drilldown: "1 season Kids' TV - 2000"
                },
              
              ]
        },

        { id:"1 season Kids' TV - 2000",
            name: "Year added",
            data:[{ name: "2016",
                    y: 1,
                drilldown: "1 season Kids' TV 2016 - 2000"
                },
              
              ]
        },

        { id:"1 season Kids' TV 2016 - 2000",
            name: "TV Show",
            data:[{ name: "Power Rangers Lightspeed Rescue",
                    y: 1,
                },
              
              ]
        },


        // TV-PG
        { id:"TV-PG - 2000",
            name: "Category",
            data:[{ name: "TV Action & Adventure, TV Sci-Fi & Fantasy",
                    y: 1,
                drilldown: "TV Action & Adventure, TV Sci-Fi & Fantasy - 2000"
                },
              
              ]
        },

        { id:"TV Action & Adventure, TV Sci-Fi & Fantasy - 2000",
            name: "Seasons",
            data:[{ name: "7 season",
                    y: 7,
                drilldown: "7 season TV Action & Adventure, TV Sci-Fi & Fantasy - 2000"
                },
              
              ]
        },

        { id:"7 season TV Action & Adventure, TV Sci-Fi & Fantasy - 2000",
            name: "Year added",
            data:[{ name: "2017",
                    y: 1,
                drilldown: "7 season TV Action & Adventure, TV Sci-Fi & Fantasy 2017 - 2000"
                },
              
              ]
        },

        { id:"7 season TV Action & Adventure, TV Sci-Fi & Fantasy 2017 - 2000",
            name: "TV Show",
            data:[{ name: "Star Trek: Voyager",
                    y: 1,
                },
              
              ]
        },



      //2001
      { id: "2001",
      name: "Rating",
      data: [{ name: "TV-Y7-FV",
            y: 1,
            drilldown: "TV-Y7-FV - 2001"
            },
            { name: "TV-G",
              y: 1,
              drilldown: "TV-G - 2001"
            },
            { name: "TV-14",
            y: 2,
            drilldown: "TV-14 - 2001"
          }]
      },

      // TV-Y7-FV
      { id:"TV-Y7-FV - 2001",
          name: "Category",
          data:[{ name: "Kids' TV",
                  y: 1,
              drilldown: "Kids' TV - 2001"
              },
            
            ]
      },

      { id:"Kids' TV - 2001",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Kids' TV - 2001"
              },
            
            ]
      },

      { id:"1 season Kids' TV - 2001",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "1 season Kids' TV 2016 - 2001"
              },
            
            ]
      },

      { id:"1 season Kids' TV 2016 - 2001",
          name: "TV Show",
          data:[{ name: "Power Rangers Time Force",
                  y: 1,
              },
            
            ]
      },

      // TV-14
      { id:"TV-14 - 2001",
          name: "Category",
          data:[{ name: "British TV Shows, Docuseries",
                  y: 1,
              drilldown: "British TV Shows, Docuseries - 2001"
              },
              { name: "Anime Series, International TV Shows",
                  y: 1,
              drilldown: "Anime Series, International TV Shows - 2001"
              }
            
            ]
      },

      { id:"British TV Shows, Docuseries - 2001",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season British TV Shows, Docuseries - 2001"
              },
            
            ]
      },

      { id:"1 season British TV Shows, Docuseries - 2001",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "1 season British TV Shows, Docuseries 2016 - 2001"
              },
            
            ]
      },

      { id:"1 season British TV Shows, Docuseries 2016 - 2001",
          name: "TV Show",
          data:[{ name: "Behind Enemy Lines",
                  y: 1,
              },
            
            ]
      },

      { id:"Anime Series, International TV Shows - 2001",
          name: "Seasons",
          data:[{ name: "2 seasons",
                  y: 2,
              drilldown: "2 seasons Anime Series, International TV Shows - 2001"
              },
            
            ]
      },

      { id:"2 seasons Anime Series, International TV Shows - 2001",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "2 seasons Anime Series, International TV Shows 2016 - 2001"
              },
            
            ]
      },

      { id:"2 seasons Anime Series, International TV Shows 2016 - 2001",
          name: "TV Show",
          data:[{ name: "InuYasha",
                  y: 1,
              },
            
            ]
      },


      // TV-G
      { id:"TV-G - 2001",
          name: "Category",
          data:[{ name: "British TV Shows, Docuseries, International TV Shows",
                  y: 1,
              drilldown: "British TV Shows, Docuseries, International TV Shows - 2001"
              },
            
            ]
      },

      { id:"British TV Shows, Docuseries, International TV Shows - 2001",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season British TV Shows, Docuseries, International TV Shows - 2001"
              },
            
            ]
      },

      { id:"1 season British TV Shows, Docuseries, International TV Shows - 2001",
          name: "Year added",
          data:[{ name: "2015",
                  y: 1,
              drilldown: "1 season British TV Shows, Docuseries, International TV Shows 2015 - 2001"
              },
            
            ]
      },

      { id:"1 season British TV Shows, Docuseries, International TV Shows 2015 - 2001",
          name: "TV Show",
          data:[{ name: "The Blue Planet: A Natural History of the Oceans",
                  y: 1,
              },
            
            ]
      },

      //2002

      { id: "2002",
      name: "Rating",
      data: [{ name: "TV-Y7-FV",
            y: 1,
            drilldown: "TV-Y7-FV - 2002"
            },
            { name: "TV-14",
              y: 1,
              drilldown: "TV-14 - 2002"
            },
            { name: "TV-PG",
            y: 1,
            drilldown: "TV-PG - 2002"
          }]
      },

      // TV-Y
      { id:"TV-14 - 2002",
          name: "Category",
          data:[{ name: "International TV Shows, Romantic TV Shows, TV Dramas",
                  y: 1,
              drilldown: "International TV Shows, Romantic TV Shows, TV Dramas - 2002"
              },
            
            ]
      },

      { id:"International TV Shows, Romantic TV Shows, TV Dramas - 2002",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows, TV Dramas - 2002"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows, TV Dramas - 2002",
          name: "Year added",
          data:[{ name: "2019",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows, TV Dramas 2019 - 2002"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows, TV Dramas 2019 - 2002",
          name: "TV Show",
          data:[{ name: "Lavender",
                  y: 1,
              },
            
            ]
      },

      // TV-Y7-FV
      { id:"TV-Y7-FV - 2002",
          name: "Category",
          data:[{ name: "Kids' TV",
                  y: 1,
              drilldown: "Kids' TV - 2002"
              },
            
            ]
      },

      { id:"Kids' TV - 2002",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Kids' TV - 2002"
              },
            
            ]
      },

      { id:"1 season Kids' TV - 2002",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "1 season Kids' TV 2016 - 2002"
              },
            
            ]
      },

      { id:"1 season Kids' TV 2016 - 2002",
          name: "TV Show",
          data:[{ name: "Power Rangers Wild Force",
                  y: 1,
              },
            
            ]
      },


      // TV-PG
      { id:"TV-PG - 2002",
          name: "Category",
          data:[{ name: "International TV Shows, Romantic TV Shows, TV Dramas",
                  y: 1,
              drilldown: "International TV Shows, Romantic TV Shows, TV Dramas - 2002"
              },
            
            ]
      },

      { id:"International TV Shows, Romantic TV Shows, TV Dramas - 2002",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows, TV Dramas - 2002"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows, TV Dramas - 2002",
          name: "Year added",
          data:[{ name: "2019",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows, TV Dramas 2019 - 2002"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows, TV Dramas 2019 - 2002",
          name: "TV Show",
          data:[{ name: "My MVP Valentine",
                  y: 1,
              },
            
            ]
      },


      // 2003

      { id: "2003",
      name: "Rating",
      data: [{ name: "TV-Y7-FV",
            y: 1,
            drilldown: "TV-Y7-FV - 2003"
            },
            { name: "TV-14",
              y: 6,
              drilldown: "TV-14 - 2003"
            },
            { name: "TV-PG",
            y: 1,
            drilldown: "TV-PG - 2003"
          }]
      },

      // TV-14
      { id:"TV-14 - 2003",
          name: "Category",
          data:[{ name: "International TV Shows, Romantic TV Shows",
                  y: 1,
              drilldown: "International TV Shows, Romantic TV Shows - 2003"
              },
              { name: "International TV Shows, Romantic TV Shows, TV Action & Adventure",
                  y: 1,
              drilldown: "International TV Shows, Romantic TV Shows, TV Action & Adventure - 2003"
              },
              { name: "International TV Shows, Romantic TV Shows, Spanish-Language TV Shows",
                  y: 1,
              drilldown: "International TV Shows, Romantic TV Shows, Spanish-Language TV Shows - 2003"
              },
              { name: "Anime Series, International TV Shows",
                  y: 1,
              drilldown: "Anime Series, International TV Shows - 2003"
              },
              { name: "International TV Shows, TV Comedies",
                  y: 1,
              drilldown: "International TV Shows, TV Comedies - 2003"
              },
              { name: "Classic & Cult TV, TV Comedies",
                  y: 1,
              drilldown: "Classic & Cult TV, TV Comedies - 2003"
              }
            
            ]
      },

      { id:"International TV Shows, Romantic TV Shows - 2003",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows - 2003"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows - 2003",
          name: "Year added",
          data:[{ name: "2019",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows 2019 - 2003"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows 2019 - 2003",
          name: "TV Show",
          data:[{ name: "At the Dolphin Bay",
                  y: 1,
              },
            
            ]
      },

      // 

      { id:"International TV Shows, Romantic TV Shows, TV Action & Adventure - 2003",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows, TV Action & Adventure - 2003"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows, TV Action & Adventure - 2003",
          name: "Year added",
          data:[{ name: "2019",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows, TV Action & Adventure 2019 - 2003"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows, TV Action & Adventure 2019 - 2003",
          name: "TV Show",
          data:[{ name: "Westside Story",
                  y: 1,
              },
            
            ]
      },

      // 

      { id:"International TV Shows, Romantic TV Shows, Spanish-Language TV Shows - 2003",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows, Spanish-Language TV Shows - 2003"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows, Spanish-Language TV Shows - 2003",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows, Spanish-Language TV Shows 2017 - 2003"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows, Spanish-Language TV Shows 2017 - 2003",
          name: "TV Show",
          data:[{ name: "Pasion de Gavilanes",
                  y: 1,
              },
            
            ]
      },

      // 

      { id:"Anime Series, International TV Shows - 2003",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Anime Series, International TV Shows - 2003"
              },
            
            ]
      },

      { id:"1 season Anime Series, International TV Shows - 2003",
          name: "Year added",
          data:[{ name: "2018",
                  y: 1,
              drilldown: "1 season Anime Series, International TV Shows 2018 - 2003"
              },
            
            ]
      },

      { id:"1 season Anime Series, International TV Shows 2018 - 2003",
          name: "TV Show",
          data:[{ name: "Fullmetal Alchemist",
                  y: 1,
              },
            
            ]
      },

      // 

      { id:"International TV Shows, TV Comedies - 2003",
          name: "Seasons",
          data:[{ name: "7 season",
                  y: 1,
              drilldown: "7 season International TV Shows, TV Comedies - 2003"
              },
            
            ]
      },

      { id:"7 season International TV Shows, TV Comedies - 2003",
          name: "Year added",
          data:[{ name: "2018",
                  y: 1,
              drilldown: "7 season International TV Shows, TV Comedies 2018 - 2003"
              },
            
            ]
      },

      { id:"7 season International TV Shows, TV Comedies 2018 - 2003",
          name: "TV Show",
          data:[{ name: "Kopitiam",
                  y: 1,
              },
            
            ]
      },

      // 

      { id:"Classic & Cult TV, TV Comedies - 2003",
          name: "Seasons",
          data:[{ name: "10 season",
                  y: 1,
              drilldown: "10 season Classic & Cult TV, TV Comedies - 2003"
              },
            
            ]
      },

      { id:"10 season Classic & Cult TV, TV Comedies - 2003",
          name: "Year added",
          data:[{ name: "-",
                  y: 1,
              drilldown: "10 season Classic & Cult TV, TV Comedies - - 2003"
              },
            
            ]
      },

      { id:"10 season Classic & Cult TV, TV Comedies - - 2003",
          name: "TV Show",
          data:[{ name: "Friends",
                  y: 1,
              },
            
            ]
      },




      // TV-Y7-FV
      { id:"TV-Y7-FV - 2003",
          name: "Category",
          data:[{ name: "Kids' TV",
                  y: 1,
              drilldown: "Kids' TV - 2003"
              },
            
            ]
      },

      { id:"Kids' TV - 2003",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Kids' TV - 2003"
              },
            
            ]
      },

      { id:"1 season Kids' TV - 2003",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "1 season Kids' TV 2016 - 2003"
              },
            
            ]
      },

      { id:"1 season Kids' TV 2016 - 2003",
          name: "TV Show",
          data:[{ name: "Power Rangers Ninja Storm",
                  y: 1,
              },
            
            ]
      },


      // TV-PG
      { id:"TV-PG - 2003",
          name: "Category",
          data:[{ name: "Classic & Cult TV, TV Comedies",
                  y: 1,
              drilldown: "Classic & Cult TV, TV Comedies - 2003"
              },
            
            ]
      },

      { id:"Classic & Cult TV, TV Comedies - 2003",
          name: "Seasons",
          data:[{ name: "11 season",
                  y: 1,
              drilldown: "11 season Classic & Cult TV, TV Comedies - 2003"
              },
            
            ]
      },

      { id:"11 season Classic & Cult TV, TV Comedies - 2003",
          name: "Year added",
          data:[{ name: "-",
                  y: 1,
              drilldown: "11 season Classic & Cult TV, TV Comedies - - 2003"
              },
            
            ]
      },

      { id:"11 season Classic & Cult TV, TV Comedies - - 2003",
          name: "TV Show",
          data:[{ name: "Frasier",
                  y: 1,
              },
            
            ]
      },


      // 2004

      { id: "2004",
      name: "Rating",
      data: [{ name: "TV-Y7-FV",
            y: 1,
            drilldown: "TV-Y7-FV - 2004"
            },
            { name: "TV-14",
              y: 3,
              drilldown: "TV-14 - 2004"
            },
            { name: "TV-PG",
            y: 2,
            drilldown: "TV-PG - 2004"
            },
            { name: "NR",
              y: 1,
              drilldown: "NR - 2004"
            },
            { name: "TV-MA",
              y: 1,
              drilldown: "TV-MA - 2004"
            },
            { name: "TV-Y7",
              y: 1,
              drilldown: "TV-Y7 - 2004"
            },
        ]
      },

      // TV-14
      { id:"TV-14 - 2004",
          name: "Category",
          data:[{ name: "International TV Shows, Romantic TV Shows",
                  y: 1,
              drilldown: "International TV Shows, Romantic TV Shows - 2004"
              },
              { name: "International TV Shows, Romantic TV Shows, Spanish-Language TV Shows",
                  y: 1,
              drilldown: "International TV Shows, Romantic TV Shows, Spanish-Language TV Shows - 2004"
              },
              { name: "International TV Shows, TV Comedies",
                  y: 1,
              drilldown: "International TV Shows, TV Comedies - 2004"
              },            
            ]
      },

      { id:"International TV Shows, Romantic TV Shows - 2004",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows - 2004"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows - 2004",
          name: "Year added",
          data:[{ name: "2019",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows 2019 - 2004"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows 2019 - 2004",
          name: "TV Show",
          data:[{ name: "La Robe De Mariee Des Cieux",
                  y: 1,
              },
            
            ]
      },


      // 

      { id:"International TV Shows, Romantic TV Shows, Spanish-Language TV Shows - 2004",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows, Spanish-Language TV Shows - 2004"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows, Spanish-Language TV Shows - 2004",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows, Spanish-Language TV Shows 2017 - 2004"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows, Spanish-Language TV Shows 2017 - 2004",
          name: "TV Show",
          data:[{ name: "Rebelde",
                  y: 1,
              },
            
            ]
      },

      // 


      { id:"International TV Shows, TV Comedies - 2004",
          name: "Seasons",
          data:[{ name: "2 season",
                  y: 1,
              drilldown: "2 season International TV Shows, TV Comedies - 2004"
              },
            
            ]
      },

      { id:"2 season International TV Shows, TV Comedies - 2004",
          name: "Year added",
          data:[{ name: "2018",
                  y: 1,
              drilldown: "2 season International TV Shows, TV Comedies 2018 - 2004"
              },
            
            ]
      },

      { id:"2 season International TV Shows, TV Comedies 2018 - 2004",
          name: "TV Show",
          data:[{ name: "Show Me the Money",
                  y: 1,
              },
            
            ]
      },





      // TV-Y7-FV
      { id:"TV-Y7-FV - 2004",
          name: "Category",
          data:[{ name: "Kids' TV",
                  y: 1,
              drilldown: "Kids' TV - 2004"
              },
            
            ]
      },

      { id:"Kids' TV - 2004",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Kids' TV - 2004"
              },
            
            ]
      },

      { id:"1 season Kids' TV - 2004",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "1 season Kids' TV 2016 - 2004"
              },
            
            ]
      },

      { id:"1 season Kids' TV 2016 - 2004",
          name: "TV Show",
          data:[{ name: "Power Rangers Dino Thunder",
                  y: 1,
              },
            
            ]
      },


      // TV-PG
      { id:"TV-PG - 2004",
          name: "Category",
          data:[{ name: "International TV Shows, Romantic TV Shows, Spanish-Language TV Shows",
                  y: 1,
              drilldown: "International TV Shows, Romantic TV Shows, Spanish-Language TV Shows - 2004"
              },
              { name: "Classic & Cult TV, TV Action & Adventure, TV Sci-Fi & Fantasy",
                  y: 1,
              drilldown: "Classic & Cult TV, TV Action & Adventure, TV Sci-Fi & Fantasy - 2004"
              }
            
            ]
      },

      { id:"International TV Shows, Romantic TV Shows, Spanish-Language TV Shows - 2004",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows, Spanish-Language TV Shows - 2004"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows, Spanish-Language TV Shows - 2004",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows, Spanish-Language TV Shows 2017 - 2004"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows, Spanish-Language TV Shows 2017 - 2004",
          name: "TV Show",
          data:[{ name: "Rubi",
                  y: 1,
              },
            
            ]
      },

      // 

      { id:"Classic & Cult TV, TV Action & Adventure, TV Sci-Fi & Fantasy - 2004",
          name: "Seasons",
          data:[{ name: "4 season",
                  y: 1,
              drilldown: "4 season Classic & Cult TV, TV Action & Adventure, TV Sci-Fi & Fantasy - 2004"
              },
            
            ]
      },

      { id:"4 season Classic & Cult TV, TV Action & Adventure, TV Sci-Fi & Fantasy - 2004",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "4 season Classic & Cult TV, TV Action & Adventure, TV Sci-Fi & Fantasy 2017 - 2004"
              },
            
            ]
      },

      { id:"4 season Classic & Cult TV, TV Action & Adventure, TV Sci-Fi & Fantasy 2017 - 2004",
          name: "TV Show",
          data:[{ name: "Star Trek: Enterprise",
                  y: 1,
              },
            
            ]
      },


      // NR

      { id:"NR - 2004",
          name: "Category",
          data:[{ name: "British TV Shows, Romantic TV Shows, TV Dramas",
                  y: 1,
              drilldown: "British TV Shows, Romantic TV Shows, TV Dramas - 2004"
              },
            
            ]
      },

      { id:"British TV Shows, Romantic TV Shows, TV Dramas - 2004",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season British TV Shows, Romantic TV Shows, TV Dramas - 2004"
              },
            
            ]
      },

      { id:"1 season British TV Shows, Romantic TV Shows, TV Dramas - 2004",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "1 season British TV Shows, Romantic TV Shows, TV Dramas 2017 - 2004"
              },
            
            ]
      },

      { id:"1 season British TV Shows, Romantic TV Shows, TV Dramas 2017 - 2004",
          name: "TV Show",
          data:[{ name: "North & South",
                  y: 1,
              },
            
            ]
      },

      // MA


      { id:"MA - 2004",
          name: "Category",
          data:[{ name: "Crime TV Shows, International TV Shows, Romantic TV Shows",
                  y: 1,
              drilldown: "Crime TV Shows, International TV Shows, Romantic TV Shows - 2004"
              },
            
            ]
      },

      { id:"Crime TV Shows, International TV Shows, Romantic TV Shows - 2004",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Crime TV Shows, International TV Shows, Romantic TV Shows - 2004"
              },
            
            ]
      },

      { id:"1 season Crime TV Shows, International TV Shows, Romantic TV Shows - 2004",
          name: "Year added",
          data:[{ name: "2019",
                  y: 1,
              drilldown: "1 season Crime TV Shows, International TV Shows, Romantic TV Shows 2019 - 2004"
              },
            
            ]
      },

      { id:"1 season Crime TV Shows, International TV Shows, Romantic TV Shows 2019 - 2004",
          name: "TV Show",
          data:[{ name: "The Outsiders",
                  y: 1,
              },
            
            ]
      },

      // TV-Y7

      { id:"TV-Y7 - 2004",
          name: "Category",
          data:[{ name: "Anime Series, Kids' TV",
                  y: 1,
              drilldown: "Anime Series, Kids' TV - 2004"
              },
            
            ]
      },

      { id:"Anime Series, Kids' TV - 2004",
          name: "Seasons",
          data:[{ name: "4 season",
                  y: 1,
              drilldown: "4 season Anime Series, Kids' TV - 2004"
              },
            
            ]
      },

      { id:"4 season Anime Series, Kids' TV - 2004",
          name: "Year added",
          data:[{ name: "2019",
                  y: 1,
              drilldown: "4 season Anime Series, Kids' TV 2019 - 2004"
              },
            
            ]
      },

      { id:"4 season Anime Series, Kids' TV 2019 - 2004",
          name: "TV Show",
          data:[{ name: "Sonic X",
                  y: 1,
              },
            
            ]
      },


      // 2005

      { id: "2005",
      name: "Rating",
      data: [{ name: "TV-Y7-FV",
            y: 1,
            drilldown: "TV-Y7-FV - 2005"
            },
            { name: "TV-14",
              y: 5,
              drilldown: "TV-14 - 2005"
            },
            { name: "TV-PG",
            y: 2,
            drilldown: "TV-PG - 2005"
            },
            { name: "TV-MA",
              y: 2,
              drilldown: "TV-MA - 2005"
            },
            { name: "TV-Y7",
              y: 2,
              drilldown: "TV-Y7 - 2005"
            },
        ]
      },

      // TV-Y7-FV
        
      { id:"TV-Y7-FV - 2005",
          name: "Category",
          data:[{ name: "Kids' TV",
                  y: 1,
              drilldown: "Kids' TV - 2005"
              },
            
            ]
      },

      { id:"Kids' TV - 2005",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Kids' TV - 2005"
              },
            
            ]
      },

      { id:"1 season Kids' TV - 2005",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "1 season Kids' TV 2016 - 2005"
              },
            
            ]
      },

      { id:"1 season Kids' TV 2016 - 2005",
          name: "TV Show",
          data:[{ name: "Power Rangers S.P.D.",
                  y: 1,
              },
            
            ]
      },

      // TV-Y7
        
      { id:"TV-Y7 - 2005",
          name: "Category",
          data:[{ name: "Anime Series, Kids' TV",
                  y: 1,
              drilldown: "Anime Series, Kids' TV - 2005"
              },
              { name: "Kids' TV, TV Comedies",
                  y: 1,
              drilldown: "Kids' TV, TV Comedies - 2005"
              }
            
            ]
      },

      { id:"Anime Series, Kids' TV - 2005",
          name: "Seasons",
          data:[{ name: "5 season",
                  y: 1,
              drilldown: "5 season Anime Series, Kids' TV - 2005"
              },
            
            ]
      },

      { id:"5 season Anime Series, Kids' TV - 2005",
          name: "Year added",
          data:[{ name: "2018",
                  y: 1,
              drilldown: "5 season Anime Series, Kids' TV 2018 - 2005"
              },
            
            ]
      },

      { id:"5 season Anime Series, Kids' TV 2018 - 2005",
          name: "TV Show",
          data:[{ name: "Yu-Gi-Oh!",
                  y: 1,
              },
            
            ]
      },

      { id:"Kids' TV, TV Comedies - 2005",
          name: "Seasons",
          data:[{ name: "3 season",
                  y: 1,
              drilldown: "3 season Kids' TV, TV Comedies - 2005"
              },
            
            ]
      },

      { id:"3 season Kids' TV, TV Comedies - 2005",
          name: "Year added",
          data:[{ name: "2019",
                  y: 1,
              drilldown: "3 season Kids' TV, TV Comedies 2019 - 2005"
              },
            
            ]
      },

      { id:"3 season Kids' TV, TV Comedies 2019 - 2005",
          name: "TV Show",
          data:[{ name: "What's New Scooby-Doo?",
                  y: 1,
              },
            
            ]
      },


      // TV-PG
        
      { id:"TV-PG - 2005",
          name: "Category",
          data:[{ name: "Romantic TV Shows, TV Comedies, TV Dramas",
                  y: 1,
              drilldown: "Romantic TV Shows, TV Comedies, TV Dramas - 2005"
              },
              { name: "Kids' TV, TV Comedies",
                  y: 1,
              drilldown: "Kids' TV, TV Comedies - 2005"
              }
            
            ]
      },

      { id:"Romantic TV Shows, TV Comedies, TV Dramas - 2005",
          name: "Seasons",
          data:[{ name: "8 season",
                  y: 1,
              drilldown: "8 season Romantic TV Shows, TV Comedies, TV Dramas - 2005"
              },
            
            ]
      },

      { id:"8 season Romantic TV Shows, TV Comedies, TV Dramas - 2005",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "8 season Romantic TV Shows, TV Comedies, TV Dramas 2017 - 2005"
              },
            
            ]
      },

      { id:"8 season Romantic TV Shows, TV Comedies, TV Dramas 2017 - 2005",
          name: "TV Show",
          data:[{ name: "Charmed",
                  y: 1,
              },
            
            ]
      },

      { id:"Kids' TV, TV Comedies - 2005",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Kids' TV, TV Comedies - 2005"
              },
            
            ]
      },

      { id:"1 season Kids' TV, TV Comedies - 2005",
          name: "Year added",
          data:[{ name: "2013",
                  y: 1,
              drilldown: "1 season Kids' TV, TV Comedies 2013 - 2005"
              },
            
            ]
      },

      { id:"1 season Kids' TV, TV Comedies 2013 - 2005",
          name: "TV Show",
          data:[{ name: "DreamWorks Happy Holidays from Madagascar",
                  y: 1,
              },
            
            ]
      },

      // TV-MA
        
      { id:"TV-MA - 2005",
          name: "Category",
          data:[{ name: "British TV Shows, TV Comedies",
                  y: 1,
              drilldown: "British TV Shows, TV Comedies - 2005"
              },
              { name: "International TV Shows, TV Action & Adventure, TV Comedies",
                  y: 1,
              drilldown: "International TV Shows, TV Action & Adventure, TV Comedies - 2005"
              }
            
            ]
      },

      { id:"British TV Shows, TV Comedies - 2005",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season British TV Shows, TV Comedies - 2005"
              },
            
            ]
      },

      { id:"1 season British TV Shows, TV Comedies - 2005",
          name: "Year added",
          data:[{ name: "2018",
                  y: 1,
              drilldown: "1 season British TV Shows, TV Comedies 2018 - 2005"
              },
            
            ]
      },

      { id:"1 season British TV Shows, TV Comedies 2018 - 2005",
          name: "TV Show",
          data:[{ name: "Monty Python's Personal Best",
                  y: 1,
              },
            
            ]
      },

      { id:"International TV Shows, TV Action & Adventure, TV Comedies - 2005",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, TV Action & Adventure, TV Comedies - 2005"
              },
            
            ]
      },

      { id:"1 season International TV Shows, TV Action & Adventure, TV Comedies - 2005",
          name: "Year added",
          data:[{ name: "2019",
                  y: 1,
              drilldown: "1 season International TV Shows, TV Action & Adventure, TV Comedies 2019 - 2005"
              },
            
            ]
      },

      { id:"1 season International TV Shows, TV Action & Adventure, TV Comedies 2019 - 2005",
          name: "TV Show",
          data:[{ name: "KO One",
                  y: 1,
              },
            
            ]
      },


      // TV-14
        
      { id:"TV-MA - 2005",
          name: "Category",
          data:[{ name: "British TV Shows, Crime TV Shows, Docuseries",
                  y: 1,
              drilldown: "British TV Shows, Crime TV Shows, Docuseries - 2005"
              },
              { name: "International TV Shows, Romantic TV Shows, TV Comedies",
                  y: 1,
              drilldown: "International TV Shows, Romantic TV Shows, TV Comedies - 2005"
              },
              { name: "International TV Shows, TV Dramas",
                  y: 1,
              drilldown: "International TV Shows, TV Dramas - 2005"
              },
              { name: "TV Comedies",
                  y: 1,
              drilldown: "TV Comedies - 2005"
              },
              { name: "TV Dramas",
                  y: 1,
              drilldown: "TV Dramas - 2005"
              }
            
            ]
      },

      // 1

      { id:"International TV Shows, Romantic TV Shows, TV Comedies - 2005",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows, TV Comedies - 2005"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows, TV Comedies - 2005",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows, TV Comedies 2016 - 2005"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows, TV Comedies 2016 - 2005",
          name: "TV Show",
          data:[{ name: "Cocaine",
                  y: 1,
              },
            
            ]
      },

      // 2

      // 

      { id:"International TV Shows, Romantic TV Shows, TV Comedies - 2005",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows, TV Comedies - 2005"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows, TV Comedies - 2005",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows, TV Comedies 2016 - 2005"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows, TV Comedies 2016 - 2005",
          name: "TV Show",
          data:[{ name: "The Prince Who Turns into a Frog",
                  y: 1,
              },
            
            ]
      },

      // 3

      // 

      { id:"International TV Shows, TV Dramas - 2005",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, TV Dramas - 2005"
              },
            
            ]
      },

      { id:"1 season International TV Shows, TV Dramas - 2005",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "1 season International TV Shows, TV Dramas 2017 - 2005"
              },
            
            ]
      },

      { id:"1 season International TV Shows, TV Dramas 2017 - 2005",
          name: "TV Show",
          data:[{ name: "Burned Cocoon",
                  y: 1,
              },
            
            ]
      },

      // 4

      // 

      { id:"TV Comedies - 2005",
          name: "Seasons",
          data:[{ name: "8 season",
                  y: 1,
              drilldown: "8 season TV Comedies - 2005"
              },
            
            ]
      },

      { id:"8 season TV Comedies - 2005",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "8 season TV Comedies 2017 - 2005"
              },
            
            ]
      },

      { id:"8 season TV Comedies 2017 - 2005",
          name: "TV Show",
          data:[{ name: "That '70s Show",
                  y: 1,
              },
            
            ]
      },

      // 5

      // 

      { id:"TV Dramas - 2005",
          name: "Seasons",
          data:[{ name: "7 season",
                  y: 1,
              drilldown: "7 season TV Dramas - 2005"
              },
            
            ]
      },

      { id:"7 season TV Dramas - 2005",
          name: "Year added",
          data:[{ name: "2015",
                  y: 1,
              drilldown: "7 season TV Dramas 2015 - 2005"
              },
            
            ]
      },

      { id:"7 season TV Dramas 2015 - 2005",
          name: "TV Show",
          data:[{ name: "The West Wing",
                  y: 1,
              },
            
            ]
      },


      // 2006


      { id: "2006",
      name: "Rating",
      data: [{ name: "TV-Y7-FV",
            y: 1,
            drilldown: "TV-Y7-FV - 2006"
            },
            { name: "TV-14",
              y: 4,
              drilldown: "TV-14 - 2006"
            },
            { name: "TV-PG",
            y: 1,
            drilldown: "TV-PG - 2006"
            },
            { name: "TV-MA",
              y: 3,
              drilldown: "TV-MA - 2006"
            },  
        ]
      },

      // TV-Y7-FV
        
      { id:"TV-Y7-FV - 2006",
          name: "Category",
          data:[{ name: "Kids' TV",
                  y: 1,
              drilldown: "Kids' TV - 2006"
              },
            
            ]
      },

      { id:"Kids' TV - 2006",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Kids' TV - 2006"
              },
            
            ]
      },

      { id:"1 season Kids' TV - 2006",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "1 season Kids' TV 2016 - 2006"
              },
            
            ]
      },

      { id:"1 season Kids' TV 2016 - 2006",
          name: "TV Show",
          data:[{ name: "Power Rangers Mystic Force",
                  y: 1,
              },
            
            ]
      },

      // TV-PG
        
      { id:"TV-PG - 2006",
          name: "Category",
          data:[{ name: "British TV Shows, Docuseries, International TV Shows",
                  y: 1,
              drilldown: "British TV Shows, Docuseries, International TV Shows - 2006"
              },
            
            ]
      },

      { id:"British TV Shows, Docuseries, International TV Shows - 2006",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season British TV Shows, Docuseries, International TV Shows - 2006"
              },
            
            ]
      },

      { id:"1 season British TV Shows, Docuseries, International TV Shows - 2006",
          name: "Year added",
          data:[{ name: "2015",
                  y: 1,
              drilldown: "1 season British TV Shows, Docuseries, International TV Shows 2015 - 2006"
              },
            
            ]
      },

      { id:"1 season British TV Shows, Docuseries, International TV Shows 2015 - 2006",
          name: "TV Show",
          data:[{ name: "Planet Earth: The Complete Collection",
                  y: 1,
              },
            
            ]
      },

      

      // TV-MA
        
      { id:"TV-MA - 2006",
          name: "Category",
          data:[{ name: "International TV Shows, Spanish-Language TV Shows, TV Dramas",
                  y: 1,
              drilldown: "International TV Shows, Spanish-Language TV Shows, TV Dramas - 2006"
              },
              { name: "British TV Shows, TV Comedies",
                  y: 1,
              drilldown: "British TV Shows, TV Comedies - 2006"
              },
              { name: "British TV Shows, Docuseries, International TV Shows",
                  y: 1,
              drilldown: "British TV Shows, Docuseries, International TV Shows - 2006"
              }
            
            ]
      },

      { id:"International TV Shows, Spanish-Language TV Shows, TV Dramas - 2006",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, Spanish-Language TV Shows, TV Dramas - 2006"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Spanish-Language TV Shows, TV Dramas - 2006",
          name: "Year added",
          data:[{ name: "2019",
                  y: 1,
              drilldown: "1 season International TV Shows, Spanish-Language TV Shows, TV Dramas 2019 - 2006"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Spanish-Language TV Shows, TV Dramas 2019 - 2006",
          name: "TV Show",
          data:[{ name: "Vientos de agua",
                  y: 1,
              },
            
            ]
      },

      // 

      { id:"British TV Shows, TV Comedies - 2006",
          name: "Seasons",
          data:[{ name: "2 season",
                  y: 1,
              drilldown: "2 season British TV Shows, TV Comedies - 2006"
              },
            
            ]
      },

      { id:"2 season British TV Shows, TV Comedies - 2006",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "2 season British TV Shows, TV Comedies 2017 - 2006"
              },
            
            ]
      },

      { id:"2 season British TV Shows, TV Comedies 2017 - 2006",
          name: "TV Show",
          data:[{ name: "Extras",
                  y: 1,
              },
            
            ]
      },

      // 

      { id:"British TV Shows, Docuseries, International TV Shows - 2006",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season British TV Shows, Docuseries, International TV Shows - 2006"
              },
            
            ]
      },

      { id:"1 season British TV Shows, Docuseries, International TV Shows - 2006",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "1 season British TV Shows, Docuseries, International TV Shows 2017 - 2006"
              },
            
            ]
      },

      { id:"1 season British TV Shows, Docuseries, International TV Shows 2017 - 2006",
          name: "TV Show",
          data:[{ name: "The Real Football Factories",
                  y: 1,
              },
            
            ]
      },


      // TV-14
        
      { id:"TV-14 - 2006",
          name: "Category",
          data:[{ name: "Romantic TV Shows, TV Comedies, TV Dramas",
                  y: 1,
              drilldown: "Romantic TV Shows, TV Comedies, TV Dramas - 2006"
              },
              { name: "Anime Series, Romantic TV Shows, Teen TV Shows",
                  y: 1,
              drilldown: "Anime Series, Romantic TV Shows, Teen TV Shows - 2006"
              },
              { name: "Anime Series, International TV Shows",
                  y: 1,
              drilldown: "Anime Series, International TV Shows - 2006"
              },
              { name: "Anime Series, Crime TV Shows, International TV Shows",
                  y: 1,
              drilldown: "Anime Series, Crime TV Shows, International TV Shows - 2006"
              },
            
            ]
      },

      // 1

      { id:"Romantic TV Shows, TV Comedies, TV Dramas - 2006",
          name: "Seasons",
          data:[{ name: "7 season",
                  y: 1,
              drilldown: "7 season Romantic TV Shows, TV Comedies, TV Dramas - 2006"
              },
            
            ]
      },

      { id:"7 season Romantic TV Shows, TV Comedies, TV Dramas - 2006",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "7 season Romantic TV Shows, TV Comedies, TV Dramas 2017 - 2006"
              },
            
            ]
      },

      { id:"7 season Romantic TV Shows, TV Comedies, TV Dramas 2017 - 2006",
          name: "TV Show",
          data:[{ name: "Gilmore Girls",
                  y: 1,
              },
            
            ]
      },  

      // 2

      { id:"Anime Series, Romantic TV Shows, Teen TV Shows - 2006",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Anime Series, Romantic TV Shows, Teen TV Shows - 2006"
              },
            
            ]
      },

      { id:"1 season Anime Series, Romantic TV Shows, Teen TV Shows - 2006",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "1 season Anime Series, Romantic TV Shows, Teen TV Shows 2017 - 2006"
              },
            
            ]
      },

      { id:"1 season Anime Series, Romantic TV Shows, Teen TV Shows 2017 - 2006",
          name: "TV Show",
          data:[{ name: "Ouran High School Host Club",
                  y: 1,
              },
            
            ]
      },

      // 3

      // 

      { id:"Anime Series, International TV Shows - 2006",
          name: "Seasons",
          data:[{ name: "3 season",
                  y: 1,
              drilldown: "3 season Anime Series, International TV Shows - 2006"
              },
            
            ]
      },

      { id:"3 season Anime Series, International TV Shows - 2006",
          name: "Year added",
          data:[{ name: "2018",
                  y: 1,
              drilldown: "3 season Anime Series, International TV Shows 2018 - 2006"
              },
            
            ]
      },

      { id:"3 season Anime Series, International TV Shows 2018 - 2006",
          name: "TV Show",
          data:[{ name: "Bleach",
                  y: 1,
              },
            
            ]
      },

      // 4

      // 

      { id:"Anime Series, Crime TV Shows, International TV Shows - 2006",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Anime Series, Crime TV Shows, International TV Shows - 2006"
              },
            
            ]
      },

      { id:"1 season Anime Series, Crime TV Shows, International TV Shows - 2006",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "1 season Anime Series, Crime TV Shows, International TV Shows 2016 - 2006"
              },
            
            ]
      },

      { id:"1 season Anime Series, Crime TV Shows, International TV Shows 2016 - 2006",
          name: "TV Show",
          data:[{ name: "DEATH NOTE",
                  y: 1,
              },
            
            ]
      },



      
      // 2007

      { id: "2007",
      name: "Rating",
      data: [{ name: "TV-Y7-FV",
            y: 1,
            drilldown: "TV-Y7-FV - 2007"
            },
            { name: "TV-14",
              y: 6,
              drilldown: "TV-14 - 2007"
            },
            { name: "TV-PG",
            y: 1,
            drilldown: "TV-PG - 2007"
            },
            { name: "TV-MA",
              y: 1,
              drilldown: "TV-MA - 2007"
            },  
            { name: "TV-Y",
              y: 2,
              drilldown: "TV-Y - 2007"
            }
        ]
      },

      // TV-Y7-FV
        
      { id:"TV-Y7-FV - 2007",
          name: "Category",
          data:[{ name: "Kids' TV",
                  y: 1,
              drilldown: "Kids' TV - 2007"
              },
            
            ]
      },

      { id:"Kids' TV - 2007",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Kids' TV - 2007"
              },
            
            ]
      },

      { id:"1 season Kids' TV - 2007",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "1 season Kids' TV 2016 - 2007"
              },
            
            ]
      },

      { id:"1 season Kids' TV 2016 - 2007",
          name: "TV Show",
          data:[{ name: "Power Rangers Operation Overdrive",
                  y: 1,
              },
            
            ]
      },

      // TV-PG
        
      { id:"TV-PG - 2007",
          name: "Category",
          data:[{ name: "Docuseries, International TV Shows, Science & Nature TV",
                  y: 1,
              drilldown: "Docuseries, International TV Shows, Science & Nature TV - 2007"
              },
            
            ]
      },

      { id:"Docuseries, International TV Shows, Science & Nature TV - 2007",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Docuseries, International TV Shows, Science & Nature TV - 2007"
              },
            
            ]
      },

      { id:"1 season Docuseries, International TV Shows, Science & Nature TV - 2007",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "1 season Docuseries, International TV Shows, Science & Nature TV 2016 - 2007"
              },
            
            ]
      },

      { id:"1 season Docuseries, International TV Shows, Science & Nature TV 2016 - 2007",
          name: "TV Show",
          data:[{ name: "The Future of Water",
                  y: 1,
              },
            
            ]
      },

      

      // TV-MA
        
      { id:"TV-MA - 2007",
          name: "Category",
          data:[{ name: "Stand-Up Comedy & Talk Shows",
                  y: 1,
              drilldown: "Stand-Up Comedy & Talk Shows - 2007"
              },
              
            
            ]
      },

      { id:"Stand-Up Comedy & Talk Shows - 2007",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Stand-Up Comedy & Talk Shows - 2007"
              },
            
            ]
      },

      { id:"1 season Stand-Up Comedy & Talk Shows - 2007",
          name: "Year added",
          data:[{ name: "2008",
                  y: 1,
              drilldown: "1 season Stand-Up Comedy & Talk Shows 2008 - 2007"
              },
            
            ]
      },

      { id:"1 season Stand-Up Comedy & Talk Shows 2008 - 2007",
          name: "TV Show",
          data:[{ name: "Dinner for Five",
                  y: 1,
              },
            
            ]
      },

      


      // TV-14
        
      { id:"TV-14 - 2007",
          name: "Category",
          data:[{ name: "Crime TV Shows, TV Dramas",
                  y: 1,
                drilldown: "Crime TV Shows, TV Dramas - 2007"
                },
                { name: "Docuseries",
                    y: 1,
                drilldown: "Docuseries - 2007"
                },
                { name: "Anime Series, International TV Shows",
                    y: 1,
                drilldown: "Anime Series, International TV Shows - 2007"
                },
                { name: "International TV Shows, TV Dramas",
                    y: 1,
                drilldown: "International TV Shows, TV Dramas - 2007"
                },
                { name: "TV Comedies",
                    y: 1,
                drilldown: "TV Comedies - 2007"
                },
                { name: "TV Dramas, TV Mysteries, TV Sci-Fi & Fantasy",
                    y: 1,
                drilldown: "TV Dramas, TV Mysteries, TV Sci-Fi & Fantasy - 2007"
                },
              
            
            ]
      },

      // 1

      { id:"Crime TV Shows, TV Dramas - 2007",
          name: "Seasons",
          data:[{ name: "2 season",
                  y: 1,
              drilldown: "2 season Crime TV Shows, TV Dramas - 2007"
              },
            
            ]
      },

      { id:"2 season Crime TV Shows, TV Dramas - 2007",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "2 season Crime TV Shows, TV Dramas 2017 - 2007"
              },
            
            ]
      },

      { id:"2 season Crime TV Shows, TV Dramas 2017 - 2007",
          name: "TV Show",
          data:[{ name: "Intelligence",
                  y: 1,
              },
            
            ]
      },  

      // 2

      { id:"Docuseries - 2007",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Docuseries - 2007"
              },
            
            ]
      },

      { id:"1 season Docuseries - 2007",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "1 season Docuseries 2017 - 2007"
              },
            
            ]
      },

      { id:"1 season Docuseries 2017 - 2007",
          name: "TV Show",
          data:[{ name: "The War: A Film by Ken Burns and Lynn Novick",
                  y: 1,
              },
            
            ]
      },

      // 3

      // 

      { id:"Anime Series, International TV Shows - 2007",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Anime Series, International TV Shows - 2007"
              },
            
            ]
      },

      { id:"1 season Anime Series, International TV Shows - 2007",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "1 season Anime Series, International TV Shows 2017 - 2007"
              },
            
            ]
      },

      { id:"1 season Anime Series, International TV Shows 2017 - 2007",
          name: "TV Show",
          data:[{ name: "Gurren Lagann",
                  y: 1,
              },
            
            ]
      },

      // 4

    
      { id:"International TV Shows, TV Dramas - 2007",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, TV Dramas - 2007"
              },
            
            ]
      },

      { id:"1 season International TV Shows, TV Dramas - 2007",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "1 season International TV Shows, TV Dramas 2017 - 2007"
              },
            
            ]
      },

      { id:"1 season International TV Shows, TV Dramas 2017 - 2007",
          name: "TV Show",
          data:[{ name: "The Golden Path",
                  y: 1,
              },
            
            ]
      },

      // 5


    
      { id:"TV Comedies - 2007",
          name: "Seasons",
          data:[{ name: "6 season",
                  y: 1,
              drilldown: "6 season TV Comedies - 2007"
              },
            
            ]
      },

      { id:"6 season TV Comedies - 2007",
          name: "Year added",
          data:[{ name: "2018",
                  y: 1,
              drilldown: "6 season TV Comedies 2018 - 2007"
              },
            
            ]
      },

      { id:"6 season TV Comedies 2018 - 2007",
          name: "TV Show",
          data:[{ name: "Kath and Kim",
                  y: 1,
              },
            
            ]
      },

      // 6


      { id:"TV Dramas, TV Mysteries, TV Sci-Fi & Fantasy - 2007",
          name: "Seasons",
          data:[{ name: "4 season",
                  y: 1,
              drilldown: "4 season TV Dramas, TV Mysteries, TV Sci-Fi & Fantasy - 2007"
              },
            
            ]
      },

      { id:"4 season TV Dramas, TV Mysteries, TV Sci-Fi & Fantasy - 2007",
          name: "Year added",
          data:[{ name: "2013",
                  y: 1,
              drilldown: "4 season TV Dramas, TV Mysteries, TV Sci-Fi & Fantasy 2013 - 2007"
              },
            
            ]
      },

      { id:"4 season TV Dramas, TV Mysteries, TV Sci-Fi & Fantasy 2013 - 2007",
          name: "TV Show",
          data:[{ name: "The 4400",
                  y: 1,
              },
            
            ]
      },


      // TV-Y

      { id:"TV-Y - 2007",
          name: "Category",
          data:[{ name: "Kids' TV",
                  y: 2,
              drilldown: "Kids' TV - 2007"
              },
              
            
            ]
      },

      { id:"Kids' TV - 2007",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 2,
              drilldown: "1 season Kids' TV - 2007"
              },
            
            ]
      },

      { id:"1 season Kids' TV - 2007",
          name: "Year added",
          data:[{ name: "2019",
                  y: 2,
              drilldown: "1 season Kids' TV 2019 - 2007"
              },
            
            ]
      },

      { id:"1 season Kids' TV 2019 - 2007",
          name: "TV Show",
          data:[{ name: "Bo on the Go!",
                  y: 1,
              },
              { name: "Upin & Ipin",
                  y: 1,
              }
            
            ]
      },


      // 2008


      { id: "2008",
      name: "Rating",
      data: [{ name: "TV-Y7-FV",
            y: 2,
            drilldown: "TV-Y7-FV - 2008"
            },
            { name: "TV-14",
              y: 8,
              drilldown: "TV-14 - 2008"
            },
            { name: "TV-PG",
            y: 4,
            drilldown: "TV-PG - 2008"
            },
            { name: "TV-MA",
              y: 3,
              drilldown: "TV-MA - 2008"
            },  
            { name: "TV-G",
              y: 2,
              drilldown: "TV-G - 2008"
            },
            { name: "TV-NR",
              y: 1,
              drilldown: "TV-G - 2008"
            },

        ]
      },

      // TV-Y7-FV
        
      { id:"TV-Y7-FV - 2008",
          name: "Category",
          data:[{ name: "Kids' TV",
                  y: 1,
              drilldown: "Kids' TV - 2008"
              },
              { name: "Anime Series, Kids' TV",
                  y: 1,
              drilldown: "Anime Series, Kids' TV - 2008"
              }
            
            ]
      },

      { id:"Kids' TV - 2008",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Kids' TV - 2008"
              },
            
            ]
      },

      { id:"1 season Kids' TV - 2008",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "1 season Kids' TV 2016 - 2008"
              },
            
            ]
      },

      { id:"1 season Kids' TV 2016 - 2008",
          name: "TV Show",
          data:[{ name: "Power Rangers Jungle Fury",
                  y: 1,
              },
            
            ]
      },

      // 

      { id:"Anime Series, Kids' TV - 2008",
          name: "Seasons",
          data:[{ name: "2 season",
                  y: 1,
              drilldown: "2 season Anime Series, Kids' TV - 2008"
              },
            
            ]
      },

      { id:"2 season Anime Series, Kids' TV - 2008",
          name: "Year added",
          data:[{ name: "2018",
                  y: 1,
              drilldown: "2 season Anime Series, Kids' TV 2018 - 2008"
              },
            
            ]
      },

      { id:"2 season Anime Series, Kids' TV 2018 - 2008",
          name: "TV Show",
          data:[{ name: "Dinosaur King",
                  y: 1,
              },
            
            ]
      },

      // TV-PG
        
      { id:"TV-PG - 2008",
          name: "Category",
          data:[{ name: "Anime Series, International TV Shows",
                  y: 1,
              drilldown: "Anime Series, International TV Shows - 2008"
              },
              { name: "Anime Series, Teen TV Shows",
                  y: 1,
              drilldown: "Anime Series, Teen TV Shows - 2008"
              },
              { name: "Kids' TV, TV Action & Adventure, TV Comedies",
                  y: 2,
              drilldown: "Kids' TV, TV Action & Adventure, TV Comedies - 2008"
              }
            
            ]
      },

      { id:"Anime Series, International TV Shows - 2008",
          name: "Seasons",
          data:[{ name: "9 season",
                  y: 1,
              drilldown: "9 season Anime Series, International TV Shows - 2008"
              },
            
            ]
      },

      { id:"9 season Anime Series, International TV Shows - 2008",
          name: "Year added",
          data:[{ name: "2019",
                  y: 1,
              drilldown: "9 season Anime Series, International TV Shows 2019 - 2008"
              },
            
            ]
      },

      { id:"9 season Anime Series, International TV Shows 2019 - 2008",
          name: "TV Show",
          data:[{ name: "Naruto",
                  y: 1,
              },
            
            ]
      },

      // 

      { id:"Anime Series, Teen TV Shows - 2008",
          name: "Seasons",
          data:[{ name: "2 season",
                  y: 1,
              drilldown: "2 season Anime Series, Teen TV Shows - 2008"
              },
            
            ]
      },

      { id:"2 season Anime Series, Teen TV Shows - 2008",
          name: "Year added",
          data:[{ name: "2019",
                  y: 1,
              drilldown: "2 season Anime Series, Teen TV Shows 2019 - 2008"
              },
            
            ]
      },

      { id:"2 season Anime Series, Teen TV Shows 2019 - 2008",
          name: "TV Show",
          data:[{ name: "CLANNAD",
                  y: 1,
              },
            
            ]
      },

      // 

      { id:"Kids' TV, TV Action & Adventure, TV Comedies - 2008",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 2,
              drilldown: "1 season Kids' TV, TV Action & Adventure, TV Comedies - 2008"
              },
            
            ]
      },

      { id:"1 season Kids' TV, TV Action & Adventure, TV Comedies - 2008",
          name: "Year added",
          data:[{ name: "2012",
                  y: 1,
              drilldown: "1 season Kids' TV, TV Action & Adventure, TV Comedies 2012 - 2008"
              },
              { name: "2019",
                  y: 1,
              drilldown: "1 season Kids' TV, TV Action & Adventure, TV Comedies 2019 - 2008"
              }
            
            ]
      },

      { id:"1 season Kids' TV, TV Action & Adventure, TV Comedies 2012 - 2008",
          name: "TV Show",
          data:[{ name: "DreamWorks Shrek's Swamp Stories",
                  y: 1,
              },
            
            ]
      },

      { id:"1 season Kids' TV, TV Action & Adventure, TV Comedies 2019 - 2008",
          name: "TV Show",
          data:[{ name: "DreamWorks Kung Fu Panda Awesome Secrets",
                  y: 1,
              },
            
            ]
      },

      

      // TV-MA
        
      { id:"TV-MA - 2008",
          name: "Category",
          data:[{ name: "British TV Shows, TV Horror, TV Thrillers",
                  y: 1,
              drilldown: "British TV Shows, TV Horror, TV Thrillers - 2008"
              },
              { name: "Crime TV Shows, Docuseries",
                  y: 1,
              drilldown: "Crime TV Shows, Docuseries - 2008"
              },
              { name: "Crime TV Shows, International TV Shows, Spanish-Language TV Shows",
                  y: 1,
              drilldown: "Crime TV Shows, International TV Shows, Spanish-Language TV Shows - 2008"
              }
              
            
            ]
      },

      { id:"British TV Shows, TV Horror, TV Thrillers - 2008",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season British TV Shows, TV Horror, TV Thrillers - 2008"
              },
            
            ]
      },

      { id:"1 season British TV Shows, TV Horror, TV Thrillers - 2008",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "1 season British TV Shows, TV Horror, TV Thrillers 2016 - 2008"
              },
            
            ]
      },

      { id:"1 season British TV Shows, TV Horror, TV Thrillers 2016 - 2008",
          name: "TV Show",
          data:[{ name: "Dead Set",
                  y: 1,
              },
            
            ]
      },

      // 

      { id:"Crime TV Shows, Docuseries - 2008",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Crime TV Shows, Docuseries - 2008"
              },
            
            ]
      },

      { id:"1 season Crime TV Shows, Docuseries - 2008",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "1 season Crime TV Shows, Docuseries 2016 - 2008"
              },
            
            ]
      },

      { id:"1 season Crime TV Shows, Docuseries 2016 - 2008",
          name: "TV Show",
          data:[{ name: "The Irish Mob",
                  y: 1,
              },
            
            ]
      },

      // 

      { id:"Crime TV Shows, International TV Shows, Spanish-Language TV Shows - 2008",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Crime TV Shows, International TV Shows, Spanish-Language TV Shows - 2008"
              },
            
            ]
      },

      { id:"1 season Crime TV Shows, International TV Shows, Spanish-Language TV Shows - 2008",
          name: "Year added",
          data:[{ name: "2018",
                  y: 1,
              drilldown: "1 season Crime TV Shows, International TV Shows, Spanish-Language TV Shows 2018 - 2008"
              },
            
            ]
      },

      { id:"1 season Crime TV Shows, International TV Shows, Spanish-Language TV Shows 2018 - 2008",
          name: "TV Show",
          data:[{ name: "El Cartel",
                  y: 1,
              },
            
            ]
      },


      // TV-G
        
      { id:"TV-G - 2008",
          name: "Category",
          data:[{ name: "British TV Shows, Docuseries, Science & Nature TV",
                  y: 1,
              drilldown: "British TV Shows, Docuseries, Science & Nature TV - 2008"
              },
              { name: "International TV Shows, Stand-Up Comedy & Talk Shows",
                  y: 1,
              drilldown: "International TV Shows, Stand-Up Comedy & Talk Shows - 2008"
              },
                         
            
            ]
      },

      { id:"British TV Shows, Docuseries, Science & Nature TV - 2008",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season British TV Shows, Docuseries, Science & Nature TV - 2008"
              },
            
            ]
      },

      { id:"1 season British TV Shows, Docuseries, Science & Nature TV - 2008",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "1 season British TV Shows, Docuseries, Science & Nature TV 2016 - 2008"
              },
            
            ]
      },

      { id:"1 season British TV Shows, Docuseries, Science & Nature TV 2016 - 2008",
          name: "TV Show",
          data:[{ name: "Edge of the Universe",
                  y: 1,
              },
            
            ]
      },

      // 

      { id:"International TV Shows, Stand-Up Comedy & Talk Shows - 2008",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, Stand-Up Comedy & Talk Shows - 2008"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Stand-Up Comedy & Talk Shows - 2008",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "1 season International TV Shows, Stand-Up Comedy & Talk Shows 2017 - 2008"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Stand-Up Comedy & Talk Shows 2017 - 2008",
          name: "TV Show",
          data:[{ name: "Japanese Style Originator",
                  y: 1,
              },
            
            ]
      },
      


      // TV-14
        
      { id:"TV-14 - 2008",
          name: "Category",
          data:[{ name: "Anime Series, Crime TV Shows",
                  y: 1,
                drilldown: "Anime Series, Crime TV Shows - 2008"
                },
                { name: "Anime Series, International TV Shows",
                    y: 1,
                drilldown: "Anime Series, International TV Shows - 2008"
                },
                { name: "Anime Series, International TV Shows, Romantic TV Shows",
                    y: 1,
                drilldown: "Anime Series, International TV Shows, Romantic TV Shows - 2008"
                },
                { name: "Classic & Cult TV, TV Action & Adventure, TV Dramas",
                    y: 1,
                drilldown: "Classic & Cult TV, TV Action & Adventure, TV Dramas - 2008"
                },
                { name: "Crime TV Shows, International TV Shows, TV Action & Adventure",
                    y: 1,
                drilldown: "Crime TV Shows, International TV Shows, TV Action & Adventure - 2008"
                },
                { name: "International TV Shows, Romantic TV Shows, TV Comedies",
                    y: 1,
                drilldown: "International TV Shows, Romantic TV Shows, TV Comedies - 2008"
                },
                { name: "International TV Shows, Spanish-Language TV Shows, TV Dramas",
                    y: 1,
                drilldown: "International TV Shows, Spanish-Language TV Shows, TV Dramas - 2008"
                },
                { name: "International TV Shows, TV Dramas",
                    y: 1,
                drilldown: "International TV Shows, TV Dramas - 2008"
                }
              
            
            ]
      },

      // 1

      { id:"Anime Series, Crime TV Shows - 2008",
          name: "Seasons",
          data:[{ name: "2 season",
                  y: 1,
              drilldown: "2 season Anime Series, Crime TV Shows - 2008"
              },
            
            ]
      },

      { id:"2 season Anime Series, Crime TV Shows - 2008",
          name: "Year added",
          data:[{ name: "-",
                  y: 1,
              drilldown: "2 season Anime Series, Crime TV Shows - - 2008"
              },
            
            ]
      },

      { id:"2 season Anime Series, Crime TV Shows - - 2008",
          name: "TV Show",
          data:[{ name: "Gunslinger Girl",
                  y: 1,
              },
            
            ]
      },  

      // 2

      { id:"Anime Series, International TV Shows - 2008",
          name: "Seasons",
          data:[{ name: "2 season",
                  y: 1,
              drilldown: "2 season Anime Series, International TV Shows - 2008"
              },
            
            ]
      },

      { id:"2 season Anime Series, International TV Shows - 2008",
          name: "Year added",
          data:[{ name: "2019",
                  y: 1,
              drilldown: "2 season Anime Series, International TV Shows 2019 - 2008"
              },
            
            ]
      },

      { id:"2 season Anime Series, International TV Shows 2019 - 2008",
          name: "TV Show",
          data:[{ name: "Code Geass: Lelouch of the Rebellion",
                  y: 1,
              },
            
            ]
      },  

      // 3

      { id:"Anime Series, International TV Shows, Romantic TV Shows - 2008",
          name: "Seasons",
          data:[{ name: "2 season",
                  y: 1,
              drilldown: "2 season Anime Series, International TV Shows, Romantic TV Shows - 2008"
              },
            
            ]
      },

      { id:"2 season Anime Series, International TV Shows, Romantic TV Shows - 2008",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "2 season Anime Series, International TV Shows, Romantic TV Shows 2016 - 2008"
              },
            
            ]
      },

      { id:"2 season Anime Series, International TV Shows, Romantic TV Shows 2016 - 2008",
          name: "TV Show",
          data:[{ name: "Vampire Knight",
                  y: 1,
              },
            
            ]
      },  

      // 4

       { id:"Classic & Cult TV, TV Action & Adventure, TV Dramas - 2008",
          name: "Seasons",
          data:[{ name: "2 season",
                  y: 1,
              drilldown: "2 season Classic & Cult TV, TV Action & Adventure, TV Dramas - 2008"
              },
            
            ]
      },

      { id:"2 season Classic & Cult TV, TV Action & Adventure, TV Dramas - 2008",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "2 season Classic & Cult TV, TV Action & Adventure, TV Dramas 2017 - 2008"
              },
            
            ]
      },

      { id:"2 season Classic & Cult TV, TV Action & Adventure, TV Dramas 2017 - 2008",
          name: "TV Show",
          data:[{ name: "Jericho",
                  y: 1,
              },
            
            ]
      }, 

      // 5

      { id:"Crime TV Shows, International TV Shows, TV Action & Adventure - 2008",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Crime TV Shows, International TV Shows, TV Action & Adventure - 2008"
              },
            
            ]
      },

      { id:"1 season Crime TV Shows, International TV Shows, TV Action & Adventure - 2008",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "1 season Crime TV Shows, International TV Shows, TV Action & Adventure 2017 - 2008"
              },
            
            ]
      },

      { id:"1 season Crime TV Shows, International TV Shows, TV Action & Adventure 2017 - 2008",
          name: "TV Show",
          data:[{ name: "The Truth",
                  y: 1,
              },
            
            ]
      }, 

      // 6

      { id:"International TV Shows, Romantic TV Shows, TV Comedies - 2008",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows, TV Comedies - 2008"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows, TV Comedies - 2008",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows, TV Comedies 2016 - 2008"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows, TV Comedies 2016 - 2008",
          name: "TV Show",
          data:[{ name: "You're My Destiny",
                  y: 1,
              },
            
            ]
      }, 

      // 7

      { id:"International TV Shows, Spanish-Language TV Shows, TV Dramas - 2008",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, Spanish-Language TV Shows, TV Dramas - 2008"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Spanish-Language TV Shows, TV Dramas - 2008",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "1 season International TV Shows, Spanish-Language TV Shows, TV Dramas 2017 - 2008"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Spanish-Language TV Shows, TV Dramas 2017 - 2008",
          name: "TV Show",
          data:[{ name: "Sin senos no hay paraiso",
                  y: 1,
              },
            
            ]
      }, 

      // 8

      { id:"International TV Shows, TV Dramas - 2008",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, TV Dramas - 2008"
              },
            
            ]
      },

      { id:"1 season International TV Shows, TV Dramas - 2008",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "1 season International TV Shows, TV Dramas 2017 - 2008"
              },
            
            ]
      },

      { id:"1 season International TV Shows, TV Dramas 2017 - 2008",
          name: "TV Show",
          data:[{ name: "Exclusive Edition",
                  y: 1,
              },
            
            ]
      }, 

      


      // NR

      { id:"NR - 2008",
          name: "Category",
          data:[{ name: "International TV Shows, TV Action & Adventure, TV Dramas",
                  y: 1,
              drilldown: "International TV Shows, TV Action & Adventure, TV Dramas - 2008"
              },
              
            
            ]
      },

      { id:"International TV Shows, TV Action & Adventure, TV Dramas - 2008",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, TV Action & Adventure, TV Dramas - 2008"
              },
            
            ]
      },

      { id:"1 season International TV Shows, TV Action & Adventure, TV Dramas - 2008",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "1 season International TV Shows, TV Action & Adventure, TV Dramas 2017 - 2008"
              },
            
            ]
      },

      { id:"1 season International TV Shows, TV Action & Adventure, TV Dramas 2017 - 2008",
          name: "TV Show",
          data:[{ name: "The Legend of Bruce Lee",
                  y: 1,
              },
           
            ]
      },




      // 2009

      { id: "2009",
      name: "Rating",
      data: [{ name: "TV-Y7-FV",
            y: 1,
            drilldown: "TV-Y7-FV - 2009"
            },
            { name: "TV-14",
              y: 17,
              drilldown: "TV-14 - 2009"
            },
            { name: "TV-PG",
            y: 9,
            drilldown: "TV-PG - 2009"
            },
            { name: "TV-MA",
              y: 3,
              drilldown: "TV-MA - 2009"
            },  
            { name: "TV-G",
              y: 1,
              drilldown: "TV-G - 2009"
            },
            { name: "TV-NR",
              y: 2,
              drilldown: "TV-NR - 2009"
            },
            { name: "TV-Y7",
            y: 1,
            drilldown: "TV-Y7 - 2009"
            }

        ]
      },

      // TV-Y7-FV
        
      { id:"TV-Y7-FV - 2009",
          name: "Category",
          data:[{ name: "Kids' TV",
                  y: 1,
              drilldown: "Kids' TV - 2009"
              },            
            ]
      },

      { id:"Kids' TV - 2009",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Kids' TV - 2009"
              },
            
            ]
      },

      { id:"1 season Kids' TV - 2009",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "1 season Kids' TV 2016 - 2009"
              },
            
            ]
      },

      { id:"1 season Kids' TV 2016 - 2009",
          name: "TV Show",
          data:[{ name: "Power Rangers RPM",
                  y: 1,
              },
            
            ]
      },

      // TV-Y7
        
      { id:"TV-Y7 - 2009",
          name: "Category",
          data:[{ name: "Kids' TV",
                  y: 1,
              drilldown: "Y7 Kids' TV - 2009"
              },            
            ]
      },

      { id:"Y7 Kids' TV - 2009",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Y7 Kids' TV - 2009"
              },
            
            ]
      },

      { id:"1 season Y7 Kids' TV - 2009",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "1 season Y7 Kids' TV 2017 - 2009"
              },
            
            ]
      },

      { id:"1 season Y7 Kids' TV 2017 - 2009",
          name: "TV Show",
          data:[{ name: "Beyblade: Metal Fusion",
                  y: 1,
              },
            
            ]
      },

      // TV-PG
        
      { id:"TV-PG - 2009",
          name: "Category",
          data:[{ name: "British TV Shows, Docuseries, International TV Shows",
                  y: 1,
              drilldown: "British TV Shows, Docuseries, International TV Shows - 2009"
              },
              { name: "British TV Shows, Docuseries, Science & Nature TV",
                  y: 2,
              drilldown: "British TV Shows, Docuseries, Science & Nature TV - 2009"
              },
              { name: "Docuseries, Science & Nature TV",
                  y: 2,
              drilldown: "Docuseries, Science & Nature TV - 2009"
              },
              { name: "International TV Shows, TV Comedies, TV Dramas",
                  y: 1,
              drilldown: "International TV Shows, TV Comedies, TV Dramas - 2009"
              },
              { name: "International TV Shows, TV Dramas",
                  y: 1,
              drilldown: "International TV Shows, TV Dramas - 2009"
              },
              { name: "Kids' TV, TV Comedies",
                  y: 1,
              drilldown: "Kids' TV, TV Comedies - 2009"
              },
              { name: "Kids' TV, TV Dramas",
                  y: 1,
              drilldown: "Kids' TV, TV Dramas - 2009"
              }
            
            ]
      },

      { id:"British TV Shows, Docuseries, International TV Shows - 2009",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season British TV Shows, Docuseries, International TV Shows - 2009"
              },
            
            ]
      },

      { id:"1 season British TV Shows, Docuseries, International TV Shows - 2009",
          name: "Year added",
          data:[{ name: "2015",
                  y: 1,
              drilldown: "1 season British TV Shows, Docuseries, International TV Shows 2015 - 2009"
              },
            
            ]
      },

      { id:"1 season British TV Shows, Docuseries, International TV Shows 2015 - 2009",
          name: "TV Show",
          data:[{ name: "Life",
                  y: 1,
              },
            
            ]
      },

      // 

      { id:"British TV Shows, Docuseries, Science & Nature TV - 2009",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 2,
              drilldown: "1 season British TV Shows, Docuseries, Science & Nature TV - 2009"
              },
            
            ]
      },

      { id:"1 season British TV Shows, Docuseries, Science & Nature TV - 2009",
          name: "Year added",
          data:[{ name: "2015",
                  y: 2,
              drilldown: "1 season British TV Shows, Docuseries, Science & Nature TV 2015 - 2009"
              },
            
            ]
      },

      { id:"1 season British TV Shows, Docuseries, Science & Nature TV 2015 - 2009",
          name: "TV Show",
          data:[{ name: "Nature's Great Events: Diaries",
                  y: 1,
              },
              { name: "Nature's Great Events (2009)",
                  y: 1,
              }
            
            ]
      },

      // 

      { id:"Docuseries, Science & Nature TV - 2009",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 2,
              drilldown: "1 season Docuseries, Science & Nature TV - 2009"
              },
            
            ]
      },

      { id:"1 season Docuseries, Science & Nature TV - 2009",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "1 season Docuseries, Science & Nature TV 2016 - 2009"
              },
              { name: "2019",
                  y: 1,
              drilldown: "1 season Docuseries, Science & Nature TV 2019 - 2009"
              }
            
            ]
      },

      { id:"1 season Docuseries, Science & Nature TV 2016 - 2009",
          name: "TV Show",
          data:[{ name: "The Pyramid Code",
                  y: 1,
              }
            ]
      },
      { id:"1 season Docuseries, Science & Nature TV 2019 - 2009",
          name: "TV Show",
          data:[{ name: "The Universe",
                  y: 1,
              }
            ]
      },

      // 

      { id:"International TV Shows, TV Comedies, TV Dramas - 2009",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, TV Comedies, TV Dramas - 2009"
              },
            
            ]
      },

      { id:"1 season International TV Shows, TV Comedies, TV Dramas - 2009",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "1 season International TV Shows, TV Comedies, TV Dramas 2016 - 2009"
              },
            
            ]
      },

      { id:"1 season International TV Shows, TV Comedies, TV Dramas 2016 - 2009",
          name: "TV Show",
          data:[{ name: "Game Winning Hit",
                  y: 1,
              },
            
            ]
      },

      // 

      { id:"International TV Shows, TV Dramas - 2009",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, TV Dramas - 2009"
              },
            
            ]
      },

      { id:"1 season International TV Shows, TV Dramas - 2009",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "1 season International TV Shows, TV Dramas 2017 - 2009"
              },
            
            ]
      },

      { id:"1 season International TV Shows, TV Dramas 2017 - 2009",
          name: "TV Show",
          data:[{ name: "The Iron Lady",
                  y: 1,
              },
            
            ]
      },

      // 

      { id:"Kids' TV, TV Comedies - 2009",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Kids' TV, TV Comedies - 2009"
              },
            
            ]
      },

      { id:"1 season Kids' TV, TV Comedies - 2009",
          name: "Year added",
          data:[{ name: "2018",
                  y: 1,
              drilldown: "1 season Kids' TV, TV Comedies 2018 - 2009"
              },
            
            ]
      },

      { id:"1 season Kids' TV, TV Comedies 2018 - 2009",
          name: "TV Show",
          data:[{ name: "DreamWorks Spooky Stories",
                  y: 1,
              },
            
            ]
      },

      // 

      { id:"Kids' TV, TV Dramas - 2009",
          name: "Seasons",
          data:[{ name: "3 season",
                  y: 1,
              drilldown: "3 season Kids' TV, TV Dramas - 2009"
              },
            
            ]
      },

      { id:"3 season Kids' TV, TV Dramas - 2009",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "3 season Kids' TV, TV Dramas 2017 - 2009"
              },
            
            ]
      },

      { id:"3 season Kids' TV, TV Dramas 2017 - 2009",
          name: "TV Show",
          data:[{ name: "H2O: Just Add Water",
                  y: 1,
              },
            
            ]
      },
      
      

      // TV-MA
        
      { id:"TV-MA - 2009",
          name: "Category",
          data:[{ name: "International TV Shows, Korean TV Shows, TV Action & Adventure",
                  y: 1,
              drilldown: "International TV Shows, Korean TV Shows, TV Action & Adventure - 2009"
              },
              { name: "International TV Shows, TV Dramas",
                  y: 1,
              drilldown: "International TV Shows, TV Dramas - 2009"
              },
              { name: "Romantic TV Shows, TV Dramas",
                  y: 1,
              drilldown: "Romantic TV Shows, TV Dramas - 2009"
              }
              
            
            ]
      },

      { id:"International TV Shows, Korean TV Shows, TV Action & Adventure - 2009",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, Korean TV Shows, TV Action & Adventure - 2009"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Korean TV Shows, TV Action & Adventure - 2009",
          name: "Year added",
          data:[{ name: "2018",
                  y: 1,
              drilldown: "1 season International TV Shows, Korean TV Shows, TV Action & Adventure 2018 - 2009"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Korean TV Shows, TV Action & Adventure 2018 - 2009",
          name: "TV Show",
          data:[{ name: "Iris",
                  y: 1,
              },
            
            ]
      },

      // 

      { id:"International TV Shows, TV Dramas - 2009",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, TV Dramas - 2009"
              },
            
            ]
      },

      { id:"1 season International TV Shows, TV Dramas - 2009",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "1 season International TV Shows, TV Dramas 2017 - 2009"
              },
            
            ]
      },

      { id:"1 season International TV Shows, TV Dramas 2017 - 2009",
          name: "TV Show",
          data:[{ name: "Together",
                  y: 1,
              },
            
            ]
      },

      // 

      { id:"Romantic TV Shows, TV Dramas - 2009",
          name: "Seasons",
          data:[{ name: "6 season",
                  y: 1,
              drilldown: "6 season Romantic TV Shows, TV Dramas - 2009"
              },
            
            ]
      },

      { id:"6 season Romantic TV Shows, TV Dramas - 2009",
          name: "Year added",
          data:[{ name: "2018",
                  y: 1,
              drilldown: "6 season Romantic TV Shows, TV Dramas 2018 - 2009"
              },
            
            ]
      },

      { id:"6 season Romantic TV Shows, TV Dramas 2018 - 2009",
          name: "TV Show",
          data:[{ name: "The L Word",
                  y: 1,
              },
            
            ]
      },


      // TV-G
        
      { id:"TV-G - 2009",
          name: "Category",
          data:[{ name: "British TV Shows, Docuseries, Science & Nature TV",
                  y: 1,
              drilldown: "British TV Shows, Docuseries, Science & Nature TV - 2009"
              },
                         
            
            ]
      },

      { id:"British TV Shows, Docuseries, Science & Nature TV - 2009",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season British TV Shows, Docuseries, Science & Nature TV - 2009"
              },
            
            ]
      },

      { id:"1 season British TV Shows, Docuseries, Science & Nature TV - 2009",
          name: "Year added",
          data:[{ name: "2015",
                  y: 1,
              drilldown: "1 season British TV Shows, Docuseries, Science & Nature TV 2015 - 2009"
              },
            
            ]
      },

      { id:"1 season British TV Shows, Docuseries, Science & Nature TV 2015 - 2009",
          name: "TV Show",
          data:[{ name: "Life on Location",
                  y: 1,
              },
            
            ]
      },
     


      // TV-14
        
      { id:"TV-14 - 2009",
          name: "Category",
          data:[{ name: "Anime Series, International TV Shows",
                  y: 2,
                drilldown: "Anime Series, International TV Shows - 2009"
                },
                { name: "Crime TV Shows, International TV Shows, TV Dramas",
                  y: 1,
                drilldown: "Crime TV Shows, International TV Shows, TV Dramas - 2009"
                },
                { name: "Docuseries, International TV Shows",
                  y: 1,
                drilldown: "Docuseries, International TV Shows - 2009"
                },
                { name: "International TV Shows, Korean TV Shows, Romantic TV Shows",
                  y: 2,
                drilldown: "International TV Shows, Korean TV Shows, Romantic TV Shows - 2009"
                },
                { name: "International TV Shows, Romantic TV Shows, TV Comedies",
                  y: 3,
                drilldown: "International TV Shows, Romantic TV Shows, TV Comedies - 2009"
                },
                { name: "International TV Shows, Romantic TV Shows, TV Dramas",
                  y: 2,
                drilldown: "International TV Shows, Romantic TV Shows, TV Dramas - 2009"
                },
                { name: "International TV Shows, TV Comedies, TV Sci-Fi & Fantasy",
                  y: 1,
                drilldown: "International TV Shows, TV Comedies, TV Sci-Fi & Fantasy - 2009"
                },
                { name: "International TV Shows, TV Dramas",
                  y: 4,
                drilldown: "International TV Shows, TV Dramas - 2009"
                },
                { name: "Reality TV, Romantic TV Shows",
                  y: 1,
                drilldown: "Reality TV, Romantic TV Shows - 2009"
                },

            
            ]
      },

      // 1

      { id:"Anime Series, International TV Shows - 2009",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Anime Series, International TV Shows - 2009"
              },
              { name: "4 season",
                  y: 1,
              drilldown: "4 season Anime Series, International TV Shows - 2009"
              },
            
            ]
      },

      { id:"1 season Anime Series, International TV Shows - 2009",
          name: "Year added",
          data:[{ name: "2018",
                  y: 1,
              drilldown: "1 season Anime Series, International TV Shows 2018 - 2009"
              },
            
            ]
      },

      { id:"1 season Anime Series, International TV Shows 2018 - 2009",
          name: "TV Show",
          data:[{ name: "Saint Seiya: The Lost Canvas",
                  y: 1,
              },
            
            ]
      },  

      { id:"4 season Anime Series, International TV Shows - 2009",
          name: "Year added",
          data:[{ name: "2020",
                  y: 1,
              drilldown: "4 season Anime Series, International TV Shows 2020 - 2009"
              },
            
            ]
      },

      { id:"4 season Anime Series, International TV Shows 2020 - 2009",
          name: "TV Show",
          data:[{ name: "Soul Eater",
                  y: 1,
              },
            
            ]
      },  

      // 2

      { id:"Crime TV Shows, International TV Shows, TV Dramas - 2009",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Crime TV Shows, International TV Shows, TV Dramas - 2009"
              },            
            ]
      },

      { id:"1 season Crime TV Shows, International TV Shows, TV Dramas - 2009",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "1 season Crime TV Shows, International TV Shows, TV Dramas 2016 - 2009"
              },
            
            ]
      },

      { id:"1 season Crime TV Shows, International TV Shows, TV Dramas 2016 - 2009",
          name: "TV Show",
          data:[{ name: "Ezel",
                  y: 1,
              },
            
            ]
      },  

      // 3

      { id:"Docuseries, International TV Shows - 2009",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Docuseries, International TV Shows - 2009"
              },            
            ]
      },

      { id:"1 season Docuseries, International TV Shows - 2009",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "1 season Docuseries, International TV Shows 2016 - 2009"
              },
            
            ]
      },

      { id:"1 season Docuseries, International TV Shows 2016 - 2009",
          name: "TV Show",
          data:[{ name: "Einsatzgruppen: The Nazi Death Squads",
                  y: 1,
              },
            
            ]
      },  

      // 4

      { id:"International TV Shows, Korean TV Shows, Romantic TV Shows - 2009",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 2,
              drilldown: "1 season International TV Shows, Korean TV Shows, Romantic TV Shows - 2009"
              },            
            ]
      },

      { id:"1 season International TV Shows, Korean TV Shows, Romantic TV Shows - 2009",
          name: "Year added",
          data:[{ name: "2018",
                  y: 1,
              drilldown: "1 season International TV Shows, Korean TV Shows, Romantic TV Shows 2018 - 2009"
              },
              { name: "2019",
                  y: 1,
              drilldown: "1 season International TV Shows, Korean TV Shows, Romantic TV Shows 2019 - 2009"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Korean TV Shows, Romantic TV Shows 2018 - 2009",
          name: "TV Show",
          data:[{ name: "Boys Over Flowers",
                  y: 1,
              },
            
            ]
      }, 
      { id:"1 season International TV Shows, Korean TV Shows, Romantic TV Shows 2019 - 2009",
          name: "TV Show",
          data:[{ name: "Cain and Abel",
                  y: 1,
              },
            
            ]
      },  

      // 5

      { id:"International TV Shows, Romantic TV Shows, TV Comedies - 2009",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 3,
              drilldown: "1 season International TV Shows, Romantic TV Shows, TV Comedies - 2009"
              },            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows, TV Comedies - 2009",
          name: "Year added",
          data:[{ name: "2016",
                  y: 3,
              drilldown: "1 season International TV Shows, Romantic TV Shows, TV Comedies 2016 - 2009"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows, TV Comedies 2016 - 2009",
          name: "TV Show",
          data:[{ name: "Queen of No Marriage",
                  y: 1,
              },
              { name: "Easy Fortune Happy Life",
                  y: 1,
              },
              { name: "The Year of Happiness and Love",
                  y: 1,
              },
  
            ]
      }, 

      // 6

      { id:"International TV Shows, Romantic TV Shows, TV Dramas - 2009",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 2,
              drilldown: "1 season International TV Shows, Romantic TV Shows, TV Dramas - 2009"
              },            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows, TV Dramas - 2009",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows, TV Dramas 2016 - 2009"
              },
              { name: "2017",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows, TV Dramas 2017 - 2009"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows, TV Dramas 2016 - 2009",
          name: "TV Show",
          data:[{ name: "Autumn's Concerto",
                  y: 1,
              },  
            ]
      },
      { id:"1 season International TV Shows, Romantic TV Shows, TV Dramas 2017 - 2009",
          name: "TV Show",
          data:[{ name: "The Dream Catchers",
                  y: 1,
              },  
            ]
      }, 


      // 7

      { id:"International TV Shows, TV Comedies, TV Sci-Fi & Fantasy - 2009",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, TV Comedies, TV Sci-Fi & Fantasy - 2009"
              },            
            ]
      },

      { id:"1 season International TV Shows, TV Comedies, TV Sci-Fi & Fantasy - 2009",
          name: "Year added",
          data:[{ name: "2019",
                  y: 1,
              drilldown: "1 season International TV Shows, TV Comedies, TV Sci-Fi & Fantasy 2019 - 2009"
              },
            
            ]
      },

      { id:"1 season International TV Shows, TV Comedies, TV Sci-Fi & Fantasy 2019 - 2009",
          name: "TV Show",
          data:[{ name: "K.O.3an Guo",
                  y: 1,
              },  
            ]
      },

      // 8

        { id:"International TV Shows, TV Dramas - 2009",
        name: "Seasons",
        data:[{ name: "1 season",
                y: 4,
            drilldown: "1 season International TV Shows, TV Dramas - 2009"
            },            
          ]
        },
  
        { id:"1 season International TV Shows, TV Dramas - 2009",
            name: "Year added",
            data:[{ name: "2017",
                    y: 4,
                drilldown: "1 season International TV Shows, TV Dramas 2017 - 2009"
                },
              
              ]
        },
  
        { id:"1 season International TV Shows, TV Dramas 2017 - 2009",
            name: "TV Show",
            data:[{ name: "Jhansi Ki Rani",
                    y: 1,
                },
                { name: "The Ultimatum",
                    y: 1,
                },
                { name: "Timeless Season",
                    y: 1,
                },
                { name: "The Little Nyonya",
                    y: 1,
                },
    
              ]
        }, 

        // 9

        { id:"Reality TV, Romantic TV Shows - 2009",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Reality TV, Romantic TV Shows - 2009"
              },            
            ]
      },

      { id:"1 season Reality TV, Romantic TV Shows - 2009",
          name: "Year added",
          data:[{ name: "2019",
                  y: 1,
              drilldown: "1 season Reality TV, Romantic TV Shows 2019 - 2009"
              },
            
            ]
      },

      { id:"1 season Reality TV, Romantic TV Shows 2019 - 2009",
          name: "TV Show",
          data:[{ name: "The Bachelor",
                  y: 1,
              },  
            ]
      },


      


      // NR

      { id:"NR - 2009",
          name: "Category",
          data:[{ name: "British TV Shows, Docuseries",
                  y: 1,
              drilldown: "British TV Shows, Docuseries - 2009"
              },
              { name: "British TV Shows, Docuseries, International TV Shows",
                  y: 1,
              drilldown: "British TV Shows, Docuseries, International TV Shows - 2009"
              },
              
            
            ]
      },

      { id:"British TV Shows, Docuseries - 2009",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season British TV Shows, Docuseries - 2009"
              },
            
            ]
      },

      { id:"1 season British TV Shows, Docuseries - 2009",
          name: "Year added",
          data:[{ name: "2018",
                  y: 1,
              drilldown: "1 season British TV Shows, Docuseries 2018 - 2009"
              },
            
            ]
      },

      { id:"1 season British TV Shows, Docuseries 2018 - 2009",
          name: "TV Show",
          data:[{ name: "Monty Python's Almost the Truth",
                  y: 1,
              },
           
            ]
      },

      // 

      { id:"British TV Shows, Docuseries, International TV Shows - 2009",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season British TV Shows, Docuseries, International TV Shows - 2009"
              },
            
            ]
      },

      { id:"1 season British TV Shows, Docuseries, International TV Shows - 2009",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "1 season British TV Shows, Docuseries, International TV Shows 2017 - 2009"
              },
            
            ]
      },

      { id:"1 season British TV Shows, Docuseries, International TV Shows 2017 - 2009",
          name: "TV Show",
          data:[{ name: "World War II in Colour",
                  y: 1,
              },
           
            ]
      },

      // 2010

      { id: "2010",
      name: "Rating",
      data: [{ name: "TV-Y7-FV",
            y: 1,
            drilldown: "TV-Y7-FV - 2010"
            },
            { name: "TV-14",
              y: 17,
              drilldown: "TV-14 - 2010"
            },
            { name: "TV-PG",
            y: 12,
            drilldown: "TV-PG - 2010"
            },
            { name: "TV-MA",
              y: 6,
              drilldown: "TV-MA - 2010"
            },  
            { name: "TV-Y",
              y: 1,
              drilldown: "TV-Y - 2010"
            },
            { name: "TV-Y7",
            y: 1,
            drilldown: "TV-Y7 - 2010"
            }

        ]
      },

      // TV-Y7-FV
        
      { id:"TV-Y7-FV - 2010",
          name: "Category",
          data:[{ name: "Kids' TV",
                  y: 1,
              drilldown: "Y7FV Kids' TV - 2010"
              },            
            ]
      },

      { id:"Y7FV Kids' TV - 2010",
          name: "Seasons",
          data:[{ name: "4 season",
                  y: 1,
              drilldown: "4 season Y7FV Kids' TV - 2010"
              },
            
            ]
      },

      { id:"4 season Y7FV Kids' TV - 2010",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "4 season Y7FV Kids' TV 2016 - 2010"
              },
            
            ]
      },

      { id:"4 season Y7FV Kids' TV 2016 - 2010",
          name: "TV Show",
          data:[{ name: "Mighty Morphin Power Rangers",
                  y: 1,
              },
            
            ]
      },

      // TV-Y7
        
      { id:"TV-Y7 - 2010",
          name: "Category",
          data:[{ name: "Kids' TV",
                  y: 1,
              drilldown: "Y7 Kids' TV - 2010"
              },            
            ]
      },

      { id:"Y7 Kids' TV - 2010",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Y7 Kids' TV - 2010"
              },
            
            ]
      },

      { id:"1 season Y7 Kids' TV - 2010",
          name: "Year added",
          data:[{ name: "2019",
                  y: 1,
              drilldown: "1 season Y7 Kids' TV 2019 - 2010"
              },
            
            ]
      },

      { id:"1 season Y7 Kids' TV 2019 - 2010",
          name: "TV Show",
          data:[{ name: "The Jungle Book",
                  y: 1,
              },
            
            ]
      },


      // TV-Y

      { id:"TV-Y - 2010",
          name: "Category",
          data:[{ name: "Kids' TV",
                  y: 1,
              drilldown: "Y Kids' TV - 2010"
              },            
            ]
      },

      { id:"Y Kids' TV - 2010",
          name: "Seasons",
          data:[{ name: "2 season",
                  y: 1,
              drilldown: "2 season Y Kids' TV - 2010"
              },
            
            ]
      },

      { id:"2 season Y Kids' TV - 2010",
          name: "Year added",
          data:[{ name: "-",
                  y: 1,
              drilldown: "2 season Y Kids' TV - - 2010"
              },
            
            ]
      },

      { id:"2 season Y Kids' TV - - 2010",
          name: "TV Show",
          data:[{ name: "Kikoriki",
                  y: 1,
              },
            
            ]
      },

      // TV-PG
        
      { id:"TV-PG - 2010",
          name: "Category",
          data:[{ name: "Anime Series, Teen TV Shows",
                  y: 1,
              drilldown: "Anime Series, Teen TV Shows - 2010"
              },

              { name: "Classic & Cult TV, Crime TV Shows, International TV Shows",
                  y: 1,
              drilldown: "Classic & Cult TV, Crime TV Shows, International TV Shows - 2010"
              },

              { name: "Docuseries",
                  y: 1,
              drilldown: "Docuseries - 2010"
              },

              { name: "Docuseries, International TV Shows, Spanish-Language TV Shows",
                  y: 1,
              drilldown: "Docuseries, International TV Shows, Spanish-Language TV Shows - 2010"
              },

              { name: "Docuseries, Science & Nature TV",
                  y: 1,
              drilldown: "Docuseries, Science & Nature TV - 2010"
              },

              { name: "International TV Shows, Romantic TV Shows, Spanish-Language TV Shows",
                  y: 1,
              drilldown: "International TV Shows, Romantic TV Shows, Spanish-Language TV Shows - 2010"
              },

              { name: "International TV Shows, Romantic TV Shows, TV Comedies",
                  y: 1,
              drilldown: "International TV Shows, Romantic TV Shows, TV Comedies - 2010"
              },

              { name: "International TV Shows, Romantic TV Shows, TV Dramas",
                  y: 1,
              drilldown: "International TV Shows, Romantic TV Shows, TV Dramas - 2010"
              },

              { name: "International TV Shows, TV Dramas",
                  y: 1,
              drilldown: "International TV Shows, TV Dramas - 2010"
              },

              { name: "Kids' TV",
                  y: 2,
              drilldown: "Kids' TV - 2010"
              },

              { name: "Reality TV",
                  y: 1,
              drilldown: "Reality TV - 2010"
              }

            
            ]
      },
      // 1

      { id:"Anime Series, Teen TV Shows - 2010",
          name: "Seasons",
          data:[{ name: "2 season",
                  y: 1,
              drilldown: "2 season Anime Series, Teen TV Shows - 2010"
              },
            
            ]
      },

      { id:"2 season Anime Series, Teen TV Shows - 2010",
          name: "Year added",
          data:[{ name: "2019",
                  y: 1,
              drilldown: "2 season Anime Series, Teen TV Shows 2019 - 2010"
              },
            
            ]
      },

      { id:"2 season Anime Series, Teen TV Shows 2019 - 2010",
          name: "TV Show",
          data:[{ name: "K-On!",
                  y: 1,
              },
            
            ]
      },

      // 2

      { id:"Classic & Cult TV, Crime TV Shows, International TV Shows - 2010",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Classic & Cult TV, Crime TV Shows, International TV Shows - 2010"
              },
            
            ]
      },

      { id:"1 season Classic & Cult TV, Crime TV Shows, International TV Shows - 2010",
          name: "Year added",
          data:[{ name: "2019",
                  y: 1,
              drilldown: "1 season Classic & Cult TV, Crime TV Shows, International TV Shows 2019 - 2010"
              },
            
            ]
      },

      { id:"1 season Classic & Cult TV, Crime TV Shows, International TV Shows 2019 - 2010",
          name: "TV Show",
          data:[{ name: "La Rosa de Guadalupe",
                  y: 1,
              },
            
            ]
      },

      // 3

      { id:"Docuseries - 2010",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Docuseries - 2010"
              },
            
            ]
      },

      { id:"1 season Docuseries - 2010",
          name: "Year added",
          data:[{ name: "2019",
                  y: 1,
              drilldown: "1 season Docuseries 2019 - 2010"
              },
            
            ]
      },

      { id:"1 season Docuseries 2019 - 2010",
          name: "TV Show",
          data:[{ name: "Beast Legends",
                  y: 1,
              },
            
            ]
      },

      // 4

      { id:"Docuseries - 2010",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Docuseries - 2010"
              },
            
            ]
      },

      { id:"1 season Docuseries - 2010",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "1 season Docuseries 2017 - 2010"
              },
            
            ]
      },

      { id:"1 season Docuseries 2017 - 2010",
          name: "TV Show",
          data:[{ name: "The Jaime Maussan Show",
                  y: 1,
              },
            
            ]
      },

      // 5

      { id:"Docuseries, Science & Nature TV - 2010",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Docuseries, Science & Nature TV - 2010"
              },
            
            ]
      },

      { id:"1 season Docuseries, Science & Nature TV - 2010",
          name: "Year added",
          data:[{ name: "2019",
                  y: 1,
              drilldown: "1 season Docuseries, Science & Nature TV 2019 - 2010"
              },
            
            ]
      },

      { id:"1 season Docuseries, Science & Nature TV 2019 - 2010",
          name: "TV Show",
          data:[{ name: "Ancient Aliens",
                  y: 1,
              },
            
            ]
      },

      // 6

      { id:"International TV Shows, Romantic TV Shows, Spanish-Language TV Shows - 2010",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows, Spanish-Language TV Shows - 2010"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows, Spanish-Language TV Shows - 2010",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows, Spanish-Language TV Shows 2017 - 2010"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows, Spanish-Language TV Shows 2017 - 2010",
          name: "TV Show",
          data:[{ name: "Teresa",
                  y: 1,
              },
            
            ]
      },

      // 7

      { id:"International TV Shows, Romantic TV Shows, TV Comedies - 2010",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows, TV Comedies - 2010"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows, TV Comedies - 2010",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows, TV Comedies 2016 - 2010"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows, TV Comedies 2016 - 2010",
          name: "TV Show",
          data:[{ name: "The Womanizer",
                  y: 1,
              },
            
            ]
      },

      // 8

      { id:"International TV Shows, Romantic TV Shows, TV Dramas - 2010",
          name: "Seasons",
          data:[{ name: "2 season",
                  y: 1,
              drilldown: "2 season International TV Shows, Romantic TV Shows, TV Dramas - 2010"
              },
            
            ]
      },

      { id:"2 season International TV Shows, Romantic TV Shows, TV Dramas - 2010",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "2 season International TV Shows, Romantic TV Shows, TV Dramas 2017 - 2010"
              },
            
            ]
      },

      { id:"2 season International TV Shows, Romantic TV Shows, TV Dramas 2017 - 2010",
          name: "TV Show",
          data:[{ name: "Age of Glory",
                  y: 1,
              },
            
            ]
      },

      // 9

      { id:"International TV Shows, TV Dramas - 2010",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, TV Dramas - 2010"
              },
            
            ]
      },

      { id:"1 season International TV Shows, TV Dramas - 2010",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "1 season International TV Shows, TV Dramas 2017 - 2010"
              },
            
            ]
      },

      { id:"1 season International TV Shows, TV Dramas 2017 - 2010",
          name: "TV Show",
          data:[{ name: "Love Is in the Air",
                  y: 1,
              },
            
            ]
      },

      // 10

      { id:"Kids' TV - 2010",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 2,
              drilldown: "1 season Kids' TV - 2010"
              },
            
            ]
      },

      { id:"1 season Kids' TV - 2010",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "1 season Kids' TV 2017 - 2010"
              },
              { name: "2019",
                  y: 1,
              drilldown: "1 season Kids' TV 2019 - 2010"
              },
            
            ]
      },

      { id:"1 season Kids' TV 2017 - 2010",
          name: "TV Show",
          data:[{ name: "Stoked",
                  y: 1,
              },
            
            ]
      },
      { id:"1 season Kids' TV 2019 - 2010",
          name: "TV Show",
          data:[{ name: "Sym-Bionic Titan",
                  y: 1,
              },
            
            ]
      },

      // 11

      { id:"Reality TV - 2010",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Reality TV - 2010"
              },
            
            ]
      },

      { id:"1 season Reality TV - 2010",
          name: "Year added",
          data:[{ name: "2019",
                  y: 1,
              drilldown: "1 season Reality TV 2019 - 2010"
              },
            
            ]
      },

      { id:"1 season Reality TV 2019 - 2010",
          name: "TV Show",
          data:[{ name: "Pawn Stars",
                  y: 1,
              },
            
            ]
      },


      
      

      // TV-MA
        
      { id:"TV-MA - 2010",
          name: "Category",
          data:[{ name: "British TV Shows, TV Comedies",
                  y: 1,
              drilldown: "British TV Shows, TV Comedies - 2010"
              },
              { name: "Crime TV Shows, International TV Shows, Korean TV Shows",
                  y: 1,
              drilldown: "Crime TV Shows, International TV Shows, Korean TV Shows - 2010"
              },
              { name: "Crime TV Shows, International TV Shows, Spanish-Language TV Shows",
                  y: 1,
              drilldown: "Crime TV Shows, International TV Shows, Spanish-Language TV Shows - 2010"
              },
              { name: "Crime TV Shows, International TV Shows, TV Dramas",
                  y: 1,
              drilldown: "Crime TV Shows, International TV Shows, TV Dramas - 2010"
              },
              { name: "International TV Shows, TV Dramas",
                  y: 1,
              drilldown: "International TV Shows, TV Dramas - 2010"
              },
              { name: "TV Dramas",
                  y: 1,
              drilldown: "TV Dramas - 2010"
              }
              
            
            ]
      },
      
      // 1

      { id:"British TV Shows, TV Comedies - 2010",
          name: "Seasons",
          data:[{ name: "3 season",
                  y: 1,
              drilldown: "3 season British TV Shows, TV Comedies - 2010"
              },
            
            ]
      },

      { id:"3 season British TV Shows, TV Comedies - 2010",
          name: "Year added",
          data:[{ name: "2018",
                  y: 1,
              drilldown: "3 season British TV Shows, TV Comedies 2018 - 2010"
              },
            
            ]
      },

      { id:"3 season British TV Shows, TV Comedies 2018 - 2010",
          name: "TV Show",
          data:[{ name: "The Inbetweeners",
                  y: 1,
              },
            
            ]
      },

      // 2

      { id:"Crime TV Shows, International TV Shows, Korean TV Shows - 2010",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Crime TV Shows, International TV Shows, Korean TV Shows - 2010"
              },
            
            ]
      },

      { id:"1 season Crime TV Shows, International TV Shows, Korean TV Shows - 2010",
          name: "Year added",
          data:[{ name: "2019",
                  y: 1,
              drilldown: "1 season Crime TV Shows, International TV Shows, Korean TV Shows 2019 - 2010"
              },
            
            ]
      },

      { id:"1 season Crime TV Shows, International TV Shows, Korean TV Shows 2019 - 2010",
          name: "TV Show",
          data:[{ name: "A Man Called God",
                  y: 1,
              },
            
            ]
      },

      // 3

      { id:"Crime TV Shows, International TV Shows, Spanish-Language TV Shows - 2010",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Crime TV Shows, International TV Shows, Spanish-Language TV Shows - 2010"
              },
            
            ]
      },

      { id:"1 season Crime TV Shows, International TV Shows, Spanish-Language TV Shows - 2010",
          name: "Year added",
          data:[{ name: "2018",
                  y: 1,
              drilldown: "1 season Crime TV Shows, International TV Shows, Spanish-Language TV Shows 2018 - 2010"
              },
            
            ]
      },

      { id:"1 season Crime TV Shows, International TV Shows, Spanish-Language TV Shows 2018 - 2010",
          name: "TV Show",
          data:[{ name: "El Cartel 2",
                  y: 1,
              },
            
            ]
      },

      // 4

      { id:"Crime TV Shows, International TV Shows, TV Dramas - 2010",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Crime TV Shows, International TV Shows, TV Dramas - 2010"
              },
            
            ]
      },

      { id:"1 season Crime TV Shows, International TV Shows, TV Dramas - 2010",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "1 season Crime TV Shows, International TV Shows, TV Dramas 2017 - 2010"
              },
            
            ]
      },

      { id:"1 season Crime TV Shows, International TV Shows, TV Dramas 2017 - 2010",
          name: "TV Show",
          data:[{ name: "Behzat Ã‡.",
                  y: 1,
              },
            
            ]
      },

      // 5

      { id:"International TV Shows, TV Dramas - 2010",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, TV Dramas - 2010"
              },
            
            ]
      },

      { id:"1 season International TV Shows, TV Dramas - 2010",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "1 season International TV Shows, TV Dramas 2017 - 2010"
              },
            
            ]
      },

      { id:"1 season International TV Shows, TV Dramas 2017 - 2010",
          name: "TV Show",
          data:[{ name: "The Family Court",
                  y: 1,
              },
            
            ]
      },

      // 6

      { id:"TV Dramas - 2010",
          name: "Seasons",
          data:[{ name: "4 season",
                  y: 1,
              drilldown: "4 season TV Dramas - 2010"
              },
            
            ]
      },

      { id:"4 season TV Dramas - 2010",
          name: "Year added",
          data:[{ name: "2018",
                  y: 1,
              drilldown: "4 season TV Dramas 2018 - 2010"
              },
            
            ]
      },

      { id:"4 season TV Dramas 2018 - 2010",
          name: "TV Show",
          data:[{ name: "The Tudors",
                  y: 1,
              },
            
            ]
      },

      ////////////////////////////////////////////////////////////////


      // TV-14
        
      { id:"TV-14 - 2010",
          name: "Category",
          data:[{ name: "Anime Series, International TV Shows",
                  y: 4,
                drilldown: "Anime Series, International TV Shows - 2010"
                },

                { name: "Anime Series, Romantic TV Shows",
                  y: 1,
                drilldown: "Anime Series, Romantic TV Shows - 2010"
                },

                { name: "Crime TV Shows, Docuseries",
                  y: 1,
                drilldown: "Crime TV Shows, Docuseries - 2010"
                },

                { name: "Crime TV Shows, International TV Shows, Spanish-Language TV Shows",
                  y: 1,
                drilldown: "Crime TV Shows, International TV Shows, Spanish-Language TV Shows - 2010"
                },

                { name: "Crime TV Shows, International TV Shows, TV Dramas",
                  y: 1,
                drilldown: "Crime TV Shows, International TV Shows, TV Dramas - 2010"
                },

                { name: "International TV Shows, Korean TV Shows, TV Dramas",
                  y: 1,
                drilldown: "International TV Shows, Korean TV Shows, TV Dramas - 2010"
                },

                { name: "International TV Shows, Romantic TV Shows, TV Comedies",
                  y: 2,
                drilldown: "International TV Shows, Romantic TV Shows, TV Comedies - 2010"
                },

                { name: "International TV Shows, Romantic TV Shows, TV Dramas",
                  y: 1,
                drilldown: "International TV Shows, Romantic TV Shows, TV Dramas - 2010"
                },

                { name: "International TV Shows, TV Comedies",
                  y: 1,
                drilldown: "International TV Shows, TV Comedies - 2010"
                },

                { name: "International TV Shows, TV Dramas",
                  y: 3,
                drilldown: "International TV Shows, TV Dramas - 2010"
                },

                { name: "ARomantic TV Shows, Spanish-Language TV Shows, TV Dramas",
                  y: 1,
                drilldown: "ARomantic TV Shows, Spanish-Language TV Shows, TV Dramas - 2010"
                },
            ]
      },

      // 1

      { id:"Anime Series, International TV Shows - 2010",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 3,
              drilldown: "1 season Anime Series, International TV Shows - 2010"
              },
              { name: "5 season",
                  y: 1,
              drilldown: "5 season Anime Series, International TV Shows - 2010"
              },
            
            ]
      },

      { id:"1 season Anime Series, International TV Shows - 2010",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "1 season Anime Series, International TV Shows 2017 - 2010"
              },
              { name: "2018",
                  y: 1,
              drilldown: "1 season Anime Series, International TV Shows 2018 - 2010"
              },
              { name: "2019",
                  y: 1,
              drilldown: "1 season Anime Series, International TV Shows 2019 - 2010"
              },
            
            ]
      },

      { id:"1 season Anime Series, International TV Shows 2017 - 2010",
          name: "TV Show",
          data:[{ name: "Fairy Tail",
                  y: 1,
              },
            
            ]
      },  
      { id:"1 season Anime Series, International TV Shows 2018 - 2010",
          name: "TV Show",
          data:[{ name: "Black Butler",
                  y: 1,
              },
            
            ]
      },  
      { id:"1 season Anime Series, International TV Shows 2019 - 2010",
          name: "TV Show",
          data:[{ name: "Angel Beats!",
                  y: 1,
              },
            
            ]
      },  

      { id:"5 season Anime Series, International TV Shows - 2010",
          name: "Year added",
          data:[{ name: "2018",
                  y: 1,
              drilldown: "5 season Anime Series, International TV Shows 2018 - 2010"
              },
            
            ]
      },

      { id:"5 season Anime Series, International TV Shows 2018 - 2010",
          name: "TV Show",
          data:[{ name: "Fullmetal Alchemist: Brotherhood",
                  y: 1,
              },
            
            ]
      },  

      // 2

      { id:"Anime Series, Romantic TV Shows - 2010",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Anime Series, Romantic TV Shows - 2010"
              },            
            ]
      },

      { id:"1 season Anime Series, Romantic TV Shows - 2010",
          name: "Year added",
          data:[{ name: "2019",
                  y: 1,
              drilldown: "1 season Anime Series, Romantic TV Shows 2019 - 2010"
              },
            
            ]
      },

      { id:"1 season Anime Series, Romantic TV Shows 2019 - 2010",
          name: "TV Show",
          data:[{ name: "Maid-Sama!",
                  y: 1,
              },
            
            ]
      },  

      // 3

      { id:"Crime TV Shows, Docuseries - 2010",
          name: "Seasons",
          data:[{ name: "3 season",
                  y: 1,
              drilldown: "3 season Crime TV Shows, Docuseries - 2010"
              },            
            ]
      },

      { id:"3 season Crime TV Shows, Docuseries - 2010",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "3 season Crime TV Shows, Docuseries 2016 - 2010"
              },
            
            ]
      },

      { id:"3 season Crime TV Shows, Docuseries 2016 - 2010",
          name: "TV Show",
          data:[{ name: "Women Behind Bars",
                  y: 1,
              },
            
            ]
      },  

      // 4

      { id:"Crime TV Shows, International TV Shows, Spanish-Language TV Shows - 2010",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Crime TV Shows, International TV Shows, Spanish-Language TV Shows - 2010"
              },            
            ]
      },

      { id:"1 season Crime TV Shows, International TV Shows, Spanish-Language TV Shows - 2010",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "1 season Crime TV Shows, International TV Shows, Spanish-Language TV Shows 2017 - 2010"
              },
            
            ]
      },

      { id:"1 season Crime TV Shows, International TV Shows, Spanish-Language TV Shows 2017 - 2010",
          name: "TV Show",
          data:[{ name: "Rosario Tijeras",
                  y: 1,
              },
            
            ]
      }, 

      // 5

      { id:"Crime TV Shows, International TV Shows, TV Dramas - 2010",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season Crime TV Shows, International TV Shows, TV Dramas - 2010"
              },            
            ]
      },

      { id:"1 season Crime TV Shows, International TV Shows, TV Dramas - 2010",
          name: "Year added",
          data:[{ name: "2018",
                  y: 1,
              drilldown: "1 season Crime TV Shows, International TV Shows, TV Dramas 2018 - 2010"
              },
            
            ]
      },

      { id:"1 season Crime TV Shows, International TV Shows, TV Dramas 2018 - 2010",
          name: "TV Show",
          data:[{ name: "Powder",
                  y: 1,
              },  
            ]
      }, 

      // 6

      { id:"International TV Shows, Korean TV Shows, TV Dramas - 2010",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, Korean TV Shows, TV Dramas - 2010"
              },            
            ]
      },

      { id:"1 season International TV Shows, Korean TV Shows, TV Dramas - 2010",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "1 season International TV Shows, Korean TV Shows, TV Dramas 2017 - 2010"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Korean TV Shows, TV Dramas 2017 - 2010",
          name: "TV Show",
          data:[{ name: "President",
                  y: 1,
              },  
            ]
      },


      // 7

      { id:"International TV Shows, Romantic TV Shows, TV Comedies - 2010",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 2,
              drilldown: "1 season International TV Shows, Romantic TV Shows, TV Comedies - 2010"
              },            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows, TV Comedies - 2010",
          name: "Year added",
          data:[{ name: "2016",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows, TV Comedies 2016 - 2010"
              },
              { name: "2018",
                  y: 1,
              drilldown: "1 season International TV Shows, Romantic TV Shows, TV Comedies 2018 - 2010"
              },
            
            ]
      },

      { id:"1 season International TV Shows, Romantic TV Shows, TV Comedies 2016 - 2010",
          name: "TV Show",
          data:[{ name: "Lucky Days",
                  y: 1,
              },  
            ]
      },
      { id:"1 season International TV Shows, Romantic TV Shows, TV Comedies 2018 - 2010",
          name: "TV Show",
          data:[{ name: "Rishta.com",
                  y: 1,
              },  
            ]
      },

      // 8

        { id:"International TV Shows, Romantic TV Shows, TV Dramas - 2010",
        name: "Seasons",
        data:[{ name: "1 season",
                y: 1,
            drilldown: "1 season International TV Shows, Romantic TV Shows, TV Dramas - 2010"
            },            
          ]
        },
  
        { id:"1 season International TV Shows, Romantic TV Shows, TV Dramas - 2010",
            name: "Year added",
            data:[{ name: "2016",
                    y: 1,
                drilldown: "1 season International TV Shows, Romantic TV Shows, TV Dramas 2016 - 2010"
                },
              
              ]
        },
  
        { id:"1 season International TV Shows, Romantic TV Shows, TV Dramas 2016 - 2010",
            name: "TV Show",
            data:[{ name: "The Fierce Wife",
                    y: 1,
                },
 
    
              ]
        }, 

        // 9

        { id:"International TV Shows, TV Comedies - 2010",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 1,
              drilldown: "1 season International TV Shows, TV Comedies - 2010"
              },            
            ]
      },

      { id:"1 season International TV Shows, TV Comedies - 2010",
          name: "Year added",
          data:[{ name: "2018",
                  y: 1,
              drilldown: "1 season International TV Shows, TV Comedies 2018 - 2010"
              },
            
            ]
      },

      { id:"1 season International TV Shows, TV Comedies 2018 - 2010",
          name: "TV Show",
          data:[{ name: "Mahi Way",
                  y: 1,
              },  
            ]
      },

      // 10

      { id:"International TV Shows, TV Dramas - 2010",
          name: "Seasons",
          data:[{ name: "1 season",
                  y: 2,
              drilldown: "1 season International TV Shows, TV Dramas - 2010"
              },
              { name: "2 season",
                  y: 1,
              drilldown: "2 season International TV Shows, TV Dramas - 2010"
              },            
            ]
      },

      { id:"1 season International TV Shows, TV Dramas - 2010",
          name: "Year added",
          data:[{ name: "2017",
                  y: 2,
              drilldown: "1 season International TV Shows, TV Dramas 2017 - 2010"
              },
            
            ]
      },

      { id:"1 season International TV Shows, TV Dramas 2017 - 2010",
          name: "TV Show",
          data:[{ name: "Breakout",
                  y: 1,
              }, 
              { name: "Glowing Embers",
                  y: 1,
              },  
            ]
      },


      { id:"2 season International TV Shows, TV Dramas - 2010",
          name: "Year added",
          data:[{ name: "2017",
                  y: 1,
              drilldown: "2 season International TV Shows, TV Dramas 2017 - 2010"
              },
            
            ]
      },

      { id:"2 season International TV Shows, TV Dramas 2017 - 2010",
          name: "TV Show",
          data:[{ name: "The Adjusters",
                  y: 1,
              },  
            ]
      },
      ]
  }
});