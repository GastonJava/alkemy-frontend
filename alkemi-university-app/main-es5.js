(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container-fluid\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/paginas/footer/adminfooter/adminfooter.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/paginas/footer/adminfooter/adminfooter.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n \n  <div id=\"btnsobretodo\">\n    <button [hidden]=\"!btnToggle\" (click)=\"abrirmenu()\">\n      ☰\n    </button>\n    <button [hidden]=\"btnToggle\" (click)=\"cerrarmenu()\">\n      X\n    </button>\n  </div>\n\n  <div class=\"container\">\n    <nav id=\"nav\">\n      <h2 id=\"hide\">Registrar Materias</h2>\n      <div class=\"direccion\">\n        \n        <div class=\"principal\" id=\"hide\">\n          <ul>\n            <li><b>Proximo examen: lun 13/2021</b></li>\n            <li><b>Condicion: Regular</b></li>\n            <li><b>Total Materias: 10 </b></li>\n            <li><b>Aprobado: 3 </b></li>\n          </ul>\n        </div>\n  \n        <div class=\"urls\">\n          <ul>\n            <li>\n              <b>\n              <a id=\"hide\" routerLink=\"/regprofesor\" routerLinkActive=\"active\">Ir a Registrar profesor</a>\n              </b>\n            </li>\n            <li>\n              <b>\n                  <a id=\"hide\" routerLink=\"/regmateria\" routerLinkActive=\"active\">Ir a registrar Materia</a>\n              </b>\n            </li>\n            <li>\n              <b>\n                <a id=\"hide\" routerLink=\"/adminprincipal\" routerLinkActive=\"active\">Ir al Principal</a>\n              </b>\n            </li>\n            <li><b id=\"hide\">Salir</b></li>\n          </ul>\n        </div>\n\n      </div>\n    \n    </nav>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/paginas/footer/footer.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/paginas/footer/footer.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"trigger menu\">\n  <div class=\"btn-container\">\n    <button [hidden]=\"btnToggle\" class=\"btn btn-success\" (click)=\"openNav()\">\n      ☰\n    </button>\n    <button [hidden]=\"!btnToggle\" class=\"btn btn-danger\" (click)=\"closeNav()\">\n      X\n    </button>\n  </div>\n</div>\n\n<nav class=\"footer adminfooter principalfoot\" id=\"abrirlinks\">\n  <div class=\"footer-link\" id=\"footer-link1\">\n    <div [hidden]=\"!start\">\n      <div class=\"container\">\n        <h2 class=\"starttitle\">BIENVENIDO: Gaston</h2>\n        <br />\n        <p class=\"starttxt\">Condicion: Regular</p>\n        <p class=\"starttxt\">Total Materias: 10</p>\n        <p class=\"starttxt\">Aprobadas: 3</p>\n        <p class=\"starttxt\">Proximo examen<br />03/05/2021</p>\n      </div>\n    </div>\n\n    <div [hidden]=\"!btnToggle\" *ngIf=\"isAlumnopage()\">\n      <div class=\"navbar\">\n        <h4 id=\"title\">Registrar Alumno</h4>\n      </div>\n\n      <li id=\"txt\">\n        <a routerLink=\"/consultaralumno\" routerLinkActive=\"active\"\n          >Consultar materia\n        </a>\n      </li>\n\n      <li id=\"txt\">\n        <a routerLink=\"/registraralumno\" routerLinkActive=\"active\"\n          >Registrar materia</a\n        >\n      </li>\n\n      <li id=\"txt\">\n        <a routerLink=\"/principalform\" routerLinkActive=\"active\"\n          >Formulario login</a\n        >\n      </li>\n\n      <li id=\"txt\" (click)=\"logout()\"><a>SALIR</a></li>\n    </div>\n\n    <!-- <div class=\"admincontainer\" [hidden]=\"btnToggle\" *ngIf=\"isAdminpage()\">\n      <div class=\"navbar adminnavabar\">\n        <h4 id=\"title admintitle\">Registrar Alumno</h4>\n      </div>\n\n      <li id=\"admintxt\">\n        <a class=\"admin\" routerLink=\"/regprofesor\" routerLinkActive=\"active\"\n          >Registrar profesor admin</a\n        >\n      </li>\n      <li id=\"admintxt\">\n        <a class=\"admin\" routerLink=\"/regmateria\" routerLinkActive=\"active\"\n          >Registrar materia admin</a\n        >\n      </li>\n\n      <li id=\"admintxt\">\n        <a class=\"admin\" routerLink=\"/adminprincipal\" routerLinkActive=\"active\"\n          >Admin principal</a\n        >\n      </li>\n\n      <li id=\"adminsalir\" (click)=\"logout()\"><a>SALIR</a></li>\n    </div> -->\n\n    <li [hidden]=\"!btnToggle\" (click)=\"testingAuthorize()\">\n      <a class=\"bg-danger\">TRAER DATOS CON AUTHORIZE</a>\n    </li>\n\n    <li (click)=\"obtenerinfoSoloAlumnos()\">\n      <a class=\"bg-danger\">Traer informacion solo alumno</a>\n    </li>\n\n    <li>\n      <a class=\"text-white\">{{ token }}</a>\n    </li>\n\n     <pre class=\"text-success\">{{ informacion | json}}</pre>\n     <pre class=\"bg-danger\">{{ error | json }}</pre>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/paginas/footer/sidebar/sidebar.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/paginas/footer/sidebar/sidebar.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"nombre-alumno\">\n      <p class=\"starttitle\">PONCE GASTON</p>\n    </div>\n    <br />\n    <p class=\"starttxt\">Condicion: Regular</p>\n    <p class=\"starttxt\">Total Materias: 10</p>\n    <p class=\"starttxt\">Aprobadas: 3</p>\n    <p class=\"starttxt\">Proximo examen:<br/>03/05/2021</p>\n    <br />\n    <li id=\"txt\">\n      <a routerLink=\"/consultaralumno\" routerLinkActive=\"activado\"\n        >Consultar materia\n      </a>\n    </li>\n\n    <li id=\"txt\">\n      <a routerLink=\"/registraralumno\" routerLinkActive=\"activado\"\n        >Registrar materia</a\n      >\n    </li>\n\n    <li id=\"txt\">\n      <a routerLink=\"/principalform\" routerLinkActive=\"activado\"\n        >Formulario login</a\n      >\n    </li>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/paginas/navbar/navbar.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/paginas/navbar/navbar.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"sticky-top principalnav\">\n    <div class=\"navbar\">\n\n        <h4 class=\"text-white\">Alkemy Labs</h4>\n\n        <ul>\n            <li class=\"lidni\"><a>33388101</a></li>\n            <li class=\"linombre\"><a>Gaston Ponce</a></li>\n        </ul>\n    </div>\n    \n</nav> -->\n\n<nav class=\"stycky-top container-fluid\">\n\n  <div class=\"navcontainer\"> \n\n    <div class=\"titulo\">\n      <h3 id=\"textcolor\">Alkemy School</h3>\n    </div>\n\n    <div class=\"usuario\">\n      <p class=\"nombre\" id=\"textcolor\">Ponce Gaston</p>\n      <p class=\"dni text-center\" id=\"textcolor\">33344444</p>\n    </div>\n\n  </div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/loader/loader.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/loader/loader.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-overlay-wrapper\" *ngIf=\"showSpinner\">\n    <div class=\"bee-spinner\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: tokenGetter, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _modules_formulario_services_AuthGuard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/formulario/services/AuthGuard.service */ "./src/app/modules/formulario/services/AuthGuard.service.ts");





function tokenGetter() {
    return localStorage.getItem("jwt");
}
var routes = [
    { path: 'principalform', loadChildren: function () { return Promise.all(/*! import() | modules-formulario-formulario-module */[__webpack_require__.e("default~alumno-consultar-alumno-consultar-module~alumno-registrar-alumno-registrar-module~modules-fo~41eedd00"), __webpack_require__.e("default~alumno-consultar-alumno-consultar-module~alumno-registrar-alumno-registrar-module~modules-fo~65087715"), __webpack_require__.e("modules-formulario-formulario-module")]).then(__webpack_require__.bind(null, /*! ./modules/formulario/formulario.module */ "./src/app/modules/formulario/formulario.module.ts")).then(function (m) { return m.FormularioModule; }); }, pathMatch: 'full' },
    { path: '', redirectTo: 'principalform', pathMatch: 'full' },
    { path: 'adminprincipal', loadChildren: function () { return __webpack_require__.e(/*! import() | modules-admin-admin-module */ "modules-admin-admin-module").then(__webpack_require__.bind(null, /*! ./modules/admin/admin.module */ "./src/app/modules/admin/admin.module.ts")).then(function (m) { return m.AdminModule; }); }, canActivate: [_modules_formulario_services_AuthGuard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]], data: { RolesPermitidos: ['Administrador'] } },
    { path: 'alumnoprincipal', loadChildren: function () { return __webpack_require__.e(/*! import() | modules-alumnos-alumnos-module */ "modules-alumnos-alumnos-module").then(__webpack_require__.bind(null, /*! ./modules/alumnos/alumnos.module */ "./src/app/modules/alumnos/alumnos.module.ts")).then(function (m) { return m.AlumnosModule; }); }, canActivate: [_modules_formulario_services_AuthGuard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]], data: { RolesPermitidos: ['Alumno'] } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                /* CommonModule, FormsModule,   */
                /*  ReactiveFormsModule,  */
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        allowedDomains: ["https://localhost:44325"],
                        /*  allowedDomains: ["https://localhost:9055"],  */
                        disallowedRoutes: []
                    }
                }),
            ],
            declarations: [
            /* NavbarComponent, */
            /* FooterComponent,
            AdminfooterComponent,
            SidebarComponent, */
            ],
            providers: [_modules_formulario_services_AuthGuard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0; }\n\n.container-fluid {\n  height: 100%;\n  width: 100%;\n  background: #23252F;\n  overflow-y: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQjpcXGdpdGh1YlxcYWxrZW15LWZyb250ZW5kL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0I6XFxnaXRodWJcXGFsa2VteS1mcm9udGVuZC9zcmNcXGFwcFxcc2hhcmVkXFx0aGVtZXNcXF9wYWxldGFwcmluY2lwYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUdaO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkM0QmtCO0VEM0JsQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXBwL3NoYXJlZC90aGVtZXMvcGFsZXRhcHJpbmNpcGFsXCI7XHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogJGNfcXVpbnRvX2Q7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcbiIsIi8vY29sb3JlcyBnbG9iYWxlc1xyXG4kd2hpdGU6ICNGRkZGRkY7XHJcbiR0ZXh0b19wcmltZXJvOiAjNmU3MDdjO1xyXG4kdGV4dG9fc2VjdW5kYXJpbzogI0Q0RDRENDtcclxuJHRleHRvLXRlcmNlcm86ICNDMkMyQzI7XHJcbiR0ZXh0by1jdWFydG86ICNFREVERUQ7XHJcblxyXG4kdGV4dG8tYXp1bDE6ICM4QUM0RkY7XHJcbiR0ZXh0by1henVsMjogI0M3RTNGRjtcclxuJHRleHRvLWF6dWwzOiAjNzVCQUZGO1xyXG4kdGV4dG8tYXp1bDQ6ICM3NTk1YjY7XHJcblxyXG5cclxuLy8gcGFsZXRhIG51bWVybyB1bm9cclxuJGNfcHJpbWVyb19hOiAjRjJGM0VFO1xyXG4kY19zZWd1bmRvX2E6ICNhYmFmYTM7XHJcbiRjX3RlcmNlcm9fYTogIzU3ODk4ZjtcclxuJGNfY3VhcnRvX2E6ICMxZTJjMjI7XHJcbiRjX3F1aW50b19hOiAjNGM1ZTUxO1xyXG5cclxuLy8gcGFsZXRhIG51bWVybyBkb3NcclxuJGNfcHJpbWVyb19iOiAjQTQ5NkIwO1xyXG4kY19zZWd1bmRvX2I6ICM2ODVGNzA7XHJcbiRjX3RlcmNlcm9fYjogI0RGQ0NGMDtcclxuJGNfY3VhcnRvX2I6ICNFQkQ3RkM7XHJcbiRjX3F1aW50b19iOiAjQzdCNkQ2O1xyXG5cclxuLy9wYWxldGEgbnVtZXJvIHRyZXNcclxuJGNfcHJpbWVyb19jOiAjZTBlYmY3O1xyXG4kY19zZWd1bmRvX2M6ICNiNmQ5ZmI7XHJcbiRjX3RlcmNlcm9fYzogIzk4YWNmODtcclxuJGNfY3VhcnRvX2M6ICNiMDg4Zjk7XHJcbiRjX3F1aW50b19jOiAjZGE5ZmY5O1xyXG5cclxuLy8gcGFsZXRhIG51bWVybyBjdWF0cm9cclxuJGNfcHJpbWVyb19kOiNGOEY4RjI7XHJcbiRjX3NlZ3VuZG9fZDojOThBNkFEO1xyXG4kY190ZXJjZXJvX2Q6IzM0M0E0MDtcclxuJGNfY3VhcnRvX2Q6ICMyNzI5MzU7XHJcbiRjX3F1aW50b19kOiAjMjMyNTJGO1xyXG4kY19zZXh0b19kOiAjMDNBRkZGO1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_urlboolean_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/urlboolean.service */ "./src/app/shared/services/urlboolean.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(route, srvboolean) {
        this.route = route;
        this.srvboolean = srvboolean;
        this.title = 'alkemi-university-app';
        this.count = 0;
        this.spinner$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
    }
    AppComponent.prototype.ngOnInit = function () {
        /*    this.evento(); */
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_services_urlboolean_service__WEBPACK_IMPORTED_MODULE_4__["UrlbooleanService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_urlboolean_service__WEBPACK_IMPORTED_MODULE_4__["UrlbooleanService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/loader/loader.component */ "./src/app/shared/loader/loader.component.ts");
/* harmony import */ var _core_paginas_footer_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/paginas/footer/sidebar/sidebar.component */ "./src/app/core/paginas/footer/sidebar/sidebar.component.ts");
/* harmony import */ var _core_paginas_footer_adminfooter_adminfooter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/paginas/footer/adminfooter/adminfooter.component */ "./src/app/core/paginas/footer/adminfooter/adminfooter.component.ts");
/* harmony import */ var _core_paginas_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/paginas/footer/footer.component */ "./src/app/core/paginas/footer/footer.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_paginas_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/paginas/navbar/navbar.module */ "./src/app/core/paginas/navbar/navbar.module.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"],
                _core_paginas_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _core_paginas_footer_adminfooter_adminfooter_component__WEBPACK_IMPORTED_MODULE_8__["AdminfooterComponent"],
                _core_paginas_footer_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                _core_paginas_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_12__["NavbarModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/paginas/footer/adminfooter/adminfooter.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/core/paginas/footer/adminfooter/adminfooter.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box; }\n\n.container-fluid {\n  /*    background-color: red; */\n  height: 90%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n.container {\n  /*  background-color: blue; */\n  height: 90%;\n  /*   display: flex;\r\n    justify-content: center;\r\n    align-items: center; */ }\n\n#btnsobretodo {\n  position: relative;\n  z-index: 100; }\n\nbutton {\n  z-index: 100; }\n\nnav {\n  /* position: relative; */\n  height: 100%;\n  width: 100%;\n  /* background-color: green; */\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  transition: width 0.4s ease; }\n\nnav h2 {\n    font-size: 1.4vw; }\n\nnav .principal {\n    /*  background: purple; */\n    width: 80%;\n    height: 50%; }\n\nnav .principal ul {\n      /* background-color: yellow; */\n      height: 90%;\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n      justify-content: space-evenly; }\n\nnav .principal ul li {\n        font-size: 0.8vw; }\n\nnav .urls {\n    /*         background: pink; */\n    width: 80%;\n    height: 50%; }\n\nnav .urls ul {\n      /* background-color: white; */\n      height: 90%;\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n      justify-content: space-evenly; }\n\nnav .urls ul li b {\n        font-size: 0.8vw; }\n\nnav ul,\n  nav li,\n  nav a {\n    list-style: none;\n    text-decoration: none;\n    color: #8AC4FF; }\n\nnav .active {\n    color: red; }\n\n/* RESPOSNIVE ADMIN SIDEBAR */\n\n/* super desktop large*/\n\n@media screen and (max-width: 1600px) {\n  .container-fluid {\n    /* background-color: red; */\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n  .container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 70%;\n    height: 95%;\n    border-radius: 5px;\n    background: #23252f;\n    box-shadow: 5px -5px 10px #0e0f13, -5px 5px 10px #383b4b; }\n  button {\n    z-index: 100; }\n  nav {\n    /* position: relative; */\n    height: 100%;\n    width: 100%;\n    background-color: green;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    transition: width 0.4s ease; }\n    nav h2 {\n      font-size: 1.2vw; }\n    nav .principal {\n      background: purple;\n      width: 90%;\n      height: 60%; }\n      nav .principal ul {\n        /*  background-color: yellow; */\n        height: 100%;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        justify-content: space-evenly; }\n        nav .principal ul li {\n          font-size: 0.8vw; }\n    nav .urls {\n      background: pink;\n      width: 90%;\n      height: 60%; }\n      nav .urls ul {\n        /* background-color: white; */\n        height: 90%;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        justify-content: space-evenly; }\n        nav .urls ul li b {\n          font-size: 0.8vw; }\n    nav ul,\n    nav li,\n    nav a {\n      list-style: none;\n      text-decoration: none;\n      color: #8AC4FF; }\n    nav .active {\n      color: red; } }\n\n/* desktop styles*/\n\n@media screen and (max-width: 1200px) {\n  .container-fluid {\n    height: 100%;\n    background-color: white; }\n  .container {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 85%;\n    border-radius: 5px;\n    background: #23252f;\n    box-shadow: 5px -5px 10px #0e0f13, -5px 5px 10px #383b4b; }\n  button {\n    z-index: 100; }\n  nav {\n    /* position: relative; */\n    height: 100%;\n    width: 100%;\n    background-color: green;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    transition: width 0.4s ease; }\n    nav h2 {\n      font-size: 1.6vw; }\n    nav .principal {\n      /*  background: purple; */\n      width: 80%;\n      height: 50%; }\n      nav .principal ul {\n        background-color: yellow;\n        height: 90%;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        justify-content: space-evenly; }\n        nav .principal ul li {\n          font-size: 1.3vw; }\n    nav .urls {\n      /*         background: pink; */\n      width: 80%;\n      height: 50%; }\n      nav .urls ul {\n        background-color: white;\n        height: 90%;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        justify-content: space-evenly; }\n        nav .urls ul li b {\n          font-size: 1.1vw; }\n    nav ul,\n    nav li,\n    nav a {\n      list-style: none;\n      text-decoration: none;\n      color: #8AC4FF; }\n    nav .active {\n      color: red; } }\n\n/* large tablets & laptop styles */\n\n@media screen and (max-width: 960px) {\n  .container-fluid {\n    background-color: green;\n    display: flex;\n    flex-direction: row; }\n  .container {\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    height: 75%;\n    border-radius: 5px;\n    background: #23252f;\n    box-shadow: 5px -5px 10px #0e0f13, -5px 5px 10px #383b4b; }\n  button {\n    z-index: 100; }\n  nav {\n    /* position: relative; */\n    height: 100%;\n    width: 100%;\n    background-color: green;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    transition: width 0.4s ease; }\n    nav h2 {\n      font-size: 1.4vw; }\n    nav .direccion {\n      display: flex;\n      flex-direction: row;\n      background-color: blue;\n      width: 100%; }\n    nav .principal {\n      /*  background: purple; */\n      width: 100%;\n      height: 100%; }\n      nav .principal ul {\n        background-color: yellow;\n        height: 100%;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-evenly; }\n        nav .principal ul li {\n          font-size: 1.4vw; }\n    nav .urls {\n      /*         background: pink; */\n      width: 100%;\n      height: 100%; }\n      nav .urls ul {\n        background-color: white;\n        height: 100%;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-evenly; }\n        nav .urls ul li b {\n          font-size: 1.4vw; }\n    nav ul,\n    nav li,\n    nav a {\n      list-style: none;\n      text-decoration: none;\n      color: #8AC4FF; }\n    nav .active {\n      color: red; } }\n\n@media screen and (max-width: 767px) {\n  .container-fluid {\n    background-color: yellow; }\n  .container {\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    height: 75%;\n    border-radius: 5px;\n    background: #23252f;\n    box-shadow: 5px -5px 10px #0e0f13, -5px 5px 10px #383b4b; }\n  button {\n    z-index: 100; }\n  nav {\n    /* position: relative; */\n    height: 100%;\n    width: 100%;\n    background-color: green;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    transition: width 0.4s ease; }\n    nav h2 {\n      font-size: 1.4vw; }\n    nav .direccion {\n      display: flex;\n      flex-direction: row;\n      background-color: blue;\n      width: 100%; }\n    nav .principal {\n      /*  background: purple; */\n      width: 100%;\n      height: 100%; }\n      nav .principal ul {\n        background-color: yellow;\n        height: 100%;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-evenly; }\n        nav .principal ul li {\n          font-size: 1.4vw; }\n    nav .urls {\n      /*         background: pink; */\n      width: 100%;\n      height: 100%; }\n      nav .urls ul {\n        background-color: white;\n        height: 100%;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-evenly; }\n        nav .urls ul li b {\n          font-size: 1.4vw; }\n    nav ul,\n    nav li,\n    nav a {\n      list-style: none;\n      text-decoration: none;\n      color: #8AC4FF; }\n    nav .active {\n      color: red; } }\n\n@media screen and (max-width: 620px) {\n  .container-fluid {\n    background-color: purple;\n    height: 80%; }\n  .container {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 80%;\n    border-radius: 5px;\n    background: #23252f;\n    box-shadow: 5px -5px 10px #0e0f13, -5px 5px 10px #383b4b; }\n  button {\n    z-index: 100; }\n  nav {\n    /* position: relative; */\n    height: 100%;\n    width: 100%;\n    background-color: green;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    transition: width 0.4s ease; }\n    nav h2 {\n      font-size: 1.4vw; }\n    nav .principal {\n      /*  background: purple; */\n      width: 100%;\n      height: 100%; }\n      nav .principal ul {\n        background-color: yellow;\n        height: 90%;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-evenly; }\n        nav .principal ul li {\n          font-size: 1.9vw; }\n    nav .urls {\n      /*         background: pink; */\n      width: 100%;\n      height: 100%; }\n      nav .urls ul {\n        background-color: white;\n        height: 90%;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-evenly; }\n        nav .urls ul li b {\n          font-size: 1.9vw; }\n    nav ul,\n    nav li,\n    nav a {\n      list-style: none;\n      text-decoration: none;\n      color: #8AC4FF; }\n    nav .active {\n      color: red; } }\n\n@media screen and (max-width: 575px) {\n  .container-fluid {\n    background-color: turquoise; }\n  .container {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 80%;\n    border-radius: 5px;\n    background: #23252f;\n    box-shadow: 5px -5px 10px #0e0f13, -5px 5px 10px #383b4b; }\n  .direccion {\n    display: flex;\n    flex-direction: row;\n    background-color: red !important;\n    width: 100% !important; }\n  button {\n    z-index: 100; }\n  nav {\n    /* position: relative; */\n    height: 100%;\n    width: 100%;\n    background-color: green;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    transition: width 0.4s ease; }\n    nav h2 {\n      display: none;\n      font-size: 1.2vw; }\n    nav .principal {\n      /*  background: purple; */\n      width: 100%;\n      height: 100%; }\n      nav .principal ul {\n        background-color: yellow;\n        height: 90%;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-evenly; }\n        nav .principal ul li {\n          font-size: 1.9vw; }\n    nav .urls {\n      /*         background: pink; */\n      width: 100%;\n      height: 100%;\n      border-bottom-left-radius: 10px; }\n      nav .urls ul {\n        background-color: white;\n        height: 90%;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-evenly; }\n        nav .urls ul li b {\n          font-size: 1.9vw; }\n    nav ul,\n    nav li,\n    nav a {\n      list-style: none;\n      text-decoration: none;\n      color: #8AC4FF; }\n    nav .active {\n      color: red; } }\n\n@media screen and (max-width: 320px) {\n  .container-fluid {\n    height: 60%;\n    background-color: pink; }\n  .container {\n    display: flex;\n    flex-direction: column;\n    /* width: 100%;\r\n      height: 100%; */\n    border-radius: 5px;\n    background: #23252f;\n    box-shadow: 5px -5px 10px #0e0f13, -5px 5px 10px #383b4b; }\n  button {\n    z-index: 100; }\n  nav {\n    /* position: relative; */\n    /*  height: 100%;\r\n        width: 100%; */\n    background-color: green;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    transition: width 0.4s ease; }\n    nav h2 {\n      font-size: 1.4vw; }\n    nav .principal {\n      /*  background: purple; */\n      /*  width: 100%;\r\n            height: 100%; */ }\n      nav .principal ul {\n        background-color: yellow;\n        height: 100%;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        justify-content: space-evenly; }\n        nav .principal ul li {\n          font-size: 1.6vw; }\n    nav .urls {\n      /*         background: pink; */\n      /*  width: 100%;\r\n            height: 100%; */ }\n      nav .urls ul {\n        background-color: white;\n        height: 100%;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        justify-content: space-evenly; }\n        nav .urls ul li b {\n          font-size: 1.2vw; }\n    nav ul,\n    nav li,\n    nav a {\n      list-style: none;\n      text-decoration: none;\n      color: #8AC4FF; }\n    nav .active {\n      color: red; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdpbmFzL2Zvb3Rlci9hZG1pbmZvb3Rlci9COlxcZ2l0aHViXFxhbGtlbXktZnJvbnRlbmQvc3JjXFxhcHBcXGNvcmVcXHBhZ2luYXNcXGZvb3RlclxcYWRtaW5mb290ZXJcXGFkbWluZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL3BhZ2luYXMvZm9vdGVyL2FkbWluZm9vdGVyL2FkbWluZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL3BhZ2luYXMvZm9vdGVyL2FkbWluZm9vdGVyL0I6XFxnaXRodWJcXGFsa2VteS1mcm9udGVuZC9zcmNcXGFwcFxcc2hhcmVkXFx0aGVtZXNcXF9wYWxldGFwcmluY2lwYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsOEJBQUE7RUFDQSxXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLDZCQUFBO0VBQ0EsV0FBVztFQUNYOzswQkNGd0IsRURJQzs7QUFHM0I7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0Usd0JBQUE7RUFDQSxZQUFZO0VBQ1osV0FBVztFQUNYLDZCQUFBO0VBQ0EsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLDJCQUEyQixFQUFBOztBQVQ3QjtJQVdJLGdCQUFnQixFQUFBOztBQVhwQjtJQWVJLHlCQUFBO0lBQ0EsVUFBVTtJQUNWLFdBQVcsRUFBQTs7QUFqQmY7TUFvQk0sOEJBQUE7TUFDQSxXQUFXO01BQ1gsV0FBVztNQUNYLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLDZCQUE2QixFQUFBOztBQTFCbkM7UUE0QlEs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bmZvb3Rlci9hZG1pbmZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXBwL3NoYXJlZC90aGVtZXMvcGFsZXRhcHJpbmNpcGFsXCI7XHJcblxyXG4qIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICAvKiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIC8qICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAqL1xyXG4gIGhlaWdodDogOTAlOyAvLyAtLS0tLSBjb25maWd1cmFyIGxhIGFsdHVyYSBwYXJhIGNhZGEgcGFudGFsbGFcclxuICAvKiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcbn1cclxuXHJcbiNidG5zb2JyZXRvZG8ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG5uYXYge1xyXG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBlYXNlO1xyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS40dnc7XHJcbiAgfVxyXG5cclxuICAucHJpbmNpcGFsIHtcclxuICAgIC8qICBiYWNrZ3JvdW5kOiBwdXJwbGU7ICovXHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcblxyXG4gICAgdWwge1xyXG4gICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7ICovXHJcbiAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjh2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAudXJscyB7XHJcbiAgICAvKiAgICAgICAgIGJhY2tncm91bmQ6IHBpbms7ICovXHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB1bCB7XHJcbiAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xyXG4gICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgbGkge1xyXG4gICAgICAgIGIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjh2dztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVsLFxyXG4gIGxpLFxyXG4gIGEge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAkdGV4dG9fYXp1bDE7XHJcbiAgfVxyXG5cclxuICAuYWN0aXZlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBSRVNQT1NOSVZFIEFETUlOIFNJREVCQVIgKi9cclxuXHJcbi8qIHN1cGVyIGRlc2t0b3AgbGFyZ2UqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjMyNTJmO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IC01cHggMTBweCAjMGUwZjEzLCAtNXB4IDVweCAxMHB4ICMzODNiNGI7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gIH1cclxuXHJcbiAgbmF2IHtcclxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgZWFzZTtcclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAxLjJ2dztcclxuICAgIH1cclxuXHJcbiAgICAucHJpbmNpcGFsIHtcclxuICAgICAgIGJhY2tncm91bmQ6IHB1cnBsZTtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgaGVpZ2h0OiA2MCU7XHJcblxyXG4gICAgICB1bCB7XHJcbiAgICAgICAvKiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93OyAqL1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjh2dztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC51cmxzIHtcclxuICAgICAgYmFja2dyb3VuZDogcGluaztcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgaGVpZ2h0OiA2MCU7XHJcbiAgICAgIHVsIHtcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cclxuICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgYiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44dnc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdWwsXHJcbiAgICBsaSxcclxuICAgIGEge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAkdGV4dG9fYXp1bDE7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBkZXNrdG9wIHN0eWxlcyovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDg1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICMyMzI1MmY7XHJcbiAgICBib3gtc2hhZG93OiA1cHggLTVweCAxMHB4ICMwZTBmMTMsIC01cHggNXB4IDEwcHggIzM4M2I0YjtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgfVxyXG5cclxuICBuYXYge1xyXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBlYXNlO1xyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDEuNnZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcmluY2lwYWwge1xyXG4gICAgICAvKiAgYmFja2dyb3VuZDogcHVycGxlOyAqL1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBoZWlnaHQ6IDUwJTtcclxuXHJcbiAgICAgIHVsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zdnc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudXJscyB7XHJcbiAgICAgIC8qICAgICAgICAgYmFja2dyb3VuZDogcGluazsgKi9cclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgIHVsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgYiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xdnc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdWwsXHJcbiAgICBsaSxcclxuICAgIGEge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAkdGV4dG9fYXp1bDE7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBsYXJnZSB0YWJsZXRzICYgbGFwdG9wIHN0eWxlcyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA3NSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjMyNTJmO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IC01cHggMTBweCAjMGUwZjEzLCAtNXB4IDVweCAxMHB4ICMzODNiNGI7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gIH1cclxuXHJcbiAgbmF2IHtcclxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgZWFzZTtcclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAxLjR2dztcclxuICAgIH1cclxuXHJcbiAgICAuZGlyZWNjaW9uIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnByaW5jaXBhbCB7XHJcbiAgICAgIC8qICBiYWNrZ3JvdW5kOiBwdXJwbGU7ICovXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNHZ3O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnVybHMge1xyXG4gICAgICAvKiAgICAgICAgIGJhY2tncm91bmQ6IHBpbms7ICovXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHVsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgYiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40dnc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdWwsXHJcbiAgICBsaSxcclxuICAgIGEge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAkdGV4dG9fYXp1bDE7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDc1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICMyMzI1MmY7XHJcbiAgICBib3gtc2hhZG93OiA1cHggLTVweCAxMHB4ICMwZTBmMTMsIC01cHggNXB4IDEwcHggIzM4M2I0YjtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgfVxyXG5cclxuICBuYXYge1xyXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBlYXNlO1xyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDEuNHZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC5kaXJlY2Npb24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAucHJpbmNpcGFsIHtcclxuICAgICAgLyogIGJhY2tncm91bmQ6IHB1cnBsZTsgKi9cclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgIHVsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS40dnc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudXJscyB7XHJcbiAgICAgIC8qICAgICAgICAgYmFja2dyb3VuZDogcGluazsgKi9cclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgdWwge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBiIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjR2dztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1bCxcclxuICAgIGxpLFxyXG4gICAgYSB7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgY29sb3I6ICR0ZXh0b19henVsMTtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzIzMjUyZjtcclxuICAgIGJveC1zaGFkb3c6IDVweCAtNXB4IDEwcHggIzBlMGYxMywgLTVweCA1cHggMTBweCAjMzgzYjRiO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICB9XHJcblxyXG4gIG5hdiB7XHJcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGVhc2U7XHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLnByaW5jaXBhbCB7XHJcbiAgICAgIC8qICBiYWNrZ3JvdW5kOiBwdXJwbGU7ICovXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS45dnc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudXJscyB7XHJcbiAgICAgIC8qICAgICAgICAgYmFja2dyb3VuZDogcGluazsgKi9cclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgdWwge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuOXZ3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVsLFxyXG4gICAgbGksXHJcbiAgICBhIHtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBjb2xvcjogJHRleHRvX2F6dWwxO1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHR1cnF1b2lzZTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzIzMjUyZjtcclxuICAgIGJveC1zaGFkb3c6IDVweCAtNXB4IDEwcHggIzBlMGYxMywgLTVweCA1cHggMTBweCAjMzgzYjRiO1xyXG4gIH1cclxuXHJcbiAgLmRpcmVjY2lvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICB9XHJcblxyXG4gIG5hdiB7XHJcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGVhc2U7XHJcbiAgICBoMiB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ydnc7XHJcbiAgICB9XHJcblxyXG4gICAgLnByaW5jaXBhbCB7XHJcbiAgICAgIC8qICBiYWNrZ3JvdW5kOiBwdXJwbGU7ICovXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS45dnc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVybHMge1xyXG4gICAgICAvKiAgICAgICAgIGJhY2tncm91bmQ6IHBpbms7ICovXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIHVsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBiIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjl2dztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1bCxcclxuICAgIGxpLFxyXG4gICAgYSB7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgY29sb3I6ICR0ZXh0b19henVsMTtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLyogd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICMyMzI1MmY7XHJcbiAgICBib3gtc2hhZG93OiA1cHggLTVweCAxMHB4ICMwZTBmMTMsIC01cHggNXB4IDEwcHggIzM4M2I0YjtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgfVxyXG5cclxuICBuYXYge1xyXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG4gICAgLyogIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGVhc2U7XHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLnByaW5jaXBhbCB7XHJcbiAgICAgIC8qICBiYWNrZ3JvdW5kOiBwdXJwbGU7ICovXHJcbiAgICAgIC8qICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOyAqL1xyXG5cclxuICAgICAgdWwge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS42dnc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudXJscyB7XHJcbiAgICAgIC8qICAgICAgICAgYmFja2dyb3VuZDogcGluazsgKi9cclxuICAgICAgLyogIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgICAgIHVsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnZ3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVsLFxyXG4gICAgbGksXHJcbiAgICBhIHtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBjb2xvcjogJHRleHRvX2F6dWwxO1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIqIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbi5jb250YWluZXItZmx1aWQge1xuICAvKiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXG4gIGhlaWdodDogOTAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLmNvbnRhaW5lciB7XG4gIC8qICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAqL1xuICBoZWlnaHQ6IDkwJTtcbiAgLyogICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqLyB9XG5cbiNidG5zb2JyZXRvZG8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDsgfVxuXG5idXR0b24ge1xuICB6LWluZGV4OiAxMDA7IH1cblxubmF2IHtcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgZWFzZTsgfVxuICBuYXYgaDIge1xuICAgIGZvbnQtc2l6ZTogMS40dnc7IH1cbiAgbmF2IC5wcmluY2lwYWwge1xuICAgIC8qICBiYWNrZ3JvdW5kOiBwdXJwbGU7ICovXG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDUwJTsgfVxuICAgIG5hdiAucHJpbmNpcGFsIHVsIHtcbiAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHllbGxvdzsgKi9cbiAgICAgIGhlaWdodDogOTAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IH1cbiAgICAgIG5hdiAucHJpbmNpcGFsIHVsIGxpIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjh2dzsgfVxuICBuYXYgLnVybHMge1xuICAgIC8qICAgICAgICAgYmFja2dyb3VuZDogcGluazsgKi9cbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogNTAlOyB9XG4gICAgbmF2IC51cmxzIHVsIHtcbiAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xuICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgfVxuICAgICAgbmF2IC51cmxzIHVsIGxpIGIge1xuICAgICAgICBmb250LXNpemU6IDAuOHZ3OyB9XG4gIG5hdiB1bCxcbiAgbmF2IGxpLFxuICBuYXYgYSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICM4QUM0RkY7IH1cbiAgbmF2IC5hY3RpdmUge1xuICAgIGNvbG9yOiByZWQ7IH1cblxuLyogUkVTUE9TTklWRSBBRE1JTiBTSURFQkFSICovXG4vKiBzdXBlciBkZXNrdG9wIGxhcmdlKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogOTUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjMjMyNTJmO1xuICAgIGJveC1zaGFkb3c6IDVweCAtNXB4IDEwcHggIzBlMGYxMywgLTVweCA1cHggMTBweCAjMzgzYjRiOyB9XG4gIGJ1dHRvbiB7XG4gICAgei1pbmRleDogMTAwOyB9XG4gIG5hdiB7XG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGVhc2U7IH1cbiAgICBuYXYgaDIge1xuICAgICAgZm9udC1zaXplOiAxLjJ2dzsgfVxuICAgIG5hdiAucHJpbmNpcGFsIHtcbiAgICAgIGJhY2tncm91bmQ6IHB1cnBsZTtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBoZWlnaHQ6IDYwJTsgfVxuICAgICAgbmF2IC5wcmluY2lwYWwgdWwge1xuICAgICAgICAvKiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93OyAqL1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IH1cbiAgICAgICAgbmF2IC5wcmluY2lwYWwgdWwgbGkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44dnc7IH1cbiAgICBuYXYgLnVybHMge1xuICAgICAgYmFja2dyb3VuZDogcGluaztcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBoZWlnaHQ6IDYwJTsgfVxuICAgICAgbmF2IC51cmxzIHVsIHtcbiAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXG4gICAgICAgIGhlaWdodDogOTAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyB9XG4gICAgICAgIG5hdiAudXJscyB1bCBsaSBiIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHZ3OyB9XG4gICAgbmF2IHVsLFxuICAgIG5hdiBsaSxcbiAgICBuYXYgYSB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICM4QUM0RkY7IH1cbiAgICBuYXYgLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogcmVkOyB9IH1cblxuLyogZGVza3RvcCBzdHlsZXMqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5jb250YWluZXItZmx1aWQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4NSU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6ICMyMzI1MmY7XG4gICAgYm94LXNoYWRvdzogNXB4IC01cHggMTBweCAjMGUwZjEzLCAtNXB4IDVweCAxMHB4ICMzODNiNGI7IH1cbiAgYnV0dG9uIHtcbiAgICB6LWluZGV4OiAxMDA7IH1cbiAgbmF2IHtcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgZWFzZTsgfVxuICAgIG5hdiBoMiB7XG4gICAgICBmb250LXNpemU6IDEuNnZ3OyB9XG4gICAgbmF2IC5wcmluY2lwYWwge1xuICAgICAgLyogIGJhY2tncm91bmQ6IHB1cnBsZTsgKi9cbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBoZWlnaHQ6IDUwJTsgfVxuICAgICAgbmF2IC5wcmluY2lwYWwgdWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgICAgIGhlaWdodDogOTAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyB9XG4gICAgICAgIG5hdiAucHJpbmNpcGFsIHVsIGxpIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuM3Z3OyB9XG4gICAgbmF2IC51cmxzIHtcbiAgICAgIC8qICAgICAgICAgYmFja2dyb3VuZDogcGluazsgKi9cbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBoZWlnaHQ6IDUwJTsgfVxuICAgICAgbmF2IC51cmxzIHVsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGhlaWdodDogOTAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyB9XG4gICAgICAgIG5hdiAudXJscyB1bCBsaSBiIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMXZ3OyB9XG4gICAgbmF2IHVsLFxuICAgIG5hdiBsaSxcbiAgICBuYXYgYSB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICM4QUM0RkY7IH1cbiAgICBuYXYgLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogcmVkOyB9IH1cblxuLyogbGFyZ2UgdGFibGV0cyAmIGxhcHRvcCBzdHlsZXMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC5jb250YWluZXItZmx1aWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDc1JTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogIzIzMjUyZjtcbiAgICBib3gtc2hhZG93OiA1cHggLTVweCAxMHB4ICMwZTBmMTMsIC01cHggNXB4IDEwcHggIzM4M2I0YjsgfVxuICBidXR0b24ge1xuICAgIHotaW5kZXg6IDEwMDsgfVxuICBuYXYge1xuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBlYXNlOyB9XG4gICAgbmF2IGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMS40dnc7IH1cbiAgICBuYXYgLmRpcmVjY2lvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgICB3aWR0aDogMTAwJTsgfVxuICAgIG5hdiAucHJpbmNpcGFsIHtcbiAgICAgIC8qICBiYWNrZ3JvdW5kOiBwdXJwbGU7ICovXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTsgfVxuICAgICAgbmF2IC5wcmluY2lwYWwgdWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyB9XG4gICAgICAgIG5hdiAucHJpbmNpcGFsIHVsIGxpIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNHZ3OyB9XG4gICAgbmF2IC51cmxzIHtcbiAgICAgIC8qICAgICAgICAgYmFja2dyb3VuZDogcGluazsgKi9cbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlOyB9XG4gICAgICBuYXYgLnVybHMgdWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IH1cbiAgICAgICAgbmF2IC51cmxzIHVsIGxpIGIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS40dnc7IH1cbiAgICBuYXYgdWwsXG4gICAgbmF2IGxpLFxuICAgIG5hdiBhIHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogIzhBQzRGRjsgfVxuICAgIG5hdiAuYWN0aXZlIHtcbiAgICAgIGNvbG9yOiByZWQ7IH0gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7IH1cbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA3NSU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6ICMyMzI1MmY7XG4gICAgYm94LXNoYWRvdzogNXB4IC01cHggMTBweCAjMGUwZjEzLCAtNXB4IDVweCAxMHB4ICMzODNiNGI7IH1cbiAgYnV0dG9uIHtcbiAgICB6LWluZGV4OiAxMDA7IH1cbiAgbmF2IHtcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgZWFzZTsgfVxuICAgIG5hdiBoMiB7XG4gICAgICBmb250LXNpemU6IDEuNHZ3OyB9XG4gICAgbmF2IC5kaXJlY2Npb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICBuYXYgLnByaW5jaXBhbCB7XG4gICAgICAvKiAgYmFja2dyb3VuZDogcHVycGxlOyAqL1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7IH1cbiAgICAgIG5hdiAucHJpbmNpcGFsIHVsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgfVxuICAgICAgICBuYXYgLnByaW5jaXBhbCB1bCBsaSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjR2dzsgfVxuICAgIG5hdiAudXJscyB7XG4gICAgICAvKiAgICAgICAgIGJhY2tncm91bmQ6IHBpbms7ICovXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTsgfVxuICAgICAgbmF2IC51cmxzIHVsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyB9XG4gICAgICAgIG5hdiAudXJscyB1bCBsaSBiIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNHZ3OyB9XG4gICAgbmF2IHVsLFxuICAgIG5hdiBsaSxcbiAgICBuYXYgYSB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICM4QUM0RkY7IH1cbiAgICBuYXYgLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogcmVkOyB9IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcbiAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xuICAgIGhlaWdodDogODAlOyB9XG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogIzIzMjUyZjtcbiAgICBib3gtc2hhZG93OiA1cHggLTVweCAxMHB4ICMwZTBmMTMsIC01cHggNXB4IDEwcHggIzM4M2I0YjsgfVxuICBidXR0b24ge1xuICAgIHotaW5kZXg6IDEwMDsgfVxuICBuYXYge1xuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBlYXNlOyB9XG4gICAgbmF2IGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMS40dnc7IH1cbiAgICBuYXYgLnByaW5jaXBhbCB7XG4gICAgICAvKiAgYmFja2dyb3VuZDogcHVycGxlOyAqL1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7IH1cbiAgICAgIG5hdiAucHJpbmNpcGFsIHVsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgICAgICBoZWlnaHQ6IDkwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyB9XG4gICAgICAgIG5hdiAucHJpbmNpcGFsIHVsIGxpIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuOXZ3OyB9XG4gICAgbmF2IC51cmxzIHtcbiAgICAgIC8qICAgICAgICAgYmFja2dyb3VuZDogcGluazsgKi9cbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlOyB9XG4gICAgICBuYXYgLnVybHMgdWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgfVxuICAgICAgICBuYXYgLnVybHMgdWwgbGkgYiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjl2dzsgfVxuICAgIG5hdiB1bCxcbiAgICBuYXYgbGksXG4gICAgbmF2IGEge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiAjOEFDNEZGOyB9XG4gICAgbmF2IC5hY3RpdmUge1xuICAgICAgY29sb3I6IHJlZDsgfSB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5jb250YWluZXItZmx1aWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHR1cnF1b2lzZTsgfVxuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6ICMyMzI1MmY7XG4gICAgYm94LXNoYWRvdzogNXB4IC01cHggMTBweCAjMGUwZjEzLCAtNXB4IDVweCAxMHB4ICMzODNiNGI7IH1cbiAgLmRpcmVjY2lvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7IH1cbiAgYnV0dG9uIHtcbiAgICB6LWluZGV4OiAxMDA7IH1cbiAgbmF2IHtcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgZWFzZTsgfVxuICAgIG5hdiBoMiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgZm9udC1zaXplOiAxLjJ2dzsgfVxuICAgIG5hdiAucHJpbmNpcGFsIHtcbiAgICAgIC8qICBiYWNrZ3JvdW5kOiBwdXJwbGU7ICovXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTsgfVxuICAgICAgbmF2IC5wcmluY2lwYWwgdWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgICAgIGhlaWdodDogOTAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IH1cbiAgICAgICAgbmF2IC5wcmluY2lwYWwgdWwgbGkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS45dnc7IH1cbiAgICBuYXYgLnVybHMge1xuICAgICAgLyogICAgICAgICBiYWNrZ3JvdW5kOiBwaW5rOyAqL1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4OyB9XG4gICAgICBuYXYgLnVybHMgdWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgfVxuICAgICAgICBuYXYgLnVybHMgdWwgbGkgYiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjl2dzsgfVxuICAgIG5hdiB1bCxcbiAgICBuYXYgbGksXG4gICAgbmF2IGEge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiAjOEFDNEZGOyB9XG4gICAgbmF2IC5hY3RpdmUge1xuICAgICAgY29sb3I6IHJlZDsgfSB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC5jb250YWluZXItZmx1aWQge1xuICAgIGhlaWdodDogNjAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7IH1cbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8qIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7ICovXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6ICMyMzI1MmY7XG4gICAgYm94LXNoYWRvdzogNXB4IC01cHggMTBweCAjMGUwZjEzLCAtNXB4IDVweCAxMHB4ICMzODNiNGI7IH1cbiAgYnV0dG9uIHtcbiAgICB6LWluZGV4OiAxMDA7IH1cbiAgbmF2IHtcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG4gICAgLyogIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGVhc2U7IH1cbiAgICBuYXYgaDIge1xuICAgICAgZm9udC1zaXplOiAxLjR2dzsgfVxuICAgIG5hdiAucHJpbmNpcGFsIHtcbiAgICAgIC8qICBiYWNrZ3JvdW5kOiBwdXJwbGU7ICovXG4gICAgICAvKiAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTsgKi8gfVxuICAgICAgbmF2IC5wcmluY2lwYWwgdWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgfVxuICAgICAgICBuYXYgLnByaW5jaXBhbCB1bCBsaSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjZ2dzsgfVxuICAgIG5hdiAudXJscyB7XG4gICAgICAvKiAgICAgICAgIGJhY2tncm91bmQ6IHBpbms7ICovXG4gICAgICAvKiAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTsgKi8gfVxuICAgICAgbmF2IC51cmxzIHVsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgfVxuICAgICAgICBuYXYgLnVybHMgdWwgbGkgYiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJ2dzsgfVxuICAgIG5hdiB1bCxcbiAgICBuYXYgbGksXG4gICAgbmF2IGEge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiAjOEFDNEZGOyB9XG4gICAgbmF2IC5hY3RpdmUge1xuICAgICAgY29sb3I6IHJlZDsgfSB9XG4iLCIvL2NvbG9yZXMgZ2xvYmFsZXNcclxuJHdoaXRlOiAjRkZGRkZGO1xyXG4kdGV4dG9fcHJpbWVybzogIzZlNzA3YztcclxuJHRleHRvX3NlY3VuZGFyaW86ICNENEQ0RDQ7XHJcbiR0ZXh0by10ZXJjZXJvOiAjQzJDMkMyO1xyXG4kdGV4dG8tY3VhcnRvOiAjRURFREVEO1xyXG5cclxuJHRleHRvLWF6dWwxOiAjOEFDNEZGO1xyXG4kdGV4dG8tYXp1bDI6ICNDN0UzRkY7XHJcbiR0ZXh0by1henVsMzogIzc1QkFGRjtcclxuJHRleHRvLWF6dWw0OiAjNzU5NWI2O1xyXG5cclxuXHJcbi8vIHBhbGV0YSBudW1lcm8gdW5vXHJcbiRjX3ByaW1lcm9fYTogI0YyRjNFRTtcclxuJGNfc2VndW5kb19hOiAjYWJhZmEzO1xyXG4kY190ZXJjZXJvX2E6ICM1Nzg5OGY7XHJcbiRjX2N1YXJ0b19hOiAjMWUyYzIyO1xyXG4kY19xdWludG9fYTogIzRjNWU1MTtcclxuXHJcbi8vIHBhbGV0YSBudW1lcm8gZG9zXHJcbiRjX3ByaW1lcm9fYjogI0E0OTZCMDtcclxuJGNfc2VndW5kb19iOiAjNjg1RjcwO1xyXG4kY190ZXJjZXJvX2I6ICNERkNDRjA7XHJcbiRjX2N1YXJ0b19iOiAjRUJEN0ZDO1xyXG4kY19xdWludG9fYjogI0M3QjZENjtcclxuXHJcbi8vcGFsZXRhIG51bWVybyB0cmVzXHJcbiRjX3ByaW1lcm9fYzogI2UwZWJmNztcclxuJGNfc2VndW5kb19jOiAjYjZkOWZiO1xyXG4kY190ZXJjZXJvX2M6ICM5OGFjZjg7XHJcbiRjX2N1YXJ0b19jOiAjYjA4OGY5O1xyXG4kY19xdWludG9fYzogI2RhOWZmOTtcclxuXHJcbi8vIHBhbGV0YSBudW1lcm8gY3VhdHJvXHJcbiRjX3ByaW1lcm9fZDojRjhGOEYyO1xyXG4kY19zZWd1bmRvX2Q6Izk4QTZBRDtcclxuJGNfdGVyY2Vyb19kOiMzNDNBNDA7XHJcbiRjX2N1YXJ0b19kOiAjMjcyOTM1O1xyXG4kY19xdWludG9fZDogIzIzMjUyRjtcclxuJGNfc2V4dG9fZDogIzAzQUZGRjtcclxuIl19 */"

/***/ }),

