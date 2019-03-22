// var fs = require('fs');


// //이부분
// exports.getData = function(col, res, key) {
	
// 	var fileAddress='public/data/';
// 		if (key == "data"){ 
// 		 fileAddress+="data.json";		
// 		 }
// 		else if (key == "data2") {
// 		 fileAddress+="data2.json";
// 		}
// 			else if (key == "data3") {
// 		 fileAddress+="data3.json";
// 		}
// 			else if (key == "data4") {
// 		 fileAddress+="data4.json";
// 		}
// 		else if (key == "data5") {
// 		 fileAddress+="data5.json";
// 		}
// 		else if (key == "data6") {
// 		 fileAddress+="data6.json";
// 		}
// 		else if (key == "data7") {
// 		fileAddress+="data7.json";
// 		}
// 		else if (key == "data8") {
// 		fileAddress+="data8.json";
// 		}
// 		else if (key == "data9") {
// 		fileAddress+="data9.json";
// 		}
// 		else if (key == "data10") {
// 		fileAddress+="data10.json";
// 		}
// 		else if (key == "data11") {
// 		fileAddress+="data11.json";
// 		}
// 		else if (key == "data12") {
// 		fileAddress+="data12.json";
// 		}
// 		else if (key == "data13") {
// 		fileAddress+="data13.json";
// 		}
// 		else if (key == "data14") {
// 		fileAddress+="data14.json";
// 		}
// 		else if (key == "data15") {
// 		fileAddress+="data15.json";
// 		}
// 		else if (key == "data16") {
// 		fileAddress+="data16.json";
// 		}
// 		else if (key == "data17") {
// 		fileAddress+="data17.json";
// 		}
// 		else if (key == "data18") {
// 		fileAddress+="data18.json";
// 		}
// 		else if (key == "data19") {
// 		fileAddress+="data19.json";
// 		}
		 
// 		 else if (key == "more")
// 				 { 
// 		 fileAddress+="more.json";		
// 		 }
// 		else if (key == "more2") {
// 		 fileAddress+="more2.json";
// 		}
// 			else if (key == "more3") {
// 		 fileAddress+="more3.json";
// 		}
// 			else if (key == "more4") {
// 		 fileAddress+="more4.json";
// 		}
// 		else if (key == "more5") {
// 		 fileAddress+="more5.json";
// 		}
// 		else if (key == "more6") {
// 		 fileAddress+="more6.json";
// 		 }
// 		 else if (key == "more7") {
// 		 fileAddress+="more7.json";
// 		 }
// 		 else if (key == "more8") {
// 		 fileAddress+="more8.json";
// 		 }
// 		 else if (key == "more9") {
// 		 fileAddress+="more9.json";
// 		 }
// 		 else if (key == "more10") {
// 		 fileAddress+="more10.json";
// 		 }
// 		 else if (key == "more11") {
// 		 fileAddress+="more11.json";
// 		 }
// 		 else if (key == "more12") {
// 		 fileAddress+="more12.json";
// 		 }
// 		 else if (key == "more13") {
// 		 fileAddress+="more13.json";
// 		 }
// 		 else if (key == "more14") {
// 		 fileAddress+="more14.json";
// 		 }
// 		 else if (key == "more15") {
// 		 fileAddress+="more15.json";
// 		 }
// 		 else if (key == "more16") {
// 		 fileAddress+="more16.json";
// 		 }
// 		 else if (key == "more17") {
// 		 fileAddress+="more17.json";
// 		 }
// 		 else if (key == "more18") {
// 		 fileAddress+="more18.json";
// 		 }
// 		 else if (key == "more19") {
// 		 fileAddress+="more19.json";
// 		 }
// 		 else if (key == "more20") {
// 		 fileAddress+="more20.json";
// 		 }
// 		 else if (key == "more21") {
// 		 fileAddress+="more21.json";
// 		 }
// 		 else if (key == "more22") {
// 		 fileAddress+="more22.json";
// 		 }
// 		 else if (key == "more23") {
// 		 fileAddress+="more23.json";
// 		 }
// 		 else if (key == "more24") {
// 		 fileAddress+="more24.json";
// 		 }
// 		 else if (key == "more25") {
// 		 fileAddress+="more25.json";
// 		 }
// 		 else if (key == "more26") {
// 		 fileAddress+="more26.json";
// 		 }
// 		 else if (key == "more27") {
// 		 fileAddress+="more27.json";
// 		 }
// 		 else if (key == "more28") {
// 		 fileAddress+="more28.json";
// 		 }
// 		 else if (key == "more29") {
// 		 fileAddress+="more29.json";
// 		 }
// 		 else if (key == "more30") {
// 		 fileAddress+="more30.json";
// 		 }
// 		 else if (key == "more31") {
// 		 fileAddress+="more31.json";
// 		 }
// 		 else if (key == "more32") {
// 		 fileAddress+="more32.json";
// 		 }
// 		 else if (key == "more33") {
// 		 fileAddress+="more33.json";
// 		 }
// 		 else if (key == "more34") {
// 		 fileAddress+="more34.json";
// 		 }
// 		 else if (key == "more35") {
// 		 fileAddress+="more35.json";
// 		 }
// 		 else if (key == "more36") {
// 		 fileAddress+="more36.json";
// 		 }

