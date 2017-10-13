"use strict";
exports.__esModule = true;
var redux_actions_1 = require("redux-actions");
var lodash_1 = require("lodash");
var ActionTypes_1 = require("./constants/ActionTypes");
var addTodo = redux_actions_1.createAction(ActionTypes_1.ADD_TODO, function (text) { return ({ text: text, completed: false }); });
exports.addTodo = addTodo;
var deleteTodo = redux_actions_1.createAction(ActionTypes_1.DELETE_TODO, function (todo) { return todo; });
exports.deleteTodo = deleteTodo;
var editTodo = redux_actions_1.createAction(ActionTypes_1.EDIT_TODO, function (todo, newText) { return lodash_1.assign(todo, { text: newText }); });
exports.editTodo = editTodo;
var completeTodo = redux_actions_1.createAction(ActionTypes_1.COMPLETE_TODO, function (todo) { return todo; });
exports.completeTodo = completeTodo;
var completeAll = redux_actions_1.createAction(ActionTypes_1.COMPLETE_ALL, function () { });
exports.completeAll = completeAll;
var clearCompleted = redux_actions_1.createAction(ActionTypes_1.CLEAR_COMPLETED, function () { });
exports.clearCompleted = clearCompleted;
