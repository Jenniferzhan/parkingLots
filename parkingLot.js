function ParkingLotTest() {
}
var parkingLots = []
ParkingLotTest.prototype.park = function(name) {
	for (var i = 0;i<parkingLots.length;i++) {
		if (parkingLots[i].cars > 0) {
			parkingLots[i].parkingLotsPlace.push(name)
			parkingLots[i].cars -=1
			// alert(parkingLots[i].parkingLotsPlace)
			return name + '在' + (i+1) + '号停车场停车成功'
		}
	}
	return name + '停车失败'
};
ParkingLotTest.prototype.pickUp = function(name) {
	for (var i = 0;i<parkingLots.length;i++) {
		for(var j=0;j<parkingLots[i].parkingLotsPlace.length;j++)
		if (parkingLots[i].parkingLotsPlace[j] === name) {
			parkingLots[i].parkingLotsPlace.splice(j, 1)
			console.log(parkingLots)
			parkingLots[i].cars +=1
			return name + '取车成功'
		}
	}
	return '取车失败'
};