Highcharts.chart('time', {
  chart: {
      type: 'line'
  },
  title: {
      text: 'งบประมาณรายเดือนของกรมกิจการเด็กและเยาวชน'
  },
  subtitle: {
      text: 'Source: dcy.go.th'
  },
  xAxis: {
      categories: ['Oct-58', 'Nov-58', 'Dec-58','Jan-59', 'Feb-59', 'Mar-59', 'Apr-59', 'May-59', 'Jun-59', 'Jul-59', 'Aug-59', 'Sep-59', 'Oct-59'
      , 'Nov-59', 'Dec-59','Jan-60', 'Feb-60', 'Mar-60', 'Apr-60', 'May-60', 'Jun-60', 'Jul-60', 'Aug-60', 'Sep-60', 'Oct-60', 'Nov-60', 'Dec-60'
      ,'Jan-61', 'Feb-61', 'Mar-61', 'Apr-61', 'May-61', 'Jun-61', 'Jul-61', 'Aug-61', 'Sep-61']
  },
  yAxis: {
      title: {
          text: 'งบประมาณ (ล้านบาท)'
      }
  },
  plotOptions: {
  },
  series: [{
      name: 'งบประมาณรายเดือน',
      data: [262.241985	,274.31757 ,341.172129	,189.52977	,187.39467	,231.19307	,165.615996	,201.557096	,181.639296	,165.456485	,153.141385	
        ,144.752748	,346.8428	,347.3614	,432.6348	,278.8502	,270.8631	,287.2517	,233.6187	,253.2876	,220.3126	,183.6828	,173.511	,146.9944	,424.74169	
        ,437.2016	,483.2976	,355.4285	,351.3568	,363.0832	,313.4043	,271.7973	,223.5662	,180.2546	,173.2171	,146.008]
  }]
});