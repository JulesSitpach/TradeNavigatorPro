"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage({ params }: { params: { locale: string } }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Basic validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setIsLoading(false);
      return;
    }

    try {
      // For now, just simulate signup success
      // Replace this with your actual Supabase signup logic when ready
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect to dashboard or login
      router.push(`/${params.locale}/dashboard`);
    } catch (err) {
      setError("Failed to create account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      data-oid="w_jt02u"
    >
      <div className="max-w-md w-full space-y-8" data-oid="loq_m91">
        <div data-oid="f.58-t0">
          <h2
            className="mt-6 text-center text-3xl font-extrabold text-gray-900"
            data-oid="ybina26"
          >
            Create your account
          </h2>
          <p
            className="mt-2 text-center text-sm text-gray-600"
            data-oid="s:i1hu3"
          >
            Or{" "}
            <Link
              href={`/${params.locale}/login`}
              className="font-medium text-blue-600 hover:text-blue-500"
              data-oid="gh.pyot"
            >
              sign in to your existing account
            </Link>
          </p>
        </div>

        <form
          className="mt-8 space-y-6"
          onSubmit={handleSubmit}
          data-oid="ytefxh4"
        >
          {error && (
            <div
              className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm"
              data-oid="sooeen8"
            >
              {error}
            </div>
          )}

          <div className="space-y-4" data-oid="cd:ueu8">
            <div data-oid="1hk-2fl">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
                data-oid="0qv6bjv"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Enter your full name"
                data-oid="nwjes7a"
              />
            </div>

            <div data-oid="1.zlf.9">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
                data-oid="3_635i5"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Enter your email address"
                data-oid="l677mz5"
              />
            </div>

            <div data-oid="b8dhqd2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
                data-oid="lagly::"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Create a password"
                data-oid="s.lvhn7"
              />
            </div>

            <div data-oid="mtifp.p">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
                data-oid="hfsytxh"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Confirm your password"
                data-oid="55d..i-"
              />
            </div>
          </div>

          <div data-oid="w4o2lyc">
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              data-oid="gfqns4d"
            >
              {isLoading ? (
                <div className="flex items-center" data-oid="5wylaq8">
                  <div
                    className="animate-spin -ml-1 mr-3 h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                    data-oid=".48jold"
                  ></div>
                  Creating Account...
                </div>
              ) : (
                "Create Account"
              )}
            </button>
          </div>

          <div className="text-center" data-oid="vpbd1:0">
            <p className="text-xs text-gray-500" data-oid="k_vaisl">
              By creating an account, you agree to our{" "}
              <Link
                href="/terms"
                className="text-blue-600 hover:text-blue-500"
                data-oid="9pyh2lf"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-blue-600 hover:text-blue-500"
                data-oid="-xe-5uq"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
