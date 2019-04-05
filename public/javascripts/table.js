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

  var url = ''
  // 선택 내용 보내기
  $scope.warning = function () {
    console.log('warning() open!')
    var communication = $("#communication:checked").val();
    var siren = $("select#siren").val();
    var tts = $("select#tts_title").val();
    // console.log("통신 종류 : " + selected);
    // console.log("사이렌 종류 : " + siren);

    if (communication == '인터넷') {
      url += '방송 종류 : 인터넷 & ';
    }

    if (communication == '위성') {
      url += '방송 종류 : 위성 & ';
    }

    if (communication == 'DMB') {
      url += '방송 종류 : DMB & ';
    }

    if (communication == 'CDMA') {
      url += '방송 종류 : CDMA & ';
    }
    
    if(tts == '0') {
      url += 'tts 방송 : 강풍 대피방송 & '; 
    }

    for(var i=1; i<=10; i++) {
      if( siren == (i + '번')) {
        url += '사이렌 종류 : ' + i + '번';
      }
    }

    alert(url);
  }

}]);

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