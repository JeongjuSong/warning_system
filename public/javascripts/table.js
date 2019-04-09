var myapp = angular.module('myapp', [
  'ngTouch', 'ngAria', 'ui.grid', 'ui.grid.edit', 'ui.grid.resizeColumns', 'ui.grid.pagination', 'ui.grid.cellNav', 'xeditable'
]);

myapp.controller('myCtrl', ['$window', '$scope', '$http', '$q', function ($window, $scope, $http, $q) {

  // TTS 방송 title 불러오기 gridOption1
  $http({
    method: "GET",
    url: '/tts',
    contentType: "application/json",
  }).then(function data(response) {
    $scope.gridOption1 = response.data;
    // console.log("option1 : "+response.data);
    // console.log(response.data[0].text);
  });

  // TTS 방송 text 불러오기 gridOption2
  $scope.tts_event = function () {
    var selected = $("select#tts_title").val();
    $http({
      method: "GET",
      url: '/tts',
      contentType: "application/json",
    }).then(function data(response) {
      for (var i = 0; i <= 10; i++) {
        if (selected == i) {
          // console.log(response.data[i].text);
          $scope.gridOption2 = response.data[i].text;
        }
      }
    });
  }

  // 저장 메시지 title 불러오기 gridOption3
  $http({
    method: "GET",
    url: '/message',
    contentType: "application/json",
  }).then(function data(response) {
    $scope.gridOption3 = response.data;
    // console.log("option3 : "+response.data);
    // console.log(response.data[0].title);
  });

  // 저장 메시지 text 불러오기 gridOption4
  $scope.message_event = function () {
    var selected = $("select#message_title").val();
    $http({
      method: "GET",
      url: '/message',
      contentType: "application/json",
    }).then(function data(response) {
      for (var i = 0; i <= 10; i++) {
        if (selected == i) {
          // console.log(response.data[i].text);
          $scope.gridOption4 = response.data[i].text;
        }
      }
    });
  }

  // 선택 내용 확인
  $scope.confirm = function () {
    console.log('confirm() open!')
    var siren = $("select#siren").val();
    var tts = $("select#tts_title").val();
    var ayear = $('select#year').val();
    var amonth = $('select#amonth').val();
    var aday = $('select#aday').val();
    var ahour = $('select#ahour').val();
    var aminute = $('select#aminute').val();
    // console.log("통신 종류 : " + selected);
    // console.log("사이렌 종류 : " + siren);

    if ($('#time:checked').val() == 'right_now') {
      var dt = new Date();
      var month = dt.getUTCMonth() + 1;
      var hour = dt.getUTCHours() + 9;
      var time = (dt.getUTCFullYear() + "." + month + "." + dt.getUTCDate() + " " + hour + ":" + dt.getUTCMinutes() + ":" + dt.getUTCSeconds());
      url += '발령 시간 : ' + time + " & ";
      $scope.gridOption5 = time;
    }

    if (ayear == 2019) {
      url += '2019.';
    }

    if (ayear == 2020) {
      url += '2020.';
    }

    for (var i = 1; i <= 12; i++) {
      if (amonth == i) {
        url += i + '.'
      }
    }

    for (var i = 1; i <= 31; i++) {
      if (aday == i) {
        url += i + ' '
      }
    }

    for (var i = 0; i <= 59; i++) {
      if (ahour == i) {
        url += i + ':'
      }
    }

    for (var i = 0; i <= 59; i++) {
      if (aminute == i) {
        url += i
      }
    }

    var val2 = [];
    $('#alarm_type:checked').each(function (i) {
      val2[i] = $(this).val();
      url += '재난 종류 : ' + val2[i];
    });

    var val = [];
    $('#communication:checked').each(function (i) {
      val[i] = $(this).val();
      url += ' 통신 종류 : ' + val[i];
    });


    if (tts == '0') {
      url += 'tts 방송 : 강풍 대피방송 & ';
    }

    for (var i = 1; i <= 10; i++) {
      if (siren == (i + '번')) {
        url += '사이렌 종류 : ' + i + '번';
      }
    }

    alert(url);
  }

  var url = ''
  // 실제 방송 전송
  $scope.warning = function () {
    console.log('warning() open!');
    var alarm_type = $('#alarm_type:checked').val();
    console.log(alarm_type);
    var siren = $("select#siren").val();
    var tts = $("select#tts_title").val();
    var ayear = $('select#year').val();
    var amonth = $('select#amonth').val();
    var aday = $('select#aday').val();
    var ahour = $('select#ahour').val();
    var aminute = $('select#aminute').val();

    var val = [];
    $('#communication:checked').each(function (i) {
      val[i] = $(this).val();
      url += ' 통신 종류 : ' + val[i];
    });


    if (tts == '0') {
      url += ' tts 방송 : 강풍 대피방송 & ';
    }

    for (var i = 1; i <= 10; i++) {
      if (siren == (i + '번')) {
        url += '사이렌 종류 : ' + i + '번';
      }
    }

  }
}]);

