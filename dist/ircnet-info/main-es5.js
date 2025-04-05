(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/RaO":
    /*!*********************************!*\
      !*** ./src/app/app.settings.ts ***!
      \*********************************/

    /*! exports provided: AppSettings */

    /***/
    function RaO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppSettings", function () {
        return AppSettings;
      });

      var AppSettings = function AppSettings() {
        _classCallCheck(this, AppSettings);
      };

      AppSettings.CLIS_URL = 'https://clis.ircnet.com/';
      AppSettings.INFOBOT_API_URL = 'https://bot-ca.ircnet.info/api';
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\dev\tools-ircnet-info\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "3C1h":
    /*!*******************************************************!*\
      !*** ./src/app/server-list/server-list.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function C1h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2ZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "8oJK":
    /*!********************************************************!*\
      !*** ./src/app/channel-list/channel-list.component.ts ***!
      \********************************************************/

    /*! exports provided: ChannelListComponent */

    /***/
    function oJK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChannelListComponent", function () {
        return ChannelListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_channel_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./channel-list.component.html */
      "EMXw");
      /* harmony import */


      var _channel_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./channel-list.component.css */
      "uGq0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../app.settings */
      "/RaO");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* tslint:disable:triple-equals one-line */


      var Channel = function Channel() {
        _classCallCheck(this, Channel);
      };

      var DataTablesResponse = function DataTablesResponse() {
        _classCallCheck(this, DataTablesResponse);
      };

      var ChannelListComponent = /*#__PURE__*/function () {
        function ChannelListComponent(http) {
          _classCallCheck(this, ChannelListComponent);

          this.http = http;
          this.dtOptions = {};
          this.filterTypes = ['Channel or topic', 'Channel', 'Topic'];
          this.filterType = this.filterTypes[0];
          this.pageSizes = [25, 50, 100];
          this.pageSize = this.pageSizes[0];
          this.searchTerm = '';
        }

        _createClass(ChannelListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var that = this;
            this.dtOptions = {
              dom: 'tipr',
              pagingType: 'full_numbers',
              pageLength: this.pageSize,
              serverSide: true,
              processing: true,
              order: [[1, 'desc']],
              columns: [{
                data: 'name',
                orderable: true
              }, {
                data: 'userCount',
                orderable: true
              }, {
                data: 'topic',
                orderable: false
              }],
              ajax: function ajax(dataTablesParameters, callback) {
                if (_this.filterType == _this.filterTypes[0]) {
                  dataTablesParameters.search.value = _this.searchTerm;
                } else if (_this.filterType == _this.filterTypes[1]) {
                  dataTablesParameters.columns[0].search.value = _this.searchTerm;
                } else if (_this.filterType == _this.filterTypes[2]) {
                  dataTablesParameters.columns[2].search.value = _this.searchTerm;
                }

                that.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].CLIS_URL, dataTablesParameters, {}).subscribe(function (response) {
                  that.channels = response.data;
                  callback({
                    recordsTotal: response.recordsTotal,
                    recordsFiltered: response.recordsFiltered,
                    data: []
                  });
                }, function (error) {
                  return _this.errorMessage = 'Connection error. Please try again.';
                });
              }
            };
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.searchTermInput.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(300)).subscribe(function (value) {
              _this2.filterByChannelName();
            });
          }
        }, {
          key: "filterTypeChanged",
          value: function filterTypeChanged() {
            this.datatableElement.dtInstance.then(function (dtInstance) {
              dtInstance.draw();
            });
          }
        }, {
          key: "filterByChannelName",
          value: function filterByChannelName() {
            this.datatableElement.dtInstance.then(function (dtInstance) {
              dtInstance.draw();
            });
          }
        }]);

        return ChannelListComponent;
      }();

      ChannelListComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      };

      ChannelListComponent.propDecorators = {
        datatableElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]]
        }],
        searchTermInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['searchTermInput']
        }]
      };
      ChannelListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-channel-list',
        template: _raw_loader_channel_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_channel_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ChannelListComponent);
      /***/
    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.component.html */
      "Gd4t");
      /* harmony import */


      var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component.css */
      "RV7M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ctorParameters = function () {
        return [];
      };

      HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomeComponent);
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Cajz":
    /*!******************************************************!*\
      !*** ./src/app/correct-server-name-encoding.pipe.ts ***!
      \******************************************************/

    /*! exports provided: CorrectServerDescriptionEncodingPipe */

    /***/
    function Cajz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorrectServerDescriptionEncodingPipe", function () {
        return CorrectServerDescriptionEncodingPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CorrectServerDescriptionEncodingPipe = /*#__PURE__*/function () {
        function CorrectServerDescriptionEncodingPipe() {
          _classCallCheck(this, CorrectServerDescriptionEncodingPipe);
        }

        _createClass(CorrectServerDescriptionEncodingPipe, [{
          key: "transform",
          value: function transform(value) {
            if (value == null) {
              return;
            }

            if (value === 'Friedrich-Alexander-Universit�t Erlangen-N�rnberg') {
              return 'Friedrich-Alexander-Universität Erlangen-Nürnberg';
            } else if (value.startsWith('[irc.belwue.de]')) {
              value = value.replace('\[irc\.belwue\.de\]', '');
            }

            return value;
          }
        }]);

        return CorrectServerDescriptionEncodingPipe;
      }();

      CorrectServerDescriptionEncodingPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'correctServerDescriptionEncoding'
      })], CorrectServerDescriptionEncodingPipe);
      /***/
    },

    /***/
    "EMXw":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/channel-list/channel-list.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EMXw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"this.errorMessage\" class=\"alert alert-danger\" role=\"alert\">\r\n  {{ this.errorMessage }}\r\n</div>\r\n\r\n<ng-container *ngIf=\"!this.errorMessage\">\r\n  <div class=\"col\">\r\n    <form>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs\">\r\n          <select #selectInput name=\"filterType\" [(ngModel)]=\"filterType\" class=\"form-control\"\r\n                  (change)=\"filterTypeChanged()\">\r\n            <option *ngFor=\"let filterType of filterTypes\" [value]=\"filterType\">{{filterType}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col\">\r\n          <input #searchTermInput name=\"searchTermInput\" type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"searchTerm\">\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <br/>\r\n\r\n  <div class=\"table-responsive\">\r\n    <table datatable [dtOptions]=\"dtOptions\" class=\"table table-striped table-bordered\" id=\"datatable\">\r\n      <thead>\r\n      <tr>\r\n        <th>Channel</th>\r\n        <th>Users</th>\r\n        <th style=\"width: 70%;\">Topic</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody *ngIf=\"channels?.length != 0\">\r\n      <tr *ngFor=\"let channel of channels\">\r\n        <td>{{ channel.name }}</td>\r\n        <td>{{ channel.userCount }}</td>\r\n        <td>{{ channel.topic | removeColors }}</td>\r\n      </tr>\r\n      </tbody>\r\n      <tbody *ngIf=\"channels?.length == 0\">\r\n      <tr>\r\n        <td colspan=\"3\" class=\"no-data-available\">No data!</td>\r\n      </tr>\r\n      <tbody>\r\n    </table>\r\n    <br>\r\n    <br>\r\n  </div>\r\n</ng-container>\r\n";
      /***/
    },

    /***/
    "Gd4t":
    /*!********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function Gd4t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2>List of bot commands</h2><br>\r\n<div class=\"overflow-x-auto\" tabindex=\"0\">\r\n<table class=\"table table-bordered table-striped w-100%\">\r\n\t<thead>\r\n\t\t<tr>\r\n\t\t\t<th data-label=\"Command\" scope=\"col\">Command</th>\r\n\t\t\t<th data-label=\"Description\" scope=\"col\">Description</th>\r\n\t\t\t<th data-label=\"Usage\" scope=\"col\">Usage</th>\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td data-label=\"Command\">iline</td>\r\n\t\t\t<td data-label=\"Description\">Shows IRCnet server I-lines</td>\r\n\t\t\t<td data-label=\"Usage\"><span>!iline &lt;none/nick/host&gt;</span></td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td data-label=\"Command\">server</td>\r\n\t\t\t<td data-label=\"Description\">Shows linked servers</td>\r\n\t\t\t<td data-label=\"Usage\"><span>!server &lt;tld/sid/open/cloak&gt;</span></td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td data-label=\"Command\">ip</td>\r\n\t\t\t<td data-label=\"Description\">Resolves IPv4/6 and shows whois</td>\r\n\t\t\t<td data-label=\"Usage\"><span>!ip &lt;ip/host&gt; </span></td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td data-label=\"Command\">splits</td>\r\n\t\t\t<td data-label=\"Description\">Shows the current server splits (alert enabled on channel)</td>\r\n\t\t\t<td data-label=\"Usage\"><span>!splits &lt;none&gt;</span></td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td data-label=\"Command\">kills</td>\r\n\t\t\t<td data-label=\"Description\">Shows the last 3 kills from IRCops (alert enabled on channel)</td>\r\n\t\t\t<td data-label=\"Usage\"><span>!kills &lt;none&gt;</span></td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td data-label=\"Command\">collide</td>\r\n\t\t\t<td data-label=\"Description\">Shows the last 3 nick collisions</td>\r\n\t\t\t<td data-label=\"Usage\"><span>!collide &lt;nick&gt;</span></td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td data-label=\"Command\">ircop</td>\r\n\t\t\t<td data-label=\"Description\">Shows online IRCops</td>\r\n\t\t\t<td data-label=\"Usage\"><span>!ircop &lt;server&gt;</span></td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td data-label=\"Command\">uptime</td>\r\n\t\t\t<td data-label=\"Description\">Shows server uptime</td>\r\n\t\t\t<td data-label=\"Usage\"><span>!uptime &lt;server&gt;</span></td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table></div>\r\n";
      /***/
    },

    /***/
    "H+eG":
    /*!******************************************************!*\
      !*** ./src/app/iline-lookup/iline-lookup.service.ts ***!
      \******************************************************/

    /*! exports provided: IlineLookupService */

    /***/
    function HEG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IlineLookupService", function () {
        return IlineLookupService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../app.settings */
      "/RaO");

      var IlineLookupService = /*#__PURE__*/function () {
        function IlineLookupService(httpClient) {
          _classCallCheck(this, IlineLookupService);

          this.httpClient = httpClient;
          this.url = _app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].INFOBOT_API_URL + '/i-line?q=';
        }

        _createClass(IlineLookupService, [{
          key: "getServerList",
          value: function getServerList(ilineForm) {
            return this.httpClient.get(this.url + ilineForm.address).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.error.errorMessage) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.error.errorMessage);
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Connection error. Please try again.');
            }
          }
        }]);

        return IlineLookupService;
      }();

      IlineLookupService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      IlineLookupService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], IlineLookupService);
      /***/
    },

    /***/
    "KC1b":
    /*!***************************************************!*\
      !*** ./src/app/iline-lookup/order-by-sid.pipe.ts ***!
      \***************************************************/

    /*! exports provided: OrderBySIDPipe */

    /***/
    function KC1b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderBySIDPipe", function () {
        return OrderBySIDPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var OrderBySIDPipe = /*#__PURE__*/function () {
        function OrderBySIDPipe() {
          _classCallCheck(this, OrderBySIDPipe);
        }

        _createClass(OrderBySIDPipe, [{
          key: "transform",
          value: function transform(items) {
            return items.sort(function (a, b) {
              if (a.sid.startsWith('0PN') && b.sid.startsWith('0PN')) {
                return a.sid.localeCompare(b.sid);
              } else if (a.sid.startsWith('0PN')) {
                return 1;
              } else if (b.sid.startsWith('0PN')) {
                return -1;
              } else {
                return a.sid.localeCompare(b.sid);
              }
            });
          }
        }]);

        return OrderBySIDPipe;
      }();

      OrderBySIDPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'orderBySID'
      })], OrderBySIDPipe);
      /***/
    },

    /***/
    "RV7M":
    /*!*****************************************!*\
      !*** ./src/app/home/home.component.css ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function RV7M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(route) {
          _classCallCheck(this, AppComponent);

          this.route = route;
          this.title = '#Tools @ IRCnet - by doni (doni@irc.it)';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.route.queryParams.subscribe(function (params) {
              _this3.embed = params["embed"] === 'true';
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "V+GE":
    /*!****************************************************!*\
      !*** ./src/app/server-list/server-list.service.ts ***!
      \****************************************************/

    /*! exports provided: ServerListService */

    /***/
    function VGE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServerListService", function () {
        return ServerListService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../app.settings */
      "/RaO");
      /* tslint:disable:one-line whitespace triple-equals */


      var ServerListService = /*#__PURE__*/function () {
        function ServerListService(http) {
          _classCallCheck(this, ServerListService);

          this.http = http;
          this.url = _app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].INFOBOT_API_URL + '/serversByCountry';
        }

        _createClass(ServerListService, [{
          key: "getServerList",
          value: function getServerList() {
            return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.error.errorMessage) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.error.errorMessage);
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Connection error. Please try again.');
            }
          }
        }]);

        return ServerListService;
      }();

      ServerListService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ServerListService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ServerListService);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav *ngIf=\"!embed\" class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <span class=\"navbar-brand\">#Tools</span>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a [routerLink]=\"['/']\" class=\"nav-link \"[routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">Bot</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a [routerLink]=\"['/servers']\" class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">Servers</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a [routerLink]=\"['/i-line']\" class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">I-Lines</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a [routerLink]=\"['/channels']\" class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">Channels</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n<footer class=\"page-footer font-small blue pt-4\">\r\n  <div class=\"footer-copyright text-center py-3\">&copy; 2019 #Tools @ IRCnet - by doni (doni@irc.it)</div>\r\n</footer>\r\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _server_list_server_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./server-list/server-list.component */
      "plkl");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _iline_lookup_iline_lookup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./iline-lookup/iline-lookup.component */
      "ctYi");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _channel_list_channel_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./channel-list/channel-list.component */
      "8oJK");
      /* harmony import */


      var _iline_lookup_order_by_sid_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./iline-lookup/order-by-sid.pipe */
      "KC1b");
      /* harmony import */


      var _correct_server_name_encoding_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./correct-server-name-encoding.pipe */
      "Cajz");
      /* harmony import */


      var _remove_colors_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./remove-colors.pipe */
      "dcU5");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ctorParameters = function () {
        return [];
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _server_list_server_list_component__WEBPACK_IMPORTED_MODULE_5__["ServerListComponent"], _iline_lookup_iline_lookup_component__WEBPACK_IMPORTED_MODULE_8__["IlineLookupComponent"], _channel_list_channel_list_component__WEBPACK_IMPORTED_MODULE_11__["ChannelListComponent"], _iline_lookup_order_by_sid_pipe__WEBPACK_IMPORTED_MODULE_12__["OrderBySIDPipe"], _correct_server_name_encoding_pipe__WEBPACK_IMPORTED_MODULE_13__["CorrectServerDescriptionEncodingPipe"], _remove_colors_pipe__WEBPACK_IMPORTED_MODULE_14__["RemoveColorsPipe"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot([{
          path: 'servers',
          component: _server_list_server_list_component__WEBPACK_IMPORTED_MODULE_5__["ServerListComponent"]
        }, {
          path: 'i-line',
          component: _iline_lookup_iline_lookup_component__WEBPACK_IMPORTED_MODULE_8__["IlineLookupComponent"]
        }, {
          path: 'channels',
          component: _channel_list_channel_list_component__WEBPACK_IMPORTED_MODULE_11__["ChannelListComponent"]
        }, {
          path: '',
          component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]
        }], {
          relativeLinkResolution: 'legacy'
        })],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "ctYi":
    /*!********************************************************!*\
      !*** ./src/app/iline-lookup/iline-lookup.component.ts ***!
      \********************************************************/

    /*! exports provided: IlineLookupComponent */

    /***/
    function ctYi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IlineLookupComponent", function () {
        return IlineLookupComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_iline_lookup_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./iline-lookup.component.html */
      "r0u0");
      /* harmony import */


      var _iline_lookup_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./iline-lookup.component.css */
      "jshp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _iline_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./iline-lookup.service */
      "H+eG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../app.settings */
      "/RaO");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var IlineLookupComponent = /*#__PURE__*/function () {
        function IlineLookupComponent(ilineLookupService, http, route) {
          _classCallCheck(this, IlineLookupComponent);

          this.ilineLookupService = ilineLookupService;
          this.http = http;
          this.route = route;
          this.ilineForm = {
            address: ''
          };
        }

        _createClass(IlineLookupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.route.queryParams.subscribe(function (params) {
              _this4.embed = params["embed"] === 'true';
            });
            this.getIpAddress();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(form) {
            var _this5 = this;

            if (!form.valid) {
              return;
            }

            this.errorMessage = null;
            this.loading = true;
            this.response = null;
            this.ilineLookupService.getServerList(this.ilineForm).subscribe({
              next: function next(data) {
                _this5.response = data;
                _this5.loading = false;
              },
              error: function error(err) {
                _this5.errorMessage = err;
                _this5.loading = false;
              }
            });
          }
        }, {
          key: "getIpAddress",
          value: function getIpAddress() {
            var _this6 = this;

            this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].INFOBOT_API_URL + '/ipaddress').subscribe(function (data) {
              _this6.ilineForm.address = data.address;
            });
          }
        }]);

        return IlineLookupComponent;
      }();

      IlineLookupComponent.ctorParameters = function () {
        return [{
          type: _iline_lookup_service__WEBPACK_IMPORTED_MODULE_4__["IlineLookupService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }];
      };

      IlineLookupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-iline-lookup',
        template: _raw_loader_iline_lookup_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_iline_lookup_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], IlineLookupComponent);
      /***/
    },

    /***/
    "dcU5":
    /*!***************************************!*\
      !*** ./src/app/remove-colors.pipe.ts ***!
      \***************************************/

    /*! exports provided: RemoveColorsPipe */

    /***/
    function dcU5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RemoveColorsPipe", function () {
        return RemoveColorsPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RemoveColorsPipe = /*#__PURE__*/function () {
        function RemoveColorsPipe() {
          _classCallCheck(this, RemoveColorsPipe);
        }

        _createClass(RemoveColorsPipe, [{
          key: "transform",
          value: function transform(text) {
            if (!text || text.length === 0) {
              return text;
            }

            var rcol = 0;
            var bgcol = 0;
            var hidden = false;
            var cleanMessage = '';
            var index = 0;
            var len = text.length;

            while (len > 0) {
              if (rcol > 0 && (this.isDigit(text.charAt(index)) || text.charAt(index) === ',' && this.isDigit(text.charAt(index + 1)) && bgcol === 0)) {
                if (len > index + 1 && text.charAt(index + 1) !== ',') {
                  rcol--;
                }

                if (text.charAt(index) === ',') {
                  rcol = 2;
                  bgcol = 1;
                }
              } else {
                rcol = bgcol = 0;
                var ATTR_COLOR = '\x03';
                var ATTR_BEEP = '\x07';
                var ATTR_RESET = '\x0F';
                var ATTR_REVERSE = '\x16';
                var ATTR_BOLD = '\x02';
                var ATTR_UNDERLINE = '\x1F';
                var ATTR_ITALICS = '\x1D';
                var ATTR_HIDDEN = '\x08';

                switch (text.charAt(index)) {
                  case ATTR_COLOR:
                    rcol = 2;
                    break;

                  case ATTR_BEEP:
                  case ATTR_RESET:
                  case ATTR_REVERSE:
                  case ATTR_BOLD:
                  case ATTR_UNDERLINE:
                  case ATTR_ITALICS:
                    break;

                  case ATTR_HIDDEN:
                    hidden = !hidden;
                    break;

                  default:
                    if (!hidden) {
                      cleanMessage += text.charAt(index);
                    }

                }
              }

              index++;
              len--;
            }

            return cleanMessage.toString();
          }
        }, {
          key: "isDigit",
          value: function isDigit(arg) {
            return !isNaN(arg);
          }
        }]);

        return RemoveColorsPipe;
      }();

      RemoveColorsPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'removeColors'
      })], RemoveColorsPipe);
      /***/
    },

    /***/
    "jMdG":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/server-list/server-list.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function jMdG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"this.errorMessage\" class=\"alert alert-danger\" role=\"alert\">\r\n  {{ this.errorMessage }}\r\n</div>\r\n\r\n<h2 *ngIf=\"!embed\">All servers linked on IRCnet</h2>\r\n\r\n<i *ngIf=\"data.countriesWithServers\">\r\n    <small>Total global users: {{data.totalUsers}} - Total servers: {{data.totalServers}}</small>\r\n</i>\r\n\r\n<br>\r\n<br>\r\n<ng-container *ngIf=\"data.countriesWithServers\">\r\n  <div *ngFor=\"let country of data.countriesWithServers; let i = index\">\r\n    <br *ngIf=\"i != 0\">\r\n    <h4>{{ country.countryName }}</h4>\r\n    <p>Total users: {{ country.totalUsers }}</p>\r\n\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-bordered table table-striped\">\r\n        <thead>\r\n        <tr>\r\n          <th scope=\"col\" style=\"width: 20%;\">Name</th>\r\n          <th scope=\"col\" style=\"width: 25%;\">Description</th>\r\n          <th scope=\"col\">Users</th>\r\n          <th scope=\"col\">SID</th>\r\n          <th scope=\"col\">Version</th>\r\n          <th>Last seen</th>\r\n        </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n\r\n        <tr *ngFor=\"let server of country.serverList\"\r\n            className=\"{{ (server.lastSeen != data.lastMapReceived) ? 'table-danger' : '' }}\">\r\n          <td>{{server.serverName}}</td>\r\n          <td>{{server.serverInfo | correctServerDescriptionEncoding}}</td>\r\n          <td>{{server.userCount}}</td>\r\n          <td>{{server.sid}}</td>\r\n          <td>{{server.version}}</td>\r\n\r\n          <td *ngIf=\"server.lastSeen == data.lastMapReceived;else other_content\">\r\n            now\r\n          </td>\r\n          <ng-template #other_content>\r\n            <td>{{getFormattedLastSeenTime(server.lastSeen)}} ago</td>\r\n          </ng-template>\r\n\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n  <br/>\r\n\r\n</ng-container>\r\n\r\n<i *ngIf=\"data.countriesWithServers\">\r\n  <small>Last server map received: {{getFormattedDateDifference(data.lastMapReceived)}} ago</small>\r\n</i>\r\n";
      /***/
    },

    /***/
    "jshp":
    /*!*********************************************************!*\
      !*** ./src/app/iline-lookup/iline-lookup.component.css ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function jshp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbGluZS1sb29rdXAuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "plkl":
    /*!******************************************************!*\
      !*** ./src/app/server-list/server-list.component.ts ***!
      \******************************************************/

    /*! exports provided: ServerListComponent */

    /***/
    function plkl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServerListComponent", function () {
        return ServerListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_server_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./server-list.component.html */
      "jMdG");
      /* harmony import */


      var _server_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./server-list.component.css */
      "3C1h");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _server_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./server-list.service */
      "V+GE");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* tslint:disable:one-line */


      var ServerListComponent = /*#__PURE__*/function () {
        function ServerListComponent(serverListService, route) {
          _classCallCheck(this, ServerListComponent);

          this.serverListService = serverListService;
          this.route = route;
        }

        _createClass(ServerListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.data = this.serverListService.getServerList().subscribe({
              next: function next(data) {
                _this7.data = data;
              },
              error: function error(err) {
                return _this7.errorMessage = err;
              }
            });
            this.route.queryParams.subscribe(function (params) {
              _this7.embed = params["embed"] === 'true';
            });
          }
        }, {
          key: "getFormattedDateDifference",
          value: function getFormattedDateDifference(date1String) {
            var date1 = new Date(date1String);
            date1.setMilliseconds(0);
            var now = new Date(this.data.now);
            now.setMilliseconds(0);
            var diffSeconds = (now.getTime() - date1.getTime()) / 1000;
            var days = Math.floor(diffSeconds / 86400);
            var hours = Math.floor(diffSeconds / 3600) % 24;
            var minutes = Math.floor(diffSeconds / 60) % 60;
            var seconds = Math.floor(diffSeconds % 60);
            var result = [];
            result.push(days + ' days');
            result.push(hours + ' hours');
            result.push(minutes + ' minutes');
            result.push(seconds + ' seconds');

            while (result[0].startsWith('0') && result.length > 1) {
              result.shift();
            }

            return result.join(', ');
          }
        }, {
          key: "getFormattedLastSeenTime",
          value: function getFormattedLastSeenTime(date1String) {
            var date1 = new Date(date1String);
            date1.setMilliseconds(0);
            var now = new Date(this.data.now);
            now.setMilliseconds(0);
            var diffSeconds = (now.getTime() - date1.getTime()) / 1000;
            var days = Math.floor(diffSeconds / 86400);
            var hours = Math.floor(diffSeconds / 3600) % 24;
            var minutes = Math.floor(diffSeconds / 60) % 60;
            var seconds = Math.floor(diffSeconds % 60);

            if (days !== 0) {
              return days + ' days';
            }

            if (hours !== 0) {
              if (hours < 3 && minutes !== 0) {
                return hours + ' h ' + minutes + ' min';
              } else {
                return hours + (hours === 1 ? ' hour' : ' hours');
              }
            }

            if (minutes !== 0) {
              return minutes + (minutes === 1 ? ' minute' : ' minutes');
            }

            if (seconds !== 0) {
              return seconds + ' seconds';
            }
          }
        }]);

        return ServerListComponent;
      }();

      ServerListComponent.ctorParameters = function () {
        return [{
          type: _server_list_service__WEBPACK_IMPORTED_MODULE_4__["ServerListService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      };

      ServerListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-server-list',
        template: _raw_loader_server_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_server_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ServerListComponent);
      /***/
    },

    /***/
    "r0u0":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iline-lookup/iline-lookup.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function r0u0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"this.errorMessage\" class=\"alert alert-danger\" role=\"alert\">\r\n  {{ this.errorMessage }}\r\n</div>\r\n\r\n\r\n<h2 *ngIf=\"!embed\">I-Line Lookup Service</h2><br>\r\n<form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\">\r\n  <div class=\"form-group row col-lg-5\">\r\n    <label for=\"address\">IP Address</label>\r\n    <input class=\"form-control\" id=\"address\" name=\"address\" [(ngModel)]=\"ilineForm.address\" required\r\n           #addressField=\"ngModel\"/>\r\n    <div [hidden]=\"!form.submitted || addressField.valid\" class=\"field-error\">Enter a valid IPv4 or IPv6 address</div>\r\n  </div>\r\n\r\n  <button [disabled]=\"this.loading\" type=\"submit\" class=\"btn btn-primary\">\r\n    Look up\r\n    <span *ngIf=\"this.loading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"\r\n          style=\"margin-left: 5px\"></span>\r\n  </button>\r\n</form>\r\n\r\n<div *ngIf=\"this.response\">\r\n  <br>\r\n  <h2>Result</h2>\r\n  <p>Result for IP\r\n    address {{ this.response.ipAddress}} {{ this.response.hostname != this.response.ipAddress ? \" and hostname \" + this.response.hostname : \"\"}}</p>\r\n\r\n  <table class=\"table table-bordered table table-striped\">\r\n    <thead>\r\n    <tr>\r\n      <th scope=\"col\" style=\"width: 15%;\"><b>Name</b></th>\r\n      <th scope=\"col\" style=\"width: 25%;\">Description</th>\r\n    </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n    <tr *ngFor=\"let server of this.response.response | orderBySID\">\r\n      <td>{{ server.serverName }}</td>\r\n      <td>{{ server.serverInfo | correctServerDescriptionEncoding}}</td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n";
      /***/
    },

    /***/
    "uGq0":
    /*!*********************************************************!*\
      !*** ./src/app/channel-list/channel-list.component.css ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function uGq0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".no-data-available {\r\n  text-align: center;\r\n}\r\n\r\n.sorting, .sorting_asc, .sorting_asc {\r\n  background-position: center left !important;\r\n}\r\n\r\ntable.dataTable thead .sorting,\r\ntable.dataTable thead .sorting_asc,\r\ntable.dataTable thead .sorting_desc,\r\ntable.dataTable thead .sorting_asc_disabled,\r\ntable.dataTable thead .sorting_desc_disabled {\r\n  background-position: center left;\r\n  padding-left: 1.5em;\r\n}\r\n\r\ntable.dataTable thead th, table.dataTable thead td {\r\n  padding: 10px 8px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5uZWwtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBOzs7OztFQUtFLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoiY2hhbm5lbC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tZGF0YS1hdmFpbGFibGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNvcnRpbmcsIC5zb3J0aW5nX2FzYywgLnNvcnRpbmdfYXNjIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmcsXHJcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19hc2MsXHJcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjLFxyXG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfYXNjX2Rpc2FibGVkLFxyXG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzY19kaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGxlZnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxLjVlbTtcclxufVxyXG5cclxudGFibGUuZGF0YVRhYmxlIHRoZWFkIHRoLCB0YWJsZS5kYXRhVGFibGUgdGhlYWQgdGQge1xyXG4gIHBhZGRpbmc6IDEwcHggOHB4O1xyXG59XHJcblxyXG4iXX0= */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map