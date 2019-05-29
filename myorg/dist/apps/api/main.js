require("source-map-support").install();
(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/api/src/app/app.controller.ts":
/*!********************************************!*\
  !*** ./apps/api/src/app/app.controller.ts ***!
  \********************************************/
/*! exports provided: AppController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppController", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");



var AppController = /** @class */ (function () {
    function AppController(appService) {
        this.appService = appService;
    }
    AppController.prototype.getData = function () {
        return this.appService.getData();
    };
    AppController.prototype.addTodo = function () {
        return this.appService.addTodo();
    };
    var _a;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('todos'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppController.prototype, "getData", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('addTodo'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppController.prototype, "addTodo", null);
    AppController = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] !== "undefined" && _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]) === "function" ? _a : Object])
    ], AppController);
    return AppController;
}());



/***/ }),

/***/ "./apps/api/src/app/app.module.ts":
/*!****************************************!*\
  !*** ./apps/api/src/app/app.module.ts ***!
  \****************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _aureole_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aureole/core */ "@aureole/core");
/* harmony import */ var _aureole_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_aureole_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.controller */ "./apps/api/src/app/app.controller.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");
/* harmony import */ var _group_group_entity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./group/group.entity */ "./apps/api/src/app/group/group.entity.ts");
/* harmony import */ var _person_person_entity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./person/person.entity */ "./apps/api/src/app/person/person.entity.ts");
/* harmony import */ var _group_group_controller__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./group/group.controller */ "./apps/api/src/app/group/group.controller.ts");
/* harmony import */ var _person_person_controller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./person/person.controller */ "./apps/api/src/app/person/person.controller.ts");
/* harmony import */ var _group_group_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./group/group.service */ "./apps/api/src/app/group/group.service.ts");
/* harmony import */ var _person_person_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./person/person.service */ "./apps/api/src/app/person/person.service.ts");















