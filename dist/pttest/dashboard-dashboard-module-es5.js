function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/
  "./src/app/dashboard/containers/dashboard/dashboard.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/dashboard/containers/dashboard/dashboard.component.ts ***!
    \***********************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardContainersDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_car_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/car.service */
    "./src/app/dashboard/services/car.service.ts");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(carService) {
        _classCallCheck(this, DashboardComponent);

        this.carService = carService;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.carService.getCarsMedium().then(function (cars) {
            return _this.cars1 = cars;
          });
          this.carService.getCarsSmall().then(function (cars) {
            return _this.cars2 = cars;
          });
          this.carService.getCarsMedium().then(function (cars) {
            return _this.cars3 = cars;
          });
          this.carService.getCarsMedium().then(function (cars) {
            return _this.cars4 = cars;
          });
          this.carService.getCarsMedium().then(function (cars) {
            return _this.cars5 = cars;
          });
          this.cols = [{
            field: 'vin',
            header: 'Vin'
          }, {
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }];
          this.scrollableCols = [{
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }, {
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }];
          this.frozenCols = [{
            field: 'vin',
            header: 'Vin'
          }];
          this.frozenCars = [{
            brand: 'BMW',
            year: 2013,
            color: 'Grey',
            vin: 'fh2uf23'
          }, {
            brand: 'Chevrolet',
            year: 2011,
            color: 'Black',
            vin: '4525g23'
          }];
          this.sales = [{
            brand: 'Apple',
            lastYearSale: '51%',
            thisYearSale: '40%',
            lastYearProfit: '$54,406.00',
            thisYearProfit: '$43,342'
          }, {
            brand: 'Samsung',
            lastYearSale: '83%',
            thisYearSale: '96%',
            lastYearProfit: '$423,132',
            thisYearProfit: '$312,122'
          }, {
            brand: 'Microsoft',
            lastYearSale: '38%',
            thisYearSale: '5%',
            lastYearProfit: '$12,321',
            thisYearProfit: '$8,500'
          }, {
            brand: 'Philips',
            lastYearSale: '49%',
            thisYearSale: '22%',
            lastYearProfit: '$745,232',
            thisYearProfit: '$650,323,'
          }, {
            brand: 'Song',
            lastYearSale: '17%',
            thisYearSale: '79%',
            lastYearProfit: '$643,242',
            thisYearProfit: '500,332'
          }, {
            brand: 'LG',
            lastYearSale: '52%',
            thisYearSale: ' 65%',
            lastYearProfit: '$421,132',
            thisYearProfit: '$150,005'
          }, {
            brand: 'Sharp',
            lastYearSale: '82%',
            thisYearSale: '12%',
            lastYearProfit: '$131,211',
            thisYearProfit: '$100,214'
          }, {
            brand: 'Panasonic',
            lastYearSale: '44%',
            thisYearSale: '45%',
            lastYearProfit: '$66,442',
            thisYearProfit: '$53,322'
          }, {
            brand: 'HTC',
            lastYearSale: '90%',
            thisYearSale: '56%',
            lastYearProfit: '$765,442',
            thisYearProfit: '$296,232'
          }, {
            brand: 'Toshiba',
            lastYearSale: '75%',
            thisYearSale: '54%',
            lastYearProfit: '$21,212',
            thisYearProfit: '$12,533'
          }];
          this.totalRecords = 250000;
          this.loading = true;
          this.inmemoryData = [{
            brand: 'VW',
            year: 2012,
            color: 'Orange'
          }, {
            brand: 'Audi',
            year: 2011,
            color: 'Black'
          }, {
            brand: 'Renault',
            year: 2005,
            color: 'Gray'
          }, {
            brand: 'BMW',
            year: 2003,
            color: 'Blue'
          }, {
            brand: 'Mercedes',
            year: 1995,
            color: 'Orange'
          }, {
            brand: 'Volvo',
            year: 2005,
            color: 'Black'
          }, {
            brand: 'Honda',
            year: 2012,
            color: 'Yellow'
          }, {
            brand: 'Jaguar',
            year: 2013,
            color: 'Orange'
          }, {
            brand: 'Ford',
            year: 2000,
            color: 'Black'
          }, {
            brand: 'Fiat',
            year: 2013,
            color: 'Red'
          }, {
            brand: 'VW',
            year: 2012,
            color: 'Orange'
          }, {
            brand: 'Audi',
            year: 2011,
            color: 'Black'
          }, {
            brand: 'Renault',
            year: 2005,
            color: 'Gray'
          }, {
            brand: 'BMW',
            year: 2003,
            color: 'Blue'
          }, {
            brand: 'Mercedes',
            year: 1995,
            color: 'Orange'
          }, {
            brand: 'Volvo',
            year: 2005,
            color: 'Black'
          }, {
            brand: 'Honda',
            year: 2012,
            color: 'Yellow'
          }, {
            brand: 'Jaguar',
            year: 2013,
            color: 'Orange'
          }, {
            brand: 'Ford',
            year: 2000,
            color: 'Black'
          }, {
            brand: 'Fiat',
            year: 2013,
            color: 'Red'
          }, {
            brand: 'VW',
            year: 2012,
            color: 'Orange'
          }, {
            brand: 'Audi',
            year: 2011,
            color: 'Black'
          }, {
            brand: 'Renault',
            year: 2005,
            color: 'Gray'
          }, {
            brand: 'BMW',
            year: 2003,
            color: 'Blue'
          }, {
            brand: 'Mercedes',
            year: 1995,
            color: 'Orange'
          }, {
            brand: 'Volvo',
            year: 2005,
            color: 'Black'
          }, {
            brand: 'Honda',
            year: 2012,
            color: 'Yellow'
          }, {
            brand: 'Jaguar',
            year: 2013,
            color: 'Orange'
          }, {
            brand: 'Ford',
            year: 2000,
            color: 'Black'
          }, {
            brand: 'Fiat',
            year: 2013,
            color: 'Red'
          }, {
            brand: 'VW',
            year: 2012,
            color: 'Orange'
          }, {
            brand: 'Audi',
            year: 2011,
            color: 'Black'
          }, {
            brand: 'Renault',
            year: 2005,
            color: 'Gray'
          }, {
            brand: 'BMW',
            year: 2003,
            color: 'Blue'
          }, {
            brand: 'Mercedes',
            year: 1995,
            color: 'Orange'
          }, {
            brand: 'Volvo',
            year: 2005,
            color: 'Black'
          }, {
            brand: 'Honda',
            year: 2012,
            color: 'Yellow'
          }, {
            brand: 'Jaguar',
            year: 2013,
            color: 'Orange'
          }, {
            brand: 'Ford',
            year: 2000,
            color: 'Black'
          }, {
            brand: 'Fiat',
            year: 2013,
            color: 'Red'
          }];
        }
      }, {
        key: "loadDataOnScroll",
        value: function loadDataOnScroll(event) {
          var _this2 = this;

          this.loading = true; // for demo purposes keep loading the same dataset
          // in a real production application, this data should come from server by building the query with LazyLoadEvent options

          setTimeout(function () {
            // last chunk
            if (event.first === 249980) {
              _this2.virtualCars = _this2.loadChunk(event.first, 20);
            } else {
              _this2.virtualCars = _this2.loadChunk(event.first, event.rows);
            }

            _this2.loading = false;
          }, 250);
        }
      }, {
        key: "loadChunk",
        value: function loadChunk(index, length) {
          var chunk = [];

          for (var i = 0; i < length; i++) {
            chunk[i] = Object.assign(Object.assign({}, this.inmemoryData[i]), {
              vin: index + i
            });
          }

          return chunk;
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_car_service__WEBPACK_IMPORTED_MODULE_1__["CarService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 0,
      vars: 0,
      template: function DashboardComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb250YWluZXJzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [{
          type: _services_car_service__WEBPACK_IMPORTED_MODULE_1__["CarService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: DashboardRoutingModule */

  /***/
  function srcAppDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
      return DashboardRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _containers_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./containers/dashboard/dashboard.component */
    "./src/app/dashboard/containers/dashboard/dashboard.component.ts");

    var routes = [{
      path: '',
      component: _containers_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }];

    var DashboardRoutingModule = function DashboardRoutingModule() {
      _classCallCheck(this, DashboardRoutingModule);
    };

    DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DashboardRoutingModule
    });
    DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DashboardRoutingModule_Factory(t) {
        return new (t || DashboardRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.module.ts ***!
    \***********************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _containers_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./containers/dashboard/dashboard.component */
    "./src/app/dashboard/containers/dashboard/dashboard.component.ts");

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DashboardModule
    });
    DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DashboardModule_Factory(t) {
        return new (t || DashboardModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, {
        declarations: [_containers_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_containers_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map