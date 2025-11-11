import { z } from "zod";

export const loginSchema = z.object({
  phone: z.string().regex(/^(?:\+8801\d{9}|01\d{9})$/, {
    message: "Enter a valid Bangladeshi phone number.",
  }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }),
});

export type LoginFormData = z.infer<typeof loginSchema>;