var AppModule = /** @class */ (function () {
    function AppModule(connection) {
        this.connection = connection;
    }
    var _a;
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
            imports: [
                // GroupModule,
                // PersonModule,
                _aureole_core__WEBPACK_IMPORTED_MODULE_4__["AitCoreModule"],
                _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["TypeOrmModule"].forRoot(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _aureole_core__WEBPACK_IMPORTED_MODULE_4__["dbConfig"], { entities: _aureole_core__WEBPACK_IMPORTED_MODULE_4__["entities"].concat([_group_group_entity__WEBPACK_IMPORTED_MODULE_7__["Group"], _person_person_entity__WEBPACK_IMPORTED_MODULE_8__["Person"]]) })),
                _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["TypeOrmModule"].forFeature(_aureole_core__WEBPACK_IMPORTED_MODULE_4__["entities"].concat([_group_group_entity__WEBPACK_IMPORTED_MODULE_7__["Group"], _person_person_entity__WEBPACK_IMPORTED_MODULE_8__["Person"]]))
            ],
            controllers: _aureole_core__WEBPACK_IMPORTED_MODULE_4__["controllers"].concat([_app_controller__WEBPACK_IMPORTED_MODULE_5__["AppController"], _group_group_controller__WEBPACK_IMPORTED_MODULE_9__["GroupController"], _person_person_controller__WEBPACK_IMPORTED_MODULE_10__["PersonController"]]),
            providers: _aureole_core__WEBPACK_IMPORTED_MODULE_4__["services"].concat([_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"], _group_group_service__WEBPACK_IMPORTED_MODULE_11__["GroupService"], _person_person_service__WEBPACK_IMPORTED_MODULE_12__["PersonService"]]),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof typeorm__WEBPACK_IMPORTED_MODULE_3__["Connection"] !== "undefined" && typeorm__WEBPACK_IMPORTED_MODULE_3__["Connection"]) === "function" ? _a : Object])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./apps/api/src/app/app.service.ts":
/*!*****************************************!*\
  !*** ./apps/api/src/app/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


var AppService = /** @class */ (function () {
    function AppService() {
        this.todos = [{ title: 'Todo 1' }, { title: 'Todo 2' }];
    }
    AppService.prototype.getData = function () {
        return this.todos;
    };
    AppService.prototype.addTodo = function () {
        this.todos.push({
            title: "New todo " + Math.floor(Math.random() * 1000)
        });
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./apps/api/src/app/group/create-group.dto.ts":
/*!****************************************************!*\
  !*** ./apps/api/src/app/group/create-group.dto.ts ***!
  \****************************************************/
/*! exports provided: CreateGroupDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupDto", function() { return CreateGroupDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-validator */ "class-validator");
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_1__);


var CreateGroupDto = /** @class */ (function () {
    function CreateGroupDto() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNotEmpty"])({
            message: "Company is required!"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CreateGroupDto.prototype, "company", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNotEmpty"])({
            message: "Language is required!"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CreateGroupDto.prototype, "lang", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["MaxLength"])(10, {
            message: "Code is not valid!"
        }),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNotEmpty"])({
            message: "Code is required!"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CreateGroupDto.prototype, "code", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["MaxLength"])(100, {
            message: "Name Group is not valid!"
        }),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNotEmpty"])({
            message: "Name Group is required!"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CreateGroupDto.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsBoolean"])(),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNotEmpty"])({
            message: "Active Flag is required!"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CreateGroupDto.prototype, "active_flag", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["MaxLength"])(20, {
            message: "Department code is not valid!"
        }),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])({
            message: "Department code must be a string!"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CreateGroupDto.prototype, "department_code", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["MaxLength"])(250, {
            message: "Address 1 is not valid!"
        }),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])({
            message: "Address 1 must be a string!"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CreateGroupDto.prototype, "address1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["MaxLength"])(250, {
            message: "Address 2 is not valid!"
        }),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])({
            message: "Address 2 must be a string!"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CreateGroupDto.prototype, "address2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["MaxLength"])(50, {
            message: "Telephone 1 is not valid!"
        }),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])({
            message: "Telephone 1 is not valid!"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CreateGroupDto.prototype, "tel1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["MaxLength"])(50, {
            message: "Telephone 2 is not valid!"
        }),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])({
            message: "Telephone 2 is not valid!"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CreateGroupDto.prototype, "tel2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["MaxLength"])(50, {
            message: "Email is not valid!"
        }),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsEmail"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CreateGroupDto.prototype, "email", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNumber"])(),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNotEmpty"])({
            message: "Change Count is required!"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CreateGroupDto.prototype, "change_count", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])({
            message: "EmployeeID Creator must be a string"
        }),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["MaxLength"])(20, {
            message: "EmployeeID Creator is not valid!"
        }),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNotEmpty"])({
            message: "EmployeeID Creator is required!"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CreateGroupDto.prototype, "create_emp_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsDateString"])(),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNotEmpty"])({
            message: "Create DateTime is required!"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CreateGroupDto.prototype, "create_datetime", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["MaxLength"])(20),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNotEmpty"])({
            message: "EmployeeID Changer is required!"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CreateGroupDto.prototype, "change_emp_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsDateString"])(),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNotEmpty"])({
            message: "EmployeeID Changer is required!"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CreateGroupDto.prototype, "change_datetime", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNotEmpty"])({
            message: "Data Flag is required!"
        }),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["Length"])(1),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CreateGroupDto.prototype, "data_flag", void 0);
    return CreateGroupDto;
}());



/***/ }),

/***/ "./apps/api/src/app/group/group.controller.ts":
/*!****************************************************!*\
  !*** ./apps/api/src/app/group/group.controller.ts ***!
  \****************************************************/
/*! exports provided: GroupController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupController", function() { return GroupController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _group_create_group_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../group/create-group.dto */ "./apps/api/src/app/group/create-group.dto.ts");
/* harmony import */ var _group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group.service */ "./apps/api/src/app/group/group.service.ts");
/* harmony import */ var _validation_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../validation.pipe */ "./apps/api/src/validation.pipe.ts");





