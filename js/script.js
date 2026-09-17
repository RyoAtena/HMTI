const activitiesData = [
  {
    id: 1,
    title: "Workshop Web Development",
    category: "Software",
    date: "25 Oktober 2026",
    location: "Gedung D 3 N",
    description: "Pelatihan hands-on membangun website modern responsive menggunakan HTML5, CSS3, dan Vanilla JavaScript untuk mahasiswa tingkat pertama dan kedua.",
    icon: "fa-code"
  },
  {
    id: 2,
    title: "Basic Networking & Cisco Fundamentals",
    category: "Hardware",
    date: "12 November 2026",
    location: "Gedung D 3 N",
    description: "Sesi kumpul teknis mempelajari IP Addressing, Subnetting, konfigurasi Router/Switch Cisco, dan simulasi jaringan komputer.",
    icon: "fa-network-wired"
  },
  {
    id: 3,
    title: "Introduction to Git & GitHub",
    category: "Software",
    date: "05 Desember 2026",
    location: "Gedung D 3 N",
    description: "Memahami sistem version control Git, alur kerja kolaborasi proyek open-source, branching, dan pengelolaan repositori GitHub.",
    icon: "fa-code-branch"
  },
  {
    id: 4,
    title: "Hardware Assembly & Troubleshooting Session",
    category: "Hardware",
    date: "18 Desember 2026",
    location: "Gedung D 3 N",
    description: "Praktik langsung merakit komponen PC desktop, pengujian kompatibilitas spesifikasi, serta penanganan masalah (troubleshooting) perangkat keras.",
    icon: "fa-microchip"
  }
];

