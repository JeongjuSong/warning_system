var map = new daum.maps.Map(document.getElementById('map'), { // 지도를 표시할 div
    center : new daum.maps.LatLng(37.560169, 126.993340), // 지도의 중심좌표 
    level : 11 // 지도의 확대 레벨 
});


var clusterer = new daum.maps.MarkerClusterer({
    map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
    averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
    minLevel: 7 // 클러스터 할 최소 지도 레벨
});

// 데이터를 가져오기 위해 jQuery를 사용합니다
// 데이터를 가져와 마커를 생성하고 클러스터러 객체에 넘겨줍니다
$.get("/map/location.json", function(data) {
    // 데이터에서 좌표 값을 가지고 마커를 표시합니다
    // 마커 클러스터러로 관리할 마커 객체는 생성할 때 지도 객체를 설정하지 않습니다
    var markers = $(data.positions).map(function(i, position) {
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
        '                <div class="ellipsis">' + position.new_add  + '</div>' + 
        '                <div class="jibun ellipsis">' + position.old_add  + '</div>' + 
        '                <div><a href="' + position.homepage  + '"target="_blank" class="link">홈페이지</a></div>' + 
        '            </div>' + 
        '        </div>' + 
        '    </div>' +    
        '</div>';
          
          
         


        var maks = new daum.maps.Marker({
            map: map,
            position : new daum.maps.LatLng(position.lat, position.lng)
        });
        
        var infowindow = new daum.maps.InfoWindow({
            content: content,   
            //이부분 x표시 
             removable : true 
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
    return function() {
        infowindow.open(map, markers);
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}

