function randomLatLng () {
	var $myLat = 39.963692,
      $myLng = 116.384801,
      $floatLenth = 6;
	var latR  = 180 / Math.PI * 0.1 / 6372.797, //里面的 1 就代表搜索 1km 之内，单位km
	    lngR   = latR / Math.cos($myLat * Math.PI / 180);
	    maxLat = ($myLat + latR).toFixed($floatLenth), //最大纬度
	    minLat = ($myLat - latR).toFixed($floatLenth), //最小纬度
	    maxLng = ($myLng + lngR).toFixed($floatLenth), //最大经度
	    minLng = ($myLng - lngR).toFixed($floatLenth); //最小经度

	function selectFrom(lowerValue, upperValue, floatValue){ 
		lowerValue = lowerValue * floatValue;
		upperValue = upperValue * floatValue;
		//取值范围总数
		var choices = upperValue - lowerValue + 1,
				randomValue = Math.floor(Math.random() * choices + lowerValue);
		return randomValue / floatValue; 
	} 

	var randomLat = selectFrom(minLat, maxLat, Math.pow(10, $floatLenth)),
			randomLng = selectFrom(minLng, maxLng, Math.pow(10, $floatLenth));

	return randomLat + ',' + randomLng
}


