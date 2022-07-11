var value = 123;
var book = function() {
  var point = 456;
  var getPoint = function() {
    return point;
  };
  getPoint();
};
book();