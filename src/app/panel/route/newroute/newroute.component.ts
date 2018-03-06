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
  table = false;
  database;
  item: FormGroup;
  column = false;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.getListDrivers();
    this.startSelectBox('#driver');
    this.item = new FormGroup({
      database: new FormControl(''),
      tables: new FormControl('')
    });
    localStorage.removeItem('database');
    this.item.get('database').valueChanges.subscribe(data => console.log(data));
    const bomb = this;
    $('#database').on('change', function () {
      bomb.searchtables($(this).val());
      localStorage.setItem('database', $(this).val());
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
    const result = (this.api.searchTables(database));
    result.then(res => {
      this.table = res;
      // console.log(res);
      this.startSelectBox('#tables');
      const bomb = this;
      setTimeout(
        function () {
          bomb.searchcolumns($('#database').find('option:first-child').val(), $('#tables').find('option:first-child').val());
        }, 500);
    });
  }

  searchcolumns(database, table) {
    console.log('D:' + database + ' T:' + table);
    if (database && table) {
      const result = (this.api.searchColumns(database, table));
      result.then(res => {
        console.log(res);
        this.column = res;
        this.startSelectBox('#columns');
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
        }, 500);
    });
  }

}
