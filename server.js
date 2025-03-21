const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
dotenv.config();
// var admin = require("firebase-admin");
// var serviceAccount = require("./serviceAccountKey.json");
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });
// const authRouter = require("./routes/auth");
// const agencyRouter = require("./routes/agency");
const expeditionRouter = require("./routes/expedition");

mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log(err));

// app.use("/api/auth", authRouter);
// app.use("/api/agency", agencyRouter);
app.use("/api/expedition", expeditionRouter);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen( 6002, () =>
  console.log(`Example app listening on port !`)
);
