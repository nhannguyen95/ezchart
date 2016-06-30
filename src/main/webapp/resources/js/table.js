$(document).ready(function () {
	 $(".table-editable td").on("click", function() {
		 if($(this).text() === "Write here") {
		   $(this).text("");
		 }
  	 });
	
	var $TABLE = $('#table');
	var count = 0;
	
	//add row
	$('.table-add').click(function () {
		var $clone = $TABLE.find('tr.hide').clone(true).removeClass('hide table-line');
		$TABLE.find('.table').append($clone);
	});
	
	 // comment mouseenter row
    $('.table-remove').mouseover( function(){
		// if row has data, empty it
		// else, delete the row
		var test = 0; // variable to test whether row has data 
		
		$(this).parents('tr').find('td').each(function(){
			if ($(this).text().trim().length) {
				test = test + 1;
			}
		});
		
		if (test > 0)
			$(this).attr('title','click to empty data');
		else
			$(this).attr('title','click to remove row');
	});
    
    // remove row
	$('.table-remove').click( function(){
		// if row has data, empty it
		// else, delete the row
		var test = 0; // variable to test whether row has data 
		
		$(this).parents('tr').find('td').each(function(){
			if ($(this).text().trim().length) {
				test = test + 1;
			}
		});
		if (test > 0)
			$(this).parents('tr').find('td:not(.special)').html('');
		else{
            $(this).parents('tr').detach();
        }
	});
	
	// add column
	$('.table-add-column').click(function() {
	    // try to find how many tr element is
	    // for every tr element, find the td.hide, clone it and add before the class special had define
	    if (count < 12) {
	        var quantity = $('tr').length;
	        for (i = 0; i < quantity; i++) {
	            var $clone = $('.special:eq(' + i + ')').parents('tr').find('td.hide').clone(true).removeClass('hide').addClass('new');
	            $('.special:eq(' + i + ')').before($clone);
	            count_tmp = count + 2;
	            var $clone1 = $('.special:eq(' + i + ')').parents('tr').find('th.hide').clone(true).removeClass('hide').addClass('new').html('Value ' + count_tmp);
	            $('.special:eq(' + i + ')').before($clone1);
	            $
	        }
	    }
	    // try to make the width of column static	

	    count = count + 1;

	    if (count == 1) {
	        $('td:not(.special), th:not(.special) ').css('width', '31%');
	        
	        $('.special').css('width', '5%');
	    }
	    if (count == 2) {
	    	$('td:not(.special), th:not(.special) ').css('width', '23.75%');
	        $('.special').css('width', '5%');
	    }
	    if (count == 3) {
	    	$('td:not(.special), th:not(.special) ').css('width', '19%');
	        $('.special').css('width', '5%');
	    }
	    if (count == 4) {
	    	$('td:not(.special), th:not(.special) ').css('width', '15.8%');
	        $('.special').css('width', '5%');
	    }
	    if (count == 5) {
	    	$('td:not(.special), th:not(.special) ').css('width', '13.5%');
	        $('.special').css('width', '5%');
	    }
	    if (count == 6) {
	        $('td:not(.special), th:not(.special) ').css('width', '11.8%');
	        $('.special').css('width', '5%');
	    }
	    if (count == 7) {
	    	$('td:not(.special), th:not(.special) ').css('width', '10.5%');
	        $('.special').css('width', '5%');
	    }
	    if (count == 8) {
	    	$('td:not(.special), th:not(.special) ').css('width', '9.5%');
	        $('.special').css('width', '5%');
	    }
	    if (count == 9) {
	    	$('td:not(.special), th:not(.special) ').css('width', '8.6%');
	        $('.special').css('width', '5%');
	    }
	    if (count == 10) {
	    	$('td:not(.special), th:not(.special) ').css('width', '7.9%');
	        $('.special').css('width', '5%');
	    }
	    if (count == 11) {
	    	$('td:not(.special), th:not(.special) ').css('width', '7.3%');
	        $('.special').css('width', '5%');
	    }
	    
	    if (count == 12) {
	        count = 11;
	        alert('Sorry! We only support twelve column');
	    }
	});
	
	 // commment with mouseenter;
    $('.table-remove-col').mouseover(function () {
        var index = $(this).parents('td').index() - 3;
	
	   var test = 0;
	
	   $('tr:not(:first-child)').find('td.new:eq('+index+')').each(function(){
		if ($(this).text().trim().length) {
				test = test + 1;
			}
	   });
        
       if (test > 0 )
            $(this).attr('title','click to empty data');   
       else
            $(this).attr('title','click to delete column');
    });
    
 // remove column
    $('.table-remove-col').click(function() {
        // get index of td which remove	
        var index = $(this).parents('td').index() - 3;

        var test = 0;

        $('tr:not(:first-child)').find('td.new:eq(' + index + ')').each(function() {
            if ($(this).text().trim().length) {
                test = test + 1;
            }
        });

        if (test > 0)
            $('tr:not(:first-child)').find('td.new:eq(' + index + ')').html('');
        else {
            $('tr').find('td.new:eq(' + index + ')').detach();
            $('tr').find('th.new:eq(' + index + ')').detach();
            count = count - 1;

            if (count == 1) {
                $('td:not(.special) ').css('width', '31%');
                $('.special').css('width', '5%');
            }
            if (count == 2) {
                $('td:not(.special)').css('width', '23.75%');
                $('.special').css('width', '5%');
            }
            if (count == 3) {
                $('td:not(.special) ').css('width', '19%');
                $('.special').css('width', '5%');
            }
            if (count == 4) {
                $('td:not(.special) ').css('width', '15.8%');
                $('.special').css('width', '5%');
            }
            if (count == 5) {
                $('td:not(.special) ').css('width', '13.5%');
                $('.special').css('width', '5%');
            }
            if (count == 6) {
                $('td:not(.special)').css('width', '11.8%');
                $('.special').css('width', '5%');
            }
            if (count == 7) {
                $('td:not(.special)').css('width', '10.5%');
                $('.special').css('width', '5%');
            }
            if (count == 8) {
                $('td:not(.special)').css('width', '9.5%');
                $('.special').css('width', '5%');
            }
            if (count == 9) {
                $('td:not(.special)').css('width', '8.6%');
                $('.special').css('width', '5%');
            }
            if (count == 10) {
                $('td:not(.special)').css('width', '7.9%');
                $('.special').css('width', '5%');
            }
            if (count == 11) {
                $('td:not(.special)').css('width', '7.3%');
                $('.special').css('width', '5%');
            }
           
            if (count == 0) {
                $('td:not(.special)').css('width', '45%');
                $('.special').css('width', '5%');
            }
        }
    });
    
    /* GET DATA FROM TABLE */
    /* Get table data */
    jQuery.fn.pop = [].pop;
    jQuery.fn.shift = [].shift;

    var $TABLE = $('#table');

    var getChartTitle = function() {
        return $('#chart-title').val();
    }

    var getValueArray = function() {
        var $rows = $TABLE.find('tr:not(.hide,:first-child)');

        var array = [];
        $($rows.shift()).find('th:not(.hide,:first-child)')
            .each(function() {
                array.push($(this).text());
            });
        return array;
    };

    var getItemArray = function() {
        var $rows = $TABLE.find('tr:not(.hide,:first-child)');
        // $rows.css();
        var array = [];
        $rows.each(function() {
            array.push($(this).find('td:first-child').text());
        });
        array.shift();
        return array;
    }

    var ArrayTwoDim = function(row) {
        var arr = [];
        for (var i = 0; i < row; i++) {
            arr[i] = [];
        }
        return arr;
    }

    var isCase1;
    var isCase2;
    var isCase3;
    
    var getDataArray = function() {
        var $rows = $TABLE.find('tr:not(.hide,:first-child)');
        $rows.shift();
        var quantity = $('#table').find('tr:not(.hide)').length;
        
        var arr = ArrayTwoDim(quantity - 2);
        for (var i = 0; i < quantity - 2; i++) {
            $($rows.shift()).find(
                    'td:not(.hide,:first-child,.special)')
                .each(
                    function() {
                        arr[i].push($(this).text()
                            .toLowerCase());
                    });
        }
        
//        confirm(arr.length);
        
        if (arr.length == 1) {
            isCase1 = true;
            isCase2 = false;
            isCase3 = false;
            return arr;
        }

        var res = [];
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[0].length; j++) {
                if (!res[j])
                    res[j] = [];
                res[j].push(arr[i][j]);
            }
        }

        isCase1 = false;
        if (res.length == 1) {
            isCase2 = true;
            isCase3 = false;
        } else {
            isCase2 = false;
            isCase3 = true;
        }

        return res;
    };
    
    $('#creChart').click(function () {
    	document.getElementById("input_data").value = saveJson();
    });
    
    var saveJson = function() {
    	var chartData = {
    		title: getChartTitle(),
    		items: getItemArray(),
    		values: getValueArray(),
    		data: getDataArray(),
    		ccase: (isCase1) ? 1 : ((isCase2) ? 2 : 3)
    	};
    	return JSON.stringify(chartData);
    };
    
});