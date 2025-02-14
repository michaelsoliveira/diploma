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
exports.EspecieController = void 0;
var EspecieService_1 = require("../services/EspecieService");
var EspecieController = /** @class */ (function () {
    function EspecieController() {
    }
    EspecieController.prototype.store = function (request, response) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var especie, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, EspecieService_1["default"].create({ data: request.body, userId: (_a = request.user) === null || _a === void 0 ? void 0 : _a.id })];
                    case 1:
                        especie = _b.sent();
                        return [2 /*return*/, response.json({
                                error: true,
                                especie: especie,
                                message: "Esp\u00E9cie " + (especie === null || especie === void 0 ? void 0 : especie.nome) + " cadastrado com sucesso!"
                            })];
                    case 2:
                        error_1 = _b.sent();
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
    EspecieController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, Promise, function () {
            var id, especie, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, EspecieService_1["default"].update(id, request.body)];
                    case 2:
                        especie = _a.sent();
                        return [2 /*return*/, response.json({
                                error: false,
                                especie: especie,
                                message: "Especie " + (especie === null || especie === void 0 ? void 0 : especie.nome) + " atualizada com SUCESSO!!!"
                            })];
                    case 3:
                        error_2 = _a.sent();
                        return [2 /*return*/, response.json({
                                error: true,
                                especie: null,
                                message: error_2.message
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EspecieController.prototype["delete"] = function (request, response) {
        return __awaiter(this, void 0, Promise, function () {
            var id, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, EspecieService_1["default"]["delete"](id).then(function (data) {
                                return response.status(200).json({
                                    error: false,
                                    message: 'A Espécie foi deletada com Sucesso!!!'
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
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
    EspecieController.prototype.deleteEspecies = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var ids;
            return __generator(this, function (_a) {
                ids = request.body.ids;
                EspecieService_1["default"].deleteEspecies(ids);
                return [2 /*return*/, response.json({
                        ids: ids,
                        message: 'Espécies deletadas com sucesso',
                        error: false
                    })];
            });
        });
    };
    EspecieController.prototype.findAll = function (request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, perPage, orderBy, order, page, skip, count, error_4;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, EspecieService_1["default"].getAll(request.query, (_a = request.user) === null || _a === void 0 ? void 0 : _a.id)];
                    case 1:
                        _b = _c.sent(), data = _b.data, perPage = _b.perPage, orderBy = _b.orderBy, order = _b.order, page = _b.page, skip = _b.skip, count = _b.count;
                        return [2 /*return*/, response.json({
                                error: false,
                                especies: data,
                                orderBy: orderBy,
                                order: order,
                                perPage: perPage,
                                page: page,
                                skip: skip,
                                count: count,
                                message: null
                            })];
                    case 2:
                        error_4 = _c.sent();
                        return [2 /*return*/, response.json({
                                error: false,
                                especies: [],
                                message: null
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EspecieController.prototype.findByCategoria = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var categoriaId, especies, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        categoriaId = request.query.categoriaId;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, EspecieService_1["default"].findByCategoria(categoriaId)];
                    case 2:
                        especies = _a.sent();
                        return [2 /*return*/, response.json({
                                error: false,
                                especies: especies
                            })];
                    case 3:
                        error_5 = _a.sent();
                        return [2 /*return*/, response.json({
                                error: true,
                                message: error_5.message
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EspecieController.prototype.setCategoriaEspecies = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, EspecieService_1["default"].setCategoriaEspecies(request.body)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, response.json({
                                error: false,
                                data: data
                            })];
                    case 2:
                        error_6 = _a.sent();
                        return [2 /*return*/, response.json({
                                error: true,
                                message: error_6.message
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EspecieController.prototype.findOne = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, poa, especie, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        poa = request.query.poa;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, EspecieService_1["default"].findById(id, poa)];
                    case 2:
                        especie = _a.sent();
                        return [2 /*return*/, response.json(especie[0])];
                    case 3:
                        error_7 = _a.sent();
                        return [2 /*return*/, response.json(error_7.message)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EspecieController.prototype.importEspecie = function (request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var projetoId, data, especies, importData, error_8;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        projetoId = request.query.projetoId;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        data = request.body.data;
                        especies = data.map(function (especie) {
                            return {
                                nome: (especie === null || especie === void 0 ? void 0 : especie.nome_vulgar_1) ? especie === null || especie === void 0 ? void 0 : especie.nome_vulgar_1 : especie === null || especie === void 0 ? void 0 : especie.nome,
                                nome_orgao: (especie === null || especie === void 0 ? void 0 : especie.nome_vulgar_2) ? especie === null || especie === void 0 ? void 0 : especie.nome_vulgar_2 : especie === null || especie === void 0 ? void 0 : especie.orgao,
                                nome_cientifico: especie.nome_cientifico
                            };
                        });
                        return [4 /*yield*/, EspecieService_1["default"].importEspecies(especies, (_a = request.user) === null || _a === void 0 ? void 0 : _a.id)];
                    case 2:
                        importData = _b.sent();
                        if ((importData === null || importData === void 0 ? void 0 : importData.error) && (importData === null || importData === void 0 ? void 0 : importData.type) === 'duplicates') {
                            return [2 /*return*/, response.json({
                                    error: true,
                                    duplicates: importData === null || importData === void 0 ? void 0 : importData.duplicates,
                                    errorType: importData === null || importData === void 0 ? void 0 : importData.type,
                                    especies: null,
                                    message: 'Existem espécies duplicadas na planilha'
                                })];
                        }
                        return [2 /*return*/, response.json({
                                error: false,
                                especies: especies,
                                message: 'Espécies importadas com sucesso!!!'
                            })];
                    case 3:
                        error_8 = _b.sent();
                        return [2 /*return*/, response.json({
                                error: true,
                                message: error_8.message
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return EspecieController;
}());
exports.EspecieController = EspecieController;
