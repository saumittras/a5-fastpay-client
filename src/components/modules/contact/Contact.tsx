import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSendMessageMutation } from "@/redux/features/contact/contact.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import z from "zod";

const messageSchema = z.object({
  senderName: z.string().min(2, "Name must be at least 2 characters"),
  email: z
    .email({ message: "Invalid email address format" })
    .min(5, { message: "Email must be at least 5 characters long" })
    .max(100, { message: "Email cannot exceed 100 characters" }),
  subject: z
    .string({ message: "Subject must be a string" })
    .min(3, { message: "Subject must be at least 3 characters long" })
    .max(100, { message: "Subject cannot exceed 100 characters" }),

  message: z
    .string({ message: "Message must be a string" })
    .min(20, { message: "Message must be at least 20 characters long" })
    .max(1000, { message: "Message cannot exceed 1000 characters" }),
});

export default function Contact() {
  const [sendMessage] = useSendMessageMutation();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      senderName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof messageSchema>) => {
    const formData = {
      senderName: data.senderName,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };
    try {
      await sendMessage(formData).unwrap();
      toast.success("Your Message has been sent");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Message sending failed. Please try again.");
    }
  };

  const socialLinks = [
    { name: "Facebook", icon: <FaFacebookF />, url: "#" },
    { name: "Twitter", icon: <FaTwitter />, url: "#" },
    { name: "LinkedIn", icon: <FaLinkedinIn />, url: "#" },
    { name: "Instagram", icon: <FaInstagram />, url: "#" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 space-y-20">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#5e6ec9] dark:text-[#8ea0ff] mb-4">
          Contact FastPay
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Questions, feedback, or partnership inquiries? Our team is ready to
          help you.
        </p>
      </div>

      {/* Contact Info + Form */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Info + Social */}
        <div className="space-y-8">
          {/* Contact Info Card */}
          <div className="bg-[#5e6ec9]/10 dark:bg-[#8ea0ff]/10 backdrop-blur-md rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-[#5e6ec9] dark:text-[#8ea0ff] mb-6">
              Get in Touch
            </h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Email:</strong> support@fastpay.com
              </p>
              <p>
                <strong>Phone:</strong> +880 1702 032 034
              </p>
              <p>
                <strong>Address:</strong> 123 FastPay St, Dhaka, Bangladesh
              </p>
            </div>
          </div>

          {/* Social Media Card */}
          <div className="bg-[#5e6ec9]/10 dark:bg-[#8ea0ff]/10 backdrop-blur-md rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-[#5e6ec9] dark:text-[#8ea0ff] mb-6">
              Follow Us
            </h2>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/30 dark:bg-white/20 text-[#5e6ec9] dark:text-[#8ea0ff] hover:bg-[#5e6ec9] hover:text-white dark:hover:bg-[#8ea0ff] dark:hover:text-white transition shadow-md hover:shadow-lg"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Inquiry Form */}
        <div className="bg-white dark:bg-[#1a1b2e] p-10 rounded-2xl shadow-lg dark:shadow-none">
          <h2 className="text-2xl font-bold text-[#5e6ec9] dark:text-[#8ea0ff] mb-6">
            Send Us a Message
          </h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="senderName"
                render={({ field }) => (
                  <FormItem className="w-full p-1 my-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-[#1a1b2e] dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e6ec9]">
                    <FormControl>
                      <Input placeholder="Full Name" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full p-1 my-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-[#1a1b2e] dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e6ec9]">
                    <FormControl>
                      <Input type="email" placeholder="email" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem className="w-full p-1 my-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-[#1a1b2e] dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e6ec9]">
                    <FormControl>
                      <Input type="string" placeholder="Subject" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="w-full p-1 my-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-[#1a1b2e] dark:text-gray-300 row-5 focus:outline-none focus:ring-2 focus:ring-[#5e6ec9]">
                    <FormControl>
                      <Textarea
                        className="h-full"
                        required
                        rows={5}
                        placeholder="Your Message "
                        {...field}
                      />
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
                className="w-full bg-[#5e6ec9] dark:bg-[#8ea0ff] text-white py-3 rounded-lg hover:opacity-90 transition font-semibold"
              >
                Send Message
              </button>
            </form>
          </Form>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg dark:shadow-none mt-16">
        <iframe
          title="FastPay Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0!2d90.3994525!3d23.750903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b8f0fa1234%3A0x1234567890abcdef!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1698200000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          className="border-0"
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