var GroupController = /** @class */ (function () {
    function GroupController(groupService) {
        this.groupService = groupService;
    }
    GroupController.prototype.index = function (body) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            var error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.groupService.findAll(body)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]({
                            status: _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].INTERNAL_SERVER_ERROR,
                            message: 'Error!'
                        }, 500);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GroupController.prototype.findOne = function (body) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.groupService.findOne(body)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]({
                            status: _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].NOT_FOUND,
                            message: 'Not Found!'
                        }, 400);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GroupController.prototype.insert = function (createGroupDto) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            var newGroup, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newGroup = Object.assign(createGroupDto);
                        console.log('Insert #' + newGroup.code);
                        return [4 /*yield*/, this.groupService.create(newGroup)];
                    case 1:
                        result = _a.sent();
                        if (result === true) {
                            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]({
                                status: _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].OK,
                                message: 'Create Successful!'
                            }, 200);
                        }
                        else {
                            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]({
                                status: _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].INTERNAL_SERVER_ERROR,
                                message: 'Error!'
                            }, 500);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GroupController.prototype.update = function (createGroupDto) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Update #' + createGroupDto.code);
                        return [4 /*yield*/, this.groupService.update(createGroupDto)];
                    case 1:
                        result = _a.sent();
                        if (result === true) {
                            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]({
                                status: _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].OK,
                                message: 'Update Successful!'
                            }, 200);
                        }
                        else {
                            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]({
                                status: _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].INTERNAL_SERVER_ERROR,
                                message: 'Error!'
                            }, 500);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GroupController.prototype.deleteone = function (body) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.groupService.deleteOne(body)];
                    case 1:
                        result = _a.sent();
                        if (result === true) {
                            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]({
                                status: _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].OK,
                                message: 'Delete Successful!'
                            }, 200);
                        }
                        else {
                            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]({
                                status: _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].NOT_FOUND,
                                message: 'Not Found!'
                            }, 400);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GroupController.prototype.deletemany = function (body) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.groupService.deleteMany(body)];
                    case 1:
                        result = _a.sent();
                        if (result === true) {
                            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]({
                                status: _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].OK,
                                message: 'Selected record delete Successful!'
                            }, 200);
                        }
                        else {
                            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]({
                                status: _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].INTERNAL_SERVER_ERROR,
                                message: 'Error!'
                            }, 500);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    var _a, _b, _c, _d, _e, _f, _g, _h;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('get/many'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
    ], GroupController.prototype, "index", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('get/one'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Promise)
    ], GroupController.prototype, "findOne", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('post'),
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UsePipes"])(new _validation_pipe__WEBPACK_IMPORTED_MODULE_4__["ValidationPipe"]()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_b = typeof _group_create_group_dto__WEBPACK_IMPORTED_MODULE_2__["CreateGroupDto"] !== "undefined" && _group_create_group_dto__WEBPACK_IMPORTED_MODULE_2__["CreateGroupDto"]) === "function" ? _b : Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
    ], GroupController.prototype, "insert", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('put'),
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UsePipes"])(new _validation_pipe__WEBPACK_IMPORTED_MODULE_4__["ValidationPipe"]()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_d = typeof _group_create_group_dto__WEBPACK_IMPORTED_MODULE_2__["CreateGroupDto"] !== "undefined" && _group_create_group_dto__WEBPACK_IMPORTED_MODULE_2__["CreateGroupDto"]) === "function" ? _d : Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
    ], GroupController.prototype, "update", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('delete/one'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
    ], GroupController.prototype, "deleteone", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('delete/many'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
    ], GroupController.prototype, "deletemany", null);
    GroupController = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('group'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_h = typeof _group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"] !== "undefined" && _group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"]) === "function" ? _h : Object])
    ], GroupController);
    return GroupController;
}());



/***/ }),

/***/ "./apps/api/src/app/group/group.entity.ts":
/*!************************************************!*\
  !*** ./apps/api/src/app/group/group.entity.ts ***!
  \************************************************/
