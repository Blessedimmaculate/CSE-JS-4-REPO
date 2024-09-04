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
  } catch (error) {
    res.send("Error adding new Student!!!");
    console.log("Add Student Error", error);
  }
});

// READ SINGLE STUDENT
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById({_id : req.params.id})
    res.status(200).json(student);

  } catch (error) {
    res.send("Error Finding this ka Student!!!");
    console.log("Failed to get Student", error)
  }
})

// UPDATE A STUDENT
router.post("/", async (req, res) => {
  const {id} = req.params // destructured req body object to id 
  updates = {...req.body} // spreading
  try{
      const student = await Student.findByIdAndUpdate(id, updates);
      if(!student) throw Error('Something went wrong!')
      const newStudent = {...student._doc, ...updates};
      res.status(200).json(newStudent)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
})

// DELETE A STUDENT


module.exports = router;