const articlesData = [
  {
    id: "git-importance",
    title: "Mengapa Git Penting dalam Software Development?",
    date: "15 September 2026",
    category: "Software",
    author: "Tim IPTEK Software",
    readTime: "4 Menit Baca",
    summary: "Git adalah sistem Version Control terpopuler yang wajib dikuasai oleh developer modern untuk melacak perubahan kode dan berkolaborasi secara efisien.",
    content: `
      <p>Dalam dunia rekayasa perangkat lunak modern, <strong>Git</strong> telah menjadi standar industri yang tidak terpisahkan. Baik Anda seorang pengembang indie maupun bagian dari tim rekayasa besar, memahami cara kerja sistem pengontrol versi (Version Control System) adalah keterampilan fundamental.</p>
      
      <h4>1. Melacak Riwayat Perubahan Kode (Version History)</h4>
      <p>Git memungkinkan Anda menyimpan snapshot dari proyek Anda setiap kali perubahan signifikan dibuat (commit). Jika terjadi bug serius setelah pembaruan kode, Anda dapat dengan mudah mengembalikan (revert) basis kode ke versi stabil sebelumnya tanpa risiko kehilangan data.</p>
      
      <h4>2. Memfasilitasi Kolaborasi Tim (Branching & Merging)</h4>
      <p>Dengan fitur <em>branching</em>, anggota tim dapat mengerjakan fitur yang berbeda secara independen pada cabang terpisah tanpa mengganggu kode utama (main branch). Setelah fitur teruji, kode dapat digabungkan kembali secara aman melalui <em>Pull Request</em>.</p>
      
      <h4>3. Integrasi Ekosistem Cloud (GitHub, GitLab, Bitbucket)</h4>
      <p>Platform seperti GitHub memberikan wadah portofolio publik, ulasan kode (code review), sertifikasi otomatisasi CI/CD, dan partisipasi dalam proyek open-source global.</p>
      
      <p><strong>Kesimpulan:</strong> Bagi mahasiswa Teknik Informatika, menguasai Git sejak dini adalah investasi terbaik dalam mempersiapkan diri menghadapi industri perangkat lunak.</p>
    `
  },
  {
    id: "web-fundamentals",
    title: "Mengenal Fundamental Web Development",
    date: "10 September 2026",
    category: "Software",
    author: "Tim IPTEK Software",
    readTime: "5 Menit Baca",
    summary: "Memahami tiga pilar utama pengembangan web: HTML sebagai struktur, CSS sebagai visual styling, dan JavaScript sebagai logika interaktif.",
    content: `
      <p>Pengembangan web (Web Development) merupakan salah satu cabang populer di bidang Informatika. Sebelum melompat ke framework kompleks seperti React atau Next.js, setiap pengembang wajib menguasai <strong>Tiga Pilar Fondasi Web</strong>.</p>
      
      <h4>1. HTML5 (HyperText Markup Language)</h4>
      <p>HTML adalah kerangka utama dari sebuah halaman web. Penggunaan elemen HTML secara semantik (seperti <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;footer&gt;</code>) sangat penting untuk aksesibilitas dan SEO (Search Engine Optimization).</p>
      
      <h4>2. CSS3 (Cascading Style Sheets)</h4>
      <p>CSS memberi keindahan visual pada struktur HTML. Teknik modern seperti CSS Flexbox, Grid Layout, dan CSS Custom Properties (Variables) memungkinkan pembuatan antarmuka responsif yang dapat menyesuaikan tampilan layar perangkat mobile maupun desktop.</p>
      
      <h4>3. Vanilla JavaScript (ES6+)</h4>
      <p>JavaScript memberikan kehidupan dan interaktivitas pada halaman web. Mulai dari manipulasi DOM, penanganan event user, pemanggilan API, hingga pengelolaan state antarmuka lokal.</p>
      
      <p><strong>Kesimpulan:</strong> Menguasai fondasi native web ini memberikan pemahaman mendalam tentang cara kerja browser dan memudahkan adaptasi teknologi apa pun di masa depan.</p>
    `
  },
  {
    id: "network-basics",
    title: "Dasar-Dasar Jaringan Komputer untuk Mahasiswa Informatika",
    date: "02 September 2026",
    category: "Hardware",
    author: "Tim IPTEK Hardware",
    readTime: "6 Menit Baca",
    summary: "Panduan praktis memahami Model OSI, pengalamatan IP, Topologi Jaringan, dan konfigurasi dasar perangkat keras jaringan komputer.",
    content: `
      <p>Jaringan komputer adalah tulang punggung dari komunikasi digital masa kini. Bagi mahasiswa Informatika, pemahaman infrastruktur jaringan sangat krusial baik untuk pengembangan sistem terdistribusi maupun administrasi server.</p>
      
      <h4>1. Konsep Layer OSI & TCP/IP Model</h4>
      <p>Model OSI (Open Systems Interconnection) membagi alur komunikasi data menjadi 7 lapisan, mulai dari lapisan fisik (cables & signals) hingga lapisan aplikasi (HTTP, FTP, SSH). Memahami alur ini memudahkan proses analisis dan penyelesaian kendala jaringan (troubleshooting).</p>
      
      <h4>2. Pengalamatan IP (IPv4 vs IPv6) & Subnetting</h4>
      <p>Setiap perangkat dalam jaringan memerlukan alamat IP unik. Memahami IPv4 CIDR, Subnet Mask, Alamat IP Privat vs Publik, serta DHCP adalah fondasi dasar dalam mengelola segmen jaringan lokal (LAN).</p>
      
      <h4>3. Perangkat Keras Jaringan (Router, Switch, Access Point)</h4>
      <p>Departemen Hardware HMTI memberikan kesempatan praktik langsung melakukan krimp kabel UTP (RJ45), konfigurasi VLAN pada Managed Switch, serta ruting antar jaringan lokal menggunakan perangkat fisik.</p>
      
      <p><strong>Kesimpulan:</strong> Kombinasi keahlian Software dan Hardware Jaringan akan menjadikan mahasiswa Informatika seorang problem solver yang komprehensif.</p>
    `
  }
];

document.addEventListener("DOMContentLoaded", () => {
  initThemeSwitcher();
  initNavigation();
  renderActivities(activitiesData);
  initActivityFilters();
  renderArticles();
  initArticleModal();
});

