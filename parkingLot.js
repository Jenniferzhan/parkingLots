function ParkingBoy() {
}
var parkingLots = []
function sortArray (parkingLots) {
	for (var i = 0;i<parkingLots.length;i++) {
		if (parkingLots[i].cars > 0) {
			for (var j = 0;j<parkingLots.length-i-1;j++){
				if (parkingLots[j].cars < parkingLots[j+1].cars) {
					var newArray = parkingLots[j]
					parkingLots[j] = parkingLots[j+1]
					parkingLots[j+1] = newArray
				}
			}
			console.log(parkingLots)
			return parkingLots
		}
	}
}
ParkingBoy.prototype.park = function(name) {
	sortArray(parkingLots)
	for (var i = 0;i<parkingLots.length;i++) {
		if (parkingLots[i].cars > 0) {
			parkingLots[i].parkingLotsPlace.push(name)
			parkingLots[i].cars -=1
			var info = [true, parkingLots[i].parkingLotsName]
			// alert(parkingLots[i].parkingLotsPlace)
			return info
		}
	}
	return false
};
ParkingBoy.prototype.pickUp = function(name) {
	for (var i = 0;i<parkingLots.length;i++) {
		for(var j=0;j<parkingLots[i].parkingLotsPlace.length;j++)
		if (parkingLots[i].parkingLotsPlace[j] === name) {
			parkingLots[i].parkingLotsPlace.splice(j, 1)
			console.log(parkingLots)
			parkingLots[i].cars +=1
			return true
		}
	}
	return false
};