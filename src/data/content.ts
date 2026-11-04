// =========================================================
// content.ts — All portfolio content in EN & ID
// Single source of truth. Edit here to update the site.
// =========================================================

export interface Bi {
  en: string;
  id: string;
}

export const profile = {
  name: "Muhammad Eka Nur Arief",
  initials: "ME",
  email: "kknurarief@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-eka-nur-arief/",
  github: "https://github.com/TwicePie",
  cv: "/CV_Eka.pdf",
  photo: "/Profile.jpg",
  gdrive: "https://drive.google.com/drive/u/0/folders/1NC0kJaFlRLL8VIhpf1d0_91YU6Kpqa2F",
};

export const hero = {
  greeting: { en: "Hi, I'm", id: "Halo, saya" } as Bi,
  title: {
    en: "Data Analyst",
    id: "Data Analyst",
  } as Bi,
  bio: {
    en: "Informatics graduate from Universitas Muhammadiyah Malang, skilled in data analysis, data visualization, and web development. Experienced in building analytic dashboards and identifying data patterns. Passionate about building a career in data analytics and creating efficient, data-driven solutions.",
    id: "Lulusan Universitas Muhammadiyah Malang Program Studi Informatika dengan keahlian dalam analisis data, visualisasi data, dan pengembangan web. Berpengalaman dalam membangun dashboard analitik dan mengidentifikasi pola data. Memiliki ketertarikan kuat untuk membangun karier di bidang data analytics dan menciptakan solusi berbasis data yang efisien.",
  } as Bi,
  ctaContact: { en: "Get in Touch", id: "Hubungi Saya" } as Bi,
  ctaCV: { en: "Download CV", id: "Unduh CV" } as Bi,
  ctaDrive: { en: "Experience Details", id: "Detail Pengalaman" } as Bi,
};

export const nav = {
  about: { en: "About", id: "Tentang" } as Bi,
  education: { en: "Education", id: "Pendidikan" } as Bi,
  experience: { en: "Experience", id: "Pengalaman" } as Bi,
  skills: { en: "Skills", id: "Keahlian" } as Bi,
  projects: { en: "Projects", id: "Proyek" } as Bi,
  certificates: { en: "Certificates", id: "Sertifikat" } as Bi,
  contact: { en: "Messages", id: "Pesan" } as Bi,
};

export const sections = {
  about: { en: "About", id: "Tentang" } as Bi,
  education: { en: "Education", id: "Pendidikan" } as Bi,
  experience: { en: "Experience", id: "Pengalaman" } as Bi,
  skills: { en: "Skills & Technologies", id: "Keahlian & Teknologi" } as Bi,
  projects: { en: "Featured Projects", id: "Proyek Unggulan" } as Bi,
  certificates: { en: "Licenses & Certifications", id: "Sertifikat & Sertifikasi" } as Bi,
  contact: { en: "Messages", id: "Pesan" } as Bi,
};

export const about = {
  p1: {
    en: "I'm a data analyst and web developer who enjoys turning raw, unstructured data into clear, actionable insights. My work spans analytic dashboards, data visualization, NLP research, and full-stack web applications.",
    id: "Saya seorang data analyst dan web developer yang senang mengubah data mentah tidak terstruktur menjadi insight yang jelas dan dapat ditindaklanjuti. Pekerjaan saya mencakup dashboard analitik, visualisasi data, riset NLP, dan aplikasi web full-stack.",
  } as Bi,
  p2: {
    en: "Through internships as a Data Analyst and Fullstack Engineer, I've built dashboards that improved reporting efficiency by ~25%, developed responsive e-commerce frontends, and researched Transformer-based topic modeling on 200,000 text records.",
    id: "Melalui magang sebagai Data Analyst dan Fullstack Engineer, saya membangun dashboard yang meningkatkan efisiensi pelaporan ~25%, mengembangkan frontend e-commerce responsif, dan meriset topic modeling berbasis Transformer pada 200.000 data teks.",
  } as Bi,
  focusTitle: { en: "What I do", id: "Yang saya kerjakan" } as Bi,
  focus: [
    { en: "Data Analysis & Visualization", id: "Analisis & Visualisasi Data" },
    { en: "Dashboard Automation", id: "Otomatisasi Dashboard" },
    { en: "Full-stack Web Development", id: "Pengembangan Web Full-stack" },
    { en: "NLP & Machine Learning", id: "NLP & Machine Learning" },
  ],
};

