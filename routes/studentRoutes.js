const express = require("express");
const router = express.Router();

// import modal and store in a variable
const Student = require("../models/student");

// READ - getting all students from db
router.get("/", async (req, res) => {
  try {
    const allStudents = await Student.find();
    res.status(200).json(allStudents);

    // res.send("fetched all Students successfully");
    console.log("All Students", allStudents.length);
  } catch (error) {
    res.send("Error fetching all Students!!!");
    console.log("All Students Error", error);
  }
});

// CREATE - adding a student to db
router.post("/", async (req, res) => {
  try {
    const newStudent = Student(req.body);
    await newStudent.save();

    res.status(201).json(newStudent);
    //   res.send("added new Student successfully");
  } catch (error) {
    res.send("Error adding new Student!!!");
    console.log("Add Student Error", error);
  }
});

module.exports = router;

// student
