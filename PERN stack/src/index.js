const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/tasks.routes");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); // So express can understand JSON


// Settings
app.set("port", process.env.PORT || 4000);

// Routes
app.use(router);

// Handling errors
app.use((err, req, res, next) => {
    return res.status(500).json({
        status: "error",
        message: err.message,
    });
});

app.listen(app.get("port"));
console.log("Server on port", app.get("port"));