export const education = [
  {
    degree: { en: "Bachelor of Informatics", id: "Sarjana Informatika" } as Bi,
    school: "Universitas Muhammadiyah Malang",
    period: "— 2026",
  },
];

export interface ExperienceItem {
  role: Bi;
  org: string;
  period: string;
  type: Bi;
  points: Bi[];
}

export const experiences: ExperienceItem[] = [
  {
    role: { en: "QA Analyst", id: "QA Analyst" } as Bi,
    org: "Patman Interactive",
    period: "Jan 2026 — Jul 2026",
    type: { en: "Freelance", id: "Freelance" } as Bi,
    points: [
      {
        en: "Prepared Business Requirements documentation and business models as a reference for system development and testing.",
        id: "Menyusun dokumentasi Business Requirements dan model bisnis sebagai acuan pengembangan dan pengujian sistem.",
      },
      {
        en: "Performed functional testing to validate business flows and ensure the system meets user needs.",
        id: "Melakukan functional testing untuk memvalidasi alur bisnis dan memastikan sistem sesuai kebutuhan pengguna.",
      },
      {
        en: "Documented and reported bugs to the development team, and provided input for product functionality improvements.",
        id: "Mendokumentasikan dan melaporkan bug kepada tim pengembang, serta memberikan masukan untuk penyempurnaan fungsionalitas produk.",
      },
    ],
  },
  {
    role: { en: "Data Analyst", id: "Data Analyst" } as Bi,
    org: "Balai Laboratorium Bea dan Cukai Surabaya",
    period: "Jul 2025 — Sep 2025",
    type: { en: "Internship", id: "Magang" } as Bi,
    points: [
      {
        en: "Developed analytic dashboards using Power BI to monitor asset distribution and condition by category.",
        id: "Mengembangkan dashboard analitik menggunakan Power BI untuk memantau distribusi dan kondisi aset berdasarkan kategori.",
      },
      {
        en: "Identified patterns and trends in asset data to support annual operational decision-making.",
        id: "Mengidentifikasi pola dan tren dalam data aset untuk mendukung pengambilan keputusan operasional tahunan.",
      },
      {
        en: "Initiated data visualization automation that improved data processing and reporting efficiency by ~25%.",
        id: "Menginisiasi otomatisasi visualisasi data yang berhasil meningkatkan efisiensi pengolahan dan pelaporan data hingga ±25%.",
      },
      {
        en: "Presented analysis results to internal teams as evaluation material on asset distribution.",
        id: "Menyajikan hasil analisis kepada internal sebagai bahan evaluasi terkait persebaran aset.",
      },
    ],
  },
];

export const skills = [
  "Data Analysis", "Data Visualization", "Machine Learning", "Web Development",
  "Google Analytics", "Power BI", "Looker Studio", "MS Office",
  "Python", "JavaScript", "MySQL", "Figma", "Git",
];

export interface ProjectItem {
  title: string;
  year: string;
  tag: Bi;
  description: Bi;
  tech: string[];
  link?: string;
}

