(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcliniva"] = self["webpackChunkcliniva"] || []).push([["src_app_admin_dashboard_dashboard_module_ts"], {
    /***/
    30362:
    /*!*************************************************************!*\
      !*** ./src/app/admin/dashboard/dashboard-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardRoutingModule": function DashboardRoutingModule() {
          return (
            /* binding */
            _DashboardRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _patient_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../patient/dashboard/dashboard.component */
      50838);
      /* harmony import */


      var _doctor_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../doctor/dashboard/dashboard.component */
      89261);
      /* harmony import */


      var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../authentication/page404/page404.component */
      1991);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./main/main.component */
      13700);
      /* harmony import */


      var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./dashboard2/dashboard2.component */
      72756);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: "",
        redirectTo: "main",
        pathMatch: "full"
      }, {
        path: "main",
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__.MainComponent
      }, {
        path: "dashboard2",
        component: _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_4__.Dashboard2Component
      }, {
        path: "doctor-dashboard",
        component: _doctor_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent
      }, {
        path: "patient-dashboard",
        component: _patient_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
      }, {
        path: "**",
        component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_2__.Page404Component
      }];

      var _DashboardRoutingModule = function _DashboardRoutingModule() {
        _classCallCheck(this, _DashboardRoutingModule);
      };

      _DashboardRoutingModule.??fac = function DashboardRoutingModule_Factory(t) {
        return new (t || _DashboardRoutingModule)();
      };

      _DashboardRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({
        type: _DashboardRoutingModule
      });
      _DashboardRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](_DashboardRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    31052:
    /*!*****************************************************!*\
      !*** ./src/app/admin/dashboard/dashboard.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardModule": function DashboardModule() {
          return (
            /* binding */
            _DashboardModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      99904);
      /* harmony import */


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      30362);
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./main/main.component */
      13700);
      /* harmony import */


      var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard2/dashboard2.component */
      72756);
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-charts */
      86178);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/menu */
      33935);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/tooltip */
      11436);
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-apexcharts */
      34256);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _DashboardModule = function _DashboardModule() {
        _classCallCheck(this, _DashboardModule);
      };

      _DashboardModule.??fac = function DashboardModule_Factory(t) {
        return new (t || _DashboardModule)();
      };

      _DashboardModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
        type: _DashboardModule
      });
      _DashboardModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule, ng2_charts__WEBPACK_IMPORTED_MODULE_5__.ChartsModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__.NgApexchartsModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltipModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](_DashboardModule, {
          declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__.MainComponent, _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_2__.Dashboard2Component],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule, ng2_charts__WEBPACK_IMPORTED_MODULE_5__.ChartsModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__.NgApexchartsModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltipModule]
        });
      })();
      /***/

    },

    /***/
    72756:
    /*!********************************************************************!*\
      !*** ./src/app/admin/dashboard/dashboard2/dashboard2.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Dashboard2Component": function Dashboard2Component() {
          return (
            /* binding */
            _Dashboard2Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-apexcharts */
      34256);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/menu */
      33935);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng2-charts */
      86178);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      99904);

      var _Dashboard2Component = /*#__PURE__*/function () {
        // Doughnut chart end
        function _Dashboard2Component() {
          _classCallCheck(this, _Dashboard2Component);

          //  color: ["#3FA7DC", "#F6A025", "#9BC311"],
          // Doughnut chart start
          this.doughnutChartLabels = ["India", "USA", "Itely"];
          this.doughnutChartData = [45, 25, 30];
          this.doughnutChartLegend = false;
          this.doughnutChartColors = [{
            backgroundColor: ["#735A84", "#E76412", "#9BC311"]
          }];
          this.doughnutChartType = "doughnut";
          this.doughnutChartOptions = {
            animation: false,
            responsive: true
          };
        }

        _createClass(_Dashboard2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.chart1();
          }
        }, {
          key: "chart1",
          value: function chart1() {
            this.lineChartOptions = {
              series: [{
                name: "Doctor 1",
                data: [70, 200, 80, 180, 170, 105, 210]
              }, {
                name: "Doctor 2",
                data: [80, 250, 30, 120, 260, 100, 180]
              }, {
                name: "Doctor 3",
                data: [85, 130, 85, 225, 80, 190, 120]
              }],
              chart: {
                height: 350,
                type: "line",
                foreColor: "#9aa0ac",
                dropShadow: {
                  enabled: true,
                  color: "#000",
                  top: 18,
                  left: 7,
                  blur: 10,
                  opacity: 0.2
                },
                toolbar: {
                  show: false
                }
              },
              colors: ["#A5A5A5", "#875692", "#4CB5AC"],
              stroke: {
                curve: "smooth"
              },
              grid: {
                row: {
                  colors: ["transparent", "transparent"],
                  opacity: 0.5
                }
              },
              markers: {
                size: 3
              },
              xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                title: {
                  text: "Month"
                }
              },
              yaxis: {
                // opposite: true,
                title: {
                  text: "Patients"
                }
              },
              legend: {
                position: "top",
                horizontalAlign: "right",
                floating: true,
                offsetY: -25,
                offsetX: -5
              },
              tooltip: {
                theme: "dark",
                marker: {
                  show: true
                },
                x: {
                  show: true
                }
              }
            };
          }
        }]);

        return _Dashboard2Component;
      }();

      _Dashboard2Component.??fac = function Dashboard2Component_Factory(t) {
        return new (t || _Dashboard2Component)();
      };

      _Dashboard2Component.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _Dashboard2Component,
        selectors: [["app-dashboard2"]],
        decls: 624,
        vars: 24,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-xl-8", "col-lg-8", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "recent-report__chart"], [3, "series", "chart", "xaxis", "stroke", "colors", "dataLabels", "legend", "tooltip", "markers", "grid", "yaxis", "title", "fill"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12"], [1, "plain-card"], [1, "card-inner"], [1, "tx-primary", "m-b-10"], [1, "col-4"], [1, "font-14"], [1, "progress", "shadow-style"], ["role", "progressbar", "aria-valuenow", "74", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "width-per-74"], ["role", "progressbar", "aria-valuenow", "70", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-red", "width-per-70"], ["role", "progressbar", "aria-valuenow", "55", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "width-per-55"], ["mat-button", "", 1, "header-dropdown", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], [1, "col-md-12", "col-xl-4", "d-flex", "flex-column", "justify-content-center"], [1, "ml-xl-3", "m-b-20"], [1, "font-weight-light", "col-green"], [1, "mb-2"], [1, "ml-xl-3"], [1, "font-weight-light", "col-orange"], [1, "col-md-12", "col-xl-8"], [1, "col-md-6"], [1, "tx-primary", "m-b-30"], [1, "progress-list", "m-b-10"], [1, "details"], [1, "title"], [1, "status"], [1, "progress-xs", "not-rounded", "progress"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-warning", "width-per-40"], [1, "sr-only"], ["role", "progressbar", "aria-valuenow", "49", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-danger", "width-per-49"], ["role", "progressbar", "aria-valuenow", "65", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-blue", "width-per-65"], ["role", "progressbar", "aria-valuenow", "28", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-success", "width-per-28"], ["role", "progressbar", "aria-valuenow", "16", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-hotpink", "width-per-16"], [1, "col-md-6", "mt-3"], ["baseChart", "", 1, "chart", 3, "data", "labels", "options", "legend", "chartType", "colors"], [1, "country-chart"], [1, "d-flex", "justify-content-between", "mx-xl-5", "mt-3"], [1, "chart-note"], [1, "dot", "dot-product", "bg-green"], [1, "mb-0"], [1, "dot", "dot-product", "bg-orange"], [1, "dot", "dot-product", "bg-purple"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], [1, "list-body"], [1, "list-unstyled", "list-unstyled-noborder", 2, "position", "relative", "max-height", "330px", 3, "perfectScrollbar"], [1, "patient-group-list"], [1, "d-flex"], [1, "lbl-bedge", "l-bg-orange"], [1, "lbl-bedge-title"], [1, "group-details", "font-16"], [1, "ms-auto"], [1, "media-title", "text-muted", "mb-0", "font-14"], [1, "lbl-bedge", "l-bg-card1"], [1, "lbl-bedge", "l-bg-card2"], [1, "lbl-bedge", "l-bg-cyan"], [1, "lbl-bedge", "l-bg-red"], [1, "lbl-bedge", "l-bg-card3"], [1, "recent-comment", 2, "position", "relative", "max-height", "330px", 3, "perfectScrollbar"], [1, "notice-board"], [1, "table-img"], ["src", "assets/images/user/user6.jpg", "alt", "...", 1, "notice-object"], [1, "notice-body"], [1, "notice-heading", "col-green"], [1, "text-muted"], ["src", "assets/images/user/user4.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-primary", "col-indigo"], [1, "comment-date"], ["src", "assets/images/user/user3.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-danger", "col-cyan"], [1, "notice-board", "no-border"], ["src", "assets/images/user/user7.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-info", "col-orange"], ["src", "assets/images/user/user9.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-primary", "col-red"], [1, "sl-item", "sl-primary"], [1, "sl-content"], [1, "fa", "fa-user", "position-left"], [1, "sl-item", "sl-danger"], [1, "sl-item", "sl-success"], [1, "tableBody"], [1, "table-responsive"], ["id", "support_table", 1, "table", "display", "product-overview", "mb-30"], [1, "badge", "col-green"], ["mat-icon-button", ""], [1, "col-red"], [1, "badge", "col-red"], [1, "badge", "col-cyan"], [1, "badge", "col-purple"], [1, "badge", "col-blue"]],
        template: function Dashboard2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Dashboard 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Dashboard 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Doctor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Performance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "apx-chart", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h6", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Patient Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "105");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "This Week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "825");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "This Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "22,067");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "74%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "h6", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Income Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "$1,247");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "This Week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "$22,568");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "This Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "$65,147");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "70%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "h6", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Expense Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "$723");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "This Week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "$12,451");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "This Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "$35,589");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "55%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Recent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, " Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "mat-menu", null, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "$1,17,289");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "h4", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "Total Income");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "p", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "$1,17,289");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "h4", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Total Expense");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "p", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, " Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "h5", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "Country Wise Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "USA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "40");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "40%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "Germany");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "49");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "49%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "France");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "65");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "65%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "India");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "28");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "28%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "Other");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "16");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, "16%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](199, "canvas", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](203, "span", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, "Itely");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "p", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "$30,289");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](210, "span", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "USA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "p", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "$25,968");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](217, "span", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "India");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "p", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "$45,278");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "Patients Group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "mat-menu", null, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "ul", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "li", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "span", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, "C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](247, "Cholesterol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, "5 Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "li", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "span", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, "D");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, "Diabetic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](260, "14 Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "li", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "span", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, "L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](267, "Low Blood Pressure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, "10 Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "li", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "span", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](275, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](277, "Hypertension");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280, "21 Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "li", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "span", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287, "Malaria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](290, "11 Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "li", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "span", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, "D");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](297, "Dental Problem");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](300, "17 Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](306, "Notice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, " Board");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](310, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "mat-menu", null, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](314, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](316, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](318, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](323, "img", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "h6", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](326, "Dr. Airi Satou");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](328, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "small", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](330, "7 hours ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](333, "img", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "h6", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](336, "Dr. Sarah Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](338, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "p", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](340, "1 hour ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](343, "img", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "h6", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](346, "Dr. Cara Stevens");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](347, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](348, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](350, "Yesterday");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](351, "div", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](353, "img", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "h6", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](356, "Dr. Ashton Cox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](358, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](360, "Yesterday");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](363, "img", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](364, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](365, "h6", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](366, "Dr. Mark Hay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](368, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "p", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](370, "1 hour ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](374, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](375, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](376, "Recent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](377, " Activity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](380, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](381, "mat-menu", null, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](384, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](385, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](386, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](388, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](389, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "div", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](391, "div", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](392, "small", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](393, "i", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](394, " 5 mins ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](395, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](396, "Lorem ipsum dolor sit amet conse ctetur which ascing elit users.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](397, "div", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](398, "div", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](399, "small", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](400, "i", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](401, " 8 mins ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](402, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](403, "Lorem ipsum dolor sit ametcon the sectetur that ascing elit users.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](404, "div", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](405, "div", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](406, "small", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](407, "i", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](408, " 10 mins ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](409, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](410, "Lorem ipsum dolor sit amet cons the ecte tur and adip ascing elit users.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](411, "div", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](412, "div", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](413, "small", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](414, "i", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](415, " 5 mins ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](416, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](417, "Lorem ipsum dolor sit amet conse ctetur which ascing elit users.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](418, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](419, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](420, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](421, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](422, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](423, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](424, "Operations");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](425, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](426, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](427, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](428, "mat-menu", null, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](430, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](431, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](432, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](433, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](434, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](435, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](436, "div", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](437, "div", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](438, "table", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](439, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](440, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](441, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](442, "No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](443, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](444, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](445, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](446, "Assigned Doctor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](447, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](448, "Date Of Admit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](449, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](450, "Diseases");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](451, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](452, "Room No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](453, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](454, "Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](455, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](456, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](457, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](458, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](459, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](460, "Jens Brincker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](461, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](462, "Dr.Kenny Josh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](463, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](464, "27/05/2016");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](465, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](466, "div", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](467, "Influenza");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](468, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](469, "101");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](470, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](471, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](472, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](473, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](474, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](475, "mat-icon", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](476, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](477, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](478, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](479, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](480, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](481, "Mark Hay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](482, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](483, "Dr. Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](484, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](485, "26/05/2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](486, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](487, "div", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](488, "Cholera");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](489, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](490, "105");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](491, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](492, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](493, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](494, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](495, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](496, "mat-icon", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](497, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](498, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](499, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](500, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](501, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](502, "Anthony Davie");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](503, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](504, "Dr.Cinnabar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](505, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](506, "21/05/2016");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](507, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](508, "div", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](509, "Amoebiasis");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](510, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](511, "106");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](512, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](513, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](514, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](515, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](516, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](517, "mat-icon", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](518, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](519, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](520, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](521, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](522, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](523, "David Perry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](524, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](525, "Dr.Felix ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](526, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](527, "20/04/2016");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](528, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](529, "div", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](530, "Jaundice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](531, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](532, "105");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](533, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](534, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](535, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](536, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](537, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](538, "mat-icon", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](539, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](540, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](541, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](542, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](543, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](544, "Anthony Davie");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](545, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](546, "Dr.Beryl");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](547, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](548, "24/05/2016");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](549, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](550, "div", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](551, "Leptospirosis");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](552, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](553, "102");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](554, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](555, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](556, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](557, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](558, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](559, "mat-icon", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](560, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](561, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](562, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](563, "6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](564, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](565, "Alan Gilchrist");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](566, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](567, "Dr.Joshep");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](568, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](569, "22/05/2016");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](570, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](571, "div", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](572, "Hepatitis");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](573, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](574, "103");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](575, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](576, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](577, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](578, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](579, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](580, "mat-icon", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](581, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](582, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](583, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](584, "7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](585, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](586, "Mark Hay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](587, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](588, "Dr.Jayesh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](589, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](590, "18/06/2016");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](591, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](592, "div", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](593, "Typhoid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](594, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](595, "107");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](596, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](597, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](598, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](599, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](600, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](601, "mat-icon", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](602, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](603, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](604, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](605, "8");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](606, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](607, "Sue Woodger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](608, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](609, "Dr.Sharma");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](610, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](611, "17/05/2016");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](612, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](613, "div", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](614, "Malaria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](615, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](616, "108");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](617, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](618, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](619, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](620, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](621, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](622, "mat-icon", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](623, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](108);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.lineChartOptions.series)("chart", ctx.lineChartOptions.chart)("xaxis", ctx.lineChartOptions.xaxis)("stroke", ctx.lineChartOptions.stroke)("colors", ctx.lineChartOptions.colors)("dataLabels", ctx.lineChartOptions.dataLabels)("legend", ctx.lineChartOptions.legend)("tooltip", ctx.lineChartOptions.tooltip)("markers", ctx.lineChartOptions.markers)("grid", ctx.lineChartOptions.grid)("yaxis", ctx.lineChartOptions.yaxis)("title", ctx.lineChartOptions.title)("fill", ctx.lineChartOptions.fill);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.doughnutChartData)("labels", ctx.doughnutChartLabels)("options", ctx.doughnutChartOptions)("legend", ctx.doughnutChartLegend)("chartType", ctx.doughnutChartType)("colors", ctx.doughnutChartColors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r0);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuItem, ng2_charts__WEBPACK_IMPORTED_MODULE_6__.BaseChartDirective, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    13700:
    /*!********************************************************!*\
      !*** ./src/app/admin/dashboard/main/main.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainComponent": function MainComponent() {
          return (
            /* binding */
            _MainComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-charts */
      86178);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/menu */
      33935);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-apexcharts */
      34256);

      var _MainComponent = /*#__PURE__*/function () {
        function _MainComponent() {
          _classCallCheck(this, _MainComponent);
        }

        _createClass(_MainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.smallChart1();
            this.smallChart2();
            this.smallChart3();
            this.smallChart4();
            this.chart1();
            this.chart2();
          }
        }, {
          key: "smallChart1",
          value: function smallChart1() {
            this.cardChart1 = {
              responsive: true,
              tooltips: {
                enabled: false
              },
              legend: {
                display: false
              },
              scales: {
                yAxes: [{
                  gridLines: {
                    display: false,
                    drawBorder: false
                  },
                  ticks: {
                    beginAtZero: true,
                    display: false
                  }
                }],
                xAxes: [{
                  gridLines: {
                    drawBorder: false,
                    display: false
                  },
                  ticks: {
                    display: false
                  }
                }]
              },
              title: {
                display: false
              }
            };
            this.cardChart1Data = [{
              label: "New Patients",
              data: [50, 61, 80, 50, 72, 52, 60, 41, 30, 45, 70, 40, 93, 63, 50, 62],
              borderWidth: 4,
              pointStyle: "circle",
              pointRadius: 4,
              borderColor: "rgba(103,119,239,.7)",
              pointBackgroundColor: "rgba(103,119,239,.2)",
              backgroundColor: "rgba(103,119,239,.2)",
              pointBorderColor: "transparent"
            }];
            this.cardChart1Label = ["16-07-2018", "17-07-2018", "18-07-2018", "19-07-2018", "20-07-2018", "21-07-2018", "22-07-2018", "23-07-2018", "24-07-2018", "25-07-2018", "26-07-2018", "27-07-2018", "28-07-2018", "29-07-2018", "30-07-2018", "31-07-2018"];
          }
        }, {
          key: "smallChart2",
          value: function smallChart2() {
            this.cardChart2 = {
              responsive: true,
              tooltips: {
                enabled: false
              },
              legend: {
                display: false
              },
              scales: {
                yAxes: [{
                  gridLines: {
                    display: false,
                    drawBorder: false
                  },
                  ticks: {
                    beginAtZero: true,
                    display: false
                  }
                }],
                xAxes: [{
                  gridLines: {
                    drawBorder: false,
                    display: false
                  },
                  ticks: {
                    display: false
                  }
                }]
              },
              title: {
                display: false
              }
            };
            this.cardChart2Data = [{
              label: "New Patients",
              data: [50, 61, 80, 50, 40, 93, 63, 50, 62, 72, 52, 60, 41, 30, 45, 70],
              borderWidth: 4,
              pointStyle: "circle",
              pointRadius: 4,
              borderColor: "rgba(253,126,20,.7)",
              pointBackgroundColor: "rgba(253,126,20,.2)",
              backgroundColor: "rgba(253,126,20,.2)",
              pointBorderColor: "transparent"
            }];
            this.cardChart2Label = ["16-07-2018", "17-07-2018", "18-07-2018", "19-07-2018", "20-07-2018", "21-07-2018", "22-07-2018", "23-07-2018", "24-07-2018", "25-07-2018", "26-07-2018", "27-07-2018", "28-07-2018", "29-07-2018", "30-07-2018", "31-07-2018"];
          }
        }, {
          key: "smallChart3",
          value: function smallChart3() {
            this.cardChart3 = {
              responsive: true,
              tooltips: {
                enabled: false
              },
              legend: {
                display: false
              },
              scales: {
                yAxes: [{
                  gridLines: {
                    display: false,
                    drawBorder: false
                  },
                  ticks: {
                    beginAtZero: true,
                    display: false
                  }
                }],
                xAxes: [{
                  gridLines: {
                    drawBorder: false,
                    display: false
                  },
                  ticks: {
                    display: false
                  }
                }]
              },
              title: {
                display: false
              }
            };
            this.cardChart3Data = [{
              label: "New Patients",
              data: [52, 60, 41, 30, 45, 70, 50, 61, 80, 50, 72, 40, 93, 63, 50, 62],
              borderWidth: 4,
              pointStyle: "circle",
              pointRadius: 4,
              borderColor: "rgba(40,167,69,.7)",
              pointBackgroundColor: "rgba(40,167,69,.2)",
              backgroundColor: "rgba(40,167,69,.2)",
              pointBorderColor: "transparent"
            }];
            this.cardChart3Label = ["16-07-2018", "17-07-2018", "18-07-2018", "19-07-2018", "20-07-2018", "21-07-2018", "22-07-2018", "23-07-2018", "24-07-2018", "25-07-2018", "26-07-2018", "27-07-2018", "28-07-2018", "29-07-2018", "30-07-2018", "31-07-2018"];
          }
        }, {
          key: "smallChart4",
          value: function smallChart4() {
            this.cardChart4 = {
              responsive: true,
              tooltips: {
                enabled: false
              },
              legend: {
                display: false
              },
              scales: {
                yAxes: [{
                  gridLines: {
                    display: false,
                    drawBorder: false
                  },
                  ticks: {
                    beginAtZero: true,
                    display: false
                  }
                }],
                xAxes: [{
                  gridLines: {
                    drawBorder: false,
                    display: false
                  },
                  ticks: {
                    display: false
                  }
                }]
              },
              title: {
                display: false
              }
            };
            this.cardChart4Data = [{
              label: "New Patients",
              data: [30, 45, 70, 40, 93, 63, 50, 62, 50, 61, 80, 50, 72, 52, 60, 41],
              borderWidth: 4,
              pointStyle: "circle",
              pointRadius: 4,
              borderColor: "rgba(0,123,255,.7)",
              pointBackgroundColor: "rgba(0,123,255,.2)",
              backgroundColor: "rgba(0,123,255,.2)",
              pointBorderColor: "transparent"
            }];
            this.cardChart4Label = ["16-07-2018", "17-07-2018", "18-07-2018", "19-07-2018", "20-07-2018", "21-07-2018", "22-07-2018", "23-07-2018", "24-07-2018", "25-07-2018", "26-07-2018", "27-07-2018", "28-07-2018", "29-07-2018", "30-07-2018", "31-07-2018"];
          }
        }, {
          key: "chart1",
          value: function chart1() {
            this.areaChartOptions = {
              series: [{
                name: "New Patients",
                data: [31, 40, 28, 51, 42, 85, 77]
              }, {
                name: "Old Patients",
                data: [11, 32, 45, 32, 34, 52, 41]
              }],
              chart: {
                height: 350,
                type: "area",
                toolbar: {
                  show: false
                },
                foreColor: "#9aa0ac"
              },
              colors: ["#407fe4", "#908e8e"],
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: "smooth"
              },
              xaxis: {
                type: "datetime",
                categories: ["2018-09-19", "2018-09-20", "2018-09-21", "2018-09-22", "2018-09-23", "2018-09-24", "2018-09-25"]
              },
              legend: {
                show: true,
                position: "top",
                horizontalAlign: "center",
                offsetX: 0,
                offsetY: 0
              },
              tooltip: {
                theme: "dark",
                marker: {
                  show: true
                },
                x: {
                  show: true
                }
              }
            };
          }
        }, {
          key: "chart2",
          value: function chart2() {
            this.barChartOptions = {
              series: [{
                name: "Colds and Flu",
                data: [44, 55, 41, 67, 22, 43]
              }, {
                name: "Headaches",
                data: [13, 23, 20, 8, 13, 27]
              }, {
                name: "Malaria",
                data: [11, 17, 15, 15, 21, 14]
              }, {
                name: "Typhoid",
                data: [21, 7, 25, 13, 22, 8]
              }],
              chart: {
                type: "bar",
                height: 350,
                foreColor: "#9aa0ac",
                stacked: true,
                toolbar: {
                  show: false
                }
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  legend: {
                    position: "bottom",
                    offsetX: -10,
                    offsetY: 0
                  }
                }
              }],
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: "30%"
                }
              },
              dataLabels: {
                enabled: false
              },
              xaxis: {
                type: "category",
                categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
              },
              legend: {
                show: false
              },
              fill: {
                opacity: 0.8,
                colors: ["#01B8AA", "#374649", "#FD625E", "#F2C80F"]
              },
              tooltip: {
                theme: "dark",
                marker: {
                  show: true
                },
                x: {
                  show: true
                }
              }
            };
          }
        }]);

        return _MainComponent;
      }();

      _MainComponent.??fac = function MainComponent_Factory(t) {
        return new (t || _MainComponent)();
      };

      _MainComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _MainComponent,
        selectors: [["app-main"]],
        decls: 575,
        vars: 43,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "active"], [1, "col-xl-3", "col-lg-6", "col-md-6", "col-sm-6", "col-xs-12"], [1, "card", "card-statistic-2"], [1, "clearfix"], [1, "card-icon", "shadow-primary", "bg-purple"], [1, "material-icons", "align-middle"], [1, "card-right"], [1, "float-end"], [1, "m-r-10", "m-l-10"], [1, "font-weight-bold", "float-end", "mb-0"], [1, "card-chart"], ["baseChart", "", 3, "chartType", "datasets", "labels", "options", "legend"], [1, "card-icon", "shadow-primary", "bg-orange"], [1, "card-icon", "shadow-primary", "bg-green"], [1, "card-icon", "shadow-primary", "bg-blue"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], ["mat-button", "", 1, "header-dropdown", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], [1, "body"], [3, "series", "chart", "xaxis", "yaxis", "colors", "stroke", "legend", "tooltip", "dataLabels"], [3, "series", "chart", "dataLabels", "plotOptions", "responsive", "xaxis", "tooltip", "legend", "fill"], [1, "row", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-8"], [1, "tableBody"], [1, "table-responsive"], [1, "table", "table-hover"], [1, "table-img"], ["src", "assets/images/user/user1.jpg", "alt", ""], ["href", "mailto:test@gmail.com"], [1, "badge", "col-red"], ["mat-icon-button", ""], ["src", "assets/images/user/user2.jpg", "alt", ""], [1, "badge", "col-green"], ["src", "assets/images/user/user3.jpg", "alt", ""], [1, "badge", "col-purple"], ["src", "assets/images/user/user4.jpg", "alt", ""], ["src", "assets/images/user/user5.jpg", "alt", ""], [1, "badge", "col-orange"], ["src", "assets/images/user/user8.jpg", "alt", ""], [1, "badge", "col-cyan"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], [1, "media-title"], [1, "text-job", "font-11"], ["src", "assets/images/user/user6.jpg", "alt", ""], [1, "table"], [1, "text-truncate"], [1, "list-unstyled", "order-list"], [1, "avatar", "avatar-sm"], ["src", "assets/images/user/user1.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user2.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user3.jpg", "alt", "user", 1, "rounded-circle"], [1, "badge"], [1, "far", "fa-file-pdf", "tbl-pdf"], ["mat-icon-button", "", 1, "btn-tbl-edit"], ["mat-icon-button", "", 1, "btn-tbl-delete"], ["src", "assets/images/user/user7.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user8.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user5.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user9.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user4.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user6.jpg", "alt", "user", 1, "rounded-circle"]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h5", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Appointments");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h3", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " 650");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "canvas", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "content_cut");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h5", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Operations");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "h3", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " 54");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "canvas", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "person_add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "h5", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "New Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "h3", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " 129");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "canvas", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "local_activity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "h5", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Earning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "h3", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, " $20,125");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "canvas", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, " Hospital Survay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "mat-menu", null, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](94, "apx-chart", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Common Diseases Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "mat-menu", null, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](112, "apx-chart", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, " Booked Appointment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "mat-menu", null, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "table", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "Patient Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "Assigned Doctor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "Diseases");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "Actions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "John Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, " Dr.Jacob Ryan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "12/05/2016 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "Fever");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](170, "img", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "Sarah Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, " Dr.Rajesh ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "12/05/2016 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "Cholera");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](190, "img", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "Airi Satou");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, " Dr.Jay Soni ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "12/05/2016 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "Jaundice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](210, "img", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "Angelica Ramos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215, " Dr.John Deo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, "12/05/2016 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, "Typhod");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](230, "img", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232, "Ashton Cox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, " Dr.Megha Trivedi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, "12/05/2016 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, "Maleria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](247, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](250, "img", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, "Cara Stevens");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, " Dr.Sarah Smith ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, "12/05/2016 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](260, "Infection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](264, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](267, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, " Doctors List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](275, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "mat-menu", null, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](281, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](283, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "table", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](290, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](292, "Doctor Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](294, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](298, "img", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](302, " Dr.Jay Soni ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](304, "(MBBS,MD)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "Available");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](310, "img", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](314, " Dr.Sarah Smith ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](316, "(BDS,MDS)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](319, "Absend");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](322, "img", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](323, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](326, "Dr.Megha Trivedi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](328, "(BHMS)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](331, "Available");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](334, "img", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](338, " Dr.John Deo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](340, "(MBBS,MS)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](343, "Available");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](346, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](347, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](350, " Dr.Jacob Ryan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](351, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](352, "(MBBS,MD)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](355, "Absend");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](358, "img", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](360, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](362, " Dr.Jay Soni ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](364, "(MBBS)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](365, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](367, "Available");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](370, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](373, " Operations");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](374, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](375, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](376, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](377, "mat-menu", null, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](380, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](381, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](382, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](384, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](385, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](386, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "table", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](388, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](389, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](391, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](392, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](393, "Parient Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](395, "Doctors Team");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](397, "Date Of Operation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](398, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](399, "Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](400, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](401, "Diseases");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](402, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](403, "Actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](404, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](405, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](406, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](407, "img", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](408, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](409, "John Deo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](410, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](411, "ul", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](412, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](413, "img", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](414, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](415, "img", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](416, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](417, "img", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](418, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](419, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](420, "+4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](421, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](422, "12-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](423, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](424, "i", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](425, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](426, "Cancer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](427, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](428, "button", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](429, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](430, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](431, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](432, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](433, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](434, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](435, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](436, "img", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](437, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](438, "Jens Brincker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](439, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](440, "ul", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](441, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](442, "img", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](443, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](444, "img", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](445, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](446, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](447, "+3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](448, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](449, "14-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](450, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](451, "i", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](452, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](453, "Fracture");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](454, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](455, "button", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](456, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](457, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](458, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](459, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](460, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](461, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](462, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](463, "img", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](464, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](465, "Mark Hay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](466, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](467, "ul", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](468, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](469, "img", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](470, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](471, "img", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](472, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](473, "img", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](474, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](475, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](476, "+2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](477, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](478, "18-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](479, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](480, "i", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](481, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](482, "Cataract surgery");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](483, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](484, "button", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](485, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](486, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](487, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](488, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](489, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](490, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](491, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](492, "img", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](493, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](494, "Mark Hay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](495, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](496, "ul", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](497, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](498, "img", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](499, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](500, "img", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](501, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](502, "img", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](503, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](504, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](505, "+4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](506, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](507, "20-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](508, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](509, "i", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](510, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](511, "Cholecystectomy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](512, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](513, "button", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](514, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](515, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](516, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](517, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](518, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](519, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](520, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](521, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](522, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](523, "Mark Hay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](524, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](525, "ul", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](526, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](527, "img", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](528, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](529, "img", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](530, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](531, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](532, "+3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](533, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](534, "22-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](535, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](536, "i", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](537, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](538, "Hysterectomy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](539, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](540, "button", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](541, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](542, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](543, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](544, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](545, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](546, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](547, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](548, "img", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](549, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](550, "Mark Hay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](551, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](552, "ul", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](553, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](554, "img", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](555, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](556, "img", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](557, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](558, "img", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](559, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](560, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](561, "+2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](562, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](563, "28-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](564, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](565, "i", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](566, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](567, "back pain surgery");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](568, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](569, "button", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](570, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](571, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](572, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](573, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](574, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("chartType", "line")("datasets", ctx.cardChart1Data)("labels", ctx.cardChart1Label)("options", ctx.cardChart1)("legend", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("chartType", "line")("datasets", ctx.cardChart2Data)("labels", ctx.cardChart2Label)("options", ctx.cardChart2)("legend", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("chartType", "line")("datasets", ctx.cardChart3Data)("labels", ctx.cardChart3Label)("options", ctx.cardChart3)("legend", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("chartType", "line")("datasets", ctx.cardChart4Data)("labels", ctx.cardChart4Label)("options", ctx.cardChart4)("legend", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.areaChartOptions.series)("chart", ctx.areaChartOptions.chart)("xaxis", ctx.areaChartOptions.xaxis)("yaxis", ctx.areaChartOptions.yaxis)("colors", ctx.areaChartOptions.colors)("stroke", ctx.areaChartOptions.stroke)("legend", ctx.areaChartOptions.legend)("tooltip", ctx.areaChartOptions.tooltip)("dataLabels", ctx.areaChartOptions.dataLabels);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.barChartOptions.series)("chart", ctx.barChartOptions.chart)("dataLabels", ctx.barChartOptions.dataLabels)("plotOptions", ctx.barChartOptions.plotOptions)("responsive", ctx.barChartOptions.responsive)("xaxis", ctx.barChartOptions.xaxis)("tooltip", ctx.barChartOptions.tooltip)("legend", ctx.barChartOptions.legend)("fill", ctx.barChartOptions.fill);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](154);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r0);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, ng2_charts__WEBPACK_IMPORTED_MODULE_2__.BaseChartDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuItem, ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__.ChartComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_admin_dashboard_dashboard_module_ts-es5.js.map