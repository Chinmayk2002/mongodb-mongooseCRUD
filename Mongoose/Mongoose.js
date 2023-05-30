const mongoose = require("mongoose");

// connect to mongoose
mongoose
  .connect("url")
  .then(() => {
    console.log("DB COnnected");
  })
  .catch((err) => {
    console.log(err);
  });

// schema

const studentSchema = new mongoose.Schema({
  name: String,
  city: String,
  courses: Array,
  isMarried: Boolean,
  age: Number,
});

// model

const Student = mongoose.model("Student", studentSchema);

// create

// Student.create({
//   name: "James",
//   city: "London",
//   courses: ["CS", "English", "Administration"],
//   isMarried: false,
//   age: 21,
// })
//   .then((student) => {
//     console.log(student);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// find all

// Student.find()
//   .then((students) => {
//     console.log(students);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// find age = 20

// Student.find({ age: 20 })
//   .then((students) => {
//     console.log(students);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// find single rec

// Student.findById("6475dd06dac3ae97c17639fc")
//   .then((students) => {
//     console.log(students);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// find one

// Student.findOne({ name: "Chinmay" })
//   .then((students) => {
//     console.log(students);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// update doc

// Student.findOneAndUpdate({ name: "Chinmay" }, { age: 22 }, { new: true })
//   .then((students) => {
//     console.log(students);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Student.findByIdAndUpdate(
//   "6475dd06dac3ae97c17639fc",
//   { age: 20 },
//   { new: true }
// )
//   .then((students) => {
//     console.log(students);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
