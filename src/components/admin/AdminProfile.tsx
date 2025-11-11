/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUpdateProfileMutation } from "@/redux/features/auth/auth.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import Password from "../ui/Password";

// ✅ Zod Schema with Validation
const formSchema = z
  .object({
    name: z.string().optional(),
    password: z
      .string()
      .min(8, "Old password must be at least 6 characters long"),
    newPassword: z
      .string()
      .min(8, "New password must be at least 6 characters long")
      .optional()
      .or(z.literal("")),
    confirmPassword: z.string().optional().or(z.literal("")),
    newPinNumber: z
      .string()
      .regex(/^\d{4}$/, "PIN must be exactly 4 digits")
      .optional()
      .or(z.literal("")),
    confirmPinNumber: z
      .string()
      .regex(/^\d{4}$/, "PIN must be exactly 4 digits")
      .optional()
      .or(z.literal("")),
  })
  .refine(
    (data) =>
      (!data.newPassword && !data.confirmPassword) ||
      data.newPassword === data.confirmPassword,
    {
      message: "New password and confirm password do not match",
      path: ["confirmPassword"],
    }
  )
  .refine(
    (data) =>
      (!data.newPinNumber && !data.confirmPinNumber) ||
      data.newPinNumber === data.confirmPinNumber,
    {
      message: "PIN and confirm PIN do not match",
      path: ["confirmPinNumber"],
    }
  );

type FormValues = z.infer<typeof formSchema>;

export default function UpdateProfile() {
  const [updateProfile] = useUpdateProfileMutation();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      newPassword: "",
      confirmPassword: "",
      newPinNumber: "",
      confirmPinNumber: "",
      password: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const payload = {
        name: values.name,
        newPassword: values.newPassword,
        newPinNumber: values.newPinNumber,
        password: values.password,
      };

      console.log(payload);

      const res = await updateProfile(payload).unwrap();

      if (res) {
        toast("Profile Updated Successfully");
        form.reset();
      }
    } catch (error: any) {
      console.log(error);
      toast("Update failed");
    }
  };

  return (
    <Card className="max-w-xl mx-auto mt-6">
      <CardHeader>
        <CardTitle>Update Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {/* Full Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter new name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* New Password */}

            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Password {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm New Password</FormLabel>
                  <FormControl>
                    <Password {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* New PIN */}
            <FormField
              control={form.control}
              name="newPinNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your New PIN</FormLabel>
                  <FormControl>
                    <Password {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm PIN */}

            <FormField
              control={form.control}
              name="confirmPinNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm PIN</FormLabel>
                  <FormControl>
                    <Password {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Old Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Your Password and Update *</FormLabel>
                  <FormControl>
                    <Password {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <div className="flex justify-end">
              <Button type="submit">Update</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
