import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import { redirectUrl } from "./routes/urlRedirect_route.js";
import { auth_route } from "./routes/auth_route.js";
import { urlPrivate_route } from "./routes/urlPrivate_route.js";
import { connectDB } from "./db/db_connection.js";
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/", redirectUrl);
app.use("/api/auth", auth_route);
app.use("/api/urlPrivate", urlPrivate_route);
app.get('/',(req,res)=>{
  return res.status(200).send('your server page working fine')
})

connectDB()
  .then(() =>
    app.listen(process.env.PORT, () => {
      console.log(`Your Server is Connected Successfully on ${process.env.PORT}`);
    })
  )
  .catch((e) => console.log(e, " err-index.js"));
