(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-formulario-formulario-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/formulario/componentes/formulario.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/formulario/componentes/formulario.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\">\n<link href=\"https://fonts.googleapis.com/css2?family=Arimo&display=swap\" rel=\"stylesheet\"> \n<!-- <div class=\"container-fluid\">\n\n  <div class=\"container form-container\">\n    \n\n    <form [formGroup]=\"inputs\" class=\"my-form\" (ngSubmit)=\"login()\">\n\n      <div class=\"titulo\">\n        <h2 class=\"tituloform\">Autogestion Alkemy University</h2>\n      \n      </div>\n\n  \n      <input placeholder=\"Ingresar Email\" type=\"text\" name=\"email_address\" id=\"email_address\" formControlName=\"Email\" required>\n      \n        \n      <input placeholder=\"Ingresar Password\" type=\"password\" name=\"phone_number\" id=\"phone_number\" formControlName=\"Pass\">\n        \n        <select class=\"texto\" name=\"pickup_place\" id=\"pickup_place\" formControlName=\"Rol\"> \n          <option class=\"optiontxt\" value=\"\" selected=\"selected\" disabled><p class=\"\">Seleccionar rol </p></option>\n          <option *ngFor=\"let rol of roles\" [ngValue]=\"rol\">{{rol}}</option>\n          \n        </select>\n      \n        <button [disabled]=\"!inputs.valid\"><p *ngIf=\"!inputs.valid\" class=\"text-danger\">Completar Campos</p><p *ngIf=\"inputs.valid\">Enviar Datos</p></button>\n      \n        <div class=\"texto\">\n          <span *ngIf=\"onErrorMessage; else invisibletext\"  class=\"text-danger st-icon-pandora\">EMAIL O CONTRASEÑA INVALIDOS</span>\n          <ng-template #invisibletext>\n\n          </ng-template>\n          <span *ngIf=\"onSuccessMessage; else invisibletext\" class=\"text-success st-icon-pandora\">SE AH LOGEADO CON EXITO</span>\n        </div>\n       \n    </form>\n  </div>\n  \n</div> -->\n\n<div class=\"container-fluid\">\n\n   <div class=\"container form-container\">\n    <form [formGroup]=\"inputs\" class=\"\" (ngSubmit)=\"login()\">\n      <div class=\"form\">\n        <h1 class=\"logintitle\">Alkemy Login</h1>\n        <div class=\"grupo\">\n          <div><input placeholder=\"Ingresar Email\" type=\"text\" formControlName=\"Email\" required></div>\n          <!-- <div><label for=\"\">Email</label></div> -->\n        </div>\n\n        <div class=\"grupo\">\n          <div><input  placeholder=\"Ingresar Password\" type=\"password\" formControlName=\"Password\"></div>\n          <!-- <div><label for=\"\">Contraseña</label></div> -->\n        </div>\n        <div class=\"grupo\">\n\n          <select class=\"texto\" name=\"pickup_place\" id=\"pickup_place\" formControlName=\"Rolnombre\"> \n            <option class=\"optiontxt\" value=\"\" selected=\"selected\" disabled><p class=\"\">Seleccionar rol</p></option>\n            <option *ngFor=\"let rol of roles\" [ngValue]=\"rol\">{{rol}}</option>             \n          </select>\n\n        </div>\n        <div class=\"grupo btns\">\n          <div>\n            <button [disabled]=\"!inputs.valid\">\n              <p *ngIf=\"!inputs.valid\" class=\"text-danger invalidbtn\">Completar Campos</p>\n              <p *ngIf=\"inputs.valid\">Enviar Datos</p>\n            </button>\n          </div>\n\n          <div class=\"texto\">\n            <span *ngIf=\"onErrorMessage; else invisibletext\"  class=\"text-danger st-icon-pandora\">EMAIL O CONTRASEÑA INVALIDOS</span>\n            <ng-template #invisibletext>\n  \n            </ng-template>\n           <!--  <span *ngIf=\"onSuccessMessage; else invisibletext\" class=\"text-success st-icon-pandora\">SE AH LOGEADO CON EXITO</span> -->\n          </div>\n        </div>\n\n        \n\n      </div>\n    </form>\n\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/formulario/componentes/formulario.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/formulario/componentes/formulario.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* .container-fluid {\r\n  height: 100vh;\r\n  font-weight: 400;\r\n  line-height: 40px;\r\n\r\n}\r\n\r\nh2{\r\n\r\n}\r\n.form-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 65%;\r\n\r\n}\r\n\r\n.my-form > * {\r\n  font: 1.4em \"Unkempt\", sans-serif;\r\n}\r\n\r\n.my-form {\r\n  display: grid;\r\n  grid-template-columns: 1fr; \r\n  grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr 0.8fr;\r\n  grid-auto-flow: row;\r\n  grid-gap: 0.8em 0.5em;\r\n  padding: 1.0em;\r\n  width: 90%;\r\n  height: 600px;\r\n\r\n  border-radius: 3px;\r\n  background: #23252f;\r\n  box-shadow: -15px -15px 30px #16181e, 15px 15px 30px #303240;\r\n}\r\n\r\n.my-form > label,\r\n.my-form > fieldset {\r\n  grid-column: auto;\r\n  grid-row: auto;\r\n  color: $texto-azul2;\r\n}\r\n\r\n.my-form > input,\r\n.my-form > select,\r\n.my-form > textarea,\r\n.my-form > button {\r\n  grid-column: auto;\r\n  grid-row: auto;\r\n  padding: 0.4em;\r\n  border: 0;\r\n  color: $texto-azul2;\r\n}\r\n\r\n.my-form {\r\n  input.ng-invalid {\r\n    border-left: 2px solid red;\r\n  }\r\n\r\n  input.ng-valid {\r\n    border-left: 2px solid green;\r\n  }\r\n\r\n  input.ng-untouched {\r\n    border-left: 1px solid blue;\r\n  }\r\n}\r\n\r\n.my-form > fieldset {\r\n  grid-column: span 1;\r\n}\r\n\r\n.my-form > button {\r\n  background: $c_tercero_d;\r\n  color: $texto-azul2;\r\n}\r\n\r\n.my-form {\r\n  input {\r\n    background-color: $c_segundo_d;\r\n  }\r\n}\r\n\r\n.texto {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  span {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    border-radius: 18px;\r\n    background: #343a40;\r\n    box-shadow: 10px 10px 26px #24292d, -10px -10px 26px #444b53;\r\n\r\n    height: 50%;\r\n    width: 80%;\r\n  }\r\n}\r\n\r\nselect {\r\n  background: $c_segundo_d;\r\n}\r\n\r\n.titulo {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  height: 200px;\r\n  text-align: center;\r\n  h2 {\r\n    color: $texto-azul2;\r\n    font-size: 40px;\r\n  }\r\n}\r\n\r\n.tituloerror {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  height: 200px;\r\n  text-align: center;\r\n  h2 {\r\n    color: $texto-azul2;\r\n    font-size: 40px;\r\n  }\r\n}\r\n\r\n.tituloform {\r\n  position: relative;\r\n}\r\n\r\ninput.ng-invalid {\r\n  border-left: 15px solid red;\r\n}\r\n\r\n.error {\r\n  color: red;\r\n  font-size: 30px;\r\n}\r\n\r\n.titulologin {\r\n  position: absolute;\r\n  top: 15%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 600px;\r\n  height: 50px;\r\n}\r\n\r\n.ng-template {\r\n  background-color: red;\r\n} */\n/* variables */\n/* resetear */\n.container-fluid, p, a, ul, li {\n  margin: 0;\n  padding: 0;\n  text-decoration: none; }\nli {\n  list-style-type: none; }\n/* Estilo Base*/\n.container-fluid {\n  background-color: #343A40;\n  overflow-x: hidden;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Arimo', sans-serif; }\nh1 {\n  color: #C7E3FF;\n  font-weight: normal;\n  line-height: 3.5; }\nlabel {\n  background-color: blue;\n  display: inline-block; }\n.form-container {\n  display: inherit;\n  justify-content: inherit;\n  align-items: inherit;\n  height: 100%; }\n.form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 90%;\n  /* a cambiar */ }\nform {\n  display: flex;\n  justify-content: space-evenly;\n  border-radius: 10px;\n  background: linear-gradient(145deg, #2f343a, #383e44);\n  box-shadow: 8px 8px 11px #24292d,\r -8px -8px 11px #444b53; }\n.logintitle {\n  font-size: 20px;\n  text-align: center; }\n/* ------  border errores INPUT Y SELECT  ------- */\ninput.ng-invalid {\n  border-bottom: 1px solid red; }\ninput.ng-valid {\n  border-bottom: 1px solid green; }\ninput.ng-untouched {\n  border-bottom: 1px solid #75BAFF; }\nselect.ng-invalid {\n  border-bottom: 1px solid #75BAFF; }\nselect.ng-valid {\n  border-bottom: 1px solid green; }\n.grupo {\n  padding: 5px; }\nbutton, input, select {\n  width: 100%; }\nbutton {\n  /* width: 200px; */\n  display: inline-block;\n  border: 2px solid #C7E3FF;\n  color: #C7E3FF;\n  padding: 6px 10px;\n  text-transform: uppercase;\n  display: block;\n  font-size: 10px;\n  border: none;\n  background: linear-gradient(315deg, #2f343a, #383e44);\n  box-shadow: -9px -9px 18px #23272c,\r 9px 9px 18px #454d54; }\nbutton:hover {\n  color: #75BAFF;\n  background: #C7E3FF; }\n.btns {\n  height: 100px; }\n.btns button {\n    height: 40px; }\n.btns .texto {\n    /* VAMOS A TENER QUE IR CAMBIANDOLE EL TAMANO DEL TEXTO EN TODOS TAMAÑOS */\n    width: 180px;\n    background-color: blue; }\n.btns .texto span {\n      text-align: center;\n      font-size: 10px; }\ninput, select {\n  background: rgba(255, 255, 255, 0.06);\n  padding: 10px 14px;\n  /* border-radius: 5px; */\n  outline: none;\n  border: none;\n  border-bottom: 1px solid;\n  color: #798fa5; }\ninput::-webkit-input-placeholder {\n  color: #798fa5; }\ninput::-moz-placeholder {\n  color: #798fa5; }\ninput::-ms-input-placeholder {\n  color: #798fa5; }\ninput::placeholder {\n  color: #798fa5; }\noption {\n  background-color: #343A40; }\n/* select{\r\n  background-color: $c_tercero_d;\r\n\r\n} */\n/* .invalidbtn{\r\n  \r\n} */\n/* Fuentes fonts*/\n/* Mobile-first aproach */\n/* small tablet styles */\n@media screen and (min-width: 620px) {\n  /* .container-fluid{\r\n     background-color: red;\r\n   } */ }\n/* large tablets & laptop styles */\n@media screen and (min-width: 960px) {\n  /* .container-fluid{\r\n    background-color: blue;\r\n  } */ }\n/* desktop styles*/\n@media screen and (min-width: 1200px) {\n  /* .container-fluid{\r\n    background-color: green;\r\n  } */ }\n/* super desktop large*/\n@media screen and (min-width: 1600px) {\n  /* .container-fluid{\r\n    background-color: purple;\r\n  } */ }\n/* \r\n@media screen and (min-width: 300px) {\r\n  .container-fluid {\r\n    width: 100%;\r\n    background-color: pink;\r\n    \r\n    \r\n  }\r\n\r\n  \r\n}\r\n\r\n \r\n\r\n\r\n@media screen and (min-width: 480px) {\r\n\r\n  .container-fluid {\r\n    width: 450px;\r\n    background-color: blue;\r\n    \r\n  }\r\n\r\n\r\n}\r\n\r\n@media screen and (min-width: 600px) {\r\n\r\n  .container-fluid {\r\n    width: 570px;\r\n    background-color: red;\r\n\r\n    \r\n  }\r\n\r\n  \r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n\r\n  .container-fluid {\r\n    width: 738px;\r\n    background-color: brown;\r\n\r\n    \r\n  }\r\n\r\n  \r\n}\r\n\r\n@media screen and (min-width: 992px) {\r\n\r\n  .container-fluid {\r\n    background-color: chartreuse;\r\n\r\n    width: 962px;\r\n    \r\n\r\n   \r\n  }\r\n\r\n \r\n}\r\n\r\n@media screen and (min-width: 1280px) {\r\n\r\n  .container-fluid {\r\n   background-color: darkviolet;\r\n\r\n    width: 1250px;\r\n\r\n    \r\n  }\r\n\r\n \r\n}\r\n */\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mb3JtdWxhcmlvL2NvbXBvbmVudGVzL2Zvcm11bGFyaW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZm9ybXVsYXJpby9jb21wb25lbnRlcy9COlxcZ2l0aHViXFxhbGtlbXktZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXGZvcm11bGFyaW9cXGNvbXBvbmVudGVzXFxmb3JtdWxhcmlvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2Zvcm11bGFyaW8vY29tcG9uZW50ZXMvQjpcXGdpdGh1YlxcYWxrZW15LWZyb250ZW5kL3NyY1xcYXBwXFxzaGFyZWRcXHRoZW1lc1xcX3BhbGV0YXByaW5jaXBhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0doQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHRDhKRztBQ0lILGNBQUE7QUFJQSxhQUFBO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UscUJBQXFCLEVBQUE7QUFHdkIsZUFBQTtBQUNBO0VBQ0UseUJDakprQjtFRGtKbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFFYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUVuQixnQ0FBZ0MsRUFBQTtBQUdsQztFQUNFLGNDMUxtQjtFRDJMbkIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBO0FBRWxCO0VBQ0Usc0JBQXNCO0VBQ3RCLHFCQUFxQixFQUFBO0FBSXZCO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsWUFBWSxFQUFBO0FBSWQ7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixVQUFVO0VBQUUsY0FBQSxFQUFlO0FBRTdCO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUc3QixtQkFBbUI7RUFDbkIscURBQXFEO0VBQ3JELHlERGhCcUIsRUFBRTtBQUV6QjtFQ21CRSxlQUFZO0VEakJaLGtCQUFrQixFQUFFO0FDb0J0QixtREFBaUI7QURqQmpCO0VBQ0UsNEJBQTRCLEVBQUU7QUFFaEM7RUFDRSw4QkFBOEIsRUFBRTtBQUVsQztFQUNFLGdDQUFnQyxFQUFFO0FBRXBDO0VBQ0UsZ0NBQWdDLEVBQUU7QUFFcEM7RUFDRSw4QkFBOEIsRUFBRTtBQUVsQztFQUNFLFlBQVksRUFBRTtBQUVoQjtFQUNFLFdBQVcsRUFBRTtBQUVmO0VDMEJFLGtCQUFTO0VBQ1QscUJDalFZO0VEa1FaLHlCQ2xRbUI7RURtUW5CLGNBQVM7RUFDVCxpQkFBZ0I7RUFDaEIseUJBQWM7RUFDZCxjQUFXO0VBQ1gsZUFBWTtFQUNaLFlBQVk7RUFDWixxREFBYTtFRHhCYix5REM0QlUsRUFBQTtBRHpCWjtFQUNFLGNBQWM7RUM4QmhCLG1CQUFLLEVBQUE7QUQzQkw7RUFDRSxhQytCVSxFQUFJO0FBTGhCO0lBT1UsWUFBQSxFQUFBO0FEOUJSO0lDaUNFLDBFQU1EO0lBaEJILFlBT1E7SUQzQkosc0JDZ0NvQixFQUFBO0FEL0JwQjtNQUNFLGtCQUFrQjtNQ3FDbkIsZUFBUSxFQUFBO0FEbENiO0VDcUNFLHFDQUF5QjtFQUN6QixrQkFBYTtFQUNiLHdCQUFZO0VBQ1osYUFBYTtFQUNiLFlBQU87RURuQ1Asd0JBQXdCO0VDcUMxQixjQUFLLEVBQWE7QURsQ2xCO0VDcUNBLGNBQU0sRUFBQTtBRHJDTjtFQ3FDQSxjQUFNLEVBQUE7QURyQ047RUNxQ0EsY0FBTSxFQUFBO0FEckNOO0VDcUNBLGNBQU0sRUFBQTtBRGxDTjtFQ3FDQSx5QkFBQSxFQUFBO0FEbENBOzs7R0FHRztBQUNIOztHQzJDQTtBQUVBLGlCQUFBO0FBQ0EseUJBQW1CO0FEekNuQix3QkMwQ0c7QUR6Q0g7RUFDRTs7TUM2Q0YsRUFBQTtBRHpDQSxrQ0MyQ0U7QUQxQ0Y7RUFDRTs7S0M4Q0YsRUFBQTtBRDFDQSxrQkM0Q0U7QUQzQ0Y7RUFDRTs7S0MrQ0YsRUFBQTtBRDNDQSx1QkM2Q0U7QUQ1Q0Y7RUFDRTs7S0NrREYsRUFBQTtBRDlDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTRFRSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZm9ybXVsYXJpby9jb21wb25lbnRlcy9mb3JtdWxhcmlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG5cclxufVxyXG5cclxuaDJ7XHJcblxyXG59XHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNjUlO1xyXG5cclxufVxyXG5cclxuLm15LWZvcm0gPiAqIHtcclxuICBmb250OiAxLjRlbSBcIlVua2VtcHRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm15LWZvcm0ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IFxyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMC41ZnIgMC41ZnIgMC41ZnIgMC44ZnI7XHJcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcclxuICBncmlkLWdhcDogMC44ZW0gMC41ZW07XHJcbiAgcGFkZGluZzogMS4wZW07XHJcbiAgd2lkdGg6IDkwJTtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYmFja2dyb3VuZDogIzIzMjUyZjtcclxuICBib3gtc2hhZG93OiAtMTVweCAtMTVweCAzMHB4ICMxNjE4MWUsIDE1cHggMTVweCAzMHB4ICMzMDMyNDA7XHJcbn1cclxuXHJcbi5teS1mb3JtID4gbGFiZWwsXHJcbi5teS1mb3JtID4gZmllbGRzZXQge1xyXG4gIGdyaWQtY29sdW1uOiBhdXRvO1xyXG4gIGdyaWQtcm93OiBhdXRvO1xyXG4gIGNvbG9yOiAkdGV4dG8tYXp1bDI7XHJcbn1cclxuXHJcbi5teS1mb3JtID4gaW5wdXQsXHJcbi5teS1mb3JtID4gc2VsZWN0LFxyXG4ubXktZm9ybSA+IHRleHRhcmVhLFxyXG4ubXktZm9ybSA+IGJ1dHRvbiB7XHJcbiAgZ3JpZC1jb2x1bW46IGF1dG87XHJcbiAgZ3JpZC1yb3c6IGF1dG87XHJcbiAgcGFkZGluZzogMC40ZW07XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGNvbG9yOiAkdGV4dG8tYXp1bDI7XHJcbn1cclxuXHJcbi5teS1mb3JtIHtcclxuICBpbnB1dC5uZy1pbnZhbGlkIHtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmVkO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQubmctdmFsaWQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBncmVlbjtcclxuICB9XHJcblxyXG4gIGlucHV0Lm5nLXVudG91Y2hlZCB7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsdWU7XHJcbiAgfVxyXG59XHJcblxyXG4ubXktZm9ybSA+IGZpZWxkc2V0IHtcclxuICBncmlkLWNvbHVtbjogc3BhbiAxO1xyXG59XHJcblxyXG4ubXktZm9ybSA+IGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogJGNfdGVyY2Vyb19kO1xyXG4gIGNvbG9yOiAkdGV4dG8tYXp1bDI7XHJcbn1cclxuXHJcbi5teS1mb3JtIHtcclxuICBpbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY19zZWd1bmRvX2Q7XHJcbiAgfVxyXG59XHJcblxyXG4udGV4dG8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzQzYTQwO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDI2cHggIzI0MjkyZCwgLTEwcHggLTEwcHggMjZweCAjNDQ0YjUzO1xyXG5cclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgYmFja2dyb3VuZDogJGNfc2VndW5kb19kO1xyXG59XHJcblxyXG4udGl0dWxvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaDIge1xyXG4gICAgY29sb3I6ICR0ZXh0by1henVsMjtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICB9XHJcbn1cclxuXHJcbi50aXR1bG9lcnJvciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGgyIHtcclxuICAgIGNvbG9yOiAkdGV4dG8tYXp1bDI7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4udGl0dWxvZm9ybSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5pbnB1dC5uZy1pbnZhbGlkIHtcclxuICBib3JkZXItbGVmdDogMTVweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi50aXR1bG9sb2dpbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4ubmctdGVtcGxhdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufSAqL1xuLyogdmFyaWFibGVzICovXG4vKiByZXNldGVhciAqL1xuLmNvbnRhaW5lci1mbHVpZCwgcCwgYSwgdWwsIGxpIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cblxubGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IH1cblxuLyogRXN0aWxvIEJhc2UqL1xuLmNvbnRhaW5lci1mbHVpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNBNDA7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnQXJpbW8nLCBzYW5zLXNlcmlmOyB9XG5cbmgxIHtcbiAgY29sb3I6ICNDN0UzRkY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAzLjU7IH1cblxubGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5oZXJpdDtcbiAganVzdGlmeS1jb250ZW50OiBpbmhlcml0O1xuICBhbGlnbi1pdGVtczogaW5oZXJpdDtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbi5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA5MCU7XG4gIC8qIGEgY2FtYmlhciAqLyB9XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgIzJmMzQzYSwgIzM4M2U0NCk7XG4gIGJveC1zaGFkb3c6IDhweCA4cHggMTFweCAjMjQyOTJkLFxyIC04cHggLThweCAxMXB4ICM0NDRiNTM7IH1cblxuLmxvZ2ludGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4vKiAtLS0tLS0gIGJvcmRlciBlcnJvcmVzIElOUFVUIFkgU0VMRUNUICAtLS0tLS0tICovXG5pbnB1dC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDsgfVxuXG5pbnB1dC5uZy12YWxpZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmVlbjsgfVxuXG5pbnB1dC5uZy11bnRvdWNoZWQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzc1QkFGRjsgfVxuXG5zZWxlY3QubmctaW52YWxpZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzVCQUZGOyB9XG5cbnNlbGVjdC5uZy12YWxpZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmVlbjsgfVxuXG4uZ3J1cG8ge1xuICBwYWRkaW5nOiA1cHg7IH1cblxuYnV0dG9uLCBpbnB1dCwgc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuYnV0dG9uIHtcbiAgLyogd2lkdGg6IDIwMHB4OyAqL1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNDN0UzRkY7XG4gIGNvbG9yOiAjQzdFM0ZGO1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMmYzNDNhLCAjMzgzZTQ0KTtcbiAgYm94LXNoYWRvdzogLTlweCAtOXB4IDE4cHggIzIzMjcyYyxcciA5cHggOXB4IDE4cHggIzQ1NGQ1NDsgfVxuXG5idXR0b246aG92ZXIge1xuICBjb2xvcjogIzc1QkFGRjtcbiAgYmFja2dyb3VuZDogI0M3RTNGRjsgfVxuXG4uYnRucyB7XG4gIGhlaWdodDogMTAwcHg7IH1cbiAgLmJ0bnMgYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDQwcHg7IH1cbiAgLmJ0bnMgLnRleHRvIHtcbiAgICAvKiBWQU1PUyBBIFRFTkVSIFFVRSBJUiBDQU1CSUFORE9MRSBFTCBUQU1BTk8gREVMIFRFWFRPIEVOIFRPRE9TIFRBTUHDkU9TICovXG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7IH1cbiAgICAuYnRucyAudGV4dG8gc3BhbiB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEwcHg7IH1cblxuaW5wdXQsIHNlbGVjdCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgLyogYm9yZGVyLXJhZGl1czogNXB4OyAqL1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgY29sb3I6ICM3OThmYTU7IH1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM3OThmYTU7IH1cblxub3B0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M0E0MDsgfVxuXG4vKiBzZWxlY3R7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNfdGVyY2Vyb19kO1xyXG5cclxufSAqL1xuLyogLmludmFsaWRidG57XHJcbiAgXHJcbn0gKi9cbi8qIEZ1ZW50ZXMgZm9udHMqL1xuLyogTW9iaWxlLWZpcnN0IGFwcm9hY2ggKi9cbi8qIHNtYWxsIHRhYmxldCBzdHlsZXMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYyMHB4KSB7XG4gIC8qIC5jb250YWluZXItZmx1aWR7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICB9ICovIH1cblxuLyogbGFyZ2UgdGFibGV0cyAmIGxhcHRvcCBzdHlsZXMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gIC8qIC5jb250YWluZXItZmx1aWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gIH0gKi8gfVxuXG4vKiBkZXNrdG9wIHN0eWxlcyovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLyogLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIH0gKi8gfVxuXG4vKiBzdXBlciBkZXNrdG9wIGxhcmdlKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xuICAvKiAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xyXG4gIH0gKi8gfVxuXG4vKiBcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzAwcHgpIHtcclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcclxuICAgIFxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBcclxufVxyXG5cclxuIFxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIFxyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG5cclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHdpZHRoOiA1NzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuXHJcbiAgICBcclxuICB9XHJcblxyXG4gIFxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG5cclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHdpZHRoOiA3MzhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xyXG5cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcblxyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2hhcnRyZXVzZTtcclxuXHJcbiAgICB3aWR0aDogOTYycHg7XHJcbiAgICBcclxuXHJcbiAgIFxyXG4gIH1cclxuXHJcbiBcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XHJcblxyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrdmlvbGV0O1xyXG5cclxuICAgIHdpZHRoOiAxMjUwcHg7XHJcblxyXG4gICAgXHJcbiAgfVxyXG5cclxuIFxyXG59XHJcbiAqL1xuIiwiLy9pbXBvcnRhY2luZXMgc2Fzc1xyXG5AaW1wb3J0IFwic3JjL2FwcC9zaGFyZWQvdGhlbWVzL19wYWxldGFwcmluY2lwYWxcIjtcclxuXHJcbi8qIC5jb250YWluZXItZmx1aWQge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuXHJcbn1cclxuXHJcbmgye1xyXG5cclxufVxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDY1JTtcclxuXHJcbn1cclxuXHJcbi5teS1mb3JtID4gKiB7XHJcbiAgZm9udDogMS40ZW0gXCJVbmtlbXB0XCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5teS1mb3JtIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyBcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDAuNWZyIDAuNWZyIDAuNWZyIDAuOGZyO1xyXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgZ3JpZC1nYXA6IDAuOGVtIDAuNWVtO1xyXG4gIHBhZGRpbmc6IDEuMGVtO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQ6ICMyMzI1MmY7XHJcbiAgYm94LXNoYWRvdzogLTE1cHggLTE1cHggMzBweCAjMTYxODFlLCAxNXB4IDE1cHggMzBweCAjMzAzMjQwO1xyXG59XHJcblxyXG4ubXktZm9ybSA+IGxhYmVsLFxyXG4ubXktZm9ybSA+IGZpZWxkc2V0IHtcclxuICBncmlkLWNvbHVtbjogYXV0bztcclxuICBncmlkLXJvdzogYXV0bztcclxuICBjb2xvcjogJHRleHRvLWF6dWwyO1xyXG59XHJcblxyXG4ubXktZm9ybSA+IGlucHV0LFxyXG4ubXktZm9ybSA+IHNlbGVjdCxcclxuLm15LWZvcm0gPiB0ZXh0YXJlYSxcclxuLm15LWZvcm0gPiBidXR0b24ge1xyXG4gIGdyaWQtY29sdW1uOiBhdXRvO1xyXG4gIGdyaWQtcm93OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAuNGVtO1xyXG4gIGJvcmRlcjogMDtcclxuICBjb2xvcjogJHRleHRvLWF6dWwyO1xyXG59XHJcblxyXG4ubXktZm9ybSB7XHJcbiAgaW5wdXQubmctaW52YWxpZCB7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHJlZDtcclxuICB9XHJcblxyXG4gIGlucHV0Lm5nLXZhbGlkIHtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgZ3JlZW47XHJcbiAgfVxyXG5cclxuICBpbnB1dC5uZy11bnRvdWNoZWQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibHVlO1xyXG4gIH1cclxufVxyXG5cclxuLm15LWZvcm0gPiBmaWVsZHNldCB7XHJcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcclxufVxyXG5cclxuLm15LWZvcm0gPiBidXR0b24ge1xyXG4gIGJhY2tncm91bmQ6ICRjX3RlcmNlcm9fZDtcclxuICBjb2xvcjogJHRleHRvLWF6dWwyO1xyXG59XHJcblxyXG4ubXktZm9ybSB7XHJcbiAgaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNfc2VndW5kb19kO1xyXG4gIH1cclxufVxyXG5cclxuLnRleHRvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzM0M2E0MDtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAyNnB4ICMyNDI5MmQsIC0xMHB4IC0xMHB4IDI2cHggIzQ0NGI1MztcclxuXHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gIGJhY2tncm91bmQ6ICRjX3NlZ3VuZG9fZDtcclxufVxyXG5cclxuLnRpdHVsbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGgyIHtcclxuICAgIGNvbG9yOiAkdGV4dG8tYXp1bDI7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4udGl0dWxvZXJyb3Ige1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoMiB7XHJcbiAgICBjb2xvcjogJHRleHRvLWF6dWwyO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnRpdHVsb2Zvcm0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuaW5wdXQubmctaW52YWxpZCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgcmVkO1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4udGl0dWxvbG9naW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLm5nLXRlbXBsYXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn0gKi9cclxuXHJcbi8qIHZhcmlhYmxlcyAqL1xyXG4vLyAkdGV4dG8tYXp1bDI7XHJcbi8vICRjX3NlZ3VuZG9fZFxyXG5cclxuLyogcmVzZXRlYXIgKi9cclxuLmNvbnRhaW5lci1mbHVpZCwgcCwgYSwgdWwsIGxpe1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxubGl7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4vKiBFc3RpbG8gQmFzZSovXHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNfdGVyY2Vyb19kO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiAnQXJpbW8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oMXtcclxuICBjb2xvcjogJHRleHRvLWF6dWwyO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDMuNTtcclxufVxyXG5sYWJlbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLy8gRk9STVVMQVJJT1xyXG4uZm9ybS1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogaW5oZXJpdDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGluaGVyaXQ7XHJcbiAgYWxpZ24taXRlbXM6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuIFxyXG59XHJcbi5mb3Jte1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDkwJTsgLyogYSBjYW1iaWFyICovXHJcbn1cclxuZm9ybXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gXHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgIzJmMzQzYSwgIzM4M2U0NCk7XHJcbiAgYm94LXNoYWRvdzogIDhweCA4cHggMTFweCAjMjQyOTJkLFxyXG4gICAgICAgICAgICAgLThweCAtOHB4IDExcHggIzQ0NGI1MztcclxufVxyXG4ubG9naW50aXRsZXtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi8qIC0tLS0tLSAgYm9yZGVyIGVycm9yZXMgSU5QVVQgWSBTRUxFQ1QgIC0tLS0tLS0gKi9cclxuaW5wdXQubmctaW52YWxpZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5pbnB1dC5uZy12YWxpZHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JlZW47XHJcbn1cclxuaW5wdXQubmctdW50b3VjaGVkIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHRleHRvLWF6dWwzO1xyXG59XHJcblxyXG5zZWxlY3QubmctaW52YWxpZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR0ZXh0by1henVsMztcclxufVxyXG5zZWxlY3QubmctdmFsaWQge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmVlbjtcclxufVxyXG5cclxuXHJcbi5ncnVwb3tcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi8vIHRhbWHDsW8gYnV0dG9uLCBpbnB1dHMsIFxyXG5idXR0b24sIGlucHV0LCBzZWxlY3R7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiAgLy8gaW5wdXRzLCBzZWxlY3QgeSBib3RvbiBkZWwgZm9ybXVsYXJpb1xyXG5idXR0b257XHJcbiAgLyogd2lkdGg6IDIwMHB4OyAqLyAvLyBlcnJvclxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDJweCBzb2xpZCAkdGV4dG8tYXp1bDI7XHJcbiAgY29sb3I6ICR0ZXh0by1henVsMjtcclxuICBwYWRkaW5nOiA2cHggMTBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzJmMzQzYSwgIzM4M2U0NCk7XHJcbiAgYm94LXNoYWRvdzogIC05cHggLTlweCAxOHB4ICMyMzI3MmMsXHJcbiAgICAgICAgICAgICA5cHggOXB4IDE4cHggIzQ1NGQ1NDtcclxuICBcclxufVxyXG5idXR0b246aG92ZXJ7XHJcbiAgY29sb3I6ICR0ZXh0by1henVsMztcclxuICBiYWNrZ3JvdW5kOiAkdGV4dG8tYXp1bDI7XHJcbn1cclxuXHJcbi8vYnRucyBib3RvbiBkZSBlbnZpYXIgKyBtZW5zYWplIGRlIGVycm9yIGFsIHRlbmVyIGNvbnRyYXNlw7FhIGluY29ycmVjdGFcclxuLmJ0bnN7XHJcblxyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYnV0dG9ue1xyXG5cclxuICAgIGhlaWdodDogNDBweDtcclxuICB9XHJcbiAgLnRleHRveyAvKiBWQU1PUyBBIFRFTkVSIFFVRSBJUiBDQU1CSUFORE9MRSBFTCBUQU1BTk8gREVMIFRFWFRPIEVOIFRPRE9TIFRBTUHDkU9TICovXHJcbiAgICBcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBzcGFue1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxufVxyXG5cclxuaW5wdXQsIHNlbGVjdHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LCAwLjA2KTtcclxuICBwYWRkaW5nOiAxMHB4IDE0cHg7XHJcbiAgLyogYm9yZGVyLXJhZGl1czogNXB4OyAqL1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICBjb2xvcjogIzc5OGZhNTtcclxufVxyXG5pbnB1dDo6cGxhY2Vob2xkZXJ7XHJcbiAgY29sb3I6ICM3OThmYTU7XHJcbn1cclxub3B0aW9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjX3RlcmNlcm9fZDtcclxufVxyXG4vKiBzZWxlY3R7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNfdGVyY2Vyb19kO1xyXG5cclxufSAqL1xyXG5cclxuLy9ib3RvbiBkYXRvcyBubyBpbmdyZXNhZG9zXHJcbi8qIC5pbnZhbGlkYnRue1xyXG4gIFxyXG59ICovXHJcblxyXG5cclxuLyogRnVlbnRlcyBmb250cyovXHJcblxyXG4vKiBNb2JpbGUtZmlyc3QgYXByb2FjaCAqL1xyXG5cclxuLyogc21hbGwgdGFibGV0IHN0eWxlcyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MjBweCl7XHJcbiAgIC8qIC5jb250YWluZXItZmx1aWR7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICB9ICovXHJcbn1cclxuXHJcbi8qIGxhcmdlIHRhYmxldHMgJiBsYXB0b3Agc3R5bGVzICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KXtcclxuICAvKiAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICB9ICovXHJcbn1cclxuXHJcbi8qIGRlc2t0b3Agc3R5bGVzKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KXtcclxuICAvKiAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgfSAqL1xyXG59XHJcblxyXG4vKiBzdXBlciBkZXNrdG9wIGxhcmdlKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KXtcclxuICAvKiAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xyXG4gIH0gKi9cclxufVxyXG5cclxuXHJcblxyXG4vKiBcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzAwcHgpIHtcclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcclxuICAgIFxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBcclxufVxyXG5cclxuIFxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIFxyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG5cclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHdpZHRoOiA1NzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuXHJcbiAgICBcclxuICB9XHJcblxyXG4gIFxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG5cclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHdpZHRoOiA3MzhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xyXG5cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcblxyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2hhcnRyZXVzZTtcclxuXHJcbiAgICB3aWR0aDogOTYycHg7XHJcbiAgICBcclxuXHJcbiAgIFxyXG4gIH1cclxuXHJcbiBcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XHJcblxyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrdmlvbGV0O1xyXG5cclxuICAgIHdpZHRoOiAxMjUwcHg7XHJcblxyXG4gICAgXHJcbiAgfVxyXG5cclxuIFxyXG59XHJcbiAqLyIsIi8vY29sb3JlcyBnbG9iYWxlc1xyXG4kd2hpdGU6ICNGRkZGRkY7XHJcbiR0ZXh0b19wcmltZXJvOiAjNmU3MDdjO1xyXG4kdGV4dG9fc2VjdW5kYXJpbzogI0Q0RDRENDtcclxuJHRleHRvLXRlcmNlcm86ICNDMkMyQzI7XHJcbiR0ZXh0by1jdWFydG86ICNFREVERUQ7XHJcblxyXG4kdGV4dG8tYXp1bDE6ICM4QUM0RkY7XHJcbiR0ZXh0by1henVsMjogI0M3RTNGRjtcclxuJHRleHRvLWF6dWwzOiAjNzVCQUZGO1xyXG4kdGV4dG8tYXp1bDQ6ICM3NTk1YjY7XHJcblxyXG5cclxuLy8gcGFsZXRhIG51bWVybyB1bm9cclxuJGNfcHJpbWVyb19hOiAjRjJGM0VFO1xyXG4kY19zZWd1bmRvX2E6ICNhYmFmYTM7XHJcbiRjX3RlcmNlcm9fYTogIzU3ODk4ZjtcclxuJGNfY3VhcnRvX2E6ICMxZTJjMjI7XHJcbiRjX3F1aW50b19hOiAjNGM1ZTUxO1xyXG5cclxuLy8gcGFsZXRhIG51bWVybyBkb3NcclxuJGNfcHJpbWVyb19iOiAjQTQ5NkIwO1xyXG4kY19zZWd1bmRvX2I6ICM2ODVGNzA7XHJcbiRjX3RlcmNlcm9fYjogI0RGQ0NGMDtcclxuJGNfY3VhcnRvX2I6ICNFQkQ3RkM7XHJcbiRjX3F1aW50b19iOiAjQzdCNkQ2O1xyXG5cclxuLy9wYWxldGEgbnVtZXJvIHRyZXNcclxuJGNfcHJpbWVyb19jOiAjZTBlYmY3O1xyXG4kY19zZWd1bmRvX2M6ICNiNmQ5ZmI7XHJcbiRjX3RlcmNlcm9fYzogIzk4YWNmODtcclxuJGNfY3VhcnRvX2M6ICNiMDg4Zjk7XHJcbiRjX3F1aW50b19jOiAjZGE5ZmY5O1xyXG5cclxuLy8gcGFsZXRhIG51bWVybyBjdWF0cm9cclxuJGNfcHJpbWVyb19kOiNGOEY4RjI7XHJcbiRjX3NlZ3VuZG9fZDojOThBNkFEO1xyXG4kY190ZXJjZXJvX2Q6IzM0M0E0MDtcclxuJGNfY3VhcnRvX2Q6ICMyNzI5MzU7XHJcbiRjX3F1aW50b19kOiAjMjMyNTJGO1xyXG4kY19zZXh0b19kOiAjMDNBRkZGO1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/formulario/componentes/formulario.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/formulario/componentes/formulario.component.ts ***!
  \************************************************************************/
/*! exports provided: FormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioComponent", function() { return FormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_api_alkemy_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/api_alkemy.service */ "./src/app/modules/formulario/services/api_alkemy.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/modules/formulario/services/auth.service.ts");









