// ���� �ʱ�ȭ
const map1 = L.map('map1').setView([37.5665, 126.9780], 12); // ���� �߽�
const map2 = L.map('map2').setView([37.5665, 126.9780], 12);

// ���� Ÿ�� ���̾� �߰�
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map1);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map2);

// ���� ����ȭ (�� ������ �����̸� �ٸ� ������ ���� �����̰�)
map1.on('move', function() {
    map2.setView(map1.getCenter(), map1.getZoom());
});

map2.on('move', function() {
    map1.setView(map2.getCenter(), map2.getZoom());
});