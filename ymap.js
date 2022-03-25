ymaps.ready(init);

let placemarks = [
    {
        latitude:52.60574955,
        longitude:39.60493108,
        hintContent: '<div class="map__hint">Нижний парк</div>',
        balloonContent: [
            '<div class="map__balloon">',
            'Нижний парк',
            '</div>'
        ]
    },
    {
        latitude:52.60550634,
        longitude:39.60373979,
        hintContent: '<div class="map__hint">Нижний парк</div>',
        balloonContent: [
            '<div class="map__balloon">',
            'Нижний парк',
            '</div>'
        ]
    },
    {
        latitude:52.60544997,
        longitude:39.60712977,
        hintContent: '<div class="map__hint">Нижний парк</div>',
        balloonContent: [
            '<div class="map__balloon">',
            'Нижний парк',
            '</div>'
        ]
    }
];

let geoObjects = [];

function init() {
    let map = new ymaps.Map('map', {
       center: [52.608826, 39.599229],
        zoom: 12,
        controls: ['zoomControl'],

    });

    for (let i = 0;  i < placemarks.length; i++) {
        geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude], {
                hintContent: placemarks[i].hintContent,
                balloonContent: placemarks[i].balloonContent.join('')
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'image/1.png',
                iconImageSize: [44,66],
                iconImageOffset: [-22, -66]
            });
    }

    let clusterer = new ymaps.Clusterer({

    });

    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);
}