// 지도 초기화
const map1 = L.map('map1').setView([37.5665, 126.9780], 12); // 서울 중심
const map2 = L.map('map2').setView([37.5665, 126.9780], 12);

// 지도 타일 레이어 추가
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map1);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map2);

// 지도 동기화 (한 지도를 움직이면 다른 지도도 같이 움직이게)
map1.on('move', function() {
    map2.setView(map1.getCenter(), map1.getZoom());
});

map2.on('move', function() {
    map1.setView(map2.getCenter(), map2.getZoom());
});