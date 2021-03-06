(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkcliniva"] = self["webpackChunkcliniva"] || []).push([["src_app_tables_tables_module_ts"], {
    /***/
    16157:
    /*!*************************************************************!*\
      !*** ./src/app/tables/basic-table/basic-table.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BasicTableComponent": function BasicTableComponent() {
          return (
            /* binding */
            _BasicTableComponent
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

      var _BasicTableComponent = /*#__PURE__*/function () {
        function _BasicTableComponent() {
          _classCallCheck(this, _BasicTableComponent);
        }

        _createClass(_BasicTableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _BasicTableComponent;
      }();

      _BasicTableComponent.??fac = function BasicTableComponent_Factory(t) {
        return new (t || _BasicTableComponent)();
      };

      _BasicTableComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _BasicTableComponent,
        selectors: [["app-basic-table"]],
        decls: 414,
        vars: 0,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "body", "table-responsive"], [1, "table"], ["scope", "row"], [1, "table", "table-striped"], [1, "table", "table-bordered"], [1, "table", "table-hover"], [1, "table", "table-condensed"], [1, "bg-purple"], [1, "l-bg-green"], [1, "l-bg-orange"], [1, "l-bg-cyan"], [1, "l-bg-purple"]],
        template: function BasicTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Normal Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Tables");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Normal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "table", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "FIRST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "LAST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "USERNAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Jellybean");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "@lajelly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Kikat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "@lakitkat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Striped");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, " Rows");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "table", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "FIRST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "LAST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "USERNAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "Jellybean");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "@lajelly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Kikat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "@lakitkat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "Bordered");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, " Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "table", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "FIRST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "LAST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "USERNAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "Jellybean");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "@lajelly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "Kikat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215, "@lakitkat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "Hover");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, " Rows");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "table", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, "FIRST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, "LAST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "USERNAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](243, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](254, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](259, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](261, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](263, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](266, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, "Jellybean");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "@lajelly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](275, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](277, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, "Kikat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](281, "@lakitkat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](288, "Condensed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](289, " Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "table", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](297, "FIRST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](299, "LAST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](301, "USERNAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](305, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](309, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](311, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](314, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](316, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](318, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](320, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](323, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](325, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](326, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](327, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](329, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](332, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](334, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](336, "Jellybean");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](338, "@lajelly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](340, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](341, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](343, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](345, "Kikat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](347, "@lakitkat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](350, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](351, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](354, "Colorful");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](355, " Rows");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "table", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](358, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](360, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](361, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](363, "FIRST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](364, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](365, "LAST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](367, "USERNAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "tr", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](370, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](371, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](373, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](374, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](375, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](377, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "tr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](380, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](381, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](382, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](384, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](385, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](386, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "tr", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](388, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](389, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](391, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](392, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](393, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](395, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "tr", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](397, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](398, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](399, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](400, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](401, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](402, "Jellybean");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](403, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](404, "@lajelly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](405, "tr", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](406, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](407, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](408, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](409, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](410, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](411, "Kikat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](412, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](413, "@lakitkat");

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
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy10YWJsZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    51229:
    /*!*******************************************************************!*\
      !*** ./src/app/tables/material-table/material-table.component.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaterialTableComponent": function MaterialTableComponent() {
          return (
            /* binding */
            _MaterialTableComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/paginator */
      99692);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      83166);

      function MaterialTableComponent_th_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MaterialTableComponent_td_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r48 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r48.no, " ");
        }
      }

      function MaterialTableComponent_th_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MaterialTableComponent_td_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r49 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r49.name, " ");
        }
      }

      function MaterialTableComponent_th_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Gender ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MaterialTableComponent_td_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r50 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r50.gender, " ");
        }
      }

      function MaterialTableComponent_th_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MaterialTableComponent_td_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r51 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r51.email, " ");
        }
      }

      function MaterialTableComponent_th_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MaterialTableComponent_td_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r52 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r52.address, " ");
        }
      }

      function MaterialTableComponent_th_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Mobile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MaterialTableComponent_td_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r53 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r53.mobile, " ");
        }
      }

      function MaterialTableComponent_th_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Salary ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MaterialTableComponent_td_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r54 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r54.salary, " ");
        }
      }

      function MaterialTableComponent_tr_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 36);
        }
      }

      function MaterialTableComponent_tr_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 37);
        }
      }

      function MaterialTableComponent_th_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MaterialTableComponent_td_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r56 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r56.no, " ");
        }
      }

      function MaterialTableComponent_th_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MaterialTableComponent_td_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r57 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r57.name, " ");
        }
      }

      function MaterialTableComponent_th_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Gender ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MaterialTableComponent_td_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r58 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r58.gender, " ");
        }
      }

      function MaterialTableComponent_th_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MaterialTableComponent_td_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r59 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r59.email, " ");
        }
      }

      function MaterialTableComponent_th_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MaterialTableComponent_td_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r60 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r60.address, " ");
        }
      }

      function MaterialTableComponent_th_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Mobile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MaterialTableComponent_td_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r61 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r61.mobile, " ");
        }
      }

      function MaterialTableComponent_th_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Salary ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MaterialTableComponent_td_81_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r62 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r62.salary, " ");
        }
      }

      function MaterialTableComponent_tr_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 36);
        }
      }

      function MaterialTableComponent_tr_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 37);
        }
      }

      function MaterialTableComponent_th_100_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MaterialTableComponent_td_101_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r64 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r64.no, " ");
        }
      }

      function MaterialTableComponent_th_103_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MaterialTableComponent_td_104_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r65 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r65.name, " ");
        }
      }

      function MaterialTableComponent_th_106_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Gender ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MaterialTableComponent_td_107_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r66 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r66.gender, " ");
        }
      }

      function MaterialTableComponent_th_109_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MaterialTableComponent_td_110_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r67 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r67.email, " ");
        }
      }

      function MaterialTableComponent_th_112_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MaterialTableComponent_td_113_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r68 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r68.address, " ");
        }
      }

      function MaterialTableComponent_th_115_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Mobile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MaterialTableComponent_td_116_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r69 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r69.mobile, " ");
        }
      }

      function MaterialTableComponent_th_118_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Salary ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function MaterialTableComponent_td_119_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r70 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r70.salary, " ");
        }
      }

      function MaterialTableComponent_tr_120_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 36);
        }
      }

      function MaterialTableComponent_tr_121_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 37);
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 20];
      };

      var ELEMENT_DATA = [{
        no: 1,
        name: "John Doe",
        gender: "male",
        email: "test@example.com",
        address: "729 S. Paris Hill St",
        mobile: 1234567890,
        salary: 120000
      }, {
        no: 2,
        name: "Sarah Smith",
        gender: "female",
        email: "test@example.com",
        address: "9003 Lake Street Hinesville",
        mobile: 1234567890,
        salary: 170000
      }, {
        no: 3,
        name: "Airi Satou",
        gender: "male",
        email: "test@example.com",
        address: "848 Old Durham Street Piedmont",
        mobile: 1234567890,
        salary: 150000
      }, {
        no: 4,
        name: "Angelica Ramos",
        gender: "male",
        email: "test@example.com",
        address: "8008 Anderson Drive Titusville",
        mobile: 1234567890,
        salary: 190000
      }, {
        no: 5,
        name: "Ashton Cox",
        gender: "female",
        email: "test@example.com",
        address: "620 East Ave. Dundalk",
        mobile: 1234567890,
        salary: 140000
      }, {
        no: 6,
        name: "Cara Stevens",
        gender: "male",
        email: "test@example.com",
        address: "9641 Delaware Street Camp Hill",
        mobile: 1234567890,
        salary: 220000
      }, {
        no: 7,
        name: "Jens Brincker",
        gender: "male",
        email: "test@example.com",
        address: "83 Pennsylvania Road",
        mobile: 1234567890,
        salary: 170000
      }, {
        no: 8,
        name: "Mark Hay",
        gender: "female",
        email: "test@example.com",
        address: "786 Lake Forest Rd. Biloxi",
        mobile: 1234567890,
        salary: 320000
      }, {
        no: 9,
        name: "Anthony Davie",
        gender: "male",
        email: "test@example.com",
        address: "226 Heritage Dr. Durham",
        mobile: 1234567890,
        salary: 620000
      }, {
        no: 10,
        name: "Sue Woodger",
        gender: "male",
        email: "test@example.com",
        address: "7 SE. Pumpkin Hill Lane",
        mobile: 1234567890,
        salary: 110000
      }];

      var _MaterialTableComponent = /*#__PURE__*/function () {
        function _MaterialTableComponent() {
          _classCallCheck(this, _MaterialTableComponent);

          this.displayedColumns = ["no", "name", "gender", "email", "address", "mobile", "salary"];
          this.dataSource = ELEMENT_DATA;
          this.dataSource2 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(ELEMENT_DATA);
          this.dataSource3 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(ELEMENT_DATA);
        }

        _createClass(_MaterialTableComponent, [{
          key: "applyFilter",
          value: function applyFilter(event) {
            var filterValue = event.target.value;
            this.dataSource3.filter = filterValue.trim().toLowerCase();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dataSource2.paginator = this.paginator;
          }
        }]);

        return _MaterialTableComponent;
      }();

      _MaterialTableComponent.??fac = function MaterialTableComponent_Factory(t) {
        return new (t || _MaterialTableComponent)();
      };

      _MaterialTableComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _MaterialTableComponent,
        selectors: [["app-material-table"]],
        viewQuery: function MaterialTableComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginator, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 122,
        vars: 11,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "body", "table-responsive"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "no"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "gender"], ["matColumnDef", "email"], ["matColumnDef", "address"], ["matColumnDef", "mobile"], ["matColumnDef", "salary"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
        template: function MaterialTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Material Tables");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Tables");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Material Tables");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "table", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](28, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, MaterialTableComponent_th_29_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, MaterialTableComponent_td_30_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](31, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, MaterialTableComponent_th_32_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, MaterialTableComponent_td_33_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](34, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, MaterialTableComponent_th_35_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, MaterialTableComponent_td_36_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](37, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, MaterialTableComponent_th_38_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, MaterialTableComponent_td_39_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](40, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, MaterialTableComponent_th_41_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, MaterialTableComponent_td_42_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](43, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, MaterialTableComponent_th_44_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, MaterialTableComponent_td_45_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](46, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, MaterialTableComponent_th_47_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, MaterialTableComponent_td_48_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](49, MaterialTableComponent_tr_49_Template, 1, 0, "tr", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](50, MaterialTableComponent_tr_50_Template, 1, 0, "tr", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Pagination");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "table", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](61, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](62, MaterialTableComponent_th_62_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](63, MaterialTableComponent_td_63_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](64, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](65, MaterialTableComponent_th_65_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](66, MaterialTableComponent_td_66_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](67, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](68, MaterialTableComponent_th_68_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](69, MaterialTableComponent_td_69_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](70, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](71, MaterialTableComponent_th_71_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](72, MaterialTableComponent_td_72_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](73, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](74, MaterialTableComponent_th_74_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](75, MaterialTableComponent_td_75_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](76, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](77, MaterialTableComponent_th_77_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](78, MaterialTableComponent_td_78_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](79, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](80, MaterialTableComponent_th_80_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](81, MaterialTableComponent_td_81_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](82, MaterialTableComponent_tr_82_Template, 1, 0, "tr", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](83, MaterialTableComponent_tr_83_Template, 1, 0, "tr", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "mat-paginator", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, " Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "mat-form-field", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "input", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup", function MaterialTableComponent_Template_input_keyup_97_listener($event) {
              return ctx.applyFilter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "table", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](99, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](100, MaterialTableComponent_th_100_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](101, MaterialTableComponent_td_101_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](102, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](103, MaterialTableComponent_th_103_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](104, MaterialTableComponent_td_104_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](105, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](106, MaterialTableComponent_th_106_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](107, MaterialTableComponent_td_107_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](108, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](109, MaterialTableComponent_th_109_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](110, MaterialTableComponent_td_110_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](111, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](112, MaterialTableComponent_th_112_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](113, MaterialTableComponent_td_113_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](114, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](115, MaterialTableComponent_th_115_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](116, MaterialTableComponent_td_116_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](117, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](118, MaterialTableComponent_th_118_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](119, MaterialTableComponent_td_119_Template, 2, 1, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](120, MaterialTableComponent_tr_120_Template, 1, 0, "tr", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](121, MaterialTableComponent_tr_121_Template, 1, 0, "tr", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](10, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRow],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXRlcmlhbC10YWJsZS5jb21wb25lbnQuc2FzcyJ9 */"]
      });
      /***/
    },

    /***/
    99961:
    /*!*****************************************************************!*\
      !*** ./src/app/tables/ngx-datatable/ngx-datatable.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgxDatatableComponent": function NgxDatatableComponent() {
          return (
            /* binding */
            _NgxDatatableComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      38550);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      5015);

      var _c0 = ["roleTemplate"];

      function NgxDatatableComponent_ng_template_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var value_r9 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", value_r9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function NgxDatatableComponent_ng_template_40_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgxDatatableComponent_ng_template_40_Template_button_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var row_r12 = restoredCtx.row;
            var rowIndex_r13 = restoredCtx.rowIndex;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](44);

            return ctx_r14.editRow(row_r12, rowIndex_r13, _r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "mode_edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgxDatatableComponent_ng_template_40_Template_button_click_4_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var row_r12 = restoredCtx.row;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r16.deleteRow(row_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgxDatatableComponent_ng_template_41_mat_error_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " First name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgxDatatableComponent_ng_template_41_mat_error_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Phone name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgxDatatableComponent_ng_template_41_mat_option_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var gender_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", gender_r22.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", gender_r22.value, " ");
        }
      }

      function NgxDatatableComponent_ng_template_41_mat_error_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please enter a valid email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgxDatatableComponent_ng_template_41_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " New User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgxDatatableComponent_ng_template_41_Template_button_click_7_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r24);

            var modal_r17 = restoredCtx.$implicit;
            return modal_r17.dismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "form", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function NgxDatatableComponent_ng_template_41_Template_form_ngSubmit_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r24);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r25.onAddRowSave(ctx_r25.register);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-form-field", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "First name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "mat-icon", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "face");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, NgxDatatableComponent_ng_template_41_mat_error_25_Template, 2, 0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-form-field", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Last name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "mat-icon", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "face");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "mat-form-field", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "mat-icon", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, NgxDatatableComponent_ng_template_41_mat_error_41_Template, 2, 0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "mat-form-field", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "mat-select", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, NgxDatatableComponent_ng_template_41_mat_option_47_Template, 2, 2, "mat-option", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "mat-form-field", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "input", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "mat-icon", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](56, NgxDatatableComponent_ng_template_41_mat_error_56_Template, 2, 0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "mat-form-field", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "textarea", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "button", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r4.newUserImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r4.register);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.register.get("firstName").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.register.get("phone").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r4.genders);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.register.get("email").hasError("required") || ctx_r4.register.get("email").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r4.register.valid);
        }
      }

      function NgxDatatableComponent_ng_template_43_mat_error_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " First name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgxDatatableComponent_ng_template_43_mat_error_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Phone name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgxDatatableComponent_ng_template_43_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgxDatatableComponent_ng_template_43_Template_button_click_7_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30);

            var modal_r26 = restoredCtx.$implicit;
            return modal_r26.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "form", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function NgxDatatableComponent_ng_template_43_Template_form_ngSubmit_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r31.onEditSave(ctx_r31.editForm);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-form-field", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "First name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-icon", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "face");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, NgxDatatableComponent_ng_template_43_mat_error_23_Template, 2, 0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-form-field", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Last name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "mat-icon", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "face");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "mat-form-field", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "mat-icon", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, NgxDatatableComponent_ng_template_43_mat_error_39_Template, 2, 0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "mat-form-field", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "textarea", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "button", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "button", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgxDatatableComponent_ng_template_43_Template_button_click_50_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30);

            var modal_r26 = restoredCtx.$implicit;
            return modal_r26.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r6.selectedRowData == null ? null : ctx_r6.selectedRowData.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", ctx_r6.selectedRowData == null ? null : ctx_r6.selectedRowData.firstName, " ", ctx_r6.selectedRowData == null ? null : ctx_r6.selectedRowData.lastName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r6.editForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r6.editForm.get("firstName").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r6.register.get("phone").hasError("required"));
        }
      }

      var _NgxDatatableComponent = /*#__PURE__*/function () {
        function _NgxDatatableComponent(fb, _snackBar, modalService) {
          _classCallCheck(this, _NgxDatatableComponent);

          this.fb = fb;
          this._snackBar = _snackBar;
          this.modalService = modalService;
          this.rows = [];
          this.newUserImg = "assets/images/user/user1.jpg";
          this.data = [];
          this.filteredData = [];
          this.columns = [{
            name: "First Name"
          }, {
            name: "Last Name"
          }, {
            name: "Gender"
          }, {
            name: "Phone"
          }, {
            name: "Email"
          }, {
            name: "Address"
          }];
          this.genders = [{
            id: "1",
            value: "Male"
          }, {
            id: "2",
            value: "Female"
          }];
          this.foods = [{
            value: "steak-0",
            viewValue: "Steak"
          }, {
            value: "pizza-1",
            viewValue: "Pizza"
          }, {
            value: "tacos-2",
            viewValue: "Tacos"
          }]; // Table 2

          this.tb2columns = [{
            name: "First Name"
          }, {
            name: "Last Name"
          }, {
            name: "Address"
          }];
          this.tb2data = [];
          this.tb2filteredData = [];
          this.editForm = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(),
            img: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl()
          });
        }

        _createClass(_NgxDatatableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.fetch(function (data) {
              _this.data = data;
              _this.filteredData = data;
            }); // Table 2

            this.tb2fetch(function (data) {
              _this.tb2data = data;
              _this.tb2filteredData = data;
            });
            this.register = this.fb.group({
              id: [""],
              img: [""],
              firstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern("[a-zA-Z]+")]],
              lastName: [""],
              phone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
              gender: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
              email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(5)]],
              address: [""]
            });
          }
        }, {
          key: "fetch",
          value: function fetch(cb) {
            var req = new XMLHttpRequest();
            req.open("GET", "assets/data/adv-tbl-data.json");

            req.onload = function () {
              var data = JSON.parse(req.response);
              cb(data);
            };

            req.send();
          } // Table 2

        }, {
          key: "tb2fetch",
          value: function tb2fetch(cb) {
            var req = new XMLHttpRequest();
            req.open("GET", "assets/data/ngx-data.json");

            req.onload = function () {
              var data = JSON.parse(req.response);
              cb(data);
            };

            req.send();
          } // Table 2

        }, {
          key: "tb2filterDatatable",
          value: function tb2filterDatatable(event) {
            // get the value of the key pressed and make it lowercase
            var val = event.target.value.toLowerCase(); // get the amount of columns in the table

            var colsAmt = this.tb2columns.length; // get the key names of each column in the dataset

            var keys = Object.keys(this.tb2filteredData[0]); // assign filtered matches to the active datatable

            this.tb2data = this.tb2filteredData.filter(function (item) {
              // iterate through each row's column data
              for (var i = 0; i < colsAmt; i++) {
                // check for a match
                if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val) {
                  // found match, return true to add to result set
                  return true;
                }
              }
            }); // whenever the filter changes, always go back to the first page

            this.table2.offset = 0;
          }
        }, {
          key: "editRow",
          value: function editRow(row, rowIndex, content) {
            this.modalService.open(content, {
              ariaLabelledBy: "modal-basic-title"
            });
            this.editForm.setValue({
              id: row.id,
              firstName: row.firstName,
              lastName: row.lastName,
              phone: row.phone,
              email: row.email,
              address: row.address,
              img: row.img
            });
            this.selectedRowData = row;
          }
        }, {
          key: "addRow",
          value: function addRow(content) {
            this.modalService.open(content, {
              ariaLabelledBy: "modal-basic-title"
            });
            this.register.patchValue({
              id: this.getId(10, 100),
              img: this.newUserImg
            });
          }
        }, {
          key: "deleteRow",
          value: function deleteRow(row) {
            this.data = this.arrayRemove(this.data, row.id);
            this.showNotification("bg-red", "Delete Record Successfully", "bottom", "right");
          }
        }, {
          key: "arrayRemove",
          value: function arrayRemove(array, id) {
            return array.filter(function (element) {
              return element.id != id;
            });
          }
        }, {
          key: "onEditSave",
          value: function onEditSave(form) {
            var _this2 = this;

            this.data = this.data.filter(function (value, key) {
              if (value.id == form.value.id) {
                value.firstName = form.value.firstName;
                value.lastName = form.value.lastName;
                value.phone = form.value.phone;
                value.gender = form.value.gender;
                value.email = form.value.email;
                value.address = form.value.address;
              }

              _this2.modalService.dismissAll();

              return true;
            });
            this.showNotification("bg-black", "Edit Record Successfully", "bottom", "right");
          }
        }, {
          key: "onAddRowSave",
          value: function onAddRowSave(form) {
            this.data.push(form.value);
            this.data = _toConsumableArray(this.data); // console.log(this.data);

            form.reset();
            this.modalService.dismissAll();
            this.showNotification("bg-green", "Add Record Successfully", "bottom", "right");
          }
        }, {
          key: "filterDatatable",
          value: function filterDatatable(event) {
            // get the value of the key pressed and make it lowercase
            var val = event.target.value.toLowerCase(); // get the amount of columns in the table

            var colsAmt = this.columns.length; // get the key names of each column in the dataset

            var keys = Object.keys(this.filteredData[0]); // assign filtered matches to the active datatable

            this.data = this.filteredData.filter(function (item) {
              // iterate through each row's column data
              for (var i = 0; i < colsAmt; i++) {
                // check for a match
                if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val) {
                  // found match, return true to add to result set
                  return true;
                }
              }
            }); // whenever the filter changes, always go back to the first page

            this.table.offset = 0;
          }
        }, {
          key: "getId",
          value: function getId(min, max) {
            // min and max included
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
        }, {
          key: "openSnackBar",
          value: function openSnackBar(message) {
            this._snackBar.open(message, "", {
              duration: 2000,
              verticalPosition: "bottom",
              horizontalPosition: "right",
              panelClass: ["bg-red"]
            });
          }
        }, {
          key: "showNotification",
          value: function showNotification(colorName, text, placementFrom, placementAlign) {
            this._snackBar.open(text, "", {
              duration: 2000,
              verticalPosition: placementFrom,
              horizontalPosition: placementAlign,
              panelClass: colorName
            });
          }
        }]);

        return _NgxDatatableComponent;
      }();

      _NgxDatatableComponent.??fac = function NgxDatatableComponent_Factory(t) {
        return new (t || _NgxDatatableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal));
      };

      _NgxDatatableComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _NgxDatatableComponent,
        selectors: [["app-ngx-datatable"]],
        viewQuery: function NgxDatatableComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DatatableComponent, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DatatableComponent, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.roleTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.table = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.table2 = _t.first);
          }
        },
        decls: 62,
        vars: 24,
        consts: [[1, "content"], [1, "container-fluid"], [1, "alert", "alert-info"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "row"], [1, "col-sm-12"], [1, "ngxTableHeader"], [1, "header-buttons-left", "ms-0", "mb-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "header-buttons"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], [1, "material", 3, "rows", "columns", "sortType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit"], ["table", ""], ["name", "Image", "sortable", "false", "prop", "img", 3, "width"], ["ngx-datatable-cell-template", ""], ["name", "First Name", 3, "width"], ["name", "Last Name", 3, "width"], ["name", "Gender", 3, "width"], ["name", "Phone", 3, "width"], ["name", "Email", 3, "width"], ["name", "Address", 3, "width"], ["name", "Actions", "sortable", "false", 3, "width"], ["addRecord", ""], ["editRecord", ""], [1, "header"], ["appearance", "fill"], ["matInput", "", 3, "keyup"], ["table2", ""], [1, "table-img", "padding-0"], ["width", "40", 3, "src"], [1, "btn", "tblActnBtn", "h-auto", 3, "click"], [1, "material-icons"], [1, "modal-header", "editRowModal"], ["id", "modal-basic-title", 1, "modal-title"], [1, "modal-header"], ["alt", "avatar", 3, "src"], [1, "modal-about"], [1, "font-weight-bold", "p-t-10", "font-17"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "register-form", 3, "formGroup", "ngSubmit"], [1, "input-field", "col", "s12", "d-none"], ["formControlName", "id", "type", "hidden", 1, "form-control"], ["formControlName", "img", "type", "hidden", 1, "form-control"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "firstName", "required", ""], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "formControlName", "lastName"], ["matInput", "", "formControlName", "phone", "required", ""], ["formControlName", "gender", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["matInput", "", "formControlName", "email", "required", ""], ["matInput", "", "formControlName", "address"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled"], ["type", "button", "mat-button", "", "data-dismiss", "modal"], [3, "value"], [3, "formGroup", "ngSubmit"], [1, "modal-footer"], [1, "button-demo"], ["mat-raised-button", "", "type", "submit", "color", "primary"], ["mat-button", "", "type", "button", 3, "click"]],
        template: function NgxDatatableComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Advance table component is develop using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "ngx-datatable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " angular plugin. Main features of this table is search record in table, add new record, edit record, delete record, sorting data by ascending and descending, pagination, and many more. You have just replace table static json data with your dynamic json data comes from your api. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Advance Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup", function NgxDatatableComponent_Template_input_keyup_23_listener($event) {
              return ctx.filterDatatable($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "ul", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgxDatatableComponent_Template_button_click_26_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r33);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](42);

              return ctx.addRow(_r3);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-icon", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "ngx-datatable", 19, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "ngx-datatable-column", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, NgxDatatableComponent_ng_template_32_Template, 2, 1, "ng-template", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "ngx-datatable-column", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "ngx-datatable-column", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "ngx-datatable-column", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "ngx-datatable-column", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "ngx-datatable-column", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "ngx-datatable-column", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "ngx-datatable-column", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, NgxDatatableComponent_ng_template_40_Template, 7, 0, "ng-template", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, NgxDatatableComponent_ng_template_41_Template, 69, 7, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, NgxDatatableComponent_ng_template_43_Template, 52, 6, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "ngx");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " Simple Example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "mat-form-field", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Search Here...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "input", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup", function NgxDatatableComponent_Template_input_keyup_59_listener($event) {
              return ctx.tb2filterDatatable($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "ngx-datatable", 19, 35);

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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rows", ctx.data)("columns", ctx.columns)("sortType", "multi")("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "60")("limit", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("width", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("width", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("width", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("width", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("width", 200);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("width", 200);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("width", 200);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("width", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rows", ctx.tb2data)("columns", ctx.tb2columns)("sortType", "multi")("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("limit", 10);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DataTableColumnCellDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZ3gtZGF0YXRhYmxlLmNvbXBvbmVudC5zYXNzIn0= */"]
      });
      /***/
    },

    /***/
    59177:
    /*!*************************************************!*\
      !*** ./src/app/tables/tables-routing.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TablesRoutingModule": function TablesRoutingModule() {
          return (
            /* binding */
            _TablesRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./basic-table/basic-table.component */
      16157);
      /* harmony import */


      var _ngx_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ngx-datatable/ngx-datatable.component */
      99961);
      /* harmony import */


      var _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./material-table/material-table.component */
      51229);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: "",
        redirectTo: "basic-tables",
        pathMatch: "full"
      }, {
        path: "basic-tables",
        component: _basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__.BasicTableComponent
      }, {
        path: "material-tables",
        component: _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_2__.MaterialTableComponent
      }, {
        path: "ngx-datatable",
        component: _ngx_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_1__.NgxDatatableComponent
      }];

      var _TablesRoutingModule = function _TablesRoutingModule() {
        _classCallCheck(this, _TablesRoutingModule);
      };

      _TablesRoutingModule.??fac = function TablesRoutingModule_Factory(t) {
        return new (t || _TablesRoutingModule)();
      };

      _TablesRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
        type: _TablesRoutingModule
      });
      _TablesRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](_TablesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    81439:
    /*!*****************************************!*\
      !*** ./src/app/tables/tables.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TablesModule": function TablesModule() {
          return (
            /* binding */
            _TablesModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _tables_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tables-routing.module */
      59177);
      /* harmony import */


      var _basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./basic-table/basic-table.component */
      16157);
      /* harmony import */


      var _ngx_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ngx-datatable/ngx-datatable.component */
      99961);
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      38550);
      /* harmony import */


      var _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./material-table/material-table.component */
      51229);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/paginator */
      99692);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/menu */
      33935);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TablesModule = function _TablesModule() {
        _classCallCheck(this, _TablesModule);
      };

      _TablesModule.??fac = function TablesModule_Factory(t) {
        return new (t || _TablesModule)();
      };

      _TablesModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({
        type: _TablesModule
      });
      _TablesModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _tables_routing_module__WEBPACK_IMPORTED_MODULE_0__.TablesRoutingModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.NgxDatatableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](_TablesModule, {
          declarations: [_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_1__.BasicTableComponent, _ngx_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_2__.NgxDatatableComponent, _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _tables_routing_module__WEBPACK_IMPORTED_MODULE_0__.TablesRoutingModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.NgxDatatableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_tables_tables_module_ts-es5.js.map