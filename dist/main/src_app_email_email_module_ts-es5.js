(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcliniva"] = self["webpackChunkcliniva"] || []).push([["src_app_email_email_module_ts"], {
    /***/
    31104:
    /*!****************************************************!*\
      !*** ./src/app/email/compose/compose.component.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComposeComponent": function ComposeComponent() {
          return (
            /* binding */
            _ComposeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ckeditor/ckeditor5-build-classic */
      78556);
      /* harmony import */


      var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ckeditor/ckeditor5-angular */
      22723);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      51095);

      var _ComposeComponent = function _ComposeComponent() {
        _classCallCheck(this, _ComposeComponent);

        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__;
      };

      _ComposeComponent.??fac = function ComposeComponent_Factory(t) {
        return new (t || _ComposeComponent)();
      };

      _ComposeComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _ComposeComponent,
        selectors: [["app-compose"]],
        decls: 135,
        vars: 1,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["href", "#", "onClick", "return false;"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], [1, "breadcrumb-item", "active"], [1, "col-xs-12", "col-sm-12", "col-md-3", "col-lg-3"], [1, "card"], [1, "body"], ["id", "mail-nav"], ["type", "button", 1, "btn", "btn-success", "waves-effect", "m-b-15"], ["id", "mail-folders", 1, ""], [1, "active"], ["href", "inbox.html", "title", "Inbox"], [1, "badge", "bg-orange"], ["href", "javascript:;", "title", "Sent"], ["href", "javascript:;", "title", "Draft"], ["href", "javascript:;", "title", "Bin"], ["href", "javascript:;", "title", "Important"], ["href", "javascript:;", "title", "Starred"], [1, "b-b", "p-10", "text-strong"], ["id", "mail-labels", 1, ""], ["href", "javascript:;"], [1, "material-icons", "col-red"], [1, "material-icons", "col-blue"], [1, "material-icons", "col-orange"], [1, "material-icons", "col-cyan"], ["id", "online-offline", 1, "online-user"], ["title", "Online", 1, "material-icons", "col-green"], ["title", "Off Line", 1, "material-icons", "col-indigo"], ["title", "Away", 1, "material-icons", "col-orange"], [1, "col-xs-12", "col-sm-12", "col-md-9", "col-lg-9"], [1, "boxs", "mail_listing"], [1, "inbox-center", "table-responsive"], [1, "table", "table-hover"], ["colspan", "1"], [1, "inbox-header"], [1, "col-lg-12"], [1, "composeForm"], [1, "form-line"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "id", "email_address"], ["matInput", "", "id", "subject"], ["data", "<p>Hello, world!</p>", 3, "editor"], [1, "compose-editor", "m-t-20"], ["id", "summernote"], ["type", "file", "multiple", "", 1, "default"], [1, "m-l-25", "m-b-20"], ["mat-flat-button", "", "color", "primary", 1, "msr-2"], ["mat-flat-button", "", "color", "warn"]],
        template: function ComposeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Compose");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Compose");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "COMPOSE");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "ul", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "Inbox ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "Sent");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "Draft");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, "Bin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, "Important");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "Starred");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "h5", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "Labels");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "ul", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "local_offer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "Family");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](57, "local_offer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "i", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62, "local_offer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](63, "Shop");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "i", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](67, "local_offer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](68, "Themeforest");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](72, "local_offer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](73, "Google");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "h5", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](75, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "ul", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "i", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](80, "brightness_1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](81, "Sachin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](85, "brightness_1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](86, "John Smith ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "i", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](90, "brightness_1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](91, "Askay");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](95, "brightness_1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](96, "Dhavan");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](100, "brightness_1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](101, "Lee");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](104, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "table", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "th", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](111, " Compose New Message ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "form", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "mat-form-field", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](117, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](118, "TO");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](119, "input", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "mat-form-field", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](123, "Subject");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](124, "input", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](125, "ckeditor", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](126, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](127, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](128, "input", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](130, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "button", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](132, "Send");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](133, "button", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](134, "Discard");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](125);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("editor", ctx.Editor);
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_4__.CKEditorComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton],
        styles: ["[_nghost-%COMP%]     .ck-editor__editable_inline {\n  min-height: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGIiwiZmlsZSI6ImNvbXBvc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmNrLWVkaXRvcl9fZWRpdGFibGVfaW5saW5lIHtcclxuICBtaW4taGVpZ2h0OiAzNTBweDtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    4639:
    /*!***********************************************!*\
      !*** ./src/app/email/email-routing.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmailRoutingModule": function EmailRoutingModule() {
          return (
            /* binding */
            _EmailRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./inbox/inbox.component */
      89194);
      /* harmony import */


      var _compose_compose_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./compose/compose.component */
      31104);
      /* harmony import */


      var _read_mail_read_mail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./read-mail/read-mail.component */
      63925);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: "inbox",
        component: _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_0__.InboxComponent
      }, {
        path: "compose",
        component: _compose_compose_component__WEBPACK_IMPORTED_MODULE_1__.ComposeComponent
      }, {
        path: "read-mail",
        component: _read_mail_read_mail_component__WEBPACK_IMPORTED_MODULE_2__.ReadMailComponent
      }];

      var _EmailRoutingModule = function _EmailRoutingModule() {
        _classCallCheck(this, _EmailRoutingModule);
      };

      _EmailRoutingModule.??fac = function EmailRoutingModule_Factory(t) {
        return new (t || _EmailRoutingModule)();
      };

      _EmailRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
        type: _EmailRoutingModule
      });
      _EmailRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](_EmailRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    57727:
    /*!***************************************!*\
      !*** ./src/app/email/email.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmailModule": function EmailModule() {
          return (
            /* binding */
            _EmailModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _email_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./email-routing.module */
      4639);
      /* harmony import */


      var _compose_compose_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./compose/compose.component */
      31104);
      /* harmony import */


      var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./inbox/inbox.component */
      89194);
      /* harmony import */


      var _read_mail_read_mail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./read-mail/read-mail.component */
      63925);
      /* harmony import */


      var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ckeditor/ckeditor5-angular */
      22723);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _EmailModule = function _EmailModule() {
        _classCallCheck(this, _EmailModule);
      };

      _EmailModule.??fac = function EmailModule_Factory(t) {
        return new (t || _EmailModule)();
      };

      _EmailModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({
        type: _EmailModule
      });
      _EmailModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _email_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmailRoutingModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__.CKEditorModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](_EmailModule, {
          declarations: [_compose_compose_component__WEBPACK_IMPORTED_MODULE_1__.ComposeComponent, _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_2__.InboxComponent, _read_mail_read_mail_component__WEBPACK_IMPORTED_MODULE_3__.ReadMailComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _email_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmailRoutingModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__.CKEditorModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule]
        });
      })();
      /***/

    },

    /***/
    89194:
    /*!************************************************!*\
      !*** ./src/app/email/inbox/inbox.component.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InboxComponent": function InboxComponent() {
          return (
            /* binding */
            _InboxComponent
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


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);

      var _InboxComponent = /*#__PURE__*/function () {
        function _InboxComponent() {
          _classCallCheck(this, _InboxComponent);
        }

        _createClass(_InboxComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _InboxComponent;
      }();

      _InboxComponent.??fac = function InboxComponent_Factory(t) {
        return new (t || _InboxComponent)();
      };

      _InboxComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _InboxComponent,
        selectors: [["app-inbox"]],
        decls: 418,
        vars: 0,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-xs-12", "col-sm-12", "col-md-3", "col-lg-3"], [1, "card"], [1, "body"], ["id", "mail-nav"], ["type", "button", 1, "btn", "btn-success", "waves-effect", "m-b-15"], ["id", "mail-folders", 1, ""], [1, "active"], ["title", "Inbox"], [1, "badge", "bg-orange"], ["href", "javascript:;", "title", "Sent"], ["href", "javascript:;", "title", "Draft"], ["href", "javascript:;", "title", "Bin"], ["href", "javascript:;", "title", "Important"], ["href", "javascript:;", "title", "Starred"], [1, "b-b", "p-10", "text-strong"], ["id", "mail-labels", 1, ""], ["href", "javascript:;"], [1, "material-icons", "col-red"], [1, "material-icons", "col-blue"], [1, "material-icons", "col-orange"], [1, "material-icons", "col-cyan"], ["id", "online-offline", 1, "online-user"], ["title", "Online", 1, "material-icons", "col-green"], ["title", "Off Line", 1, "material-icons", "col-indigo"], ["title", "Away", 1, "material-icons", "col-orange"], [1, "col-xs-12", "col-sm-12", "col-md-9", "col-lg-9"], [1, "boxs", "mail_listing"], [1, "inbox-center", "table-responsive"], [1, "table", "table-hover"], [1, "text-center"], [1, "example-margin"], ["colspan", "3"], [1, "inbox-header"], [1, "mail-option", "no-pad-left"], [1, "email-btn-group", "m-l-15"], ["mat-icon-button", "", "aria-label", "Example icon-button with a heart icon"], ["colspan", "2", 1, "hidden-xs"], [1, "float-end"], [1, "unread"], [1, "tbl-checkbox"], [1, "hidden-xs"], [1, "material-icons"], [1, "max-texts"], ["routerLink", "/email/read-mail"], [1, "badge", "col-blue", "shadow-style", "m-r-10"], [1, "text-end"], [1, "material-icons", "text-warning"], [1, "badge", "col-red", "shadow-style", "m-r-10"], [1, "badge", "col-cyan", "shadow-style", "m-r-10"], [1, "badge", "col-orange", "shadow-style", "m-r-10"], [1, "badge", "col-purple", "shadow-style", "m-r-10"], [1, "badge", "col-green", "shadow-style", "m-r-10"], [1, "col-sm-7"], [1, "p-15"], [1, "col-sm-5", "text-end"]],
        template: function InboxComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Inbox");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Inbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "COMPOSE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "ul", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Inbox ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Sent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Draft");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Bin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Important");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Starred");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h5", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Labels");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "ul", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "local_offer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Family");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "i", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "local_offer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "i", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "local_offer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Shop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "i", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "local_offer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Themeforest");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "i", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "local_offer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Google");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "h5", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "ul", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "brightness_1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Sachin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "i", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "brightness_1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "John Smith ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "i", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "brightness_1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Askay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "i", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "brightness_1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Dhavan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "i", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "brightness_1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Lee");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "table", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "th", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](110, "mat-checkbox", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "th", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "keyboard_return");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "archive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "folder");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "local_offer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "th", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "navigate_before");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "navigate_next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "tr", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "td", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](145, "mat-checkbox", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "star_border");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "Nelson Lane");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "a", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "span", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, " Lorem ipsum perspiciatis unde omnis iste natus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "attach_file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, " 12:30 PM ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "tr", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "td", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](163, "mat-checkbox", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "i", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "star");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "Kerry Mann");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "a", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "Lorem ipsum perspiciatis unde omnis iste natus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "attach_file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, " May 13 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "tr", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "td", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](179, "mat-checkbox", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "star_border");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "Adam Peters");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "a", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "span", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "Shopping");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, " Lorem ipsum perspiciatis unde omnis");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "attach_file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, " May 12 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "td", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](197, "mat-checkbox", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "star_border");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, "Lula Reese");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "a", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "span", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "Family");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, " Lorem ipsum perspiciatis unde omnis");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "attach_file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, " May 12 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "td", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](215, "mat-checkbox", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, "star_border");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, "Nelson Lane");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "a", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "span", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, " Lorem ipsum perspiciatis unde omnis iste natus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, "attach_file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, " May 12 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "td", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](233, "mat-checkbox", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "i", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, "star");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, "Kerry Mann");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "a", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, "Lorem ipsum perspiciatis unde omnis iste natus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, "attach_file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](246, " May 11 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "td", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](249, "mat-checkbox", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, "star_border");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](254, "Adam Peters");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "a", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "span", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](258, "Office");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](259, " Lorem ipsum perspiciatis unde omnis iste natus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, "attach_file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](264, " May 11 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "td", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](267, "mat-checkbox", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, "star_border");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "Lula Reese");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "a", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "span", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, "Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](277, " Lorem ipsum perspiciatis unde omnis iste natus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280, "attach_file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, " May 11 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "td", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](285, "mat-checkbox", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](288, "star_border");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](290, "Nelson Lane");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "a", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "span", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](294, "Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, " Lorem ipsum perspiciatis unde omnis iste natus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](298, "attach_file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](300, " May 10 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "td", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](303, "mat-checkbox", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "i", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](306, "star");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](308, "Kerry Mann");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "a", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](311, "Lorem ipsum perspiciatis unde omnis iste natus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](314, "attach_file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](316, " May 10 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "td", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](319, "mat-checkbox", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](322, "star_border");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](323, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](324, "Adam Peters");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](326, "a", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](328, "Shopping");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](329, " Lorem ipsum perspiciatis unde omnis");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](332, "attach_file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](334, " May 10 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "td", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](337, "mat-checkbox", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](340, "star_border");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](342, "Lula Reese");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "a", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "span", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](346, "Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](347, " Lorem ipsum perspiciatis unde omnis iste natus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](350, "attach_file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](351, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](352, " May 09 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "td", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](355, "mat-checkbox", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](358, "star_border");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](360, "Nelson Lane");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "a", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "span", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](364, "Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](365, " Lorem ipsum perspiciatis unde omnis iste natus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](368, "attach_file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](370, " May 09 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "td", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](373, "mat-checkbox", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](374, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](375, "i", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](376, "star");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](377, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](378, "Kerry Mann");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](380, "a", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](381, "Lorem ipsum perspiciatis unde omnis iste natus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](382, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](384, "attach_file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](385, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](386, " May 09 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](388, "td", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](389, "mat-checkbox", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](391, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](392, "star_border");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](394, "Adam Peters");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](395, "td", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "a", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](397, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](398, "Shopping");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](399, " Lorem ipsum perspiciatis unde omnis");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](400, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](401, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](402, "attach_file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](403, "td", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](404, " May 09 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](405, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](406, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](407, "p", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](408, "Showing 1 - 15 of 200");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](409, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](410, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](411, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](412, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](413, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](414, "navigate_before");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](415, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](416, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](417, "navigate_next");

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
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__.MatCheckbox, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmJveC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    63925:
    /*!********************************************************!*\
      !*** ./src/app/email/read-mail/read-mail.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReadMailComponent": function ReadMailComponent() {
          return (
            /* binding */
            _ReadMailComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ReadMailComponent = /*#__PURE__*/function () {
        function _ReadMailComponent() {
          _classCallCheck(this, _ReadMailComponent);
        }

        _createClass(_ReadMailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ReadMailComponent;
      }();

      _ReadMailComponent.??fac = function ReadMailComponent_Factory(t) {
        return new (t || _ReadMailComponent)();
      };

      _ReadMailComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _ReadMailComponent,
        selectors: [["app-read-mail"]],
        decls: 176,
        vars: 0,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["href", "#", "onClick", "return false;"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], [1, "breadcrumb-item", "active"], [1, "col-xs-12", "col-sm-12", "col-md-3", "col-lg-3"], [1, "card"], [1, "body"], ["id", "mail-nav"], ["type", "button", 1, "btn", "btn-success", "waves-effect", "m-b-15"], ["id", "mail-folders", 1, ""], [1, "active"], ["href", "inbox.html", "title", "Inbox"], [1, "badge", "bg-orange"], ["href", "javascript:;", "title", "Sent"], ["href", "javascript:;", "title", "Draft"], ["href", "javascript:;", "title", "Bin"], ["href", "javascript:;", "title", "Important"], ["href", "javascript:;", "title", "Starred"], [1, "b-b", "p-10", "text-strong"], ["id", "mail-labels", 1, ""], ["href", "javascript:;"], [1, "material-icons", "col-red"], [1, "material-icons", "col-blue"], [1, "material-icons", "col-orange"], [1, "material-icons", "col-cyan"], ["id", "online-offline", 1, "online-user"], ["title", "Online", 1, "material-icons", "col-green"], ["title", "Off Line", 1, "material-icons", "col-indigo"], ["title", "Away", 1, "material-icons", "col-orange"], [1, "col-xs-12", "col-sm-12", "col-md-9", "col-lg-9"], [1, "boxs", "mail_listing"], [1, "inbox-body", "no-pad"], [1, "mail-list"], [1, "mail-sender"], [1, "mail-heading"], [1, "vew-mail-header"], [1, "d-flex", "mb-4"], ["href", "#", 1, "table-img", "m-r-15"], ["alt", "", "src", "assets/images/user/user2.jpg"], [1, "flex-grow-1"], [1, "date", "float-end"], [1, "text-primary"], [1, "text-muted"], [1, "view-mail"], ["href", "#"], [1, "attachment-mail"], [1, "fa", "fa-paperclip"], [1, "col-md-2"], ["alt", "attachment", "src", "assets/images/user/usrbig2.jpg", 1, "img-thumbnail", "img-responsive"], ["href", "#", 1, "name"], ["alt", "attachment", "src", "assets/images/user/usrbig1.jpg", 1, "img-thumbnail", "img-responsive"], ["alt", "attachment", "src", "assets/images/user/usrbig3.jpg", 1, "img-thumbnail", "img-responsive"], [1, "replyBox", "m-t-20"], [1, "p-b-20"]],
        template: function ReadMailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "View Mail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "View Mail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "COMPOSE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "ul", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Inbox ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Sent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Draft");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Bin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Important");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Starred");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h5", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Labels");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "ul", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "local_offer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Family");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "local_offer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "i", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "local_offer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Shop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "i", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "local_offer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Themeforest");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "local_offer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Google");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "h5", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "ul", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "i", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "brightness_1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Sachin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "brightness_1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "John Smith ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "i", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "brightness_1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Askay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "brightness_1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Dhavan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "brightness_1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Lee");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "section", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "h4", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Hi Dear, How are you?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](112, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "a", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](115, "img", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "span", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "4:15AM 04 April 2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "h4", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Sarah Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "small", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "From: sarah@example.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, " Porttitor eu consequat risus. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Mauris sed congue orci. Donec ultrices faucibus rutrum");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, ". Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, " Sodales ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "vulputate urna, vel accumsan augue egestas ac");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, ". Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](139, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, " 3 attachments \u2014 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "Download all attachments");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, " | ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "View all images");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](149, "img", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "a", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, " IMG_001.jpg ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "20KB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](156, "img", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "a", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, " IMG_002.jpg ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "22KB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](163, "img", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "a", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, " IMG_003.jpg ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "28KB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "p", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "click here to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "Reply");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, " or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "Forward");

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
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWFkLW1haWwuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_email_email_module_ts-es5.js.map