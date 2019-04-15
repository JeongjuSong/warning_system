var myapp = angular.module('myapp', [
  'ngTouch', 'ngAria', 'ui.grid', 'ui.grid.edit', 'ui.grid.resizeColumns', 'ui.grid.pagination', 'ui.grid.cellNav', 'xeditable'
]);

// Angular.js treeView 생성
myapp.directive('treeView', function ($compile) {
  return {
    restrict: 'E',
    scope: {
      localNodes: '=model',
      localClick: '&click'
    },
    link: function (scope, tElement, tAttrs, transclude) {

      var maxLevels = (angular.isUndefined(tAttrs.maxlevels)) ? 10 : tAttrs.maxlevels;
      var hasCheckBox = (angular.isUndefined(tAttrs.checkbox)) ? false : true;
      scope.showItems = [];


      scope.showHide = function (ulId) {
        var hideThis = document.getElementById(ulId);
        var showHide = angular.element(hideThis).attr('class');
        angular.element(hideThis).attr('class', (showHide === 'show' ? 'hide' : 'show'));
      }

      scope.showIcon = function (node) {
        if (!angular.isUndefined(node.children)) return true;
      }

      scope.checkIfChildren = function (node) {
        if (!angular.isUndefined(node.children)) return true;
      }

      /////////////////////////////////////////////////
      /// SELECT ALL CHILDRENS
      // as seen at: http://jsfiddle.net/incutonez/D8vhb/5/
      function parentCheckChange(item) {
        for (var i in item.children) {
          item.children[i].checked = item.checked;
          var checknode = item.children[i].name;
          if (item.children[i].checked == true) {
            if (checknode != '중구' && checknode != '구로구' && checknode != '영등포구' && checknode != '서초구') {
              console.log(checknode);
              scope.checknode = checknode;
            }
          }
          if (item.children[i].children) {
            parentCheckChange(item.children[i]);
          }
        }


      }
      scope.parentCheckChange = function (node) {

      }

      scope.checkChange = function (node) {
        if (node.children) {
          parentCheckChange(node);
        }
      }
      /////////////////////////////////////////////////

      function renderTreeView(collection, level, max) {
        var text = '';
        text += '<li ng-repeat="n in ' + collection + '" >';
        text += '<span ng-show=showIcon(n) class="show-hide" ng-click=showHide(n.id)><i class="fa fa-plus-square"></i></span>';
        text += '<span ng-show=!showIcon(n) style="padding-right: 13px"></span>';

        if (hasCheckBox) {
          text += '<input class="tree-checkbox" type=checkbox ng-model=n.checked ng-change=checkChange(n)>';
        }


        text += '<span class="edit" ng-click=localClick({node:n})></span>'


        text += '<label>{{n.name}}</label>';
        if ('{{n.checked}}' == true) {
          text += '<label>{{n.checked}}</label>';
        }

        if (level < max) {
          text += '<ul id="{{n.id}}" class="hide" ng-if=checkIfChildren(n)>' + renderTreeView('n.children', level + 1, max) + '</ul></li>';

        } else {
          text += '</li>';
        }

        return text;
      } // end renderTreeView();

      try {
        var text = '<ul class="tree-view-wrapper">';
        text += renderTreeView('localNodes', 1, maxLevels);
        text += '</ul>';
        // text += parentCheckChange(node);
        tElement.html(text);
        $compile(tElement.contents())(scope);
      } catch (err) {
        tElement.html('<b>ERROR!!!</b> - ' + err);
        $compile(tElement.contents())(scope);
      }
    }
  };
});

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
    var index = $("#tts_title option").index($("#tts_title option:selected"));
    // console.log(index);
    $http({
      method: "GET",
      url: '/tts',
      contentType: "application/json",
    }).then(function data(response) {
      for (var i = 0; i <= 10; i++) {
        if (index == i + 1) {
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
    var index = $("#message_title option").index($("#message_title option:selected"));
    $http({
      method: "GET",
      url: '/message',
      contentType: "application/json",
    }).then(function data(response) {
      for (var i = 0; i <= 10; i++) {
        if (index == i + 1) {
          // console.log(response.data[i].text);
          $scope.gridOption4 = response.data[i].text;
        }
      }
    });
  }

  // 지역별 탭 데이터
  // $http({
  //   method: "GET",
  //   url: "/data/region.json",
  //   contentType: "application/json",
  // }).then(function data(response) {

  //   if (user_area == 1) {
  //     $scope.region = response.data.seoul;
  //     if (response.data.seoul[0].checked != false) {
  //       console.log(response.data.seoul[0].checked)
  //     }
  //     // console.log(response.data.seoul)
  //   } else if (user_area == 4) {
  //     $scope.region = response.data.incheon;
  //     // console.log(response.data.incheon);
  //   } else if (user_area == 10) {
  //     $scope.region = response.data.gyeongbuk;
  //     // console.log(response.data.gyeongbuk);
  //   } else if (user_area == 15) {
  //     $scope.region = response.data.gangwon;
  //     // console.log(response.data.gangwon);
  //   } else if (user_area == 17) {
  //     $scope.region = response.data.jeju;
  //     // console.log(response.data.jeju);
  //   } else {
  //     alert("Please Check user_area Value");
  //   }
  // });

  // 분류별 탭 데이터
  // $http({
  //   method: "GET",
  //   url: "/data/facility.json",
  //   contentType: "application/json",
  // }).then(function data(response) {

  //   if (user_area == 1) {
  //     $scope.facility = response.data.seoul;
  //     // console.log(response.data.seoul)
  //   } else if (user_area == 4) {
  //     $scope.facility = response.data.incheon;
  //     // console.log(response.data.incheon);
  //   } else if (user_area == 10) {
  //     $scope.facility = response.data.gyeongbuk;
  //     // console.log(response.data.gyeongbuk);
  //   } else if (user_area == 15) {
  //     $scope.facility = response.data.gangwon;
  //     // console.log(response.data.gangwon);
  //   } else if (user_area == 17) {
  //     $scope.facility = response.data.jeju;
  //     // console.log(response.data.jeju);
  //   } else {
  //     alert("Please Check user_area Value");
  //   }
  // });

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
// myapp.controller('myCtrl3', ['$scope', '$http', '$q', 'uiGridConstants', 'editableOptions', function ($scope, $http, $q, uiGridConstants, editableOptions) {
//   console.log('myCtrl3 Open');
//   editableOptions.theme = 'bs3'
//   var canceler = $q.defer();
//   $scope.submit = function (row) {
//     var tmp = true;
//     $http({
//       method: 'POST',
//       url: '/terminalinsert',
//       contentType: "application/json",
//       data: {
//         no: row.no,
//         location: row.location,
//         detail_location: row.detail_location,
//         ip_address: row.ip_address,
//         status: row.status
//       }
//     }).success(function (data, status, headers, config) {
//       // alert("insert success");
//     }).error(function (data, status, headers, config) {
//       tmp = false;
//       alert("insert fail");
//     });

//     $http({
//       method: 'POST',
//       url: '/terminalupdate',
//       contentType: "application/json",
//       data: {
//         no: row.no,
//         location: row.location,
//         detail_location: row.detail_location,
//         ip_address: row.ip_address,
//         status: row.status
//       }
//     }).success(function (data, status, headers, config) {
//       // alert('update success');
//     }).error(function (data, status, headers, config) {
//       tmp = false;
//       alert("update fail");
//     });
//     if (tmp) alert("Success");
//   }
//   $scope.remove = function (row) {
//     // console.log(row);
//     //TODO
//     $http({
//       method: 'POST',
//       url: '/terminaldelete',
//       contentType: "application/json",
//       data: {
//         no: row.no,
//       }
//     }).success(function (data, status, headers, config) {
//       alert("success");
//     }).error(function (data, status, headers, config) {
//       alert("fail");
//     });
//   }
//   var tableData = [];
//   var getData = function () {
//     $http({
//       method: 'GET',
//       url: '/terminal',
//       contentType: "application/json",
//       data: {}
//     }).success(function (data, status, headers, config) {
//       // console.log(data);
//       $scope.virtualGridOptions.data = data;
//       $scope.paginationGridOptions.data = data;
//     }).error(function (data, status, headers, config) {});
//   }
//   $scope.pushData = function () {
//     // console.log("pushData");
//     $scope.virtualGridOptions.data.push(tmpData);
//     // $scope.paginationGridOptions.data.push(tmpData);
//   }
//   // { name: 'shape', enableFiltering: true, width: 200, enableCellEdit: false },
//   getData();
//   $scope.paginationGridOptions = {
//     paginationPageSizes: [10, 25, 50, 75],
//     paginationPageSize: 10,
//   };
//   angular.extend($scope.paginationGridOptions, $scope.gridOptionsComplex);
//   $scope.virtualGridOptions = {
//     enableSorting: true,
//     showGridFooter: true,
//     enableFiltering: true,
//     rowHeight: 40,
//     modifierKeysToMultiSelectCells: true,
//     columnDefs: [{
//         name: 'no',
//         aggregationType: uiGridConstants.aggregationTypes.count,
//         width: 70
//       },
//       {
//         name: 'location',
//         width: 150,
//         enableCellEdit: true
//       },
//       {
//         name: 'detail_location',
//         width: 250,
//         enableCellEdit: true
//       },
//       {
//         name: 'ip_address',
//         width: 250,
//         enableCellEdit: true
//       },
//       {
//         name: 'status',
//         width: 150,
//         enableCellEdit: true
//       },
//       {
//         name: 'buttons',
//         width: 200,
//         enableCellEdit: false,
//         cellTemplate: '<button type="submit" class="btn-sm btn-primary" style ="width:80px;" ng-click="grid.appScope.submit(row.entity)">Save</button><button type="button" type="remove" class="btn-sm btn-danger"style ="width:80px;" ng-click="grid.appScope.remove(row.entity)">Delete</button>'
//       },

//     ],
//     onRegisterApi: function (gridApi) {
//       $scope.gridApi = gridApi;
//       $scope.gridApi.core.on.sortChanged($scope, function (grid, sort) {
//         $scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
//       })
//     }
//   };
//   $scope.paginationGridOptions = {
//     enablePaging: true,
//     paginationPageSizes: [10, 25, 50, 75],
//     paginationPageSize: 10,
//   };
//   angular.extend($scope.paginationGridOptions, $scope.virtualGridOptions);
//   $scope.updategrid = {
//     toolbar: [{
//       text: "Add new record",
//       name: "popup",
//       iconClass: "k-icon k-add"
//     }],
//     enableSorting: false,
//     showGridFooter: false,
//     enableFiltering: false,
//     rowHeight: 40,
//     modifierKeysToMultiSelectCells: false,
//     columnDefs: [{
//         name: 'no',
//         aggregationType: uiGridConstants.aggregationTypes.count,
//         width: 70
//       },
//       {
//         name: 'location',
//         width: 150,
//         enableCellEdit: true
//       },
//       {
//         name: 'detail_location',
//         width: 250,
//         enableCellEdit: true
//       },
//       {
//         name: 'ip_address',
//         width: 250,
//         enableCellEdit: true
//       },
//       {
//         name: 'status',
//         width: 150,
//         enableCellEdit: true
//       },
//       {
//         name: 'Buttons',
//         width: 200,
//         enableCellEdit: false,
//         cellTemplate: '<button type="submit" class="btn-sm btn-primary" style ="width:80px;" ng-click="grid.appScope.submit(row.entity)">Save</button><button type="button" type="remove" class="btn-sm btn-danger"style ="width:80px;" ng-click="grid.appScope.remove(row.entity)">Delete</button>'
//       },

//     ],
//     onRegisterApi: function (gridApi) {
//       $scope.gridApi = gridApi;
//       $scope.gridApi.core.on.sortChanged($scope, function (grid, sort) {
//         $scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
//       })
//     }
//   };
//   var tmpData = [{
//     no: '',
//     location: '',
//     detail_location: '',
//     ip_address: '',
//     status: ''
//   }]
// }]);

// 저장메시지 추가/수정/삭제 
myapp.controller('myCtrl4', ['$scope', '$http', '$q', 'uiGridConstants', 'editableOptions', function ($scope, $http, $q, uiGridConstants, editableOptions) {
  console.log('myCtrl4 Open');
  editableOptions.theme = 'bs3'
  var canceler = $q.defer();
  $scope.submit = function (row) {
    var tmp = true;
    $http({
      method: 'POST',
      url: '/messageinsert',
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
      url: '/messageupdate',
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
      url: '/messagedelete',
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
      url: '/message',
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


// 이력 조회
myapp.controller('myCtrl5', ['$scope', '$http', '$q', 'uiGridConstants', 'editableOptions', function ($scope, $http, $q, uiGridConstants, editableOptions) {
  console.log('myCtrl5 Open');
  editableOptions.theme = 'bs3'
  var canceler = $q.defer();

  var tableData = [];
  var getData = function () {
    $http({
      method: 'GET',
      url: '/historydata',
      contentType: "application/json",
      data: {}
    }).success(function (data, status, headers, config) {
      // console.log(data);
      $scope.virtualGridOptions.data = data;
      $scope.paginationGridOptions.data = data;
    }).error(function (data, status, headers, config) {});
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
        name: 'time',
        width: 150,
        enableCellEdit: true
      },
      {
        name: 'location',
        width: 250,
        enableCellEdit: true
      },
      {
        name: 'alarm_type',
        width: 200,
        enableCellEdit: true
      },
      {
        name: 'communication',
        width: 200,
        enableCellEdit: true
      },
      {
        name: 'tts',
        width: 100,
        enableCellEdit: true
      },
      {
        name: 'message',
        width: 100,
        enableCellEdit: true
      },
      {
        name: 'siren',
        width: 100,
        enableCellEdit: true
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
      name: 'time',
      width: 150,
      enableCellEdit: true
    },
    {
      name: 'location',
      width: 200,
      enableCellEdit: true
    },
    {
      name: 'alarm_type',
      width: 200,
      enableCellEdit: true
    },
    {
      name: 'communication',
      width: 200,
      enableCellEdit: true
    },
    {
      name: 'tts',
      width: 100,
      enableCellEdit: true
    },
    {
      name: 'message',
      width: 100,
      enableCellEdit: true
    },
    {
      name: 'siren',
      width: 100,
      enableCellEdit: true
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
    time: '',
    location: '',
    alarm_type: '',
    communication: '',
    tts: '',
    message: '',
    siren: ''
  }]
}]);