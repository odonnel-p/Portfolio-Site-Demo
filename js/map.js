
/*  Adapted code from:

Scott Murray, Choropleth example from "Interactive Data Visualization for the Web" 
https://github.com/alignedleft/d3-book/blob/master/chapter_12/05_choropleth.html   
		
Malcolm Maclean, tooltips example tutorial
http://www.d3noob.org/2013/01/adding-tooltips-to-d3js-graph.html

Mike Bostock, Pie Chart Legend
http://bl.ocks.org/mbostock/3888852  */

		
//Width and height of map
var width = 610;
var height = 372;

// D3 Projection
var projection = d3.geo.albersUsa()
				   .translate([width/2, height/2])    
				   .scale([825]);          
        
// Define path generator
var path = d3.geo.path()               
		  	 .projection(projection);  

		
// Define linear scale for output
var color = d3.scale.linear()
			  .range(["rgb(242,242,242)","rgb(219,211,219)","rgb(76,37,77)"]);

var legendText = [ "Cities Lived", "States Visited"];


//
//
// SVG FOR MAP
var svg = d3.select(".map_boundary")
			.append("svg")
			.attr("class", "mapsvg")
			.attr("width", width)
			.attr("height", height)
			.append("g");
        
//
//
// SVG FOR LEGEND
var legend = d3.select(".map_boundary").append("svg")
      			.attr("class", "legend")
     			.attr("width", 140)
    			.attr("height", 70)
	   				.selectAll("g")
	   				.data([1,2])
	   				.enter()
	   				.append("g")
	     			.attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

//
//
// DIV FOR TOOLTIP
var div = d3.select(".tooltip")
		    // .append("div")   
    		// .attr("class", "tooltip")               
    		.style("opacity", 0);


//
//
// LOAD VISITED STATES DATA
d3.csv("js/stateslived.csv", function(data) {
color.domain([0,1]);
	
	//
	//
	// LOAD STATES GEOMETRY
	d3.json("js/us-states.json", function(err, json) {

			for (var i = 0; i < data.length; i++) {

				var dataState = data[i].state;
				var dataValue = data[i].visited;

				for (var j = 0; j < json.features.length; j++)  {
					var jsonState = json.features[j].properties.name;

					if (dataState == jsonState) {
						json.features[j].properties.visited = dataValue; 
						break;
					}
				}
			}
				
		// Bind the data to the SVG and create one path per GeoJSON feature
		svg.selectAll("path")
			.data(json.features)
			.enter()
			.append("path")
			.attr("d", path)
			.style("stroke", "#fff")
			.style("stroke-width", ".5")
			.style("fill", function(d) {

				var value = d.properties.visited;

				if (value) { return color(value); } 
				else { return "rgb(255,255,255)"; }

			});

		//
	    //
	    //LEGEND    
		


		  	legend.append("rect")
		   		  .attr("width", 18)
		   		  .attr("height", 18)
		   		  .style("fill", function(d) { if (d==1) { return "rgb(76,37,77)"; }
		   		  						  else if (d==2) { return "rgb(219,211,219)"; }
		   		  						  else { console.log("failed"); }
		   		  });

		  	legend.append("text")
		  		  .data(legendText)
		  		  .attr("class", "legend_text")
		      	  .attr("x", 24)
		      	  .attr("y", -5)
		      	  .attr("dy", "20px")
		      	  .text(function(d) { return d; });

			 
		//
		//
		// PLACE CITY DOTS
		d3.csv("js/cities-lived.csv", function(data) {

		svg.selectAll("circle")
			.data(data)
			.enter()
			.append("circle")
			.classed("city_dot", true)
			.classed("current", function(d) { if (d.current=="true") { return "true"; }})
			.attr("cx", function(d) {
				return projection([d.lon, d.lat])[0];
			})
			.attr("cy", function(d) {
				return projection([d.lon, d.lat])[1];
			})
			.attr("r", 4) 
				// function(d) { if (d.current=="true") { return 5; }
				// 					else { return 3; }})	
				.style("opacity", 1)	

			//
			//
			// SHOW TOOLTIP
			.on("mouseover", function() {
				// console.log("show");
				div.transition()        
		      	   .duration(200)      
		           .style("opacity", .9);  
			})

			//
			//
			// MOVE TOOLTIP
			.on("mousemove", function(d) {

				var ttwidth = d3.select(".tooltip").node().getBoundingClientRect().width;
	           	
	           	div.text( function() {
	           		var plural = '';
	           		//if (d.years>1) { plural = "s";}
	           		if (d.current=="true") { return d.place + " (current)" }
	           		else { return  d.place; }
	           	})
	    		.style("left", d3.select(this).attr("cx") - (.5*ttwidth) + 2 + "px")     
				.style("top", d3.select(this).attr("cy")-31 + "px");

					
		    })

		      

		    //
		    //
		    // REMOVE TOOLTIP             
		    .on("mouseout", function(d) {       
		        div.transition()        
		           .duration(500)      
		           .style("opacity", 0);   
		    });
		}); 

	    
	});

});