/***/ "./src/app/core/paginas/footer/adminfooter/adminfooter.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/core/paginas/footer/adminfooter/adminfooter.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdminfooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminfooterComponent", function() { return AdminfooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminfooterComponent = /** @class */ (function () {
    function AdminfooterComponent() {
    }
    AdminfooterComponent.prototype.ngOnInit = function () {
        this.btnToggle = false;
    };
    AdminfooterComponent.prototype.abrirmenu = function () {
        /*  document.getElementById("nav").style.display = "none";
         document.getElementById("title").style.display = "none"; */
        document.getElementById("hide").style.visibility = "hidden";
        document.getElementById("nav").style.width = "98%";
        document.getElementById("nav").style.marginLeft = "2px";
        document.getElementById("nav").style.visibility = "visible";
        setTimeout(function () {
            document.getElementById("hide").style.visibility = "visible";
        }, 2000);
        this.btnToggle = false;
        /* document.getElementById("hide").style.backgroundColor = "green";
        document.getElementById("hide").style.display = "block"; */
    };
    AdminfooterComponent.prototype.cerrarmenu = function () {
        document.getElementById("nav").style.visibility = "hidden";
        document.getElementById("nav").style.width = "0";
        document.getElementById("nav").style.marginLeft = "80px";
        this.btnToggle = true;
        /* document.getElementById("hide").style.backgroundColor = "green";
        document.getElementById("hide").style.display = "none"; */
    };
    AdminfooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminfooter',
            template: __webpack_require__(/*! raw-loader!./adminfooter.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/paginas/footer/adminfooter/adminfooter.component.html"),
            styles: [__webpack_require__(/*! ./adminfooter.component.scss */ "./src/app/core/paginas/footer/adminfooter/adminfooter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminfooterComponent);
    return AdminfooterComponent;
}());



/***/ }),

