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
      data-oid="6yii4:a"
    >
      <div className="max-w-md w-full space-y-8" data-oid="r7h:xdf">
        <div data-oid="4zmo::u">
          <h2
            className="mt-6 text-center text-3xl font-extrabold text-gray-900"
            data-oid="pvgi-mo"
          >
            Create your account
          </h2>
          <p
            className="mt-2 text-center text-sm text-gray-600"
            data-oid="z10j9ab"
          >
            Or{" "}
            <Link
              href={`/${params.locale}/login`}
              className="font-medium text-blue-600 hover:text-blue-500"
              data-oid="42msse1"
            >
              sign in to your existing account
            </Link>
          </p>
        </div>

        <form
          className="mt-8 space-y-6"
          onSubmit={handleSubmit}
          data-oid="x0tiz1o"
        >
          {error && (
            <div
              className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm"
              data-oid="ly_sdji"
            >
              {error}
            </div>
          )}

          <div className="space-y-4" data-oid="bg05cuy">
            <div data-oid="e4jny6a">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
                data-oid=".iqn3kb"
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
                data-oid="8byqi3i"
              />
            </div>

            <div data-oid="cw52je2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
                data-oid="ntgenmt"
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
                data-oid="wasp:m3"
              />
            </div>

            <div data-oid="z5pdl5a">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
                data-oid="5em-.:7"
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
                data-oid="i9_yhn_"
              />
            </div>

            <div data-oid="npv-597">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
                data-oid="icg_7jt"
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
                data-oid="9yfju6v"
              />
            </div>
          </div>

          <div data-oid="zohi51u">
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              data-oid="ff3fx1d"
            >
              {isLoading ? (
                <div className="flex items-center" data-oid="yiphvro">
                  <div
                    className="animate-spin -ml-1 mr-3 h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                    data-oid="y1c533x"
                  ></div>
                  Creating Account...
                </div>
              ) : (
                "Create Account"
              )}
            </button>
          </div>

          <div className="text-center" data-oid="cz-w4ob">
            <p className="text-xs text-gray-500" data-oid="5.j1528">
              By creating an account, you agree to our{" "}
              <Link
                href="/terms"
                className="text-blue-600 hover:text-blue-500"
                data-oid="fp6ng6a"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-blue-600 hover:text-blue-500"
                data-oid="cq4oq1z"
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
