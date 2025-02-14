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
exports.ProjetoController = void 0;
var equacaoVolume_service_1 = require("../services/equacaoVolume.service");
var ProjetoService_1 = require("../services/ProjetoService");
var ProjetoController = /** @class */ (function () {
    function ProjetoController() {
    }
    ProjetoController.prototype.store = function (request, response) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var projeto, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, ProjetoService_1["default"].create(request.body, (_a = request.user) === null || _a === void 0 ? void 0 : _a.id)];
                    case 1:
                        projeto = _b.sent();
                        return [2 /*return*/, response.json({
                                error: false,
                                projeto: projeto,
                                message: "Projeto " + projeto.nome + " cadastrada com SUCESSO!!!"
                            })];
                    case 2:
                        error_1 = _b.sent();
                        return [2 /*return*/, response.json({
                                error: true,
                                projeto: null,
                                message: error_1.message
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProjetoController.prototype.update = function (request, response) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var id, projeto, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = request.params.id;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, ProjetoService_1["default"].update(id, request.body, (_a = request.user) === null || _a === void 0 ? void 0 : _a.id)];
                    case 2:
                        projeto = _b.sent();
                        return [2 /*return*/, response.json({
                                error: false,
                                projeto: projeto,
                                message: "Projeto " + projeto.nome + " atualizada com SUCESSO!!!"
                            })];
                    case 3:
                        error_2 = _b.sent();
                        return [2 /*return*/, response.json({
                                error: true,
                                projeto: null,
                                message: error_2.message
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProjetoController.prototype["delete"] = function (request, response) {
        return __awaiter(this, void 0, Promise, function () {
            var id, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, ProjetoService_1["default"]["delete"](id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response.status(200).json({
                                error: false,
                                message: 'Projeto deletada com Sucesso!!!'
                            })];
                    case 3:
                        error_3 = _a.sent();
                        return [2 /*return*/, response.json({
                                error: true,
                                projeto: null,
                                message: error_3.message
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProjetoController.prototype.findAll = function (request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, perPage, page, orderBy, order, skip, count, error_4;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, ProjetoService_1["default"].getAll((_a = request.user) === null || _a === void 0 ? void 0 : _a.id, request.query)];
                    case 1:
                        _b = _c.sent(), data = _b.data, perPage = _b.perPage, page = _b.page, orderBy = _b.orderBy, order = _b.order, skip = _b.skip, count = _b.count;
                        return [2 /*return*/, response.json({
                                error: false,
                                projetos: data,
                                perPage: perPage,
                                page: page,
                                skip: skip,
                                orderBy: orderBy,
                                order: order,
                                count: count,
                                message: null
                            })];
                    case 2:
                        error_4 = _c.sent();
                        return [2 /*return*/, response.json({
                                error: true,
                                projetos: [],
                                message: error_4.message
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProjetoController.prototype.deleteProjetos = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var ids;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ids = request.body.ids;
                        return [4 /*yield*/, ProjetoService_1["default"].deleteProjetos(ids)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.json({
                                ids: ids,
                                message: 'Projetos deletadas com sucesso',
                                error: false
                            })];
                }
            });
        });
    };
    ProjetoController.prototype.findEqVolumes = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var projetoId, _a, data, perPage, orderBy, order, page, skip, count, error_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        projetoId = request.params.projetoId;
                        return [4 /*yield*/, equacaoVolume_service_1["default"].getAll(request.query, projetoId)];
                    case 1:
                        _a = _b.sent(), data = _a.data, perPage = _a.perPage, orderBy = _a.orderBy, order = _a.order, page = _a.page, skip = _a.skip, count = _a.count;
                        return [2 /*return*/, response.json({
                                error: false,
                                equacoes: data,
                                orderBy: orderBy,
                                order: order,
                                perPage: perPage,
                                page: page,
                                skip: skip,
                                count: count,
                                message: 'Equações carregados com sucesso!'
                            })];
                    case 2:
                        error_5 = _b.sent();
                        return [2 /*return*/, response.json({
                                error: true,
                                equacoes: [],
                                message: "Error: " + error_5.message
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProjetoController.prototype.findUsers = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var projetoId, _a, data, perPage, orderBy, order, page, skip, count, error_6;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        projetoId = request.params.projetoId;
                        return [4 /*yield*/, ProjetoService_1["default"].getUsers(projetoId, request.query)];
                    case 1:
                        _a = _b.sent(), data = _a.data, perPage = _a.perPage, orderBy = _a.orderBy, order = _a.order, page = _a.page, skip = _a.skip, count = _a.count;
                        return [2 /*return*/, response.json({
                                error: false,
                                users: data,
                                orderBy: orderBy,
                                order: order,
                                perPage: perPage,
                                page: page,
                                skip: skip,
                                count: count,
                                message: 'Usuários carregados com sucesso!'
                            })];
                    case 2:
                        error_6 = _b.sent();
                        return [2 /*return*/, response.json({
                                error: true,
                                users: [],
                                message: "Error: " + error_6.message
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProjetoController.prototype.search = function (request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var nome, projetos, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        nome = request.query.nome;
                        if (!nome) return [3 /*break*/, 2];
                        return [4 /*yield*/, ProjetoService_1["default"].search(nome)];
                    case 1:
                        _b = _c.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, ProjetoService_1["default"].getAll((_a = request.user) === null || _a === void 0 ? void 0 : _a.id, request.query)];
                    case 3:
                        _b = _c.sent();
                        _c.label = 4;
                    case 4:
                        projetos = _b;
                        return [2 /*return*/, response.json(projetos)];
                }
            });
        });
    };
    ProjetoController.prototype.getActive = function (request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var projeto;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ProjetoService_1["default"].getActive((_a = request.user) === null || _a === void 0 ? void 0 : _a.id)];
                    case 1:
                        projeto = _b.sent();
                        return [2 /*return*/, response.json(projeto)];
                }
            });
        });
    };
    ProjetoController.prototype.findOne = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, projeto, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, ProjetoService_1["default"].findById(id)];
                    case 2:
                        projeto = _a.sent();
                        return [2 /*return*/, response.json(projeto)];
                    case 3:
                        error_7 = _a.sent();
                        return [2 /*return*/, response.json(error_7.message)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ProjetoController;
}());
exports.ProjetoController = ProjetoController;
