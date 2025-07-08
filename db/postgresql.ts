import { drizzle } from "drizzle-orm/node-postgres"
import { env } from "env"
export const db = drizzle(env.DATABASE_URL ?? "")
const dbObj = new URL(env.DATABASE_URL ?? "")
console.log(`Database URI:  ${dbObj.protocol}//${dbObj.hostname}:${dbObj.port}${dbObj.pathname}`)
