const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const filepath = path.join(__dirname, "employees.json");

app.get("/", (req, res) => {
    res.json("Backend running successfully!");
});

// POST API
// app.post("/api/employee", (req, res) => {
//     const newEmployee = req.body;

//     // Read existing file
//     fs.readFile(filepath, "utf8", (err, data) => {
//         if (err) {
//             console.log("Read error:", err);
//             return res.status(500).json({ message: "Error reading file" });
//         }

//         let employees = [];

//         // If file has data, parse it
//         if (data) {
//             employees = JSON.parse(data);
//         }

//         // Add new employee
//         employees.push(newEmployee);

//         // Write updated data to file
//         fs.writeFile(filepath, JSON.stringify(employees, null, 2), (err) => {
//             if (err) {
//                 console.log("Write Error:", err);
//                 return res.status(500).json({ message: "Error saving data" });
//             }

//             res.json({
//                 message: "Employee saved successfully!",
//                 data: newEmployee
//             });
//         });
//     });
// });


app.post("/api/employee", (req, res) => {
    const newEmployee = req.body;

    fs.readFile(filepath, "utf8", (err, data) => {
        if (err) {
            console.log("Read error:", err);
            return res.status(500).json({ message: "Error reading file" });
        }

        let employees = [];

        if (data) {
            employees = JSON.parse(data);
        }

        employees.push(newEmployee);

        fs.writeFile(filepath, JSON.stringify(employees, null, 2), (err) => {
            if (err) {
                console.log("Write Error:", err);
                return res.status(500).json({ message: "Error saving data" });
            }

            res.json({
                message: "Employee saved successfully!",
                data: newEmployee
            });
        });
    });
});


app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
