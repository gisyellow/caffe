import { Injectable } from '@angular/core';
import Map from 'esri/Map';

@Injectable()

export class MapService {

    map: any = null;

    constructor() {
        this.map = new Map({
            basemap: 'dark-gray-vector',
        });
    }
}
