var ndsb1Value = 0,
    ndsb2Value = 0;
var ndsbValue = new Array();
var gpb = new Array();
var lb2 = new Array();
var lb = new Array();
var rankBonus = new Array();
var nlb = new Array();
var net = new Array();
var salesBonus = new Array();
var uniLevel = new Array();
var salesTotal = new Array();
var sum = new Array();
var showStatus = 0;

var cdecimal = function (value, decPlaces, thouSeparator, decSeparator, currencySymbol) {
    var n = value,
        decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
        decSeparator = decSeparator == undefined ? "." : decSeparator,
        thouSeparator = thouSeparator == undefined ? "," : thouSeparator,
        currencySymbol = currencySymbol == undefined ? "" : currencySymbol,
        sign = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(decPlaces)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return sign + currencySymbol + (j ? i.substr(0, j) + thouSeparator : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thouSeparator) + (decPlaces ? decSeparator + Math.abs(n - i).toFixed(decPlaces).slice(2) : "");
};

var createArray = function(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

var calWeekTotal = function (value) {
    sum[1] = ndsbValue[0] + (lb2[0][0] * (value / 100)) + rankBonus[0] + nlb[0];
    sum[2] = ndsbValue[1] + (lb2[0][1] * (value / 100)) + rankBonus[1] + nlb[1];
    sum[3] = ndsbValue[2] + (lb2[0][2] * (value / 100)) + rankBonus[2] + nlb[2];
    sum[4] = ndsbValue[3] + (lb2[0][3] * (value / 100)) + rankBonus[3] + nlb[3];
    sum[5] = ndsbValue[4] + (lb2[0][4] * (value / 100)) + rankBonus[4] + nlb[4];
    sum[6] = ndsbValue[5] + (lb2[0][5] * (value / 100)) + rankBonus[5] + nlb[5];
    sum[7] = ndsbValue[6] + (lb2[0][6] * (value / 100)) + rankBonus[6] + nlb[6];
    sum[8] = ndsbValue[7] + (lb2[0][7] * (value / 100)) + rankBonus[7] + nlb[7];
	
    for (var a = 1; a <= 8; a++) {
        Ext.ComponentQuery.query('#total' + a)[0].setValue('UBD $ ' + cdecimal(sum[a], 2, ',', '.'));
    }

    Ext.ComponentQuery.query('#tot8')[0].setValue('UBD $ ' + cdecimal(sum[1] + sum[2] + sum[3] + sum[4] + sum[5] + sum[6] + sum[7] + sum[8], 2, ',', '.'));
}

var eventDrag = function (value) {
    Ext.ComponentQuery.query('#percentage')[0].setLabel(value + ' %');
	var aTotal = 0;
    
	for (var a = 1; a <= 8; a++) {
        var tempTotal = 0;
		Ext.ComponentQuery.query('#ndsb' + a)[0].setValue('UBD $ ' + cdecimal(ndsbValue[a-1] * (value / 100), 2, ',', '.'));
		Ext.ComponentQuery.query('#gpb' + a)[0].setValue('UBD $ ' + cdecimal(lb2[0][a-1] * (value / 100), 2, ',', '.'));
		Ext.ComponentQuery.query('#lb' + a)[0].setValue('UBD $ ' + cdecimal(rankBonus[a-1] * (value / 100), 2, ',', '.'));
		Ext.ComponentQuery.query('#nlb' + a)[0].setValue('UBD $ ' + cdecimal(nlb[a-1] * (value / 100), 2, ',', '.'));
		
		tempTotal = ndsbValue[a-1] + lb2[0][a-1] + rankBonus[a-1] + nlb[a-1];
		aTotal += tempTotal;
		
		Ext.ComponentQuery.query('#total' + a)[0].setValue('UBD $ ' + cdecimal(tempTotal * (value / 100), 2, ',', '.'));
    }
	
	Ext.ComponentQuery.query('#tot8')[0].setValue('UBD $ ' + cdecimal(aTotal * (value / 100), 2, ',', '.'));
	
    //calWeekTotal(value);
}

var calSales = function () {
    var tmpPersonal = parseFloat(Ext.ComponentQuery.query('#personal_repeat')[0].getValue());
	var tmpResult = 0;
    if (!isNaN(tmpPersonal) && tmpPersonal >= 20) {
        tmpResult = tmpPersonal * 0.1;

        for (var a = 1; a <= 8; a++) {
            if (a > 1) 
                salesBonus[a-1] = 0;
            else
				salesBonus[a-1] = tmpResult;
					
            Ext.ComponentQuery.query('#sales' + a)[0].setValue('UBD $ ' + cdecimal(salesBonus[a-1], 2, ',', '.'));
        }
    }else{
		for (var a = 1; a <= 8; a++) {
            salesBonus[a-1] = 0;
        }
	}
}

var calUniLevel = function () {
    var tmpUni = parseFloat(Ext.ComponentQuery.query('#personal_sponsor')[0].getValue());
    var tmpActMember = parseFloat(Ext.ComponentQuery.query('#active_member')[0].getValue());
    var tmpDownline = parseFloat(Ext.ComponentQuery.query('#personal_downline')[0].getValue());
    var tmpCounter = 0;
    var tmpResult = 0;

    if (!isNaN(tmpUni) && !isNaN(tmpActMember)) {
        tmpCounter = tmpUni * tmpActMember;
        tmpResult = tmpCounter * tmpDownline;
    } else {
        tmpResult = 0;
    }

    for (var a = 1; a <= 8; a++) {
        uniLevel[a-1] = (tmpResult * 0.07) * a;

        Ext.ComponentQuery.query('#uni' + a)[0].setValue('UBD $ ' + cdecimal(uniLevel[a-1], 2, ',', '.'));
    }
}

var calNLB = function(downValue,recruitVal){
	for (var a = 1; a <= 8; a++) {
        nlb[a-1] = downValue * 0.1 * (recruitVal - 1);

        Ext.ComponentQuery.query('#nlb' + a)[0].setValue('UBD $ ' + cdecimal(nlb[a-1], 2, ',', '.'));
    }
}

var calWeekLb = function(downline,perCV,downCV,recruitValue){
	lb2 = createArray(8,8);
	
	var recruitVal = recruitValue - 1;
	
	for(var a = 0;a < 8; a++){
		for (var i = 0; i <= 8; i++) {
			var total = 0;
			if(a == 0){
				if(i == a){
					lb2[a][i] = downline * perCV * (recruitValue - 1);
				}else{
					lb2[a][i] = lb2[a][i-1] * recruitValue;
				}
			}else{
				if(i == a){
					lb2[a][i] = downline * downCV * (recruitValue - 1);
				}else if( i > a){
					lb2[a][i] = lb2[a][i-1] * recruitValue;
				}else{
					lb2[a][i] = 0;
				}
			}
		}
	}	
}

var calNetLinear = function(){
	var downValue = parseFloat(Ext.ComponentQuery.query('#personal_downline')[0].getValue());
	var counter = Ext.ComponentQuery.query('#active_member')[0].getValue();
	
	if(counter == 1 || counter == 2 || counter == 3){
		for (var a = 1; a <= 8; a++) {
			net[a-1] = downValue * 0.1 * (counter - 1);
			
			Ext.ComponentQuery.query('#net' + a)[0].setValue('UBD $ ' + cdecimal(net[a-1], 2, ',', '.'));
		}
	}else if(counter == 4 || counter == 5 || counter == 6 ){
		for (var a = 1; a <= 8; a++) {
			net[a-1] = downValue * 0.1 * (counter - 2);
			
			Ext.ComponentQuery.query('#net' + a)[0].setValue('UBD $ ' + cdecimal(net[a-1], 2, ',', '.'));
		}
	}else if(counter == 7 || counter == 8 || counter == 9 ){
		for (var a = 1; a <= 8; a++) {
			net[a-1] = downValue * 0.1 * (counter - 3);
			
			Ext.ComponentQuery.query('#net' + a)[0].setValue('UBD $ ' + cdecimal(net[a-1], 2, ',', '.'));
		}
	}
}

var calSalesTotal = function(){
	var tmpTotal = 0;
	
	for (var a = 1; a <= 8; a++) {
		salesTotal[a-1] = parseFloat(salesBonus[a-1]) + parseFloat(uniLevel[a-1]) + parseFloat(net[a-1]);
		tmpTotal += salesTotal[a-1];
		
		Ext.ComponentQuery.query('#sales_tot' + a)[0].setValue('UBD $ ' + cdecimal(salesTotal[a-1], 2, ',', '.'));
	}
	
	Ext.ComponentQuery.query('#total_sales')[0].setValue('UBD $ ' + cdecimal(tmpTotal, 2, ',', '.'));
}

var checkRanking = function(rValue){
	if(rValue[0][0] >= 100){
		var result1 = 0;
		rankBonus[0] = 0;
		Ext.ComponentQuery.query('#rank1')[0].setValue('Manager');		
		Ext.ComponentQuery.query('#lb1')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
	}else{
		rankBonus[0] = 0;
		Ext.ComponentQuery.query('#rank1')[0].setValue('Distributor');
	}
	
	if(rValue[0][1] >= 100){
		var temp = '';
		if(rValue[1][1] >= 100){
			temp = 'EM';
			Ext.ComponentQuery.query('#rank2')[0].setValue('Executive Manager');	
		}else{
			temp = 'M';
			Ext.ComponentQuery.query('#rank2')[0].setValue('Manager');	
		}
		
		var result1 = rValue[1][1] * 0.1 * 3;
		rankBonus[1] = result1;
		
		switch(temp){
			case 'M':
				Ext.ComponentQuery.query('#lb2')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
			case 'EM':
				Ext.ComponentQuery.query('#lb2')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
		}
	}else{
		rankBonus[1] = 0;
		Ext.ComponentQuery.query('#rank2')[0].setValue('Distributor');
	}
	
	if(rValue[0][2] >= 100){
		var temp = '';
		if(rValue[1][2] >= 100){
			if(rValue[2][2] >= 100){
				temp = 'SM';
				Ext.ComponentQuery.query('#rank3')[0].setValue('Senior Manager');
			}else{
				temp = 'EM';
				Ext.ComponentQuery.query('#rank3')[0].setValue('Executive Manager');	
			}
		}else{
			temp = 'M';
			Ext.ComponentQuery.query('#rank3')[0].setValue('Manager');	
		}
		
		switch(temp){
			case 'M':
				var result1 = (rValue[1][2] * 0.1 * 3) + (rValue[2][2] * 0.04 * 9);
				rankBonus[2] = result1;
				Ext.ComponentQuery.query('#lb3')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
			case 'EM':
				var result1 = (rValue[1][2] * 0.1 * 3) + (rValue[2][2] * 0.05 * 9);
				rankBonus[2] = result1;
				Ext.ComponentQuery.query('#lb3')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
			case 'SM':
				var result1 = (rValue[1][2] * 0.1 * 3) + (rValue[2][2] * 0.06 * 9);
				rankBonus[2] = result1;
				Ext.ComponentQuery.query('#lb3')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
		}
	}else{
		rankBonus[2] = 0;
		Ext.ComponentQuery.query('#rank3')[0].setValue('Distributor');
	}
	
	if(rValue[0][3] >= 100){
		var temp = '';
		if(rValue[1][3] >= 100){
			if(rValue[2][3] >= 100){
				if(rValue[3][3] >= 100){
					temp = 'D';
					Ext.ComponentQuery.query('#rank4')[0].setValue('Director');
				}else{
					temp = 'SM';
					Ext.ComponentQuery.query('#rank4')[0].setValue('Senior Manager');
				}
			}else{
				temp = 'EM';
				Ext.ComponentQuery.query('#rank4')[0].setValue('Executive Manager');	
			}
		}else{
			temp = 'M';
			Ext.ComponentQuery.query('#rank4')[0].setValue('Manager');	
		}
		
		switch(temp){
			case 'M':
				var result1 = (rValue[1][3] * 0.1 * 3) + (rValue[2][3] * 0.04 * 9);
				rankBonus[3] = result1;
				Ext.ComponentQuery.query('#lb4')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
			case 'EM':
				var result1 = (rValue[1][3] * 0.1 * 3) + (rValue[2][3] * 0.05 * 9) + (rValue[3][3] * 0.04 * 27);
				rankBonus[3] = result1;
				Ext.ComponentQuery.query('#lb4')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
			case 'SM':
				var result1 = (rValue[1][3] * 0.1 * 3) + (rValue[2][3] * 0.06 * 9) + (rValue[3][3] * 0.05 * 27);
				rankBonus[3] = result1;
				Ext.ComponentQuery.query('#lb4')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
			case 'D':
				var result1 = (rValue[1][3] * 0.1 * 3) + (rValue[2][3] * 0.07 * 9) + (rValue[3][3] * 0.06 * 27);
				rankBonus[3] = result1;
				Ext.ComponentQuery.query('#lb4')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
		}
	}else{
		rankBonus[3] = 0;
		Ext.ComponentQuery.query('#rank4')[0].setValue('Distributor');
	}
	
	if(rValue[0][4] >= 100){
		var temp = '';
		if(rValue[1][4] >= 100){
			if(rValue[2][4] >= 100){
				if(rValue[3][4] >= 100){
					if(rValue[4][4] >= 100){
						temp = 'SD';
						Ext.ComponentQuery.query('#rank5')[0].setValue('Star Director');
					}else{
						temp = 'D';
						Ext.ComponentQuery.query('#rank5')[0].setValue('Director');
					}
				}else{
					temp = 'SM';
					Ext.ComponentQuery.query('#rank5')[0].setValue('Senoir Manager');
				}
			}else{
				temp = 'EM';
				Ext.ComponentQuery.query('#rank5')[0].setValue('Executive Manager');	
			}
		}else{
			temp = 'M';
			Ext.ComponentQuery.query('#rank5')[0].setValue('Manager');	
		}
		
		switch(temp){
			case 'M':
				var result1 = (rValue[1][4] * 0.1 * 3) + (rValue[2][4] * 0.04 * 9);
				rankBonus[4] = result1;
				Ext.ComponentQuery.query('#lb5')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
			case 'EM':
				var result1 = (rValue[1][4] * 0.1 * 3) + (rValue[2][4] * 0.05 * 9) + (rValue[3][4] * 0.04 * 27);
				rankBonus[4] = result1;
				Ext.ComponentQuery.query('#lb5')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
			case 'SM':
				var result1 = (rValue[1][4] * 0.1 * 3) + (rValue[2][4] * 0.06 * 9) + (rValue[3][4] * 0.05 * 27) + (rValue[4][4] * 0.04 * 81);
				rankBonus[4] = result1;
				Ext.ComponentQuery.query('#lb5')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
			case 'D':
				var result1 = (rValue[1][4] * 0.1 * 3) + (rValue[2][4] * 0.07 * 9) + (rValue[3][4] * 0.06 * 27) + (rValue[4][4] * 0.05 * 81);
				rankBonus[4] = result1;
				Ext.ComponentQuery.query('#lb5')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
			case 'SD':
				var result1 = (rValue[1][4] * 0.1 * 3) + (rValue[2][4] * 0.08 * 9) + (rValue[3][4] * 0.07 * 27) + (rValue[4][4] * 0.06 * 81) + (rValue[5][4] * 0.04 * 243);
				rankBonus[4] = result1;
				Ext.ComponentQuery.query('#lb5')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
		}
	}else{
		rankBonus[4] = 0;
		Ext.ComponentQuery.query('#rank5')[0].setValue('Distributor');
	}
	
	if(rValue[0][5] >= 100){
		var temp = '';
		if(rValue[1][5] >= 100){
			if(rValue[2][5] >= 100){
				if(rValue[3][5] >= 100){
					if(rValue[4][5] >= 100){
						temp = 'SD';
						if(rValue[5][5] >= 100){
							Ext.ComponentQuery.query('#rank6')[0].setValue('Star Director');
						}else{
							Ext.ComponentQuery.query('#rank6')[0].setValue('Star Director');
						}
					}else{
						temp = 'D';
						Ext.ComponentQuery.query('#rank6')[0].setValue('Director');
					}
				}else{
					temp = 'SM';
					Ext.ComponentQuery.query('#rank6')[0].setValue('Senior Manager');
				}
			}else{
				temp = 'EM';
				Ext.ComponentQuery.query('#rank6')[0].setValue('Executive Manager');	
			}
		}else{
			temp = 'M';
			Ext.ComponentQuery.query('#rank6')[0].setValue('Manager');	
		}
		
		switch(temp){
			case 'M':
				var result1 = (rValue[1][5] * 0.1 * 3) + (rValue[2][5] * 0.04 * 9);
				rankBonus[5] = result1;
				Ext.ComponentQuery.query('#lb6')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
			case 'EM':
				var result1 = (rValue[1][5] * 0.1 * 3) + (rValue[2][5] * 0.05 * 9) + (rValue[3][5] * 0.04 * 27);
				rankBonus[5] = result1;
				Ext.ComponentQuery.query('#lb6')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
			case 'SM':
				var result1 = (rValue[1][5] * 0.1 * 3) + (rValue[2][5] * 0.06 * 9) + (rValue[3][5] * 0.05 * 27) + (rValue[4][5] * 0.04 * 81);
				rankBonus[5] = result1;
				Ext.ComponentQuery.query('#lb6')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
			case 'D':
				var result1 = (rValue[1][5] * 0.1 * 3) + (rValue[2][5] * 0.07 * 9) + (rValue[3][5] * 0.06 * 27) + (rValue[4][5] * 0.05 * 81) + (rValue[5][5] * 0.04 * 243);
				rankBonus[5] = result1;
				Ext.ComponentQuery.query('#lb6')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
			case 'SD':
				var result1 = (rValue[1][5] * 0.1 * 3) + (rValue[2][5] * 0.08 * 9) + (rValue[3][5] * 0.07 * 27) + (rValue[4][5] * 0.06 * 81) + (rValue[5][5] * 0.05 * 243) + (rValue[6][5] * 0.04 * 729);
				rankBonus[5] = result1;
				Ext.ComponentQuery.query('#lb6')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
		}
	}else{
		rankBonus[5] = 0;
		Ext.ComponentQuery.query('#rank6')[0].setValue('Distributor');
	}
	
	if(rValue[0][6] >= 100){
		var temp = '';
		if(rValue[1][6] >= 100){
			if(rValue[2][6] >= 100){
				if(rValue[3][6] >= 100){
					if(rValue[4][6] >= 100){
						if(rValue[5][6] >= 100){
							temp = 'SD';
							if(rValue[6][6] >= 100){
								Ext.ComponentQuery.query('#rank7')[0].setValue('Star Director');
							}else{
								Ext.ComponentQuery.query('#rank7')[0].setValue('Star Director');
							}
						}else{
							temp = 'SD';
							Ext.ComponentQuery.query('#rank7')[0].setValue('Star Director');
						}
					}else{
						temp = 'D';
						Ext.ComponentQuery.query('#rank7')[0].setValue('Director');
					}
				}else{
					temp = 'SM';
					Ext.ComponentQuery.query('#rank7')[0].setValue('Senior Manager');
				}
			}else{
				temp = 'EM';
				Ext.ComponentQuery.query('#rank7')[0].setValue('Executive Manager');	
			}
		}else{
			temp = 'M';
			Ext.ComponentQuery.query('#rank7')[0].setValue('Manager');	
		}
		
		switch(temp){
			case 'M':
				var result1 = (rValue[1][6] * 0.1 * 3) + (rValue[2][6] * 0.04 * 9);
				rankBonus[6] = result1;
				Ext.ComponentQuery.query('#lb7')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
			case 'EM':
				var result1 = (rValue[1][6] * 0.1 * 3) + (rValue[2][6] * 0.05 * 9) + (rValue[3][6] * 0.04 * 27);
				rankBonus[6] = result1;
				Ext.ComponentQuery.query('#lb7')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
			case 'SM':
				var result1 = (rValue[1][6] * 0.1 * 3) + (rValue[2][6] * 0.06 * 9) + (rValue[3][6] * 0.05 * 27) + (rValue[4][6] * 0.04 * 81);
				rankBonus[6] = result1;
				Ext.ComponentQuery.query('#lb7')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
			case 'D':
				var result1 = (rValue[1][6] * 0.1 * 3) + (rValue[2][6] * 0.07 * 9) + (rValue[3][6] * 0.06 * 27) + (rValue[4][6] * 0.05 * 81) + (rValue[5][6] * 0.04 * 243);
				rankBonus[6] = result1;
				Ext.ComponentQuery.query('#lb7')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
			case 'SD':
				var result1 = (rValue[1][6] * 0.1 * 3) + (rValue[2][6] * 0.08 * 9) + (rValue[3][6] * 0.07 * 27) + (rValue[4][6] * 0.06 * 81) + (rValue[5][6] * 0.05 * 243) + (rValue[6][6] * 0.04 * 729);
				rankBonus[6] = result1;
				Ext.ComponentQuery.query('#lb7')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
		}
	}else{
		rankBonus[6] = 0;
		Ext.ComponentQuery.query('#rank7')[0].setValue('Distributor');
	}
	
	if(rValue[0][7] >= 100){
		if(rValue[1][7] >= 100){
			if(rValue[2][7] >= 100){
				if(rValue[3][7] >= 100){
					if(rValue[4][7] >= 100){
						if(rValue[5][7] >= 100){
							if(rValue[6][7] >= 100){
								temp = 'SD';
								if(rValue[7][7] >= 100){
									Ext.ComponentQuery.query('#rank8')[0].setValue('Star Director');
								}else{
									Ext.ComponentQuery.query('#rank8')[0].setValue('Star Director');
								}
							}else{
								Ext.ComponentQuery.query('#rank8')[0].setValue('Star Director');
							}
						}else{
							temp = 'SD';
							Ext.ComponentQuery.query('#rank8')[0].setValue('Star Director');
						}
					}else{
						temp = 'D';
						Ext.ComponentQuery.query('#rank8')[0].setValue('Director');
					}
				}else{
					temp = 'SM';
					Ext.ComponentQuery.query('#rank8')[0].setValue('Senior Manager');
				}
			}else{
				temp = 'EM';
				Ext.ComponentQuery.query('#rank8')[0].setValue('Executive Manager');	
			}	
		}else{
			temp = 'M';
			Ext.ComponentQuery.query('#rank8')[0].setValue('Manager');	
		}
		
		switch(temp){
			case 'M':
				var result1 = (rValue[1][7] * 0.1 * 3) + (rValue[2][7] * 0.04 * 9);
				rankBonus[7] = result1;
				Ext.ComponentQuery.query('#lb8')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
			case 'EM':
				var result1 = (rValue[1][7] * 0.1 * 3) + (rValue[2][7] * 0.05 * 9) + (rValue[3][7] * 0.04 * 27);
				rankBonus[7] = result1;
				Ext.ComponentQuery.query('#lb8')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
			case 'SM':
				var result1 = (rValue[1][7] * 0.1 * 3) + (rValue[2][7] * 0.06 * 9) + (rValue[3][7] * 0.05 * 27) + (rValue[4][7] * 0.04 * 81);
				rankBonus[7] = result1;
				Ext.ComponentQuery.query('#lb8')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
			case 'D':
				var result1 = (rValue[1][7] * 0.1 * 3) + (rValue[2][7] * 0.07 * 9) + (rValue[3][7] * 0.06 * 27) + (rValue[4][7] * 0.05 * 81) + (rValue[5][7] * 0.04 * 243);
				rankBonus[7] = result1;
				Ext.ComponentQuery.query('#lb8')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
			case 'SD':
				var result1 = (rValue[1][7] * 0.1 * 3) + (rValue[2][7] * 0.08 * 9) + (rValue[3][7] * 0.07 * 27) + (rValue[4][7] * 0.06 * 81) + (rValue[5][7] * 0.05 * 243) + (rValue[6][7] * 0.04 * 729);
				rankBonus[7] = result1;
				Ext.ComponentQuery.query('#lb8')[0].setValue('UBD $ ' + cdecimal(result1, 2, ',', '.'));
				break;
		}
	}else{
		rankBonus[7] = 0;
		Ext.ComponentQuery.query('#rank8')[0].setValue('Distributor');
	}
}

Ext.define('testingV2.view.Main', {
        extend: 'Ext.tab.Panel',
        xtype: 'main',

        config: {
            tabBarPosition: 'bottom',
			style: 'font-size:16.5px',	
            items: [{
                    title: "Enrollment",
					style: 'text-transform: none;',
                    iconCls: "home",
                    layout: 'vbox',
                    items: [{
                            xtype: 'navigationview',
                            id: "main",
                            flex: 1,
                            items: [{
                                    title: 'Enrollment',
									style: 'text-transform: none;',
                                    styleHtmlContent: true,
                                    //scrollable: false,
                                    items: [{
                                            xtype: 'fieldset',
                                            //title: 'Enrollment',
                                            itemId: 'enResult',
                                            items: [{
                                                    xtype: 'selectfield',
                                                    layout: 'default',
                                                    label: 'Personal',
                                                    itemId: 'personal',
                                                    labelWidth: '50%',
                                                    usePicker: false,
                                                    options: [{
                                                            text: '50 CV',
                                                            value: '50'
                                                        }, {
                                                            text: '100 CV',
                                                            value: '100'
                                                        }, {
                                                            text: '400 CV',
                                                            value: '400'
                                                        }, {
                                                            text: '800 CV',
                                                            value: '800'
                                                        }
                                                    ],
                                                    listeners: {
                                                        initialize: function () {
                                                            //this.setFloatingCls('floatingPanel');
                                                        }
                                                    }
                                                }, {
                                                    xtype: 'selectfield',
                                                    label: 'Downline',
                                                    itemId: 'downline',
                                                    labelWidth: '50%',
                                                    usePicker: false,
                                                    listeners: {
                                                        itemtap: function () {
                                                            alert('OK');
                                                        }
                                                    },
                                                    options: [{
                                                            text: '50 CV',
                                                            value: '50'
                                                        }, {
                                                            text: '100 CV',
                                                            value: '100'
                                                        }, {
                                                            text: '400 CV',
                                                            value: '400'
                                                        }, {
                                                            text: '800 CV',
                                                            value: '800'
                                                        }
                                                    ]
                                                }, {
                                                    xtype: 'selectfield',
                                                    label: 'Recruitment',
                                                    labelWidth: '50%',
                                                    itemId: 'recruitment',
                                                    usePicker: false,
                                                    options: [{
                                                            text: '1',
                                                            value: '1'
                                                        }, {
                                                            text: '2',
                                                            value: '2'
                                                        }, {
                                                            text: '3',
                                                            value: '3'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            xtype: 'button',
                                            itemId: 'nextButton',
                                            ui: 'action',
                                            padding: '10px',
                                            text: 'Next',
                                            handler: function () {
												Ext.Viewport.setMasked({xtype:'loadmask',message:'Loading'});
												
												setTimeout(function () {            
													Ext.Viewport.setMasked(false);
														Ext.getCmp('main').push({
															xtype: 'EnrollmentResultView'
														});
														
												var persValue = parseFloat(Ext.ComponentQuery.query('#personal')[0].getValue());
                                                var downValue = parseFloat(Ext.ComponentQuery.query('#downline')[0].getValue());
                                                var recruitValue = parseFloat(Ext.ComponentQuery.query('#recruitment')[0].getValue());
                                                var perCV = 0;
												var downCV = 0;
                                                var gpb1 = 0;
												
												for(var aCount = 0;aCount <=7;aCount++){
													if(aCount == 0)
														ndsbValue[aCount] = (downValue * recruitValue) * 0.2;
													else
														ndsbValue[aCount] = 0;
												}

                                                switch (persValue) {
                                                case 800:
                                                    perCV = 0.12;
                                                    break;
                                                case 400:
                                                    perCV = 0.1;
                                                    break;
                                                case 100:
                                                    perCV = 0.08;
                                                    break;
                                                case 50:
                                                    perCV = 0.06;
                                                    break;
                                                }
												
												switch (downValue) {
                                                case 800:
                                                    downCV = 0.12;
                                                    break;
                                                case 400:
                                                    downCV = 0.1;
                                                    break;
                                                case 100:
                                                    downCV = 0.08;
                                                    break;
                                                case 50:
                                                    downCV = 0.06;
                                                    break;
                                                }

                                                var tmpNode1 = recruitValue - 1;
                                                var tmpNode2 = tmpNode1 * recruitValue;
                                                var tmpNode3 = tmpNode2 * recruitValue;
                                                var tmpNode4 = tmpNode3 * recruitValue;
                                                var tmpNode5 = tmpNode4 * recruitValue;
                                                var tmpNode6 = tmpNode5 * recruitValue;
                                                var tmpNode7 = tmpNode6 * recruitValue;
                                                var tmpNode8 = tmpNode7 * recruitValue;

                                                gpb1 = (tmpNode1 * downValue * perCV);

                                                /* NDSB Value */
												for(var aTemp = 1;aTemp <= 8;aTemp++){
													Ext.ComponentQuery.query('#ndsb' + aTemp)[0].setValue('UBD $ ' + cdecimal(ndsbValue[aTemp-1], 2, ',', '.'));
												}

                                                /* GPB Value */
                                                gpb[1] = gpb1;
                                                gpb[2] = tmpNode2 * downValue * perCV;
                                                gpb[3] = tmpNode3 * downValue * perCV;
                                                gpb[4] = tmpNode4 * downValue * perCV;
                                                gpb[5] = tmpNode5 * downValue * perCV;
                                                gpb[6] = tmpNode6 * downValue * perCV;
                                                gpb[7] = tmpNode7 * downValue * perCV;
                                                gpb[8] = tmpNode8 * downValue * perCV;

												calWeekLb(downValue,perCV,downCV,recruitValue);
												
												for(var b = 1;b <= 7;b++){
													for(var c = 0;c < 8;c++){
														if(downValue == 50){
															if(lb2[b][c] > 300)
																lb2[b][c] = 300;
														}else if(downValue == 100){
															if(lb2[b][c] > 1000)
																lb2[b][c] = 1000;
														}else if(downValue == 400){
															if(lb2[b][c] > 2500)
																lb2[b][c] = 2500;
														}else if(downValue == 800){
															if(lb2[b][c] > 5000){
																lb2[b][c] = 5000;
															}
														}
													}
												}
												
												checkRanking(lb2);
												
												var temp = 0;
												
                                                for (var a = 1; a <= 8; a++) {
														if(persValue == 50){
															if(lb2[0][temp] > 300)
																lb2[0][temp] = 300;
														}else if(persValue == 100){
															if(lb2[0][temp] > 1000)
																lb2[0][temp] = 1000;
														}else if(persValue == 400){
															if(lb2[0][temp] > 2500)
																lb2[0][temp] = 2500;
														}else if(persValue == 800){
															if(lb2[0][temp] > 5000)
																lb2[0][temp] = 5000;
														}
													
                                                    Ext.ComponentQuery.query('#gpb' + a)[0].setValue('UBD $ ' + cdecimal(lb2[0][temp], 2, ',', '.'));
													temp++;
                                                }
												
												/* NLB Value*/
												calNLB(downValue,recruitValue);
												
                                                calWeekTotal(100);
												
												}, 700);	

                                                //Ext.ComponentQuery.query('#ndsb1')[0].setValue();
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }, {
                    title: "Repeat Sales",
                    iconCls: "star",
                    layout: 'vbox',
					style: 'text-transform: none;',
                    items: [{
                            xtype: 'navigationview',
                            id: "sales",
                            flex: 1,
                            items: [{
                                    title: 'Repeat Sales',
									style: 'text-transform: none;',
                                    styleHtmlContent: true,
                                    //scrollable: false,
                                    items: [{
                                            xtype: 'fieldset',
                                            title: 'Personal',
                                            items: [{
                                                    xtype: 'numberfield',
                                                    placeHolder: 'CV',
                                                    labelWidth: '50%',
                                                    label: 'Repeat',
                                                    itemId: 'personal_repeat'
                                                }, {
                                                    xtype: 'spinnerfield',
                                                    stepValue: 1,
                                                    groupButtons: false,
                                                    cycle: true,
                                                    placeHolder: 'Person - 1 digit',
                                                    labelWidth: '50%',
                                                    label: 'Sponsor',
                                                    minValue: 0,
                                                    maxValue: 9,
                                                    itemId: 'personal_sponsor'
                                                }, {
                                                    xtype: 'numberfield',
                                                    placeHolder: 'CV',
                                                    labelWidth: '50%',
                                                    label: 'Downline',
                                                    itemId: 'personal_downline'
                                                }, {
													xtype: 'spinnerfield',
                                                    stepValue: 1,
                                                    groupButtons: false,
                                                    cycle: true,
                                                    placeHolder: 'Person - 1 digit',
													labelWidth: '50%',
                                                    label: 'Active Member',
                                                    minValue: 0,
                                                    maxValue: 9,
													itemId: 'active_member'
                                                }
                                            ]
                                        }, {
                                            xtype: 'button',
                                            itemId: 'reportButton',
                                            ui: 'action',
                                            padding: '10px',
                                            text: 'Next',
                                            handler: function () {
												Ext.Viewport.setMasked({xtype:'loadmask',message:'Loading'});
												
												setTimeout(function () {            
													Ext.Viewport.setMasked(false);
													Ext.getCmp('sales').push({
														xtype: 'ResultView'
													});
													calSales();
													calUniLevel();
													calNetLinear();
													calSalesTotal();
												},600)
                                            }
                                        }, {
                                            xtype: 'button',
                                            itemId: 'cancelButton',
                                            ui: 'cancel',
                                            style: 'margin-top: 10px',
                                            padding: '10px',
                                            text: 'Reset',
											handler: function(){
												Ext.ComponentQuery.query('#personal_repeat')[0].setValue('UBD $ 0.00');
												Ext.ComponentQuery.query('#personal_sponsor')[0].setValue(0);
												Ext.ComponentQuery.query('#personal_downline')[0].setValue('UBD $ 0.00');
												Ext.ComponentQuery.query('#active_member')[0].setValue(0);
											}
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    });