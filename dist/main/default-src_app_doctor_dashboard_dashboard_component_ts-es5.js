(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkcliniva"] = self["webpackChunkcliniva"] || []).push([["default-src_app_doctor_dashboard_dashboard_component_ts"], {
    /***/
    89261:
    /*!*********************************************************!*\
      !*** ./src/app/doctor/dashboard/dashboard.component.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardComponent": function DashboardComponent() {
          return (
            /* binding */
            _DashboardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      77310);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-apexcharts */
      34256);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      99904);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/tooltip */
      11436);

      var _c0 = ["chart"];

      function DashboardComponent_div_296_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 90);
        }
      }

      function DashboardComponent_div_296_mat_icon_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-icon", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " arrow_downward ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_div_296_mat_icon_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-icon", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " arrow_upward ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_div_296_mat_icon_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-icon", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _c1 = function _c1(a0) {
        return {
          done: a0
        };
      };

      var _c2 = function _c2(a0, a1, a2) {
        return {
          "task-low": a0,
          "task-high": a1,
          "task-normal": a2
        };
      };

      function DashboardComponent_div_296_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-icon", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "drag_indicator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-checkbox", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function DashboardComponent_div_296_Template_mat_checkbox_change_5_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

            var task_r1 = restoredCtx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r6.toggle(task_r1, ctx_r6.sidenav);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, DashboardComponent_div_296_div_6_Template, 1, 0, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, DashboardComponent_div_296_mat_icon_10_Template, 2, 0, "mat-icon", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, DashboardComponent_div_296_mat_icon_11_Template, 2, 0, "mat-icon", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, DashboardComponent_div_296_mat_icon_12_Template, 2, 0, "mat-icon", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var task_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", !!task_r1.done);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c1, task_r1.done));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", task_r1.title, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction3"](10, _c2, task_r1.priority == "Low", task_r1.priority == "High", task_r1.priority == "Normal"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (task_r1 == null ? null : task_r1.priority) == "Low");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (task_r1 == null ? null : task_r1.priority) == "High");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (task_r1 == null ? null : task_r1.priority) == "Normal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", task_r1.priority, " ");
        }
      }

      var _DashboardComponent = /*#__PURE__*/function () {
        function _DashboardComponent() {
          _classCallCheck(this, _DashboardComponent);

          // TODO start
          this.tasks = [{
            id: "1",
            title: "Check patient report",
            done: true,
            priority: "High"
          }, {
            id: "2",
            title: "Request for festivle holiday",
            done: false,
            priority: "High"
          }, {
            id: "3",
            title: "Order new medicine stock",
            done: false,
            priority: "Low"
          }, {
            id: "4",
            title: "Remind for lunch in hotel",
            done: true,
            priority: "Normal"
          }, {
            id: "5",
            title: "Conference in london",
            done: false,
            priority: "High"
          }, {
            id: "6",
            title: "Announcement for",
            done: false,
            priority: "Normal"
          }, {
            id: "7",
            title: "call bus driver",
            done: true,
            priority: "High"
          }, {
            id: "8",
            title: "Web service data load issue",
            done: false,
            priority: "High"
          }, {
            id: "9",
            title: "Java compile error",
            done: false,
            priority: "Low"
          }, {
            id: "10",
            title: "Integrate project with spring boot",
            done: true,
            priority: "High"
          }];
        }

        _createClass(_DashboardComponent, [{
          key: "drop",
          value: function drop(event) {
            (0, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.moveItemInArray)(this.tasks, event.previousIndex, event.currentIndex);
          }
        }, {
          key: "toggle",
          value: function toggle(task, nav) {
            task.done = !task.done;
          } // TODO end

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.chart1();
            this.chart2();
            this.chart3();
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
              colors: ["#7D4988", "#66BB6A"],
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: "smooth"
              },
              xaxis: {
                type: "datetime",
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
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
                  format: "dd/MM/yy HH:mm"
                }
              }
            };
          }
        }, {
          key: "chart2",
          value: function chart2() {
            this.radialChartOptions = {
              series: [44, 55, 67],
              chart: {
                height: 265,
                type: "radialBar"
              },
              plotOptions: {
                radialBar: {
                  dataLabels: {
                    name: {
                      fontSize: "22px"
                    },
                    value: {
                      fontSize: "16px"
                    },
                    total: {
                      show: true,
                      label: "Total",
                      formatter: function formatter(w) {
                        return "249";
                      }
                    }
                  }
                }
              },
              colors: ["#ffc107", "#3f51b5", "#8bc34a"],
              labels: ["Face TO Face", "E-Consult", "Available"]
            };
          }
        }, {
          key: "chart3",
          value: function chart3() {
            this.linechartOptions = {
              series: [{
                name: "Male",
                data: [44, 55, 57, 56, 61, 58]
              }, {
                name: "Female",
                data: [76, 85, 101, 98, 87, 105]
              }],
              chart: {
                type: "bar",
                height: 350,
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
                },
                foreColor: "#9aa0ac"
              },
              colors: ["#5C9FFB", "#AEAEAE"],
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: "55%",
                  borderRadius: 5
                }
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                show: true,
                width: 2,
                colors: ["transparent"]
              },
              xaxis: {
                categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
              },
              yaxis: {},
              fill: {
                opacity: 1
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

        return _DashboardComponent;
      }();

      _DashboardComponent.??fac = function DashboardComponent_Factory(t) {
        return new (t || _DashboardComponent)();
      };

      _DashboardComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _DashboardComponent,
        selectors: [["app-dashboard"]],
        viewQuery: function DashboardComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart = _t.first);
          }
        },
        decls: 393,
        vars: 25,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/doctor/dashboard"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "active"], [1, "col-lg-3", "col-sm-6"], [1, "info-box7", "l-bg-card1", "order-info-box7"], [1, "info-box7-block"], [1, "m-b-15"], [1, "text-end"], [1, "fas", "fa-user-injured", "float-start"], [1, "m-b-0"], [1, "info-box7", "l-bg-card2", "order-info-box7"], [1, "far", "fa-calendar-check", "float-start"], [1, "info-box7", "l-bg-card3", "order-info-box7"], [1, "fas", "fa-cut", "float-start"], [1, "info-box7", "l-bg-card4", "order-info-box7"], [1, "fab", "fa-internet-explorer", "float-start"], [1, "col-xl-8", "col-lg-8", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [3, "series", "chart", "xaxis", "yaxis", "colors", "stroke", "legend", "tooltip", "dataLabels"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12"], [3, "series", "chart", "plotOptions", "labels"], [1, "text-center", "p-t-20"], [1, "chart-note"], [1, "dot", "bg-orange"], [1, "dot", "bg-indigo"], [1, "chart-note", "msr-0"], [1, "dot", "bg-green"], ["mat-stroked-button", "", "color", "primary"], [1, "row", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-8"], [1, "tableBody"], [1, "table-responsive"], [1, "table", "table-hover"], [1, "table-img"], ["src", "assets/images/user/user1.jpg", "alt", ""], [1, "badge", "col-red"], [1, "far", "fa-file-pdf", "tbl-pdf"], ["mat-flat-button", "", "color", "primary"], ["src", "assets/images/user/user2.jpg", "alt", ""], [1, "badge", "col-green"], ["src", "assets/images/user/user3.jpg", "alt", ""], [1, "badge", "col-purple"], ["src", "assets/images/user/user4.jpg", "alt", ""], ["src", "assets/images/user/user5.jpg", "alt", ""], [1, "badge", "col-orange"], ["src", "assets/images/user/user8.jpg", "alt", ""], [1, "badge", "col-cyan"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], [1, "list-body"], [1, "list-unstyled", "list-unstyled-noborder"], [1, "patient-group-list"], [1, "d-flex"], [1, "lbl-bedge", "l-bg-orange"], [1, "lbl-bedge-title"], [1, "group-details", "font-16"], [1, "ms-auto"], [1, "media-title", "text-muted", "mb-0", "font-14"], [1, "lbl-bedge", "l-bg-card1"], [1, "lbl-bedge", "l-bg-card2"], [1, "lbl-bedge", "l-bg-cyan"], [1, "lbl-bedge", "l-bg-red"], [1, "lbl-bedge", "l-bg-card3"], ["cdkDropList", "", 1, "task-list", 2, "position", "relative", "max-height", "370px", 3, "perfectScrollbar", "cdkDropListDropped"], ["class", "task-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], [1, "media-title"], ["href", "mailto:test@gmail.com"], [1, "text-job", "font-11"], ["src", "assets/images/user/user6.jpg", "alt", ""], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "legend", "fill", "colors", "stroke", "tooltip", "xaxis"], ["cdkDrag", "", 1, "task-box"], ["cdkDragHandle", "", 1, "task-handle", "m-r-20"], ["aria-hidden", "false"], ["color", "primary", 1, "m-r-15", 3, "checked", "change"], ["class", "task-custom-placeholder", 4, "cdkDragPlaceholder"], ["matTooltip", "Title", 3, "ngClass"], [3, "ngClass"], ["matTooltip", "Low", "aria-hidden", "false", "class", "lbl-low", 4, "ngIf"], ["matTooltip", "High", "aria-hidden", "false", "class", "lbl-high", 4, "ngIf"], ["matTooltip", "Normal", "aria-hidden", "false", "class", "lbl-normal", 4, "ngIf"], [1, "task-custom-placeholder"], ["matTooltip", "Low", "aria-hidden", "false", 1, "lbl-low"], ["matTooltip", "High", "aria-hidden", "false", 1, "lbl-high"], ["matTooltip", "Normal", "aria-hidden", "false", 1, "lbl-normal"]],
        template: function DashboardComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Doctor Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h5", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Todays Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h2", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "231");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "18% Higher Then Last Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h5", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Appointments");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h2", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "122");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "21% Higher Then Last Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "h5", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Todays Operations");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "h2", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "28");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "37% Higher Then Last Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "h5", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Online Appointment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "h2", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "42");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "10% Higher Then Last Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, " Patients Survay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "apx-chart", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Appointment Review");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "apx-chart", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "span", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Face To Face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "E-Consult");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Available");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "button", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Modify Availability");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, " Todays Appointment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "table", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Patient Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Gender");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Last Visit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Diseases");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Details ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "img", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "John Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Male");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "12/05/2016 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "Fever");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](130, "i", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](136, "img", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "Sarah Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "Female");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "12/05/2016 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "Cholera");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](147, "i", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](153, "img", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Airi Satou");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "Male");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "12/05/2016 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "Jaundice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](164, "i", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](170, "img", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "Angelica Ramos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "Female");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "12/05/2016 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "Typhod");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](181, "i", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](187, "img", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "Ashton Cox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "Female");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "12/05/2016 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, "Maleria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](198, "i", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](204, "img", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "Cara Stevens");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, "Male");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "12/05/2016 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "Infection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](215, "i", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, "Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, "Patients Group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "ul", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "span", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, "C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232, "Cholesterol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "5 Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "span", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, "D");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "Diabetic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, "14 Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "span", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, "L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, "Low Blood Pressure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, "10 Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "span", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](260, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, "Hypertension");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, "21 Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "span", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "Malaria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](275, "11 Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "span", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280, "D");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, "Dental Problem");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, "17 Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](292, "Todo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](293, " List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("cdkDropListDropped", function DashboardComponent_Template_div_cdkDropListDropped_295_listener($event) {
              return ctx.drop($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](296, DashboardComponent_div_296_Template, 14, 14, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](301, " Doctors List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "table", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](308, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](310, "Doctor Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](312, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](316, "img", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "a", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](320, " Dr.Jay Soni ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](322, "(MBBS,MD)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](323, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](325, "Available");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](326, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](328, "img", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "a", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](332, " Dr.Sarah Smith ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](334, "(BDS,MDS)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](337, "Absend");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](340, "img", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "a", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](344, "Dr.Megha Trivedi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](346, "(BHMS)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](347, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](349, "Available");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](350, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](351, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](352, "img", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "a", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](356, " Dr.John Deo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](358, "(MBBS,MS)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](360, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](361, "Available");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](364, "img", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](365, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "a", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](368, " Dr.Jacob Ryan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](370, "(MBBS,MD)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](373, "Absend");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](374, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](375, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](376, "img", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](377, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "a", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](380, " Dr.Jay Soni ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](381, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](382, "(MBBS)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](384, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](385, "Available");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](386, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](388, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](389, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](390, "Number Of Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](391, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](392, "apx-chart", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.areaChartOptions.series)("chart", ctx.areaChartOptions.chart)("xaxis", ctx.areaChartOptions.xaxis)("yaxis", ctx.areaChartOptions.yaxis)("colors", ctx.areaChartOptions.colors)("stroke", ctx.areaChartOptions.stroke)("legend", ctx.areaChartOptions.legend)("tooltip", ctx.areaChartOptions.tooltip)("dataLabels", ctx.areaChartOptions.dataLabels);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.radialChartOptions.series)("chart", ctx.radialChartOptions.chart)("plotOptions", ctx.radialChartOptions.plotOptions)("labels", ctx.radialChartOptions.labels);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](222);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.tasks);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.linechartOptions.series)("chart", ctx.linechartOptions.chart)("dataLabels", ctx.linechartOptions.dataLabels)("plotOptions", ctx.linechartOptions.plotOptions)("yaxis", ctx.linechartOptions.yaxis)("legend", ctx.linechartOptions.legend)("fill", ctx.linechartOptions.fill)("colors", ctx.linechartOptions.colors)("stroke", ctx.linechartOptions.stroke)("tooltip", ctx.linechartOptions.tooltip)("xaxis", ctx.linechartOptions.xaxis);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__.ChartComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.CdkDropList, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.CdkDragHandle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckbox, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.CdkDragPlaceholder, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNhc3MifQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_doctor_dashboard_dashboard_component_ts-es5.js.map