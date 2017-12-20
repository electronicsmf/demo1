function writeArray(msg,arr){
      var arrString= arr.join('-');
	  document.write("<b>"+msg + ": </b>" + arrString + "<br><br>");
}

function writeIt(){
     var weekDays=["Monday","Tuesday","Wednesday","Friday"];
     writeArray("Week Days",weekDays);
}