/* import { Api_alkemyService } from "./services/api_alkemy.service";
import { AuthService } from "./services/auth.service";
import { IUser } from "./services/IUser"; */
let FormularioComponent = class FormularioComponent {
    constructor(fb, srv, srvauthservice, router, http, helper) {
        this.fb = fb;
        this.srv = srv;
        this.srvauthservice = srvauthservice;
        this.router = router;
        this.http = http;
        this.helper = helper;
        // lista select
        this.roles = ["Administrador", "Alumno"];
        this.currentUser = {
            Email: null,
            Password: null,
            Rolnombre: null,
        };
    }
    ngOnInit() {
        this.FormDataGroup();
    }
    FormDataGroup() {
        this.inputs = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Rolnombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    }
    get Email() {
        return this.inputs.get("Email");
    }
    get Pass() {
        return this.inputs.get("Password");
    }
    get rolNombre() {
        return this.inputs.get("Rolnombre");
    }
    login() {
        this.srv.loguearusuario(this.inputs.value).subscribe((response) => {
            /*  this.onSuccessMessage = true; */
            this.onErrorMessage = false;
            const user = response.token;
            /* const user = (<any>response).token;
            localStorage.setItem("jwt", user); */
            /* console.log(user); */
            if (user) {
                localStorage.setItem("jwt", user);
                if (this.rolNombre.value == "Administrador") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                        title: `<span style="color:#75BAFF">Bienvenido: ${this.Email.value} <p style = "color:green;">Logueado con exito</p> </span>`,
                        text: "Redirigiendo...",
                        showClass: {
                            popup: "animate__animated animate__fadeInDown",
                        },
                        hideClass: {
                            popup: "animate__animated animate__fadeOutUp",
                        },
                        toast: true,
                        timer: 3000,
                        showConfirmButton: false,
                        showCancelButton: false,
                        position: 'top',
                        timerProgressBar: true,
                    });
                    setTimeout(() => {
                        this.router.navigate(["/adminprincipal"]);
                    }, 5000);
                }
                else if (this.rolNombre.value == "Alumno") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                        title: `<span style="color:#75BAFF">Bienvenido: Alumno: ${this.Email.value} <p style = "color:green;">Logueado con exito</p> </span>`,
                        text: "Redirigiendo...",
                        showClass: {
                            popup: "animate__animated animate__fadeInDown",
                        },
                        hideClass: {
                            popup: "animate__animated animate__fadeOutUp",
                        },
                        toast: true,
                        timer: 3000,
                        showConfirmButton: false,
                        showCancelButton: false,
                        position: 'top',
                        timerProgressBar: true,
                    });
                    setTimeout(() => {
                        this.router.navigate(["/alumnoprincipal"]);
                        /* this.router.navigate(["/consultaralumno"]); */
                        /* this.router.navigate(["/registraralumno"]); */
                    }, 5000);
                }
            }
        }, (err) => {
            if (this.srvauthservice.esUsuarioAutenticado) {
            }
            //error al loguearse contraseña o email incorrecto
            this.onErrorMessage = true;
            /* console.log(err) */
        });
    }
};
FormularioComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_api_alkemy_service__WEBPACK_IMPORTED_MODULE_7__["Api_alkemyService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"] }
];
FormularioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-formulario",
        template: __webpack_require__(/*! raw-loader!./formulario.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/formulario/componentes/formulario.component.html"),
        styles: [__webpack_require__(/*! ./formulario.component.scss */ "./src/app/modules/formulario/componentes/formulario.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _services_api_alkemy_service__WEBPACK_IMPORTED_MODULE_7__["Api_alkemyService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]])
], FormularioComponent);



