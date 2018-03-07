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
  databases = [];
  table = [];
  database;
  item: FormGroup;
  column = [];
  requests: any;
  blocktable = true;
  blockcolumns = true;
  request = [];


  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.getListDrivers();
    this.startSelectBox('#driver');
    this.item = new FormGroup({
      database: new FormControl(''),
      tables: new FormControl('')
    });
    this.request['get'] = true;
    this.request['post'] = true;
    this.request['put'] = true;
    this.request['delete'] = true;

    localStorage.removeItem('database');
    this.item.get('database').valueChanges.subscribe(data => console.log(data));

    const bomb = this;
    $('#database').on('change', function () {
      localStorage.setItem('database', $(this).val());
      console.log('Database: ' + $(this).val());
      const database = $(this).val();
      this.blocktable = false;
      setTimeout(
        function () {
          bomb.searchtables(database);
          bomb.blocktable = true;
        }, 200);
    });

    $('#tables').on('change', function () {
      localStorage.setItem('tables', $(this).val());
      console.log('Table: ' + $(this).val());
      const table = $(this).val();
      this.blockcolumns = false;
      setTimeout(
        function () {
          bomb.searchcolumns(localStorage.getItem('database'), table);
          bomb.blockcolumns = true;
        }, 200);
    });
  }

  active(request) {
    console.log(request);
    this.request[request] = !this.request[request];
  }

  startSelectBox(id) {
    setTimeout(
      function () {
        $(id).material_select();
      }, 300);
  }

  getListDrivers() {
    this.drivers = [];
    const result = (this.api.getListDrivers());
    result.then(res => {
      this.drivers = res.drivers;
    });
  }

  searchtables(database) {
    if (!database) {
      database = localStorage.getItem('database');
    }
    console.log('DataBase: ' + database);
    this.table = [];
    const result = (this.api.searchTables(database));
    result.then(res => {
      this.table = res;
      this.startSelectBox('#tables');
      const bomb = this;
      this.blockcolumns = false;
      setTimeout(
        function () {
          localStorage.setItem('tables', $('#tables').find('option:first-child').val());
          let Sdatabase = localStorage.getItem('database');
          if (!Sdatabase) {
            Sdatabase = $('#database').find('option:first-child').val();
          }
          bomb.searchcolumns(Sdatabase, $('#tables').find('option:first-child').val());
          bomb.blockcolumns = true;
        }, 300);
    });
  }

  searchcolumns(database, table) {
    this.column = [];
    console.log('colunms \n Database:' + database + ' - Table: ' + table);
    if (database && table) {
      const result = (this.api.searchColumns(database, table));
      result.then(res => {
        // console.log(res);
        this.column = res;
        this.startSelectBox('#columns');
      });
    }
  }

  searchdatabase() {
    this.databases = [];
    const result = (this.api.searchDatabases());
    result.then(res => {
      this.databases = res;
      this.startSelectBox('#database');
      const bomb = this;
      this.blocktable = false;
      setTimeout(
        function () {
          bomb.searchtables($('#database').find('option:first-child').val());
          localStorage.setItem('database', $('#database').find('option:first-child').val());
          bomb.blocktable = true;
        }, 300);
    });
  }
}
