/*
* @Author: john
* @Date:   2018-07-25 20:25:42
* @Last Modified by:   Jennferzhan
* @Last Modified time: 2018-08-21 15:43:00
*/
describe("ParkingLotTest", function() {
  var parkingLotTest;
  // var song;

  beforeEach(function() {
    parkingLotTest = new ParkingLotTest();
    // song = new Song();
  });
// 停车场1总容量3，停车场2总容量1
// 小弟有一个停车场，未满
  it("should_return_true_when_input_停车_and_PThird", function() {
  	parkingLots = [{cars:1,parkingLotsPlace:['PFirst','PSecond']}]
    var data = parkingLotTest.park('PThird')
    expect(data).toEqual('PThird在1号停车场停车成功');
  });
  // 小弟有一个停车场，满了
  it("should_return_true_when_input_停车_and_PForth", function() {
  	parkingLots = [{cars:0,parkingLotsPlace:['PFirst','PSecond','PThird']}]
    var data = parkingLotTest.park('PForth')
    expect(data).toEqual('PForth停车失败');
  });
  // 小弟有一个停车场，车存在
  it("should_return_true_when_input_取车_and_PFirst", function() {
    parkingLots = [{cars:3,parkingLotsPlace:['PFirst','PSecond','PThird']}]
    var data = parkingLotTest.pickUp('PFirst')
    expect(data).toEqual('PFirst取车成功');
  });
  // // 两个停车场，一个满了，一个未满
  it("should_return_true_when_input_停车_and_PForth", function() {
    parkingLots = [
                    {cars:0,parkingLotsPlace:['PFirst','PSecond','PThird']},
                    {cars:3,parkingLotsPlace:[]}
                  ]
    var data = parkingLotTest.park('PForth')
    expect(data).toEqual('PForth在2号停车场停车成功');
  });
  // // 小弟有两个停车场，都满了
  it("should_return_true_when_input_停车_and_PFifth", function() {
    parkingLots = [
                    {cars:0,parkingLotsPlace:['PFirst','PSecond','PThird']},
                    {cars:0,parkingLotsPlace:['PForth']}
                  ]
    var data = parkingLotTest.park('PFifth')
    expect(data).toEqual('PFifth停车失败');
  });
  // 小弟有两个停车场，两个未满，优先第一个
  it("should_return_true_when_input_停车_and_PForth", function() {
    parkingLots = [
                    {cars:1,parkingLotsPlace:['PFirst','PSecond']},
                    {cars:1,parkingLotsPlace:['PThird']}
                  ]
    var data = parkingLotTest.park('PForth')
    expect(data).toEqual('PForth在1号停车场停车成功');
  });
});