/***/ "./src/app/core/paginas/footer/footer.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/core/paginas/footer/footer.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".principalfoot {\n  display: flex;\n  justify-content: space-evenly;\n  flex-direction: column;\n  height: 70%;\n  width: 90%;\n  border-radius: 10px;\n  background: #272935;\n  box-shadow: -15px -15px 30px #16181e, 15px 15px 30px #303240;\n  /* TITULO DEL SIDEBAR */ }\n  .principalfoot .navbar {\n    display: flex;\n    justify-content: center; }\n  .principalfoot .navbar h4 {\n      font-size: 1.2vw;\n      color: #F8F8F2; }\n  .principalfoot .container {\n    background: #272935; }\n  .principalfoot .footer-link {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    height: 400px; }\n  .principalfoot .footer-link li {\n      display: block;\n      text-align: center;\n      height: 60px;\n      width: 100%;\n      padding: 5px;\n      list-style-type: none; }\n  .principalfoot .footer-link li a {\n        /*   font-size: 30px; */\n        /*  color: $c_segundo_d; */\n        text-decoration: none; }\n  .principalfoot .admin {\n    display: block;\n    height: 50px;\n    padding: 5px;\n    font-size: 1.1vw; }\n  a {\n  font-size: 1.2vw;\n  color: #98A6AD; }\n  .active {\n  border-bottom: 2px solid #6887a7;\n  font-size: 1.1vw;\n  color: #3f5e7c; }\n  @media screen and (min-width: 300px) {\n  .footer {\n    position: absolute;\n    height: 290px;\n    width: 150px;\n    box-shadow: -15px -15px 30px #16181e, 15px 15px 30px #303240;\n    background: #272935;\n    top: 90px;\n    right: 0;\n    transition: width 0.8s ease; }\n    .footer .navbar {\n      height: 150px; }\n      .footer .navbar h4 {\n        visibility: hidden;\n        font-size: 4.2vw; }\n    .footer .container {\n      padding-top: 20px; }\n    .footer .starttitle {\n      font-size: 2.5vw;\n      color: wheat; }\n    .footer .starttxt {\n      color: aliceblue;\n      font-size: 3.0vw;\n      line-height: 1.3;\n      font-weight: 500; }\n    .footer .spacer {\n      width: 400px;\n      height: 600px; }\n  #footer-link1 {\n    transition: width 1.8s ease; }\n  #txt a {\n    font-size: 4.0vw; }\n  .trigger {\n    z-index: 10;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 8%;\n    width: 80px;\n    position: absolute;\n    top: 62px;\n    right: 0px; }\n    .trigger h4 {\n      font-size: 20px; } }\n  @media screen and (min-width: 480px) {\n  .footer {\n    position: absolute;\n    height: 350px;\n    width: 136px;\n    /* IMPORTANTE SI SE DESARMA TODO CAMBIAR ESTO a 220px*/\n    top: 90;\n    right: 0; }\n    .footer .navbar {\n      height: 150px; }\n      .footer .navbar h4 {\n        font-size: 3.3vw; }\n    .footer .container {\n      padding-top: 20px; }\n    .footer .starttitle {\n      font-size: 2.0vw;\n      color: wheat; }\n    .footer .starttxt {\n      color: aliceblue;\n      font-size: 2.2vw;\n      line-height: 1.3;\n      font-weight: 500; }\n    .footer .spacer {\n      width: 400px;\n      /*   background-color: #6887a7; */\n      height: 600px; }\n  #txt a {\n    font-size: 2.9vw; }\n  .trigger {\n    z-index: 10;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 8%;\n    width: 80px;\n    position: absolute;\n    top: 62px;\n    right: 0px; }\n    .trigger h4 {\n      font-size: 20px; } }\n  @media screen and (min-width: 600px) {\n  .footer {\n    position: absolute;\n    height: 350px;\n    width: 200px;\n    top: 90;\n    right: 0; }\n    .footer .navbar {\n      height: 150px; }\n      .footer .navbar h4 {\n        font-size: 3.3vw; }\n    .footer .spacer {\n      width: 400px;\n      /* background-color: #6887a7; */\n      height: 600px; }\n  #txt a {\n    font-size: 2.9vw; }\n  .trigger {\n    z-index: 10;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 8%;\n    width: 80px;\n    position: absolute;\n    top: 62px;\n    right: 0px; }\n    .trigger h4 {\n      font-size: 20px; } }\n  @media screen and (min-width: 768px) {\n  .footer {\n    position: absolute;\n    height: 350px;\n    width: 210px;\n    top: 90;\n    right: 0; }\n    .footer .navbar {\n      height: 150px; }\n      .footer .navbar h4 {\n        font-size: 2.6vw; }\n    .footer .container {\n      padding-top: 20px; }\n    .footer .starttitle {\n      font-size: 2.0vw;\n      color: wheat; }\n    .footer .starttxt {\n      color: aliceblue;\n      font-size: 2.0vw;\n      line-height: 1.3;\n      font-weight: 500; }\n    .footer .spacer {\n      width: 400px;\n      /* background-color: #6887a7; */\n      height: 600px; }\n  #txt a {\n    font-size: 2.2vw; }\n  .trigger {\n    z-index: 10;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 8%;\n    width: 80px;\n    position: absolute;\n    top: 62px;\n    right: 0px; }\n    .trigger h4 {\n      font-size: 20px; } }\n  @media screen and (min-width: 992px) {\n  .footer {\n    position: absolute;\n    height: 350px;\n    width: 220px;\n    top: 90;\n    right: 0; }\n    .footer .navbar {\n      height: 150px; }\n      .footer .navbar h4 {\n        font-size: 2.1vw; }\n    .footer .container {\n      padding-top: 20px; }\n    .footer .starttitle {\n      font-size: 1.2vw;\n      color: wheat; }\n    .footer .starttxt {\n      color: aliceblue;\n      font-size: 1.5vw;\n      line-height: 1.2;\n      font-weight: 500; }\n    .footer .spacer {\n      width: 400px;\n      /*  background-color: #6887a7; */\n      height: 600px; }\n  #txt a {\n    font-size: 1.9vw; }\n  .trigger {\n    z-index: 10;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 8%;\n    width: 80px;\n    position: absolute;\n    top: 62px;\n    right: 0px; }\n    .trigger h4 {\n      font-size: 20px; } }\n  @media screen and (min-width: 1280px) {\n  .footer {\n    position: absolute;\n    height: 350px;\n    width: 220px;\n    top: 90;\n    right: 0; }\n    .footer .navbar {\n      height: 150px; }\n      .footer .navbar h4 {\n        font-size: 1.7vw; }\n    .footer .spacer {\n      width: 400px;\n      /*  background-color: #6887a7; */\n      height: 600px; }\n  #txt a {\n    font-size: 1.5vw; }\n  .trigger {\n    z-index: 10;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 8%;\n    width: 80px;\n    position: absolute;\n    top: 62px;\n    right: 10px; }\n    .trigger h4 {\n      font-size: 20px; } }\n  @media screen and (min-width: 1680px) {\n  .footer {\n    position: absolute;\n    height: 350px;\n    width: 220px;\n    top: 90;\n    right: 0; }\n    .footer .navbar {\n      height: 150px; }\n      .footer .navbar h4 {\n        font-size: 1.4vw; }\n  .container {\n    padding-top: 20px; }\n  .starttitle {\n    font-size: 0.9vw !important;\n    color: wheat; }\n  .starttxt {\n    color: aliceblue;\n    font-size: 1.2vw !important;\n    line-height: 1.2;\n    font-weight: 500; }\n  .spacer {\n    width: 400px;\n    background-color: #6887a7;\n    height: 600px; }\n  #txt a {\n    font-size: 1.2vw; }\n  .trigger {\n    z-index: 10;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 8%;\n    width: 80px;\n    position: absolute;\n    top: 62px;\n    right: 30px; }\n    .trigger h4 {\n      font-size: 20px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdpbmFzL2Zvb3Rlci9COlxcZ2l0aHViXFxhbGtlbXktZnJvbnRlbmQvc3JjXFxhcHBcXGNvcmVcXHBhZ2luYXNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL3BhZ2luYXMvZm9vdGVyL0I6XFxnaXRodWJcXGFsa2VteS1mcm9udGVuZC9zcmNcXGFwcFxcc2hhcmVkXFx0aGVtZXNcXF9wYWxldGFwcmluY2lwYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLG1CQzRCa0I7RUQzQmxCLDREQUE0RDtFQUU1RCx1QkFBQSxFQUF3QjtFQVgxQjtJQWFJLGFBQWE7SUFDYix1QkFBdUIsRUFBQTtFQWQzQjtNQWdCTSxnQkFBZ0I7TUFDaEIsY0NnQmMsRUFBQTtFRGpDcEI7SUFzQkksbUJDY2dCLEVBQUE7RURwQ3BCO0lBMEJJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixhQUFhLEVBQUE7RUE5QmpCO01BaUNNLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLFdBQVc7TUFDWCxZQUFZO01BQ1oscUJBQXFCLEVBQUE7RUF0QzNCO1FBeUNRLHVCQUFBO1FBQ0EsMEJBQUE7UUFDQSxxQkFBcUIsRUFBQTtFQTNDN0I7SUFpREksY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7RUFJcEI7RUFDRSxnQkFBZ0I7RUFDaEIsY0N4QmtCLEVBQUE7RUQyQnBCO0VBQ0UsZ0NBQWdDO0VBRWhDLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7RUFNaEI7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLDREQUE0RDtJQUM1RCxtQkN6Q2dCO0lEMENoQixTQUFTO0lB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QXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUVYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVyxFQUFBO0lBVmI7TUFZSSxlQUFlLEVBQUEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3BhZ2luYXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXBwL3NoYXJlZC90aGVtZXMvcGFsZXRhcHJpbmNpcGFsXCI7XHJcblxyXG4ucHJpbmNpcGFsZm9vdCB7XHJcbiAgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogNzAlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAkY19jdWFydG9fZDtcclxuICBib3gtc2hhZG93OiAtMTVweCAtMTVweCAzMHB4ICMxNjE4MWUsIDE1cHggMTVweCAzMHB4ICMzMDMyNDA7XHJcblxyXG4gIC8qIFRJVFVMTyBERUwgU0lERUJBUiAqL1xyXG4gIC5uYXZiYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaDQge1xyXG4gICAgICBmb250LXNpemU6IDEuMnZ3O1xyXG4gICAgICBjb2xvcjogJGNfcHJpbWVyb19kO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6ICRjX2N1YXJ0b19kO1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlci1saW5rIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgLyogICBmb250LXNpemU6IDMwcHg7ICovXHJcbiAgICAgICAgLyogIGNvbG9yOiAkY19zZWd1bmRvX2Q7ICovXHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWRtaW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEuMXZ3O1xyXG4gIH1cclxufVxyXG5cclxuYSB7XHJcbiAgZm9udC1zaXplOiAxLjJ2dztcclxuICBjb2xvcjogJGNfc2VndW5kb19kO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzY4ODdhNztcclxuXHJcbiAgZm9udC1zaXplOiAxLjF2dztcclxuICBjb2xvcjogIzNmNWU3YztcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gO1xyXG4vL1JFU1BPTlNJVkVcclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMwMHB4KSB7XHJcbiAgLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDI5MHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogLTE1cHggLTE1cHggMzBweCAjMTYxODFlLCAxNXB4IDE1cHggMzBweCAjMzAzMjQwO1xyXG4gICAgYmFja2dyb3VuZDogJGNfY3VhcnRvX2Q7XHJcbiAgICB0b3A6IDkwcHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuOHMgZWFzZTtcclxuICAgIFxyXG4gICAgLm5hdmJhciB7XHJcbiAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgIFxyXG4gICAgICBoNHtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgZm9udC1zaXplOiA0LjJ2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdGFydHRpdGxle1xyXG4gICAgICBmb250LXNpemU6IDIuNXZ3O1xyXG4gICAgICBjb2xvcjogd2hlYXQ7XHJcbiAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5zdGFydHR4dHtcclxuICAgICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgICAgZm9udC1zaXplOiAzLjB2dztcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gIC5zcGFjZXJ7XHJcbiAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICNmb290ZXItbGluazF7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAxLjhzIGVhc2U7XHJcbiAgfVxyXG5cclxuICAjdHh0e1xyXG4gICAgYXtcclxuICAgICAgZm9udC1zaXplOiAgNC4wdnc7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC8vIGJvdG9uIGRlbCBjb2xsYXBzYXJcclxuICAudHJpZ2dlcntcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogOCU7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjJweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBoNHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIFxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xyXG4gIC8vRm9yIFRhYmxldHNcclxuICAuZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICB3aWR0aDogMTM2cHg7IC8qIElNUE9SVEFOVEUgU0kgU0UgREVTQVJNQSBUT0RPIENBTUJJQVIgRVNUTyBhIDIyMHB4Ki9cclxuXHJcbiAgICB0b3A6IDkwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBcclxuICAgIC5uYXZiYXIge1xyXG5cclxuICAgICAgaGVpZ2h0OiAxNTBweDtcclxuXHJcbiAgICAgIC8vdGl0dWxvIFxyXG4gICAgICBoNHtcclxuICAgICAgICBmb250LXNpemU6IDMuM3Z3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YXJ0dGl0bGV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi4wdnc7XHJcbiAgICAgIGNvbG9yOiB3aGVhdDtcclxuICAgXHJcbiAgICB9XHJcblxyXG4gICAgLnN0YXJ0dHh0e1xyXG4gICAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgICBmb250LXNpemU6IDIuMnZ3O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5zcGFjZXJ7XHJcbiAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgIC8qICAgYmFja2dyb3VuZC1jb2xvcjogIzY4ODdhNzsgKi9cclxuICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICN0eHR7XHJcblxyXG4gICAgYXtcclxuICAgICAgZm9udC1zaXplOiAgMi45dnc7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC8vIGJvdG9uIGRlbCBjb2xsYXBzYXJcclxuICAudHJpZ2dlcntcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogOCU7XHJcbiAgICB3aWR0aDogODBweDtcclxuIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2MnB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGg0e1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gIC8vRm9yIFRhYmxldHNcclxuIFxyXG4gIC5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICBcclxuICAgIHRvcDogOTA7XHJcbiAgICByaWdodDogMDtcclxuICAgIFxyXG4gICAgLm5hdmJhciB7XHJcblxyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG5cclxuICAgICAgLy90aXR1bG8gXHJcbiAgICAgIGg0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMy4zdnc7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC5zcGFjZXJ7XHJcbiAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzY4ODdhNzsgKi9cclxuICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICN0eHR7XHJcblxyXG4gICAgYXtcclxuICAgICAgZm9udC1zaXplOiAgMi45dnc7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC8vIGJvdG9uIGRlbCBjb2xsYXBzYXJcclxuICAudHJpZ2dlcntcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogOCU7XHJcbiAgICB3aWR0aDogODBweDtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDYycHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgaDR7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBcclxuICAuZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICB3aWR0aDogMjEwcHg7XHJcblxyXG4gICAgdG9wOiA5MDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgXHJcbiAgICAubmF2YmFyIHtcclxuXHJcbiAgICAgIGhlaWdodDogMTUwcHg7XHJcblxyXG4gICAgICAvL3RpdHVsbyBcclxuICAgICAgaDR7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjZ2dztcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnN0YXJ0dGl0bGV7XHJcbiAgICBmb250LXNpemU6IDIuMHZ3O1xyXG4gICAgY29sb3I6IHdoZWF0O1xyXG4gXHJcbiAgfVxyXG5cclxuICAuc3RhcnR0eHR7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgZm9udC1zaXplOiAyLjB2dztcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIFxyXG4gIH1cclxuXHJcbiAgLnNwYWNlcntcclxuICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg4N2E3OyAqL1xyXG4gICAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI3R4dHtcclxuXHJcbiAgICBhe1xyXG4gICAgICBmb250LXNpemU6ICAyLjJ2dztcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLy8gYm90b24gZGVsIGNvbGxhcHNhclxyXG4gIC50cmlnZ2Vye1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA4JTtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjJweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBoNHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICBcclxuICAuZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcblxyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG5cclxuICAgIHRvcDogOTA7XHJcbiAgICByaWdodDogMDtcclxuICAgIFxyXG4gICAgLm5hdmJhciB7XHJcblxyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG5cclxuICAgICAgLy90aXR1bG8gXHJcbiAgICAgIGg0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi4xdnc7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcblxyXG4gIC5zdGFydHRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxLjJ2dztcclxuICAgIGNvbG9yOiB3aGVhdDtcclxuIFxyXG4gIH1cclxuXHJcbiAgLnN0YXJ0dHh0e1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBcclxuICB9XHJcblxyXG4gIC5zcGFjZXJ7XHJcbiAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAvKiAgYmFja2dyb3VuZC1jb2xvcjogIzY4ODdhNzsgKi9cclxuICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICN0eHR7XHJcblxyXG4gICAgYXtcclxuICAgICAgZm9udC1zaXplOiAgMS45dnc7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC8vIGJvdG9uIGRlbCBjb2xsYXBzYXJcclxuICAudHJpZ2dlcntcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogOCU7XHJcbiAgICB3aWR0aDogODBweDtcclxuIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2MnB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGg0e1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XHJcbiBcclxuICAuZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcblxyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG5cclxuICAgIHRvcDogOTA7XHJcbiAgICByaWdodDogMDtcclxuICAgIFxyXG4gICAgLm5hdmJhciB7XHJcblxyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG5cclxuICAgICAgLy90aXR1bG8gXHJcbiAgICAgIGg0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS43dnc7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC5zcGFjZXJ7XHJcbiAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAvKiAgYmFja2dyb3VuZC1jb2xvcjogIzY4ODdhNzsgKi9cclxuICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICN0eHR7XHJcblxyXG4gICAgYXtcclxuICAgICAgZm9udC1zaXplOiAgMS41dnc7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC8vIGJvdG9uIGRlbCBjb2xsYXBzYXJcclxuICAudHJpZ2dlcntcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogOCU7XHJcbiAgICB3aWR0aDogODBweDtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDYycHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGg0e1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTY4MHB4KSB7XHJcbiAgLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG5cclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIFxyXG4gICAgdG9wOiA5MDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgXHJcbiAgICAubmF2YmFyIHtcclxuXHJcbiAgICAgIGhlaWdodDogMTUwcHg7XHJcblxyXG4gICAgICAvL3RpdHVsbyBcclxuICAgICAgaDR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjR2dztcclxuICAgICAgfVxyXG4gICAgfSAgXHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVye1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuc3RhcnR0aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMC45dncgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGVhdDtcclxuIFxyXG4gIH1cclxuXHJcbiAgLnN0YXJ0dHh0e1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMS4ydncgIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIFxyXG4gIH1cclxuXHJcbiAgLnNwYWNlcntcclxuICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg4N2E3O1xyXG4gICAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAjdHh0e1xyXG5cclxuICAgIGF7XHJcbiAgICAgIGZvbnQtc2l6ZTogIDEuMnZ3O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICAvLyBib3RvbiBkZWwgY29sbGFwc2FyXHJcbiAgLnRyaWdnZXJ7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDglO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2MnB4O1xyXG4gICAgcmlnaHQ6IDMwcHg7XHJcbiAgICBoNHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG59IiwiLy9jb2xvcmVzIGdsb2JhbGVzXHJcbiR3aGl0ZTogI0ZGRkZGRjtcclxuJHRleHRvX3ByaW1lcm86ICM2ZTcwN2M7XHJcbiR0ZXh0b19zZWN1bmRhcmlvOiAjRDRENEQ0O1xyXG4kdGV4dG8tdGVyY2VybzogI0MyQzJDMjtcclxuJHRleHRvLWN1YXJ0bzogI0VERURFRDtcclxuXHJcbiR0ZXh0by1henVsMTogIzhBQzRGRjtcclxuJHRleHRvLWF6dWwyOiAjQzdFM0ZGO1xyXG4kdGV4dG8tYXp1bDM6ICM3NUJBRkY7XHJcbiR0ZXh0by1henVsNDogIzc1OTViNjtcclxuXHJcblxyXG4vLyBwYWxldGEgbnVtZXJvIHVub1xyXG4kY19wcmltZXJvX2E6ICNGMkYzRUU7XHJcbiRjX3NlZ3VuZG9fYTogI2FiYWZhMztcclxuJGNfdGVyY2Vyb19hOiAjNTc4OThmO1xyXG4kY19jdWFydG9fYTogIzFlMmMyMjtcclxuJGNfcXVpbnRvX2E6ICM0YzVlNTE7XHJcblxyXG4vLyBwYWxldGEgbnVtZXJvIGRvc1xyXG4kY19wcmltZXJvX2I6ICNBNDk2QjA7XHJcbiRjX3NlZ3VuZG9fYjogIzY4NUY3MDtcclxuJGNfdGVyY2Vyb19iOiAjREZDQ0YwO1xyXG4kY19jdWFydG9fYjogI0VCRDdGQztcclxuJGNfcXVpbnRvX2I6ICNDN0I2RDY7XHJcblxyXG4vL3BhbGV0YSBudW1lcm8gdHJlc1xyXG4kY19wcmltZXJvX2M6ICNlMGViZjc7XHJcbiRjX3NlZ3VuZG9fYzogI2I2ZDlmYjtcclxuJGNfdGVyY2Vyb19jOiAjOThhY2Y4O1xyXG4kY19jdWFydG9fYzogI2IwODhmOTtcclxuJGNfcXVpbnRvX2M6ICNkYTlmZjk7XHJcblxyXG4vLyBwYWxldGEgbnVtZXJvIGN1YXRyb1xyXG4kY19wcmltZXJvX2Q6I0Y4RjhGMjtcclxuJGNfc2VndW5kb19kOiM5OEE2QUQ7XHJcbiRjX3RlcmNlcm9fZDojMzQzQTQwO1xyXG4kY19jdWFydG9fZDogIzI3MjkzNTtcclxuJGNfcXVpbnRvX2Q6ICMyMzI1MkY7XHJcbiRjX3NleHRvX2Q6ICMwM0FGRkY7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/paginas/footer/footer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/paginas/footer/footer.component.ts ***!
  \*********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_modules_formulario_services_api_alkemy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/formulario/services/api_alkemy.service */ "./src/app/modules/formulario/services/api_alkemy.service.ts");
