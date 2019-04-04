var myapp = angular.module('myapp', [
  'ngTouch', 'ngAria', 'ui.grid', 'ui.grid.edit', 'ui.grid.resizeColumns', 'ui.grid.pagination', 'ui.grid.cellNav', 'xeditable'
]);

myapp.controller('myCtrl', ['$window', '$scope', '$http', '$q', function ($window, $scope, $http, $q) {

  $http({
    method: "GET",
    url: '/tts',
    contentType: "application/json",
  }).then(function data(response) {
    $scope.gridOption1 = response.data;
    // console.log("option1 : "+response.data);
    // console.log(response.data[0].text);
  });

  var url = 'warning?'

  // 선택 내용 보내기
  $scope.warning = function () {
    console.log('warning() open!')
    var communication = $("#communication:checked").val();
    var siren = $("select#selectOptions").val();
    // console.log("통신 종류 : " + selected);
    // console.log("사이렌 종류 : " + siren);

    if (communication== '인터넷') {
      url += '&communication=internet';
    }

    if (communication== '위성') {
      url += '&communication=satellite';
    }

    if (communication== 'DMB') {
      url += '&communication=dmb';
    }

    if (communication== 'CDMA') {
      url += '&communication=cdma';
    }

    if(siren == '1번') {
      url += '&siren=1';
    }

    if(siren == '2번') {
      url += '&siren=2';
    }

    if(siren == '3번') {
      url += '&siren=3';
    }

    if(siren == '4번') {
      url += '&siren=4';
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