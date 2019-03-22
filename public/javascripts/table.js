var myapp = angular.module('myapp', []);

myapp.controller('myCtrl', function ($scope, $http) {
  //  console.log('myCtrl Open');
  $http({
    method: "GET",
    url: "/city",
    contentType: "application/json",
  }).then(function data(response) {
    $scope.gridOption1 = response.data;
    // console.log("option1 "+ response.data);
    //  console.log(response.data[0].location);

  });

  // 분류별 데이터 출력
  $http({
    method: "GET",
    url: "/city/device_1.json",
    contentType: "application/json",
  }).then(function data(response) {
    $scope.gridOption2 = response.data;
    // console.log("option2 "+ response.data);
    //  console.log(response.data[1].pId);

  });

  // 지역별 데이터 출력
  $http({
    method: "GET",
    url: "/city/data1.json",
    contentType: "application/json",
  }).then(function data(response) {
    $scope.gridOption3 = response.data;
    // console.log("option3 "+ response.data);
    //  console.log(response.data[3].name);
  });
});