// 		 else if (key == "more37") {
// 		 fileAddress+="more37.json";
// 		 }
// 		 else if (key == "more38") {
// 		 fileAddress+="more38.json";
// 		 }
// 		 else if (key == "more39") {
// 		 fileAddress+="more39.json";
// 		 }
// 		 else if (key == "more40") {
// 		 fileAddress+="more40.json";
// 		 }
// 		 else if (key == "more41") {
// 		 fileAddress+="more41.json";
// 		 }
// 		 else if (key == "more42") {
// 		 fileAddress+="more42.json";
// 		 }

// 		 else if (key == "more43") {
// 		 fileAddress+="more43.json";
// 		 }
// 		 else if (key == "more44") {
// 		 fileAddress+="more44.json";
// 		 }
// 		 else if (key == "more45") {
// 		 fileAddress+="more45.json";
// 		 }
// 		 else if (key == "more46") {
// 		 fileAddress+="more46.json";
// 		 }
// 		 else if (key == "more47") {
// 		 fileAddress+="more47.json";
// 		 }
// 		 else if (key == "more48") {
// 		 fileAddress+="more48.json";
// 		 }

// 		  else if (key == "more49") {
// 		 fileAddress+="more49.json";
// 		 }
// 		 else if (key == "more50") {
// 		 fileAddress+="more50.json";
// 		 }
// 		 else if (key == "more51") {
// 		 fileAddress+="more51.json";
// 		 }
// 		 else if (key == "more52") {
// 		 fileAddress+="more52.json";
// 		 }
// 		 else if (key == "more53") {
// 		 fileAddress+="more53.json";
// 		 }
// 		 else if (key == "more54") {
// 		 fileAddress+="more54.json";
// 		 }

// 		  else if (key == "more55") {
// 		 fileAddress+="more55.json";
// 		 }
// 		 else if (key == "more56") {
// 		 fileAddress+="more56.json";
// 		 }
// 		 else if (key == "more57") {
// 		 fileAddress+="more57.json";
// 		 }
// 		 else if (key == "more58") {
// 		 fileAddress+="more58.json";
// 		 }
// 		 else if (key == "more59") {
// 		 fileAddress+="more59.json";
// 		 }
// 		 else if (key == "more60") {
// 		 fileAddress+="more60.json";
// 		 }

// 		  else if (key == "more61") {
// 		 fileAddress+="more61.json";
// 		 }
// 		 else if (key == "more62") {
// 		 fileAddress+="more62.json";
// 		 }
// 		 else if (key == "more63") {
// 		 fileAddress+="more63.json";
// 		 }
// 		 else if (key == "more64") {
// 		 fileAddress+="more64.json";
// 		 }
// 		 else if (key == "more65") {
// 		 fileAddress+="more65.json";
// 		 }
// 		 else if (key == "more66") {
// 		 fileAddress+="more66.json";
// 		 }

// 		  else if (key == "more67") {
// 		 fileAddress+="more67.json";
// 		 }
// 		 else if (key == "more68") {
// 		 fileAddress+="more68.json";
// 		 }
// 		 else if (key == "more69") {
// 		 fileAddress+="more69.json";
// 		 }
// 		 else if (key == "more70") {
// 		 fileAddress+="more70.json";
// 		 }
// 		 else if (key == "more71") {
// 		 fileAddress+="more71.json";
// 		 }
// 		 else if (key == "more72") {
// 		 fileAddress+="more72.json";
// 		 }

