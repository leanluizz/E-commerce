"use strict";
import { sql } from '@vercel/postgres'
import pg from 'pg';
import nodemailer from 'nodemailer'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { Pool } = pg;
  const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  })
  
const query = await sql.query(`SELECT email FROM Users WHERE email = '${req.body.mail}';`)
let random: number = Math.floor(Math.random() * 90000) + 10000;
const { rowCount } = query

if (rowCount >= 1) { // if email exist in database
  await sql.query(`INSERT INTO codes (email, code) VALUES ('${req.body.mail}', ${random})`)

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: "luizzleandro827@gmail.com",
    pass: "rkxylqvftdtowrcw",
  },
});

 const main = async () => {
  const info = await transporter.sendMail({
    from: '"ShoesShooting - Robot 👻" luizzleandro827@gmail.com', // sender address
    to: `${req.body.mail}`, // list of receivers
    subject: "Shoes SHooting", // Subject line
    text: "Hello let's change this passwd!", // plain text body
    html: `
    <h1>Insert this code in <a href='http://localhost:3000/forgot-your-password'>Recovery password</a>.</h1>
    <br>
    code: ${random}
    `, // html body
  });
}
main().catch(console.error);
}
res.send(rowCount)
}
  
