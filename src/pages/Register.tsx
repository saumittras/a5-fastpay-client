import RegisterForm from "./test/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side: gradient with welcome message */}
      <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white ">
        <h1 className="text-4xl font-bold mb-4">Welcome to FastPay</h1>
        <p className="text-lg">
          Create your account and manage your wallet easily and securely.
        </p>
      </div>

      {/* Right side: register form */}
      <div className="flex flex-col md:p-10 justify-center items-center ">
        <div className="w-full max-w-full shadow-lg rounded-2xl ">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