// tts 추가/수정/삭제 
myapp.controller('myCtrl2', ['$scope', '$http', '$q', 'uiGridConstants', 'editableOptions', function ($scope, $http, $q, uiGridConstants, editableOptions) {
  console.log('myCtrl2 Open');
  editableOptions.theme = 'bs3'
  var canceler = $q.defer();
  $scope.submit = function (row) {
    var tmp = true;
    $http({
      method: 'POST',
      url: '/ttsinsert',
      contentType: "application/json",
      data: {
        no: row.no,
        title: row.title,
        text: row.text
      }
    }).success(function (data, status, headers, config) {
      // alert("insert success");
    }).error(function (data, status, headers, config) {
      tmp = false;
      alert("insert fail");
    });

    $http({
      method: 'POST',
      url: '/ttsupdate',
      contentType: "application/json",
      data: {
        no: row.no,
        title: row.title,
        text: row.text
      }
    }).success(function (data, status, headers, config) {
      // alert('update success');
    }).error(function (data, status, headers, config) {
      tmp = false;
      alert("update fail");
    });
    if (tmp) alert("Success");
  }
  $scope.remove = function (row) {
    // console.log(row);
    //TODO
    $http({
      method: 'POST',
      url: '/ttsdelete',
      contentType: "application/json",
      data: {
        no: row.no,
      }
    }).success(function (data, status, headers, config) {
      alert("success");
    }).error(function (data, status, headers, config) {
      alert("fail");
    });
  }
  var tableData = [];
  var getData = function () {
    $http({
      method: 'GET',
      url: '/tts',
      contentType: "application/json",
      data: {}
    }).success(function (data, status, headers, config) {
      // console.log(data);
      $scope.virtualGridOptions.data = data;
      $scope.paginationGridOptions.data = data;
    }).error(function (data, status, headers, config) {});
  }
  $scope.pushData = function () {
    // console.log("pushData");
    $scope.virtualGridOptions.data.push(tmpData);
    // $scope.paginationGridOptions.data.push(tmpData);
  }
  // { name: 'shape', enableFiltering: true, width: 200, enableCellEdit: false },
  getData();
  $scope.paginationGridOptions = {
    paginationPageSizes: [10, 25, 50, 75],
    paginationPageSize: 10,
  };
  angular.extend($scope.paginationGridOptions, $scope.gridOptionsComplex);
  $scope.virtualGridOptions = {
    enableSorting: true,
    showGridFooter: true,
    enableFiltering: true,
    rowHeight: 40,
    modifierKeysToMultiSelectCells: true,
    columnDefs: [{
        name: 'no',
        aggregationType: uiGridConstants.aggregationTypes.count,
        width: 70
      },
      {
        name: 'title',
        width: 200,
        enableCellEdit: true
      },
      {
        name: 'text',
        width: 600,
        enableCellEdit: true
      },
      {
        name: 'buttons',
        width: 200,
        enableCellEdit: false,
        cellTemplate: '<button type="submit" class="btn-sm btn-primary" style ="width:80px;" ng-click="grid.appScope.submit(row.entity)">Save</button><button type="button" type="remove" class="btn-sm btn-danger"style ="width:80px;" ng-click="grid.appScope.remove(row.entity)">Delete</button>'
      },

    ],
    onRegisterApi: function (gridApi) {
      $scope.gridApi = gridApi;
      $scope.gridApi.core.on.sortChanged($scope, function (grid, sort) {
        $scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
      })
    }
  };
  $scope.paginationGridOptions = {
    enablePaging: true,
    paginationPageSizes: [10, 25, 50, 75],
    paginationPageSize: 10,
  };
  angular.extend($scope.paginationGridOptions, $scope.virtualGridOptions);
  $scope.updategrid = {
    toolbar: [{
      text: "Add new record",
      name: "popup",
      iconClass: "k-icon k-add"
    }],
    enableSorting: false,
    showGridFooter: false,
    enableFiltering: false,
    rowHeight: 40,
    modifierKeysToMultiSelectCells: false,
    columnDefs: [{
        name: 'no',
        aggregationType: uiGridConstants.aggregationTypes.count,
        width: 70
      },
      {
        name: 'title',
        width: 200,
        enableCellEdit: true
      },
      {
        name: 'Text',
        width: 600,
        enableCellEdit: true
      },
      {
        name: 'Buttons',
        width: 200,
        enableCellEdit: false,
        cellTemplate: '<button type="submit" class="btn-sm btn-primary" style ="width:80px;" ng-click="grid.appScope.submit(row.entity)">Save</button><button type="button" type="remove" class="btn-sm btn-danger"style ="width:80px;" ng-click="grid.appScope.remove(row.entity)">Delete</button>'
      },

    ],
    onRegisterApi: function (gridApi) {
      $scope.gridApi = gridApi;
      $scope.gridApi.core.on.sortChanged($scope, function (grid, sort) {
        $scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
      })
    }
  };
  var tmpData = [{
    no: '',
    title: '',
    text: ''
  }]
}]);