/* harmony import */ var src_app_modules_formulario_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/formulario/services/auth.service */ "./src/app/modules/formulario/services/auth.service.ts");
/* harmony import */ var src_app_shared_services_urlboolean_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/urlboolean.service */ "./src/app/shared/services/urlboolean.service.ts");







var FooterComponent = /** @class */ (function () {
    function FooterComponent(http, srvboolean, router, srvlogout, srvtestauthorize) {
        this.http = http;
        this.srvboolean = srvboolean;
        this.router = router;
        this.srvlogout = srvlogout;
        this.srvtestauthorize = srvtestauthorize;
    }
    FooterComponent.prototype.ngOnInit = function () {
        /* this.eventorouter(); */
        this.start = true;
        this.isAdminpage();
        this.isAlumnopage();
    };
    FooterComponent.prototype.logout = function () {
        console.log("click");
        this.srvlogout.logOut();
    };
    FooterComponent.prototype.ngOnDestroy = function () {
        this.esAlumno = false;
        this.esAdmin = false;
    };
    FooterComponent.prototype.isAlumnopage = function () {
        if (this.router.url.match("/registraralumno") || this.router.url.match("/consultaralumno")) {
            this.esAlumno = true;
        }
        return this.esAlumno;
    };
    FooterComponent.prototype.isAdminpage = function () {
        if (this.router.url.match("/regprofesor") || this.router.url.match("/regmateria") || this.router.url.match("/adminprincipal")) {
            this.esAdmin = true;
        }
        return this.esAdmin;
    };
    FooterComponent.prototype.testingAuthorize = function () {
        var _this = this;
        this.token = localStorage.getItem('jwt');
        this.srvtestauthorize.testingAuthorize().subscribe(function (response) {
            _this.informacion = response;
        }, function (error) {
            _this.error = error;
        });
    };
    FooterComponent.prototype.obtenerinfoSoloAlumnos = function () {
        this.token = localStorage.getItem('jwt');
        this.srvtestauthorize.obtenerinfoSoloAlumnos().subscribe(function (response) {
            console.log(response);
        }, function (err) {
            console.log(err);
        });
    };
    FooterComponent.prototype.eventorouter = function () {
        this.router.events.subscribe(function (evento) {
            if (evento instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
            }
        });
    };
    // collapsar el menu desplegable al presionar el boton
    FooterComponent.prototype.openNav = function () {
        this.start = false;
        this.btnToggle = true;
        document.getElementById("footer-link1").style.display = "none";
        document.getElementById("title").style.display = "none";
        setTimeout(function () {
            document.getElementById("footer-link1").style.display = "block";
            document.getElementById("title").style.display = "block";
        }, 900);
        document.getElementById("abrirlinks").style.width = "230px";
        document.getElementById("abrirlinks").style.marginLeft = "0px";
        /* document.getElementById("menu").style.marginLeft = "250px"; */
    };
    FooterComponent.prototype.closeNav = function () {
        this.btnToggle = false;
        document.getElementById("abrirlinks").style.width = "0";
        document.getElementById("abrirlinks").style.marginLeft = "100px";
        /* document.getElementById("menu").style.marginLeft= "0px"; */
        /*  document.getElementById("txt").style.visibility = "hidden"; */
    };
    FooterComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: src_app_shared_services_urlboolean_service__WEBPACK_IMPORTED_MODULE_6__["UrlbooleanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_modules_formulario_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: src_app_modules_formulario_services_api_alkemy_service__WEBPACK_IMPORTED_MODULE_4__["Api_alkemyService"] }
    ]; };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/paginas/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/core/paginas/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], src_app_shared_services_urlboolean_service__WEBPACK_IMPORTED_MODULE_6__["UrlbooleanService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_modules_formulario_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], src_app_modules_formulario_services_api_alkemy_service__WEBPACK_IMPORTED_MODULE_4__["Api_alkemyService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/paginas/footer/sidebar/sidebar.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/core/paginas/footer/sidebar/sidebar.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width: 1280px) {\n  .container-fluid {\n    width: 1250px; }\n  input::-webkit-input-placeholder {\n    font-size: 1.0vw; }\n  input::-moz-placeholder {\n    font-size: 1.0vw; }\n  input::-ms-input-placeholder {\n    font-size: 1.0vw; }\n  input::placeholder {\n    font-size: 1.0vw; }\n  .nombre-alumno {\n    text-align: center; }\n    .nombre-alumno .starttitle {\n      font-size: 1.2vw; }\n  #txt {\n    text-decoration: none;\n    list-style: none; }\n    #txt a {\n      display: block;\n      height: 28px;\n      color: #7595b6;\n      font-size: 1.0vw; }\n  .starttxt {\n    font-size: 1.0vw; }\n  .activado {\n    color: green !important; }\n  .formtitulo {\n    left: 0;\n    width: 20vw;\n    height: 80%;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly; }\n    .formtitulo span {\n      display: block;\n      font-size: 1.3vw; }\n    .formtitulo form {\n      height: 40%; }\n    .formtitulo .formtitulo_insidewrapper {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-evenly;\n      align-items: center;\n      height: 40%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdpbmFzL2Zvb3Rlci9zaWRlYmFyL0I6XFxnaXRodWJcXGFsa2VteS1mcm9udGVuZC9zcmNcXGFwcFxcY29yZVxccGFnaW5hc1xcZm9vdGVyXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL3BhZ2luYXMvZm9vdGVyL3NpZGViYXIvQjpcXGdpdGh1YlxcYWxrZW15LWZyb250ZW5kL3NyY1xcYXBwXFxzaGFyZWRcXHRoZW1lc1xcX3BhbGV0YXByaW5jaXBhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUk7SUFDRSxhQUFhLEVBQUE7RUFJZjtJQUNFLGdCQUFnQixFQUFBO0VBRGxCO0lBQ0UsZ0JBQWdCLEVBQUE7RUFEbEI7SUFDRSxnQkFBZ0IsRUFBQTtFQURsQjtJQUNFLGdCQUFnQixFQUFBO0VBR2xCO0lBQ0Usa0JBQWtCLEVBQUE7SUFEcEI7TUFHRyxnQkFBZ0IsRUFBQTtFQUluQjtJQUNFLHFCQUFxQjtJQUNyQixnQkFBZ0IsRUFBQTtJQUZsQjtNQUlJLGNBQWM7TUFDZCxZQUFZO01BQ1osY0NoQmE7TURpQmIsZ0JBQWdCLEVBQUE7RUFJcEI7SUFDRSxnQkFBZ0IsRUFBQTtFQUdsQjtJQUNFLHVCQUF1QixFQUFBO0VBR3pCO0lBQ0ksT0FBTztJQUNQLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkIsRUFBQTtJQU5qQztNQVFNLGNBQWM7TUFDZCxnQkFBZ0IsRUFBQTtJQVR0QjtNQVlNLFdBQVcsRUFBQTtJQVpqQjtNQWVNLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsNkJBQTZCO01BQzdCLG1CQUFtQjtNQUNuQixXQUFXLEVBQUEsRUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnaW5hcy9mb290ZXIvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hcHAvc2hhcmVkL3RoZW1lcy9fcGFsZXRhcHJpbmNpcGFsXCI7XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIC8vRm9yIEJpZyBUVidzIChIRCBTY3JlZW5zKVxyXG4gICAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAgIHdpZHRoOiAxMjUwcHg7XHJcbiAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlucHV0OjpwbGFjZWhvbGRlcntcclxuICAgICAgZm9udC1zaXplOiAxLjB2dztcclxuICAgIH1cclxuICBcclxuICAgIC5ub21icmUtYWx1bW5ve1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIC5zdGFydHRpdGxle1xyXG4gICAgICAgZm9udC1zaXplOiAxLjJ2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjdHh0e1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIGF7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIGNvbG9yOiAkdGV4dG8tYXp1bDQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjB2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLnN0YXJ0dHh0e1xyXG4gICAgICBmb250LXNpemU6IDEuMHZ3O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmFjdGl2YWRve1xyXG4gICAgICBjb2xvcjogZ3JlZW4gIWltcG9ydGFudDtcclxuICAgIH1cclxuICBcclxuICAgIC5mb3JtdGl0dWxvIHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAyMHZ3O1xyXG4gICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjN2dztcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm10aXR1bG9faW5zaWRld3JhcHBlcntcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgIH0gIFxyXG59IiwiLy9jb2xvcmVzIGdsb2JhbGVzXHJcbiR3aGl0ZTogI0ZGRkZGRjtcclxuJHRleHRvX3ByaW1lcm86ICM2ZTcwN2M7XHJcbiR0ZXh0b19zZWN1bmRhcmlvOiAjRDRENEQ0O1xyXG4kdGV4dG8tdGVyY2VybzogI0MyQzJDMjtcclxuJHRleHRvLWN1YXJ0bzogI0VERURFRDtcclxuXHJcbiR0ZXh0by1henVsMTogIzhBQzRGRjtcclxuJHRleHRvLWF6dWwyOiAjQzdFM0ZGO1xyXG4kdGV4dG8tYXp1bDM6ICM3NUJBRkY7XHJcbiR0ZXh0by1henVsNDogIzc1OTViNjtcclxuXHJcblxyXG4vLyBwYWxldGEgbnVtZXJvIHVub1xyXG4kY19wcmltZXJvX2E6ICNGMkYzRUU7XHJcbiRjX3NlZ3VuZG9fYTogI2FiYWZhMztcclxuJGNfdGVyY2Vyb19hOiAjNTc4OThmO1xyXG4kY19jdWFydG9fYTogIzFlMmMyMjtcclxuJGNfcXVpbnRvX2E6ICM0YzVlNTE7XHJcblxyXG4vLyBwYWxldGEgbnVtZXJvIGRvc1xyXG4kY19wcmltZXJvX2I6ICNBNDk2QjA7XHJcbiRjX3NlZ3VuZG9fYjogIzY4NUY3MDtcclxuJGNfdGVyY2Vyb19iOiAjREZDQ0YwO1xyXG4kY19jdWFydG9fYjogI0VCRDdGQztcclxuJGNfcXVpbnRvX2I6ICNDN0I2RDY7XHJcblxyXG4vL3BhbGV0YSBudW1lcm8gdHJlc1xyXG4kY19wcmltZXJvX2M6ICNlMGViZjc7XHJcbiRjX3NlZ3VuZG9fYzogI2I2ZDlmYjtcclxuJGNfdGVyY2Vyb19jOiAjOThhY2Y4O1xyXG4kY19jdWFydG9fYzogI2IwODhmOTtcclxuJGNfcXVpbnRvX2M6ICNkYTlmZjk7XHJcblxyXG4vLyBwYWxldGEgbnVtZXJvIGN1YXRyb1xyXG4kY19wcmltZXJvX2Q6I0Y4RjhGMjtcclxuJGNfc2VndW5kb19kOiM5OEE2QUQ7XHJcbiRjX3RlcmNlcm9fZDojMzQzQTQwO1xyXG4kY19jdWFydG9fZDogIzI3MjkzNTtcclxuJGNfcXVpbnRvX2Q6ICMyMzI1MkY7XHJcbiRjX3NleHRvX2Q6ICMwM0FGRkY7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/paginas/footer/sidebar/sidebar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/paginas/footer/sidebar/sidebar.component.ts ***!
  \******************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/paginas/footer/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/core/paginas/footer/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/core/paginas/navbar/navbar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/core/paginas/navbar/navbar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Syne\", sans-serif; }\n\nnav {\n  height: 60px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  position: sticky;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 0;\n  margin: 0;\n  z-index: 23;\n  background: #35354100;\n  /* #19192285 */\n  opacity: 0.8; }\n\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  flex: 0 0 85%; }\n\n.navbar > ul {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 2px;\n  flex: 0 0 15%;\n  height: 50%;\n  text-decoration: none; }\n\n.navbar > ul .lidni {\n    text-align: center;\n    background: #343A40;\n    box-shadow: 0px 0px 10px rgba(66, 66, 66, 0.68);\n    height: 3vh;\n    width: 7vw;\n    display: block; }\n\n.navbar > ul .linombre {\n    margin: 2px;\n    list-style: none;\n    padding: 2px;\n    width: 100%;\n    height: 29px;\n    text-align: center; }\n\n.navbar > ul a {\n    font-size: 14px;\n    /* color: $texto-azul2; */ }\n\n.usuario {\n  padding: 4px;\n  background: #343A40;\n  box-shadow: 0px 0px 10px rgba(66, 66, 66, 0.68); }\n\n#textcolor {\n  display: block;\n  color: #F8F8F2;\n  box-shadow: 0px 0px 10px rgba(66, 66, 66, 0.68); }\n\n@media screen and (min-width: 300px) {\n  /* ---------------------------------------- */\n  .container-fluid {\n    width: 100%; }\n  .navcontainer {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center; }\n  .titulo h3 {\n    font-size: 4.0vw; }\n  .usuario p {\n    font-size: 3.3vw; } }\n\n@media screen and (min-width: 480px) {\n  .container-fluid {\n    width: 100%; }\n  .navcontainer {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center; }\n  .titulo h3 {\n    font-size: 4.0vw; }\n  .usuario p {\n    font-size: 2.5vw; } }\n\n@media screen and (min-width: 600px) {\n  .container-fluid {\n    width: 100%; }\n  .navcontainer {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center; }\n  .titulo h3 {\n    font-size: 4.0vw; }\n  .usuario p {\n    font-size: 2.5vw; } }\n\n@media screen and (min-width: 768px) {\n  .container-fluid {\n    width: 100%; }\n  .navcontainer {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center; }\n  .titulo h3 {\n    font-size: 2.8vw; }\n  .usuario p {\n    font-size: 1.8vw; } }\n\n@media screen and (min-width: 992px) {\n  .container-fluid {\n    width: 100%; }\n  .navcontainer {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center; }\n  .titulo h3 {\n    font-size: 2.4vw; }\n  .usuario p {\n    font-size: 1.4vw; } }\n\n@media screen and (min-width: 1280px) {\n  .container-fluid {\n    width: 100%; }\n  .navcontainer {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center; }\n  .titulo h3 {\n    font-size: 2.0vw; }\n  .usuario p {\n    font-size: 1.2vw; } }\n\n@media screen and (min-width: 1537px) {\n  .container-fluid {\n    width: 100%; }\n  .navcontainer {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center; }\n  .titulo h3 {\n    font-size: 1.8vw; }\n  .usuario p {\n    font-size: 1.0vw; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdpbmFzL25hdmJhci9COlxcZ2l0aHViXFxhbGtlbXktZnJvbnRlbmQvc3JjXFxhcHBcXGNvcmVcXHBhZ2luYXNcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL3BhZ2luYXMvbmF2YmFyL0I6XFxnaXRodWJcXGFsa2VteS1mcm9udGVuZC9zcmNcXGFwcFxcc2hhcmVkXFx0aGVtZXNcXF9wYWxldGFwcmluY2lwYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtFQUNWLCtCQUErQixFQUFBOztBQUdqQztFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFNBQVM7RUFDVCxXQUFXO0VBQ1gscUJBQXFCO0VBQUUsY0FBQTtFQUN2QixZQUFZLEVBQUE7O0FBSWQ7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2IsV0FBVztFQUVYLHFCQUFxQixFQUFBOztBQVJ2QjtJQVVJLGtCQUFrQjtJQUNsQixtQkNOZ0I7SURPaEIsK0NBQStDO0lBQy9DLFdBQVc7SUFDWCxVQUFVO0lBQ1YsY0FBYyxFQUFBOztBQWZsQjtJQW1CSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQixFQUFBOztBQXhCdEI7SUE0QkksZUFBZTtJQUNmLHlCQUFBLEVBQTBCOztBQUk5QjtFQUNFLFlBQVk7RUFDWixtQkM5QmtCO0VEK0JsQiwrQ0FBK0MsRUFBQTs7QUFHakQ7RUFDRSxjQUFjO0VBQ2QsY0N0Q2tCO0VEdUNsQiwrQ0FBK0MsRUFBQTs7QUFRakQ7RUFDRSw2Q0FBQTtFQUNBO0lBQ0UsV0FBVyxFQUFBO0VBSWI7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUIsRUFBQTtFQUlyQjtJQUVJLGdCQUFnQixFQUFBO0VBSXBCO0lBRUksZ0JBQWdCLEVBQUEsRUFDakI7O0FBTUw7RUFFRTtJQUNFLFdBQVcsRUFBQTtFQUliO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CLEVBQUE7RUFJckI7SUFFSSxnQkFBZ0IsRUFBQTtFQUlwQjtJQUVJLGdCQUFnQixFQUFBLEVBQ2pCOztBQU9MO0VBRUU7SUFDRSxXQUFXLEVBQUE7RUFJYjtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQixFQUFBO0VBSXJCO0lBRUksZ0JBQWdCLEVBQUE7RUFJcEI7SUFFSSxnQkFBZ0IsRUFBQSxFQUNqQjs7QUFPTDtFQUVFO0lBQ0UsV0FBVyxFQUFBO0VBSWI7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUIsRUFBQTtFQUlyQjtJQUVJLGdCQUFnQixFQUFBO0VBSXBCO0lBRUksZ0JBQWdCLEVBQUEsRUFDakI7O0FBT0w7RUFFRTtJQUNFLFdBQVcsRUFBQTtFQUliO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CLEVBQUE7RUFJckI7SUFFSSxnQkFBZ0IsRUFBQTtFQUlwQjtJQUVJLGdCQUFnQixFQUFBLEVBQ2pCOztBQU1MO0VBRUU7SUFDRSxXQUFXLEVBQUE7RUFJYjtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQixFQUFBO0VBSXJCO0lBRUksZ0JBQWdCLEVBQUE7RUFJcEI7SUFFSSxnQkFBZ0IsRUFBQSxFQUNqQjs7QUFNTDtFQUNFO0lBQ0UsV0FBVyxFQUFBO0VBSWI7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUIsRUFBQTtFQUlyQjtJQUVJLGdCQUFnQixFQUFBO0VBSXBCO0lBRUksZ0JBQWdCLEVBQUEsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3BhZ2luYXMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXBwL3NoYXJlZC90aGVtZXMvX3BhbGV0YXByaW5jaXBhbFwiO1xyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LWZhbWlseTogXCJTeW5lXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICB6LWluZGV4OiAyMztcclxuICBiYWNrZ3JvdW5kOiAjMzUzNTQxMDA7IC8qICMxOTE5MjI4NSAqL1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuXHJcbi5uYXZiYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXg6IDAgMCA4NSU7XHJcbn1cclxuXHJcbi5uYXZiYXIgPiB1bCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gIGZsZXg6IDAgMCAxNSU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcblxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAubGlkbmkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogJGNfdGVyY2Vyb19kO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoNjYsIDY2LCA2NiwgMC42OCk7XHJcbiAgICBoZWlnaHQ6IDN2aDtcclxuICAgIHdpZHRoOiA3dnc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5saW5vbWJyZSB7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjlweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLyogY29sb3I6ICR0ZXh0by1henVsMjsgKi9cclxuICB9XHJcbn1cclxuXHJcbi51c3Vhcmlve1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBiYWNrZ3JvdW5kOiAkY190ZXJjZXJvX2Q7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoNjYsIDY2LCA2NiwgMC42OCk7XHJcbn1cclxuXHJcbiN0ZXh0Y29sb3J7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICRjX3ByaW1lcm9fZDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSg2NiwgNjYsIDY2LCAwLjY4KTtcclxuICBcclxufVxyXG5cclxuXHJcblxyXG4vLyByZXNwb25zaXZlIGRlc2lnbiBuYXZiYXJcclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMwMHB4KSB7XHJcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIH1cclxuXHJcbiAgLm5hdmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC8vdGl0dWxvIGFsa2VteSBzY2hvb2xcclxuICAudGl0dWxve1xyXG4gICAgaDN7XHJcbiAgICAgIGZvbnQtc2l6ZTogNC4wdnc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudXN1YXJpb3tcclxuICAgIHB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMy4zdnc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcclxuICAvL0ZvciBUYWJsZXRzXHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgfVxyXG5cclxuICAubmF2Y29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLy90aXR1bG8gYWxrZW15IHNjaG9vbFxyXG4gIC50aXR1bG97XHJcbiAgICBoM3tcclxuICAgICAgZm9udC1zaXplOiA0LjB2dztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51c3Vhcmlve1xyXG4gICAgcHtcclxuICAgICAgZm9udC1zaXplOiAyLjV2dztcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuIFxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gIC8vRm9yIFRhYmxldHNcclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICB9XHJcblxyXG4gIC5uYXZjb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAvL3RpdHVsbyBhbGtlbXkgc2Nob29sXHJcbiAgLnRpdHVsb3tcclxuICAgIGgze1xyXG4gICAgICBmb250LXNpemU6IDQuMHZ3O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVzdWFyaW97XHJcbiAgICBwe1xyXG4gICAgICBmb250LXNpemU6IDIuNXZ3O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIFxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC8vRm9yIExhcHRvcHNcclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gXHJcbiAgfVxyXG5cclxuICAubmF2Y29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLy90aXR1bG8gYWxrZW15IHNjaG9vbFxyXG4gIC50aXR1bG97XHJcbiAgICBoM3tcclxuICAgICAgZm9udC1zaXplOiAyLjh2dztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51c3Vhcmlve1xyXG4gICAgcHtcclxuICAgICAgZm9udC1zaXplOiAxLjh2dztcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAvL0ZvciBMYXJnZSBMYXB0b3BzXHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgfVxyXG5cclxuICAubmF2Y29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLy90aXR1bG8gYWxrZW15IHNjaG9vbFxyXG4gIC50aXR1bG97XHJcbiAgICBoM3tcclxuICAgICAgZm9udC1zaXplOiAyLjR2dztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51c3Vhcmlve1xyXG4gICAgcHtcclxuICAgICAgZm9udC1zaXplOiAxLjR2dztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcclxuICAvL0ZvciBCaWcgVFYncyAoSEQgU2NyZWVucylcclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgLm5hdmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC8vdGl0dWxvIGFsa2VteSBzY2hvb2xcclxuICAudGl0dWxve1xyXG4gICAgaDN7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi4wdnc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudXN1YXJpb3tcclxuICAgIHB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ydnc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTUzN3B4KXtcclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICB9XHJcblxyXG4gIC5uYXZjb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAvL3RpdHVsbyBhbGtlbXkgc2Nob29sXHJcbiAgLnRpdHVsb3tcclxuICAgIGgze1xyXG4gICAgICBmb250LXNpemU6IDEuOHZ3O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVzdWFyaW97XHJcbiAgICBwe1xyXG4gICAgICBmb250LXNpemU6IDEuMHZ3O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxufVxyXG4iLCIvL2NvbG9yZXMgZ2xvYmFsZXNcclxuJHdoaXRlOiAjRkZGRkZGO1xyXG4kdGV4dG9fcHJpbWVybzogIzZlNzA3YztcclxuJHRleHRvX3NlY3VuZGFyaW86ICNENEQ0RDQ7XHJcbiR0ZXh0by10ZXJjZXJvOiAjQzJDMkMyO1xyXG4kdGV4dG8tY3VhcnRvOiAjRURFREVEO1xyXG5cclxuJHRleHRvLWF6dWwxOiAjOEFDNEZGO1xyXG4kdGV4dG8tYXp1bDI6ICNDN0UzRkY7XHJcbiR0ZXh0by1henVsMzogIzc1QkFGRjtcclxuJHRleHRvLWF6dWw0OiAjNzU5NWI2O1xyXG5cclxuXHJcbi8vIHBhbGV0YSBudW1lcm8gdW5vXHJcbiRjX3ByaW1lcm9fYTogI0YyRjNFRTtcclxuJGNfc2VndW5kb19hOiAjYWJhZmEzO1xyXG4kY190ZXJjZXJvX2E6ICM1Nzg5OGY7XHJcbiRjX2N1YXJ0b19hOiAjMWUyYzIyO1xyXG4kY19xdWludG9fYTogIzRjNWU1MTtcclxuXHJcbi8vIHBhbGV0YSBudW1lcm8gZG9zXHJcbiRjX3ByaW1lcm9fYjogI0E0OTZCMDtcclxuJGNfc2VndW5kb19iOiAjNjg1RjcwO1xyXG4kY190ZXJjZXJvX2I6ICNERkNDRjA7XHJcbiRjX2N1YXJ0b19iOiAjRUJEN0ZDO1xyXG4kY19xdWludG9fYjogI0M3QjZENjtcclxuXHJcbi8vcGFsZXRhIG51bWVybyB0cmVzXHJcbiRjX3ByaW1lcm9fYzogI2UwZWJmNztcclxuJGNfc2VndW5kb19jOiAjYjZkOWZiO1xyXG4kY190ZXJjZXJvX2M6ICM5OGFjZjg7XHJcbiRjX2N1YXJ0b19jOiAjYjA4OGY5O1xyXG4kY19xdWludG9fYzogI2RhOWZmOTtcclxuXHJcbi8vIHBhbGV0YSBudW1lcm8gY3VhdHJvXHJcbiRjX3ByaW1lcm9fZDojRjhGOEYyO1xyXG4kY19zZWd1bmRvX2Q6Izk4QTZBRDtcclxuJGNfdGVyY2Vyb19kOiMzNDNBNDA7XHJcbiRjX2N1YXJ0b19kOiAjMjcyOTM1O1xyXG4kY19xdWludG9fZDogIzIzMjUyRjtcclxuJGNfc2V4dG9fZDogIzAzQUZGRjtcclxuIl19 */"

/***/ }),

