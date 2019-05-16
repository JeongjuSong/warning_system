var myapp = angular.module('myapp', [
  'ngTouch', 'ngAria', 'ui.grid', 'ui.grid.edit', 'ui.grid.resizeColumns', 'ui.grid.pagination', 'ui.grid.cellNav', 'xeditable'
]);

// Angular.js treeView 생성
// myapp.directive('treeView', function ($compile) {
//   return {
//     restrict: 'E',
//     scope: {
//       localNodes: '=model',
//       localClick: '&click'
//     },
//     link: function (scope, tElement, tAttrs, transclude) {

//       var maxLevels = (angular.isUndefined(tAttrs.maxlevels)) ? 10 : tAttrs.maxlevels;
//       var hasCheckBox = (angular.isUndefined(tAttrs.checkbox)) ? false : true;
//       scope.showItems = [];


//       scope.showHide = function (ulId) {
//         var hideThis = document.getElementById(ulId);
//         var showHide = angular.element(hideThis).attr('class');
//         angular.element(hideThis).attr('class', (showHide === 'show' ? 'hide' : 'show'));
//       }

//       scope.showIcon = function (node) {
//         if (!angular.isUndefined(node.children)) return true;
//       }

//       scope.checkIfChildren = function (node) {
//         if (!angular.isUndefined(node.children)) return true;
//       }

//       /////////////////////////////////////////////////
//       /// SELECT ALL CHILDRENS
//       // as seen at: http://jsfiddle.net/incutonez/D8vhb/5/
//       function parentCheckChange(item) {
//         for (var i in item.children) {
//           item.children[i].checked = item.checked;
//           var checknode = item.children[i].name;
//           if (item.children[i].checked == true) {
//             if (checknode != '중구' && checknode != '구로구' && checknode != '영등포구' && checknode != '서초구') {
//               console.log(checknode);
//               scope.checknode = checknode;
//             }
//           }
//           if (item.children[i].children) {
//             parentCheckChange(item.children[i]);
//           }
//         }


//       }
//       scope.parentCheckChange = function (node) {

//       }

//       scope.checkChange = function (node) {
//         if (node.children) {
//           parentCheckChange(node);
//         }
//       }
//       /////////////////////////////////////////////////

//       function renderTreeView(collection, level, max) {
//         var text = '';
//         text += '<li ng-repeat="n in ' + collection + '" >';
//         text += '<span ng-show=showIcon(n) class="show-hide" ng-click=showHide(n.id)><i class="fa fa-plus-square"></i></span>';
//         text += '<span ng-show=!showIcon(n) style="padding-right: 13px"></span>';

//         if (hasCheckBox) {
//           text += '<input class="tree-checkbox" type=checkbox ng-model=n.checked ng-change=checkChange(n)>';
//         }


//         text += '<span class="edit" ng-click=localClick({node:n})></span>'


//         text += '<label>{{n.name}}</label>';
//         if ('{{n.checked}}' == true) {
//           text += '<label>{{n.checked}}</label>';
//         }

//         if (level < max) {
//           text += '<ul id="{{n.id}}" class="hide" ng-if=checkIfChildren(n)>' + renderTreeView('n.children', level + 1, max) + '</ul></li>';

//         } else {
//           text += '</li>';
//         }

//         return text;
//       } // end renderTreeView();