/***/ }),

/***/ "./src/app/modules/formulario/formulario-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/formulario/formulario-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: FormularioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioRoutingModule", function() { return FormularioRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _componentes_formulario_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/formulario.component */ "./src/app/modules/formulario/componentes/formulario.component.ts");




const routes = [
    {
        path: '',
        component: _componentes_formulario_component__WEBPACK_IMPORTED_MODULE_3__["FormularioComponent"]
    }
];
let FormularioRoutingModule = class FormularioRoutingModule {
};
FormularioRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FormularioRoutingModule);



/***/ }),

/***/ "./src/app/modules/formulario/formulario.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/formulario/formulario.module.ts ***!
  \*********************************************************/
/*! exports provided: FormularioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioModule", function() { return FormularioModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _formulario_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formulario-routing.module */ "./src/app/modules/formulario/formulario-routing.module.ts");
/* harmony import */ var _componentes_formulario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/formulario.component */ "./src/app/modules/formulario/componentes/formulario.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let FormularioModule = class FormularioModule {
};
FormularioModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _componentes_formulario_component__WEBPACK_IMPORTED_MODULE_4__["FormularioComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _formulario_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormularioRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], FormularioModule);



/***/ })

}]);
//# sourceMappingURL=modules-formulario-formulario-module-es2015.js.map