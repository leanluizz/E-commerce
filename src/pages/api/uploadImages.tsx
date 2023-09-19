import type { NextApiRequest, NextApiResponse } from 'next'
import { sql } from '@vercel/postgres'
import pg from 'pg';
import ENV from 'dotenv-safe'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
){
    ENV.config()
    const { Pool } = pg;
    const pool = new Pool({
      connectionString: process.env.POSTGRES_URL + "?sslmode=require",
    })
    console.log(req);
    
}