/***/ "./src/app/core/paginas/navbar/navbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/paginas/navbar/navbar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_todoservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/todoservice.service */ "./src/app/shared/services/todoservice.service.ts");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(srvconsultar) {
        this.srvconsultar = srvconsultar;
        this.title = '';
    }
    NavbarComponent.prototype.ngOnInit = function () {
        /* this.buscarDatos(); */
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_todoservice_service__WEBPACK_IMPORTED_MODULE_2__["TodoserviceService"] }
    ]; };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/paginas/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/core/paginas/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_todoservice_service__WEBPACK_IMPORTED_MODULE_2__["TodoserviceService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/core/paginas/navbar/navbar.module.ts":
/*!******************************************************!*\
  !*** ./src/app/core/paginas/navbar/navbar.module.ts ***!
  \******************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar.component */ "./src/app/core/paginas/navbar/navbar.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__["Ng2SearchPipeModule"]
            ],
            declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]],
            exports: [
                _navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]
            ]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "./src/app/modules/formulario/services/AuthGuard.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/formulario/services/AuthGuard.service.ts ***!
  \******************************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _api_alkemy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api_alkemy.service */ "./src/app/modules/formulario/services/api_alkemy.service.ts");





var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(route, jwtHelper, authservice) {
        this.route = route;
        this.jwtHelper = jwtHelper;
        this.authservice = authservice;
    }
    // activar ahora
    AuthGuardService.prototype.canActivate = function (next) {
        var token = localStorage.getItem("jwt");
        if (token && !this.jwtHelper.isTokenExpired(token)) {
            console.log("token es null aca por? : " + token);
            var roles = next.data['RolesPermitidos'];
            console.log("roles de next lista ruta creo: " + roles);
            if (roles) {
                if (this.authservice.rolesCoinciden(roles)) {
                    console.log("roles de ruta roles si coinciden: " + roles);
                    return true;
                }
                else {
                    this.route.navigate(["/principalform"]);
                    return false;
                }
            }
            return true;
        }
        this.route.navigate(["/principalform"]);
        return false;
    };
    AuthGuardService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"] },
        { type: _api_alkemy_service__WEBPACK_IMPORTED_MODULE_4__["Api_alkemyService"] }
    ]; };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"], _api_alkemy_service__WEBPACK_IMPORTED_MODULE_4__["Api_alkemyService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/modules/formulario/services/api_alkemy.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/formulario/services/api_alkemy.service.ts ***!
  \*******************************************************************/
