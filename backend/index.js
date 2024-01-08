const express=require("express")
const app = express();

app.use(express.json());
require("dotenv").config();

const PORT=process.env.PORT

app.get("/", (req, res) => {
  res.json({message: "Welcome to Home Page" })
})

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`)
})