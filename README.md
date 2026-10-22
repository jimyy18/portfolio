# Jimy — Portfolio

Website portfolio pribadi, dibangun dengan React + TypeScript + Vite + Tailwind CSS. Desain mengikuti sistem warna & tipografi editorial di [DESIGN.md](./DESIGN.md) (cream canvas, coral accent, dark navy product surfaces, serif display + sans body).

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
npm run preview
```

## Deploy ke Vercel

Push repo ini ke GitHub lalu import ke [vercel.com/new](https://vercel.com/new). Vercel otomatis mendeteksi framework Vite — tidak perlu konfigurasi tambahan (build command `vite build`, output directory `dist`).

## Struktur

- `src/data/profile.ts` — semua data profil, pengalaman kerja, skill, sertifikasi (dari CV). Edit di sini untuk update konten.
- `src/components/` — section-section halaman (Hero, About, Experience, Skills, Projects, Credentials, Contact, Footer).
- Section **Proyek** saat ini masih placeholder "segera hadir" — tambahkan studi kasus proyek di `src/components/Projects.tsx` saat sudah tersedia.
