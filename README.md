# HMTI Digital Hub — Explore Technology, Build Your Future

**HMTI Digital Hub** adalah aplikasi web portal informasi digital yang dirancang khusus untuk mahasiswa Teknik Informatika dan memperkenalkan peran **Departemen IPTEK HMTI (Himpunan Mahasiswa Teknik Informatika)**.

Proyek ini dibangun sebagai demonstrasi pemahaman mendalam tentang fundamental web development tanpa menggunakan framework pihak ketiga, menekankan struktur kode yang rapi, responsif, dan interaktif.

---

## 📌 Fitur Utama

- **Theme Switcher (Dark / Light Mode)**: Pengaturan mode tampilan yang responsif dengan penyimpanan preferensi di `localStorage`.
- **Dynamic Content Rendering**: Penyajian data kegiatan dan artikel secara dinamis menggunakan manipulasi DOM Vanilla JavaScript.
- **Live Search & Category Filtering**: Fitur pencarian kata kunci secara otomatis dan penyaringan kegiatan berdasarkan kategori (*Software* / *Hardware*).
- **Interactive Article Modal**: Pembaca artikel interaktif dalam bentuk modal tanpa memerlukan *page reload* atau *backend*.
- **Client-Side Form Validation**: Validasi input formulir kontak (nama, format email regex, panjang pesan) secara langsung disertai notifikasi *toast alert* berbasis simulasi.
- **Sticky Navbar & Smooth Scroll**: Navigasi yang tetap berada di atas saat di-*scroll*, dilengkapi dengan indikator navigasi aktif menggunakan `IntersectionObserver` dan *hamburger drawer menu* pada layar mobile.
- **Fully Responsive Web Design**: Layout adaptif menggunakan CSS Grid & Flexbox yang optimal untuk tampilan Desktop, Tablet, dan Smartphone.

---

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur web semantik (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **CSS3**: Variable CSS (`--custom-properties`), Flexbox, Grid, Glassmorphism, animations, dan Media Queries.
- **Vanilla JavaScript (ES6+)**: Array/Object manipulation, DOM Event Handling, RegEx validation, LocalStorage API, & IntersectionObserver API.
- **Font Awesome 6 (CDN)**: Iconography visual teknologi.
- **Google Fonts**: Typography modern (*Plus Jakarta Sans* & *JetBrains Mono*).

---

## 📁 Struktur Folder Proyek

```
HMTI/
├── index.html            # File HTML utama (struktur semantik & modal)
├── css/
│   └── style.css         # Design system, CSS variables, dark mode, layout & animasi
├── js/
│   └── script.js         # Logika JS (rendering data, search/filter, modal, form validation, theme)
├── assets/
│   └── images/           # Direktori untuk aset gambar/visual pendukung
└── README.md             # Dokumentasi proyek & panduan penggunaan
```

---

## 🚀 Cara Menjalankan Proyek Secara Lokal

Proyek ini merupakan **Static Web Application**, sehingga dapat dijalankan langsung tanpa memerlukan server Node.js atau database:

1. **Clone / Download Repositori**:
   ```bash
   git clone https://github.com/username/hmti-digital-hub.git
   cd hmti-digital-hub
   ```
2. **Buka di Browser**:
   - Double-click file `index.html` langsung dari file explorer Anda, ATAU
   - Gunakan extension **Live Server** di VS Code (klik kanan pada `index.html` -> *Open with Live Server*).

---

## 🌐 Cara Deploy ke GitHub Pages / Vercel

### 1. GitHub Pages
1. Push repositori ini ke GitHub.
2. Buka repositori di GitHub -> Pilih tab **Settings**.
3. Pada menu navigasi sebelah kiri, klik **Pages**.
4. Di bagian *Build and deployment* -> *Source*, pilih **Deploy from a branch**.
5. Pilih branch `main` (atau `master`) dan folder `/ (root)`, lalu klik **Save**.
6. Website Anda akan dipublikasikan dalam beberapa menit di URL `https://username.github.io/hmti-digital-hub/`.

### 2. Vercel
1. Login ke [Vercel Dashboard](https://vercel.com).
2. Klik **Add New...** -> **Project**.
3. Import repositori GitHub Anda.
4. Pada konfigurasinya, biarkan semua default (karena ini adalah proyek static HTML/CSS/JS).
5. Klik **Deploy**. Website akan langsung aktif dengan domain `.vercel.app`.

---

## 📜 Rekomendasi Urutan Commit Git

Untuk alur pengembangan yang profesional dan terstruktur, berikut rekomendasi pesan commit yang masuk akal:

1. `feat: initial project setup and directory structure`
2. `feat: add HTML semantic structure for header and hero section`
3. `style: implement base CSS variables, dark theme system, and layout resets`
4. `feat: build IPTEK department cards for software and hardware`
5. `feat: add dynamic activities rendering and search filter JS logic`
6. `feat: add article grid rendering and interactive modal popup`
7. `feat: implement contact form client-side regex validation and toast alert`
8. `feat: add theme switcher dark/light mode with localStorage persistence`
9. `style: optimize responsive layouts for mobile and tablet breakpoints`
10. `docs: complete README documentation and presentation guide`

---

## 💡 Penjelasan Kode & Panduan Presentasi / Technical Interview

Jika Anda mempresentasikan proyek ini kepada dosen atau interviewer, berikut poin-poin teknis kunci yang perlu Anda highlight:

### 1. Penjelasan Fungsi Setiap File
- `index.html`: Berisi kerangka semantik HTML5 yang rapi, memastikan keterbacaan kode (*clean code*) dan aksesibilitas tanpa *hardcoded UI content* berlebih.
- `style.css`: Memanfaatkan *CSS Custom Properties* (`:root` dan `[data-theme="dark"]`) untuk mempermudah manajemen warna dan skema *Dark Mode*. Menggunakan Flexbox & Grid untuk layout tanpa bantuan framework seperti Tailwind.
- `script.js`: Berisi logika murni Vanilla JavaScript yang memisahkan antara *Data (State)*, *DOM Rendering*, dan *Event Listeners*.

### 2. Penjelasan Fitur JavaScript Kunci
- **Array Methods (`map`, `filter`, `find`, `includes`)**:
  - `map()` digunakan untuk mengubah array data (`activitiesData`, `articlesData`) menjadi elemen HTML secara dinamis.
  - `filter()` dan `includes()` digunakan pada pencarian live search dan penyaringan kategori kegiatan.
  - `find()` digunakan untuk mencari data artikel spesifik yang diklik untuk ditampilkan pada Modal.
- **DOM Manipulation & Delegation**:
  - Penggunaan `innerHTML` untuk injeksi card dinamis.
  - Event delegation pada grid artikel untuk menangani klik tombol *"Baca Selengkapnya"*.
- **Browser APIs**:
  - `localStorage.setItem()` & `getItem()` menyimpan status *Dark Mode* pengguna agar tidak ter-reset saat halaman di-refresh.
  - `IntersectionObserver API` mendeteksi posisi scroll layar secara efisien untuk memperbarui status link aktif pada Navbar.
- **Form Validation**:
  - Validasi regex email `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` memastikan format input pengguna valid sebelum triggering notifikasi toast.