/*! exports provided: Api_alkemyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Api_alkemyService", function() { return Api_alkemyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");






var Api_alkemyService = /** @class */ (function () {
    function Api_alkemyService(http, helper) {
        this.http = http;
        this.helper = helper;
        /*  helper = new JwtHelperService(); */
        this.currentUser = {
            Email: null,
            Password: null,
            Rolnombre: null,
        };
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            /*   "Content-Type": "application/json", */
            Authorization: localStorage.getItem("jwt"),
        });
        /* this.headers.append("Content-Type", "application/json");
        this.headers.append("authorization", "Bearer "+localStorage.getItem('jwt')); */
        this.urlbase = "https://localhost:44325/";
    }
    Api_alkemyService.prototype.loguearusuario = function (model) {
        return this.http.post(this.urlbase + "api/Autenticar/user", model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.manejoErrores));
    };
    //errores handler
    Api_alkemyService.prototype.manejoErrores = function (errorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error("Error lado del Cliente: ", errorResponse.error.message);
        }
        else {
            console.error("Error lado del Server: ", errorResponse);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorResponse.message || "Hay un problema con el servicio");
    };
    Api_alkemyService.prototype.rolesCoinciden = function (rolesPermitidos) {
        var isMatch = false;
        var payLoad = JSON.parse(window.atob(localStorage.getItem('jwt').split('.')[1]));
        var userRole = payLoad.role;
        rolesPermitidos.forEach(function (element) {
            //element trae el rol de la lista que tnemos en la ruta
            //userRole trae el role desde el token
            if (userRole == element) {
                isMatch = true;
                return false;
            }
        });
        return isMatch;
    };
    Api_alkemyService.prototype.testingAuthorize = function () {
        console.log(localStorage.getItem("jwt"));
        /* return this.http.get("https://localhost:44325/api/AlumnoInfo", */
        return this.http.get(this.urlbase + "api/AlumnoInfo", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("jwt"),
            }),
        });
    };
    Api_alkemyService.prototype.obtenerinfoSoloAlumnos = function () {
        /* return this.http.get("https://localhost:44325/api/AlumnoInfo/alumnoi", { */
        return this.http.get(this.urlbase + "api/AlumnoInfo/alumnoi", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("jwt"),
            }),
        });
    };
    Api_alkemyService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"] }
    ]; };
    Api_alkemyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]])
    ], Api_alkemyService);
    return Api_alkemyService;
}());



