var psb_fixed_tbl=psb_fixed_tbl || {};

psb_fixed_tbl.my_tbl_th=$(".psb-fixed-table").find("th");

psb_fixed_tbl.my_tbl_arr=[];

psb_fixed_tbl.my_tbl_th.each(function(i){
  var width_th=$(this).width();
  psb_fixed_tbl.my_tbl_arr.push(width_th);
});

psb_fixed_tbl.table = "";
psb_fixed_tbl.table += "<table id='temp_table_header' class='table table-bordered'>";
psb_fixed_tbl.table += "<thead>"+$(".psb-fixed-table thead").clone().html()+"</thead>";
psb_fixed_tbl.table += "</table>";

$(".container").append("<div id='fixed_header_tbl_div' class='row'></div>");

psb_fixed_tbl.fixed_table_header= function(){
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
      if($("#fixed_header_tbl_div").html().length==0){
          $("#fixed_header_tbl_div").html(psb_fixed_tbl.table);
          $("#temp_table_header thead th").each(function(i){
            $(this).width(psb_fixed_tbl.my_tbl_arr[i]);
        });
    }
  }else{
      $("#fixed_header_tbl_div").empty();
  }
}

window.onscroll = function() {psb_fixed_tbl.fixed_table_header()};