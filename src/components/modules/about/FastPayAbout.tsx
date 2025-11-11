const teamMembers = [
  {
    name: "Saumittra Sarker",
    role: "Founder & CEO",
    image:
      "https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg",
  },
  {
    name: "Jane Doe",
    role: "CTO",
    image:
      "https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "John Smith",
    role: "Product Manager",
    image: "https://terracesmiles.com/wp-content/uploads/2016/10/eight.jpg",
  },
];

export default function FastPayAbout() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 space-y-20">
      {/* Hero / Intro */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#5e6ec9] dark:text-[#8ea0ff] mb-4">
          About FastPay
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          FastPay is a secure, fast, and reliable digital wallet that simplifies
          money management. Send, receive, and track your money anytime,
          anywhere with ease.
        </p>
      </div>

      {/* Service Story */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://www.border.bank/Portals/0/Images/Hero/Hero-1073-P-DigitalWallet.jpg"
          alt="Service Story"
          className="rounded-xl shadow-lg w-full object-cover dark:brightness-90"
        />
        <div>
          <h2 className="text-3xl font-bold text-[#5e6ec9] dark:text-[#8ea0ff] mb-4">
            Our Journey
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            FastPay was created to solve the common issues of slow, insecure,
            and complicated digital transactions. Traditional payment methods
            are often slow, unreliable, and hard to track.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            With FastPay, users can send and receive money instantly, securely,
            and transparently. We aim to bring financial empowerment to
            everyone, from individuals to businesses.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-blue-50 dark:bg-[#1a1b2e] rounded-xl p-10 shadow-md dark:shadow-none">
          <h2 className="text-3xl font-bold text-[#5e6ec9] dark:text-[#8ea0ff] mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            To empower individuals and businesses with a fast, secure, and
            reliable digital wallet that simplifies financial transactions.
          </p>
        </div>
        <div className="bg-blue-50 dark:bg-[#1a1b2e] rounded-xl p-10 shadow-md dark:shadow-none">
          <h2 className="text-3xl font-bold text-[#5e6ec9] dark:text-[#8ea0ff] mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            To become the most trusted and widely used digital wallet,
            connecting people to seamless financial experiences globally.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div>
        <h2 className="text-3xl font-bold text-center text-[#5e6ec9] dark:text-[#8ea0ff] mb-12">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {["Security", "Reliability", "Transparency", "Innovation"].map(
            (value) => (
              <div
                key={value}
                className="bg-white dark:bg-[#1a1b2e] rounded-xl p-6 text-center shadow-md dark:shadow-none hover:shadow-lg dark:hover:shadow-gray-700 transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {value}
                </h3>
              </div>
            )
          )}
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-3xl font-bold text-center text-[#5e6ec9] dark:text-[#8ea0ff] mb-10">
          Meet Our Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white dark:bg-[#1a1b2e] rounded-xl shadow-md dark:shadow-none p-6 text-center hover:shadow-lg dark:hover:shadow-gray-700 transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {member.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
