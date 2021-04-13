(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-admin-module"],{

/***/ "./src/app/modules/admin/admin-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/admin/admin-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _formulario_services_AuthGuard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../formulario/services/AuthGuard.service */ "./src/app/modules/formulario/services/AuthGuard.service.ts");




const routes = [
    {
        path: '', loadChildren: () => Promise.all(/*! import() | principal-principal-module */[__webpack_require__.e("default~alumno-consultar-alumno-consultar-module~alumno-registrar-alumno-registrar-module~modules-fo~41eedd00"), __webpack_require__.e("principal-principal-module")]).then(__webpack_require__.bind(null, /*! ./principal/principal.module */ "./src/app/modules/admin/principal/principal.module.ts")).then(m => m.PrincipalModule),
    },
    {
        path: 'regmateria', loadChildren: () => Promise.all(/*! import() | registrar-materia-registrar-materia-module */[__webpack_require__.e("default~alumno-consultar-alumno-consultar-module~alumno-registrar-alumno-registrar-module~modules-fo~41eedd00"), __webpack_require__.e("default~alumno-consultar-alumno-consultar-module~alumno-registrar-alumno-registrar-module~modules-fo~65087715"), __webpack_require__.e("registrar-materia-registrar-materia-module")]).then(__webpack_require__.bind(null, /*! ./registrar-materia/registrar-materia.module */ "./src/app/modules/admin/registrar-materia/registrar-materia.module.ts")).then(m => m.RegistrarMateriaModule),
        canActivate: [_formulario_services_AuthGuard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]], data: { RolesPermitidos: ['Administrador'] }
    },
    {
        path: 'regprofesor', loadChildren: () => Promise.all(/*! import() | registrar-profesor-registrar-profesor-module */[__webpack_require__.e("default~alumno-consultar-alumno-consultar-module~alumno-registrar-alumno-registrar-module~modules-fo~41eedd00"), __webpack_require__.e("default~alumno-consultar-alumno-consultar-module~alumno-registrar-alumno-registrar-module~modules-fo~65087715"), __webpack_require__.e("registrar-profesor-registrar-profesor-module")]).then(__webpack_require__.bind(null, /*! ./registrar-profesor/registrar-profesor.module */ "./src/app/modules/admin/registrar-profesor/registrar-profesor.module.ts")).then(m => m.RegistrarProfesorModule),
        canActivate: [_formulario_services_AuthGuard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]], data: { RolesPermitidos: ['Administrador'] }
    }
];
let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdminRoutingModule);



/***/ }),

/***/ "./src/app/modules/admin/admin.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/admin/admin.module.ts ***!
  \***********************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/modules/admin/admin-routing.module.ts");




let AdminModule = class AdminModule {
};
AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"],
        ],
    })
], AdminModule);



/***/ })

}]);
//# sourceMappingURL=modules-admin-admin-module.js.map