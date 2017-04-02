import { Component, ElementRef, Input } from '@angular/core';
import { MapService } from './map.service';
import { SearchService } from './search.service';
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';
import Home from 'esri/widgets/Home';
import Search from 'esri/widgets/Search';
import Expand from 'esri/widgets/Expand';
import BasemapGallery from 'esri/widgets/BasemapGallery';
import Locate from 'esri/widgets/Locate';

declare const __moduleName: string;

@Component ({
  moduleId: __moduleName,
  selector: 'map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css'],
  providers: [MapService, SearchService]
})

export class MapComponent {
  @Input() zoom: number;
  @Input() longitude: number;
  @Input() latitude: number;

  view: any = null;
  home: any = null;
  search: any = null;
  basemapGalleryExpand: any = null;
  basemapGallery: any = null;
  locate: any = null;

  constructor(
    private _mapService: MapService,
    private _searchService: SearchService,
    private elRef: ElementRef
  ) {}

  ngOnInit() {
    this.view = new MapView({
      container: this.elRef.nativeElement.firstChild,
      map: this._mapService.map,
      zoom: this.zoom,
      center: [this.longitude, this.latitude],
    });

    this.home = new Home({
      view: this.view
    });

    this.search = new Search({
      view: this.view,
      sources: this._searchService.sources,
      searchAllEnabled: false
    });

    this.basemapGallery = new BasemapGallery({
      view: this.view
    });

    this.basemapGalleryExpand = new Expand({
      view: this.view,
      content: this.basemapGallery,
      expandIconClass: 'esri-icon-basemap'
    });

    this.locate = new Locate({
      view: this.view,
      graphic: null
    });

    this.view.ui.add(this.home, 'bottom-right');

    this.view.ui.add(this.locate, 'bottom-right');

    this.view.ui.add(this.search, 'top-left');

    this.view.ui.add(this.basemapGalleryExpand, 'top-right');

    this.view.ui.move('zoom', 'bottom-right');
  }
}
