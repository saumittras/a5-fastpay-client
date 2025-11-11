"use client";
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
import Password from "@/components/ui/Password";
import { useCashInMutation } from "@/redux/features/agent/agent.api";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import * as z from "zod";
import LoadingScreen from "../LoadingScreen";

// ✅ Schema
const cashInSchema = z.object({
  userNo: z.string().regex(/^01\d{9}$/, "Invalid phone number format"),
  amount: z.string().min(2, "must be 10"),
  pinNumber: z
    .string()
    .min(4, "Pin number must be 4 digit")
    .max(4, "Pin number must be 4 digit"),
});

// ✅ Define type
type CashInFormType = z.infer<typeof cashInSchema>;

const AgentAddMoney = () => {
  const { data: usarData, isLoading } = useUserInfoQuery(undefined);
  const [cashIn] = useCashInMutation();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof cashInSchema>>({
    resolver: zodResolver(cashInSchema),
    defaultValues: {
      userNo: "",
      amount: "",
      pinNumber: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof cashInSchema>) => {
    const cashInData = {
      userNo: data.userNo,
      amount: data.amount,
      pinNumber: data.pinNumber,
    };
    const finalData = {
      agentNo: usarData.data.phone,
      ...cashInData,
    };

    try {
      await cashIn(finalData).unwrap();
      toast.success("Cash in successful!");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      toast.error("Cash in failed. Please try again.");
    }
  };
  if (isLoading) return <LoadingScreen />;

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Add Money to User Wallet</h1>

      {/* ✅ Typed Form */}
      <Form<CashInFormType> {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="userNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone No:</FormLabel>
                <FormControl>
                  <Input placeholder="01XXXXXXXXX" {...field} />
                </FormControl>
                <FormDescription className="sr-only">
                  This is phone will be wallet account no.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount:</FormLabel>
                <FormControl>
                  <Input placeholder="1000" {...field} />
                </FormControl>
                <FormDescription className="sr-only">
                  Amount to add
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pinNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pin Number:</FormLabel>
                <FormControl>
                  <Password {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          >
            Cash In
          </button>
        </form>
      </Form>
    </div>
  );
};

export default AgentAddMoney;
