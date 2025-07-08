import { z } from "zod"

const envSchema = z.object({
	DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),
})

const safeEnv = envSchema.parse(process.env)

export const env = {
	...safeEnv,
	APP_PORT: process.env.APP_PORT || "7890",
}
