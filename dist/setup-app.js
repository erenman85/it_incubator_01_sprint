"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupApp = void 0;
const express_1 = __importDefault(require("express"));
const in_memory_db_1 = require("./db/in-memory.db");
const http_statuses_1 = require("./core/types/http-statuses");
const setupApp = (app) => {
    app.use(express_1.default.json()); // middleware для парсинга JSON в теле запроса
    // основной роут
    app.get("/", (req, res) => {
        res.status(200).send("Hello world!");
    });
    app.get("/drivers", (req, res) => {
        //возвращаем всех водителей
        console.log("--> ЗАПРОС НА GET /drivers ПОЛУЧЕН!");
        res.status(200).send(in_memory_db_1.db.drivers);
    });
    app.get("/drivers/:id", (req, res) => {
        // ищем водителя в бд по id
        const driver = in_memory_db_1.db.drivers.find((d) => d.id === +req.params.id);
        if (!driver) {
            res.sendStatus(http_statuses_1.HttpStatus.NotFound);
            return;
        }
        // возвращаем ответ
        res.status(http_statuses_1.HttpStatus.Ok).send(driver);
    });
    app.post("/drivers", (req, res) => {
        //1) проверяем приходящие данные на валидность (добавим на следующем шаге)
        //2) создаем newDriver
        const lastDriver = in_memory_db_1.db.drivers[in_memory_db_1.db.drivers.length - 1];
        const newDriver = {
            id: lastDriver ? lastDriver.id + 1 : 1,
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            vehicleMake: req.body.vehicleMake,
            vehicleModel: req.body.vehicleModel,
            vehicleYear: req.body.vehicleYear,
            vehicleLicensePlate: req.body.vehicleLicensePlate,
            vehicleDescription: req.body.vehicleDescription,
            vehicleFeatures: req.body.vehicleFeatures,
            createdAt: new Date(),
        };
        //3) добавляем newDriver в БД
        in_memory_db_1.db.drivers.push(newDriver);
        //4) возвращаем ответ
        res.status(http_statuses_1.HttpStatus.Created).send(newDriver);
    });
    app.delete("/testing/all-data", (req, res) => {
        in_memory_db_1.db.drivers = [];
        res.sendStatus(http_statuses_1.HttpStatus.NoContent);
    });
    return app;
};
exports.setupApp = setupApp;
//# sourceMappingURL=setup-app.js.map