import type { NextApiRequest, NextApiResponse } from 'next'
import pg from 'pg';
import bcrypt from 'bcrypt'
import { sql } from '@vercel/postgres'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const { Pool } = pg;
    const pool = new Pool({
      connectionString: process.env.POSTGRES_URL + "?sslmode=require",
    })
    const { email, passwordReset } = req.body
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(passwordReset, salt) //Encrypt
    console.log(passwordHash);
    
    const query: any = await sql.query(`UPDATE users SET password= '${passwordHash}' WHERE email = '${email}'`)
    query ? res.send('Ok') : res.send('Err')
    
}