/***/ }),

/***/ "./src/app/modules/formulario/services/auth.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/formulario/services/auth.service.ts ***!
  \*************************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");




var AuthService = /** @class */ (function () {
    function AuthService(router, jwtHelper) {
        this.router = router;
        this.jwtHelper = jwtHelper;
    }
    // AUTENTICACION Y COMPROBACION
    AuthService.prototype.esUsuarioAutenticado = function (valor) {
        // booleano de comprobacion
        this.token = localStorage.getItem("jwt");
        if (this.token && !this.jwtHelper.isTokenExpired(this.token)) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.logOut = function () {
        localStorage.removeItem("jwt");
        this.router.navigate[("/principalform")];
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/loader/loader.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/loader/loader.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes bouncing {\n  0% {\n    top: 40%; }\n  100% {\n    top: 30%; } }\n\n@keyframes bouncing {\n  0% {\n    top: 40%; }\n  100% {\n    top: 30%; } }\n\n@-webkit-keyframes fadein {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fadein {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.page-overlay-wrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 1009;\n  background: rgba(112, 191, 93, 0.5); }\n\n.page-overlay-wrapper .bee-spinner {\n    width: 20%;\n    height: 20%;\n    position: fixed;\n    top: 40%;\n    left: calc(50% - 10%);\n    z-index: 100;\n    background-image: url(/assets/bee-spinner.png);\n    background-repeat: no-repeat;\n    background-size: 97%;\n    -webkit-animation: bouncing 0.4s cubic-bezier(0.1, 0.25, 0.1, 1) 0s infinite alternate both;\n            animation: bouncing 0.4s cubic-bezier(0.1, 0.25, 0.1, 1) 0s infinite alternate both; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRlci9COlxcZ2l0aHViXFxhbGtlbXktZnJvbnRlbmQvc3JjXFxhcHBcXHNoYXJlZFxcbG9hZGVyXFxsb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNFLFFBQVEsRUFBQTtFQUVWO0lBQ0UsUUFBUSxFQUFBLEVBQUE7O0FBTGQ7RUFDSTtJQUNFLFFBQVEsRUFBQTtFQUVWO0lBQ0UsUUFBUSxFQUFBLEVBQUE7O0FBSVo7RUFDRTtJQUNFLFVBQVUsRUFBQTtFQUdaO0lBQ0UsVUFBVSxFQUFBLEVBQUE7O0FBTmQ7RUFDRTtJQUNFLFVBQVUsRUFBQTtFQUdaO0lBQ0UsVUFBVSxFQUFBLEVBQUE7O0FBSWQ7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBQ04sYUFBYTtFQUNiLG1DQUFtQyxFQUFBOztBQU5yQztJQVNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTtJQUNmLFFBQVE7SUFDUixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLDhDQUE4QztJQUM5Qyw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLDJGQUNnQjtZQURoQixtRkFDZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBib3VuY2luZyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRvcDogNDAlO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRvcDogMzAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnBhZ2Utb3ZlcmxheS13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTAwOTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTEyLCAxOTEsIDkzLCAwLjUpO1xyXG4gIFxyXG4gICAgLmJlZS1zcGlubmVyIHtcclxuICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgdG9wOiA0MCU7XHJcbiAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTAlKTtcclxuICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9iZWUtc3Bpbm5lci5wbmcpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDk3JTtcclxuICAgICAgYW5pbWF0aW9uOiBib3VuY2luZyAwLjRzIGN1YmljLWJlemllcigwLjEsIDAuMjUsIDAuMSwgMSkgMHMgaW5maW5pdGVcclxuICAgICAgICBhbHRlcm5hdGUgYm90aDtcclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/shared/loader/loader.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/loader/loader.component.ts ***!
  \***************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.service */ "./src/app/shared/loader/loader.service.ts");



var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(spinnerService, cdRef) {
        this.spinnerService = spinnerService;
        this.cdRef = cdRef;
        this.showSpinner = false;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        this.init();
    };
    LoaderComponent.prototype.init = function () {
        var _this = this;
        this.spinnerService.getSpinnerObserver().subscribe(function (status) {
            _this.showSpinner = (status === 'start');
            _this.cdRef.detectChanges();
        });
    };
    LoaderComponent.ctorParameters = function () { return [
        { type: _loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/shared/loader/loader.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/loader/loader.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/loader/loader.service.ts ***!
  \*************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.count = 0;
        this.spinner$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
    }
    LoaderService.prototype.getSpinnerObserver = function () {
        return this.spinner$.asObservable();
    };
    LoaderService.prototype.requestStarted = function () {
        if (++this.count === 1) {
            this.spinner$.next('start');
        }
    };
    LoaderService.prototype.requestEnded = function () {
        if (this.count === 0 || --this.count === 0) {
            this.spinner$.next('stop');
        }
    };
    LoaderService.prototype.resetSpinner = function () {
        this.count = 0;
        this.spinner$.next('stop');
    };
    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/shared/services/todoservice.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/todoservice.service.ts ***!
  \********************************************************/
/*! exports provided: TodoserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoserviceService", function() { return TodoserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var TodoserviceService = /** @class */ (function () {
    function TodoserviceService(http) {
        this.http = http;
        this.headers = new Headers();
        this.urlbase = "https://localhost:44325/";
        this.headers.append("Content-Type", "application/json");
        this.headers.append("Authorization", "Bearer" + localStorage.getItem("jwt"));
    }
    // MATERIAS
    TodoserviceService.prototype.registrarMateria = function (materia) {
        return this.http.post(
        /* "https://localhost:44325/api/Materia/addmateria", */
        this.urlbase + "api/Materia/addmateria", materia);
    };
    TodoserviceService.prototype.listaMateriasConfirmada = function () {
        /* return this.http.get("https://localhost:44325/api/Materias_Confirmadas"); */
        return this.http.get(this.urlbase + "api/Materias_Confirmadas");
    };
    // Traer Lista de materias
    TodoserviceService.prototype.listaMaterias = function () {
        /* return this.http.get("https://localhost:44325/api/Materia/Listamaterias"); */
        return this.http.get(this.urlbase + "api/Materia/Listamaterias");
    };
    //ALUMNO CONFIRMA LA MATERIA A RENDIR
    TodoserviceService.prototype.materiaConfirmada = function (dato) {
        /* return this.http.post("https://localhost:44325/api/Materias_Confirmadas/confirmacion", dato); */
        return this.http.post(this.urlbase + "api/Materias_Confirmadas/confirmacion", dato);
    };
    // EL ALUMNO ELIMINARA LA MATERIA DESDE LA PAGINA CONSULTAR MATERIAS
    TodoserviceService.prototype.cancelarSubscripcion = function (id) {
        return this.http.delete(
        /* `https://localhost:44325/api/Materias_Confirmadas/${id}`); */
        this.urlbase + "api/Materias_Confirmadas/" + id);
    };
    TodoserviceService.prototype.buscarDocente = function (dni) {
        /* return this.http.get(`https://localhost:44325/api/Docente/${dni}`); */
        console.log("la url: " + this.urlbase);
        return this.http.get(this.urlbase + "api/Docente/" + dni);
    };
    /* MANEJO DE DOCENTES  */
    TodoserviceService.prototype.agregarDocente = function (profesor) {
        return this.http.post("https://localhost:44325/api/Gestiondocente", profesor, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("jwt"),
            }),
        });
        /* return this.http.post(this.urlbase + "api/Gestiondocente", datos); */
    };
    TodoserviceService.prototype.listadoDocente = function () {
        return this.http.get("https://localhost:44325/api/Gestiondocente/docentes", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("jwt"),
            }),
        });
    };
    TodoserviceService.prototype.traerAdmin = function () {
        return this.http.get("https://localhost:44325/api/Gestiondocente/docentes", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("jwt"),
            }),
        });
    };
    TodoserviceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    TodoserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TodoserviceService);
    return TodoserviceService;
}());



/***/ }),

/***/ "./src/app/shared/services/urlboolean.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/urlboolean.service.ts ***!
  \*******************************************************/
/*! exports provided: UrlbooleanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlbooleanService", function() { return UrlbooleanService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var UrlbooleanService = /** @class */ (function () {
    function UrlbooleanService() {
        this.routerInfo = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    UrlbooleanService.prototype.getBoolean = function () {
        return this.routerInfo.asObservable();
    };
    UrlbooleanService.prototype.setBoolean = function (valorbool) {
        this.routerInfo.next(valorbool);
    };
    UrlbooleanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UrlbooleanService);
    return UrlbooleanService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! B:\github\alkemy-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map