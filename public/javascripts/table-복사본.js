var myapp = angular.module('myapp', [

    'ngTouch', 'ngAria', 'ui.grid', 'ui.grid.edit', 'ui.grid.resizeColumns', 'ui.grid.pagination', 'ui.grid.cellNav', 'xeditable'
]);

/////////////////////modify///////////////////////////////////////////

myapp.controller('BasicCtrl', ['$scope', '$http', '$q', function ($scope, $http, $q) {
    $scope.gridOptions1 = {
        enableFiltering: true
    };
    var key = -1;

    var getQuery = function (parm) {
        var temp = window.location.search.substring(1);
        // console.log(temp);
        var tempArr = temp.split('&');
        for (var i = 0; tempArr.length; i++) {
            var keyVal = tempArr[i].split('=');
            if (keyVal[0] == parm) return keyVal[1];
        }
        return null;
    }
    key = getQuery("pageKey");
    //console.log("key : " + key);

    var canceler = $q.defer();

    // from db 데이터 불러오는
    var getData = function (key) {
        if (key == 1) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                // console.log("KEY1 : " + key + data);
                $scope.gridOptions1.data = data;
            });
        } else if (key == 2) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 3) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 4) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 5) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 6) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 7) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 8) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 9) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 10) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 11) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 12) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 13) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 14) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 15) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 16) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 17) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 18) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 19) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 20) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 21) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 22) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 23) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 24) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 25) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 26) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 27) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 28) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 29) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 30) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 31) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 32) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 33) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 34) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 35) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 36) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 37) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 38) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 39) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 40) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 41) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 42) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 43) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 44) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 45) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 46) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 47) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 48) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 49) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 50) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 51) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 52) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        } else if (key == 53) {
            $http.get('/library_db_library_main?key="' + key + '"', {
                timeout: canceler.promise
            }).success(function (data) {
                $scope.gridOptions1.data = data;

                // console.log("KEY2 : " + key + data);
            });
        }


    }
    getData(key);
    $scope.$on('$destroy', function () {
        canceler.resolve();
    });
    $scope.highlightFilteredHeader = function (row, rowRenderIndex, col, colRenderIndex) {
        if (col.filters[0].term) {
            return 'header-filtered';
        } else {
            return '';
        }
    };
}]);


/////////////////////modify///////////////////////////////////////////

