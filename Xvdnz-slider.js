var range1 = $("#range1").ionRangeSlider({
	skin: "round",
        type: "double",
        min: 0,
        max: 10000,
        grid: false,
        keyboard: false,
        grid_margin: false,
        hide_min_max: true,
        force_edges: true,
        hide_from_to: true
        
    });
var range2 = $("#range2").ionRangeSlider({
	skin: "round",
        type: "double",
        min: 0,
        max: 10000,
        grid: false,
        keyboard: false,
        grid_margin: false,
        hide_min_max: true,
        force_edges: true,
        hide_from_to: true
        
    });
var range3 = $("#range3").ionRangeSlider({
	skin: "round",
        type: "double",
        min: 0,
        max: 10000,
        grid: false,
        keyboard: false,
        grid_margin: false,
        hide_min_max: true,
        force_edges: true,
        hide_from_to: true
        
    });

range1.on('change', function() {
  var value = $(this).val();
  var values = value.split(';');
  $('#range1-min').val(values[0])
  $('#range1-max').val(values[1])
});
range2.on('change', function() {
  var value = $(this).val();
  var values = value.split(';');
  $('#range2-min').val(values[0])
  $('#range2-max').val(values[1])
});
range3.on('change', function() {
  var value = $(this).val();
  var values = value.split(';');
  console.log(values[0])
  $('#range3-min').val(values[0])
  $('#range3-max').val(values[1])
});