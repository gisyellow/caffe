import { Injectable } from '@angular/core';
import Locator from 'esri/tasks/Locator';
import FeatureLayer from 'esri/layers/FeatureLayer';
import PictureMarkerSymbol from 'esri/symbols/PictureMarkerSymbol';

@Injectable()

export class SearchService {

  sources: any = null;

  constructor() {
    this.sources = [
      {
        locator: new Locator('//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer'),
        singleLineFieldName: 'SingleLine',
        outFields: ['Addr_type'],
        name: 'Address Search',
        localSearchOptions: {
          minScale: 300000,
          distance: 50000
        },
        placeholder: 'Find address or place',
        resultSymbol: new PictureMarkerSymbol({
           url: '../../assets/images/search-symbol-32.svg',
           width: 24,
           height: 24,
           xoffset: 0,
           yoffset: 0
       })
     },
     {
       featureLayer: new FeatureLayer({
         url: "https://services.arcgis.com/Ax7zaEBe7tPW99BV/arcgis/rest/services/Starbucks_Store_Locations/FeatureServer/0",
         outFields: ["*"]
       }),
       searchFields: ["Store_Name"],
       displayField: "Store_Name",
       exactMatch: false,
       outFields: ["*"],
       name: "Store Search",
       placeholder: "Find store by name",
       resultSymbol: new PictureMarkerSymbol({
          url: '../../assets/images/search-symbol-32.svg',
          width: 24,
          height: 24,
          xoffset: 0,
          yoffset: 0
      }),
       maxResults: 6,
       maxSuggestions: 6,
       suggestionsEnabled: true,
       minSuggestCharacters: 3
     }
    ];
  }

}
