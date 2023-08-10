import express, { RequestHandler } from "express";
import { Todo } from "../models/todo";
import { json } from "body-parser";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res
    .status(201)
    .json({ message: "TODOを作成しました。", createTodo: newTodo });
};