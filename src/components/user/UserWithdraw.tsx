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
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useWithdrawMoneyMutation } from "@/redux/features/walletUser/walletUser.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import z from "zod";

const UserWithdrawSchema = z.object({
  userNo: z.string().regex(/^01\d{9}$/, "Invalid phone number format"),
  amount: z.string().min(2, "must be 10"),
  pinNumber: z
    .string()
    .min(4, "Pin number must be 4 digit")
    .max(4, "Pin number must be 4 digit"),
});

export const UserWithdraw = () => {
  const { data: usarData } = useUserInfoQuery(undefined);
  const [withdrawMoney] = useWithdrawMoneyMutation();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof UserWithdrawSchema>>({
    resolver: zodResolver(UserWithdrawSchema),
    defaultValues: {
      userNo: "",
      amount: "",
      pinNumber: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof UserWithdrawSchema>) => {
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
      await withdrawMoney(finalData).unwrap();

      toast.success("Withdraw Money successful!");
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      toast.error("Cash in failed. Please try again.");
    }
  };

  return (
    <div className="p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Withdraw Money</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="userNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Agent No:</FormLabel>
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
                  <Input placeholder="1000" type="number" {...field} />
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
            name="pinNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pin Number:</FormLabel>
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

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          >
            Withdraw Money
          </button>
        </form>
      </Form>
    </div>
  );
};
