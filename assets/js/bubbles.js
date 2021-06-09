// set the dimensions and margins of the graph
  var margin = {top: 10, right: 100, bottom: 30, left: 50},
      width = 660- margin.left - margin.right,
      height = 600 - margin.top - margin.bottom;
  
  // append the svg object to the body of the page
  var svg = d3.select("#area1")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
  
  //Read the data
  d3.csv("data.csv", function(data) {
  
    // Add X axis
    var x = d3.scaleLinear()
      .domain([-100, 2200])
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
  
    // Add Y axis
    var y = d3.scaleLinear()
      .domain([-50, 650])
      .range([ height, 0]);
    svg.append("g")
      .call(d3.axisLeft(y));
  
    // Add a scale for bubble size
    var z = d3.scaleLinear()
      .domain([1, 20])
      .range([ 1, 40]);

    // Add a scale for bubble color
    var myColor = d3.scaleOrdinal()
    .domain(["TARGET"])
    .range(d3.schemeSet2);

    // -1- Create a tooltip div that is hidden by default:
    var tooltip = d3.select("#area1")
    .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "black")
      .style("border-radius", "2px")
      .style("padding", "50px")
      .style("color", "white")
      
   

      // -2- Create 3 functions to show / update (when mouse move but stay on same circle) / hide the tooltip
  var showTooltip = function(d) {
    tooltip
      .transition()
      .duration(200)
    tooltip
      .style("opacity", 1)
      
      .html("<br>"+"Hero: " + d.CODENAME+"<br/>" + "<br>" + "Gender: " + d.GENDER + "<br/>" +  "<br>" +"Alignment:" + d.ALIGNMENT + "<br/>"+
      "<br>"+"Eyecolor: " + d.EYECOLOR +"<br/>"+"<br>"+ "Haircolor: " + d.HAIRCOLOR +"<br/>" + "<br>" +"Birth Place: " + d.BIRTHPLACE+ "<br/>")
      
      .style("left", (d3.mouse(this)[0]+30) + "px")
      .style("top", (d3.mouse(this)[1]+30) + "px")
  }
  var moveTooltip = function(d) {
    tooltip
      .style("left", (d3.mouse(this)[0]+30) + "px")
      .style("top", (d3.mouse(this)[1]+30) + "px")
  }

  var hideTooltip = function(d) {
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 0)
  }


    // Add dots
    svg.append('g')
      .selectAll("dot")
      .data(data)
      .enter()
      .append("circle")
        .attr("cx", function (d) { return x(d.WEIGHT); } )
        .attr("cy", function (d) { return y(d.HEIGHT); } )
        .attr("r", function (d) { return z(d.FIGHTING); } )
        .style("fill", function (d) { return myColor(d.CODENAME); } )
        .style("opacity", "0.7")
        .style("opacity", "0.7")
        .attr("stroke", "white")
  // -3- Trigger the functions
    .on("mouseover", showTooltip )
    .on("mousemove", moveTooltip )
    .on("mouseleave", hideTooltip )
  });
 