myapp.controller('BasicCtrl2', ['$window', '$scope', '$http', '$q', function ($window, $scope, $http, $q) {
    $scope.gridOptions2 = {
        enableFiltering: true
    };
    // console.log("morejs");
    var key = -1;
    var getQuery = function (parm) {
        var temp = window.location.search.substring(1);
        var tempArr = temp.split('&');
        for (var i = 0; tempArr.length; i++) {
            var keyVal = tempArr[i].split('=');
            if (keyVal[0] == parm) return keyVal[1];
        }
        return null;
    }
    key = getQuery("moreKey");

    var canceler = $q.defer();

    function getMoreAddress(key) {
        console.log(key);
        if (key == 1) {
            return '/library_db_product_more?key=' + key;
        } else return '/library_db_product_more?key=' + key;
    }
    // from db 데이터 불러오는
    var getData = function (key) {
        $http.get(getMoreAddress(key), {
            timeout: canceler.promise
        }).success(function (data) {
            // console.log(data);
            $scope.gridOptions2.data = data;
        });
    }
    getData(key);
    $scope.$on('$destroy', function () {
        canceler.resolve();
    });
    $scope.highlightFilteredHeader = function (row, rowRenderIndex, col, colRenderIndex) {
        if (col.filters[0].term) {
            return 'header-filtered';
        } else {
            return '';
        }
    };

    function getSelectValues(select) {
        var result = [];
        var options = select && select.options;
        var opt;
        for (var i = 0, iLen = options.length; i < iLen; i++) {
            opt = options[i];
            if (opt.selected) {
                result.push(opt.value || opt.text);
            }
        }
        return result;
    }
    $scope.jumpResult = function () {
        var selected = $('select#selectOptions').val();
        var url = "result?"
        url += "key=" + key;
        console.log(selected);
        //노가다
        if (selected != null)
            for (var i = 0; i < selected.length; i++) {
                switch (selected[i]) {
                    case "온도측정":
                        url += "&select" + i + "=1";
                        break;
                    case "습도측정":
                        url += "&select" + i + "=2";
                        break;
                    case "조도측정":
                        url += "&select" + i + "=3";
                        break;
                    case "UV측정":
                        url += "&select" + i + "=4";
                        break;
                    case "가스측정":
                        url += "&select" + i + "=5";
                        break;
                    case "심박측정":
                        url += "&select" + i + "=6";
                        break;
                    case "속도측정":
                        url += "&select" + i + "=7";
                        break;
                    case "거리측정":
                        url += "&select" + i + "=8";
                        break;
                    case "압력측정":
                        url += "&select" + i + "=9";
                        break;
                    case "물체감지":
                        url += "&select" + i + "=10";
                        break;
                    case "움직임감지":
                        url += "&select" + i + "=11";
                        break;
                    case "방향감지":
                        url += "&select" + i + "=12";
                        break;
                    case "근거리저속_NFC":
                        url += "&select" + i + "=13";
                        break;
                    case "근거리저속_RFID":
                        url += "&select" + i + "=14";
                        break;
                    case "근거리저속_ZigBee":
                        url += "&select" + i + "=15";
                        break;
                    case "근거리저속_Z-Wave":
                        url += "&select" + i + "=16";
                        break;
                    case "근거리고속_Wi-Fi":
                        url += "&select" + i + "=17";
                        break;
                    case "장거리저속_LoRa":
                        url += "&select" + i + "=18";
                        break;
                    case "장거리저속_SigFox":
                        url += "&select" + i + "=19";
                        break;
                    case "장거리저속_Narrowband":
                        url += "&select" + i + "=20";
                        break;
                    case "장거리고속_LTE":
                        url += "&select" + i + "=21";
                        break;
                    case "저성능":
                        url += "&select" + i + "=22";
                        break;
                    case "중성능":
                        url += "&select" + i + "=23";
                        break;
                    case "고성능":
                        url += "&select" + i + "=24";
                        break;
                    case "진동경보":
                        url += "&select" + i + "=25";
                        break;
                    case "소리경보":
                        url += "&select" + i + "=26";
                        break;
                    case "문구경보":
                        url += "&select" + i + "=27";
                        break;
                    case "음성안내경보":
                        url += "&select" + i + "=28";
                        break;
                    case "LED깜박임경보":
                        url += "&select" + i + "=29";
                        break;
                }
            }
        //alert(url);
        $window.location.href = url;
    }
}]);
///////////////////////////////3sensor//////////////////////////////////////////////
myapp.controller('BasicCtrl3', ['$scope', '$http', '$q', 'uiGridConstants', 'editableOptions', function ($scope, $http, $q, uiGridConstants, editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    var canceler = $q.defer();
    $scope.submit = function (row) {
        var tmp = true;
        $http({
            method: 'POST',
            url: '/sensorinsert',
            contentType: "application/json",
            data: {
                No: row.No,
                category_1: row.category_1,
                category_2: row.category_2,
                target: row.target,
                model_name: row.model_name,
                manufacturer: row.manufacturer,
                manufacturing_country: row.manufacturing_country,
                link: row.link,
                measurement_range: row.measurement_range,
                price: row.price,
                img_url: row.img_url,
                form: row.form,
                size_x_mm: row.size_x_mm,
                size_y_mm: row.size_y_mm,
                size_z_mm: row.size_z_mm,
                operating_temperature_range: row.operating_temperature_range,
                output: row.output,
                interface_: row.interface_,
                Frequency: row.Frequency,
                note: row.note,
                datasheet_link: row.datasheet_link
            }
        }).success(function (data, status, headers, config) {
            //alert("insert success");
        }).error(function (data, status, headers, config) {
            tmp = false;
            alert("insert fail");
        });
        $http({
            method: 'POST',
            url: '/sensorupdate',
            contentType: "application/json",
            data: {
                No: row.No,
                category_1: row.category_1,
                category_2: row.category_2,
                target: row.target,
                model_name: row.model_name,
                manufacturer: row.manufacturer,
                manufacturing_country: row.manufacturing_country,
                link: row.link,
                measurement_range: row.measurement_range,
                price: row.price,
                img_url: row.img_url,
                form: row.form,
                size_x_mm: row.size_x_mm,
                size_y_mm: row.size_y_mm,
                size_z_mm: row.size_z_mm,
                operating_temperature_range: row.operating_temperature_range,
                output: row.output,
                interface_: row.interface_,
                Frequency: row.Frequency,
                note: row.note,
                datasheet_link: row.datasheet_link
            }
        }).success(function (data, status, headers, config) {
            //alert("update success");
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
            url: '/sensordelete',
            contentType: "application/json",
            data: {
                No: row.No,
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
            url: '/sensor',
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: true,
        columnDefs: [{
                name: 'No',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'category_1',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'category_2',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'target',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'model_name',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'manufacturer',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'manufacturing_country',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'link',
                width: 100,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.link}}" target="_blank">Web Site</a> </div>'
            },
            {
                name: 'measurement_range',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'price',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'img_url',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.img_url}}" target="_blank">View Image</a> </div>'
            },
            {
                name: 'form',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'size_x_mm',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'size_y_mm',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'size_z_mm',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'operating_temperature_range',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'output',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'interface_',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'Frequency',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'note',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'datasheet_link',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.datasheet_link}}" target="_blank">Click Here</a> </div>'
            },
            {
                name: 'Buttons',
                width: 160,
                enableCellEdit: false,
                cellTemplate: '<button type="submit" class="btn btn-primary" style ="width:80px;" ng-click="grid.appScope.submit(row.entity)">Save</button><button type="button" type="remove" class="btn btn-danger"style ="width:80px;" ng-click="grid.appScope.remove(row.entity)">Delete</button>'
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: false,
        columnDefs: [{
                name: 'No',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'category_1',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'category_2',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'target',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'model_name',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'manufacturer',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'manufacturing_country',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'link',
                width: 100,
                enableCellEdit: true
            },
            {
                name: 'measurement_range',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'price',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'img_url',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'form',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'size_x_mm',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'size_y_mm',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'size_z_mm',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'operating_temperature_range',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'output',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'interface_',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'Frequency',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'note',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'datasheet_link',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'Buttons',
                width: 120,
                enableCellEdit: false,
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
        No: '',
        category_1: '',
        category_2: '',
        target: '',
        form: '',
        img_URL: '',
        model_name: '',
        link: '',
        price: '',
        manufacturer: '',
        manufacturing_country: '',
        size_x_mm: '',
        size_y_mm: '',
        size_z_mm: '',
        operating_temperature_range: '',
        output: '',
        interface_: '',
        Frequency: '',
        measurement_range: '',
        note: '',
        datasheet_link: '',
                }]
}]);
///////////////////////////////3sensor//////////////////////////////////////////////
///////////////////////////////4mcu//////////////////////////////////////////////
myapp.controller('BasicCtrl4', ['$scope', '$http', '$q', 'uiGridConstants', 'editableOptions', function ($scope, $http, $q, uiGridConstants, editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    var canceler = $q.defer();
    $scope.submit = function (row) {
        var tmp = true;
        $http({
            method: 'POST',
            url: '/mcuinsert',
            contentType: "application/json",
            data: {
                No: row.No,
                series: row.series,
                model_name: row.model_name,
                manufacturer: row.manufacturer,
                manufacturing_country: row.manufacturing_country,
                link: row.link,
                core_processor: row.core_processor,
                core_size: row.core_size,
                price: row.price,
                shape: row.shape,
                img_url: row.img_url,
                size_x_mm: row.size_x_mm,
                size_y_mm: row.size_y_mm,
                size_z_mm: row.size_z_mm,
                operating_temperature_range: row.operating_temperature_range,
                usb_modules: row.usb_modules,
                interface_: row.interface_,
                program_memory_type: row.program_memory_type,
                program_memory_size: row.program_memory_size,
                EEPROM_size: row.EEPROM_size,
                FRAM_size: row.FRAM_size,
                SRAM_size: row.SRAM_size,
                Frequency: row.Frequency,
                package_: row.package_,
                datasheet_link: row.datasheet_link
            }
        }).success(function (data, status, headers, config) {
            //alert("insert success");
        }).error(function (data, status, headers, config) {
            tmp = false;
            alert("insert fail");
        });
        $http({
            method: 'POST',
            url: '/mcuupdate',
            contentType: "application/json",
            data: {
                No: row.No,
                series: row.series,
                model_name: row.model_name,
                manufacturer: row.manufacturer,
                manufacturing_country: row.manufacturing_country,
                link: row.link,
                core_processor: row.core_processor,
                core_size: row.core_size,
                price: row.price,
                shape: row.shape,
                img_url: row.img_url,
                size_x_mm: row.size_x_mm,
                size_y_mm: row.size_y_mm,
                size_z_mm: row.size_z_mm,
                operating_temperature_range: row.operating_temperature_range,
                usb_modules: row.usb_modules,
                interface_: row.interface_,
                program_memory_type: row.program_memory_type,
                program_memory_size: row.program_memory_size,
                EEPROM_size: row.EEPROM_size,
                FRAM_size: row.FRAM_size,
                SRAM_size: row.SRAM_size,
                Frequency: row.Frequency,
                package_: row.package_,
                datasheet_link: row.datasheet_link
            }
        }).success(function (data, status, headers, config) {
            //alert("update success");
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
            url: '/mcudelete',
            contentType: "application/json",
            data: {
                No: row.No,
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
            url: '/mcu',
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: true,
        columnDefs: [{
                name: 'No',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'series',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'model_name',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'manufacturer',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'manufacturing_country',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'link',
                width: 100,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.link}}" target="_blank">Web Site</a> </div>'
            },
            {
                name: 'core_processor',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'core_size',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'price',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'shape',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'img_url',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.img_url}}" target="_blank">View Image</a> </div>'
            },
            {
                name: 'size_x_mm',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'size_y_mm',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'size_z_mm',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'operating_temperature_range',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'usb_modules',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'interface_',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'program_memory_type',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'program_memory_size',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'EEPROM_size',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'FRAM_size',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'SRAM_size',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'Frequency',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'package_',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'datasheet_link',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.datasheet_link}}" target="_blank">Click Here</a> </div>'
            },
            {
                name: 'Buttons',
                width: 160,
                enableCellEdit: false,
                cellTemplate: '<button type="submit" class="btn btn-primary" style ="width:80px;" ng-click="grid.appScope.submit(row.entity)">Save</button><button type="button" type="remove" class="btn btn-danger"style ="width:80px;" ng-click="grid.appScope.remove(row.entity)">Delete</button>'
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: false,
        columnDefs: [{
                name: 'No',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'series',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'model_name',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'manufacturer',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'manufacturing_country',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'link',
                width: 100,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.link}}" target="_blank">Web Site</a> </div>'
            },
            {
                name: 'core_processor',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'core_size',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'price',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'shape',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'img_url',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.img_url}}" target="_blank">View Image</a> </div>'
            },
            {
                name: 'size_x_mm',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'size_y_mm',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'size_z_mm',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'operating_temperature_range',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'usb_modules',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'interface_',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'program_memory_type',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'program_memory_size',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'EEPROM_size',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'FRAM_size',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'SRAM_size',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'Frequency',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'package_',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'datasheet_link',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.datasheet_link}}" target="_blank">Click Here</a> </div>'
            },
            {
                name: 'Buttons',
                width: 120,
                enableCellEdit: false,
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
        No: '',
        series: '',
        model_name: '',
        manufacturer: '',
        manufacturing_country: '',
        link: '',
        core_processor: '',
        core_size: '',
        price: '',
        shape: '',
        img_url: '',
        size_x_mm: '',
        size_y_mm: '',
        size_z_mm: '',
        operating_temperature_range: '',
        usb_modules: '',
        interface_: '',
        program_memory_type: '',
        program_memory_size: '',
        EEPROM_size: '',
        FRAM_size: '',
        SRAM_size: '',
        Frequency: '',
        package_: '',
        datasheet_link: ''
                }]
}]);
///////////////////////////////4mcu//////////////////////////////////////////////
///////////////////////////////5openhardware//////////////////////////////////////////////
myapp.controller('BasicCtrl5', ['$scope', '$http', '$q', 'uiGridConstants', 'editableOptions', function ($scope, $http, $q, uiGridConstants, editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    var canceler = $q.defer();
    $scope.submit = function (row) {
        var tmp = true;
        $http({
            method: 'POST',
            url: '/openhardwareinsert',
            contentType: "application/json",
            data: {
                No: row.No,
                open_hw: row.open_hw,
                name: row.name,
                img_url: row.img_url,
                link: row.link,
                price: row.price,
                features: row.features,
                size_x_mm: row.size_x_mm,
                size_y_mm: row.size_y_mm,
                size_z_mm: row.size_z_mm,
                weight_g: row.weight_g,
                memory: row.memory,
                bluetooth: row.bluetooth,
                wifi: row.wifi,
                NFC: row.NFC,
                usb_port: row.usb_port,
                operating_system: row.operating_system,
                interface_: row.interface_,
                processor: row.processor
            }
        }).success(function (data, status, headers, config) {
            //alert("insert success");
        }).error(function (data, status, headers, config) {
            tmp = false;
            alert("insert fail");
        });
        $http({
            method: 'POST',
            url: '/openhardwareupdate',
            contentType: "application/json",
            data: {
                No: row.No,
                open_hw: row.open_hw,
                name: row.name,
                img_url: row.img_url,
                link: row.link,
                price: row.price,
                features: row.features,
                size_x_mm: row.size_x_mm,
                size_y_mm: row.size_y_mm,
                size_z_mm: row.size_z_mm,
                weight_g: row.weight_g,
                memory: row.memory,
                bluetooth: row.bluetooth,
                wifi: row.wifi,
                NFC: row.NFC,
                usb_port: row.usb_port,
                operating_system: row.operating_system,
                interface_: row.interface_,
                processor: row.processor
            }
        }).success(function (data, status, headers, config) {
            //alert("update success");
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
            url: '/openhardwaredelete',
            contentType: "application/json",
            data: {
                No: row.No,
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
            url: '/openhardware',
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: true,
        columnDefs: [{
                name: 'No',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'open_hw',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'name',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'img_url',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.img_url}}" target="_blank">View Image</a> </div>'
            },
            {
                name: 'link',
                width: 100,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.link}}" target="_blank">Web Site</a> </div>'
            },
            {
                name: 'price',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'features',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'size_x_mm',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'size_y_mm',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'size_z_mm',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'weight_g',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'memory',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'bluetooth',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'wifi',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'NFC',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'usb_port',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'operating_system',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'interface_',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'processor',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'Buttons',
                width: 160,
                enableCellEdit: false,
                cellTemplate: '<button type="submit" class="btn btn-primary" style ="width:80px;" ng-click="grid.appScope.submit(row.entity)">Save</button><button type="button" type="remove" class="btn btn-danger"style ="width:80px;" ng-click="grid.appScope.remove(row.entity)">Delete</button>'
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: false,
        columnDefs: [{
                name: 'No',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'open_hw',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'name',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'img_url',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'link',
                width: 100,
                enableCellEdit: true
            },
            {
                name: 'price',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'features',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'size_x_mm',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'size_y_mm',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'size_z_mm',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'weight_g',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'memory',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'bluetooth',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'wifi',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'NFC',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'usb_port',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'operating_system',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'interface_',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'processor',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'Buttons',
                width: 120,
                enableCellEdit: false,
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
        No: '',
        open_hw: '',
        name: '',
        img_url: '',
        link: '',
        price: '',
        features: '',
        size_x_mm: '',
        size_y_mm: '',
        size_z_mm: '',
        weight_g: '',
        memory: '',
        bluetooth: '',
        wifi: '',
        NFC: '',
        usb_port: '',
        operating_system: '',
        interface_: '',
        processor: ''
                }]
}]);
///////////////////////////////5openhardware//////////////////////////////////////////////
///////////////////////////////6product//////////////////////////////////////////////
myapp.controller('BasicCtrl6', ['$scope', '$http', '$q', 'uiGridConstants', 'editableOptions', function ($scope, $http, $q, uiGridConstants, editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    var canceler = $q.defer();
    $scope.submit = function (row) {
        var tmp = true;
        $http({
            method: 'POST',
            url: '/productinsert',
            contentType: "application/json",
            data: {
                No: row.No,
                category_1: row.category_1,
                category_2: row.category_2,
                category_3: row.category_3,
                img_url: row.img_url,
                img_file: row.img_file,
                product_name_En: row.product_name_En,
                product_name_Ko: row.product_name_Ko,
                model_name: row.model_name,
                manufacturer_En: row.manufacturer_En,
                manufacturer_Ko: row.manufacturer_Ko,
                country_En: row.country_En,
                country_Ko: row.country_Ko,
                release_date: row.release_date,
                price: row.price,
                color: row.color,
                shape: row.shape,
                material: row.material,
                size_x_mm: row.size_x_mm,
                size_y_mm: row.size_y_mm,
                size_z_mm: row.size_z_mm,
                weight_g: row.weight_g,
                battery_life: row.battery_life,
                sensor: row.sensor,
                communication: row.communication,
                explanation: row.explanation,
                description: row.description,
                site: row.site,
                exhibition: row.exhibition
            }
        }).success(function (data, status, headers, config) {
            //alert("insert success");
        }).error(function (data, status, headers, config) {
            tmp = false;
            alert("insert fail");
        });
        $http({
            method: 'POST',
            url: '/productupdate',
            contentType: "application/json",
            data: {
                No: row.No,
                category_1: row.category_1,
                category_2: row.category_2,
                category_3: row.category_3,
                img_url: row.img_url,
                img_file: row.img_file,
                product_name_En: row.product_name_En,
                product_name_Ko: row.product_name_Ko,
                model_name: row.model_name,
                manufacturer_En: row.manufacturer_En,
                manufacturer_Ko: row.manufacturer_Ko,
                country_En: row.country_En,
                country_Ko: row.country_Ko,
                release_date: row.release_date,
                price: row.price,
                color: row.color,
                shape: row.shape,
                material: row.material,
                size_x_mm: row.size_x_mm,
                size_y_mm: row.size_y_mm,
                size_z_mm: row.size_z_mm,
                weight_g: row.weight_g,
                battery_life: row.battery_life,
                sensor: row.sensor,
                communication: row.communication,
                explanation: row.explanation,
                description: row.description,
                site: row.site,
                exhibition: row.exhibition
            }
        }).success(function (data, status, headers, config) {
            //alert("update success");
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
            url: '/productdelete',
            contentType: "application/json",
            data: {
                No: row.No,
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
            url: '/product',
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: true,
        columnDefs: [{
                name: 'No',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'category_1',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'category_2',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'category_3',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'img_url',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.img_url}}" target="_blank">View Image</a> </div>'
            },
            {
                name: 'img_file',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'product_name_En',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'product_name_Ko',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'model_name',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'manufacturer_En',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'manufacturer_Ko',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'country_En',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'country_Ko',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'release_date',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'price',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'color',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'shape',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'material',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'size_x_mm',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'size_y_mm',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'size_z_mm',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'weight_g',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'battery_life',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'sensor',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'communication',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'explanation',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'description',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'site',
                width: 100,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.site}}" target="_blank">Web Site</a> </div>'
            },
            {
                name: 'exhibition',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'Buttons',
                width: 160,
                enableCellEdit: false,
                cellTemplate: '<button type="submit" class="btn btn-primary" style ="width:80px;" ng-click="grid.appScope.submit(row.entity)">Save</button><button type="button" type="remove" class="btn btn-danger"style ="width:80px;" ng-click="grid.appScope.remove(row.entity)">Delete</button>'
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: false,
        columnDefs: [{
                name: 'No',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'category_1',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'category_2',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'category_3',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'img_url',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'img_file',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'product_name_En',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'product_name_Ko',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'model_name',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'manufacturer_En',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'manufacturer_Ko',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'country_En',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'country_Ko',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'release_date',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'price',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'color',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'shape',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'material',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'size_x_mm',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'size_y_mm',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'size_z_mm',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'weight_g',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'battery_life',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'sensor',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'communication',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'explanation',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'description',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'site',
                width: 100,
                enableCellEdit: true
            },
            {
                name: 'exhibition',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'Buttons',
                width: 120,
                enableCellEdit: false,
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
        No: '',
        category_1: '',
        category_2: '',
        category_3: '',
        img_url: '',
        img_file: '',
        product_name_En: '',
        product_name_Ko: '',
        model_name: '',
        manufacturer_En: '',
        manufacturer_Ko: '',
        country_En: '',
        country_Ko: '',
        release_date: '',
        price: '',
        color: '',
        shape: '',
        material: '',
        size_x_mm: '',
        size_y_mm: '',
        size_z_mm: '',
        weight_g: '',
        battery_life: '',
        sensor: '',
        communication: '',
        explanation: '',
        description: '',
        site: '',
        exhibition: ''
                }]
}]);
///////////////////////////////6product//////////////////////////////////////////////
///////////////////////////////7communcation//////////////////////////////////////////////
myapp.controller('BasicCtrl7', ['$scope', '$http', '$q', 'uiGridConstants', 'editableOptions', function ($scope, $http, $q, uiGridConstants, editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    var canceler = $q.defer();
    $scope.submit = function (row) {
        var tmp = true;
        $http({
            method: 'POST',
            url: '/communicationinsert',
            contentType: "application/json",
            data: {
                No: row.No,
                category_1: row.category_1,
                category_2: row.category_2,
                model_name: row.model_name,
                manufacturer: row.manufacturer,
                manufacturing_country: row.manufacturing_country,
                link: row.link,
                range_m: row.range_m,
                price: row.price,
                shape: row.shape,
                img_url: row.img_url,
                size_x_mm: row.size_x_mm,
                size_y_mm: row.size_y_mm,
                size_z_mm: row.size_z_mm,
                operating_temperature_range: row.operating_temperature_range,
                core_processor: row.core_processor,
                core_size: row.core_size,
                interface_: row.interface_,
                program_memory_type: row.program_memory_type,
                program_memory_size: row.program_memory_size,
                EEPROM_size: row.EEPROM_size,
                FRAM_size: row.FRAM_size,
                SRAM_size: row.SRAM_size,
                Frequency: row.Frequency,
                standards: row.standards,
                output_power: row.output_power,
                Antenna: row.Antenna,
                datasheet_link: row.datasheet_link
            }
        }).success(function (data, status, headers, config) {
            //alert("insert success");
        }).error(function (data, status, headers, config) {
            tmp = false;
            alert("insert fail");
        });
        $http({
            method: 'POST',
            url: '/communicationupdate',
            contentType: "application/json",
            data: {
                No: row.No,
                category_1: row.category_1,
                category_2: row.category_2,
                model_name: row.model_name,
                manufacturer: row.manufacturer,
                manufacturing_country: row.manufacturing_country,
                link: row.link,
                range_m: row.range_m,
                price: row.price,
                shape: row.shape,
                img_url: row.img_url,
                size_x_mm: row.size_x_mm,
                size_y_mm: row.size_y_mm,
                size_z_mm: row.size_z_mm,
                operating_temperature_range: row.operating_temperature_range,
                core_processor: row.core_processor,
                core_size: row.core_size,
                interface_: row.interface_,
                program_memory_type: row.program_memory_type,
                program_memory_size: row.program_memory_size,
                EEPROM_size: row.EEPROM_size,
                FRAM_size: row.FRAM_size,
                SRAM_size: row.SRAM_size,
                Frequency: row.Frequency,
                standards: row.standards,
                output_power: row.output_power,
                Antenna: row.Antenna,
                datasheet_link: row.datasheet_link
            }
        }).success(function (data, status, headers, config) {
            //alert("update success");
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
            url: '/communicationdelete',
            contentType: "application/json",
            data: {
                No: row.No,
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
            url: '/communication',
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: true,
        columnDefs: [{
                name: 'No',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'category_1',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'category_2',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'model_name',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'manufacturer',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'manufacturing_country',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'link',
                width: 100,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.link}}" target="_blank">Web Site</a> </div>'
            },
            {
                name: 'range_m',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'price',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'shape',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'img_url',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.img_url}}" target="_blank">View Image</a> </div>'
            },
            {
                name: 'size_x_mm',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'size_y_mm',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'size_z_mm',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'operating_temperature_range',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'core_processor',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'core_size',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'interface_',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'program_memory_type',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'program_memory_size',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'EEPROM_size',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'FRAM_size',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'SRAM_size',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'Frequency',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'standards',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'output_power',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'Antenna',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'datasheet_link',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.datasheet_link}}" target="_blank">Click Here</a> </div>'
            },
            {
                name: 'Buttons',
                width: 160,
                enableCellEdit: false,
                cellTemplate: '<button type="submit" class="btn btn-primary" style ="width:80px;" ng-click="grid.appScope.submit(row.entity)">Save</button><button type="button" type="remove" class="btn btn-danger"style ="width:80px;" ng-click="grid.appScope.remove(row.entity)">Delete</button>'
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: false,
        columnDefs: [{
                name: 'No',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'category_1',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'category_2',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'model_name',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'manufacturer',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'manufacturing_country',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'link',
                width: 100,
                enableCellEdit: true
            },
            {
                name: 'range_m',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'price',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'shape',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'img_url',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'size_x_mm',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'size_y_mm',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'size_z_mm',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'operating_temperature_range',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'core_processor',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'core_size',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'interface_',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'program_memory_type',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'program_memory_size',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'EEPROM_size',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'FRAM_size',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'SRAM_size',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'Frequency',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'standards',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'output_power',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'Antenna',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'datasheet_link',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'Buttons',
                width: 120,
                enableCellEdit: false,
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
        No: '',
        category_1: '',
        category_2: '',
        model_name: '',
        manufacturer: '',
        manufacturing_country: '',
        link: '',
        range_m: '',
        price: '',
        shape: '',
        img_url: '',
        size_x_mm: '',
        size_y_mm: '',
        size_z_mm: '',
        operating_temperature_range: '',
        core_processor: '',
        core_size: '',
        interface_: '',
        program_memory_type: '',
        program_memory_size: '',
        EEPROM_size: '',
        FRAM_size: '',
        SRAM_size: '',
        Frequency: '',
        standards: '',
        output_power: '',
        Antenna: '',
        datasheet_link: ''
                }]
}]);
///////////////////////////////7communcation//////////////////////////////////////////////
///////////////////////////////8opensoftware//////////////////////////////////////////////
myapp.controller('BasicCtrl8', ['$scope', '$http', '$q', 'uiGridConstants', 'editableOptions', function ($scope, $http, $q, uiGridConstants, editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    var canceler = $q.defer();
    $scope.submit = function (row) {
        var tmp = true;
        $http({
            method: 'POST',
            url: '/opensoftwareinsert',
            contentType: "application/json",
            data: {
                No: row.No,
                open_sw: row.open_sw,
                developer: row.developer,
                link: row.link,
                features: row.features,
                funtion: row.funtion,
                operating_system: row.operating_system,
                license: row.license,
                license_management_agency: row.license_management_agency,
                license_mandatory: row.license_mandatory
            }
        }).success(function (data, status, headers, config) {
            //alert("insert success");
        }).error(function (data, status, headers, config) {
            tmp = false;
            alert("insert fail");
        });
        $http({
            method: 'POST',
            url: '/opensoftwareupdate',
            contentType: "application/json",
            data: {
                No: row.No,
                open_sw: row.open_sw,
                developer: row.developer,
                link: row.link,
                features: row.features,
                funtion: row.funtion,
                operating_system: row.operating_system,
                license: row.license,
                license_management_agency: row.license_management_agency,
                license_mandatory: row.license_mandatory
            }
        }).success(function (data, status, headers, config) {
            //alert("update success");
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
            url: '/opensoftwaredelete',
            contentType: "application/json",
            data: {
                No: row.No,
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
            url: '/opensoftware',
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: true,
        columnDefs: [{
                name: 'No',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'open_sw',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'developer',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'link',
                width: 100,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.link}}" target="_blank">Web Site</a> </div>'
            },
            {
                name: 'features',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'funtion',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'operating_system',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'license',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'license_management_agency',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'license_mandatory',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'Buttons',
                width: 160,
                enableCellEdit: false,
                cellTemplate: '<button type="submit" class="btn btn-primary" style ="width:80px;" ng-click="grid.appScope.submit(row.entity)">Save</button><button type="button" type="remove" class="btn btn-danger"style ="width:80px;" ng-click="grid.appScope.remove(row.entity)">Delete</button>'
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: false,
        columnDefs: [{
                name: 'No',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'open_sw',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'developer',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'link',
                width: 100,
                enableCellEdit: true
            },
            {
                name: 'features',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'funtion',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'operating_system',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'license',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'license_management_agency',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'license_mandatory',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'Buttons',
                width: 120,
                enableCellEdit: false,
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
        No: '',
        open_sw: '',
        developer: '',
        link: '',
        features: '',
        funtion: '',
        operating_system: '',
        license: '',
        license_management_agency: '',
        license_mandatory: ''
                }]
}]);
///////////////////////////////8opensoftware
///////////////////////////////10sensor//////////////////////////////////////////////
myapp.controller('BasicCtrl10', ['$scope', '$http', '$q', 'uiGridConstants', 'editableOptions', function ($scope, $http, $q, uiGridConstants, editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    var canceler = $q.defer();
    $scope.submit = function (row) {
        var tmp = true;
        $http({
            method: 'POST',
            url: '/sensorinsert',
            contentType: "application/json",
            data: {
                No: row.No,
                category_1: row.category_1,
                category_2: row.category_2,
                target: row.target,
                model_name: row.model_name,
                manufacturer: row.manufacturer,
                manufacturing_country: row.manufacturing_country,
                link: row.link,
                measurement_range: row.measurement_range,
                price: row.price,
                img_url: row.img_url,
                form: row.form,
                size_x_mm: row.size_x_mm,
                size_y_mm: row.size_y_mm,
                size_z_mm: row.size_z_mm,
                operating_temperature_range: row.operating_temperature_range,
                output: row.output,
                interface_: row.interface_,
                Frequency: row.Frequency,
                note: row.note,
                datasheet_link: row.datasheet_link
            }
        }).success(function (data, status, headers, config) {
            //alert("insert success");
        }).error(function (data, status, headers, config) {
            tmp = false;
            alert("insert fail");
        });
        $http({
            method: 'POST',
            url: '/sensorupdate',
            contentType: "application/json",
            data: {
                No: row.No,
                category_1: row.category_1,
                category_2: row.category_2,
                target: row.target,
                model_name: row.model_name,
                manufacturer: row.manufacturer,
                manufacturing_country: row.manufacturing_country,
                link: row.link,
                measurement_range: row.measurement_range,
                price: row.price,
                img_url: row.img_url,
                form: row.form,
                size_x_mm: row.size_x_mm,
                size_y_mm: row.size_y_mm,
                size_z_mm: row.size_z_mm,
                operating_temperature_range: row.operating_temperature_range,
                output: row.output,
                interface_: row.interface_,
                Frequency: row.Frequency,
                note: row.note,
                datasheet_link: row.datasheet_link
            }
        }).success(function (data, status, headers, config) {
            //alert("update success");
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
            url: '/sensordelete',
            contentType: "application/json",
            data: {
                No: row.No,
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
            url: '/sensor',
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: true,
        columnDefs: [{
                name: 'No',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'category_1',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'category_2',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'target',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'model_name',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'manufacturer',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'manufacturing_country',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'link',
                width: 100,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.link}}" target="_blank">Web Site</a> </div>'
            },
            {
                name: 'measurement_range',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'price',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'img_url',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.img_url}}" target="_blank">View Image</a> </div>'
            },
            {
                name: 'form',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'size_x_mm',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'size_y_mm',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'size_z_mm',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'operating_temperature_range',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'output',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'interface_',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'Frequency',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'note',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'datasheet_link',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.datasheet_link}}" target="_blank">Click Here</a> </div>'
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: false,
        columnDefs: [{
                name: 'No',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'category_1',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'category_2',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'target',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'model_name',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'manufacturer',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'manufacturing_country',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'link',
                width: 100,
                enableCellEdit: true
            },
            {
                name: 'measurement_range',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'price',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'img_url',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'form',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'size_x_mm',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'size_y_mm',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'size_z_mm',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'operating_temperature_range',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'output',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'interface_',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'Frequency',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'note',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'datasheet_link',
                width: 120,
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
        No: '',
        category_1: '',
        category_2: '',
        target: '',
        form: '',
        img_URL: '',
        model_name: '',
        link: '',
        price: '',
        manufacturer: '',
        manufacturing_country: '',
        size_x_mm: '',
        size_y_mm: '',
        size_z_mm: '',
        operating_temperature_range: '',
        output: '',
        interface_: '',
        Frequency: '',
        measurement_range: '',
        note: '',
        datasheet_link: '',
                }]
}]);
///////////////////////////////10sensor//////////////////////////////////////////////
///////////////////////////////11mcu//////////////////////////////////////////////
myapp.controller('BasicCtrl11', ['$scope', '$http', '$q', 'uiGridConstants', 'editableOptions', function ($scope, $http, $q, uiGridConstants, editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    var canceler = $q.defer();
    $scope.submit = function (row) {
        var tmp = true;
        $http({
            method: 'POST',
            url: '/mcuinsert',
            contentType: "application/json",
            data: {
                No: row.No,
                series: row.series,
                model_name: row.model_name,
                manufacturer: row.manufacturer,
                manufacturing_country: row.manufacturing_country,
                link: row.link,
                core_processor: row.core_processor,
                core_size: row.core_size,
                price: row.price,
                shape: row.shape,
                img_url: row.img_url,
                size_x_mm: row.size_x_mm,
                size_y_mm: row.size_y_mm,
                size_z_mm: row.size_z_mm,
                operating_temperature_range: row.operating_temperature_range,
                usb_modules: row.usb_modules,
                interface_: row.interface_,
                program_memory_type: row.program_memory_type,
                program_memory_size: row.program_memory_size,
                EEPROM_size: row.EEPROM_size,
                FRAM_size: row.FRAM_size,
                SRAM_size: row.SRAM_size,
                Frequency: row.Frequency,
                package_: row.package_,
                datasheet_link: row.datasheet_link
            }
        }).success(function (data, status, headers, config) {
            //alert("insert success");
        }).error(function (data, status, headers, config) {
            tmp = false;
            alert("insert fail");
        });
        $http({
            method: 'POST',
            url: '/mcuupdate',
            contentType: "application/json",
            data: {
                No: row.No,
                series: row.series,
                model_name: row.model_name,
                manufacturer: row.manufacturer,
                manufacturing_country: row.manufacturing_country,
                link: row.link,
                core_processor: row.core_processor,
                core_size: row.core_size,
                price: row.price,
                shape: row.shape,
                img_url: row.img_url,
                size_x_mm: row.size_x_mm,
                size_y_mm: row.size_y_mm,
                size_z_mm: row.size_z_mm,
                operating_temperature_range: row.operating_temperature_range,
                usb_modules: row.usb_modules,
                interface_: row.interface_,
                program_memory_type: row.program_memory_type,
                program_memory_size: row.program_memory_size,
                EEPROM_size: row.EEPROM_size,
                FRAM_size: row.FRAM_size,
                SRAM_size: row.SRAM_size,
                Frequency: row.Frequency,
                package_: row.package_,
                datasheet_link: row.datasheet_link
            }
        }).success(function (data, status, headers, config) {
            //alert("update success");
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
            url: '/mcudelete',
            contentType: "application/json",
            data: {
                No: row.No,
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
            url: '/mcu',
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: true,
        columnDefs: [{
                name: 'No',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'series',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'model_name',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'manufacturer',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'manufacturing_country',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'link',
                width: 100,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.link}}" target="_blank">Web Site</a> </div>'
            },
            {
                name: 'core_processor',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'core_size',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'price',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'shape',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'img_url',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.img_url}}" target="_blank">View Image</a> </div>'
            },
            {
                name: 'size_x_mm',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'size_y_mm',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'size_z_mm',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'operating_temperature_range',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'usb_modules',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'interface_',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'program_memory_type',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'program_memory_size',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'EEPROM_size',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'FRAM_size',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'SRAM_size',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'Frequency',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'package_',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'datasheet_link',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.datasheet_link}}" target="_blank">Click Here</a> </div>'
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: false,
        columnDefs: [{
                name: 'No',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'series',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'model_name',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'manufacturer',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'manufacturing_country',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'link',
                width: 100,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.link}}" target="_blank">Web Site</a> </div>'
            },
            {
                name: 'core_processor',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'core_size',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'price',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'shape',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'img_url',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.img_url}}" target="_blank">View Image</a> </div>'
            },
            {
                name: 'size_x_mm',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'size_y_mm',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'size_z_mm',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'operating_temperature_range',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'usb_modules',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'interface_',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'program_memory_type',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'program_memory_size',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'EEPROM_size',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'FRAM_size',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'SRAM_size',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'Frequency',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'package_',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'datasheet_link',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.datasheet_link}}" target="_blank">Click Here</a> </div>'
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
        No: '',
        series: '',
        model_name: '',
        manufacturer: '',
        manufacturing_country: '',
        link: '',
        core_processor: '',
        core_size: '',
        price: '',
        shape: '',
        img_url: '',
        size_x_mm: '',
        size_y_mm: '',
        size_z_mm: '',
        operating_temperature_range: '',
        usb_modules: '',
        interface_: '',
        program_memory_type: '',
        program_memory_size: '',
        EEPROM_size: '',
        FRAM_size: '',
        SRAM_size: '',
        Frequency: '',
        package_: '',
        datasheet_link: ''
                }]
}]);
///////////////////////////////11mcu//////////////////////////////////////////////
///////////////////////////////12openhardware//////////////////////////////////////////////
myapp.controller('BasicCtrl12', ['$scope', '$http', '$q', 'uiGridConstants', 'editableOptions', function ($scope, $http, $q, uiGridConstants, editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    var canceler = $q.defer();
    $scope.submit = function (row) {
        var tmp = true;
        $http({
            method: 'POST',
            url: '/openhardwareinsert',
            contentType: "application/json",
            data: {
                No: row.No,
                open_hw: row.open_hw,
                name: row.name,
                img_url: row.img_url,
                link: row.link,
                price: row.price,
                features: row.features,
                size_x_mm: row.size_x_mm,
                size_y_mm: row.size_y_mm,
                size_z_mm: row.size_z_mm,
                weight_g: row.weight_g,
                memory: row.memory,
                bluetooth: row.bluetooth,
                wifi: row.wifi,
                NFC: row.NFC,
                usb_port: row.usb_port,
                operating_system: row.operating_system,
                interface_: row.interface_,
                processor: row.processor
            }
        }).success(function (data, status, headers, config) {
            //alert("insert success");
        }).error(function (data, status, headers, config) {
            tmp = false;
            alert("insert fail");
        });
        $http({
            method: 'POST',
            url: '/openhardwareupdate',
            contentType: "application/json",
            data: {
                No: row.No,
                open_hw: row.open_hw,
                name: row.name,
                img_url: row.img_url,
                link: row.link,
                price: row.price,
                features: row.features,
                size_x_mm: row.size_x_mm,
                size_y_mm: row.size_y_mm,
                size_z_mm: row.size_z_mm,
                weight_g: row.weight_g,
                memory: row.memory,
                bluetooth: row.bluetooth,
                wifi: row.wifi,
                NFC: row.NFC,
                usb_port: row.usb_port,
                operating_system: row.operating_system,
                interface_: row.interface_,
                processor: row.processor
            }
        }).success(function (data, status, headers, config) {
            //alert("update success");
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
            url: '/openhardwaredelete',
            contentType: "application/json",
            data: {
                No: row.No,
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
            url: '/openhardware',
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: true,
        columnDefs: [{
                name: 'No',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'open_hw',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'name',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'img_url',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.img_url}}" target="_blank">View Image</a> </div>'
            },
            {
                name: 'link',
                width: 100,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.link}}" target="_blank">Web Site</a> </div>'
            },
            {
                name: 'price',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'features',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'size_x_mm',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'size_y_mm',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'size_z_mm',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'weight_g',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'memory',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'bluetooth',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'wifi',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'NFC',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'usb_port',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'operating_system',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'interface_',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'processor',
                width: 120,
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: false,
        columnDefs: [{
                name: 'No',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'open_hw',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'name',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'img_url',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'link',
                width: 100,
                enableCellEdit: true
            },
            {
                name: 'price',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'features',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'size_x_mm',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'size_y_mm',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'size_z_mm',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'weight_g',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'memory',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'bluetooth',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'wifi',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'NFC',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'usb_port',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'operating_system',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'interface_',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'processor',
                width: 120,
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
        No: '',
        open_hw: '',
        name: '',
        img_url: '',
        link: '',
        price: '',
        features: '',
        size_x_mm: '',
        size_y_mm: '',
        size_z_mm: '',
        weight_g: '',
        memory: '',
        bluetooth: '',
        wifi: '',
        NFC: '',
        usb_port: '',
        operating_system: '',
        interface_: '',
        processor: ''
                }]
}]);
///////////////////////////////12openhardware//////////////////////////////////////////////
///////////////////////////////13product//////////////////////////////////////////////
myapp.controller('BasicCtrl13', ['$scope', '$http', '$q', 'uiGridConstants', 'editableOptions', function ($scope, $http, $q, uiGridConstants, editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    var canceler = $q.defer();
    $scope.submit = function (row) {
        var tmp = true;
        $http({
            method: 'POST',
            url: '/productinsert',
            contentType: "application/json",
            data: {
                No: row.No,
                category_1: row.category_1,
                category_2: row.category_2,
                category_3: row.category_3,
                img_url: row.img_url,
                img_file: row.img_file,
                product_name_En: row.product_name_En,
                product_name_Ko: row.product_name_Ko,
                model_name: row.model_name,
                manufacturer_En: row.manufacturer_En,
                manufacturer_Ko: row.manufacturer_Ko,
                country_En: row.country_En,
                country_Ko: row.country_Ko,
                release_date: row.release_date,
                price: row.price,
                color: row.color,
                shape: row.shape,
                material: row.material,
                size_x_mm: row.size_x_mm,
                size_y_mm: row.size_y_mm,
                size_z_mm: row.size_z_mm,
                weight_g: row.weight_g,
                battery_life: row.battery_life,
                sensor: row.sensor,
                communication: row.communication,
                explanation: row.explanation,
                description: row.description,
                site: row.site,
                exhibition: row.exhibition
            }
        }).success(function (data, status, headers, config) {
            //alert("insert success");
        }).error(function (data, status, headers, config) {
            tmp = false;
            alert("insert fail");
        });
        $http({
            method: 'POST',
            url: '/productupdate',
            contentType: "application/json",
            data: {
                No: row.No,
                category_1: row.category_1,
                category_2: row.category_2,
                category_3: row.category_3,
                img_url: row.img_url,
                img_file: row.img_file,
                product_name_En: row.product_name_En,
                product_name_Ko: row.product_name_Ko,
                model_name: row.model_name,
                manufacturer_En: row.manufacturer_En,
                manufacturer_Ko: row.manufacturer_Ko,
                country_En: row.country_En,
                country_Ko: row.country_Ko,
                release_date: row.release_date,
                price: row.price,
                color: row.color,
                shape: row.shape,
                material: row.material,
                size_x_mm: row.size_x_mm,
                size_y_mm: row.size_y_mm,
                size_z_mm: row.size_z_mm,
                weight_g: row.weight_g,
                battery_life: row.battery_life,
                sensor: row.sensor,
                communication: row.communication,
                explanation: row.explanation,
                description: row.description,
                site: row.site,
                exhibition: row.exhibition
            }
        }).success(function (data, status, headers, config) {
            //alert("update success");
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
            url: '/productdelete',
            contentType: "application/json",
            data: {
                No: row.No,
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
            url: '/product',
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: true,
        columnDefs: [{
                name: 'No',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'category_1',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'category_2',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'category_3',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'img_url',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.img_url}}" target="_blank">View Image</a> </div>'
            },
            {
                name: 'img_file',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'product_name_En',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'product_name_Ko',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'model_name',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'manufacturer_En',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'manufacturer_Ko',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'country_En',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'country_Ko',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'release_date',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'price',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'color',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'shape',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'material',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'size_x_mm',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'size_y_mm',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'size_z_mm',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'weight_g',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'battery_life',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'sensor',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'communication',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'explanation',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'description',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'site',
                width: 100,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.site}}" target="_blank">Web Site</a> </div>'
            },
            {
                name: 'exhibition',
                width: 120,
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: false,
        columnDefs: [{
                name: 'No',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'category_1',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'category_2',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'category_3',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'img_url',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'img_file',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'product_name_En',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'product_name_Ko',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'model_name',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'manufacturer_En',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'manufacturer_Ko',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'country_En',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'country_Ko',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'release_date',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'price',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'color',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'shape',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'material',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'size_x_mm',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'size_y_mm',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'size_z_mm',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'weight_g',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'battery_life',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'sensor',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'communication',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'explanation',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'description',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'site',
                width: 100,
                enableCellEdit: true
            },
            {
                name: 'exhibition',
                width: 120,
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
        No: '',
        category_1: '',
        category_2: '',
        category_3: '',
        img_url: '',
        img_file: '',
        product_name_En: '',
        product_name_Ko: '',
        model_name: '',
        manufacturer_En: '',
        manufacturer_Ko: '',
        country_En: '',
        country_Ko: '',
        release_date: '',
        price: '',
        color: '',
        shape: '',
        material: '',
        size_x_mm: '',
        size_y_mm: '',
        size_z_mm: '',
        weight_g: '',
        battery_life: '',
        sensor: '',
        communication: '',
        explanation: '',
        description: '',
        site: '',
        exhibition: ''
                }]
}]);
///////////////////////////////13product//////////////////////////////////////////////
///////////////////////////////14communcation//////////////////////////////////////////////
myapp.controller('BasicCtrl14', ['$scope', '$http', '$q', 'uiGridConstants', 'editableOptions', function ($scope, $http, $q, uiGridConstants, editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    var canceler = $q.defer();
    $scope.submit = function (row) {
        var tmp = true;
        $http({
            method: 'POST',
            url: '/communicationinsert',
            contentType: "application/json",
            data: {
                No: row.No,
                category_1: row.category_1,
                category_2: row.category_2,
                model_name: row.model_name,
                manufacturer: row.manufacturer,
                manufacturing_country: row.manufacturing_country,
                link: row.link,
                range_m: row.range_m,
                price: row.price,
                shape: row.shape,
                img_url: row.img_url,
                size_x_mm: row.size_x_mm,
                size_y_mm: row.size_y_mm,
                size_z_mm: row.size_z_mm,
                operating_temperature_range: row.operating_temperature_range,
                core_processor: row.core_processor,
                core_size: row.core_size,
                interface_: row.interface_,
                program_memory_type: row.program_memory_type,
                program_memory_size: row.program_memory_size,
                EEPROM_size: row.EEPROM_size,
                FRAM_size: row.FRAM_size,
                SRAM_size: row.SRAM_size,
                Frequency: row.Frequency,
                standards: row.standards,
                output_power: row.output_power,
                Antenna: row.Antenna,
                datasheet_link: row.datasheet_link
            }
        }).success(function (data, status, headers, config) {
            //alert("insert success");
        }).error(function (data, status, headers, config) {
            tmp = false;
            alert("insert fail");
        });
        $http({
            method: 'POST',
            url: '/communicationupdate',
            contentType: "application/json",
            data: {
                No: row.No,
                category_1: row.category_1,
                category_2: row.category_2,
                model_name: row.model_name,
                manufacturer: row.manufacturer,
                manufacturing_country: row.manufacturing_country,
                link: row.link,
                range_m: row.range_m,
                price: row.price,
                shape: row.shape,
                img_url: row.img_url,
                size_x_mm: row.size_x_mm,
                size_y_mm: row.size_y_mm,
                size_z_mm: row.size_z_mm,
                operating_temperature_range: row.operating_temperature_range,
                core_processor: row.core_processor,
                core_size: row.core_size,
                interface_: row.interface_,
                program_memory_type: row.program_memory_type,
                program_memory_size: row.program_memory_size,
                EEPROM_size: row.EEPROM_size,
                FRAM_size: row.FRAM_size,
                SRAM_size: row.SRAM_size,
                Frequency: row.Frequency,
                standards: row.standards,
                output_power: row.output_power,
                Antenna: row.Antenna,
                datasheet_link: row.datasheet_link
            }
        }).success(function (data, status, headers, config) {
            //alert("update success");
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
            url: '/communicationdelete',
            contentType: "application/json",
            data: {
                No: row.No,
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
            url: '/communication',
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: true,
        columnDefs: [{
                name: 'No',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'category_1',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'category_2',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'model_name',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'manufacturer',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'manufacturing_country',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'link',
                width: 100,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.link}}" target="_blank">Web Site</a> </div>'
            },
            {
                name: 'range_m',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'price',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'shape',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'img_url',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.img_url}}" target="_blank">View Image</a> </div>'
            },
            {
                name: 'size_x_mm',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'size_y_mm',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'size_z_mm',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'operating_temperature_range',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'core_processor',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'core_size',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'interface_',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'program_memory_type',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'program_memory_size',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'EEPROM_size',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'FRAM_size',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'SRAM_size',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'Frequency',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'standards',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'output_power',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'Antenna',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'datasheet_link',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.datasheet_link}}" target="_blank">Click Here</a> </div>'
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: false,
        columnDefs: [{
                name: 'No',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'category_1',
                width: 170,
                enableCellEdit: true
            },
            {
                name: 'category_2',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'model_name',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'manufacturer',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'manufacturing_country',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'link',
                width: 100,
                enableCellEdit: true
            },
            {
                name: 'range_m',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'price',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'shape',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'img_url',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'size_x_mm',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'size_y_mm',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'size_z_mm',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'operating_temperature_range',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'core_processor',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'core_size',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'interface_',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'program_memory_type',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'program_memory_size',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'EEPROM_size',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'FRAM_size',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'SRAM_size',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'Frequency',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'standards',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'output_power',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'Antenna',
                width: 110,
                enableCellEdit: true
            },
            {
                name: 'datasheet_link',
                width: 120,
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
        No: '',
        category_1: '',
        category_2: '',
        model_name: '',
        manufacturer: '',
        manufacturing_country: '',
        link: '',
        range_m: '',
        price: '',
        shape: '',
        img_url: '',
        size_x_mm: '',
        size_y_mm: '',
        size_z_mm: '',
        operating_temperature_range: '',
        core_processor: '',
        core_size: '',
        interface_: '',
        program_memory_type: '',
        program_memory_size: '',
        EEPROM_size: '',
        FRAM_size: '',
        SRAM_size: '',
        Frequency: '',
        standards: '',
        output_power: '',
        Antenna: '',
        datasheet_link: ''
                }]
}]);
///////////////////////////////14communcation//////////////////////////////////////////////
///////////////////////////////////////22//////////////////////
///////////////////////////////22//////////////////////////////////////////////
///////////////////////////////15opensoftware//////////////////////////////////////////////
myapp.controller('BasicCtrl15', ['$scope', '$http', '$q', 'uiGridConstants', 'editableOptions', function ($scope, $http, $q, uiGridConstants, editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    var canceler = $q.defer();
    $scope.submit = function (row) {
        var tmp = true;
        $http({
            method: 'POST',
            url: '/opensoftwareinsert',
            contentType: "application/json",
            data: {
                No: row.No,
                open_sw: row.open_sw,
                developer: row.developer,
                link: row.link,
                features: row.features,
                funtion: row.funtion,
                operating_system: row.operating_system,
                license: row.license,
                license_management_agency: row.license_management_agency,
                license_mandatory: row.license_mandatory
            }
        }).success(function (data, status, headers, config) {
            //alert("insert success");
        }).error(function (data, status, headers, config) {
            tmp = false;
            alert("insert fail");
        });
        $http({
            method: 'POST',
            url: '/opensoftwareupdate',
            contentType: "application/json",
            data: {
                No: row.No,
                open_sw: row.open_sw,
                developer: row.developer,
                link: row.link,
                features: row.features,
                funtion: row.funtion,
                operating_system: row.operating_system,
                license: row.license,
                license_management_agency: row.license_management_agency,
                license_mandatory: row.license_mandatory
            }
        }).success(function (data, status, headers, config) {
            //alert("update success");
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
            url: '/opensoftwaredelete',
            contentType: "application/json",
            data: {
                No: row.No,
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
            url: '/opensoftware',
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: true,
        columnDefs: [{
                name: 'No',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'open_sw',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'developer',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'link',
                width: 100,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.link}}" target="_blank">Web Site</a> </div>'
            },
            {
                name: 'features',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'funtion',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'operating_system',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'license',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'license_management_agency',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'license_mandatory',
                width: 120,
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: false,
        columnDefs: [{
                name: 'No',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'open_sw',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'developer',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'link',
                width: 100,
                enableCellEdit: true
            },
            {
                name: 'features',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'funtion',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'operating_system',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'license',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'license_management_agency',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'license_mandatory',
                width: 120,
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
        No: '',
        open_sw: '',
        developer: '',
        link: '',
        features: '',
        funtion: '',
        operating_system: '',
        license: '',
        license_management_agency: '',
        license_mandatory: ''
                }]
}]);
///////////////////////////////15opensoftware


///////////////////////////////16ADD_MAin//////////////////////////////////////////////
myapp.controller('BasicCtrl16', ['$scope', '$http', '$q', 'uiGridConstants', 'editableOptions', function ($scope, $http, $q, uiGridConstants, editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    var canceler = $q.defer();
    $scope.submit = function (row) {
        var tmp = true;
        $http({
            method: 'POST',
            url: '/library_db_library_maininsert',
            contentType: "application/json",
            data: {
                no: row.no,
                category: row.category,
                modelname: row.modelname,
                imgsrc: row.imgsrc,
                description: row.description,
                moresrc: row.moresrc,
                websrc: row.websrc,
                newssrc: row.newssrc,
                newsimgsrc: row.newsimgsrc,
                newsdes1: row.newsdes1,
                newsdes2: row.newsdes2,
                newsdes3: row.newsdes3,
                newsdes4: row.newsdes4
            }
        }).success(function (data, status, headers, config) {
            //alert("insert success");
        }).error(function (data, status, headers, config) {
            tmp = false;
            alert("insert fail");
        });
        $http({
            method: 'POST',
            url: '/library_db_library_mainupdate',
            contentType: "application/json",
            data: {
                no: row.no,
                category: row.category,
                modelname: row.modelname,
                imgsrc: row.imgsrc,
                description: row.description,
                moresrc: row.moresrc,
                websrc: row.websrc,
                newssrc: row.newssrc,
                newsimgsrc: row.newsimgsrc,
                newsdes1: row.newsdes1,
                newsdes2: row.newsdes2,
                newsdes3: row.newsdes3,
                newsdes4: row.newsdes4
            }
        }).success(function (data, status, headers, config) {
            //alert("update success");
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
            url: '/library_db_library_maindelete',
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
            url: '/library_db_library_main',
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: true,
        columnDefs: [{
                name: 'no',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'category',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'modelname',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'imgsrc',
                width: 100,
                enableCellEdit: true,
                //cellTemplate: '<div> <a href="{{row.entity.link}}" target="_blank">img src</a> </div>'
            },
            {
                name: 'description',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'moresrc',
                width: 120,
                enableCellEdit: true,

            },
            {
                name: 'websrc',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.websrc}}" target="_blank">Web Site</a> </div>'
            },
            {
                name: 'newssrc',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.newssrc}}" target="_blank">News Site</a> </div>'
            },
            {
                name: 'newsimgsrc',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.newsimgsrc}}" target="_blank">img src</a> </div>'
            },
            {
                name: 'newsdes1',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'newsdes2',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'newsdes3',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'newsdes4',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'Buttons',
                width: 160,
                enableCellEdit: false,
                cellTemplate: '<button type="submit" class="btn btn-primary" style ="width:80px;" ng-click="grid.appScope.submit(row.entity)">Save</button><button type="button" type="remove" class="btn btn-danger"style ="width:80px;" ng-click="grid.appScope.remove(row.entity)">Delete</button>'
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: false,
        columnDefs: [{
                name: 'no',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'category',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'modelname',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'imgsrc',
                width: 100,
                enableCellEdit: true
            },
            {
                name: 'description',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'moresrc',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'websrc',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'newssrc',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'newsimgsrc',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'newsdes1',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'newsdes2',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'newsdes3',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'newsdes4',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'Buttons',
                width: 120,
                enableCellEdit: false,
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
        modelname: '',
        imgsrc: '',
        description: '',
        moresrc: '',
        websrc: '',
        newssrc: '',
        newsimgsrc: '',
        newsdes1: '',
        newsdes2: '',
        newsdes3: '',
        newsdes4: ''
                }]
}]);
///////////////////////////////16ADD_MAin//////////////////////////////////////////////




///////////////////////////////17ADD_More//////////////////////////////////////////////
myapp.controller('BasicCtrl17', ['$scope', '$http', '$q', 'uiGridConstants', 'editableOptions', function ($scope, $http, $q, uiGridConstants, editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    var canceler = $q.defer();
    $scope.submit = function (row) {
        var tmp = true;
        $http({
            method: 'POST',
            url: '/library_db_product_moreinsert',
            contentType: "application/json",
            data: {
                no: row.no,
                title: row.title,
                imgsrc: row.imgsrc,
                modelname: row.modelname,
                manufactura: row.manufactura,
                price: row.price,
                detailfunction1: row.detailfunction1,
                detailfunction2: row.detailfunction2,
                detailfunction3: row.detailfunction3,
                detailfunction4: row.detailfunction4,
                IoTfunction1: row.IoTfunction1,
                IoTfunction2: row.IoTfunction2,
                otherproduct1: row.otherproduct1,
                otherproductname1: row.otherproductname1,
                otherproduct2: row.otherproduct2,
                otherproductname2: row.otherproductname2,
                otherproduct3: row.otherproduct3,
                otherproductname3: row.otherproductname3,
                otherproduct4: row.otherproduct4,
                otherproductname4: row.otherproductname4,
                otherproduct5: row.otherproduct5,
                otherproductname5: row.otherproductname5,
                otherproductdetaile1: row.otherproductdetaile1,
                otherproductdetaile2: row.otherproductdetaile2,
                otherproductdetaile3: row.otherproductdetaile3,
                otherproductdetaile4: row.otherproductdetaile4,
                otherproductdetaile5: row.otherproductdetaile5,
                productyear: row.productyear
            }
        }).success(function (data, status, headers, config) {
            //alert("insert success");
        }).error(function (data, status, headers, config) {
            tmp = false;
            alert("insert fail");
        });
        $http({
            method: 'POST',
            url: '/library_db_product_moreupdate',
            contentType: "application/json",
            data: {
                no: row.no,
                title: row.title,
                imgsrc: row.imgsrc,
                modelname: row.modelname,
                manufactura: row.manufactura,
                price: row.price,
                detailfunction1: row.detailfunction1,
                detailfunction2: row.detailfunction2,
                detailfunction3: row.detailfunction3,
                detailfunction4: row.detailfunction4,
                IoTfunction1: row.IoTfunction1,
                IoTfunction2: row.IoTfunction2,
                otherproduct1: row.otherproduct1,
                otherproductname1: row.otherproductname1,
                otherproduct2: row.otherproduct2,
                otherproductname2: row.otherproductname2,
                otherproduct3: row.otherproduct3,
                otherproductname3: row.otherproductname3,
                otherproduct4: row.otherproduct4,
                otherproductname4: row.otherproductname4,
                otherproduct5: row.otherproduct5,
                otherproductname5: row.otherproductname5,
                otherproductdetaile1: row.otherproductdetaile1,
                otherproductdetaile2: row.otherproductdetaile2,
                otherproductdetaile3: row.otherproductdetaile3,
                otherproductdetaile4: row.otherproductdetaile4,
                otherproductdetaile5: row.otherproductdetaile5,
                productyear: row.productyear
            }
        }).success(function (data, status, headers, config) {
            //alert("update success");
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
            url: '/library_db_product_moredelete',
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
            url: '/library_db_product_more',
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: true,
        columnDefs: [{
                name: 'no',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'title',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'imgsrc',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'modelname',
                width: 100,
                enableCellEdit: true,
                //cellTemplate: '<div> <a href="{{row.entity.link}}" target="_blank">img src</a> </div>'
            },
            {
                name: 'manufactura',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'price',
                width: 120,
                enableCellEdit: true,
            },
            {
                name: 'detailfunction1',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.websrc}}" target="_blank">Web Site</a> </div>'
            },
            {
                name: 'detailfunction2',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.newssrc}}" target="_blank">News Site</a> </div>'
            },
            {
                name: 'detailfunction3',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.newsimgsrc}}" target="_blank">img src</a> </div>'
            },
            {
                name: 'detailfunction4',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'IoTfunction1',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'IoTfunction2',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproduct1',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductname1',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproduct2',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductname2',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproduct3',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductname3',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproduct4',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductname4',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproduct5',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductname5',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductsrc1',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductsrc2',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductsrc3',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductsrc4',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductsrc5',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductdetaile1',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductdetaile2',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductdetaile3',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductdetaile4',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductdetaile5',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'productyear',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'Buttons',
                width: 160,
                enableCellEdit: false,
                cellTemplate: '<button type="submit" class="btn btn-primary" style ="width:80px;" ng-click="grid.appScope.submit(row.entity)">Save</button><button type="button" type="remove" class="btn btn-danger"style ="width:80px;" ng-click="grid.appScope.remove(row.entity)">Delete</button>'
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: false,
        columnDefs: [{
                name: 'no',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'title',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'imgsrc',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'modelname',
                width: 100,
                enableCellEdit: true,
                //cellTemplate: '<div> <a href="{{row.entity.link}}" target="_blank">img src</a> </div>'
            },
            {
                name: 'manufactura',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'price',
                width: 120,
                enableCellEdit: true,
            },
            {
                name: 'detailfunction1',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.websrc}}" target="_blank">Web Site</a> </div>'
            },
            {
                name: 'detailfunction2',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.newssrc}}" target="_blank">News Site</a> </div>'
            },
            {
                name: 'detailfunction3',
                width: 120,
                enableCellEdit: true,
                cellTemplate: '<div> <a href="{{row.entity.newsimgsrc}}" target="_blank">img src</a> </div>'
            },
            {
                name: 'detailfunction4',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'IoTfunction1',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'IoTfunction2',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproduct1',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductname1',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproduct2',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductname2',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproduct3',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductname3',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproduct4',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductname4',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproduct5',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductname5',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductsrc1',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductsrc2',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductsrc3',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductsrc4',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductsrc5',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductdetaile1',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductdetaile2',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductdetaile3',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductdetaile4',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'otherproductdetaile5',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'productyear',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'Buttons',
                width: 160,
                enableCellEdit: false,
                cellTemplate: '<button type="submit" class="btn btn-primary" style ="width:80px;" ng-click="grid.appScope.submit(row.entity)">Save</button><button type="button" type="remove" class="btn btn-danger"style ="width:80px;" ng-click="grid.appScope.remove(row.entity)">Delete</button>'
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
        imgsrc: '',
        modelname: '',
        manufactura: '',
        price: '',
        detailfunction1: '',
        detailfunction2: '',
        detailfunction3: '',
        detailfunction4: '',
        IoTfunction1: '',
        IoTfunction2: '',
        otherproduct1: '',
        otherproductname1: '',
        otherproduct2: '',
        otherproductname2: '',
        otherproduct3: '',
        otherproductname3: '',
        otherproduct4: '',
        otherproductname4: '',
        otherproduct5: '',
        otherproductname5: '',
        otherproductdetaile1: '',
        otherproductdetaile2: '',
        otherproductdetaile3: '',
        otherproductdetaile4: '',
        otherproductdetaile5: '',
        productyear: ''
                }]
}]);
///////////////////////////////17ADD_More//////////////////////////////////////////////


myapp.controller('BasicCtrl18', ['$scope', '$http', '$q', function ($scope, $http, $q) {
    $scope.gridOptions1 = {
        enableFiltering: true
    };


    var canceler = $q.defer();

    var getData = function (key) {

        $http.get('/concept_db', {
            timeout: canceler.promise
        }).success(function (data) {
            // console.log("KEY1 : " + key + data);
            $scope.gridOptions3.data = data;
            console.log("test : " + data);
        });
    }


    $scope.highlightFilteredHeader = function (row, rowRenderIndex, col, colRenderIndex) {
        if (col.filters[0].term) {
            return 'header-filtered';
        } else {
            return '';
        }
    };
}]);



///////////////////////////////19concept//////////////////////////////////////////////
myapp.controller('BasicCtrl19', ['$scope', '$http', '$q', 'uiGridConstants', 'editableOptions', function ($scope, $http, $q, uiGridConstants, editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    var canceler = $q.defer();
    $scope.submit = function (row) {
        var tmp = true;
        $http({
            method: 'POST',
            url: '/concept_dbinsert',
            contentType: "application/json",
            data: {
                no: row.no,
                class: row.class,
                main_href: row.main_href,
                imgsrc: row.imgsrc,
                name: row.name
            }
        }).success(function (data, status, headers, config) {
            //alert("insert success");
        }).error(function (data, status, headers, config) {
            tmp = false;
            alert("insert fail");
        });
        $http({
            method: 'POST',
            url: '/concept_dbupdate',
            contentType: "application/json",
            data: {
                no: row.no,
                class: row.class,
                main_href: row.main_href,
                imgsrc: row.imgsrc,
                name: row.name
            }
        }).success(function (data, status, headers, config) {
            //alert("update success");
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
            url: '/concept_dbdelete',
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
            url: '/concept_db',
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: true,
        columnDefs: [{
                name: 'no',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'class',
                width: 180,
                enableCellEdit: true
            },
            {
                name: 'main_href',
                width: 230,
                enableCellEdit: true
            },
            {
                name: 'imgsrc',
                width: 300,
                enableCellEdit: true,
                //cellTemplate: '<div> <a href="{{row.entity.link}}" target="_blank">Web Site</a> </div>'
            },
            {
                name: 'name',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'Buttons',
                width: 160,
                enableCellEdit: false,
                cellTemplate: '<button type="submit" class="btn btn-primary" style ="width:80px;" ng-click="grid.appScope.submit(row.entity)">Save</button><button type="button" type="remove" class="btn btn-danger"style ="width:80px;" ng-click="grid.appScope.remove(row.entity)">Delete</button>'
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
        rowHeight: 36,
        modifierKeysToMultiSelectCells: false,
        columnDefs: [{
                name: 'no',
                aggregationType: uiGridConstants.aggregationTypes.count,
                width: 50
            },
            {
                name: 'class',
                width: 180,
                enableCellEdit: true
            },
            {
                name: 'main_href',
                width: 230,
                enableCellEdit: true
            },
            {
                name: 'imgsrc',
                width: 300,
                enableCellEdit: true,
                //cellTemplate: '<div> <a href="{{row.entity.link}}" target="_blank">Web Site</a> </div>'
            },
            {
                name: 'name',
                width: 120,
                enableCellEdit: true
            },
            {
                name: 'Buttons',
                width: 160,
                enableCellEdit: false,
                cellTemplate: '<button type="submit" class="btn btn-primary" style ="width:80px;" ng-click="grid.appScope.submit(row.entity)">Save</button><button type="button" type="remove" class="btn btn-danger"style ="width:80px;" ng-click="grid.appScope.remove(row.entity)">Delete</button>'
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
        class: '',
        main_href: '',
        imgsrc: '',
        name: '',
                }]
}]);
///////////////////////////////19concept///////////////////////////////

var app = angular.module('myApp', []);
app.controller('BasicCtrl20', function ($scope, $http) {
    $http.get("/concept_db")
        .then(function (response) {
            $scope.gridOptions4 = response.data;
            // console.log( response.data );

        });

});



////////////////////////////////////////////////////////////////////////////////
myapp.controller('BasicCtrl9', ['$scope', '$http', '$q', function ($scope, $http, $q) {
    var canceler = $q.defer();
    var nowKey = getParameter("key");
    var selData = [];
    $scope.data = [];
    for (var i = 0; i < 4; i++) {
        if (getParameter("select" + i) != null) selData.push(getParameter("select" + i));
    }
    for (var i = 0; i < selData.length; i++) {
        // console.log(selData[i]);
        if (selData[i] != null) {
            $http({
                method: 'POST',
                url: '/tempSensor',
                data: {
                    k: selData[i],
                    idx: i
                }
            }).then(function successCallback(response) {
                $scope.data[response.config.data.idx + 1] = response.data[0];
                setHeaderCategory(response.config.data.k, response.config.data.idx + 1);
            }, function errorCallback(response) {});
        }
        // console.log($scope.data);
    }
    var key = -1;
    if (nowKey < 7) {
        key = nowKey % 6 + 1;
    } else if (7 <= nowKey && nowKey < 13) {
        key = nowKey % 6 + 7;
    } else if (13 <= nowKey && nowKey < 19) {
        key = nowKey % 6 + 13;
    } else if (19 <= nowKey && nowKey < 25) {
        key = nowKey % 6 + 19;
    } else if (25 <= nowKey && nowKey < 31) {
        key = nowKey % 6 + 25;
    } else if (31 <= nowKey && nowKey < 37) {
        key = nowKey % 6 + 31;
    } else if (37 <= nowKey && nowKey < 43) {
        key = nowKey % 6 + 37;
    } else if (43 <= nowKey && nowKey < 49) {
        key = nowKey % 6 + 43;
    } else if (49 <= nowKey && nowKey < 55) {
        key = nowKey % 6 + 49;
    } else if (55 <= nowKey && nowKey < 61) {
        key = nowKey % 6 + 55;
    } else if (61 <= nowKey && nowKey < 67) {
        key = nowKey % 6 + 61;
    } else if (67 <= nowKey && nowKey < 73) {
        key = nowKey % 6 + 67;
    } else if (73 <= nowKey && nowKey < 79) {
        key = nowKey % 6 + 73;
    } else if (79 <= nowKey && nowKey < 85) {
        key = nowKey % 6 + 79;
    } else if (85 <= nowKey && nowKey < 91) {
        key = nowKey % 6 + 85;
    } else if (91 <= nowKey && nowKey < 97) {
        key = nowKey % 6 + 91;
    } else if (97 <= nowKey && nowKey < 103) {
        key = nowKey % 6 + 97;
    } else if (103 <= nowKey && nowKey < 109) {
        key = nowKey % 6 + 103;
    } else if (109 <= nowKey && nowKey < 115) {
        key = nowKey % 6 + 109;
    } else if (115 <= nowKey && nowKey < 121) {
        key = nowKey % 6 + 115;
    } else if (121 <= nowKey && nowKey < 127) {
        key = nowKey % 6 + 121;
    } else if (127 <= nowKey && nowKey < 133) {
        key = nowKey % 6 + 127;
    } else if (133 <= nowKey && nowKey < 139) {
        key = nowKey % 6 + 133;
    } else if (139 <= nowKey && nowKey < 145) {
        key = nowKey % 6 + 139;
    } else if (145 <= nowKey && nowKey < 151) {
        key = nowKey % 6 + 145;
    } else if (151 <= nowKey && nowKey < 157) {
        key = nowKey % 6 + 151;
    } else if (157 <= nowKey && nowKey < 163) {
        key = nowKey % 6 + 157;
    } else if (163 <= nowKey && nowKey < 169) {
        key = nowKey % 6 + 163;
    } else if (169 <= nowKey && nowKey < 175) {
        key = nowKey % 6 + 169;
    } else if (175 <= nowKey && nowKey < 181) {
        key = nowKey % 6 + 175;
    } else if (181 <= nowKey && nowKey < 187) {
        key = nowKey % 6 + 181;
    } else if (187 <= nowKey && nowKey < 193) {
        key = nowKey % 6 + 187;
    } else if (193 <= nowKey && nowKey < 199) {
        key = nowKey % 6 + 193;
    } else if (199 <= nowKey && nowKey < 205) {
        key = nowKey % 6 + 199;
    } else if (205 <= nowKey && nowKey < 211) {
        key = nowKey % 6 + 205;
    } else if (211 <= nowKey && nowKey < 217) {
        key = nowKey % 6 + 211;
    } else if (217 <= nowKey && nowKey < 223) {
        key = nowKey % 6 + 217;
    } else if (223 <= nowKey && nowKey < 229) {
        key = nowKey % 6 + 223;
    } else if (229 <= nowKey && nowKey < 235) {
        key = nowKey % 6 + 229;
    } else if (235 <= nowKey && nowKey < 241) {
        key = nowKey % 6 + 235;
    } else if (241 <= nowKey && nowKey < 247) {
        key = nowKey % 6 + 241;
    } else if (247 <= nowKey && nowKey < 253) {
        key = nowKey % 6 + 247;
    } else if (253 <= nowKey && nowKey < 259) {
        key = nowKey % 6 + 253;
    } else if (259 <= nowKey && nowKey < 265) {
        key = nowKey % 6 + 259;
    } else if (265 <= nowKey && nowKey < 271) {
        key = nowKey % 6 + 265;
    } else if (271 <= nowKey && nowKey < 277) {
        key = nowKey % 6 + 271;
    } else if (277 <= nowKey && nowKey < 283) {
        key = nowKey % 6 + 277;
    } else if (283 <= nowKey && nowKey < 289) {
        key = nowKey % 6 + 283;
    } else if (289 <= nowKey && nowKey < 295) {
        key = nowKey % 6 + 289;
    } else if (295 <= nowKey && nowKey < 301) {
        key = nowKey % 6 + 295;
    } else if (301 <= nowKey && nowKey < 307) {
        key = nowKey % 6 + 301;
    } else if (307 <= nowKey && nowKey < 313) {
        key = nowKey % 6 + 307;
    } else if (313 <= nowKey && nowKey < 319) {
        key = nowKey % 6 + 313;
    } else if (319 <= nowKey && nowKey < 325) {
        key = nowKey % 6 + 319;
    } else if (325 <= nowKey && nowKey < 331) {
        key = nowKey % 6 + 325;
    } else if (331 <= nowKey && nowKey < 337) {
        key = nowKey % 6 + 331;
    } else if (337 <= nowKey && nowKey < 343) {
        key = nowKey % 6 + 337;
    } else if (343 <= nowKey && nowKey < 349) {
        key = nowKey % 6 + 343;
    } else if (349 <= nowKey && nowKey < 355) {
        key = nowKey % 6 + 349;
    } else if (355 <= nowKey && nowKey < 361) {
        key = nowKey % 6 + 355;
    } else if (361 <= nowKey && nowKey < 367) {
        key = nowKey % 6 + 361;
    } else if (367 <= nowKey && nowKey < 373) {
        key = nowKey % 6 + 367;
    } else if (373 <= nowKey && nowKey < 379) {
        key = nowKey % 6 + 373;
    } else if (379 <= nowKey && nowKey < 385) {
        key = nowKey % 6 + 379;
    } else if (385 <= nowKey && nowKey < 391) {
        key = nowKey % 6 + 385;
    } else if (391 <= nowKey && nowKey < 397) {
        key = nowKey % 6 + 391;
    } else if (397 <= nowKey && nowKey < 403) {
        key = nowKey % 6 + 397;
    } else if (403 <= nowKey && nowKey < 409) {
        key = nowKey % 6 + 403;
    } else if (409 <= nowKey && nowKey < 415) {
        key = nowKey % 6 + 409;
    } else if (415 <= nowKey && nowKey < 421) {
        key = nowKey % 6 + 415;
    } else if (421 <= nowKey && nowKey < 427) {
        key = nowKey % 6 + 421;
    } else if (427 <= nowKey && nowKey < 433) { //***********
        key = nowKey % 6 + 427;
    } else if (433 <= nowKey && nowKey < 439) {
        key = nowKey % 6 + 433;
    } else if (439 <= nowKey && nowKey < 445) {
        key = nowKey % 6 + 439;
    } else if (445 <= nowKey && nowKey < 451) {
        key = nowKey % 6 + 445;
    } else if (451 <= nowKey && nowKey < 457) {
        key = nowKey % 6 + 451;
    } else if (457 <= nowKey && nowKey < 463) {
        key = nowKey % 6 + 457;
    } else if (463 <= nowKey && nowKey < 469) {
        key = nowKey % 6 + 463;
    } else if (469 <= nowKey && nowKey < 475) {
        key = nowKey % 6 + 469;
    } else if (475 <= nowKey && nowKey < 481) {
        key = nowKey % 6 + 475;
    } else if (481 <= nowKey && nowKey < 487) {
        key = nowKey % 6 + 481;
    } else if (487 <= nowKey && nowKey < 493) {
        key = nowKey % 6 + 487;
    } else if (493 <= nowKey && nowKey < 499) {
        key = nowKey % 6 + 493;
    } else if (499 <= nowKey && nowKey < 505) {
        key = nowKey % 6 + 499;
    } else if (505 <= nowKey && nowKey < 511) {
        key = nowKey % 6 + 505;
    } else if (511 <= nowKey && nowKey < 517) {
        key = nowKey % 6 + 511;
    } else if (517 <= nowKey && nowKey < 523) {
        key = nowKey % 6 + 517;
    } else if (523 <= nowKey && nowKey < 529) {
        key = nowKey % 6 + 523;
    } else if (529 <= nowKey && nowKey < 535) {
        key = nowKey % 6 + 529;
    } else if (535 <= nowKey && nowKey < 541) {
        key = nowKey % 6 + 535;
    } else if (541 <= nowKey && nowKey < 547) {
        key = nowKey % 6 + 541;
    } else if (547 <= nowKey && nowKey < 553) {
        key = nowKey % 6 + 547;
    } else if (553 <= nowKey && nowKey < 559) {
        key = nowKey % 6 + 553;
    } else if (559 <= nowKey && nowKey < 565) {
        key = nowKey % 6 + 559;
    } else if (565 <= nowKey && nowKey < 571) {
        key = nowKey % 6 + 565;
    } else if (571 <= nowKey && nowKey < 577) {
        key = nowKey % 6 + 571;
    } else if (577 <= nowKey && nowKey < 583) {
        key = nowKey % 6 + 577;
    } else if (583 <= nowKey && nowKey < 589) {
        key = nowKey % 6 + 583;
    } else if (589 <= nowKey && nowKey < 595) {
        key = nowKey % 6 + 589;
    } else if (595 <= nowKey && nowKey < 601) {
        key = nowKey % 6 + 595;
    } else if (601 <= nowKey && nowKey < 607) {
        key = nowKey % 6 + 601;
    } else if (607 <= nowKey && nowKey < 613) {
        key = nowKey % 6 + 607;
    } else if (613 <= nowKey && nowKey < 619) {
        key = nowKey % 6 + 613;
    } else if (619 <= nowKey && nowKey < 625) {
        key = nowKey % 6 + 619;
    } else if (625 <= nowKey && nowKey < 631) {
        key = nowKey % 6 + 625;
    } else if (631 <= nowKey && nowKey < 637) {
        key = nowKey % 6 + 631;
    } else if (637 <= nowKey && nowKey < 643) {
        key = nowKey % 6 + 637;
    } else if (643 <= nowKey && nowKey < 649) {
        key = nowKey % 6 + 643;
    } else if (649 <= nowKey && nowKey < 655) {
        key = nowKey % 6 + 649;
    } else if (655 <= nowKey && nowKey < 661) {
        key = nowKey % 6 + 655;
    } else if (661 <= nowKey && nowKey < 667) {
        key = nowKey % 6 + 661;
    } else if (667 <= nowKey && nowKey < 673) {
        key = nowKey % 6 + 667;
    } else if (673 <= nowKey && nowKey < 679) {
        key = nowKey % 6 + 673;
    } else if (679 <= nowKey && nowKey < 685) {
        key = nowKey % 6 + 679;
    } else if (685 <= nowKey && nowKey < 691) {
        key = nowKey % 6 + 685;
    } else if (691 <= nowKey && nowKey < 697) {
        key = nowKey % 6 + 691;
    } else if (697 <= nowKey && nowKey < 703) {
        key = nowKey % 6 + 697;
    } else if (703 <= nowKey && nowKey < 709) {
        key = nowKey % 6 + 703;
    } else if (709 <= nowKey && nowKey < 715) {
        key = nowKey % 6 + 709;
    } else if (715 <= nowKey && nowKey < 721) {
        key = nowKey % 6 + 715;
    } else if (721 <= nowKey && nowKey < 727) {
        key = nowKey % 6 + 721;
    } else if (727 <= nowKey && nowKey < 733) {
        key = nowKey % 6 + 727;
    } else if (733 <= nowKey && nowKey < 739) {
        key = nowKey % 6 + 733;
    } else if (739 <= nowKey && nowKey < 745) { //*****************
        key = nowKey % 6 + 739;
    } else if (745 <= nowKey && nowKey < 751) {
        key = nowKey % 6 + 745;
    } else if (751 <= nowKey && nowKey < 757) {
        key = nowKey % 6 + 751;
    } else if (757 <= nowKey && nowKey < 763) {
        key = nowKey % 6 + 757;
    } else if (763 <= nowKey && nowKey < 769) {
        key = nowKey % 6 + 763;
    } else if (769 <= nowKey && nowKey < 775) {
        key = nowKey % 6 + 769;
    } else if (775 <= nowKey && nowKey < 781) {
        key = nowKey % 6 + 775;
    } else if (781 <= nowKey && nowKey < 787) {
        key = nowKey % 6 + 781;
    } else if (787 <= nowKey && nowKey < 793) {
        key = nowKey % 6 + 787;
    } else if (793 <= nowKey && nowKey < 799) {
        key = nowKey % 6 + 793;
    } else if (799 <= nowKey && nowKey < 805) {
        key = nowKey % 6 + 799;
    } else if (805 <= nowKey && nowKey < 811) {
        key = nowKey % 6 + 805;
    } else if (811 <= nowKey && nowKey < 817) {
        key = nowKey % 6 + 811;
    } else if (817 <= nowKey && nowKey < 823) {
        key = nowKey % 6 + 817;
    } else if (823 <= nowKey && nowKey < 829) {
        key = nowKey % 6 + 823;
    } else if (829 <= nowKey && nowKey < 835) {
        key = nowKey % 6 + 829;
    } else if (835 <= nowKey && nowKey < 841) {
        key = nowKey % 6 + 835;
    } else if (841 <= nowKey && nowKey < 847) {
        key = nowKey % 6 + 841;
    } else if (847 <= nowKey && nowKey < 853) {
        key = nowKey % 6 + 847;
    } else if (853 <= nowKey && nowKey < 859) {
        key = nowKey % 6 + 853;
    } else if (859 <= nowKey && nowKey < 865) {
        key = nowKey % 6 + 859;
    } else if (865 <= nowKey && nowKey < 871) {
        key = nowKey % 6 + 865;
    } else if (871 <= nowKey && nowKey < 877) {
        key = nowKey % 6 + 871;
    } else if (877 <= nowKey && nowKey < 883) {
        key = nowKey % 6 + 877;
    } else if (883 <= nowKey && nowKey < 889) {
        key = nowKey % 6 + 883;
    } else if (889 <= nowKey && nowKey < 895) {
        key = nowKey % 6 + 889;
    } else if (895 <= nowKey && nowKey < 901) {
        key = nowKey % 6 + 895;
    } else if (901 <= nowKey && nowKey < 907) {
        key = nowKey % 6 + 901;
    } else if (907 <= nowKey && nowKey < 913) {
        key = nowKey % 6 + 907;
    } else if (913 <= nowKey && nowKey < 919) {
        key = nowKey % 6 + 913;
    } else if (919 <= nowKey && nowKey < 925) {
        key = nowKey % 6 + 919;
    } else if (925 <= nowKey && nowKey < 931) {
        key = nowKey % 6 + 925;
    } else if (931 <= nowKey && nowKey < 937) {
        key = nowKey % 6 + 931;
    } else if (937 <= nowKey && nowKey < 943) {
        key = nowKey % 6 + 937;
    } else if (943 <= nowKey && nowKey < 949) {
        key = nowKey % 6 + 943;
    } else if (949 <= nowKey && nowKey < 955) {
        key = nowKey % 6 + 949;
    } else if (955 <= nowKey && nowKey < 961) {
        key = nowKey % 6 + 955;
    } else if (961 <= nowKey && nowKey < 967) {
        key = nowKey % 6 + 961;
    } else if (967 <= nowKey && nowKey < 873) {
        key = nowKey % 6 + 967;
    } else if (973 <= nowKey && nowKey < 979) {
        key = nowKey % 6 + 973;
    } else if (979 <= nowKey && nowKey < 985) {
        key = nowKey % 6 + 979;
    } else if (985 <= nowKey && nowKey < 991) {
        key = nowKey % 6 + 985;
    } else if (991 <= nowKey && nowKey < 997) {
        key = nowKey % 6 + 991;
    } else if (997 <= nowKey && nowKey < 1003) {
        key = nowKey % 6 + 997;
    } else if (1003 <= nowKey && nowKey < 1009) {
        key = nowKey % 6 + 1003;
    } else if (1009 <= nowKey && nowKey < 1015) {
        key = nowKey % 6 + 1009;
    } else if (1015 <= nowKey && nowKey < 1021) {
        key = nowKey % 6 + 1015;
    } else if (1021 <= nowKey && nowKey < 1027) {
        key = nowKey % 6 + 1021;
    } else if (1027 <= nowKey && nowKey < 1033) {
        key = nowKey % 6 + 1027;
    }
    //add result




    //ad result
    /* else{
                key = nowKey%6 + 31;
    }
        */
    $scope.gridOptions2 = {};
    $scope.gridOptions2.data = null;

    function getMoreAddress(key) {
        if (key == 1) {
            return '/library_db_product_more?key=' + key;
        } else return '/library_db_product_more?key=' + key;
    }
    // from db 본문 데이터 불러오는
    var getData = function (key) {
        $http.get(getMoreAddress(key), {
            timeout: canceler.promise
        }).success(function (data) {
            // console.log(data);
            $scope.gridOptions2.data = data;
        });
    }
    getData(key);
    //노가다 주석
    // from db 본문 데이터 불러오는   
    function setHeaderCategory(key, category_num) {
        switch (key) {
            case '1':
                $scope.data[category_num].category_1 = "온도측정";
                break;
            case '2':
                $scope.data[category_num].category_1 = "습도측정"; //바꾸기
                break;
            case '3':
                $scope.data[category_num].category_1 = "조도측정";
                break;
            case '4':
                $scope.data[category_num].category_1 = "UV측정";
                break;
            case '5':
                $scope.data[category_num].category_1 = "가스측정";
                break;
            case '6':
                $scope.data[category_num].category_1 = "심박측정";
                break;
            case '7':
                $scope.data[category_num].category_1 = "속도측정";
                break;
            case '8':
                $scope.data[category_num].category_1 = "거리측정";
                break;
            case '9':
                $scope.data[category_num].category_1 = "압력측정";
                break;
            case '10':
                $scope.data[category_num].category_1 = "물체감지";
                break;
            case '11':
                $scope.data[category_num].category_1 = "움직임감지";
                break;
            case '12':
                $scope.data[category_num].category_1 = "방향감지";
                break;
            case '13':
                $scope.data[category_num].category_1 = "근거리저속";
                break;
            case '14':
                $scope.data[category_num].category_1 = "근거리저속";
                break;
            case '15':
                $scope.data[category_num].category_1 = "근거리저속";
                break;
            case '16':
                $scope.data[category_num].category_1 = "근거리저속";
                break;
            case '17':
                $scope.data[category_num].category_1 = "근거리고속";
                break;
            case '18':
                $scope.data[category_num].category_1 = "장거리저속";
                break;
            case '19':
                $scope.data[category_num].category_1 = "장거리저속";
                break;
            case '20':
                $scope.data[category_num].category_1 = "장거리저속";
                break;
            case '21':
                $scope.data[category_num].category_1 = "장거리고속";
                break;
            case '22':
                $scope.data[category_num].category_1 = "저성능";
                break;
            case '23':
                $scope.data[category_num].category_1 = "중성능";
                break;
            case '24':
                $scope.data[category_num].category_1 = "고성능";
                break;
            case '25':
                $scope.data[category_num].category_1 = "진동경보";
                break;
            case '26':
                $scope.data[category_num].category_1 = "소리경보";
                break;
            case '27':
                $scope.data[category_num].category_1 = "문구경보";
                break;
            case '28':
                $scope.data[category_num].category_1 = "음성안내경보";
                break;
            case '29':
                $scope.data[category_num].category_1 = "LED깜박임경보";
                break;
        }
    }
    var getHeader = function (key) {
        $http.get(getHeaderAddr(key), {
            timeout: canceler.promise
        }).success(function (data) {
            // console.log(data);
            $scope.gridOptions2.data = data;
        });
    }
    // getHeader(key);
    // 파라미터 읽기
    function getParameter(param) {
        var returnValue;
        var url = location.href;
        var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&');
        for (var i = 0; i < parameters.length; i++) {
            var varName = parameters[i].split('=')[0];
            if (varName.toUpperCase() == param.toUpperCase()) {
                returnValue = parameters[i].split('=')[1];
                return decodeURIComponent(returnValue);
            }
        }
    };
    // console.log(selData.length);
    if (selData.length == 0) {
        $scope.data = null;
    }
}]);