/*! exports provided: Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);


var Group = /** @class */ (function () {
    function Group() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryColumn"])('character varying', { length: 20 }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Group.prototype, "company", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryColumn"])('character varying', { length: 20 }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Group.prototype, "lang", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryColumn"])('character varying', { length: 20 }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Group.prototype, "code", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('character varying', { length: 100 }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Group.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('boolean'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], Group.prototype, "active_flag", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('character varying', { length: 20, nullable: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Group.prototype, "department_code", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('character varying', { length: 250, nullable: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Group.prototype, "address1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('character varying', { length: 250, nullable: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Group.prototype, "address2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('character varying', { length: 50, nullable: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Group.prototype, "tel1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('character varying', { length: 50, nullable: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Group.prototype, "tel2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('character varying', { length: 50, nullable: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Group.prototype, "email", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('integer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Group.prototype, "change_count", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('character varying', { length: 20 }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Group.prototype, "create_emp_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('timestamp without time zone'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Group.prototype, "create_datetime", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('character varying', { length: 20 }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Group.prototype, "change_emp_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('timestamp without time zone'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Group.prototype, "change_datetime", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('character', { length: 1 }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Group.prototype, "data_flag", void 0);
    Group = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])('biz_m_group')
    ], Group);
    return Group;
}());



/***/ }),

/***/ "./apps/api/src/app/group/group.service.ts":
/*!*************************************************!*\
  !*** ./apps/api/src/app/group/group.service.ts ***!
  \*************************************************/
/*! exports provided: GroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupService", function() { return GroupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _group_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./group.entity */ "./apps/api/src/app/group/group.entity.ts");





