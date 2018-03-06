import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../api.service';
import {FormArray, FormGroup, FormControl, Validators, ControlContainer} from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-newroute',
  templateUrl: './newroute.component.html',
  styleUrls: ['./newroute.component.css']
})
export class NewrouteComponent implements OnInit {

  drivers;
  databases = false;
  tables = false;
  database;
  item: FormGroup;
  selectedItem;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.getListDrivers();
    this.startSelectBox('#driver');
    this.item = new FormGroup({
      database: new FormControl('')
    });

    this.item.get('database').valueChanges.subscribe(data => console.log(data));
    const bomb = this;
    $('#database').on('change', function () {
      bomb.searchtables($(this).val());
    });
  }

  startSelectBox(id) {
    setTimeout(
      function () {
        $(id).material_select();
      }, 500);
  }

  getListDrivers() {
    const result = (this.api.getListDrivers());
    result.then(res => {
      this.drivers = res.drivers;
    });
  }

  searchtables(database) {
    if (database) {
      const result = (this.api.searchTables(database));
      result.then(res => {
        this.tables = res;
        if (this.tables) {
          this.startSelectBox('#tables');
        }
      });
    }
  }

  searchdatabase() {
    const result = (this.api.searchDatabases());
    result.then(res => {
      this.databases = res;
      this.startSelectBox('#database');
      const bomb = this;
      setTimeout(
        function () {
          bomb.searchtables($('#database').find('option:first-child').val());
        }, 300);
    });
  }

}
