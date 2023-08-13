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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todoModel_1 = require("../models/todoModel");
const createTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const text = req.body.text;
    try {
        const newTodo = yield todoModel_1.Todo.create(text);
        if (newTodo !== undefined) {
            res
                .status(201)
                .json({ message: "TODOを作成しました。", createInfo: newTodo });
        }
        else {
            res.status(500).json({ message: "TODOの作成に失敗しました。" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "TODOの作成に失敗しました。" });
    }
});
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    // const get = Todo.get();
    // res.json({ todos: get });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    res.json({ message: "TODOを変更しました。", updatedTodo: '' });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    res.json({ message: "TODOを削除しました。" });
};
exports.deleteTodo = deleteTodo;
