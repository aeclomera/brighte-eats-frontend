import LeadsDashboard from "@/components/LeadsDashboard";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
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
                className="text-blue-600 font-medium"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="py-10">
        <LeadsDashboard />
      </main>
    </div>
  );
}

