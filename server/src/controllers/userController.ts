import { Request, Response } from "express";
import fs from "fs/promises";
import userModel from "../models/userModel";

export const feedData = async (req: Request, res: Response) => {
  const filePath = "./src/utils/heliverse_mock_data.json";
  try {
    const data = await fs.readFile(filePath, "utf-8");
    const jsonData = JSON.parse(data);
    const resp = await userModel.insertMany(jsonData);
    res.status(200).json({ data: resp });
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  const { page: querypage } = req.query;
  try {
    const page = querypage ? parseInt(querypage.toString(), 10) : 1;
    const limit = 20;
    const skip = (page - 1) * limit;

    const users = await userModel.find().skip(skip).limit(limit);
    const totalUsers = await userModel.countDocuments();

    const totalPages = Math.ceil(totalUsers / limit);

    res.status(200).json({
      users,
      currentPage: page,
      totalPages,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const userData = await userModel.find({ id });
    console.log(userData);
    res.status(200).json({ data: userData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const {
    id,
    first_name,
    last_name,
    email,
    gender,
    avatar,
    domain,
    available,
  } = req.body;
  try {
    const newUser = await userModel.create({
      id,
      first_name,
      last_name,
      email,
      gender,
      avatar,
      domain,
      available,
    });

    console.log(newUser);
    res.status(200).json({ data: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const {
    id,
    first_name,
    last_name,
    email,
    gender,
    avatar,
    domain,
    available,
  } = req.body;
  try {
    const newUser = await userModel.findByIdAndUpdate(
      id,
      {
        $set: {
          first_name,
          last_name,
          email,
          gender,
          avatar,
          domain,
          available,
        },
      },
      { new: true }
    );

    console.log(newUser);
    res.status(200).json({ data: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const userData = await userModel.deleteOne({ _id: id });
    console.log(userData);
    if (userData.deletedCount === 1) {
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};
