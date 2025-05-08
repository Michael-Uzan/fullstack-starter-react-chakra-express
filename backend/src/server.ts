import { Request, Response } from "express";
import express from "express";
import cors from "cors";
import path from "path";
import http from "http";
import { logger } from "./services/logger.service";

const app = express();
const server = http.createServer(app);

// const todoRoutes = require("./api/todo/todo.routes");
// const authRoutes = require("./api/auth/auth.routes");
// const userRoutes = require("./api/user/user.routes");

// const session = expressSession({
//   secret: "coding is amazing",
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: false },
// });

app.use(express.json({ limit: "50mb" }));
app.use(express.static("public"));
// app.use(session);

if (process.env.NODE_ENV === "production") {
  // Express serve static files on production environment
  app.use(express.static(path.resolve(__dirname, "src")));
} else {
  // Configuring CORS
  const corsOptions = {
    // Make sure origin contains the url your frontend is running on
    origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
    credentials: true,
  };
  app.use(cors(corsOptions));
}

// app.use("/api/todo", todoRoutes);
// app.use("/api/auth", authRoutes);
// app.use("/api/user", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 3030;

server.listen(port, () => {
  logger.info(`App is running on port: ${port}`);
});
