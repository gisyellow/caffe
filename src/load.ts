declare const System: any;
declare const esriSystem: any;

// load Esri modules with the help of esri-system-js library
esriSystem.register([
    'esri/Map',
    'esri/views/MapView',
    'esri/widgets/Home'
], function() {
    // bootstrap the app
    System.import('main.js')
        .then(null, console.error.bind(console));
});
