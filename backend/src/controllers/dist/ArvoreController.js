"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ArvoreController = void 0;
var ArvoreService_1 = require("../services/ArvoreService");
var prismaClient_1 = require("../database/prismaClient");
var ArvoreController = /** @class */ (function () {
    function ArvoreController() {
    }
    ArvoreController.prototype.store = function (request, response) {
        return __awaiter(this, void 0, Promise, function () {
            var data, arvore, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data = request.body;
                        return [4 /*yield*/, ArvoreService_1["default"].create(data)];
                    case 1:
                        arvore = _a.sent();
                        return [2 /*return*/, response.json({
                                error: false,
                                arvore: arvore,
                                message: "\u00C1rvore cadastrada com SUCESSO!!!"
                            })];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, response.json({
                                error: true,
                                especie: null,
                                message: error_1.message
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArvoreController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, Promise, function () {
            var id, arvore, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, ArvoreService_1["default"].update(id, request.body)];
                    case 2:
                        arvore = _a.sent();
                        return [2 /*return*/, response.json({
                                error: false,
                                arvore: arvore,
                                message: "\u00C1rvore atualizada com SUCESSO!!!"
                            })];
                    case 3:
                        error_2 = _a.sent();
                        return [2 /*return*/, response.json({
                                error: true,
                                arvore: null,
                                message: error_2.message
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ArvoreController.prototype["delete"] = function (request, response) {
        return __awaiter(this, void 0, Promise, function () {
            var id, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, ArvoreService_1["default"]["delete"](id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response.status(200).json({
                                error: false,
                                message: 'Árvore deletada com Sucesso!!!'
                            })];
                    case 3:
                        error_3 = _a.sent();
                        return [2 /*return*/, response.json({
                                error: true,
                                especie: null,
                                message: error_3.message
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ArvoreController.prototype.deleteArvores = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var ids;
            return __generator(this, function (_a) {
                ids = request.body.ids;
                ArvoreService_1["default"].deleteArvores(ids);
                return [2 /*return*/, response.json({
                        ids: ids,
                        message: 'Árvores deletadas com sucesso',
                        error: false
                    })];
            });
        });
    };
    ArvoreController.prototype.findAll = function (request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var utId, _b, data, perPage, page, skip, count, error_4;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        utId = request.params.utId;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, ArvoreService_1["default"].getAll((_a = request.user) === null || _a === void 0 ? void 0 : _a.id, request.query, utId)];
                    case 2:
                        _b = _c.sent(), data = _b.data, perPage = _b.perPage, page = _b.page, skip = _b.skip, count = _b.count;
                        return [2 /*return*/, response.json({
                                error: false,
                                arvores: data,
                                perPage: perPage,
                                page: page,
                                skip: skip,
                                count: count,
                                message: null
                            })];
                    case 3:
                        error_4 = _c.sent();
                        return [2 /*return*/, response.json({
                                error: false,
                                arvores: [],
                                message: error_4 === null || error_4 === void 0 ? void 0 : error_4.message
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ArvoreController.prototype.search = function (request, response) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var numero_arvore, utId, arvores, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        numero_arvore = request.query.numero_arvore;
                        utId = request.params.utId;
                        if (!numero_arvore) return [3 /*break*/, 2];
                        return [4 /*yield*/, ArvoreService_1["default"].search(numero_arvore, (_a = request.user) === null || _a === void 0 ? void 0 : _a.id, utId)];
                    case 1:
                        _c = _d.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, ArvoreService_1["default"].getAll((_b = request.user) === null || _b === void 0 ? void 0 : _b.id, request.query, utId)];
                    case 3:
                        _c = _d.sent();
                        _d.label = 4;
                    case 4:
                        arvores = _c;
                        return [2 /*return*/, response.json(arvores)];
                }
            });
        });
    };
    ArvoreController.prototype.findOne = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, arvore, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, ArvoreService_1["default"].findById(id)];
                    case 2:
                        arvore = _a.sent();
                        return [2 /*return*/, response.json(arvore)];
                    case 3:
                        error_5 = _a.sent();
                        return [2 /*return*/, response.json(error_5.message)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ArvoreController.prototype.importInventario = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var data, importedData, upaId, upa, checkData, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = request.body;
                        importedData = data.data;
                        upaId = request.query.upaId;
                        return [4 /*yield*/, prismaClient_1.prismaClient.upa.findUnique({
                                where: {
                                    id: upaId
                                }
                            })];
                    case 1:
                        upa = _a.sent();
                        checkData = Object.keys(data.columns);
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        if (checkData.includes('faixa') && (upa === null || upa === void 0 ? void 0 : upa.tipo) === 0) {
                            return [2 /*return*/, response.json({
                                    error: true,
                                    message: 'Inventário diferente do tipo da UPA'
                                })];
                        }
                        return [4 /*yield*/, ArvoreService_1["default"].createByImport(importedData, upa)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, response.json({
                                error: false,
                                message: 'Árvores importadas com sucesso!!!'
                            })];
                    case 4:
                        error_6 = _a.sent();
                        return [2 /*return*/, response.json(error_6.message)];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return ArvoreController;
}());
exports.ArvoreController = ArvoreController;
