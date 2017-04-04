import { Injectable } from '@angular/core';
import Map from 'esri/Map';
import FeatureLayer from 'esri/layers/FeatureLayer';

@Injectable()

export class MapService {

    map: any = null;

    constructor() {

      const featureLayer = new FeatureLayer({
        url: 'https://services.arcgis.com/Ax7zaEBe7tPW99BV/arcgis/rest/services/Starbucks_Store_Locations/FeatureServer/0'
      });

      this.map = new Map({
          basemap: 'dark-gray-vector',
      });

      this.map.add(featureLayer);
    }
}
