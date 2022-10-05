ymaps.ready(function () {
    const badge = {
        selected: "data:image/svg+xml, %3Csvg width='72px' height='87px' viewBox='0 0 72 87' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath d='M23.9997849,64 C24.9487536,64 48.1214857,45.407033 47.9995202,24.8085853 C47.9995202,11.107182 37.2544727,0 23.9997849,0 C10.7450971,0 4.95387243e-05,11.107182 4.95387243e-05,24.8085853 C-0.0390255195,45.7774523 23.0508161,64 23.9997849,64 Z' id='path-1'%3E%3C/path%3E%3Cfilter x='-39.6%25' y='-26.6%25' width='179.2%25' height='159.4%25' filterUnits='objectBoundingBox' id='filter-3'%3E%3CfeOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1'%3E%3C/feOffset%3E%3CfeGaussianBlur stdDeviation='6' in='shadowOffsetOuter1' result='shadowBlurOuter1'%3E%3C/feGaussianBlur%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.172894022 0' type='matrix' in='shadowBlurOuter1'%3E%3C/feColorMatrix%3E%3C/filter%3E%3C/defs%3E%3Cg id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='map-locator/point' transform='translate(4.000000, 1.000000)'%3E%3Cg id='Oval-2' transform='translate(8.000000, 9.000000)'%3E%3Cg id='Oval'%3E%3Cmask id='mask-2' fill='white'%3E%3Cuse xlink:href='%23path-1'%3E%3C/use%3E%3C/mask%3E%3Cg id='Mask'%3E%3Cuse fill='black' fill-opacity='1' filter='url(%23filter-3)' xlink:href='%23path-1'%3E%3C/use%3E%3Cuse fill='%23003595' fill-rule='evenodd' xlink:href='%23path-1'%3E%3C/use%3E%3C/g%3E%3Cpath d='M23.9781978,15.0000106 C18.4582045,15.0120455 13.9919919,19.494516 14.0000108,25.0145204 C14.0080297,30.5345247 18.4872467,35.0040002 24.0072517,34.9999973 C29.5272567,34.9959944 33.9999869,30.5200273 34,25.0000171 C33.9980744,22.3446623 32.9408944,19.7989356 31.0612322,17.9233614 C29.1815701,16.0477872 26.6335488,14.9961532 23.9781978,15.0000106 M27.9752908,25.0000171 C27.9752881,26.6202916 26.9988688,28.0808854 25.5016494,28.7002564 C24.0044301,29.3196275 22.2815146,28.9756971 21.1368493,27.8289499 C19.9921841,26.6822027 19.6513842,24.9586641 20.2734736,23.4625713 C20.895563,21.9664786 22.3579271,20.9927134 23.9781978,20.995654 C25.0376239,20.9937243 26.0543197,21.4132279 26.8041297,22.1616751 C27.5539396,22.9101223 27.9752925,23.9260536 27.9752908,24.9854822' id='Shape' fill='%23FFFFFF' mask='url(%23mask-2)'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
        geo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24'%3E%3Cpath d='M24 12a12 12 0 11-24 0 12 12 0 1124 0z' fill='%23003595'/%3E%3Cpath d='M16 12a4 4 0 11-8 0 4 4 0 118 0z' fill='%23ECECEC'/%3E%3C/svg%3E",
    };

    const POINT_PRODUCT_PRESET = () => [
        {
            name: 'custom#byProduct',

            options: {
                iconLayout: 'default#imageWithContent',
                iconImageHref: '/img/placemark.svg',
                iconImageSize: [32, 40],
                iconImageOffset: [-16, -40]
            }
        }
    ];

    const POINT_PRODUCT_PRESET_RED = () => [
        {
            name: 'custom#byProductRed',

            options: {
                iconLayout: 'default#imageWithContent',
                iconImageHref: '/img/placemark-red.svg',
                iconImageSize: [32, 40],
                iconImageOffset: [-16, -40]
            }
        }
    ];

    const CLUSTER_PRESET = (ymaps) => [
        {
            name: 'custom#cluster',
            options: {
                clusterIcons: [
                    {
                        href:
                            '/img/placemark-cluster.svg',
                        size: [48, 47],
                        offset: [-24, -47]
                    }
                ],

                clusterIconContentLayout: ymaps.templateLayoutFactory.createClass(
                    '<span style="position:absolute; right:0; top:0; width:20px; text-align:center; font: 400 12px / 19px Open Sans, sans-serif;color: #003595;">'
                    + '{{properties.geoObjects.length}}'
                    + '</span>'
                )
            }
        }
    ];

    const CLUSTER_PRESET_RED = (ymaps) => [
        {
            name: 'custom#clusterRed',
            options: {
                clusterIcons: [
                    {
                        href:
                            '/img/placemark-cluster-red.svg',
                        size: [48, 47],
                        offset: [-24, -47]
                    }
                ],

                clusterIconContentLayout: ymaps.templateLayoutFactory.createClass(
                    '<span style="position:absolute; right:0; top:0; width:20px; text-align:center; font: 400 12px / 19px Open Sans, sans-serif;color: #003595;">'
                    + '{{properties.geoObjects.length}}'
                    + '</span>'
                )
            }
        }
    ];

    const CLUSTER_PRESET_BLUE_RED = (ymaps) => [
        {
            name: 'custom#clusterBlueRed',
            options: {
                clusterIcons: [
                    {
                        href:
                            '/img/placemark-cluster-blue-red.svg',
                        size: [48, 47],
                        offset: [-24, -47]
                    }
                ],

                clusterIconContentLayout: ymaps.templateLayoutFactory.createClass(
                    '<span style="position:absolute; right:0; top:0; width:20px; text-align:center; font: 400 12px / 19px Open Sans, sans-serif;color: #003595;">'
                    + '{{properties.geoObjects.length}}'
                    + '</span>'
                )
            }
        }
    ];

    const POINT_ACTIVE_PRESET = () => [
        {
            name: 'custom#activePoint',

            options: {
                iconLayout: 'default#image',
                iconImageHref: badge.selected,
                iconImageSize: [88, 88],
                iconImageOffset: [-44, -75]
            }
        }
    ];

    const POINT_GEO = () => [
        {
            name: 'custom#geo',

            options: {
                iconLayout: 'default#image',
                iconImageHref: badge.geo,
                iconImageSize: [30, 30],
                iconImageOffset: [-15, -15]
            }
        }
    ];

    const PRESETS = (ymaps) => [
        ...POINT_PRODUCT_PRESET(ymaps),
        ...POINT_ACTIVE_PRESET(ymaps),
        ...POINT_PRODUCT_PRESET_RED(ymaps),
        ...CLUSTER_PRESET(ymaps),
        ...CLUSTER_PRESET_RED(ymaps),
        ...CLUSTER_PRESET_BLUE_RED(ymaps),
        ...POINT_GEO(ymaps)
    ];

// badges --------------------------------------------

    let mapInstance = null;
    let lomInstance = null;

    !function initPresets() {
        PRESETS(ymaps).forEach((p) => ymaps.option.presetStorage.add(p.name, p.options));
    }();

    !function rewriteClusterer() {
        // // Зададим всплывающую подсказку кластерам в зависимости от состава.
        var clusterer = new ymaps.Clusterer();

        clusterer.createCluster = function (center, geoObjects) {
            console.log(center, geoObjects);
            // Создаем метку-кластер с помощью стандартной реализации метода.
            var clusterPlacemark = ymaps.Clusterer.prototype.createCluster.call(this, center, geoObjects),
                geoObjectsLength = clusterPlacemark.getGeoObjects().length,
                hintContent;

            if (geoObjectsLength < 10) {
                hintContent = 'Мало меток';
            } else if (geoObjectsLength < 100) {
                hintContent = 'Нормально так меток';
            } else {
                hintContent = 'Меток навалом';
            }
            clusterPlacemark.properties.set('hintContent', hintContent);
            return clusterPlacemark;
        };
    }();

    !function initMap() {
        mapInstance = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 11
        })
    }();

    !function initLOM() {
        lomInstance = new ymaps.ObjectManager(
            {
                clusterize                  : true,
                clusterHasBalloon           : false,
                geoObjectOpenBalloonOnClick : false
            }
        );

        lomInstance.clusters.options.set(
            'preset',
            'custom#cluster'
        );

        const points = [
            [55.831903, 37.411961], [55.763338, 37.565466], [55.763338, 37.565466], [55.744522, 37.616378], [55.780898, 37.642889], [55.793559, 37.435983], [55.800584, 37.675638], [55.716733, 37.589988], [55.775724, 37.560840], [55.822144, 37.433781], [55.874170, 37.669838], [55.716770, 37.482338], [55.780850, 37.750210], [55.810906, 37.654142], [55.865386, 37.713329], [55.847121, 37.525797], [55.778655, 37.710743], [55.623415, 37.717934], [55.863193, 37.737000], [55.866770, 37.760113], [55.698261, 37.730838], [55.633800, 37.564769], [55.639996, 37.539400], [55.690230, 37.405853], [55.775970, 37.512900], [55.775777, 37.442180], [55.811814, 37.440448], [55.751841, 37.404853], [55.627303, 37.728976], [55.816515, 37.597163], [55.664352, 37.689397], [55.679195, 37.600961], [55.673873, 37.658425], [55.681006, 37.605126], [55.876327, 37.431744], [55.843363, 37.778445], [55.875445, 37.549348], [55.662903, 37.702087], [55.746099, 37.434113], [55.838660, 37.712326], [55.774838, 37.415725], [55.871539, 37.630223], [55.657037, 37.571271], [55.691046, 37.711026], [55.803972, 37.659610], [55.616448, 37.452759], [55.781329, 37.442781], [55.844708, 37.748870], [55.723123, 37.406067], [55.858585, 37.484980]
        ];

        let currentId = 0;

        points.forEach(el => {
            lomInstance.add({
                type: 'Feature',
                id: currentId++,
                geometry: {
                    type: 'Point',
                    coordinates: el
                },
                properties: {
                    color: currentId > 15 ? 'blue' : 'red'
                }
            });
        })

        lomInstance.objects.events.add(['add'], (event) => {
            _setObjectPreset(event.originalEvent.child);
        });

        lomInstance.clusters.events.add(['add'], (event) => {
            _setClusterPreset(event.originalEvent.child);
        });

        mapInstance.geoObjects.add(lomInstance);
    }();

    function _updatePresetOnLomInstance() {
        if (!lomInstance) {
            return;
        }

        lomInstance.objects.each((object) => {
            _setObjectPreset(object);
        });

        lomInstance.clusters.each((object) => {
            _setClusterPreset(object)
        });
    }
    _updatePresetOnLomInstance();

    function _setClusterPreset(object) {
        console.log(object);
        const count = {
            red: 0,
            blue: 0,
        };

        object.features.forEach(el => {
            if (el.properties.color === 'blue') {
                count.blue += 1;
            }
            if (el.properties.color === 'red') {
                count.red += 1;
            }
        });

        if (count.red === 0) {
            lomInstance.clusters.setClusterOptions(object.id, {
                preset: 'custom#cluster'
            });
            return;
        }
        if (count.blue === 0) {
            lomInstance.clusters.setClusterOptions(object.id, {
                preset: 'custom#clusterRed'
            });
            return;
        }
        lomInstance.clusters.setClusterOptions(object.id, {
            preset: 'custom#clusterBlueRed'
        });
    }

    function _setObjectPreset(object) {
        if (!object || !object.properties) {
            return;
        }

        if (object.properties.color === 'red') {
            lomInstance.objects.setObjectOptions(object.id, {
                preset: 'custom#byProductRed'
            });
        } else {
            lomInstance.objects.setObjectOptions(object.id, {
                preset: 'custom#byProduct'
            });
        }

    }
});
