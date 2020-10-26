const tiles = {
    topo: {
        URL: 'http://monitor.krasn.ru/tiles/topo/{z}/{x}/{-y}.png',
        resolution_levels: 17
    },
    sentinel: {
        URL: 'http://monitor.krasn.ru/tiles/sentinel2016/{z}/{x}/{-y}.jpeg',
        resolution_levels: 12,
    },
    relief_dark: {
        URL: 'http://monitor.krasn.ru/tiles/relief_dark/{z}/{x}/{-y}.jpeg',
        resolution_levels: 13
    }
}

export default tiles