import express, { RequestHandler } from "express";
import { Todo } from "../models/todoModel";
import { create } from "domain";
import { error } from "console";

export const createTodo: RequestHandler = async (req, res, next) => {
  const text = (req.body as {text: string}).text;
  try {
    const newTodo = await Todo.create(text);
    if (newTodo !== undefined) {
      res
        .status(201)
        .json({ message: "TODOを作成しました。", createInfo: newTodo });
    } else {
      res.status(500).json({ message: "TODOの作成に失敗しました。" });
    }
  } catch (error) {
    res.status(500).json({ message: "TODOの作成に失敗しました。" });
  }
};

export const getTodos: RequestHandler = (req, res, next) => {
  // const get = Todo.get();
  // res.json({ todos: get });
};

export const updateTodo: RequestHandler<{ id: string; text: string }> = (
  req,
  res,
  next
) => {
  res.json({ message: "TODOを変更しました。", updatedTodo: ''});
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  res.json({ message: "TODOを削除しました。" });
};
