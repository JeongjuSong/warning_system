// var map = new daum.maps.Map(document.getElementById('map'), { // 지도를 표시할 div
//     center: new daum.maps.LatLng(36.2683, 127.6358), // 지도의 중심좌표 
//     level: 14 // 지도의 확대 레벨 
// });

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new daum.maps.LatLng(36.2683, 127.6358), // 지도의 중심좌표
        level: 14 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new daum.maps.Map(mapContainer, mapOption); 
var clusterer = new daum.maps.MarkerClusterer({
    map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
    averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
    minLevel: 10 // 클러스터 할 최소 지도 레벨 
});


var options = { // Drawing Manager를 생성할 때 사용할 옵션입니다
    map: map, // Drawing Manager로 그리기 요소를 그릴 map 객체입니다
    drawingMode: [ // drawing manager로 제공할 그리기 요소 모드입니다
        // daum.maps.drawing.OverlayType.MARKER,
        daum.maps.drawing.OverlayType.POLYLINE,
        daum.maps.drawing.OverlayType.RECTANGLE,
        daum.maps.drawing.OverlayType.CIRCLE,
        daum.maps.drawing.OverlayType.POLYGON
    ],
    // 사용자에게 제공할 그리기 가이드 툴팁입니다
    // 사용자에게 도형을 그릴때, 드래그할때, 수정할때 가이드 툴팁을 표시하도록 설정합니다
    guideTooltip: ['draw', 'drag', 'edit'], 
    // markerOptions: { // 마커 옵션입니다 
    //     draggable: true, // 마커를 그리고 나서 드래그 가능하게 합니다 
    //     removable: true // 마커를 삭제 할 수 있도록 x 버튼이 표시됩니다  
    // },
    polylineOptions: { // 선 옵션입니다
        draggable: true, // 그린 후 드래그가 가능하도록 설정합니다
        removable: true, // 그린 후 삭제 할 수 있도록 x 버튼이 표시됩니다
        editable: true, // 그린 후 수정할 수 있도록 설정합니다 
        strokeColor: '#39f', // 선 색
        hintStrokeStyle: 'dash', // 그리중 마우스를 따라다니는 보조선의 선 스타일
        hintStrokeOpacity: 0.5  // 그리중 마우스를 따라다니는 보조선의 투명도
    },
    rectangleOptions: {
        draggable: true,
        removable: true,
        editable: true,
        strokeColor: '#39f', // 외곽선 색
        fillColor: '#39f', // 채우기 색
        fillOpacity: 0.5 // 채우기색 투명도
    },
    circleOptions: {
        draggable: true,
        removable: true,
        editable: true,
        strokeColor: '#39f',
        fillColor: '#39f',
        fillOpacity: 0.5
    },
    polygonOptions: {
        draggable: true,
        removable: true,
        editable: true,
        strokeColor: '#39f',
        fillColor: '#39f',
        fillOpacity: 0.5,
        hintStrokeStyle: 'dash',
        hintStrokeOpacity: 0.5
    }
};

// 위에 작성한 옵션으로 Drawing Manager를 생성합니다
var manager = new daum.maps.drawing.DrawingManager(options);

// 버튼 클릭 시 호출되는 핸들러 입니다
function selectOverlay(type) {
    // 그리기 중이면 그리기를 취소합니다
    manager.cancel();

    // 클릭한 그리기 요소 타입을 선택합니다
    manager.select(daum.maps.drawing.OverlayType[type]);
}

// 데이터를 가져오기 위해 jQuery를 사용합니다
// 데이터를 가져와 마커를 생성하고 클러스터러 객체에 넘겨줍니다
$.get("/map/location.json", function (data) {
    // 데이터에서 좌표 값을 가지고 마커를 표시합니다
    // 마커 클러스터러로 관리할 마커 객체는 생성할 때 지도 객체를 설정하지 않습니다
    var markers = $(data.positions).map(function (i, position) {
        //여기가 콘텐츠 넣는 부분입니다.

        var content = '<div class="wrap">' +
            '    <div class="info">' +
            '        <div class="title">' +
            position.content +
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
            '        </div>' +
            '        <div class="body">' +
            '            <div class="img">' +
            '                <img src="' + position.img_src + '"width="73" height="70">' +
            '           </div>' +
            '            <div class="desc">' +
            '                <div class="ellipsis">' + position.new_add + '</div>' +
            '                <div class="jibun ellipsis">' + position.old_add + '</div>' +
            '                <div><a href="' + position.homepage + '"target="_blank" class="link">홈페이지</a></div>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>';





        var maks = new daum.maps.Marker({
            map: map,
            position: new daum.maps.LatLng(position.lat, position.lng)
        });

        var infowindow = new daum.maps.InfoWindow({
            content: content,
            //이부분 x표시 
            removable: true
        });


        daum.maps.event.addListener(maks, 'click', makeOverListener(map, maks, infowindow));

        return maks;

    });

    // 클러스터러에 마커들을 추가합니다
    clusterer.addMarkers(markers);

});

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(map, markers, infowindow) {
    infowindow.close();
    return function () {
        infowindow.open(map, markers);
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
    return function () {
        infowindow.close();
    };
}
