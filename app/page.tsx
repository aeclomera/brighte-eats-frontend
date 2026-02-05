import Link from "next/link";
import { Truck, Store, CreditCard } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
              Brighte Eats
            </Link>
            <div className="flex space-x-4">
              <Link
                href="/register"
                className="text-gray-600 hover:text-gray-900"
              >
                Register
              </Link>
              <Link
                href="/dashboard"
                className="text-gray-600 hover:text-gray-900"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Brighte Eats
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Express your interest in our innovative food services. Choose from
            delivery, pickup, or payment solutions tailored for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/register"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Register Your Interest
            </Link>
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg border-2 border-blue-600"
            >
              View Dashboard
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <Truck className="w-16 h-16 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-600">
                Delivery
              </h3>
              <p className="text-gray-600">
                Fast and reliable food delivery right to your doorstep
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <Store className="w-16 h-16 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-600">
                Pickup
              </h3>
              <p className="text-gray-600">
                Convenient pickup options at your preferred locations
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <CreditCard className="w-16 h-16 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-600">
                Payment
              </h3>
              <p className="text-gray-600">
                Flexible payment solutions for your convenience
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
