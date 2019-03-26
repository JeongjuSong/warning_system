var myapp = angular.module('myapp', []);

myapp.controller('myCtrl', function ($scope, $http) {
  //  console.log('myCtrl Open');
  $http({
    method: "GET",
    url: "/city",
    contentType: "application/json",
  }).then(function data(response) {
    $scope.gridOption = response.data;
    // console.log("option1 "+ response.data);
    //  console.log(response.data[0].location);

  });

  // 지역별 데이터 출력

  // 서울 gridOption1
  // $http({
  //   method: "GET",
  //   url: "/data/data1.json",
  //   contentType: "application/json",
  // }).then(function data(response) {
  //   $scope.gridOption1 = response.data;
  //   // console.log("option1 "+ response.data);
  //   //  console.log(response.data[3].name);
  // });

  // // 인천 gridOption2
  // $http({
  //   method: "GET",
  //   url: "/data/data4.json",
  //   contentType: "application/json",
  // }).then(function data(response) {
  //   $scope.gridOption2 = response.data;
  //   // console.log("option2 "+ response.data);
  //   //  console.log(response.data[3].name);
  // });

  // // 강원 gridOption3
  // $http({
  //   method: "GET",
  //   url: "/data/data10.json",
  //   contentType: "application/json",
  // }).then(function data(response) {
  //   $scope.gridOption3 = response.data;
  //   // console.log("option3 "+ response.data);
  //   //  console.log(response.data[3].name);
  // });

  // // 경북 gridOption4
  // $http({
  //   method: "GET",
  //   url: "/data/data15.json",
  //   contentType: "application/json",
  // }).then(function data(response) {
  //   $scope.gridOption4 = response.data;
  //   // console.log("option4 "+ response.data);
  //   //  console.log(response.data[3].name);
  // });

  // // 제주 gridOption5
  // $http({
  //   method: "GET",
  //   url: "/data/data17.json",
  //   contentType: "application/json",
  // }).then(function data(response) {
  //   $scope.gridOption5 = response.data;
  //   // console.log("option5 "+ response.data);
  //   //  console.log(response.data[3].name);
  // });


  // // 분류별 데이터 출력

  // // 서울 gridOption6
  // $http({
  //   method: "GET",
  //   url: "/data/device_1.json",
  //   contentType: "application/json",
  // }).then(function data(response) {
  //   $scope.gridOption6 = response.data;
  //   // console.log("option6 "+ response.data);
  //   //  console.log(response.data[1].pId);
  // });

  // // 인천 gridOption7
  // $http({
  //   method: "GET",
  //   url: "/data/device_4.json",
  //   contentType: "application/json",
  // }).then(function data(response) {
  //   $scope.gridOption7 = response.data;
  //   // console.log("option7 "+ response.data);
  //   //  console.log(response.data[1].pId);
  // });

  // // 강원 gridOption8
  // $http({
  //   method: "GET",
  //   url: "/data/device_10.json",
  //   contentType: "application/json",
  // }).then(function data(response) {
  //   $scope.gridOption8 = response.data;
  //   // console.log("option8 "+ response.data);
  //   //  console.log(response.data[1].pId);
  // });

  // // 경북 gridOption9
  // $http({
  //   method: "GET",
  //   url: "/data/device_15.json",
  //   contentType: "application/json",
  // }).then(function data(response) {
  //   $scope.gridOption9 = response.data;
  //   // console.log("option9 "+ response.data);
  //   //  console.log(response.data[1].pId);
  // });

  // // 제주 gridOption10
  // $http({
  //   method: "GET",
  //   url: "/data/device_17.json",
  //   contentType: "application/json",
  // }).then(function data(response) {
  //   $scope.gridOption10 = response.data;
  //   // console.log("option10 "+ response.data);
  //   //  console.log(response.data[1].pId);
  // });


  // 방송 종류

  // 기상특보 gridOption11
  $http({
    method: "GET",
    url: "/data/type.json",
    contentType: "application/json",
  }).then(function data(response) {
    $scope.gridOption11 = response.data.weather_special;
    // console.log("option11 "+ response.data);
    // console.log(response.data.weather_special);
  });

  //  기타 경보 gridOption12
  $http({
    method: "GET",
    url: "/data/type.json",
    contentType: "application/json",
  }).then(function data(response) {
    $scope.gridOption12 = response.data.other_alarm;
    // console.log("option12 "+ response.data);
    // console.log(response.data.other_alarm);
  });

  // 민방위 gridoption13
  $http({
    method: "GET",
    url: "/data/type.json",
    contentType: "application/json",
  }).then(function data(response) {
    $scope.gridOption13 = response.data.civil_defence;
    // console.log(response.data.civil_defence);
  });

  // 전국 gridoption14
  $http({
    method: "GET",
    url: "/data/type.json",
    contentType: "application/json",
  }).then(function data(response) {
    $scope.gridOption14 = response.data.national;
    // console.log(response.data.national);
  });

  // 지역 gridOption15
  $http({
    method: "GET",
    url: "/data/type.json",
    contentType: "application/json",
  }).then(function data(response) {
    $scope.gridOption15 = response.data.local;
    // console.log(response.data.local);
  });

  // 테스트 gridoption16
  $http({
    method: "GET",
    url: "/data/type.json",
    contentType: "application/json",
  }).then(function data(response) {
    $scope.gridOption16 = response.data.test;
    // console.log(response.data.test);
  });

  // 기상 추가 gridOption17
  $http({
    method: "GET",
    url: "/data/type.json",
    contentType: "application/json",
  }).then(function data(response) {
    $scope.gridOption17 = response.data.other_weather;
    // console.log(response.data.other_weather);
  });

});