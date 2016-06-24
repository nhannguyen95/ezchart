$(document).ready(function(){
	var $TABLE = $('#table');
	var count = 0;
	//add row
	$('.table-add').click(function () {
	var $clone = $TABLE.find('tr.hide').clone(true).removeClass('hide table-line');
	$TABLE.find('.table').append($clone);
	

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
		else
			$(this).parents('tr').detach();
		});
	
	
	// add column
	$('.table-add-column').click(function () {
		// try to find how many tr element is
		// for every tr element, find the td.hide, clone it and add before the class special had define
	if ( count < 12 ){	
		var quantity = $('tr').length;
		for ( i = 0; i < quantity; i++ ){
			var $clone = $('.special:eq('+i+')').parents('tr').find('td.hide').clone(true).removeClass('hide').addClass('new');
				$('.special:eq('+i+')').before($clone);
			var $clone1 = $('.special:eq('+i+')').parents('tr').find('th.hide').clone(true).removeClass('hide').addClass('new');
				$('.special:eq('+i+')').before($clone1);
		}
	}	
	// try to make the width of column static	
	
	count = count + 1;

	if (count == 1){
		$('td:not(.special) ').css('width','31%');
		$('.special').css('width','5%');
	}
	if (count == 2){
		$('td:not(.special)').css('width','23.75%');
		$('.special').css('width','5%');
	}
	if (count == 3){
		$('td:not(.special) ').css('width','19%');
		$('.special').css('width','5%');
	}
	if (count == 4){
		$('td:not(.special) ').css('width','15.8%');
		$('.special').css('width','5%');
	}
	if (count == 5){
		$('td:not(.special) ').css('width','13.5%');
		$('.special').css('width','5%');
	}
	if (count == 6){
		$('td:not(.special)').css('width','11.8%');
		$('.special').css('width','5%');
	}
	if (count == 7){
		$('td:not(.special)').css('width','10.5%');
		$('.special').css('width','5%');
	}
	if (count == 8){
		$('td:not(.special)').css('width','9.5%');
		$('.special').css('width','5%');
	}
	if (count == 9){
		$('td:not(.special)').css('width','8.6%');
		$('.special').css('width','5%');
	}
	if (count == 10){
		$('td:not(.special)').css('width','7.9%');
		$('.special').css('width','5%');
	}
	if (count == 11){
		$('td:not(.special)').css('width','7.3%');
		$('.special').css('width','5%');
	}
	if (count == 12){
		$('td:not(.special)').css('width','6.7%');
		$('.special').css('width','5%');
	}
	if (count == 13){ 
		count = 12;
		alert('Sorry! We only support twelve column');
	}
	});
	
	// remove column
	$('.table-remove-col').click(function () {
	// get index of td which remove	
	var index = $(this).parents('td').index() - 3;
	
	var test = 0;
	
	$('tr:not(:first-child)').find('td.new:eq('+index+')').each(function(){
		if ($(this).text().trim().length) {
				test = test + 1;
			}
	});
	
	if ( test > 0 )
		$('tr:not(:first-child)').find('td.new:eq('+index+')').html('');
	else
	{
		$('tr').find('td.new:eq('+index+')').detach();
		$('tr').find('th.new:eq('+index+')').detach();
		count = count - 1;
		
		if (count == 1){
		$('td:not(.special) ').css('width','31%');
		$('.special').css('width','5%');
		}
		if (count == 2){
			$('td:not(.special)').css('width','23.75%');
			$('.special').css('width','5%');
		}
		if (count == 3){
			$('td:not(.special) ').css('width','19%');
			$('.special').css('width','5%');
		}
		if (count == 4){
			$('td:not(.special) ').css('width','15.8%');
			$('.special').css('width','5%');
		}
		if (count == 5){
			$('td:not(.special) ').css('width','13.5%');
			$('.special').css('width','5%');
		}
		if (count == 6){
			$('td:not(.special)').css('width','11.8%');
			$('.special').css('width','5%');
		}
		if (count == 7){
			$('td:not(.special)').css('width','10.5%');
			$('.special').css('width','5%');
		}
		if (count == 8){
			$('td:not(.special)').css('width','9.5%');
			$('.special').css('width','5%');
		}
		if (count == 9){
			$('td:not(.special)').css('width','8.6%');
			$('.special').css('width','5%');
		}
		if (count == 10){
			$('td:not(.special)').css('width','7.9%');
			$('.special').css('width','5%');
		}
		if (count == 11){
			$('td:not(.special)').css('width','7.3%');
			$('.special').css('width','5%');
		}
		if (count == 12){
			$('td:not(.special)').css('width','6.7%');
			$('.special').css('width','5%');
		}
		if (count == 0){
			$('td:not(.special)').css('width','45%');
			$('.special').css('width','5%');
			}
	}
	
});
	
	//else 
	//	$('body').css('background-color',' green');
	//var count = $('.hide').length;
	//alert(count);
	

		
});