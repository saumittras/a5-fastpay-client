"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Password from "@/components/ui/Password";
import { useUpdateProfileMutation } from "@/redux/features/auth/auth.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import * as z from "zod";

// ✅ Validation schema
const updateSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),

  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const UpdateProfile = () => {
  const [updateProfile] = useUpdateProfileMutation();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof updateSchema>>({
    resolver: zodResolver(updateSchema),
    defaultValues: {
      name: "",
      password: "",
    },
  });

  // ✅ Submit handler
  const onSubmit = async (data: z.infer<typeof updateSchema>) => {
    // console.log(data);
    const userInfo = {
      name: data.name,
      password: data.password,
    };

    try {
      await updateProfile(userInfo).unwrap();
      toast.success("Profile updated successfully!");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      toast.error("Update failed. Please try again.");
    }
  };

  return (
    <div className="p-6 rounded-2xl shadow  dark:bg-slate-900">
      <h2 className="text-2xl font-semibold mb-4">Profile Update</h2>

      <Card>
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Update Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Password {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Update Profile
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