// 단말기 관리 및 추가/수정/삭제
myapp.controller('myCtrl3', ['$scope', '$http', '$q', 'uiGridConstants', 'editableOptions', function ($scope, $http, $q, uiGridConstants, editableOptions) {
  console.log('myCtrl3 Open');
  editableOptions.theme = 'bs3'
  var canceler = $q.defer();
  $scope.submit = function (row) {
    var tmp = true;
    $http({
      method: 'POST',
      url: '/terminalinsert',
      contentType: "application/json",
      data: {
        no: row.no,
        location: row.location,
        detail_location: row.detail_location,
        ip_address: row.ip_address,
        status: row.status
      }
    }).success(function (data, status, headers, config) {
      // alert("insert success");
    }).error(function (data, status, headers, config) {
      tmp = false;
      alert("insert fail");
    });

    $http({
      method: 'POST',
      url: '/terminalupdate',
      contentType: "application/json",
      data: {
        no: row.no,
        location: row.location,
        detail_location: row.detail_location,
        ip_address: row.ip_address,
        status: row.status
      }
    }).success(function (data, status, headers, config) {
      // alert('update success');
    }).error(function (data, status, headers, config) {
      tmp = false;
      alert("update fail");
    });
    if (tmp) alert("Success");
  }
  $scope.remove = function (row) {
    // console.log(row);
    //TODO
    $http({
      method: 'POST',
      url: '/terminaldelete',
      contentType: "application/json",
      data: {
        no: row.no,
      }
    }).success(function (data, status, headers, config) {
      alert("success");
    }).error(function (data, status, headers, config) {
      alert("fail");
    });
  }
  var tableData = [];
  var getData = function () {
    $http({
      method: 'GET',
      url: '/terminal',
      contentType: "application/json",
      data: {}
    }).success(function (data, status, headers, config) {
      // console.log(data);
      $scope.virtualGridOptions.data = data;
      $scope.paginationGridOptions.data = data;
    }).error(function (data, status, headers, config) {});
  }
  $scope.pushData = function () {
    // console.log("pushData");
    $scope.virtualGridOptions.data.push(tmpData);
    // $scope.paginationGridOptions.data.push(tmpData);
  }
  // { name: 'shape', enableFiltering: true, width: 200, enableCellEdit: false },
  getData();
  $scope.paginationGridOptions = {
    paginationPageSizes: [10, 25, 50, 75],
    paginationPageSize: 10,
  };
  angular.extend($scope.paginationGridOptions, $scope.gridOptionsComplex);
  $scope.virtualGridOptions = {
    enableSorting: true,
    showGridFooter: true,
    enableFiltering: true,
    rowHeight: 40,
    modifierKeysToMultiSelectCells: true,
    columnDefs: [{
        name: 'no',
        aggregationType: uiGridConstants.aggregationTypes.count,
        width: 70
      },
      {
        name: 'location',
        width: 150,
        enableCellEdit: true
      },
      {
        name: 'detail_location',
        width: 250,
        enableCellEdit: true
      },
      {
        name: 'ip_address',
        width: 250,
        enableCellEdit: true
      },
      {
        name: 'status',
        width: 150,
        enableCellEdit: true
      },
      {
        name: 'buttons',
        width: 200,
        enableCellEdit: false,
        cellTemplate: '<button type="submit" class="btn-sm btn-primary" style ="width:80px;" ng-click="grid.appScope.submit(row.entity)">Save</button><button type="button" type="remove" class="btn-sm btn-danger"style ="width:80px;" ng-click="grid.appScope.remove(row.entity)">Delete</button>'
      },

    ],
    onRegisterApi: function (gridApi) {
      $scope.gridApi = gridApi;
      $scope.gridApi.core.on.sortChanged($scope, function (grid, sort) {
        $scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
      })
    }
  };
  $scope.paginationGridOptions = {
    enablePaging: true,
    paginationPageSizes: [10, 25, 50, 75],
    paginationPageSize: 10,
  };
  angular.extend($scope.paginationGridOptions, $scope.virtualGridOptions);
  $scope.updategrid = {
    toolbar: [{
      text: "Add new record",
      name: "popup",
      iconClass: "k-icon k-add"
    }],
    enableSorting: false,
    showGridFooter: false,
    enableFiltering: false,
    rowHeight: 40,
    modifierKeysToMultiSelectCells: false,
    columnDefs: [{
        name: 'no',
        aggregationType: uiGridConstants.aggregationTypes.count,
        width: 70
      },
      {
        name: 'location',
        width: 150,
        enableCellEdit: true
      },
      {
        name: 'detail_location',
        width: 250,
        enableCellEdit: true
      },
      {
        name: 'ip_address',
        width: 250,
        enableCellEdit: true
      },
      {
        name: 'status',
        width: 150,
        enableCellEdit: true
      },
      {
        name: 'Buttons',
        width: 200,
        enableCellEdit: false,
        cellTemplate: '<button type="submit" class="btn-sm btn-primary" style ="width:80px;" ng-click="grid.appScope.submit(row.entity)">Save</button><button type="button" type="remove" class="btn-sm btn-danger"style ="width:80px;" ng-click="grid.appScope.remove(row.entity)">Delete</button>'
      },

    ],
    onRegisterApi: function (gridApi) {
      $scope.gridApi = gridApi;
      $scope.gridApi.core.on.sortChanged($scope, function (grid, sort) {
        $scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
      })
    }
  };
  var tmpData = [{
    no: '',
    location: '',
    detail_location: '',
    ip_address: '',
    status: ''
  }]
}]);

// myapp.directive("filterTree", function () {
//       return {
//         restrict: "AE",
//         controller: function ($scope, $http, $element) {
//           $scope.treeNodes = [];
//           var filterItemsUrl = "/data/region.json";
//           //save httpPromise
//           var httpPromise = $http.get(filterItemsUrl);
//           //chain from httpPromise
//           httpPromise.then(function (response) {
//               var filterItems = response.data["data"]["filter_nodes"];
//               filterItems.map(function (item) {
//                 $scope.treeNodes.push({
//                   id: item.seoul.id,
//                   pId: item.seoul.pid,
//                   name: item.seoul.name,
//                   open: item.seoul.open
//                 });
//               });
//               //return treeNodes for chaining zTree.init
//               return $scope.treeNodes;
//             }).then (function onFulfilled (treeNodes) {
//               var setting= {
//                 check: {enable: true},
//                 data: {sinpleData: {enable: true}
//               }
//               };
//               $.fn.zTree.init($element, setting, treeNodes);
//             })
//           },
//           link : function(scope,element,attributes,controller) {

//           }
//         }
//       });