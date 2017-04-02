declare const System: any;
declare const esriSystem: any;

const start = performance.now();

// load Esri modules with the help of esri-system-js library
esriSystem.register([
    'esri/Map',
    'esri/views/MapView',
    'esri/widgets/Home',
    'esri/widgets/Search',
    'esri/widgets/Expand',
    'esri/widgets/BasemapGallery',
    'esri/widgets/Locate',
    'esri/tasks/Locator',
    'esri/layers/FeatureLayer',
    'esri/symbols/PictureMarkerSymbol'
], function() {
  const end = performance.now();
  const time = end - start;
  console.log(`Loaded esri modules ${(time / 1000.0).toFixed(2)}s`);
    // bootstrap the app
    System.import('main.js')
        .then(null, console.error.bind(console));
});