//       try {
//         var text = '<ul class="tree-view-wrapper">';
//         text += renderTreeView('localNodes', 1, maxLevels);
//         text += '</ul>';
//         // text += parentCheckChange(node);
//         tElement.html(text);
//         $compile(tElement.contents())(scope);
//       } catch (err) {
//         tElement.html('<b>ERROR!!!</b> - ' + err);
//         $compile(tElement.contents())(scope);
//       }
//     }
//   };
// });

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
      for (var i = 0; i <= 50; i++) {
        if (index == i + 2) {
          // console.log(response.data[i].text);
          $scope.gridOption2 = response.data[i].text;
        }
      }
    });
  }

  // 경보의 주제 gridOption3
  $http({
    method: "GET",
    url: '/message',
    contentType: "application/json",
  }).then(function data(response) {
    $scope.gridOption3 = response.data;
    // console.log("option3 : "+response.data);
    // console.log(response.data[0].headline);
  });

  // 경보의 발령 제목, 위험요인, 요령 불러오기
  $scope.message_event = function () {
    var index = $("#headlineselect option").index($("#headlineselect option:selected"));
    $http({
      method: "GET",
      url: '/message',
      contentType: "application/json",
    }).then(function data(response) {
      for (var i = 0; i <= 50; i++) {
        if (index == i + 2) {
          // console.log(response.data[i].text);
          $scope.gridOption4 = response.data[i].headline;
          $scope.gridOption5 = response.data[i].description;
          $scope.gridOption6 = response.data[i].instruction;
        }
      }
    });
  }

  // 사이렌 종류 불러오기 gridOption6
  $http({
    method: "GET",
    url: '/siren',
    contentType: "application/json",
  }).then(function data(response) {
    $scope.gridOption7 = response.data;
  });

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
    if (tmp) return success();
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
      return success();
    }).error(function (data, status, headers, config) {
      return fail();
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
        width: 900,
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


// 발령 메시지 추가/수정/삭제 
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
        headline: row.headline,
        description: row.description
      }
    }).success(function (data, status, headers, config) {
      return success();
    }).error(function (data, status, headers, config) {
      tmp = false;
      alert("insert fail");
    });

    $http({
      method: 'POST',
      url: '/messageeupdate',
      contentType: "application/json",
      data: {
        no: row.no,
        headline: row.headline,
        description: row.description
      }
    }).success(function (data, status, headers, config) {
      return success();
    }).error(function (data, status, headers, config) {
      tmp = false;
      return fail();
    });
    if (tmp) return success();
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
      return success();
    }).error(function (data, status, headers, config) {
      return fail();
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
        name: 'headline',
        width: 200,
        enableCellEdit: true
      },
      {
        name: 'description',
        width: 300,
        enableCellEdit: true
      },
       {
        name: 'instruction',
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
        name: 'headline',
        width: 200,
        enableCellEdit: true
      },
      {
        name: 'description',
        width: 300,
        enableCellEdit: true
      },
       {
        name: 'instruction',
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
  // console.log('myCtrl5 Open');
  editableOptions.theme = 'bs3'
  var canceler = $q.defer();

  var tableData = [];
  var getData = function () {
    if (user_area == 23) {
      $http({
        method: 'GET',
        url: '/historyincheon',
        contentType: "application/json",
        data: {}
      }).success(function (data, status, headers, config) {
        // console.log(data);
        $scope.virtualGridOptions.data = data;
        $scope.paginationGridOptions.data = data;
      }).error(function (data, status, headers, config) {});
    }

    if (user_area == 32) {
      $http({
        method: 'GET',
        url: '/historygangwon',
        contentType: "application/json",
        data: {}
      }).success(function (data, status, headers, config) {
        // console.log(data);
        $scope.virtualGridOptions.data = data;
        $scope.paginationGridOptions.data = data;
      }).error(function (data, status, headers, config) {});
    }

    if (user_area == 39) {
      $http({
        method: 'GET',
        url: '/historyjeju',
        contentType: "application/json",
        data: {}
      }).success(function (data, status, headers, config) {
        // console.log(data);
        $scope.virtualGridOptions.data = data;
        $scope.paginationGridOptions.data = data;
      }).error(function (data, status, headers, config) {});
    }
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
        width: 200
      },
      {
        name: 'location',
        width: 340
      },
      {
        name: 'alarm_type',
        width: 130
      },
      {
        name: 'communication',
        width: 150
      },
      {
        name: 'tts',
        width: 130
      },
      {
        name: 'tts_text',
        width: 170
      },
      {
        name: 'headline',
        width: 130
      },
      {
        name: 'description',
        width: 150
      },
      {
        name: 'instruction',
        width: 160
      },
      {
        name: 'siren',
        width: 100
      },
      {
        name: 'status',
        width: 100
      }
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
      width: 200
    },
    {
      name: 'location',
      width: 340
    },
    {
      name: 'alarm_type',
      width: 130
    },
    {
      name: 'communication',
      width: 150
    },
    {
      name: 'tts',
      width: 130
    },
    {
      name: 'tts_text',
      width: 170
    },
    {
      name: 'headline',
      width: 130
    },
    {
      name: 'description',
      width: 150
    },
    {
      name: 'instruction',
      width: 160
    },
    {
      name: 'siren',
      width: 100
    },
    {
      name: 'status',
      width: 100
    }
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
    tts_text: '',
    headline: '',
    description: '',
    instruction: '',
    siren: ''
  }]
}]);