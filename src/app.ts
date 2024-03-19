import express from "express";
import cors from "cors";
import todoRouter from "./routes/todoRoutes";
import userRouter from "./routes/userRoutes";
const app = express();

// MIDDLEWARE
app.use(express.json({ limit: "10kb" }));
// Url Encoder, Allows express to parse data being sent from a form
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(
  cors({
    origin: "https://aparnastore.netlify.app/",
  })
);

// var allowlist = ["http://example1.com", "http://example2.com"];
// var corsOptionsDelegate = function (req, callback) {
//   var corsOptions;
//   if (allowlist.indexOf(req.header("Origin")) !== -1) {
//     corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
//   } else {
//     corsOptions = { origin: false }; // disable CORS for this request
//   }
//   callback(null, corsOptions); // callback expects two parameters: error and options
// };
// app.use(cors(corsOptionsDelegate));

// ROUTES
app.use("/todos", todoRouter);
app.use("/users", userRouter);
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Our Express Server!!!!");
});

export default app;