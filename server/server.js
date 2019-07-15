const path = require("path");
const express = require("express");
const cors = require("cors");
const passport = require("passport");

const informationRoutes = require("./routes/information");
const authRoutes = require("./routes/auth");

const server = express();

server.use(cors("*"));
server.use(passport.initialize());

server.use(express.json());
server.use(express.static(path.join(__dirname, "../public")));

server.use("/api/auth", authRoutes);
server.use("/api/information", informationRoutes);

module.exports = server;