var GroupService = /** @class */ (function () {
    function GroupService(groupRepository) {
        this.groupRepository = groupRepository;
    }
    GroupService.prototype.findAll = function (context) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var params, list, result, index, index, index, index, index, index, index, index, index, index, dateFrom, sortListByDate, indexFrom, dateTo_1, sortListByDate, indexTo;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new Object();
                        list = [];
                        if (context.name !== undefined) {
                            params['name'] = context.name;
                        }
                        if (context.activeFlag !== undefined) {
                            params['active_flag'] = context.activeFlag;
                        }
                        if (context.address1 !== undefined) {
                            params['address1'] = context.address1;
                        }
                        if (context.address2 !== undefined) {
                            params['address2'] = context.address2;
                        }
                        if (context.tel1 !== undefined) {
                            params['tel1'] = context.tel1;
                        }
                        if (context.tel2 !== undefined) {
                            params['tel2'] = context.tel2;
                        }
                        if (context.email !== undefined) {
                            params['email'] = context.email;
                        }
                        if (context.changeCount !== undefined) {
                            params['change_count'] = context.changeCount;
                        }
                        if (context.dataFlag !== undefined) {
                            params['data_flag'] = context.dataFlag;
                        }
                        return [4 /*yield*/, this.groupRepository.find(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ company: context.company, lang: context.lang }, params))];
                    case 1:
                        result = _a.sent();
                        list = result.slice();
                        // form to groupcode
                        if (context.codeFrom !== undefined) {
                            index = list.findIndex(function (element) {
                                return element.code === context.codeFrom;
                            });
                            if (index >= 0) {
                                list = list.slice(index);
                            }
                        }
                        if (context.codeTo !== undefined) {
                            index = list.findIndex(function (element) {
                                return element.code === context.codeTo;
                            });
                            if (index >= 0) {
                                list = list.slice(0, index + 1);
                            }
                        }
                        // form to department_code
                        if (context.department_codeFrom !== undefined) {
                            index = list.findIndex(function (element) {
                                return element.department_code === context.department_codeFrom;
                            });
                            if (index >= 0) {
                                list = list.slice(index);
                            }
                        }
                        if (context.department_codeTo !== undefined) {
                            index = list.findIndex(function (element) {
                                return element.department_code === context.department_codeTo;
                            });
                            if (index >= 0) {
                                list = list.slice(0, index + 1);
                            }
                        }
                        // from to create_emp_id
                        if (context.createEmpFrom !== undefined) {
                            index = list.findIndex(function (element) {
                                return element.create_emp_id === context.createEmpFrom;
                            });
                            if (index >= 0) {
                                list = list.slice(index, list.length);
                            }
                        }
                        if (context.createEmpTo !== undefined) {
                            index = list.findIndex(function (element) {
                                return element.create_emp_id === context.createEmpTo;
                            });
                            if (index >= 0) {
                                list = list.slice(0, index + 1);
                            }
                        }
                        // from to change_emp_id
                        if (context.changeEmpFrom !== undefined) {
                            index = list.findIndex(function (element) {
                                return element.change_emp_id === context.changeEmpFrom;
                            });
                            if (index >= 0) {
                                list = list.slice(index, list.length);
                            }
                        }
                        if (context.changeEmpTo !== undefined) {
                            index = list.findIndex(function (element) {
                                return element.change_emp_id === context.changeEmpTo;
                            });
                            if (index >= 0) {
                                list = list.slice(0, index + 1);
                            }
                        }
                        // from to create_datetime
                        if (context.createDatetimeFrom !== undefined) {
                            index = list.findIndex(function (element) {
                                return element.create_datetime === new Date(context.createDatetimeFrom);
                            });
                            if (index >= 0) {
                                list = list.slice(index, list.length);
                            }
                        }
                        if (context.createDatetimeTo !== undefined) {
                            index = list.findIndex(function (element) {
                                return element.create_datetime === context.createDatetimeTo;
                            });
                            if (index >= 0) {
                                list = list.slice(0, index + 1);
                            }
                        }
                        // from to change_datetime
                        if (context.changeDatetimeFrom !== undefined) {
                            dateFrom = new Date(context.changeDatetimeFrom);
                            sortListByDate = list.sort(function (a, b) { return a.change_datetime - b.change_datetime; });
                            indexFrom = sortListByDate.findIndex(function (element) {
                                return new Date(element.change_datetime + "+0000").toJSON() >= new Date(context.changeDatetimeFrom).toJSON();
                            });
                            if (new Date(sortListByDate[sortListByDate.length - 1].change_datetime + "+0000").toJSON() < dateFrom.toJSON()) {
                                console.log(new Date(sortListByDate[sortListByDate.length - 1].change_datetime + "+0000").toJSON(), dateFrom.toJSON());
                                list = [];
                            }
                            if (indexFrom >= 0) {
                                list = sortListByDate.slice(indexFrom, sortListByDate.length);
                            }
                        }
                        if (context.changeDatetimeTo !== undefined) {
                            dateTo_1 = new Date(context.changeDatetimeTo);
                            dateTo_1.setMinutes(dateTo_1.getMinutes() + 1439);
                            sortListByDate = list.sort(function (a, b) { return b.change_datetime - a.change_datetime; });
                            indexTo = list.findIndex(function (element) {
                                return new Date(element.change_datetime + "+0000").toJSON() < dateTo_1.toJSON();
                            });
                            if (indexTo >= 0) {
                                list = sortListByDate.slice(indexTo, sortListByDate.length);
                            }
                            else {
                                list = [];
                            }
                        }
                        return [2 /*return*/, list];
                }
            });
        });
    };
    GroupService.prototype.findOne = function (context) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(context.code !== '')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.groupRepository.findOne({
                                company: context.company,
                                lang: context.lang,
                                code: context.code
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 2: return [2 /*return*/, false];
                }
            });
        });
    };
    // CREATE GROUP WITH 3 LANGUAGE WITH SAME BODY REQ
    GroupService.prototype.create = function (context) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, ts, contextVi, contextEn, contextJa;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(context.code !== '')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.groupRepository.find({
                                company: context.company,
                                code: context.code
                            })];
                    case 1:
                        result = _a.sent();
                        console.log(result.length);
                        if (!(result.length <= 0)) return [3 /*break*/, 5];
                        ts = new Date();
                        contextVi = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, context);
                        contextVi.lang = 'vi-VN';
                        contextVi.change_count = context.change_count || 0;
                        contextVi.create_datetime = ts.toJSON();
                        contextEn = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, context);
                        contextEn.lang = 'en-US';
                        contextEn.change_count = context.change_count || 0;
                        contextEn.create_datetime = ts.toJSON();
                        contextJa = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, context);
                        contextJa.lang = 'jp-JP';
                        contextJa.change_count = context.change_count || 0;
                        contextJa.create_datetime = ts.toJSON();
                        return [4 /*yield*/, this.groupRepository.save(contextVi)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.groupRepository.save(contextEn)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.groupRepository.save(contextJa)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 5: return [2 /*return*/, false];
                    case 6: return [2 /*return*/, false];
                }
            });
        });
    };
    // UPDATE GROUP WITH 3 LANGUAGE WITH SAME BODY REQ
    GroupService.prototype.update = function (context) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, ts, contextLang;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(context.code !== '')) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.groupRepository.find({
                                lang: context.lang,
                                company: context.company,
                                code: context.code
                            })];
                    case 1:
                        result = _a.sent();
                        console.log(result[0].change_count);
                        if (!(result[0].change_count === context.change_count)) return [3 /*break*/, 10];
                        if (!(result[0].active_flag === true)) return [3 /*break*/, 9];
                        if (!result) return [3 /*break*/, 8];
                        ts = new Date();
                        contextLang = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, context);
                        if (!(contextLang.lang === 'vi-VN')) return [3 /*break*/, 3];
                        context.lang = 'vi-VN';
                        context.change_count++;
                        context.change_datetime = ts.toJSON();
                        return [4 /*yield*/, this.groupRepository.update({
                                company: context.company,
                                lang: context.lang,
                                code: context.code
                            }, context)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 3:
                        if (!(contextLang.lang === 'en-US')) return [3 /*break*/, 5];
                        context.lang = 'en-US';
                        context.change_count++;
                        context.change_datetime = ts.toJSON();
                        return [4 /*yield*/, this.groupRepository.update({
                                company: context.company,
                                lang: context.lang,
                                code: context.code
                            }, context)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 5:
                        if (!(contextLang.lang === 'jp-JP')) return [3 /*break*/, 7];
                        context.lang = 'jp-JP';
                        context.change_count++;
                        context.change_datetime = ts.toJSON();
                        return [4 /*yield*/, this.groupRepository.update({
                                company: context.company,
                                lang: context.lang,
                                code: context.code
                            }, context)];
                    case 6:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 7: return [2 /*return*/, true];
                    case 8: return [2 /*return*/, true];
                    case 9: return [2 /*return*/, false];
                    case 10: return [2 /*return*/, false];
                    case 11: return [2 /*return*/, false];
                }
            });
        });
    };
    GroupService.prototype.deleteOne = function (context) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, contextVi, contextEn, contextJa, group_keyVi, group_keyEn, group_keyJa;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(context.code !== '')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.groupRepository.find({
                                company: context.company,
                                code: context.code,
                            })];
                    case 1:
                        result = _a.sent();
                        if (!(result.length > 0)) return [3 /*break*/, 5];
                        contextVi = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, context);
                        contextVi.lang = 'vi-VN';
                        contextEn = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, context);
                        contextEn.lang = 'en-US';
                        contextJa = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, context);
                        contextJa.lang = 'ja-JP';
                        group_keyVi = {
                            company: contextVi.company,
                            lang: contextVi.lang,
                            code: contextVi.code
                        };
                        group_keyEn = {
                            company: contextEn.company,
                            lang: contextEn.lang,
                            code: contextEn.code
                        };
                        group_keyJa = {
                            company: contextJa.company,
                            lang: contextJa.lang,
                            code: contextJa.code
                        };
                        return [4 /*yield*/, this.groupRepository.delete(group_keyVi)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.groupRepository.delete(group_keyEn)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.groupRepository.delete(group_keyJa)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 5: return [2 /*return*/, false];
                    case 6: return [2 /*return*/, false];
                }
            });
        });
    };
    GroupService.prototype.deleteMany = function (context) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _i, context_1, element, result, elementVi, group_keyVi, elementEn, group_keyEn, elementJa, group_keyJa;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _i = 0, context_1 = context;
                        _a.label = 1;
                    case 1:
                        if (!(_i < context_1.length)) return [3 /*break*/, 9];
                        element = context_1[_i];
                        if (!(element.code !== '')) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.groupRepository.find({
                                company: element.company,
                                code: element.code
                            })];
                    case 2:
                        result = _a.sent();
                        if (!(result.length > 0)) return [3 /*break*/, 6];
                        elementVi = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, element);
                        elementVi.lang = 'vi-VN';
                        group_keyVi = {
                            company: elementVi.company,
                            lang: elementVi.lang,
                            code: elementVi.code
                        };
                        return [4 /*yield*/, this.groupRepository.delete(group_keyVi)];
                    case 3:
                        _a.sent();
                        elementEn = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, element);
                        elementEn.lang = 'en-US';
                        group_keyEn = {
                            company: elementEn.company,
                            lang: elementEn.lang,
                            code: elementEn.code
                        };
                        return [4 /*yield*/, this.groupRepository.delete(group_keyEn)];
                    case 4:
                        _a.sent();
                        elementJa = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, element);
                        elementJa.lang = 'ja-JP';
                        group_keyJa = {
                            company: elementJa.company,
                            lang: elementJa.lang,
                            code: elementJa.code
                        };
                        return [4 /*yield*/, this.groupRepository.delete(group_keyJa)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 6: return [2 /*return*/, false];
                    case 7: return [2 /*return*/, false];
                    case 8:
                        _i++;
                        return [3 /*break*/, 1];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    var _a;
    GroupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["InjectRepository"])(_group_entity__WEBPACK_IMPORTED_MODULE_4__["Group"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof typeorm__WEBPACK_IMPORTED_MODULE_3__["Repository"] !== "undefined" && typeorm__WEBPACK_IMPORTED_MODULE_3__["Repository"]) === "function" ? _a : Object])
    ], GroupService);
    return GroupService;
}());



