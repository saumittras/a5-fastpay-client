// import FastIcon from "@/assets/icons/fast.png";
// import MobileIcon from "@/assets/icons/mobile.png";
// import SecureIcon from "@/assets/icons/secure.png";
// import TrustedIcon from "@/assets/icons/trusted.png";

const features = [
  {
    title: "Secure Transactions",
    description:
      "Your money and data are protected with bank-level encryption and robust security measures.",
    icon: "https://cdn-icons-png.flaticon.com/512/18292/18292047.png",
  },
  {
    title: "Fast & Instant",
    description:
      "Send and receive money instantly, with zero delays and smooth transaction processing.",
    icon: "https://cdn1.iconfinder.com/data/icons/business-office-41/64/x-48-512.png",
  },
  {
    title: "Trusted by Thousands",
    description:
      "Millions of users rely on our platform for reliable and seamless financial management.",
    icon: "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-trust-vector-png-image_6480073.png",
  },
  {
    title: "Mobile Friendly",
    description:
      "Manage your wallet on the go with a fully responsive and intuitive mobile experience.",
    icon: "https://media.istockphoto.com/id/1183227867/vector/electronic-wallet-on-cellphone-vector-icon-flat-cartoon-mobile-phone-screen-with-digital.jpg?s=612x612&w=0&k=20&c=N3DBx-YCmYRNMTl7hWHdzW4QWtQxgJNX2B8KHBEgIJ0=",
  },
];

export default function FeaturesPage() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto px-6 lg:px-20 space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-theme-light dark:text-theme-dark">
            Why Choose FastPay?
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
            Experience the ultimate digital wallet that combines speed,
            security, and ease-of-use for all your financial needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-full h-full mb-2 object-contain"
              />
              <h3 className="text-2xl font-semibold text-theme-light dark:text-theme-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
