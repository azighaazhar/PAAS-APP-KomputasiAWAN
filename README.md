# 🌤️ PaaS App Awan

Aplikasi web sederhana yang di-hosting di **Vercel** - platform PaaS gratis.

## 📋 Persyaratan

- Node.js 18+ 
- npm atau yarn
- Git account (untuk deployment ke Vercel)

## 🚀 Memulai

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) di browser.

### 3. Build untuk Production
```bash
npm run build
npm start
```

## 📦 Struktur Proyek

```
src/
├── app/
│   ├── api/
│   │   └── hello/
│   │       └── route.ts          # API serverless
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── public/                        # Static files
package.json
vercel.json                        # Konfigurasi Vercel
tsconfig.json
tailwind.config.ts
next.config.js
```

## 🌐 Deploy ke Vercel

### Opsi 1: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

### Opsi 2: Via GitHub Integration
1. Push kode ke GitHub repository
2. Kunjungi [vercel.com](https://vercel.com)
3. Klik "New Project"
4. Import repository GitHub Anda
5. Vercel akan auto-deploy setiap kali Anda push ke main branch

### Opsi 3: Via Vercel Dashboard
1. Login ke [vercel.com](https://vercel.com)
2. Klik "Add New..." → "Project"
3. Import dari Git repository
4. Deploy!

## 🔗 API Endpoints

### GET /api/hello
Mengembalikan informasi aplikasi dalam JSON.

```bash
curl http://localhost:3000/api/hello
```

Response:
```json
{
  "message": "Halo dari PaaS App Awan! 🌤️",
  "timestamp": "2025-12-12T...",
  "platform": "Vercel",
  "features": ["Hosting gratis", "Skalabilitas otomatis", "CDN global", "Auto-deploy"]
}
```

## 🎨 Teknologi

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vercel** - Hosting & deployment

## ✨ Fitur Vercel (Gratis)

✅ Hosting unlimited untuk project  
✅ Auto-scaling & CDN global  
✅ SSL/HTTPS included  
✅ Environment variables  
✅ Serverless functions  
✅ Preview deployments  
✅ Analytics dasar  

## 📝 Environment Variables

Buat file `.env.local` untuk development:
```
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## 🐛 Troubleshooting

**Port 3000 sudah digunakan?**
```bash
npm run dev -- -p 3001
```

**Build gagal?**
```bash
rm -rf .next
npm run build
```

**Node modules error?**
```bash
rm -rf node_modules
npm install
```

## 📚 Referensi

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com)

## 📄 License

MIT

---

**Dibuat dengan ❤️ menggunakan Next.js di Vercel**