/***/ }),

/***/ "./apps/api/src/app/person/person.controller.ts":
/*!******************************************************!*\
  !*** ./apps/api/src/app/person/person.controller.ts ***!
  \******************************************************/
/*! exports provided: PersonController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonController", function() { return PersonController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./person.service */ "./apps/api/src/app/person/person.service.ts");
/* harmony import */ var _person_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./person.entity */ "./apps/api/src/app/person/person.entity.ts");




var PersonController = /** @class */ (function () {
    function PersonController(personService) {
        this.personService = personService;
    }
    PersonController.prototype.index = function () {
        return this.personService.findAll();
    };
    PersonController.prototype.create = function (person) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.personService.create(person)];
            });
        });
    };
    var _a, _b, _c, _d;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
    ], PersonController.prototype, "index", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('create'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_b = typeof _person_entity__WEBPACK_IMPORTED_MODULE_3__["Person"] !== "undefined" && _person_entity__WEBPACK_IMPORTED_MODULE_3__["Person"]) === "function" ? _b : Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
    ], PersonController.prototype, "create", null);
    PersonController = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('person'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_d = typeof _person_service__WEBPACK_IMPORTED_MODULE_2__["PersonService"] !== "undefined" && _person_service__WEBPACK_IMPORTED_MODULE_2__["PersonService"]) === "function" ? _d : Object])
    ], PersonController);
    return PersonController;
}());



