// Load the data from a Google Spreadsheet
//https://docs.google.com/spreadsheets/d/1pcQ_VS5BA8O2q4jbl6WhEmz4ATbfnTJsGmgKcnHCnEY/edit?usp=sharing

Highcharts.data({
    googleSpreadsheetKey: '1pcQ_VS5BA8O2q4jbl6WhEmz4ATbfnTJsGmgKcnHCnEY',

    // Custom handler when the spreadsheet is parsed
    parsed: function (columns) {

        // Read the columns into the data array
        var data = [];
        var data2 = [];
        var arrays = {};
        Highcharts.each(columns[0], function (code, i) {
            data.push({
                type: 'bar',
                //code: code.toUpperCase(),
                name: columns[0][i],
                y: parseFloat(columns[2][i]),
                drilldown: columns[0][i]
            });
            /*data2 = [
                {
                  //type: 'column',
                  name: "GDP",
                  id: "GDP",
                  y: parseFloat(columns[3][i]),
                  color: '#7DD959'
                },
                {
                  //type: 'column',
                  name: "Social Support",
                  y: parseFloat(columns[4][i]),
                  color: '#B2E35D'
                },
                {
                  //type: 'column',
                  name: "Healthy life expectancy",
                  y: parseFloat(columns[5][i]),
                  color: '#CBCC5D'
                },
                {
                  //type: 'column',
                  name: "Freedom",
                  y: parseFloat(columns[6][i]),
                  color: '#E3D65D'
                },
                {
                  //type: 'column',
                  name: "Generosity",
                  y: parseFloat(columns[7][i]),
                  color: '#D4A54E'
                },
                {
                  //type: 'column',
                  name: 'Corruption',
                  y: parseFloat(columns[8][i]),
                  color: '#C98442'
                },


          ];
            arrays[columns[1][i]] = {
                type: 'bar',
                name: columns[1][i],
                data: data2
              };*/
            
        }); 
    }
});

