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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const db_1 = __importDefault(require("../config/db"));
class Todo {
}
exports.Todo = Todo;
_a = Todo;
Todo.create = (text) => {
    return (0, db_1.default)()
        .then((connection) => __awaiter(void 0, void 0, void 0, function* () {
        const [result] = yield connection.query('INSERT INTO tasks (text) VALUES (?)', [text]);
        connection.end();
        return { id: result.insertId, text: text };
    }))
        .catch(error => {
        console.error('Error:', error.message);
        return undefined;
    });
};
Todo.get = () => __awaiter(void 0, void 0, void 0, function* () {
    return (0, db_1.default)()
        .then((connection) => __awaiter(void 0, void 0, void 0, function* () {
        const results = yield connection.query('SELECT * FROM tasks');
        connection.end();
        return results[0];
    }))
        .catch(error => {
        console.error('Error:', error.message);
        return undefined;
    });
});
Todo.update = (id, text) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, db_1.default)()
        .then((connection) => __awaiter(void 0, void 0, void 0, function* () {
        const getIndex = yield connection.query('SELECT id FROM tasks WHERE id = ?', [id]);
        if (getIndex === undefined) {
            console.log('更新対象がありません');
            return undefined;
        }
        const [result] = yield connection.query('UPDATE tasks SET text = ? WHERE id = ?', [text, id]);
        connection.end();
        return { id: result.insertId, text: text };
    }));
});
Todo.delete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, db_1.default)()
        .then((connection) => __awaiter(void 0, void 0, void 0, function* () {
        const getIndex = yield connection.query('SELECT id FROM tasks WHERE id = ?', [id]);
        if (getIndex === undefined) {
            console.log('削除対象がありません');
            return undefined;
        }
        const [result] = yield connection.query('DELETE FROM tasks WHERE id = ?', [id]);
        connection.end();
        return { id: result.insertId }; //0が返却
    }));
});
