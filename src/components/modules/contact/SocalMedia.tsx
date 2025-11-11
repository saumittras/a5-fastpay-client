import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function SocialMediaCard() {
  const socialLinks = [
    { name: "Facebook", icon: <FaFacebookF />, url: "#" },
    { name: "Twitter", icon: <FaTwitter />, url: "#" },
    { name: "LinkedIn", icon: <FaLinkedinIn />, url: "#" },
    { name: "Instagram", icon: <FaInstagram />, url: "#" },
  ];

  return (
    <div className="bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 transition hover:shadow-2xl">
      <h2 className="text-2xl font-bold text-[#5e6ec9] dark:text-[#8ea0ff] mb-6">
        Follow Us
      </h2>
      <div className="flex space-x-6">
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
  );
}