function initThemeSwitcher() {
  const themeToggleBtn = document.getElementById("themeToggle");
  if (!themeToggleBtn) return;

  const savedTheme = localStorage.getItem("hmti_theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("hmti_theme", newTheme);
  });
}

function initNavigation() {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const icon = hamburgerBtn.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
      }
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        const icon = hamburgerBtn.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-xmark");
        }
      });
    });
  }

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -70% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${activeId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

function renderActivities(items) {
  const container = document.getElementById("activitiesGrid");
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <i class="fa-solid fa-magnifying-glass"></i>
        <h3>Kegiatan tidak ditemukan</h3>
        <p>Coba kata kunci pencarian lain atau pilih kategori yang berbeda.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(activity => {
    const isSoftware = activity.category.toLowerCase() === "software";
    const badgeClass = isSoftware ? "software" : "hardware";

    return `
      <article class="activity-card" data-id="${activity.id}">
        <div class="activity-top">
          <div class="activity-meta">
            <span class="category-badge ${badgeClass}">${activity.category}</span>
            <span class="activity-date"><i class="fa-regular fa-calendar"></i> ${activity.date}</span>
          </div>
          <h3 class="activity-title">${activity.title}</h3>
          <p class="activity-desc">${activity.description}</p>
        </div>
        <div class="activity-footer">
          <span class="activity-location"><i class="fa-solid fa-location-dot"></i> ${activity.location}</span>
          <span class="btn-sm btn-secondary" style="pointer-events:none;">
            <i class="fa-solid ${activity.icon || 'fa-calendar-check'}"></i> Terbuka
          </span>
        </div>
      </article>
    `;
  }).join("");
}

function initActivityFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("activitySearch");

  let currentCategory = "all";
  let currentSearchQuery = "";

  function applyFilters() {
    const filtered = activitiesData.filter(item => {
      const matchCategory = currentCategory === "all" || item.category.toLowerCase() === currentCategory;
      const matchSearch = item.title.toLowerCase().includes(currentSearchQuery) ||
        item.description.toLowerCase().includes(currentSearchQuery);
      return matchCategory && matchSearch;
    });
    renderActivities(filtered);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }
}

function renderArticles() {
  const container = document.getElementById("articlesGrid");
  if (!container) return;

  container.innerHTML = articlesData.map(article => `
    <article class="article-card">
      <div>
        <div class="article-header-meta">
          <span class="article-tag">${article.category}</span>
          <span><i class="fa-regular fa-clock"></i> ${article.readTime}</span>
        </div>
        <h3 class="article-title">${article.title}</h3>
        <p class="article-summary">${article.summary}</p>
      </div>
      <div class="article-action">
        <button class="read-btn" data-id="${article.id}">
          Baca Selengkapnya <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </article>
  `).join("");
}

function initArticleModal() {
  const modalOverlay = document.getElementById("articleModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalBodyContainer = document.getElementById("modalBodyContent");

  if (!modalOverlay || !modalBodyContainer) return;

  document.addEventListener("click", (e) => {
    const readBtn = e.target.closest(".read-btn");
    if (readBtn) {
      const articleId = readBtn.getAttribute("data-id");
      openArticleModal(articleId);
    }
  });

  function openArticleModal(id) {
    const article = articlesData.find(item => item.id === id);
    if (!article) return;

    modalBodyContainer.innerHTML = `
      <span class="modal-badge">${article.category}</span>
      <h2 class="modal-title">${article.title}</h2>
      <div class="modal-meta">
        <span><i class="fa-regular fa-user"></i> ${article.author}</span>
        <span><i class="fa-regular fa-calendar"></i> ${article.date}</span>
        <span><i class="fa-regular fa-clock"></i> ${article.readTime}</span>
      </div>
      <div class="modal-body">
        ${article.content}
      </div>
    `;

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });
}