/***/ }),

/***/ "./apps/api/src/app/person/person.entity.ts":
/*!**************************************************!*\
  !*** ./apps/api/src/app/person/person.entity.ts ***!
  \**************************************************/
/*! exports provided: Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);


var Person = /** @class */ (function () {
    function Person() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryColumn"])('character varying', { length: 20 }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Person.prototype, "company", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryColumn"])('character varying', { length: 20 }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Person.prototype, "department_code", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryColumn"])('character varying', { length: 20 }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Person.prototype, "group_code", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryColumn"])('character varying', { length: 20 }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Person.prototype, "emp_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('boolean'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], Person.prototype, "active_flag", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('character varying', { nullable: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Person.prototype, "position", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('character varying', { nullable: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Person.prototype, "rank", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('integer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Person.prototype, "change_count", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('character varying', { length: 20 }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Person.prototype, "create_emp_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('timestamp without time zone'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Person.prototype, "create_datetime", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('character varying', { length: 20 }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Person.prototype, "change_emp_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('timestamp without time zone'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Person.prototype, "change_datetime", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('character', { length: 1 }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Person.prototype, "data_flag", void 0);
    Person = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])('biz_m_person')
    ], Person);
    return Person;
}());



/***/ }),

/***/ "./apps/api/src/app/person/person.service.ts":
/*!***************************************************!*\
  !*** ./apps/api/src/app/person/person.service.ts ***!
  \***************************************************/
