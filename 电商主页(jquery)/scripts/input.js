$(function(){
      $("#inputSearch").focus(function(){         // 地址框获得鼠标焦点
			var txt_value =  $(this).val();   // 得到当前文本框的值
			if(txt_value==this.defaultValue){  
                $(this).val("");              // 如果符合条件，则清空文本框内容
			} 
	  })
	  $("#inputSearch").blur(function(){		  // 地址框失去鼠标焦点
	  	    var txt_value =  $(this).val();   // 得到当前文本框的值
			if(txt_value==""){
                $(this).val(this.defaultValue);// 如果符合条件，则设置内容
			} 
	})

	   $("#inputSearch").keyup(function(e){
		if(e.which == 13){
			alert("回车提交表单！");
		}
	})
})
 
 