// 		  else if (key == "more73") {
// 		 fileAddress+="more73.json";
// 		 }
// 		 else if (key == "more74") {
// 		 fileAddress+="more74.json";
// 		 }
// 		 else if (key == "more75") {
// 		 fileAddress+="more75.json";
// 		 }
// 		 else if (key == "more76") {
// 		 fileAddress+="more76.json";
// 		 }
// 		 else if (key == "more77") {
// 		 fileAddress+="more77.json";
// 		 }
// 		 else if (key == "more78") {
// 		 fileAddress+="more78.json";
// 		 }

// 		  else if (key == "more79") {
// 		 fileAddress+="more79.json";
// 		 }
// 		  else if (key == "more80") {
// 		 fileAddress+="more80.json";
// 		 }
// 		 else if (key == "more81") {
// 		 fileAddress+="more82.json";
// 		 }
// 		 else if (key == "more82") {
// 		 fileAddress+="more82.json";
// 		 }
// 		 else if (key == "more83") {
// 		 fileAddress+="more83.json";
// 		 }
// 		 else if (key == "more84") {
// 		 fileAddress+="more84.json";
// 		 }
		

// 		  else if (key == "more85") {
// 		 fileAddress+="more85.json";
// 		 }
// 		 else if (key == "more86") {
// 		 fileAddress+="more86.json";
// 		 }
// 		 else if (key == "more87") {
// 		 fileAddress+="more87.json";
// 		 }
// 		 else if (key == "more88") {
// 		 fileAddress+="more88.json";
// 		 }
// 		 else if (key == "more89") {
// 		 fileAddress+="more89.json";
// 		 }
// 		 else if (key == "more90") {
// 		 fileAddress+="more90.json";
// 		 }

// 		  else if (key == "more91") {
// 		 fileAddress+="more91.json";
// 		 }
// 		 else if (key == "more92") {
// 		 fileAddress+="more92.json";
// 		 }
// 		 else if (key == "more93") {
// 		 fileAddress+="more93.json";
// 		 }
// 		 else if (key == "more94") {
// 		 fileAddress+="more94.json";
// 		 }
// 		 else if (key == "more95") {
// 		 fileAddress+="more95.json";
// 		 }
// 		 else if (key == "more96") {
// 		 fileAddress+="more96.json";
// 		 }

// 		  else if (key == "more97") {
// 		 fileAddress+="more97.json";
// 		 }
// 		 else if (key == "more98") {
// 		 fileAddress+="more98.json";
// 		 }
// 		 else if (key == "more99") {
// 		 fileAddress+="more99.json";
// 		 }
// 		 else if (key == "more100") {
// 		 fileAddress+="more100.json";
// 		 }
// 		 else if (key == "more101") {
// 		 fileAddress+="more101.json";
// 		 }
// 		 else if (key == "more102") {
// 		 fileAddress+="more102.json";
// 		 }

// 		  else if (key == "more103") {
// 		 fileAddress+="more103.json";
// 		 }
// 		 else if (key == "more104") {
// 		 fileAddress+="more104.json";
// 		 }
// 		 else if (key == "more105") {
// 		 fileAddress+="more105.json";
// 		 }
// 		 else if (key == "more106") {
// 		 fileAddress+="more106.json";
// 		 }
// 		 else if (key == "more107") {
// 		 fileAddress+="more107.json";
// 		 }
// 		 else if (key == "more108") {
// 		 fileAddress+="more108.json";
// 		 }

// 		  else if (key == "more109") {
// 		 fileAddress+="more.json";
// 		 }
// 		 else if (key == "more110") {
// 		 fileAddress+="more110.json";
// 		 }
// 		 else if (key == "more111") {
// 		 fileAddress+="more111.json";
// 		 }
// 		 else if (key == "more112") {
// 		 fileAddress+="more112.json";
// 		 }
// 		 else if (key == "more113") {
// 		 fileAddress+="more113.json";
// 		 }
// 		 else if (key == "more114") {
// 		 fileAddress+="more114.json";
// 		 }
		 
// 		fs.readFile(fileAddress, 'utf8', function(err, data){
// 			// console.log(data);
// 			res.end(data);
// 		});
// 		}

