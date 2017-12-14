
//
//
// Add all filters into desc dynamically

$('.project').each( function() {
	addFilterDesc ( $(this) );
} );

//
//
// FUNCTIONS

function addFilterDesc(th) {
	// console.log( th );

	//variables
	var id		= th.attr('id');
	var filters = th.data('category');
	
	//make array of categories, turn into numbers, sort
	var filter_array = filters.split(',')
	for (var i=0; i<filter_array.length; i++) { filter_array[i] = +filter_array[i]; }
	filter_array.sort((a, b) => a - b);
	
	//select ul list DOM
	var ul = th.find('ul')

	//add DOM for each 
	filter_array.forEach( function(d) {
		makeTag(d, ul);
	});

	//sort DOM by content alphabetically
	sortList( ul );

}

// Credit
// user: Francis
// source: https://stackoverflow.com/questions/8837191/sort-an-html-list-with-javascript
function sortList( _ul ){
    
    var u = $(_ul);
	var arr = $.makeArray(u.children("li"));

	arr.sort(function(a, b) {
	    var textA = +$(a).text();
	    var textB = +$(b).text();
	    
	    if (textA < textB) return -1;
	    if (textA > textB) return 1;
	    
	    return 0;
	});

	u.empty();

	$.each(arr, function() {
	    u.append(this);
	});
}			

function makeTag( num, ul ) {
	
	var tag_text = get_tag_text(num); 

	var li = ul.append('<li> <p class="clickable desc_tags" data-multifilter="'+num+'">'+tag_text+'</p></li>')
	
		
		//subfunctions
		function get_tag_text(_n) {
			
			var tag_map = [
			{tag:1, txt: "art"},
			{tag:2, txt: "experience design"},
			{tag:3, txt: "graphic design"},
			{tag:4, txt: "interactive design"},
			{tag:5, txt: "visual performance"},
			{tag:11, txt: "performance"},
			{tag:12, txt: "print"},
			{tag:13, txt: "sculpture"},
			{tag:14, txt: "video"},
			{tag:15, txt: "web"},
			{tag:16, txt: "presentation"},
			{tag:17, txt: "new media"},
			{tag:21, txt: "data visualizaiton"},
			{tag:22, txt: "information graphics"},
			{tag:23, txt: "visual storytelling"},
			{tag:24, txt: "typography"},
			{tag:31, txt: "d3"},
			{tag:32, txt: "jQuery"},
			{tag:33, txt: "processing"},
			{tag:34, txt: "qGIS"},
			{tag:41, txt: "research + practices"},
			{tag:42, txt: "design theory"},
			{tag:43, txt: "process journal"},
			{tag:44, txt: "prototype demo"}]

			var txt_map = tag_map.find( function(e) { 
				if( e.tag == _n ) { return e.txt }
			});

			// console.log(txt_map.txt);
			return txt_map.txt;

		} //-- end subfunctions

}