/*! exports provided: PersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonService", function() { return PersonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _person_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./person.entity */ "./apps/api/src/app/person/person.entity.ts");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_4__);





var PersonService = /** @class */ (function () {
    function PersonService(personRepository) {
        this.personRepository = personRepository;
    }
    PersonService.prototype.findAll = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.personRepository.find()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PersonService.prototype.create = function (group) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, Promise, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.personRepository.save(group)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var _a;
    PersonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["InjectRepository"])(_person_entity__WEBPACK_IMPORTED_MODULE_3__["Person"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"] !== "undefined" && typeorm__WEBPACK_IMPORTED_MODULE_4__["Repository"]) === "function" ? _a : Object])
    ], PersonService);
    return PersonService;
}());



/***/ }),

/***/ "./apps/api/src/main.ts":
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./apps/api/src/app/app.module.ts");
/* harmony import */ var _src_validation_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/validation.pipe */ "./apps/api/src/validation.pipe.ts");
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/





function bootstrap() {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var app, globalPrefix, port;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _nestjs_core__WEBPACK_IMPORTED_MODULE_1__["NestFactory"].create(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])];
                case 1:
                    app = _a.sent();
                    globalPrefix = 'api/v1';
                    app.useGlobalPipes(new _src_validation_pipe__WEBPACK_IMPORTED_MODULE_4__["ValidationPipe"]());
                    app.setGlobalPrefix(globalPrefix);
                    app.enableCors();
                    port = process.env.port || 8080;
                    return [4 /*yield*/, app.listen(port)];
                case 2:
                    _a.sent();
                    _nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Logger"].log('Server running on http://localhost:' + port, 'Bootstrap');
                    return [2 /*return*/];
            }
        });
    });
}
bootstrap();


/***/ }),

/***/ "./apps/api/src/validation.pipe.ts":
/*!*****************************************!*\
  !*** ./apps/api/src/validation.pipe.ts ***!
  \*****************************************/
/*! exports provided: ValidationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationPipe", function() { return ValidationPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-transformer */ "class-transformer");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! class-validator */ "class-validator");
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_3__);





var ValidationPipe = /** @class */ (function () {
    function ValidationPipe() {
    }
    ValidationPipe.prototype.transform = function (value, metadata) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var metatype, object, errors;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (value instanceof Object && this.isEmpty(value)) {
                            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]('Validation failed: No body submitted', _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].BAD_REQUEST);
                        }
                        metatype = metadata.metatype;
                        if (!metatype || !this.toValidate(metatype)) {
                            return [2 /*return*/, value];
                        }
                        object = Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["plainToClass"])(metatype, value);
                        return [4 /*yield*/, Object(class_validator__WEBPACK_IMPORTED_MODULE_3__["validate"])(object)];
                    case 1:
                        errors = _a.sent();
                        console.log(errors);
                        if (errors.length > 0) {
                            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]("Validation failed: " + this.formatErrors(errors), _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].BAD_REQUEST);
                        }
                        return [2 /*return*/, value];
                }
            });
        });
    };
    ValidationPipe.prototype.toValidate = function (metatype) {
        var types = [String, Boolean, Number, Array, Object];
        return !types.find(function (type) { return metatype === type; });
    };
    ValidationPipe.prototype.formatErrors = function (errors) {
        return errors
            .map(function (err) {
            for (var property in err.constraints) {
                return err.constraints[property];
            }
        })
            .join(', ');
    };
    ValidationPipe.prototype.isEmpty = function (value) {
        if (Object.keys(value).length > 0) {
            return false;
        }
        return true;
    };
    ValidationPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ValidationPipe);
    return ValidationPipe;
}());



/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./apps/api/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\demoapp\Dev\nxnest-dev\myorg\apps\api\src\main.ts */"./apps/api/src/main.ts");


/***/ }),

/***/ "@aureole/core":
/*!********************************!*\
  !*** external "@aureole/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@aureole/core");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("class-validator");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map