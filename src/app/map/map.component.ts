import { Component, ElementRef, Input } from '@angular/core';
import { MapService } from './map.service';
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';

declare const __moduleName: string;

@Component ({
  moduleId: __moduleName,
  selector: 'map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css']
})

export class MapComponent {
  @Input() zoom: number;
  @Input() longitude: number;
  @Input() latitude: number;

  view: any = null;

  constructor(
    private _mapService: MapService,
    private elRef: ElementRef
  ) {}

  ngOnInit() {
    this.view = new MapView({
      container: this.elRef.nativeElement.firstChild,
      map: this._mapService.map,
      zoom: this.zoom,
      center: [this.longitude, this.latitude],
    });

    this.view.ui.move('zoom', 'bottom-right');
  }
}
