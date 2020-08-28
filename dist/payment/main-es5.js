function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountAccountComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<link\n  href=\"../../assets/plugins/apex/apexcharts.css\"\n  rel=\"stylesheet\"\n  type=\"text/css\"\n/>\n\n<link\n  href=\"../../assets/assets/css/dashboard/dash_1.css\"\n  rel=\"stylesheet\"\n  type=\"text/css\"\n/>\n<div class=\"row layout-top-spacing\">\n  <div class=\"col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing\">\n    <div class=\"widget widget-table-two\">\n      <div class=\"widget-heading\">\n        <h5 class=\"\">Services disponible</h5>\n      </div>\n\n      <div class=\"widget-content\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"Search\"\n          [(ngModel)]=\"query\"\n          id=\"listSearch\"\n        />\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th>\n                  <div class=\"th-content\"></div>\n                </th>\n                <th>\n                  <div class=\"th-content\">Titre</div>\n                </th>\n                <th>\n                  <div class=\"th-content\">Action</div>\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr\n                *ngFor=\"\n                  let serv of services\n                    | LockFilter: query\n                    | paginate: { itemsPerPage: 10, currentPage: p }\n                \"\n              >\n                <td>\n                  <div class=\"td-content customer-name\">\n                    <img src=\"../../assets/assets/img/90x90.jpg\" alt=\"avatar\" />\n                  </div>\n                </td>\n                <td>\n                  <div class=\"td-content product-brand\">{{ serv.name }}</div>\n                </td>\n                <td>\n                  <div class=\"td-content\">\n                    <button\n                      class=\"btn btn-success\"\n                      (click)=\"add(serv)\"\n                      value=\"ajouter\"\n                    >\n                      Ajouter\n                    </button>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing\">\n    <div class=\"widget widget-table-three\">\n      <div class=\"widget-heading\">\n        <h5 class=\"\">Services actif</h5>\n      </div>\n\n      <div class=\"widget-content\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"Search\"\n          [(ngModel)]=\"requery\"\n          id=\"listSearch\"\n        />\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th>\n                  <div class=\"th-content\">id</div>\n                </th>\n                <th>\n                  <div class=\"th-content\">Titre</div>\n                </th>\n                <th>\n                  <div class=\"th-content\">Paramétrage</div>\n                </th>\n                <th>\n                  <div class=\"th-content\">état</div>\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr\n                *ngFor=\"\n                  let service of myservices\n                    | LockFilter: requery\n                    | paginate: { itemsPerPage: 10, currentPage: p }\n                \"\n              >\n                <td>\n                  <div class=\"td-content product-name\">\n                    {{ service.id }}\n                  </div>\n                </td>\n                <td>\n                  <div class=\"td-content\">\n                    <span class=\"pricing\">{{ service.name }}</span>\n                  </div>\n                </td>\n                <td>\n                  <div class=\"td-content\">\n                    <span class=\"discount-pricing\">{{\n                      service.parametrage\n                    }}</span>\n                  </div>\n                </td>\n                <td>\n                  <div class=\"td-content\">\n                    <span class=\"discount-pricing\">\n                      <span *ngIf=\"service.value == 'on'\">\n                        <label class=\"switch\">\n                          <input\n                            type=\"checkbox\"\n                            (click)=\"up(service)\"\n                            checked\n                          />\n                          <span class=\"slider round\"></span>\n                        </label>\n                      </span>\n                      <span *ngIf=\"service.value != 'on'\">\n                        <label class=\"switch\">\n                          <input type=\"checkbox\" (click)=\"up(service)\" />\n                          <span class=\"slider round\"></span>\n                        </label>\n                      </span>\n                    </span>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<link\n  href=\"../../assets/plugins/apex/apexcharts.css\"\n  rel=\"stylesheet\"\n  type=\"text/css\"\n/>\n<link\n  href=\"../../assets/assets/css/dashboard/dash_1.css\"\n  rel=\"stylesheet\"\n  type=\"text/css\"\n/>\n<div class=\"row layout-top-spacing\">\n  <div class=\"col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing\">\n    <div class=\"widget widget-chart-one\">\n      <div class=\"widget-heading\">\n        <h5 class=\"\">Bienvenu</h5>\n        <ul class=\"tabs tab-pills\">\n          <li>\n            <a href=\"javascript:void(0);\" id=\"tb_1\" class=\"tabmenu\">{{\n              profile.displayName\n            }}</a>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"widget-content\">\n        <div class=\"tabs tab-content\">\n          <div id=\"content_1\" class=\"tabcontent\">\n            <div id=\"revenueMonthly\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing\">\n    <div class=\"widget widget-chart-two\">\n      <div class=\"widget-heading\">\n        <h5 class=\"\">Payment gate</h5>\n      </div>\n      <div class=\"widget-content\">\n        <div id=\"chart-2\" class=\"\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing\">\n    <div class=\"widget-two\">\n      <div class=\"widget-content\">\n        <div class=\"w-numeric-value\">\n          <div class=\"w-content\">\n            <span class=\"w-value\">{{ profile.displayName }}</span>\n            <span class=\"w-numeric-title\">{{ profile.email }}</span\n            ><br />\n            {{ profile.email }}<br /><br />\n            <span>\n              <img\n                src=\"{{ profile.photoURL }}\"\n                width=\"50%\"\n                height=\"100\"\n                alt=\"avatar\"\n            /></span>\n          </div>\n        </div>\n        <div class=\"w-chart\">\n          <div id=\"daily-sales\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing\">\n    <div class=\"widget-three\">\n      <div class=\"widget-heading\">\n        <h5 class=\"\">Summary</h5>\n      </div>\n      <div class=\"widget-content\">\n        <div class=\"order-summary\">\n          <div class=\"summary-list\">\n            <div class=\"w-icon\">\n              <svg\n                xmlns=\"http://www.w3.org/2000/svg\"\n                width=\"24\"\n                height=\"24\"\n                viewBox=\"0 0 24 24\"\n                fill=\"none\"\n                stroke=\"currentColor\"\n                stroke-width=\"2\"\n                stroke-linecap=\"round\"\n                stroke-linejoin=\"round\"\n                class=\"feather feather-shopping-bag\"\n              >\n                <path\n                  d=\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\"\n                ></path>\n                <line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line>\n                <path d=\"M16 10a4 4 0 0 1-8 0\"></path>\n              </svg>\n            </div>\n            <div class=\"w-summary-details\">\n              <div class=\"w-summary-info\">\n                <h6>Income</h6>\n                <p class=\"summary-count\">{{ income }}</p>\n              </div>\n\n              <div class=\"w-summary-stats\">\n                <div class=\"progress\">\n                  <div\n                    class=\"progress-bar bg-gradient-secondary\"\n                    role=\"progressbar\"\n                    style=\"width: 00%\"\n                    aria-valuenow=\"90\"\n                    aria-valuemin=\"0\"\n                    aria-valuemax=\"100\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"summary-list\">\n            <div class=\"w-icon\">\n              <svg\n                xmlns=\"http://www.w3.org/2000/svg\"\n                width=\"24\"\n                height=\"24\"\n                viewBox=\"0 0 24 24\"\n                fill=\"none\"\n                stroke=\"currentColor\"\n                stroke-width=\"2\"\n                stroke-linecap=\"round\"\n                stroke-linejoin=\"round\"\n                class=\"feather feather-tag\"\n              >\n                <path\n                  d=\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z\"\n                ></path>\n                <line x1=\"7\" y1=\"7\" x2=\"7\" y2=\"7\"></line>\n              </svg>\n            </div>\n            <div class=\"w-summary-details\">\n              <div class=\"w-summary-info\">\n                <h6>jours sur le site</h6>\n                <p class=\"summary-count\">{{ days }}</p>\n              </div>\n\n              <div class=\"w-summary-stats\">\n                <div class=\"progress\">\n                  <div\n                    class=\"progress-bar bg-gradient-success\"\n                    role=\"progressbar\"\n                    style=\"width: 20%\"\n                    aria-valuenow=\"65\"\n                    aria-valuemin=\"0\"\n                    aria-valuemax=\"100\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"summary-list\">\n            <div class=\"w-icon\">\n              <svg\n                xmlns=\"http://www.w3.org/2000/svg\"\n                width=\"24\"\n                height=\"24\"\n                viewBox=\"0 0 24 24\"\n                fill=\"none\"\n                stroke=\"currentColor\"\n                stroke-width=\"2\"\n                stroke-linecap=\"round\"\n                stroke-linejoin=\"round\"\n                class=\"feather feather-credit-card\"\n              >\n                <rect x=\"1\" y=\"4\" width=\"22\" height=\"16\" rx=\"2\" ry=\"2\"></rect>\n                <line x1=\"1\" y1=\"10\" x2=\"23\" y2=\"10\"></line>\n              </svg>\n            </div>\n            <div class=\"w-summary-details\">\n              <div class=\"w-summary-info\">\n                <h6>Services actif</h6>\n                <p class=\"summary-count\">{{ nb }}</p>\n              </div>\n\n              <div class=\"w-summary-stats\">\n                <div class=\"progress\">\n                  <div\n                    class=\"progress-bar bg-gradient-warning\"\n                    role=\"progressbar\"\n                    style=\"width: 5%\"\n                    aria-valuenow=\"80\"\n                    aria-valuemin=\"0\"\n                    aria-valuemax=\"100\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-xl-4 col-lg-12 col-md-6 col-sm-12 col-12 layout-spacing\">\n    <div class=\"widget-one\">\n      <div class=\"widget-content\">\n        <div class=\"w-numeric-value\">\n          <div class=\"w-icon\">\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"24\"\n              height=\"24\"\n              viewBox=\"0 0 24 24\"\n              fill=\"none\"\n              stroke=\"currentColor\"\n              stroke-width=\"2\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n              class=\"feather feather-shopping-cart\"\n            >\n              <circle cx=\"9\" cy=\"21\" r=\"1\"></circle>\n              <circle cx=\"20\" cy=\"21\" r=\"1\"></circle>\n              <path\n                d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"\n              ></path>\n            </svg>\n          </div>\n          <div class=\"w-content\">\n            <span class=\"w-value\">{{ gain }}</span>\n            <span class=\"w-numeric-title\">Total: {{ gain }} dt</span>\n          </div>\n        </div>\n        <div class=\"w-chart\">\n          <div id=\"total-orders\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-xl-5 col-lg-12 col-md-6 col-sm-12 col-12 layout-spacing\">\n    <div class=\"widget widget-table-one\">\n      <div class=\"widget-heading\">\n        <h5 class=\"\">Transactions</h5>\n      </div>\n\n      <div class=\"widget-content\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"Search\"\n          [(ngModel)]=\"query\"\n          id=\"listSearch\"\n        />\n        <div\n          *ngFor=\"\n            let serv of services\n              | LockFilter: query\n              | paginate: { itemsPerPage: 4, currentPage: p }\n          \"\n          class=\"transactions-list\"\n        >\n          <div class=\"t-item\">\n            <div class=\"t-company-name\">\n              <div class=\"t-icon\">\n                <div class=\"icon\">\n                  <svg\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    width=\"24\"\n                    height=\"24\"\n                    viewBox=\"0 0 24 24\"\n                    fill=\"none\"\n                    stroke=\"currentColor\"\n                    stroke-width=\"2\"\n                    stroke-linecap=\"round\"\n                    stroke-linejoin=\"round\"\n                    class=\"feather feather-home\"\n                  >\n                    <path\n                      d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"\n                    ></path>\n                    <polyline points=\"9 22 9 12 15 12 15 22\"></polyline>\n                  </svg>\n                </div>\n              </div>\n              <div class=\"t-name\">\n                <h4>{{ serv.name }}</h4>\n              </div>\n            </div>\n            <div class=\"t-rate rate-dec\">\n              <p>\n                <button\n                  class=\"btn btn-success\"\n                  (click)=\"add(serv)\"\n                  value=\"ajouter\"\n                >\n                  Ajouter\n                </button>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing\">\n    <div class=\"widget widget-activity-four\">\n      <div class=\"widget-heading\">\n        <h5 class=\"\">Résumé d'activité</h5>\n      </div>\n\n      <div class=\"widget-content\">\n        <div class=\"mt-container mx-auto\">\n          <div class=\"timeline-line\">\n            <div class=\"item-timeline timeline-primary\">\n              <div class=\"t-dot\" data-original-title=\"\" title=\"\"></div>\n              <div class=\"t-text\">\n                <p><span>login</span></p>\n                <span class=\"badge badge-danger\"></span>\n                <p class=\"t-time\">\n                  {{ cuse.metadata.lastSignInTime | date: \"short\" }}\n                </p>\n              </div>\n            </div>\n\n            <div class=\"item-timeline timeline-success\">\n              <div class=\"t-dot\" data-original-title=\"\" title=\"\"></div>\n              <div class=\"t-text\">\n                <p>\n                  inscrit le <a href=\"javascript:void(0);\">:</a>\n                  <a href=\"javascript:void(0);\">{{\n                    cuse.metadata.creationTime | date: \"short\"\n                  }}</a>\n                </p>\n                <span class=\"badge badge-success\">continuer</span>\n                <p class=\"t-time\">{{ days }} jours</p>\n              </div>\n            </div>\n\n            <div class=\"item-timeline timeline-danger\">\n              <div class=\"t-dot\" data-original-title=\"\" title=\"\"></div>\n              <div class=\"t-text\">\n                <p>\n                  Services <span>{{ nb }}</span>\n                </p>\n                <span class=\"badge badge-danger\">insuffisant!</span>\n                <p class=\"t-time\"><a href=\"account\">ajouter</a></p>\n              </div>\n            </div>\n\n            <div class=\"item-timeline timeline-dark\">\n              <div class=\"t-dot\" data-original-title=\"\" title=\"\"></div>\n              <div class=\"t-text\">\n                <p>\n                  {{ produits.length }}\n                  <a href=\"javascript:void(0);\">sites actif</a>\n                </p>\n                <span class=\"badge badge-success\">ajouter</span>\n                <p class=\"t-time\"><a href=\"websites\">ajouter</a></p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing\">\n    <div class=\"widget widget-account-invoice-one\">\n      <div class=\"widget-heading\">\n        <h5 class=\"\">Account Info</h5>\n      </div>\n\n      <div class=\"widget-content\">\n        <div class=\"invoice-box\">\n          <div class=\"acc-total-info\">\n            <h5>Balance</h5>\n            <p class=\"acc-amount\">{{ balance }}DT</p>\n          </div>\n\n          <div class=\"inv-detail\">\n            <div class=\"info-detail-1\">\n              <p>pourcentage dû</p>\n              <p>{{ balance * 0.2 }}</p>\n            </div>\n            <div class=\"info-detail-2\">\n              <p>Versement chaque</p>\n              <p>20/Mois</p>\n            </div>\n          </div>\n\n          <div class=\"inv-action\">\n            <a href=\"profile\" class=\"btn btn-dark\">Profile</a>\n            <a href=\"account\" class=\"btn btn-danger\">Moyens de paiement</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing\">\n    <div class=\"widget widget-table-two\">\n      <div class=\"widget-heading\">\n        <h5 class=\"\">Recent Orders</h5>\n      </div>\n\n      <div class=\"widget-content\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th>\n                  <div class=\"th-content\">id</div>\n                </th>\n                <th>\n                  <div class=\"th-content\">Titre</div>\n                </th>\n                <th>\n                  <div class=\"th-content\">Paramétrage</div>\n                </th>\n                <th>\n                  <div class=\"th-content\">état</div>\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr\n                (click)=\"gotoaccount()\"\n                *ngFor=\"\n                  let service of myservices\n                    | LockFilter: requery\n                    | paginate: { itemsPerPage: 10, currentPage: p }\n                \"\n              >\n                <td>\n                  <div class=\"td-content product-name\">\n                    {{ service.id }}\n                  </div>\n                </td>\n                <td>\n                  <div class=\"td-content\">\n                    <span class=\"pricing\">{{ service.name }}</span>\n                  </div>\n                </td>\n                <td>\n                  <div class=\"td-content\">\n                    <span class=\"discount-pricing\">{{\n                      service.parametrage\n                    }}</span>\n                  </div>\n                </td>\n                <td>\n                  <div class=\"td-content\">\n                    <span class=\"discount-pricing\">\n                      <span *ngIf=\"service.value == 'on'\">\n                        <label class=\"outline badge badge-success\">\n                          activé\n                        </label>\n                      </span>\n                      <span *ngIf=\"service.value != 'on'\">\n                        <label class=\"outline badge badge-warning\">\n                          désactivé\n                        </label>\n                      </span>\n                    </span>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing\">\n    <div class=\"widget widget-table-three\">\n      <div class=\"widget-heading\">\n        <h5 class=\"\">Active websites</h5>\n      </div>\n\n      <div class=\"widget-content\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th>\n                  <div class=\"th-content\">titre</div>\n                </th>\n\n                <th>\n                  <div class=\"th-content\">url</div>\n                </th>\n\n                <th>\n                  <div class=\"th-content\">Etat</div>\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr\n                (click)=\"gotoweb()\"\n                *ngFor=\"\n                  let us of produits\n                    | LockFilter: query\n                    | paginate: { itemsPerPage: 2, currentPage: p }\n                \"\n              >\n                <td>\n                  <div class=\"td-content customer-name\">\n                    <img\n                      src=\"../../assets/assets/img/90x90.jpg\"\n                      alt=\"avatar\"\n                    />{{ us.titre }}\n                  </div>\n                </td>\n                <td>\n                  <div class=\"td-content product-brand\">\n                    <a href=\"{{ us.url }}\"> {{ us.url }}</a>\n                  </div>\n                </td>\n\n                <td>\n                  <div class=\"td-content\">\n                    <span\n                      [hidden]=\"us.etat != 'en cours'\"\n                      class=\"badge outline-badge-primary\"\n                      >{{ us.etat }}</span\n                    >\n                    <span\n                      [hidden]=\"us.etat == 'en cours'\"\n                      class=\"badge outline-badge-warning\"\n                      >{{ us.etat }}</span\n                    >\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<script src=\"../../assets/plugins/apex/apexcharts.min.js\"></script>\n<script src=\"../../assets/assets/js/dashboard/dash_1.js\"></script>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/footer/footer.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/footer/footer.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"footer-wrapper\">\n    <div class=\"footer-section f-section-1\">\n        <p class=\"\">Copyright © 2020 <a target=\"_blank\" href=\"https://designreset.com\">DesignReset</a>, All rights reserved.</p>\n    </div>\n    <div class=\"footer-section f-section-2\">\n        <p class=\"\">Coded with <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-heart\"><path d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"></path></svg></p>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/layouts.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/layouts.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsLayoutsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <app-navbar></app-navbar>\n    <!--  END NAVBAR  -->\n\n    <!--  BEGIN MAIN CONTAINER  -->\n    <div class=\"main-container\" id=\"container\">\n\n        <div class=\"overlay\"></div>\n        <div class=\"search-overlay\"></div>\n\n        <!--  BEGIN SIDEBAR  -->\n        <app-sidebar></app-sidebar>\n        <!--  END SIDEBAR  -->\n        \n        <!--  BEGIN CONTENT AREA  -->\n        <div id=\"content\" class=\"main-content\">\n            <div class=\"layout-px-spacing\">\n\n                <router-outlet></router-outlet>\n\n            </div>\n            <div class=\"footer-wrapper\">\n                <div class=\"footer-section f-section-1\">\n                    <p class=\"\">Copyright © 2020 <a target=\"_blank\" href=\"https://www.protech-it.org/\">Protech-it</a>, All rights reserved.</p>\n                </div>\n                <div class=\"footer-section f-section-2\">\n                    <p class=\"\">Coded with <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-heart\"><path d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"></path></svg></p>\n                </div>\n            </div>\n        </div>\n        <!--  END CONTENT AREA  -->\n\n    </div>\n   ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/navbar/navbar.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/navbar/navbar.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--  BEGIN NAVBAR  -->\n<div class=\"header-container fixed-top\">\n  <header class=\"header navbar navbar-expand-sm\">\n    <ul class=\"navbar-item theme-brand flex-row text-center\">\n      <li class=\"nav-item theme-logo\">\n        <a href=\"/\">\n          <img\n            src=\"../../../assets/assets/img/90x90.jpg\"\n            class=\"navbar-logo\"\n            alt=\"logo\"\n          />\n        </a>\n      </li>\n      <li class=\"nav-item theme-text\">\n        <a href=\"/\" class=\"nav-link\"> Payment API </a>\n      </li>\n    </ul>\n\n    <ul class=\"navbar-item flex-row ml-md-0 ml-auto\">\n      <li class=\"nav-item align-self-center search-animated\">\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          width=\"24\"\n          height=\"24\"\n          viewBox=\"0 0 24 24\"\n          fill=\"none\"\n          stroke=\"currentColor\"\n          stroke-width=\"2\"\n          stroke-linecap=\"round\"\n          stroke-linejoin=\"round\"\n          class=\"feather feather-search toggle-search\"\n        >\n          <circle cx=\"11\" cy=\"11\" r=\"8\"></circle>\n          <line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line>\n        </svg>\n        <form class=\"form-inline search-full form-inline search\" role=\"search\">\n          <div class=\"search-bar\">\n            <input\n              type=\"text\"\n              class=\"form-control search-form-control ml-lg-auto\"\n              placeholder=\"Search...\"\n            />\n          </div>\n        </form>\n      </li>\n    </ul>\n\n    <ul class=\"navbar-item flex-row ml-md-auto\">\n      <li class=\"nav-item dropdown language-dropdown\">\n        <a\n          href=\"javascript:void(0);\"\n          class=\"nav-link dropdown-toggle\"\n          id=\"language-dropdown\"\n          data-toggle=\"dropdown\"\n          aria-haspopup=\"true\"\n          aria-expanded=\"false\"\n        >\n          <img\n            src=\"../../../assets/assets/img/ca.png\"\n            class=\"flag-width\"\n            alt=\"flag\"\n          />\n        </a>\n        <div\n          class=\"dropdown-menu position-absolute\"\n          aria-labelledby=\"language-dropdown\"\n        >\n          <a class=\"dropdown-item d-flex\" href=\"javascript:void(0);\"\n            ><img\n              src=\"../../../assets/assets/img/fr.png\"\n              class=\"flag-width\"\n              alt=\"flag\"\n            />\n            <span class=\"align-self-center\">&nbsp;French</span></a\n          >\n          <a class=\"dropdown-item d-flex\" href=\"javascript:void(0);\"\n            ><img\n              src=\"../../../assets/assets/img/ca.png\"\n              class=\"flag-width\"\n              alt=\"flag\"\n            />\n            <span class=\"align-self-center\">&nbsp;English</span></a\n          >\n        </div>\n      </li>\n\n      <li class=\"nav-item dropdown message-dropdown\">\n        <a\n          href=\"javascript:void(0);\"\n          class=\"nav-link dropdown-toggle\"\n          id=\"messageDropdown\"\n          data-toggle=\"dropdown\"\n          aria-haspopup=\"true\"\n          aria-expanded=\"false\"\n        >\n          <svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            width=\"24\"\n            height=\"24\"\n            viewBox=\"0 0 24 24\"\n            fill=\"none\"\n            stroke=\"currentColor\"\n            stroke-width=\"2\"\n            stroke-linecap=\"round\"\n            stroke-linejoin=\"round\"\n            class=\"feather feather-mail\"\n          >\n            <path\n              d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\"\n            ></path>\n            <polyline points=\"22,6 12,13 2,6\"></polyline>\n          </svg>\n        </a>\n        <div\n          class=\"dropdown-menu p-0 position-absolute\"\n          aria-labelledby=\"messageDropdown\"\n        >\n          <div class=\"\">\n            <a class=\"dropdown-item\">\n              <div class=\"\">\n                <div class=\"media\">\n                  <div class=\"user-img\">\n                    <img\n                      class=\"usr-img rounded-circle\"\n                      src=\"../../../assets/assets/img/90x90.jpg\"\n                      alt=\"profile\"\n                    />\n                  </div>\n                  <div class=\"media-body\">\n                    <div class=\"\">\n                      <h5 class=\"usr-name\">Username</h5>\n                      <p class=\"msg-title\">ACCOUNT UPDATE</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </a>\n            <a class=\"dropdown-item\">\n              <div class=\"\">\n                <div class=\"media\">\n                  <div class=\"user-img\">\n                    <img\n                      class=\"usr-img rounded-circle\"\n                      src=\"../../../assets/assets/img/90x90.jpg\"\n                      alt=\"profile\"\n                    />\n                  </div>\n                  <div class=\"media-body\">\n                    <div class=\"\">\n                      <h5 class=\"usr-name\">Daisy Anderson</h5>\n                      <p class=\"msg-title\">ACCOUNT UPDATE</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </a>\n            <a class=\"dropdown-item\">\n              <div class=\"\">\n                <div class=\"media\">\n                  <div class=\"user-img\">\n                    <img\n                      class=\"usr-img rounded-circle\"\n                      src=\"../../../assets/assets/img/90x90.jpg\"\n                      alt=\"profile\"\n                    />\n                  </div>\n                  <div class=\"media-body\">\n                    <div class=\"\">\n                      <h5 class=\"usr-name\">Oscar Garner</h5>\n                      <p class=\"msg-title\">ACCOUNT UPDATE</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n        </div>\n      </li>\n\n      <li class=\"nav-item dropdown notification-dropdown\">\n        <a\n          href=\"javascript:void(0);\"\n          class=\"nav-link dropdown-toggle\"\n          id=\"notificationDropdown\"\n          data-toggle=\"dropdown\"\n          aria-haspopup=\"true\"\n          aria-expanded=\"false\"\n        >\n          <svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            width=\"24\"\n            height=\"24\"\n            viewBox=\"0 0 24 24\"\n            fill=\"none\"\n            stroke=\"currentColor\"\n            stroke-width=\"2\"\n            stroke-linecap=\"round\"\n            stroke-linejoin=\"round\"\n            class=\"feather feather-bell\"\n          >\n            <path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path>\n            <path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path></svg\n          ><span class=\"badge badge-success\"></span>\n        </a>\n        <div\n          class=\"dropdown-menu position-absolute\"\n          aria-labelledby=\"notificationDropdown\"\n        >\n          <div class=\"notification-scroll\">\n            <div class=\"dropdown-item\">\n              <div class=\"media\">\n                <svg\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  width=\"24\"\n                  height=\"24\"\n                  viewBox=\"0 0 24 24\"\n                  fill=\"none\"\n                  stroke=\"currentColor\"\n                  stroke-width=\"2\"\n                  stroke-linecap=\"round\"\n                  stroke-linejoin=\"round\"\n                  class=\"feather feather-heart\"\n                >\n                  <path\n                    d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"\n                  ></path>\n                </svg>\n                <div class=\"media-body\">\n                  <div class=\"notification-para\">\n                    <span class=\"user-name\">Shaun Park</span> likes your photo.\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"dropdown-item\">\n              <div class=\"media\">\n                <svg\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  width=\"24\"\n                  height=\"24\"\n                  viewBox=\"0 0 24 24\"\n                  fill=\"none\"\n                  stroke=\"currentColor\"\n                  stroke-width=\"2\"\n                  stroke-linecap=\"round\"\n                  stroke-linejoin=\"round\"\n                  class=\"feather feather-share-2\"\n                >\n                  <circle cx=\"18\" cy=\"5\" r=\"3\"></circle>\n                  <circle cx=\"6\" cy=\"12\" r=\"3\"></circle>\n                  <circle cx=\"18\" cy=\"19\" r=\"3\"></circle>\n                  <line x1=\"8.59\" y1=\"13.51\" x2=\"15.42\" y2=\"17.49\"></line>\n                  <line x1=\"15.41\" y1=\"6.51\" x2=\"8.59\" y2=\"10.49\"></line>\n                </svg>\n                <div class=\"media-body\">\n                  <div class=\"notification-para\">\n                    <span class=\"user-name\">Kelly Young</span> shared your post\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"dropdown-item\">\n              <div class=\"media\">\n                <svg\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  width=\"24\"\n                  height=\"24\"\n                  viewBox=\"0 0 24 24\"\n                  fill=\"none\"\n                  stroke=\"currentColor\"\n                  stroke-width=\"2\"\n                  stroke-linecap=\"round\"\n                  stroke-linejoin=\"round\"\n                  class=\"feather feather-tag\"\n                >\n                  <path\n                    d=\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z\"\n                  ></path>\n                  <line x1=\"7\" y1=\"7\" x2=\"7\" y2=\"7\"></line>\n                </svg>\n                <div class=\"media-body\">\n                  <div class=\"notification-para\">\n                    <span class=\"user-name\">Kelly Young</span> mentioned you in\n                    comment.\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </li>\n\n      <li class=\"nav-item dropdown user-profile-dropdown\">\n        <a\n          href=\"javascript:void(0);\"\n          class=\"nav-link dropdown-toggle user\"\n          id=\"userProfileDropdown\"\n          data-toggle=\"dropdown\"\n          aria-haspopup=\"true\"\n          aria-expanded=\"true\"\n        >\n          <img src=\"../../../assets/assets/img/90x90.jpg\" alt=\"avatar\" />\n        </a>\n        <div\n          class=\"dropdown-menu position-absolute\"\n          aria-labelledby=\"userProfileDropdown\"\n        >\n          <div class=\"\">\n            <div class=\"dropdown-item\">\n              <a class=\"\" href=\"user_profile.html\"\n                ><svg\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  width=\"24\"\n                  height=\"24\"\n                  viewBox=\"0 0 24 24\"\n                  fill=\"none\"\n                  stroke=\"currentColor\"\n                  stroke-width=\"2\"\n                  stroke-linecap=\"round\"\n                  stroke-linejoin=\"round\"\n                  class=\"feather feather-user\"\n                >\n                  <path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"></path>\n                  <circle cx=\"12\" cy=\"7\" r=\"4\"></circle>\n                </svg>\n                My Profile</a\n              >\n            </div>\n            <div class=\"dropdown-item\">\n              <a class=\"\" href=\"apps_mailbox.html\"\n                ><svg\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  width=\"24\"\n                  height=\"24\"\n                  viewBox=\"0 0 24 24\"\n                  fill=\"none\"\n                  stroke=\"currentColor\"\n                  stroke-width=\"2\"\n                  stroke-linecap=\"round\"\n                  stroke-linejoin=\"round\"\n                  class=\"feather feather-inbox\"\n                >\n                  <polyline\n                    points=\"22 12 16 12 14 15 10 15 8 12 2 12\"\n                  ></polyline>\n                  <path\n                    d=\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"\n                  ></path>\n                </svg>\n                Inbox</a\n              >\n            </div>\n\n            <div class=\"dropdown-item\">\n              <a class=\"\" href=\"auth_login.html\"\n                ><svg\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  width=\"24\"\n                  height=\"24\"\n                  viewBox=\"0 0 24 24\"\n                  fill=\"none\"\n                  stroke=\"currentColor\"\n                  stroke-width=\"2\"\n                  stroke-linecap=\"round\"\n                  stroke-linejoin=\"round\"\n                  class=\"feather feather-log-out\"\n                >\n                  <path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"></path>\n                  <polyline points=\"16 17 21 12 16 7\"></polyline>\n                  <line x1=\"21\" y1=\"12\" x2=\"9\" y2=\"12\"></line>\n                </svg>\n                Sign Out</a\n              >\n            </div>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </header>\n</div>\n<!--  END NAVBAR  -->\n\n<!--  BEGIN NAVBAR  -->\n<div class=\"sub-header-container\">\n  <header class=\"header navbar navbar-expand-sm\">\n    <a\n      href=\"javascript:void(0);\"\n      class=\"sidebarCollapse\"\n      data-placement=\"bottom\"\n      ><svg\n        xmlns=\"http://www.w3.org/2000/svg\"\n        width=\"24\"\n        height=\"24\"\n        viewBox=\"0 0 24 24\"\n        fill=\"none\"\n        stroke=\"currentColor\"\n        stroke-width=\"2\"\n        stroke-linecap=\"round\"\n        stroke-linejoin=\"round\"\n        class=\"feather feather-menu\"\n      >\n        <line x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\"></line>\n        <line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line>\n        <line x1=\"3\" y1=\"18\" x2=\"21\" y2=\"18\"></line></svg\n    ></a>\n\n    <ul class=\"navbar-nav flex-row\">\n      <li>\n        <div class=\"page-header\">\n          <nav class=\"breadcrumb-one\" aria-label=\"breadcrumb\">\n            <ol class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\">\n                <a href=\"javascript:void(0);\">Dashboard</a>\n              </li>\n              <li class=\"breadcrumb-item active\" aria-current=\"page\">\n                <span>Sales</span>\n              </li>\n            </ol>\n          </nav>\n        </div>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav flex-row ml-auto\">\n      <li class=\"nav-item more-dropdown\">\n        <div class=\"dropdown custom-dropdown-icon\">\n          <a\n            class=\"dropdown-toggle btn\"\n            href=\"#\"\n            role=\"button\"\n            id=\"customDropdown\"\n            data-toggle=\"dropdown\"\n            aria-haspopup=\"true\"\n            aria-expanded=\"false\"\n            ><span>Settings</span>\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"24\"\n              height=\"24\"\n              viewBox=\"0 0 24 24\"\n              fill=\"none\"\n              stroke=\"currentColor\"\n              stroke-width=\"2\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n              class=\"feather feather-chevron-down\"\n            >\n              <polyline points=\"6 9 12 15 18 9\"></polyline></svg\n          ></a>\n\n          <div\n            class=\"dropdown-menu dropdown-menu-right\"\n            aria-labelledby=\"customDropdown\"\n          >\n            <a\n              class=\"dropdown-item\"\n              data-value=\"Settings\"\n              href=\"javascript:void(0);\"\n              >Settings</a\n            >\n            <a\n              class=\"dropdown-item\"\n              data-value=\"Mail\"\n              href=\"javascript:void(0);\"\n              >Mail</a\n            >\n            <a\n              class=\"dropdown-item\"\n              data-value=\"Print\"\n              href=\"javascript:void(0);\"\n              >Print</a\n            >\n            <a\n              class=\"dropdown-item\"\n              data-value=\"Download\"\n              href=\"javascript:void(0);\"\n              >Download</a\n            >\n            <a\n              class=\"dropdown-item\"\n              data-value=\"Share\"\n              href=\"javascript:void(0);\"\n              >Share</a\n            >\n          </div>\n        </div>\n      </li>\n    </ul>\n  </header>\n</div>\n<!--  END NAVBAR  -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/sidebar/sidebar.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/sidebar/sidebar.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--  BEGIN SIDEBAR  -->\n<div class=\"sidebar-wrapper sidebar-theme\">\n  <nav id=\"sidebar\">\n    <div class=\"shadow-bottom\"></div>\n    <ul class=\"list-unstyled menu-categories\" id=\"accordionExample\">\n      <li class=\"menu\">\n        <a\n          href=\"#dashboard\"\n          data-active=\"true\"\n          data-toggle=\"collapse\"\n          aria-expanded=\"true\"\n          class=\"dropdown-toggle\"\n        >\n          <div class=\"\">\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"24\"\n              height=\"24\"\n              viewBox=\"0 0 24 24\"\n              fill=\"none\"\n              stroke=\"currentColor\"\n              stroke-width=\"2\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n              class=\"feather feather-home\"\n            >\n              <path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path>\n              <polyline points=\"9 22 9 12 15 12 15 22\"></polyline>\n            </svg>\n            <span>Dashboard</span>\n          </div>\n          <div>\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"24\"\n              height=\"24\"\n              viewBox=\"0 0 24 24\"\n              fill=\"none\"\n              stroke=\"currentColor\"\n              stroke-width=\"2\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n              class=\"feather feather-chevron-right\"\n            >\n              <polyline points=\"9 18 15 12 9 6\"></polyline>\n            </svg>\n          </div>\n        </a>\n        <ul\n          class=\"collapse submenu\"\n          id=\"dashboard\"\n          data-parent=\"#accordionExample\"\n        >\n          <li>\n            <a href=\"dashboard\"> Mon tableau de bord </a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"menu\">\n        <a\n          href=\"#users\"\n          data-toggle=\"collapse\"\n          aria-expanded=\"false\"\n          class=\"dropdown-toggle\"\n        >\n          <div class=\"\">\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"24\"\n              height=\"24\"\n              viewBox=\"0 0 24 24\"\n              fill=\"none\"\n              stroke=\"currentColor\"\n              stroke-width=\"2\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n              class=\"feather feather-users\"\n            >\n              <path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path>\n              <circle cx=\"9\" cy=\"7\" r=\"4\"></circle>\n              <path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"></path>\n              <path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path>\n            </svg>\n            <span>Mon compte</span>\n          </div>\n          <div>\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"24\"\n              height=\"24\"\n              viewBox=\"0 0 24 24\"\n              fill=\"none\"\n              stroke=\"currentColor\"\n              stroke-width=\"2\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n              class=\"feather feather-chevron-right\"\n            >\n              <polyline points=\"9 18 15 12 9 6\"></polyline>\n            </svg>\n          </div>\n        </a>\n        <ul\n          class=\"collapse submenu list-unstyled\"\n          id=\"users\"\n          data-parent=\"#accordionExample\"\n        >\n          <li>\n            <a href=\"profile\"> Profile </a>\n          </li>\n          <li>\n            <a href=\"account\"> Parametres de payements </a>\n          </li>\n        </ul>\n      </li>\n\n      <li class=\"menu\">\n        <a\n          href=\"#app\"\n          data-toggle=\"collapse\"\n          aria-expanded=\"false\"\n          class=\"dropdown-toggle\"\n        >\n          <div class=\"\">\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"24\"\n              height=\"24\"\n              viewBox=\"0 0 24 24\"\n              fill=\"none\"\n              stroke=\"currentColor\"\n              stroke-width=\"2\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n              class=\"feather feather-cpu\"\n            >\n              <rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" ry=\"2\"></rect>\n              <rect x=\"9\" y=\"9\" width=\"6\" height=\"6\"></rect>\n              <line x1=\"9\" y1=\"1\" x2=\"9\" y2=\"4\"></line>\n              <line x1=\"15\" y1=\"1\" x2=\"15\" y2=\"4\"></line>\n              <line x1=\"9\" y1=\"20\" x2=\"9\" y2=\"23\"></line>\n              <line x1=\"15\" y1=\"20\" x2=\"15\" y2=\"23\"></line>\n              <line x1=\"20\" y1=\"9\" x2=\"23\" y2=\"9\"></line>\n              <line x1=\"20\" y1=\"14\" x2=\"23\" y2=\"14\"></line>\n              <line x1=\"1\" y1=\"9\" x2=\"4\" y2=\"9\"></line>\n              <line x1=\"1\" y1=\"14\" x2=\"4\" y2=\"14\"></line>\n            </svg>\n            <span>Mes produits et API</span>\n          </div>\n          <div>\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"24\"\n              height=\"24\"\n              viewBox=\"0 0 24 24\"\n              fill=\"none\"\n              stroke=\"currentColor\"\n              stroke-width=\"2\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n              class=\"feather feather-chevron-right\"\n            >\n              <polyline points=\"9 18 15 12 9 6\"></polyline>\n            </svg>\n          </div>\n        </a>\n        <ul\n          class=\"collapse submenu list-unstyled\"\n          id=\"app\"\n          data-parent=\"#accordionExample\"\n        >\n          <li>\n            <a href=\"tokens\"> API TOKENS </a>\n          </li>\n\n          <li>\n            <a href=\"products\">Mes produits</a>\n          </li>\n        </ul>\n      </li>\n\n      <li class=\"menu\">\n        <a (click)=\"out()\" href=\"login\">\n          <div class=\"\">\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"24\"\n              height=\"24\"\n              viewBox=\"0 0 24 24\"\n              fill=\"none\"\n              stroke=\"currentColor\"\n              stroke-width=\"2\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n              class=\"feather feather-lock\"\n            >\n              <rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"></rect>\n              <path d=\"M7 11V7a5 5 0 0 1 10 0v4\"></path>\n            </svg>\n            <span><a>Sign out</a></span>\n          </div>\n          <div></div>\n        </a>\n      </li>\n    </ul>\n    <!-- <div class=\"shadow-bottom\"></div> -->\n  </nav>\n</div>\n<!--  END SIDEBAR  -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no\"\n    />\n    <title>\n      Login Boxed | CORK - Multipurpose Bootstrap Dashboard Template\n    </title>\n    <link\n      rel=\"icon\"\n      type=\"image/x-icon\"\n      href=\"../../assets/assets/img/favicon.ico\"\n    />\n    <!-- BEGIN GLOBAL MANDATORY STYLES -->\n    <link\n      href=\"https://fonts.googleapis.com/css?family=Nunito:400,600,700\"\n      rel=\"stylesheet\"\n    />\n    <link\n      href=\"../../assets/bootstrap/css/bootstrap.min.css\"\n      rel=\"stylesheet\"\n      type=\"text/css\"\n    />\n    <link\n      href=\"../../assets/assets/css/plugins.css\"\n      rel=\"stylesheet\"\n      type=\"text/css\"\n    />\n    <link\n      href=\"../../assets/assets/css/authentication/form-2.css\"\n      rel=\"stylesheet\"\n      type=\"text/css\"\n    />\n    <!-- END GLOBAL MANDATORY STYLES -->\n    <link\n      rel=\"stylesheet\"\n      type=\"text/css\"\n      href=\"../../assets/assets/css/forms/theme-checkbox-radio.css\"\n    />\n    <link\n      rel=\"stylesheet\"\n      type=\"text/css\"\n      href=\"../../assets/assets/css/forms/switches.css\"\n    />\n  </head>\n  <body class=\"form\">\n    <div class=\"form-container outer\">\n      <div class=\"form-form\">\n        <div class=\"form-form-wrap\">\n          <div class=\"form-container\">\n            <div class=\"form-content\">\n              <h1 class=\"\">Se connecter</h1>\n              <p class=\"\">Veuillez vous connecter pour continuer.</p>\n\n              <form class=\"text-left\">\n                <div class=\"form\">\n                  <div id=\"username-field\" class=\"field-wrapper input\">\n                    <label for=\"username\">Email</label>\n                    <svg\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                      width=\"24\"\n                      height=\"24\"\n                      viewBox=\"0 0 24 24\"\n                      fill=\"none\"\n                      stroke=\"currentColor\"\n                      stroke-width=\"2\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                      class=\"feather feather-user\"\n                    >\n                      <path\n                        d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"\n                      ></path>\n                      <circle cx=\"12\" cy=\"7\" r=\"4\"></circle>\n                    </svg>\n                    <input\n                      id=\"username\"\n                      name=\"username\"\n                      type=\"text\"\n                      [(ngModel)]=\"email\"\n                      required\n                      class=\"form-control\"\n                      placeholder=\"e.g John_Doe\"\n                    />\n                  </div>\n\n                  <div id=\"password-field\" class=\"field-wrapper input mb-2\">\n                    <div class=\"d-flex justify-content-between\">\n                      <label for=\"password\">Mot de passe</label>\n                    </div>\n                    <svg\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                      width=\"24\"\n                      height=\"24\"\n                      viewBox=\"0 0 24 24\"\n                      fill=\"none\"\n                      stroke=\"currentColor\"\n                      stroke-width=\"2\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                      class=\"feather feather-lock\"\n                    >\n                      <rect\n                        x=\"3\"\n                        y=\"11\"\n                        width=\"18\"\n                        height=\"11\"\n                        rx=\"2\"\n                        ry=\"2\"\n                      ></rect>\n                      <path d=\"M7 11V7a5 5 0 0 1 10 0v4\"></path>\n                    </svg>\n                    <input\n                      id=\"password\"\n                      name=\"password\"\n                      type=\"password\"\n                      [(ngModel)]=\"password\"\n                      required\n                      class=\"form-control\"\n                      placeholder=\"Password\"\n                    />\n                    <svg\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                      width=\"24\"\n                      height=\"24\"\n                      viewBox=\"0 0 24 24\"\n                      fill=\"none\"\n                      stroke=\"currentColor\"\n                      stroke-width=\"2\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                      id=\"toggle-password\"\n                      class=\"feather feather-eye\"\n                    >\n                      <path\n                        d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"\n                      ></path>\n                      <circle cx=\"12\" cy=\"12\" r=\"3\"></circle>\n                    </svg>\n                  </div>\n                  <div class=\"d-sm-flex justify-content-between\">\n                    <div class=\"field-wrapper\">\n                      <button\n                        (click)=\"login()\"\n                        class=\"btn btn-primary\"\n                        value=\"\"\n                      >\n                        Connexion\n                      </button>\n                    </div>\n                  </div>\n\n                  <div class=\"division\">\n                    <span>Ou</span>\n                  </div>\n\n                  <div class=\"social\">\n                    <a\n                      href=\"javascript:void(0);\"\n                      (click)=\"authService.GoogleAuth()\"\n                      class=\"fa fa-google\"\n                    >\n                      <span class=\"brand-name\">Google</span>\n                    </a>\n                  </div>\n\n                  <p class=\"signup-link\">\n                    Pas encore membre?\n                    <a [routerLink]=\"['/register']\">Créer un compte</a>\n                  </p>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- BEGIN GLOBAL MANDATORY SCRIPTS -->\n    <script src=\"../../assets/assets/js/libs/jquery-3.1.1.min.js\"></script>\n    <script src=\"../../assets/bootstrap/js/popper.min.js\"></script>\n    <script src=\"../../assets/bootstrap/js/bootstrap.min.js\"></script>\n\n    <!-- END GLOBAL MANDATORY SCRIPTS -->\n    <script src=\"../../assets/assets/js/authentication/form-2.js\"></script>\n  </body>\n</html>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/merchants/merchants.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchants/merchants.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMerchantsMerchantsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row layout-top-spacing\">\n  <div class=\"col-xl-12 col-lg-12 col-sm-12  layout-spacing\">\n      <div class=\"widget-content widget-content-area br-6\">\n          <div class=\"table-responsive mb-4 mt-4\">\n            <table *ngIf=\"isShow\" class=\"table table-striped table-bordered table-sm row-border hover\" datatable [dtOptions]=\"dtOptions\">\n              <thead>\n                <tr>\n                  <th>FirstName</th>\n                  <th>LastName</th>\n                  <th>Email</th>\n                  <th>Mobile</th>\n                </tr>\n              </thead>\n              <tbody>\n              <tr *ngFor=\"let group of patients\">\n                    <td>{{group.prenom}}</td>\n                    <td>{{group.nom}}</td>\n                    <td>{{group.email}}</td>\n                    <td>{{group.telephone}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductsProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<link\n  href=\"../../assets/plugins/apex/apexcharts.css\"\n  rel=\"stylesheet\"\n  type=\"text/css\"\n/>\n\n<link\n  href=\"../../assets/assets/css/dashboard/dash_1.css\"\n  rel=\"stylesheet\"\n  type=\"text/css\"\n/>\n<div class=\"row layout-top-spacing\">\n  <div class=\"col-xl-4 col-lg-12 col-md-6 col-sm-12 col-12 layout-spacing\">\n    <div class=\"widget widget-table-one\">\n      <div class=\"widget-heading\">\n        <h5 class=\"\">Bienvenu à Polposhop</h5>\n      </div>\n\n      <div class=\"widget-content\">\n        <img src=\"../../assets/polpo.png\" width=\"100%\" />\n        <br /><br />\n        <marquee><h4>Gérer vos sites</h4></marquee><br /><br />\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-8 col-lg-12 col-md-6 col-sm-12 col-12 layout-spacing\">\n    <div class=\"widget widget-table-one\">\n      <div class=\"widget-heading\">\n        <h5 class=\"\">Articles</h5>\n      </div>\n\n      <div class=\"widget-content\">\n        <div class=\"transactions-list\">\n          <div class=\"t-item\">\n            <div class=\"t-company-name\">\n              <div class=\"t-icon\">\n                <div class=\"icon\">\n                  <svg\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    width=\"24\"\n                    height=\"24\"\n                    viewBox=\"0 0 24 24\"\n                    fill=\"none\"\n                    stroke=\"currentColor\"\n                    stroke-width=\"2\"\n                    stroke-linecap=\"round\"\n                    stroke-linejoin=\"round\"\n                    class=\"feather feather-home\"\n                  >\n                    <path\n                      d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"\n                    ></path>\n                    <polyline points=\"9 22 9 12 15 12 15 22\"></polyline>\n                  </svg>\n                </div>\n              </div>\n              <div class=\"t-name\">\n                <h4>Titre:</h4>\n                <p class=\"\">\n                  <input\n                    class=\"form-control\"\n                    [(ngModel)]=\"produit.titre\"\n                    type=\"text\"\n                    name=\"d\"\n                  />\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"transactions-list\">\n          <div class=\"t-item\">\n            <div class=\"t-company-name\">\n              <div class=\"t-icon\">\n                <div class=\"avatar avatar-xl\">\n                  <span class=\"avatar-title rounded-circle\">Q</span>\n                </div>\n              </div>\n              <div class=\"t-name\">\n                <h4>Prix</h4>\n                <input\n                  class=\"form-control\"\n                  [(ngModel)]=\"produit.prix\"\n                  type=\"number\"\n                  name=\"q\"\n                />\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"transactions-list\">\n          <div class=\"t-item\">\n            <div class=\"t-company-name\">\n              <div class=\"t-icon\">\n                <div class=\"avatar avatar-xl\">\n                  <span class=\"avatar-title rounded-circle\">P</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"transactions-list\">\n          <div class=\"t-item\">\n            <div class=\"t-company-name\">\n              <div class=\"t-icon\">\n                <div class=\"avatar avatar-xl\">\n                  <span class=\"avatar-title rounded-circle\">P</span>\n                </div>\n              </div>\n              <div class=\"t-name\">\n                <h4>Description</h4>\n                <textarea\n                  class=\"form-control\"\n                  [(ngModel)]=\"produit.description\"\n                  name=\"des\"\n                ></textarea>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"transactions-list\">\n          <div class=\"t-item\">\n            <div class=\"t-company-name\">\n              <div class=\"t-icon\">\n                <div class=\"icon\">\n                  <svg\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    width=\"24\"\n                    height=\"24\"\n                    viewBox=\"0 0 24 24\"\n                    fill=\"none\"\n                    stroke=\"currentColor\"\n                    stroke-width=\"2\"\n                    stroke-linecap=\"round\"\n                    stroke-linejoin=\"round\"\n                    class=\"feather feather-home\"\n                  >\n                    <path\n                      d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"\n                    ></path>\n                    <polyline points=\"9 22 9 12 15 12 15 22\"></polyline>\n                  </svg>\n                </div>\n              </div>\n              <div class=\"t-name\">\n                <h4>Photo</h4>\n                <input\n                  class=\"form-control\"\n                  (change)=\"onFileSelected($event)\"\n                  type=\"file\"\n                  [(ngModel)]=\"produit.photo\"\n                  id=\"file\"\n                  #produitPhoto\n                  name=\"image\"\n                  autocomplete=\"off\"\n                />\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"transactions-list\">\n          <div class=\"t-item\">\n            <div class=\"t-company-name\">\n              <div *ngIf=\"!ss\" class=\"t-name\">\n                <input\n                  type=\"button\"\n                  (click)=\"add()\"\n                  class=\"btn btn-primary\"\n                  value=\"ajouter\"\n                />\n              </div>\n              &nbsp;&nbsp;&nbsp;\n              <div class=\"t-name\">\n                <input\n                  type=\"button\"\n                  (click)=\"annuler()\"\n                  class=\"btn btn-warning\"\n                  value=\"annuler\"\n                />&nbsp;&nbsp;&nbsp;\n              </div>\n              <div *ngIf=\"ss\" class=\"t-name\">\n                <input\n                  type=\"button\"\n                  (click)=\"up()\"\n                  class=\"btn btn-primary\"\n                  value=\"modifier\"\n                />\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing\">\n    <div class=\"widget widget-table-two\">\n      <div class=\"widget-heading\">\n        <h5 class=\"\">Vos sites</h5>\n      </div>\n\n      <div class=\"widget-content\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"Search\"\n          [(ngModel)]=\"query\"\n          id=\"listSearch\"\n        />\n\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th>\n                  <div class=\"th-content\">titre</div>\n                </th>\n\n                <th>\n                  <div class=\"th-content\">prix</div>\n                </th>\n\n                <th>\n                  <div class=\"th-content\">enregistré depuis:</div>\n                </th>\n                <th>\n                  <div class=\"th-content\">Acheteur actuelle:</div>\n                </th>\n                <th>\n                  <div class=\"th-content\">Etat</div>\n                </th>\n                <th>\n                  <div class=\"th-content\">Action</div>\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr\n                *ngFor=\"\n                  let us of produits\n                    | LockFilter: query\n                    | paginate: { itemsPerPage: 2, currentPage: p }\n                \"\n              >\n                <td>\n                  <div class=\"td-content customer-name\">\n                    <img\n                      src=\"../../assets/assets/img/90x90.jpg\"\n                      alt=\"avatar\"\n                    />{{ us.titre }}\n                  </div>\n                </td>\n                <td>\n                  <div class=\"td-content product-brand\">{{ us.prix }}</div>\n                </td>\n\n                <td>\n                  <div class=\"td-content pricing\">\n                    <span class=\"\">{{ us.dt | date: \"short\" }}</span>\n                  </div>\n                </td>\n                <td>\n                  <div class=\"td-content pricing\">\n                    <span class=\"\">{{ us.acheteur }}-</span>\n                  </div>\n                </td>\n\n                <td>\n                  <div class=\"td-content\">\n                    <span\n                      [hidden]=\"us.etat != 'en cours'\"\n                      class=\"badge outline-badge-primary\"\n                      >{{ us.etat }}</span\n                    >\n                    <span\n                      [hidden]=\"us.etat == 'en cours'\"\n                      class=\"badge outline-badge-warning\"\n                      >{{ us.etat }}</span\n                    >\n                  </div>\n                </td>\n                <td>\n                  <div class=\"td-content pricing\">\n                    <span class=\"\"\n                      ><button (click)=\"select(us)\" class=\"btn btn-success\">\n                        Séléctionner\n                      </button></span\n                    >\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing\">\n    <div class=\"widget widget-table-two\">\n      <div class=\"widget-heading\">\n        <h5 class=\"\">Séléction</h5>\n      </div>\n\n      <div class=\"widget-content\">\n        <img [src]=\"selected.photo\" width=\"200\" height=\"200\" /><br />\n        <span align=\"center\">\n          <label class=\"switch\">\n            <input\n              type=\"checkbox\"\n              [(ngModel)]=\"state\"\n              (change)=\"test(selected)\"\n              checked\n            />\n            <span class=\"slider round\"></span> </label\n          ><br />\n          <button (click)=\"delete(selected.id)\" class=\"btn btn-danger\">\n            supprimer\n          </button></span\n        >\n      </div>\n    </div>\n  </div>\n</div>\n<script src=\"../../assets/plugins/apex/apexcharts.min.js\"></script>\n<script src=\"../../assets/assets/js/dashboard/dash_1.js\"></script>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<link\n  href=\"../../assets/assets/css/users/user-profile.css\"\n  rel=\"stylesheet\"\n  type=\"text/css\"\n/>\n\n<div class=\"row layout-spacing\">\n  <!-- Content -->\n  <div class=\"col-xl-4 col-lg-6 col-md-5 col-sm-12 layout-top-spacing\">\n    <div class=\"user-profile layout-spacing\">\n      <div class=\"widget-content widget-content-area\">\n        <div class=\"d-flex justify-content-between\">\n          <h3 class=\"\">Profile</h3>\n          <a (click)=\"ed()\" class=\"mt-2 edit-profile\">\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"24\"\n              height=\"24\"\n              viewBox=\"0 0 24 24\"\n              fill=\"none\"\n              stroke=\"currentColor\"\n              stroke-width=\"2\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n              class=\"feather feather-edit-3\"\n            >\n              <path d=\"M12 20h9\"></path>\n              <path\n                d=\"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z\"\n              ></path></svg\n          ></a>\n        </div>\n        <div class=\"text-center user-info\">\n          <img\n            src=\"{{ profile.photoURL }}\"\n            width=\"50%\"\n            height=\"100\"\n            alt=\"avatar\"\n          />\n          <p *ngIf=\"edit\" class=\"\">\n            <input\n              class=\"form-control\"\n              (change)=\"onFileSelected($event)\"\n              type=\"file\"\n              id=\"file\"\n              #produitPhoto\n              name=\"image\"\n              autocomplete=\"off\"\n            />\n          </p>\n          <p *ngIf=\"!edit\" class=\"\">{{ profile.displayName }}</p>\n          <p *ngIf=\"edit\" class=\"\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              [(ngModel)]=\"profile.displayName\"\n            />\n          </p>\n        </div>\n        <div class=\"user-info-list\">\n          <div class=\"\">\n            <ul class=\"contacts-block list-unstyled\">\n              <li class=\"contacts-block__item\">\n                <svg\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  width=\"24\"\n                  height=\"24\"\n                  viewBox=\"0 0 24 24\"\n                  fill=\"none\"\n                  stroke=\"currentColor\"\n                  stroke-width=\"2\"\n                  stroke-linecap=\"round\"\n                  stroke-linejoin=\"round\"\n                  class=\"feather feather-coffee\"\n                >\n                  <path d=\"M18 8h1a4 4 0 0 1 0 8h-1\"></path>\n                  <path d=\"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z\"></path>\n                  <line x1=\"6\" y1=\"1\" x2=\"6\" y2=\"4\"></line>\n                  <line x1=\"10\" y1=\"1\" x2=\"10\" y2=\"4\"></line>\n                  <line x1=\"14\" y1=\"1\" x2=\"14\" y2=\"4\"></line>\n                </svg>\n                Merchant\n              </li>\n              <li class=\"contacts-block__item\">\n                <svg\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  width=\"24\"\n                  height=\"24\"\n                  viewBox=\"0 0 24 24\"\n                  fill=\"none\"\n                  stroke=\"currentColor\"\n                  stroke-width=\"2\"\n                  stroke-linecap=\"round\"\n                  stroke-linejoin=\"round\"\n                  class=\"feather feather-calendar\"\n                >\n                  <rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect>\n                  <line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line>\n                  <line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line>\n                  <line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line></svg\n                ><span>{{ cuse.metadata.creationTime | date: \"short\" }}</span>\n              </li>\n              <li class=\"contacts-block__item\">\n                <svg\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  width=\"24\"\n                  height=\"24\"\n                  viewBox=\"0 0 24 24\"\n                  fill=\"none\"\n                  stroke=\"currentColor\"\n                  stroke-width=\"2\"\n                  stroke-linecap=\"round\"\n                  stroke-linejoin=\"round\"\n                  class=\"feather feather-map-pin\"\n                >\n                  <path\n                    d=\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\"\n                  ></path>\n                  <circle cx=\"12\" cy=\"10\" r=\"3\"></circle>\n                </svg>\n                <span *ngIf=\"!edit\">{{ profile.adresse }}</span>\n                <span *ngIf=\"edit\">\n                  <textarea\n                    class=\"form-control\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"profile.adresse\"\n                  ></textarea>\n                </span>\n              </li>\n              <li class=\"contacts-block__item\">\n                <a href=\"mailto:{{ profile.email }}\"\n                  ><svg\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    width=\"18\"\n                    height=\"24\"\n                    viewBox=\"0 0 24 24\"\n                    fill=\"none\"\n                    stroke=\"currentColor\"\n                    stroke-width=\"2\"\n                    stroke-linecap=\"round\"\n                    stroke-linejoin=\"round\"\n                    class=\"feather feather-mail\"\n                  >\n                    <path\n                      d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\"\n                    ></path>\n                    <polyline points=\"22,6 12,13 2,6\"></polyline>\n                  </svg>\n                  <span *ngIf=\"!edit\">{{ profile.email }}</span>\n                  <span *ngIf=\"edit\">\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      [(ngModel)]=\"profile.email\"\n                      name=\"email\"\n                    />\n                  </span>\n                </a>\n              </li>\n              <li class=\"contacts-block__item\">\n                <svg\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  width=\"24\"\n                  height=\"24\"\n                  viewBox=\"0 0 24 24\"\n                  fill=\"none\"\n                  stroke=\"currentColor\"\n                  stroke-width=\"2\"\n                  stroke-linecap=\"round\"\n                  stroke-linejoin=\"round\"\n                  class=\"feather feather-phone\"\n                >\n                  <path\n                    d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"\n                  ></path>\n                </svg>\n\n                <span *ngIf=\"!edit\">{{ profile.phoneNumber }}</span>\n                <span *ngIf=\"edit\">\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"profile.phoneNumber\"\n                    name=\"phone\"\n                  />\n                </span>\n              </li>\n              <li class=\"contacts-block__item\">\n                <ul class=\"list-inline\">\n                  <li class=\"list-inline-item\">\n                    <div class=\"social-icon\">\n                      <svg\n                        xmlns=\"http://www.w3.org/2000/svg\"\n                        width=\"24\"\n                        height=\"24\"\n                        viewBox=\"0 0 24 24\"\n                        fill=\"none\"\n                        stroke=\"currentColor\"\n                        stroke-width=\"2\"\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                        class=\"feather feather-facebook\"\n                      >\n                        <path\n                          d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\"\n                        ></path>\n                      </svg>\n                    </div>\n                  </li>\n                  <li class=\"list-inline-item\">\n                    <div class=\"social-icon\">\n                      <svg\n                        xmlns=\"http://www.w3.org/2000/svg\"\n                        width=\"24\"\n                        height=\"24\"\n                        viewBox=\"0 0 24 24\"\n                        fill=\"none\"\n                        stroke=\"currentColor\"\n                        stroke-width=\"2\"\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                        class=\"feather feather-twitter\"\n                      >\n                        <path\n                          d=\"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z\"\n                        ></path>\n                      </svg>\n                    </div>\n                  </li>\n                  <li class=\"list-inline-item\">\n                    <div class=\"social-icon\">\n                      <svg\n                        xmlns=\"http://www.w3.org/2000/svg\"\n                        width=\"24\"\n                        height=\"24\"\n                        viewBox=\"0 0 24 24\"\n                        fill=\"none\"\n                        stroke=\"currentColor\"\n                        stroke-width=\"2\"\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                        class=\"feather feather-linkedin\"\n                      >\n                        <path\n                          d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\"\n                        ></path>\n                        <rect x=\"2\" y=\"9\" width=\"4\" height=\"12\"></rect>\n                        <circle cx=\"4\" cy=\"4\" r=\"2\"></circle>\n                      </svg>\n                    </div>\n                  </li>\n                </ul>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"education layout-spacing\">\n      <div class=\"widget-content widget-content-area\">\n        <h3 class=\"\">Last connexion</h3>\n        <div class=\"timeline-alter\">\n          <div class=\"item-timeline\">\n            <div class=\"t-meta-date\">\n              <p class=\"\">{{ cuse.metadata.creationTime | date: \"short\" }}</p>\n            </div>\n            <div class=\"t-dot\"></div>\n            <div class=\"t-text\">\n              <p>subscribed</p>\n            </div>\n          </div>\n          <div class=\"item-timeline\">\n            <div class=\"t-meta-date\">\n              <p class=\"\">{{ cuse.metadata.lastSignInTime | date: \"short\" }}</p>\n            </div>\n            <div class=\"t-dot\"></div>\n            <div class=\"t-text\">\n              <p>Last login for user</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-xl-8 col-lg-6 col-md-7 col-sm-12 layout-top-spacing\">\n    <div class=\"skills layout-spacing\">\n      <div class=\"widget-content widget-content-area\">\n        <h3 class=\"\">Ancienté et transactions</h3>\n        <div class=\"progress br-30\">\n          <div\n            class=\"progress-bar bg-primary\"\n            role=\"progressbar\"\n            style=\"width: {{ days * 2 }}%;\"\n            aria-valuenow=\"25\"\n            aria-valuemin=\"0\"\n            aria-valuemax=\"100\"\n          >\n            <div class=\"progress-title\">\n              <span>Periode</span> <span>{{ days }} jours</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"progress br-30\">\n          <div\n            class=\"progress-bar bg-primary\"\n            role=\"progressbar\"\n            style=\"width:  {{ serves }}%;\"\n            aria-valuenow=\"25\"\n            aria-valuemin=\"0\"\n            aria-valuemax=\"100\"\n          >\n            <div class=\"progress-title\">\n              <span>Services actif</span> <span>{{ serves }}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"bio layout-spacing\">\n      <div class=\"widget-content widget-content-area\">\n        <h3 class=\"\">Bio</h3>\n\n        <p *ngIf=\"!edit\">\n          {{ profile.bio }}\n        </p>\n        <p *ngIf=\"edit\">\n          <textarea class=\"form-control\" [(ngModel)]=\"profile.bio\"></textarea>\n        </p>\n\n        <div class=\"bio-skill-box\">\n          <div class=\"row\">\n            <div class=\"col-12 col-xl-12 col-lg-12 mb-xl-5 mb-5\">\n              <div class=\"d-flex b-skills\">\n                <div></div>\n                <div class=\"\">\n                  <h5>Votre profile est votre identité</h5>\n                  <p *ngIf=\"edit\">\n                    <button\n                      class=\"btn btn-primary\"\n                      (click)=\"uptodate()\"\n                      value=\"update\"\n                    >\n                      Update\n                    </button>\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no\"\n    />\n    <title>\n      Subscribe\n    </title>\n    <link\n      rel=\"icon\"\n      type=\"image/x-icon\"\n      href=\"../../assets/assets/img/favicon.ico\"\n    />\n    <!-- BEGIN GLOBAL MANDATORY STYLES -->\n    <link\n      href=\"https://fonts.googleapis.com/css?family=Nunito:400,600,700\"\n      rel=\"stylesheet\"\n    />\n    <link\n      href=\"../../assets/bootstrap/css/bootstrap.min.css\"\n      rel=\"stylesheet\"\n      type=\"text/css\"\n    />\n    <link\n      href=\"../../assets/assets/css/plugins.css\"\n      rel=\"stylesheet\"\n      type=\"text/css\"\n    />\n    <link\n      href=\"../../assets/assets/css/authentication/form-2.css\"\n      rel=\"stylesheet\"\n      type=\"text/css\"\n    />\n    <!-- END GLOBAL MANDATORY STYLES -->\n    <link\n      rel=\"stylesheet\"\n      type=\"text/css\"\n      href=\"../../assets/assets/css/forms/theme-checkbox-radio.css\"\n    />\n    <link\n      rel=\"stylesheet\"\n      type=\"text/css\"\n      href=\"../../assets/assets/css/forms/switches.css\"\n    />\n  </head>\n  <body class=\"form\">\n    <div class=\"form-container outer\">\n      <div class=\"form-form\">\n        <div class=\"form-form-wrap\">\n          <div class=\"form-container\">\n            <div class=\"form-content\">\n              <h1 class=\"\">Register</h1>\n              <p class=\"signup-link register\">\n                Already have an account? <a [routerLink]=\"['/login']\">Log in</a>\n              </p>\n              <form class=\"text-left\">\n                <div class=\"form\">\n                  <div id=\"username-field\" class=\"field-wrapper input\">\n                    <label for=\"username\">USERNAME</label>\n                    <svg\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                      width=\"24\"\n                      height=\"24\"\n                      viewBox=\"0 0 24 24\"\n                      fill=\"none\"\n                      stroke=\"currentColor\"\n                      stroke-width=\"2\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                      class=\"feather feather-user\"\n                    >\n                      <path\n                        d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"\n                      ></path>\n                      <circle cx=\"12\" cy=\"7\" r=\"4\"></circle>\n                    </svg>\n                    <input\n                      id=\"username\"\n                      [(ngModel)]=\"user.displayName\"\n                      #userName\n                      required\n                      name=\"username\"\n                      type=\"text\"\n                      class=\"form-control\"\n                      placeholder=\"Username\"\n                    />\n                  </div>\n                  <div id=\"phone-field\" class=\"field-wrapper input\">\n                    <label for=\"phone\">Phone</label>\n                    <svg\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                      width=\"24\"\n                      height=\"24\"\n                      viewBox=\"0 0 24 24\"\n                      fill=\"none\"\n                      stroke=\"currentColor\"\n                      stroke-width=\"2\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                      class=\"feather feather-at-sign register\"\n                    >\n                      <circle cx=\"12\" cy=\"12\" r=\"4\"></circle>\n                      <path\n                        d=\"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"\n                      ></path>\n                    </svg>\n                    <input\n                      id=\"phone\"\n                      name=\"phone\"\n                      #phoneNumber\n                      required\n                      [(ngModel)]=\"user.phoneNumber\"\n                      type=\"text\"\n                      value=\"\"\n                      class=\"form-control\"\n                      placeholder=\"Phone\"\n                    />\n                  </div>\n                  <div id=\"adresse-field\" class=\"field-wrapper input\">\n                    <label for=\"adresse\">adresse</label>\n                    <svg\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                      width=\"24\"\n                      height=\"24\"\n                      viewBox=\"0 0 24 24\"\n                      fill=\"none\"\n                      stroke=\"currentColor\"\n                      stroke-width=\"2\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                      class=\"feather feather-at-sign register\"\n                    >\n                      <circle cx=\"12\" cy=\"12\" r=\"4\"></circle>\n                      <path\n                        d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"\n                      ></path>\n                    </svg>\n                    <input\n                      id=\"adresse\"\n                      name=\"adresse\"\n                      #adresse\n                      required\n                      [(ngModel)]=\"user.adresse\"\n                      type=\"text\"\n                      value=\"\"\n                      class=\"form-control\"\n                      placeholder=\"adresse\"\n                    />\n                  </div>\n\n                  <div id=\"email-field\" class=\"field-wrapper input\">\n                    <label for=\"email\">EMAIL</label>\n                    <svg\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                      width=\"24\"\n                      height=\"24\"\n                      viewBox=\"0 0 24 24\"\n                      fill=\"none\"\n                      stroke=\"currentColor\"\n                      stroke-width=\"2\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                      class=\"feather feather-at-sign register\"\n                    >\n                      <circle cx=\"12\" cy=\"12\" r=\"4\"></circle>\n                      <path\n                        d=\"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94\"\n                      ></path>\n                    </svg>\n                    <input\n                      id=\"email\"\n                      name=\"email\"\n                      #userEmail\n                      required\n                      [(ngModel)]=\"user.email\"\n                      type=\"text\"\n                      value=\"\"\n                      class=\"form-control\"\n                      placeholder=\"Email\"\n                    />\n                  </div>\n\n                  <div id=\"password-field\" class=\"field-wrapper input mb-2\">\n                    <div class=\"d-flex justify-content-between\">\n                      <label for=\"password\">PASSWORD</label>\n                      <a href=\"#\" class=\"forgot-pass-link\">Forgot Password?</a>\n                    </div>\n                    <svg\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                      width=\"24\"\n                      height=\"24\"\n                      viewBox=\"0 0 24 24\"\n                      fill=\"none\"\n                      stroke=\"currentColor\"\n                      stroke-width=\"2\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                      class=\"feather feather-lock\"\n                    >\n                      <rect\n                        x=\"3\"\n                        y=\"11\"\n                        width=\"18\"\n                        height=\"11\"\n                        rx=\"2\"\n                        ry=\"2\"\n                      ></rect>\n                      <path d=\"M7 11V7a5 5 0 0 1 10 0v4\"></path>\n                    </svg>\n                    <input\n                      id=\"password\"\n                      name=\"password\"\n                      type=\"password\"\n                      #userPwd\n                      required\n                      [(ngModel)]=\"user.password\"\n                      class=\"form-control\"\n                      placeholder=\"Password\"\n                    />\n                    <svg\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                      width=\"24\"\n                      height=\"24\"\n                      viewBox=\"0 0 24 24\"\n                      fill=\"none\"\n                      stroke=\"currentColor\"\n                      stroke-width=\"2\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                      id=\"toggle-password\"\n                      class=\"feather feather-eye\"\n                    >\n                      <path\n                        d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"\n                      ></path>\n                      <circle cx=\"12\" cy=\"12\" r=\"3\"></circle>\n                    </svg>\n                  </div>\n\n                  <div class=\"field-wrapper terms_condition\">\n                    <div class=\"n-chk\">\n                      <label class=\"new-control new-checkbox checkbox-primary\">\n                        <input type=\"checkbox\" class=\"new-control-input\" />\n                        <span class=\"new-control-indicator\"></span\n                        ><span\n                          >I agree to the\n                          <a href=\"javascript:void(0);\">\n                            terms and conditions\n                          </a></span\n                        >\n                      </label>\n                    </div>\n                  </div>\n\n                  <div class=\"d-sm-flex justify-content-between\">\n                    <div class=\"field-wrapper\">\n                      <button\n                        (click)=\"signup()\"\n                        class=\"btn btn-primary\"\n                        value=\"\"\n                      >\n                        Get Started!\n                      </button>\n                    </div>\n                  </div>\n\n                  <div class=\"division\">\n                    <span>OR</span>\n                  </div>\n\n                  <div class=\"social\">\n                    <a\n                      href=\"javascript:void(0);\"\n                      (click)=\"authService.GoogleAuth()\"\n                      class=\"fa fa-google\"\n                    >\n                      <span class=\"brand-name\">Google</span>\n                    </a>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- BEGIN GLOBAL MANDATORY SCRIPTS -->\n    <script src=\"../../assets/assets/js/libs/jquery-3.1.1.min.js\"></script>\n    <script src=\"../../assets/bootstrap/js/popper.min.js\"></script>\n    <script src=\"../../assets/bootstrap/js/bootstrap.min.js\"></script>\n\n    <!-- END GLOBAL MANDATORY SCRIPTS -->\n    <script src=\"../../assets/assets/js/authentication/form-2.js\"></script>\n  </body>\n</html>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sales/sales.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sales/sales.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSalesSalesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row layout-spacing\">\n  <!-- Content -->\n\n  <div class=\"col-xl-12 col-lg-6 col-md-7 col-sm-12 layout-top-spacing\">\n    <div class=\"skills layout-spacing\">\n      <div class=\"widget-content widget-content-area\">\n        <h3 class=\"\">Transaction:</h3>\n        <div class=\"bio-skill-box\">\n          <div class=\"row\">\n            <div class=\"col-12 col-xl-12 col-lg-12 mb-xl-5 mb-5\">\n              <div class=\"\">\n                <div></div>\n                <div class=\"\">\n                  <h5>Your Recent transactions</h5>\n\n                  <div\n                    class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing\"\n                  >\n                    <div class=\"widget widget-table-two\">\n                      <div class=\"widget-heading\">\n                        <h5 class=\"\">Recent Orders</h5>\n                      </div>\n\n                      <div class=\"widget-content\">\n                        <div class=\"table-responsive\">\n                          <table class=\"table\">\n                            <thead>\n                              <tr>\n                                <th>\n                                  <div class=\"th-content\">id</div>\n                                </th>\n\n                                <th>\n                                  <div class=\"th-content\">receiver_id</div>\n                                </th>\n\n                                <th>\n                                  <div class=\"th-content\">date:</div>\n                                </th>\n                                <th>\n                                  <div class=\"th-content\">Status</div>\n                                </th>\n                                <th>\n                                  <div class=\"th-content\">Amount</div>\n                                  <div class=\"th-content\">type</div>\n                                </th>\n                              </tr>\n                            </thead>\n                            <tbody>\n                              <tr>\n                                <td>\n                                  <div class=\"td-content customer-name\"></div>\n                                </td>\n                                <td>\n                                  <div class=\"td-content product-brand\"></div>\n                                </td>\n                                <td>\n                                  <div class=\"td-content product-brand\"></div>\n                                </td>\n\n                                <td>\n                                  <div class=\"td-content pricing\">\n                                    <span class=\"\"></span>\n                                  </div>\n                                </td>\n\n                                <td>\n                                  <div class=\"td-content\">\n                                    <span\n                                      class=\"badge outline-badge-primary\"\n                                    ></span>\n                                  </div>\n                                </td>\n                                <td>\n                                  <div class=\"td-content pricing\">\n                                    <span class=\"\"></span>\n                                  </div>\n                                </td>\n                              </tr>\n                            </tbody>\n                          </table>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services/services.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/services/services.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppServicesServicesServicesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>services works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tokens/tokens.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tokens/tokens.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTokensTokensComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row layout-spacing\">\n  <!-- Content -->\n\n  <div class=\"col-xl-12 col-lg-6 col-md-7 col-sm-12 layout-top-spacing\">\n    <div class=\"skills layout-spacing\">\n      <div class=\"widget-content widget-content-area\">\n        <h3 class=\"\">tokens:</h3>\n        <div class=\"bio-skill-box\">\n          <div class=\"row\">\n            <div class=\"col-12 col-xl-12 col-lg-12 mb-xl-5 mb-5\">\n              <div class=\"\">\n                <div></div>\n                <div class=\"\">\n                  <h5>Your tokens</h5>\n\n                  <p>\n                    API token<input\n                      name=\"token\"\n                      class=\"form-control\"\n                      [(ngModel)]=\"profile.token\"\n                    /><br />\n                    secret token<input\n                      name=\"secret\"\n                      class=\"form-control\"\n                      [(ngModel)]=\"profile.apisecret\"\n                    />\n                    <button\n                      class=\"btn btn-primary\"\n                      (click)=\"renew()\"\n                      value=\"update\"\n                    >\n                      Update / Generate\n                    </button>\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/account/account.component.css":
  /*!***********************************************!*\
    !*** ./src/app/account/account.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountAccountComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/account/account.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/account/account.component.ts ***!
    \**********************************************/

  /*! exports provided: AccountComponent */

  /***/
  function srcAppAccountAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountComponent", function () {
      return AccountComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/services.service */
    "./src/app/services/services.service.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");

    var AccountComponent = /*#__PURE__*/function () {
      function AccountComponent(api, storage, auth, afs, // Inject Firestore service
      afAuth) {
        _classCallCheck(this, AccountComponent);

        this.api = api;
        this.storage = storage;
        this.auth = auth;
        this.afs = afs;
        this.afAuth = afAuth;
        this.has = 0;
        this.exist = false;
        this.search = "";
        this.p = 1;
      }

      _createClass(AccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getservices();
          this.getmyservices();
        }
      }, {
        key: "getservices",
        value: function getservices() {
          var _this = this;

          this.api.read_Service().subscribe(function (data) {
            _this.services = data.map(function (e) {
              return {
                id: e.payload.doc.id,
                // tslint:disable-next-line: no-string-literal
                name: e.payload.doc.data()["name"],
                // tslint:disable-next-line: no-string-literal
                // tslint:disable-next-line: no-string-literal
                parametrage: e.payload.doc.data()["parametrage"],
                // tslint:disable-next-line: no-string-literal
                value: e.payload.doc.data()["value"]
              };
            });
            console.log(_this.services);
          });
        }
      }, {
        key: "getmyservices",
        value: function getmyservices() {
          var _this2 = this;

          this.api.read_myService().subscribe(function (data) {
            _this2.myservices = data.map(function (e) {
              return {
                id: e.payload.doc.id,
                // tslint:disable-next-line: no-string-literal
                name: e.payload.doc.data()["name"],
                // tslint:disable-next-line: no-string-literal
                // tslint:disable-next-line: no-string-literal
                parametrage: e.payload.doc.data()["parametrage"],
                // tslint:disable-next-line: no-string-literal
                value: e.payload.doc.data()["value"]
              };
            });
            console.log("mine: ", _this2.myservices);
          });
        }
      }, {
        key: "add",
        value: function add(serv) {
          var _iterator = _createForOfIteratorHelper(this.myservices),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var s = _step.value;

              if (serv.name == s.name) {
                this.exist = true;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          if (this.exist == false) {
            var se = Object.assign({}, serv);
            this.api.create_NewService(se);
          } else {
            alert("le service " + serv.name + " existe déjà"); //window.location.reload();

            this.exist = false;
            this.requery = serv.name;
          }
        }
      }, {
        key: "up",
        value: function up(service) {
          var message = "";

          if (service.value == "on") {
            service.value = "off";
            message = "vous êtes sûre de vouloir désactiver le service " + service.name;
          } else {
            service.value = "on";
            message = "vous êtes sûre de vouloir activer le service " + service.name;
          }

          if (confirm(message)) {
            var se = Object.assign({}, service);
            this.api.update_Service(service.id, se);
          }
        }
      }]);

      return AccountComponent;
    }();

    AccountComponent.ctorParameters = function () {
      return [{
        type: _services_services_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]
      }];
    };

    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-account",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./account.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./account.component.css */
      "./src/app/account/account.component.css"))["default"]]
    })], AccountComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _layouts_layouts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./layouts/layouts.component */
    "./src/app/layouts/layouts.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _merchants_merchants_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./merchants/merchants.component */
    "./src/app/merchants/merchants.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./products/products.component */
    "./src/app/products/products.component.ts");
    /* harmony import */


    var _tokens_tokens_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./tokens/tokens.component */
    "./src/app/tokens/tokens.component.ts");
    /* harmony import */


    var _sales_sales_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./sales/sales.component */
    "./src/app/sales/sales.component.ts");
    /* harmony import */


    var _account_account_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./account/account.component */
    "./src/app/account/account.component.ts");

    var routes = [{
      path: "",
      redirectTo: "/dashboard",
      pathMatch: "full"
    }, {
      path: "",
      component: _layouts_layouts_component__WEBPACK_IMPORTED_MODULE_4__["LayoutsComponent"],
      children: [{
        path: "dashboard",
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
      }, {
        path: "merchants",
        component: _merchants_merchants_component__WEBPACK_IMPORTED_MODULE_6__["MerchantsComponent"]
      }, {
        path: "profile",
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]
      }, {
        path: "products",
        component: _products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"]
      }, {
        path: "tokens",
        component: _tokens_tokens_component__WEBPACK_IMPORTED_MODULE_10__["TokensComponent"]
      }, {
        path: "sales",
        component: _sales_sales_component__WEBPACK_IMPORTED_MODULE_11__["SalesComponent"]
      }, {
        path: "account",
        component: _account_account_component__WEBPACK_IMPORTED_MODULE_12__["AccountComponent"]
      }]
    }, {
      path: "login",
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }, {
      path: "register",
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]
    }, {
      path: "**",
      redirectTo: "/dashboard"
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'payment';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _layouts_layouts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layouts/layouts.component */
    "./src/app/layouts/layouts.component.ts");
    /* harmony import */


    var _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./layouts/navbar/navbar.component */
    "./src/app/layouts/navbar/navbar.component.ts");
    /* harmony import */


    var _layouts_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./layouts/sidebar/sidebar.component */
    "./src/app/layouts/sidebar/sidebar.component.ts");
    /* harmony import */


    var _merchants_merchants_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./merchants/merchants.component */
    "./src/app/merchants/merchants.component.ts");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/index.js");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./layouts/footer/footer.component */
    "./src/app/layouts/footer/footer.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./products/products.component */
    "./src/app/products/products.component.ts");
    /* harmony import */


    var _tokens_tokens_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./tokens/tokens.component */
    "./src/app/tokens/tokens.component.ts");
    /* harmony import */


    var _sales_sales_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./sales/sales.component */
    "./src/app/sales/sales.component.ts");
    /* harmony import */


    var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./pipes/search.pipe */
    "./src/app/pipes/search.pipe.ts");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var _account_account_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./account/account.component */
    "./src/app/account/account.component.ts");
    /* harmony import */


    var _services_services_services_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./services/services/services.component */
    "./src/app/services/services/services.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _layouts_layouts_component__WEBPACK_IMPORTED_MODULE_7__["LayoutsComponent"], _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _layouts_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"], _merchants_merchants_component__WEBPACK_IMPORTED_MODULE_10__["MerchantsComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"], _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_22__["ProductsComponent"], _tokens_tokens_component__WEBPACK_IMPORTED_MODULE_23__["TokensComponent"], _sales_sales_component__WEBPACK_IMPORTED_MODULE_24__["SalesComponent"], _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_25__["SearchPipe"], _account_account_component__WEBPACK_IMPORTED_MODULE_27__["AccountComponent"], _services_services_services_component__WEBPACK_IMPORTED_MODULE_28__["ServicesComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_26__["NgxPaginationModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__["AngularFireStorageModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebaseConfig), _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabaseModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestoreModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/classes/produit.ts":
  /*!************************************!*\
    !*** ./src/app/classes/produit.ts ***!
    \************************************/

  /*! exports provided: Produit */

  /***/
  function srcAppClassesProduitTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Produit", function () {
      return Produit;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Produit = function Produit() {
      _classCallCheck(this, Produit);
    };
    /***/

  },

  /***/
  "./src/app/classes/user.ts":
  /*!*********************************!*\
    !*** ./src/app/classes/user.ts ***!
    \*********************************/

  /*! exports provided: User */

  /***/
  function srcAppClassesUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User() {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.component.css":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */


    var _services_services_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/services.service */
    "./src/app/services/services.service.ts");
    /* harmony import */


    var _classes_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../classes/user */
    "./src/app/classes/user.ts");
    /* harmony import */


    var _services_produit_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/produit.service */
    "./src/app/services/produit.service.ts");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(auth, afs, // Inject Firestore service
      afAuth, userService, storage, api, produitService) {
        _classCallCheck(this, DashboardComponent);

        this.auth = auth;
        this.afs = afs;
        this.afAuth = afAuth;
        this.userService = userService;
        this.storage = storage;
        this.api = api;
        this.produitService = produitService;
        this.search = "";
        this.p = 1;
        this.gain = 0;
        this.days = 0;
        this.photo = "";
        this.edit = false;
        this.nb = 0;
        this.balance = 0;
        this.exist = false;
        this.transactions = 0;
        this.incomes = 0;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userdet();
          this.cuse = null;
          this.cuser = localStorage.getItem("user");
          console.log(this.cuser); //console.log("user: ", this.cuser.photoURL);

          this.user = new _classes_user__WEBPACK_IMPORTED_MODULE_8__["User"]();
          this.users = [];
          this.getservices();
          this.getUsers();
          this.getproduits();
          this.getmyservices(); // console.log(this.myservices.length);
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this3 = this;

          this.userService.read_User().subscribe(function (data) {
            _this3.users = data.map(function (e) {
              return {
                uid: e.payload.doc.id,
                email: e.payload.doc.data()["email"],
                photoURL: e.payload.doc.data()["photoURL"],
                displayName: e.payload.doc.data()["displayName"],
                emailVerified: e.payload.doc.data()["emailVerified"],
                phoneNumber: e.payload.doc.data()["phoneNumber"],
                adresse: e.payload.doc.data()["adresse"],
                bio: e.payload.doc.data()["bio"]
              };
            }); // console.log(this.users);

            var _iterator2 = _createForOfIteratorHelper(_this3.users),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var u = _step2.value;

                if (_this3.cuser === u.uid) {
                  /* localStorage.setItem("profile", JSON.stringify(u));
                  this.profile = JSON.parse(localStorage.getItem("profile"));*/
                  _this3.profile = u; // console.log(this.profile);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          });
        }
      }, {
        key: "getproduits",
        value: function getproduits() {
          var _this4 = this;

          this.produitService.read_mesProduits().subscribe(function (data) {
            _this4.produits = data.map(function (e) {
              return {
                id: e.payload.doc.id,
                // tslint:disable-next-line: no-string-literal
                titre: e.payload.doc.data()["titre"],
                // tslint:disable-next-line: no-string-literal
                // tslint:disable-next-line: no-string-literal
                url: e.payload.doc.data()["url"],
                // tslint:disable-next-line: no-string-literal
                description: e.payload.doc.data()["description"],
                etat: e.payload.doc.data()["etat"],
                // tslint:disable-next-line: no-string-literal
                photo: e.payload.doc.data()["photo"],
                prixact: e.payload.doc.data()["prixact"],
                prix: e.payload.doc.data()["prix"],
                dt: e.payload.doc.data()["dt"]
              };
            });
            console.log(_this4.produits);

            var _iterator3 = _createForOfIteratorHelper(_this4.produits),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var p = _step3.value;
                _this4.gain = _this4.gain + parseInt(p.prixact);
                _this4.balance = _this4.balance + (parseInt(p.prixact) - parseInt(p.prix));
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          });
        }
      }, {
        key: "userdet",
        value: function userdet() {
          var _this5 = this;

          this.afAuth.authState.subscribe(function (user) {
            if (user) {
              _this5.userData = user; //  console.log("my datas:", JSON.stringify(this.userData));

              _this5.cuse = _this5.userData;
              var d = new Date();
              console.log("date: ", d);
              var jour = new Date(_this5.cuse.metadata.creationTime);
              console.log("sub: ", jour);
              console.log(jour.toUTCString());
              _this5.days += d.getDate() - jour.getDate();
              _this5.days += (d.getMonth() - jour.getMonth()) * 30;
              _this5.days += (d.getFullYear() - jour.getFullYear()) * 356;
              console.log("difference: ", _this5.days); // localStorage.setItem("user", JSON.stringify(this.userData));
              //JSON.parse(localStorage.getItem("user"));
            } else {
              //localStorage.setItem("user", null);
              //JSON.parse(localStorage.getItem("user"));
              window.location.replace("login");
            }
          });
        }
      }, {
        key: "getservices",
        value: function getservices() {
          var _this6 = this;

          this.api.read_Service().subscribe(function (data) {
            _this6.services = data.map(function (e) {
              return {
                id: e.payload.doc.id,
                // tslint:disable-next-line: no-string-literal
                name: e.payload.doc.data()["name"],
                // tslint:disable-next-line: no-string-literal
                // tslint:disable-next-line: no-string-literal
                parametrage: e.payload.doc.data()["parametrage"],
                // tslint:disable-next-line: no-string-literal
                value: e.payload.doc.data()["value"]
              };
            });
            console.log(_this6.services);
          });
        }
      }, {
        key: "gotoaccount",
        value: function gotoaccount() {
          window.location.replace("account");
        }
      }, {
        key: "gotoweb",
        value: function gotoweb() {
          window.location.replace("websites");
        }
      }, {
        key: "add",
        value: function add(serv) {
          var _iterator4 = _createForOfIteratorHelper(this.myservices),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var s = _step4.value;

              if (serv.name == s.name) {
                this.exist = true;
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          if (this.exist == false) {
            var se = Object.assign({}, serv);
            this.api.create_NewService(se);
          } else {
            alert("le service " + serv.name + " existe déjà"); //window.location.reload();

            this.exist = false;
            this.query = serv.name;
          }
        }
      }, {
        key: "getmyservices",
        value: function getmyservices() {
          var _this7 = this;

          this.api.read_myService().subscribe(function (data) {
            _this7.myservices = data.map(function (e) {
              return {
                id: e.payload.doc.id,
                // tslint:disable-next-line: no-string-literal
                name: e.payload.doc.data()["name"],
                // tslint:disable-next-line: no-string-literal
                // tslint:disable-next-line: no-string-literal
                parametrage: e.payload.doc.data()["parametrage"],
                // tslint:disable-next-line: no-string-literal
                value: e.payload.doc.data()["value"]
              };
            });
            console.log("mine: ", _this7.myservices);
            _this7.nb = _this7.myservices.length;
            localStorage.setItem("services", _this7.nb.toString()); //alert(this.nb);
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]
      }, {
        type: _services_services_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"]
      }, {
        type: _services_produit_service__WEBPACK_IMPORTED_MODULE_9__["Produitservice"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-dashboard",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/dashboard/dashboard.component.css"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/layouts/footer/footer.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/layouts/footer/footer.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutsFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/layouts/footer/footer.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/layouts/footer/footer.component.ts ***!
    \****************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppLayoutsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/layouts/footer/footer.component.css"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/layouts/layouts.component.css":
  /*!***********************************************!*\
    !*** ./src/app/layouts/layouts.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutsLayoutsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvbGF5b3V0cy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/layouts/layouts.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/layouts/layouts.component.ts ***!
    \**********************************************/

  /*! exports provided: LayoutsComponent */

  /***/
  function srcAppLayoutsLayoutsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutsComponent", function () {
      return LayoutsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LayoutsComponent = /*#__PURE__*/function () {
      function LayoutsComponent() {
        _classCallCheck(this, LayoutsComponent);
      }

      _createClass(LayoutsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutsComponent;
    }();

    LayoutsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-layouts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./layouts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/layouts.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./layouts.component.css */
      "./src/app/layouts/layouts.component.css"))["default"]]
    })], LayoutsComponent);
    /***/
  },

  /***/
  "./src/app/layouts/navbar/navbar.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/layouts/navbar/navbar.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutsNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/layouts/navbar/navbar.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/layouts/navbar/navbar.component.ts ***!
    \****************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppLayoutsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/navbar/navbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/layouts/navbar/navbar.component.css"))["default"]]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/layouts/sidebar/sidebar.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/layouts/sidebar/sidebar.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutsSidebarSidebarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layouts/sidebar/sidebar.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/layouts/sidebar/sidebar.component.ts ***!
    \******************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppLayoutsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent(auth, afs, // Inject Firestore service
      afAuth, userService) {
        _classCallCheck(this, SidebarComponent);

        this.auth = auth;
        this.afs = afs;
        this.afAuth = afAuth;
        this.userService = userService;
        this.days = 0;
        this.edit = false;
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "out",
        value: function out() {
          this.auth.SignOut();
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-sidebar",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/sidebar/sidebar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.css */
      "./src/app/layouts/sidebar/sidebar.component.css"))["default"]]
    })], SidebarComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          this.authService.SignIn(this.email, this.password);
          this.email = this.password = "";
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-login",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/merchants/merchants.component.css":
  /*!***************************************************!*\
    !*** ./src/app/merchants/merchants.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMerchantsMerchantsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lcmNoYW50cy9tZXJjaGFudHMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/merchants/merchants.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/merchants/merchants.component.ts ***!
    \**************************************************/

  /*! exports provided: Patient, MerchantsComponent */

  /***/
  function srcAppMerchantsMerchantsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Patient", function () {
      return Patient;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MerchantsComponent", function () {
      return MerchantsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js"); //import { PlanningService } from './../shared/services/planning.service';


    var Patient = function Patient() {
      _classCallCheck(this, Patient);
    };

    var MerchantsComponent = /*#__PURE__*/function () {
      function MerchantsComponent(firestore) {
        _classCallCheck(this, MerchantsComponent);

        this.firestore = firestore;
        this.dtOptions = {};
      }

      _createClass(MerchantsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          //Get Data from firebase Database
          this.data = this.firestore.collection("users").snapshotChanges();
          this.data.subscribe(function (patient) {
            _this8.patients = patient.map(function (item) {
              var uid = item.payload.doc.id;
              var data = item.payload.doc.data();
              return Object.assign({
                uid: uid
              }, data);
            });
            console.log(_this8.patients);
            _this8.dtOptions = {
              pagingType: "full_numbers",
              pageLength: 5,
              lengthMenu: [5, 10, 25],
              processing: true
            };
            _this8.isShow = true;
          });
        }
      }]);

      return MerchantsComponent;
    }();

    MerchantsComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    MerchantsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-merchants",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./merchants.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/merchants/merchants.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./merchants.component.css */
      "./src/app/merchants/merchants.component.css"))["default"]]
    })], MerchantsComponent);
    /***/
  },

  /***/
  "./src/app/pipes/search.pipe.ts":
  /*!**************************************!*\
    !*** ./src/app/pipes/search.pipe.ts ***!
    \**************************************/

  /*! exports provided: SearchPipe */

  /***/
  function srcAppPipesSearchPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPipe", function () {
      return SearchPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SearchPipe = /*#__PURE__*/function () {
      function SearchPipe() {
        _classCallCheck(this, SearchPipe);
      }

      _createClass(SearchPipe, [{
        key: "transform",
        value: function transform(value, args) {
          if (!value) {
            return null;
          }

          if (!args) {
            return value;
          }

          args = args.toLowerCase(); // tslint:disable-next-line: only-arrow-functions

          return value.filter(function (item) {
            return JSON.stringify(item).toLowerCase().includes(args);
          });
        }
      }]);

      return SearchPipe;
    }();

    SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'LockFilter'
    })], SearchPipe);
    /***/
  },

  /***/
  "./src/app/products/products.component.css":
  /*!*************************************************!*\
    !*** ./src/app/products/products.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductsProductsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/products/products.component.ts":
  /*!************************************************!*\
    !*** ./src/app/products/products.component.ts ***!
    \************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_produit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/produit.service */
    "./src/app/services/produit.service.ts");
    /* harmony import */


    var _classes_produit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../classes/produit */
    "./src/app/classes/produit.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");

    var ProductsComponent = /*#__PURE__*/function () {
      function ProductsComponent(produitService, storage, auth, afs, // Inject Firestore service
      afAuth) {
        _classCallCheck(this, ProductsComponent);

        this.produitService = produitService;
        this.storage = storage;
        this.auth = auth;
        this.afs = afs;
        this.afAuth = afAuth;
        this.s = 0;
        this.search = "";
        this.p = 1;
        this.selectedFile = null;
        this.fb = "";
        this.ss = false;
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.produit = new _classes_produit__WEBPACK_IMPORTED_MODULE_5__["Produit"]();
          this.getproduits();
          this.userdet();
          this.selected = new _classes_produit__WEBPACK_IMPORTED_MODULE_5__["Produit"]();
          this.selected.photo = "https://firebasestorage.googleapis.com/v0/b/paygate-2883d.appspot.com/o/90x90.jpg?alt=media&token=99d0cf7f-3b95-46c6-a501-673e69a92a9b";
        }
      }, {
        key: "userdet",
        value: function userdet() {
          var _this9 = this;

          this.afAuth.authState.subscribe(function (user) {
            if (user) {
              _this9.userData = user; //  console.log("my datas:", JSON.stringify(this.userData));

              _this9.cuse = _this9.userData;
              _this9.produit.vendeur = user.displayName; // localStorage.setItem("user", JSON.stringify(this.userData));
              //JSON.parse(localStorage.getItem("user"));
            } else {
              //localStorage.setItem("user", null);
              //JSON.parse(localStorage.getItem("user"));
              window.location.replace("login");
            }
          });
        }
      }, {
        key: "test",
        value: function test(selected) {
          this.produit.photo = selected.photo;

          if (this.state == true) {
            this.produit.etat = "en cours";
          } else this.produit.etat = "désactiver";
        }
      }, {
        key: "onFileSelected",
        value: function onFileSelected(event) {
          var _this10 = this;

          var n = Date.now();
          var file = event.target.files[0];
          var filePath = "/Products/".concat(n);
          var fileRef = this.storage.ref(filePath);
          var task = this.storage.upload("/Products/".concat(n), file);
          task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            _this10.downloadURL = fileRef.getDownloadURL();

            _this10.downloadURL.subscribe(function (url) {
              if (url) {
                _this10.fb = url;
              }

              console.log(_this10.fb);
            });
          })).subscribe(function (url) {
            if (url) {
              console.log(url);
            }
          });
        }
      }, {
        key: "add",
        value: function add() {
          this.produit.photo = this.fb;
          this.produit.id_vd = localStorage.getItem("user");
          this.produit.etat = "en cours";
          this.produit.prixact = this.produit.prix;
          this.produit.dt = Date();
          var pr = Object.assign({}, this.produit);
          this.produitService.create_NewProduit(pr);
          alert("ajouté avec succés");
          this.produit = new _classes_produit__WEBPACK_IMPORTED_MODULE_5__["Produit"](); // window.location.reload();
        }
      }, {
        key: "up",
        value: function up() {
          this.produit.photo = this.fb;
          this.produit.id_vd = localStorage.getItem("user");
          this.produit.dt = Date();
          var pr = Object.assign({}, this.produit);
          this.produitService.update_Produit(this.produit.id, pr); //  alert("ajouté avec succés");

          this.produit = new _classes_produit__WEBPACK_IMPORTED_MODULE_5__["Produit"](); // window.location.reload();
        }
      }, {
        key: "getproduits",
        value: function getproduits() {
          var _this11 = this;

          this.produitService.read_mesProduits().subscribe(function (data) {
            _this11.produits = data.map(function (e) {
              return {
                id: e.payload.doc.id,
                // tslint:disable-next-line: no-string-literal
                titre: e.payload.doc.data()["titre"],
                // tslint:disable-next-line: no-string-literal
                // tslint:disable-next-line: prix-string-literal
                prix: e.payload.doc.data()["prix"],
                prixact: e.payload.doc.data()["prixact"],
                acheteur: e.payload.doc.data()["acheteur"],
                // tslint:disable-next-line: no-string-literal
                description: e.payload.doc.data()["description"],
                etat: e.payload.doc.data()["etat"],
                // tslint:disable-next-line: no-string-literal
                photo: e.payload.doc.data()["photo"],
                dt: e.payload.doc.data()["dt"]
              };
            });
            console.log(_this11.produits);
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          if (confirm("êtes vous sûre de vouloir supprimer?")) {
            this.produitService.delete_Produit(id); //window.location.replace('gestion');

            this.selected = new _classes_produit__WEBPACK_IMPORTED_MODULE_5__["Produit"]();
          }
        }
      }, {
        key: "annuler",
        value: function annuler() {
          this.produit = new _classes_produit__WEBPACK_IMPORTED_MODULE_5__["Produit"]();
          this.selected = new _classes_produit__WEBPACK_IMPORTED_MODULE_5__["Produit"]();
          this.ss = false;
        }
      }, {
        key: "select",
        value: function select(us) {
          this.ss = true;
          this.selected = us;
          this.produit = us;

          if (us.etat == "en cours") {
            this.state = true;
          } else this.state = false;
        }
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ctorParameters = function () {
      return [{
        type: _services_produit_service__WEBPACK_IMPORTED_MODULE_4__["Produitservice"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"]
      }];
    };

    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-products",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./products.component.css */
      "./src/app/products/products.component.css"))["default"]]
    })], ProductsComponent);
    /***/
  },

  /***/
  "./src/app/profile/profile.component.css":
  /*!***********************************************!*\
    !*** ./src/app/profile/profile.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _classes_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../classes/user */
    "./src/app/classes/user.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_services_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/services.service */
    "./src/app/services/services.service.ts");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(auth, afs, // Inject Firestore service
      afAuth, userService, storage, api) {
        _classCallCheck(this, ProfileComponent);

        this.auth = auth;
        this.afs = afs;
        this.afAuth = afAuth;
        this.userService = userService;
        this.storage = storage;
        this.api = api;
        this.days = 0;
        this.photo = "";
        this.edit = false;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cuse = null;
          this.cuser = localStorage.getItem("user");
          this.serves = parseInt(localStorage.getItem("services")); //(this.serves);

          console.log(this.cuser); //console.log("user: ", this.cuser.photoURL);

          this.user = new _classes_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
          this.users = [];
          this.getUsers();
          this.userdet(); //console.log(this.myservices.length);
        }
      }, {
        key: "userdet",
        value: function userdet() {
          var _this12 = this;

          this.afAuth.authState.subscribe(function (user) {
            if (user) {
              _this12.userData = user; //  console.log("my datas:", JSON.stringify(this.userData));

              _this12.cuse = _this12.userData;
              var d = new Date();
              console.log("date: ", d);
              var jour = new Date(_this12.cuse.metadata.creationTime);
              console.log("sub: ", jour);
              console.log(jour.toUTCString());
              _this12.days += d.getDate() - jour.getDate();
              _this12.days += (d.getMonth() - jour.getMonth()) * 30;
              _this12.days += (d.getFullYear() - jour.getFullYear()) * 356;
              console.log("difference: ", _this12.days); // localStorage.setItem("user", JSON.stringify(this.userData));
              //JSON.parse(localStorage.getItem("user"));
            } else {
              //localStorage.setItem("user", null);
              //JSON.parse(localStorage.getItem("user"));
              window.location.replace("login");
            }
          });
        }
      }, {
        key: "getmyservices",
        value: function getmyservices() {
          var _this13 = this;

          this.api.read_myService().subscribe(function (data) {
            _this13.myservices = data.map(function (e) {
              return {
                id: e.payload.doc.id,
                // tslint:disable-next-line: no-string-literal
                name: e.payload.doc.data()["name"],
                // tslint:disable-next-line: no-string-literal
                // tslint:disable-next-line: no-string-literal
                parametrage: e.payload.doc.data()["parametrage"],
                // tslint:disable-next-line: no-string-literal
                value: e.payload.doc.data()["value"]
              };
            });
            console.log("mine: ", _this13.myservices);
            _this13.nb = _this13.myservices.length;
            localStorage.setItem("services", _this13.nb.toString()); //alert(this.nb);
          });
        }
      }, {
        key: "ed",
        value: function ed() {
          this.edit = true;
        }
      }, {
        key: "onFileSelected",
        value: function onFileSelected(event) {
          var _this14 = this;

          var n = Date.now();
          var file = event.target.files[0];
          var filePath = "".concat(this.profile.displayName, "/Profile/");
          var fileRef = this.storage.ref(filePath);
          var task = this.storage.upload("/Profile/".concat(n), file);
          task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
            _this14.downloadURL = fileRef.getDownloadURL();

            _this14.downloadURL.subscribe(function (url) {
              if (url) {
                _this14.photo = url;
                _this14.profile.photoURL = _this14.photo;
              }

              console.log(_this14.photo);
            });
          })).subscribe(function (url) {
            if (url) {
              console.log(url);
            }
          });
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this15 = this;

          this.userService.read_User().subscribe(function (data) {
            _this15.users = data.map(function (e) {
              return {
                uid: e.payload.doc.id,
                email: e.payload.doc.data()["email"],
                photoURL: e.payload.doc.data()["photoURL"],
                displayName: e.payload.doc.data()["displayName"],
                emailVerified: e.payload.doc.data()["emailVerified"],
                phoneNumber: e.payload.doc.data()["phoneNumber"],
                adresse: e.payload.doc.data()["adresse"],
                bio: e.payload.doc.data()["bio"]
              };
            }); // console.log(this.users);

            var _iterator5 = _createForOfIteratorHelper(_this15.users),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var u = _step5.value;

                if (_this15.cuser === u.uid) {
                  /* localStorage.setItem("profile", JSON.stringify(u));
                  this.profile = JSON.parse(localStorage.getItem("profile"));*/
                  _this15.profile = u; // console.log(this.profile);
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          });
        }
      }, {
        key: "registerUserData",
        value: function registerUserData(user) {
          var userRef = this.afs.doc("users/".concat(user.uid));
          return userRef.set(this.userData, {
            merge: true
          });
        }
        /*this.users = data.map((e) => {
              return {
                uid: e.payload.doc.id,
                    email: e.payload.doc.data()["email"],
                photoURL: e.payload.doc.data()["photoURL"],
                displayName: e.payload.doc.data()["displayName"],
                password: e.payload.doc.data()["password"],
                emailVerified: e.payload.doc.data()["emailVerified"],
                phoneNumber: e.payload.doc.data()["phoneNumber"],
                adresse: e.payload.doc.data()["adresse"],
              };
            });
            // tslint:disable-next-line: align
          });
          */

      }, {
        key: "uptodate",
        value: function uptodate() {
          var pr = this.profile;
          var p = Object.assign({}, pr);
          this.userService.update_User(this.profile.uid, p);
          this.edit = false;
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]
      }, {
        type: _services_services_service__WEBPACK_IMPORTED_MODULE_9__["ServiceService"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-profile",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/profile/profile.component.css"))["default"]]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/register/register.component.css":
  /*!*************************************************!*\
    !*** ./src/app/register/register.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _classes_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../classes/user */
    "./src/app/classes/user.ts");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(authService) {
        _classCallCheck(this, RegisterComponent);

        this.authService = authService;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = new _classes_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
          this.user.photoURL = "https://firebasestorage.googleapis.com/v0/b/paygate-2883d.appspot.com/o/90x90.jpg?alt=media&token=99d0cf7f-3b95-46c6-a501-673e69a92a9b";
        }
      }, {
        key: "signup",
        value: function signup() {
          this.authService.SignUp(this.user.email, this.user.password, this.user.displayName, this.user.photoURL, this.user.adresse, this.user.phoneNumber);
          /*  let us = Object.assign({}, this.user);
          this.authService.create_NewUser(us);
          window.location.replace("login");*/
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-register",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/register/register.component.css"))["default"]]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/sales/sales.component.css":
  /*!*******************************************!*\
    !*** ./src/app/sales/sales.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppSalesSalesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVzL3NhbGVzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/sales/sales.component.ts":
  /*!******************************************!*\
    !*** ./src/app/sales/sales.component.ts ***!
    \******************************************/

  /*! exports provided: SalesComponent */

  /***/
  function srcAppSalesSalesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalesComponent", function () {
      return SalesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SalesComponent = /*#__PURE__*/function () {
      function SalesComponent() {
        _classCallCheck(this, SalesComponent);
      }

      _createClass(SalesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SalesComponent;
    }();

    SalesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sales',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sales.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sales/sales.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sales.component.css */
      "./src/app/sales/sales.component.css"))["default"]]
    })], SalesComponent);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(afs, // Inject Firestore service
      afAuth, // Inject Firebase auth service
      router, ngZone // NgZone service to remove outside scope warning
      ) {
        var _this16 = this;

        _classCallCheck(this, AuthService);

        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */

        this.afAuth.authState.subscribe(function (user) {
          if (user) {
            _this16.userData = user;
            localStorage.setItem("user", _this16.userData.uid);
            JSON.parse(localStorage.getItem("user"));
          } else {
            localStorage.setItem("user", null);
            JSON.parse(localStorage.getItem("user"));
          }
        });
      } // Sign in with email/password


      _createClass(AuthService, [{
        key: "SignIn",
        value: function SignIn(email, password) {
          var _this17 = this;

          return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (result) {
            _this17.ngZone.run(function () {
              _this17.router.navigate(["dashboard"]);
            });

            _this17.SetUserData(result.user);
          })["catch"](function (error) {
            window.alert(error.message);
          });
        } // Sign up with email/password

      }, {
        key: "SignUp",
        value: function SignUp(email, password, username, photo, adresse, phone) {
          var _this18 = this;

          return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function (result) {
            /* Call the SendVerificaitonMail() function when new user sign
            up and returns promise */
            _this18.SendVerificationMail();

            _this18.registerUserData(result.user, username, photo, adresse, phone);
          })["catch"](function (error) {
            window.alert(error.message);
          });
        } // Send email verfificaiton when new user sign up

      }, {
        key: "SendVerificationMail",
        value: function SendVerificationMail() {
          var _this19 = this;

          return this.afAuth.auth.currentUser.sendEmailVerification().then(function () {
            _this19.router.navigate(["login"]);
          });
        } // Reset Forggot password

      }, {
        key: "ForgotPassword",
        value: function ForgotPassword(passwordResetEmail) {
          return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail).then(function () {
            window.alert("Password reset email sent, check your inbox.");
          })["catch"](function (error) {
            window.alert(error);
          });
        } // Returns true when user is looged in and email is verified

      }, {
        key: "GoogleAuth",
        // Sign in with Google
        value: function GoogleAuth() {
          return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
        } // Auth logic to run auth providers

      }, {
        key: "AuthLogin",
        value: function AuthLogin(provider) {
          var _this20 = this;

          return this.afAuth.auth.signInWithPopup(provider).then(function (result) {
            _this20.ngZone.run(function () {
              _this20.router.navigate(["profile"]);
            });

            _this20.registerUserData(result.user, result.user.displayName, result.user.photoURL, "undefined", "not verified yet");
          })["catch"](function (error) {
            window.alert(error);
          });
        }
        /* Setting up user data when sign in with username/password,
        sign up with username/password and sign in with social auth
        provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */

      }, {
        key: "SetUserData",
        value: function SetUserData(user) {
          var userRef = this.afs.doc("users/".concat(user.uid));
          var userData = {
            uid: user.uid,
            email: user.email,
            // displayName: user.displayName,
            // photoURL: user.photoURL,
            emailVerified: user.emailVerified
          };
          return userRef.update(userData);
        }
      }, {
        key: "registerUserData",
        value: function registerUserData(user, username, photo, adresse, phone) {
          var userRef = this.afs.doc("users/".concat(user.uid));
          var userData = {
            uid: user.uid,
            email: user.email,
            displayName: username,
            photoURL: photo,
            emailVerified: user.emailVerified,
            phoneNumber: phone,
            adresse: adresse
          };
          return userRef.set(userData, {
            merge: true
          });
        } // Sign out

      }, {
        key: "SignOut",
        value: function SignOut() {
          var _this21 = this;

          return this.afAuth.auth.signOut().then(function () {
            localStorage.removeItem("user");

            _this21.router.navigate(["login"]);
          });
        }
      }, {
        key: "isLoggedIn",
        get: function get() {
          var user = JSON.parse(localStorage.getItem("user"));
          return user !== null && user.emailVerified !== false ? true : false;
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] // NgZone service to remove outside scope warning

      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/produit.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/produit.service.ts ***!
    \*********************************************/

  /*! exports provided: Produitservice */

  /***/
  function srcAppServicesProduitServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Produitservice", function () {
      return Produitservice;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var Produitservice = /*#__PURE__*/function () {
      function Produitservice(firestore) {
        _classCallCheck(this, Produitservice);

        this.firestore = firestore;
      }

      _createClass(Produitservice, [{
        key: "create_NewProduit",
        value: function create_NewProduit(record) {
          return this.firestore.collection("Produits").add(record);
        }
      }, {
        key: "read_Produits",
        value: function read_Produits() {
          return this.firestore.collection("Produits").snapshotChanges();
        }
      }, {
        key: "read_mesProduits",
        value: function read_mesProduits() {
          return this.firestore.collection("Produits", function (ref) {
            return ref.where("id_vd", "==", localStorage.getItem("user"));
          }).snapshotChanges();
        }
      }, {
        key: "update_Produit",
        value: function update_Produit(recordID, record) {
          this.firestore.doc("Produits/" + recordID).update(record);
          console.log("updated");
        }
      }, {
        key: "delete_Produit",
        value: function delete_Produit(record_id) {
          this.firestore.doc("Produits/" + record_id)["delete"]();
        }
      }]);

      return Produitservice;
    }();

    Produitservice.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    Produitservice = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], Produitservice);
    /***/
  },

  /***/
  "./src/app/services/services.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/services.service.ts ***!
    \**********************************************/

  /*! exports provided: ServiceService */

  /***/
  function srcAppServicesServicesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceService", function () {
      return ServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var ServiceService = /*#__PURE__*/function () {
      function ServiceService(firestore) {
        _classCallCheck(this, ServiceService);

        this.firestore = firestore;
      } //collection firebase


      _createClass(ServiceService, [{
        key: "create_NewService",
        value: function create_NewService(record) {
          return this.firestore.collection("users/" + localStorage.getItem("user") + "/services").add(record);
        }
      }, {
        key: "read_Service",
        value: function read_Service() {
          return this.firestore.collection("Services").snapshotChanges();
        }
      }, {
        key: "read_myService",
        value: function read_myService() {
          return this.firestore.collection("users/" + localStorage.getItem("user") + "/services").snapshotChanges();
        } //${user.uid}

      }, {
        key: "read_One",
        value: function read_One(id) {
          return this.firestore.collection("users/" + localStorage.getItem("user") + "/services").doc(id).snapshotChanges;
        }
      }, {
        key: "update_Service",
        value: function update_Service(recordID, record) {
          this.firestore.doc("users/" + localStorage.getItem("user") + "/services/" + recordID).update(record);
          console.log("updated");
        }
      }, {
        key: "delete_Service",
        value: function delete_Service(record_id) {
          this.firestore.doc("users/" + localStorage.getItem("user") + "/services" + record_id)["delete"]();
        }
      }]);

      return ServiceService;
    }();

    ServiceService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    ServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ServiceService);
    /***/
  },

  /***/
  "./src/app/services/services/services.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/services/services/services.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppServicesServicesServicesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/services/services/services.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/services/services.component.ts ***!
    \*********************************************************/

  /*! exports provided: ServicesComponent */

  /***/
  function srcAppServicesServicesServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesComponent", function () {
      return ServicesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ServicesComponent = /*#__PURE__*/function () {
      function ServicesComponent() {
        _classCallCheck(this, ServicesComponent);
      }

      _createClass(ServicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServicesComponent;
    }();

    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-services',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./services.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services/services.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./services.component.css */
      "./src/app/services/services/services.component.css"))["default"]]
    })], ServicesComponent);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(firestore) {
        _classCallCheck(this, UserService);

        this.firestore = firestore;
      } //collection firebase


      _createClass(UserService, [{
        key: "create_NewUser",
        value: function create_NewUser(record) {
          return this.firestore.collection("users").add(record);
        }
      }, {
        key: "read_User",
        value: function read_User() {
          return this.firestore.collection("users").snapshotChanges();
        } //${user.uid}

      }, {
        key: "read_One",
        value: function read_One(id) {
          return this.firestore.collection("users").doc(id).snapshotChanges;
        }
      }, {
        key: "update_User",
        value: function update_User(recordID, record) {
          this.firestore.doc("users/" + recordID).update(record);
          console.log("updated");
        }
      }, {
        key: "delete_User",
        value: function delete_User(record_id) {
          this.firestore.doc("users/" + record_id)["delete"]();
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], UserService);
    /***/
  },

  /***/
  "./src/app/tokens/tokens.component.css":
  /*!*********************************************!*\
    !*** ./src/app/tokens/tokens.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTokensTokensComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rva2Vucy90b2tlbnMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/tokens/tokens.component.ts":
  /*!********************************************!*\
    !*** ./src/app/tokens/tokens.component.ts ***!
    \********************************************/

  /*! exports provided: TokensComponent */

  /***/
  function srcAppTokensTokensComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokensComponent", function () {
      return TokensComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");

    var TokensComponent = /*#__PURE__*/function () {
      function TokensComponent(auth, afs, // Inject Firestore service
      afAuth, userService, storage) {
        _classCallCheck(this, TokensComponent);

        this.auth = auth;
        this.afs = afs;
        this.afAuth = afAuth;
        this.userService = userService;
        this.storage = storage;
        this.random = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }

      _createClass(TokensComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userdet();
          this.getUsers();
        }
      }, {
        key: "userdet",
        value: function userdet() {
          var _this22 = this;

          this.afAuth.authState.subscribe(function (user) {
            if (user) {
              _this22.userData = user; //  console.log("my datas:", JSON.stringify(this.userData));

              _this22.cuse = _this22.userData;
            } else {
              //localStorage.setItem("user", null);
              //JSON.parse(localStorage.getItem("user"));
              window.location.replace("login");
            }
          });
        }
      }, {
        key: "randomString",
        value: function randomString(length, chars) {
          var result = "";

          for (var i = length; i > 0; --i) {
            result += chars[Math.floor(Math.random() * chars.length)];
          }

          return result;
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this23 = this;

          this.userService.read_User().subscribe(function (data) {
            _this23.users = data.map(function (e) {
              return {
                uid: e.payload.doc.id,
                email: e.payload.doc.data()["email"],
                photoURL: e.payload.doc.data()["photoURL"],
                displayName: e.payload.doc.data()["displayName"],
                emailVerified: e.payload.doc.data()["emailVerified"],
                phoneNumber: e.payload.doc.data()["phoneNumber"],
                adresse: e.payload.doc.data()["adresse"],
                bio: e.payload.doc.data()["bio"],
                token: e.payload.doc.data()["token"],
                apisecret: e.payload.doc.data()["apisecret"]
              };
            }); // console.log(this.users);

            var _iterator6 = _createForOfIteratorHelper(_this23.users),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var u = _step6.value;

                if (localStorage.getItem("user") === u.uid) {
                  /* localStorage.setItem("profile", JSON.stringify(u));
                  this.profile = JSON.parse(localStorage.getItem("profile"));*/
                  _this23.profile = u;
                  console.log(_this23.profile);

                  if (_this23.profile.token === null) {
                    console.log("no");

                    _this23.renew();
                  }
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          });
        }
      }, {
        key: "renew",
        value: function renew() {
          var apikey = this.randomString(24, this.random);
          var apisecret = this.randomString(32, this.random);
          this.profile.token = apikey;
          this.profile.apisecret = apisecret;
          console.log("tkey", apikey);
          console.log("tsec", apisecret);
          this.userService.update_User(this.profile.uid, this.profile);
        }
      }]);

      return TokensComponent;
    }();

    TokensComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]
      }];
    };

    TokensComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-tokens",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tokens.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tokens/tokens.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tokens.component.css */
      "./src/app/tokens/tokens.component.css"))["default"]]
    })], TokensComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebaseConfig: {
        apiKey: "AIzaSyBPOqQi7QP_sBhYteeodFkkly9-Za-eANQ",
        authDomain: "bido-cca25.firebaseapp.com",
        databaseURL: "https://bido-cca25.firebaseio.com",
        projectId: "bido-cca25",
        storageBucket: "bido-cca25.appspot.com",
        messagingSenderId: "453712247093",
        appId: "1:453712247093:web:2539f2597cd6a68666b47c",
        measurementId: "G-P95K5N05MG"
      }
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
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
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
    /*! F:\pfe\sana tayeb\merchant\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map