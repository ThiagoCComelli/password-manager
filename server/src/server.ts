require('dotenv').config()
import { app } from "./app";

app.listen(3000, () => {
    console.log("Server Stated.")
})