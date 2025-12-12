import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          ☁️ PaaS App Awan
        </h1>
        <p className="text-gray-600 mb-6">
          Aplikasi sederhana yang dihosting di Vercel
        </p>
        
        <div className="bg-blue-50 rounded-lg p-4 mb-6 text-left">
          <h2 className="font-semibold text-gray-800 mb-3">Fitur:</h2>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>✅ Hosting gratis di Vercel</li>
            <li>✅ Next.js dengan TypeScript</li>
            <li>✅ API serverless</li>
            <li>✅ Auto-deploy dari Git</li>
          </ul>
        </div>

        <div className="space-y-3">
          <Link
            href="/api/hello"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Lihat API
          </Link>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Vercel
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          Buat dengan ❤️ menggunakan Next.js
        </p>
      </div>
    </main>
  );
}
