import { Injectable } from '@angular/core';

import Basemap from 'esri/Basemap';
import Collection from 'esri/core/Collection';

@Injectable()

export class BasemapService {
  source: any = null
  basemapCollection: any = null

  constructor() {

    this.basemapCollection = new Collection();
    // todo: refactor below to iteration
    const grayBasemap = Basemap.fromId('gray-vector');
    const darkBasemap = Basemap.fromId('dark-gray-vector');
    const nightBasemap = Basemap.fromId('streets-night-vector');
    const topoBasemap = Basemap.fromId('topo-vector');
    const navBasemap = Basemap.fromId('streets-navigation-vector');
    const imageryBasemap = Basemap.fromId('satellite');

    this.basemapCollection.add(grayBasemap);
    this.basemapCollection.add(darkBasemap);
    this.basemapCollection.add(nightBasemap);
    this.basemapCollection.add(navBasemap);
    this.basemapCollection.add(topoBasemap);
    this.basemapCollection.add(imageryBasemap);
    // end todo
    this.source = this.basemapCollection;
  }
}
