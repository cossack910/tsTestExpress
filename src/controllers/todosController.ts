import express, { RequestHandler } from "express";
import { Todo } from "../models/todoModel";

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

export const getTodos: RequestHandler = async (req, res, next) => {
  const lists =  await Todo.get();
  try {
    if (lists !== undefined) {
      res.status(200).json({ todos: lists });
    } else {
      res.status(500).json({message: "一覧取得失敗"});
    }
  } catch (error) {
    res.status(500).json({message: "一覧取得失敗"});
  };
};

export const updateTodo: RequestHandler<{ id: string; text: string }> = async (
  req,
  res,
  next
) => {
  const id = req.params.id;
  const text = (req.body as {text: string}).text;
  try {
    const updateTodo = await Todo.update(id, text);
    if (updateTodo !== undefined) {
      res.json({ message: "TODOを変更しました。", updatedTodo: updateTodo});
    } else {
      res.json({ message: "更新に失敗しました。"});
    }
  } catch (error) {
    res.json({ message: "更新に失敗しました。"});
  }; 
};

export const deleteTodo: RequestHandler<{ id: string }> = async (req, res, next) => {
  const id = req.params.id;
  try {
    const deleteTodo = await Todo.delete(id);
    if (deleteTodo !== undefined) {
      res.json({ message: "TODOを削除しました。", id:  id});
    } else {
      res.json({ message: "TODOを削除に失敗しました。" });  
    }  
  } catch(error) {
    res.json({ message: "TODOを削除に失敗しました。" });  
  }
};
