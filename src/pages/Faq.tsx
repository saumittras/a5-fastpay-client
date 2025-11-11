import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How secure is my digital wallet?",
    answer:
      "FastPay uses bank-level encryption and multi-factor authentication to protect your funds and personal data.",
  },
  {
    question: "Can I send money internationally?",
    answer:
      "Yes! FastPay supports international transactions at competitive exchange rates with instant delivery to supported countries.",
  },
  {
    question: "How do I recover my wallet if I forget my PIN?",
    answer:
      "You can reset your PIN securely through your registered email or phone number. Follow the in-app recovery steps.",
  },
  {
    question: "Is FastPay free to use?",
    answer:
      "Creating a wallet and making transactions within your country is free. Certain premium features may incur minimal fees.",
  },
  {
    question: "Which banks are supported?",
    answer:
      "FastPay supports major banks and mobile wallets. Check our integrations page for the complete list.",
  },
  {
    question: "Can I link multiple bank accounts to my wallet?",
    answer:
      "Yes, you can link multiple accounts and manage them all within a single FastPay wallet.",
  },
  {
    question: "Are there transaction limits?",
    answer:
      "Daily and monthly transaction limits vary based on verification level. Higher verification allows higher limits.",
  },
  {
    question: "Can I use FastPay for online shopping?",
    answer:
      "Absolutely! FastPay is accepted by thousands of online merchants and e-commerce platforms.",
  },
  {
    question: "What happens if my wallet is lost or stolen?",
    answer:
      "You can freeze your wallet instantly via the app. Our support team will assist with secure recovery.",
  },
  {
    question: "Does FastPay support recurring payments?",
    answer:
      "Yes, you can schedule recurring payments or bill payments directly from your wallet.",
  },
  {
    question: "Can I withdraw money to my bank?",
    answer:
      "Yes, transferring money from your wallet to a linked bank account is fast and secure.",
  },
  {
    question: "Does FastPay charge for currency conversion?",
    answer:
      "Minimal conversion fees apply for international transactions, with transparent rates shown upfront.",
  },
  {
    question: "How do I update my personal information?",
    answer:
      "You can update your profile, email, and phone number securely from the settings section of your wallet.",
  },
  {
    question: "Can I block or unblock a card linked to my wallet?",
    answer:
      "Yes, manage all linked cards in-app with instant block/unblock functionality.",
  },
  {
    question: "Is FastPay regulated?",
    answer:
      "FastPay complies with local financial regulations and anti-money laundering (AML) laws to ensure safety.",
  },
  {
    question: "Can I set spending limits for my wallet?",
    answer:
      "Yes, you can set daily or monthly spending limits to manage your budget effectively.",
  },
  {
    question: "Does FastPay have a referral program?",
    answer:
      "Yes, you can invite friends and earn rewards for successful referrals.",
  },
  {
    question: "How do I contact FastPay support?",
    answer:
      "Support is available 24/7 via chat, email, or phone. Access the help section in the app for all options.",
  },
  {
    question: "Are notifications available for transactions?",
    answer:
      "Yes, get instant push notifications for all wallet activities, including payments, deposits, and withdrawals.",
  },
  {
    question: "Can I integrate FastPay with other apps?",
    answer:
      "FastPay provides APIs and integrations for selected apps and platforms for seamless payments.",
  },
];

export default function FAQPage() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-theme-light dark:bg-theme-dark text-white">
        <div className="container mx-auto px-6 lg:px-20 py-24 flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-theme-dark dark:text-theme-light">
              Frequently Asked Questions
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300">
              Everything you need to know about using your FastPay digital
              wallet securely and efficiently.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="https://www.border.bank/Portals/0/Images/Hero/Hero-1073-P-DigitalWallet.jpg"
              alt="Digital Wallet Hero"
              className="w-full max-w-lg transition-transform hover:scale-105 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-6 lg:px-20 py-16">
        <h2 className="text-3xl font-bold text-theme-dark dark:text-theme-light text-center mb-12">
          Common Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-md rounded-lg shadow-md transition-colors"
            >
              <AccordionTrigger className="font-medium text-theme-dark dark:text-theme-light hover:text-theme-accent dark:hover:text-theme-accent transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 dark:text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