export const projects: ProjectItem[] = [
  {
    title: "Sinta 2 Jurnal Publikasi Ilmiah",
    year: "Dec 2025",
    tag: { en: "Research · NLP", id: "Riset · NLP" } as Bi,
    description: {
      en: "Comparative research on Transformer-based topic modeling methods such as BERTopic. Preprocessed 200,000 unstructured text records using NLP techniques and evaluated model performance via coherence score and topic interpretability, reaching ~70%.",
      id: "Penelitian komparatif terhadap beberapa metode topic modeling berbasis Transformer seperti BERTopic. Mengolah 200.000 data teks tidak terstruktur menggunakan teknik preprocessing NLP dan mengevaluasi performa model dengan coherence score dan interpretabilitas topik hingga mencapai ~70%.",
    } as Bi,
    tech: ["Python", "BERTopic", "NLP", "Transformers"],
  },
  {
    title: "E-Commerce Website — CV. Indo Azka Konsultan",
    year: "Jan 2025 — Mar 2025",
    tag: { en: "Internship · Frontend", id: "Magang · Frontend" } as Bi,
    description: {
      en: "Contributed as a Frontend Developer in the comprehensive development of an E-commerce website. Designed an intuitive and visually appealing UI/UX, built the website interface with React and implemented data fetching to display dynamic content effectively, and optimized frontend performance to speed up load time and ensure smooth user interaction.",
      id: "Berkontribusi sebagai Frontend Developer dalam pengembangan situs web E-commerce secara komprehensif. Merancang UI/UX yang intuitif dan menarik secara visual, membangun antarmuka situs web menggunakan React dan mengimplementasikan data fetching untuk menampilkan konten dinamis secara efektif, serta mengoptimalkan performa frontend guna mempercepat waktu muat dan memastikan interaksi pengguna berjalan lancar.",
    } as Bi,
    tech: ["React", "JavaScript", "REST API", "UI/UX"],
  },
  {
    title: "Pujasera Kuliner Tegal Timur Surabaya",
    year: "Aug 2024",
    tag: { en: "Fullstack · Web", id: "Fullstack · Web" } as Bi,
    description: {
      en: "Built a local food-center website as a Fullstack Developer to promote vendors using React with a responsive UI/UX. Conducted testing and debugging across the system and managed the database and API integration to display menu and vendor data dynamically.",
      id: "Mengembangkan website Pujasera lokal sebagai Fullstack Developer untuk mempromosikan pedagang menggunakan React dengan UI/UX yang responsif. Melakukan pengujian dan debugging pada seluruh sistem serta mengelola basis data dan integrasi API untuk menampilkan informasi menu dan data pedagang secara dinamis.",
    } as Bi,
    tech: ["React", "JavaScript", "REST API", "MySQL"],
  },
];

export const certifications = [
  { name: "Oracle Database Certifications", issuer: "Oracle", date: "Jun 2024" },
  { name: "Implementing a Data Warehouse Using SQL", issuer: "Udemy", date: "Apr 2025" },
  { name: "Data Science", issuer: "Myskill", date: "May 2025" },
  { name: "Intro to Data Analytics", issuer: "RevoU", date: "Apr 2026" },
];

export const ui = {
  langLabel: "EN / ID",
  scrollDown: { en: "Scroll", id: "Gulir" } as Bi,
  viewProject: { en: "View", id: "Lihat" } as Bi,
  liveChatTitle: { en: "Leave a Message", id: "Tinggalkan Pesan" } as Bi,
  liveChatSubtitle: {
    en: "Your message is saved to a Google Sheet. Be nice — one message per name.",
    id: "Pesan Anda disimpan di Google Sheet. Tolong bersikap sopan — satu pesan per nama.",
  } as Bi,
  chatName: { en: "Your name", id: "Nama Anda" } as Bi,
  chatMessage: { en: "Your message", id: "Pesan Anda" } as Bi,
  chatSend: { en: "Send", id: "Kirim" } as Bi,
  chatSending: { en: "Sending...", id: "Mengirim..." } as Bi,
  chatEmpty: { en: "No messages yet. Be the first!", id: "Belum ada pesan. Jadilah yang pertama!" } as Bi,
  chatLoading: { en: "Loading messages...", id: "Memuat pesan..." } as Bi,
  chatError: { en: "Could not connect. Please try again later.", id: "Tidak dapat terhubung. Coba lagi nanti." } as Bi,
  chatDuplicate: { en: "This name already left a message.", id: "Nama ini sudah meninggalkan pesan." } as Bi,
  chatSuccess: { en: "Message sent!", id: "Pesan terkirim!" } as Bi,
  chatPlaceholderName: { en: "e.g. John Doe", id: "cth. Budi" } as Bi,
  chatPlaceholderMsg: { en: "Write something nice...", id: "Tulis sesuatu yang baik..." } as Bi,
  footerRights: { en: "All rights reserved.", id: "Hak cipta dilindungi." } as Bi,
  footerBuilt: { en: "Built with Astro", id: "Dibangun dengan Astro" } as Bi,
};
