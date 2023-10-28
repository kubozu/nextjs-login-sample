"use client";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => signIn()}
      >
        Loginボタン
      </button>
    </div>
  );
}

export default Login;
