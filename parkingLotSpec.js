/*
* @Author: john
* @Date:   2018-07-25 20:25:42
* @Last Modified by:   Jennferzhan
* @Last Modified time: 2018-08-28 14:51:04
*/
describe("ParkingBoy", function() {
  var parkingboy;

  beforeEach(function() {
    parkingboy = new ParkingBoy();
  });
// 停车场1总容量3，停车场2总容量1
// 小弟有一个停车场，未满
  it("should_return_true_when_input_停车_and_PThird", function() {
    parkingLots = [{parkingLotsName:1,cars:1,parkingLotsPlace:['PFirst','PSecond']}]
    var data = parkingboy.park('PThird')
    expect(data).toEqual([true, 1]);
  });
  // 小弟有一个停车场，满了
  it("should_return_true_when_input_停车_and_PForth", function() {
    parkingLots = [{parkingLotsName:1,cars:0,parkingLotsPlace:['PFirst','PSecond','PThird']}]
    var data = parkingboy.park('PForth')
    expect(data).toEqual(false);
  });
  // 小弟有一个停车场，车存在
  it("should_return_true_when_input_取车_and_PFirst", function() {
    parkingLots = [{parkingLotsName:1,cars:3,parkingLotsPlace:['PFirst','PSecond','PThird']}]
    var data = parkingboy.pickUp('PFirst')
    expect(data).toEqual(true);
  });
  // // 两个停车场，一个满了，一个未满
  it("should_return_true_when_input_停车_and_PForth", function() {
    parkingLots = [
                    {parkingLotsName:1,cars:0,parkingLotsPlace:['PFirst','PSecond','PThird']},
                    {parkingLotsName:2,cars:3,parkingLotsPlace:[]}
                  ]
    var data = parkingboy.park('PForth')
    expect(data).toEqual([true, 2]);
  });
  // // 小弟有两个停车场，都满了
  it("should_return_true_when_input_停车_and_PFifth", function() {
    parkingLots = [
                    {parkingLotsName:1,cars:0,parkingLotsPlace:['PFirst','PSecond','PThird']},
                    {parkingLotsName:2,cars:0,parkingLotsPlace:['PForth']}
                  ]
    var data = parkingboy.park('PFifth')
    expect(data).toEqual(false);
  });
  // 小弟有两个停车场，两个未满，优先第一个
  it("should_return_true_when_input_停车_and_PForth", function() {
    parkingLots = [
                    {parkingLotsName:1,cars:1,parkingLotsName:1,parkingLotsPlace:['PFirst','PSecond']},
                    {parkingLotsName:2,cars:1,parkingLotsPlace:['PThird']}
                  ]
    var data = parkingboy.park([true, 1])
    expect(data).toEqual([true, 1]);
  });
  // 两个停车场优先停空车位多的
  it("should_return_true_when_input_停车_and_PForth", function() {
    parkingLots = [
                    {parkingLotsName:1,cars:2,parkingLotsPlace:['PFirst','PSecond']},
                    {parkingLotsName:2,cars:5,parkingLotsPlace:['PThird']}
                  ]
    var data = parkingboy.park('PForth')
    expect(data).toEqual([true, 2]);
  });
});
