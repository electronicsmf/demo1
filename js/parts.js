 function writeArray(msg,arr){
			         var arrString = arr.join(" | ");
			 document.write("<b>" + msg + ": </b>" + arrString + "<br><br>");
			 }
             function writeIt(){
			    var weekDays = ["Monday","Tuesdday","Wednesday","Thursday","Friday"];
			    writeArray("Week Days",weekDays);
			 }	  