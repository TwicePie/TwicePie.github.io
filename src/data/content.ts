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
};

export const hero = {
  greeting: { en: "Hi, I'm", id: "Halo, saya" } as Bi,
  title: {
    en: "Data Analyst & Web Developer",
    id: "Data Analyst & Web Developer",
  } as Bi,
  bio: {
    en: "Informatics graduate from Universitas Muhammadiyah Malang, skilled in data analysis, data visualization, and web development. Experienced in building analytic dashboards and identifying data patterns. Passionate about building a career in data analytics and creating efficient, data-driven solutions.",
    id: "Lulusan Universitas Muhammadiyah Malang Program Studi Informatika dengan keahlian dalam analisis data, visualisasi data, dan pengembangan web. Berpengalaman dalam membangun dashboard analitik dan mengidentifikasi pola data. Memiliki ketertarikan kuat untuk membangun karier di bidang data analytics dan menciptakan solusi berbasis data yang efisien.",
  } as Bi,
  ctaContact: { en: "Get in Touch", id: "Hubungi Saya" } as Bi,
  ctaCV: { en: "Download CV", id: "Unduh CV" } as Bi,
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
    org: "Freelance",
    period: "Jan 2026 — Jul 2026",
    type: { en: "Freelance", id: "Freelance" } as Bi,
    points: [
      {
        en: "Designed and documented Business Requirements & Business Models as a reference for functional testing of applications/websites.",
        id: "Merancang dan mendokumentasikan Business Requirements & Business Model sebagai acuan pengujian fungsionalitas aplikasi/website.",
      },
      {
        en: "Performed functional testing on application/website features to ensure alignment with the designed business model.",
        id: "Melakukan functional testing pada fitur-fitur aplikasi/website untuk memastikan kesesuaian dengan business model yang telah dirancang.",
      },
      {
        en: "Identified, documented, and reported bugs and defects in applications/websites to the development team for resolution.",
        id: "Mengidentifikasi, mendokumentasikan, dan melaporkan bug serta defect pada aplikasi/website kepada tim pengembang untuk perbaikan.",
      },
      {
        en: "Verified that business flows in applications/websites ran according to specifications and end-user requirements.",
        id: "Memverifikasi bahwa alur bisnis (business flow) pada aplikasi/website berjalan sesuai dengan spesifikasi dan kebutuhan pengguna akhir.",
      },
    ],
  },
  {
    role: { en: "Website & Internet Operator", id: "Operator Website & Internet" } as Bi,
    org: "Fakultas Hukum UMM",
    period: "Oct 2025 — Mar 2026",
    type: { en: "Work", id: "Kerja" } as Bi,
    points: [
      {
        en: "Managed and connected computer networks to support smooth data transfer and system operations.",
        id: "Mengelola dan menghubungkan jaringan antar perangkat komputer untuk mendukung kelancaran transfer data dan operasional sistem.",
      },
      {
        en: "Troubleshot and repaired office applications (Microsoft Access, Word, Excel) to improve user productivity.",
        id: "Melakukan troubleshooting dan perbaikan pada aplikasi perkantoran seperti Microsoft Access, Word, dan Excel untuk meningkatkan produktivitas pengguna.",
      },
      {
        en: "Designed and developed the UI for the Kios Laboratorium Fakultas Hukum UMM website.",
        id: "Merancang dan mengembangkan desain antarmuka (UI) website Kios Laboratorium Fakultas Hukum UMM.",
      },
      {
        en: "Identified and fixed frontend bugs to improve website performance and user experience.",
        id: "Mengidentifikasi dan memperbaiki bug pada kode frontend website guna meningkatkan performa dan pengalaman pengguna.",
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
        en: "Developed analytic dashboards showing employee distribution by category (position, status, or work unit).",
        id: "Mengembangkan dashboard analitik yang menampilkan distribusi pegawai berdasarkan kategori tertentu (jabatan, status, atau unit kerja).",
      },
      {
        en: "Identified patterns and trends in employee data to support operational decision-making.",
        id: "Mengidentifikasi pola dan tren dalam data pegawai yang mendukung pengambilan keputusan operasional.",
      },
      {
        en: "Improved data processing and reporting efficiency by ~25% through dashboard visualization automation.",
        id: "Meningkatkan efisiensi pengolahan dan pelaporan data hingga ±25% melalui otomatisasi visualisasi dashboard.",
      },
    ],
  },
  {
    role: { en: "Fullstack Engineer", id: "Fullstack Engineer" } as Bi,
    org: "CV. Indo Azka Konsultan",
    period: "Jan 2025 — Mar 2025",
    type: { en: "Internship", id: "Magang" } as Bi,
    points: [
      {
        en: "Contributed as a Frontend Developer in the comprehensive development of an E-commerce website.",
        id: "Berkontribusi sebagai Frontend Developer dalam pengembangan situs web E-commerce secara komprehensif.",
      },
      {
        en: "Designed UI/UX to create an intuitive and visually appealing user experience.",
        id: "Merancang UI/UX untuk menciptakan pengalaman pengguna yang intuitif dan menarik secara visual.",
      },
      {
        en: "Built the website interface with React and implemented data fetching to display dynamic content effectively.",
        id: "Mengembangkan antarmuka situs web menggunakan React dan mengimplementasikan pengambilan data (data fetching) untuk menampilkan konten dinamis secara efektif.",
      },
      {
        en: "Optimized frontend performance to speed up load time and ensure smooth user interaction.",
        id: "Mengoptimalkan performa frontend guna mempercepat waktu muat (load time) dan memastikan interaksi pengguna berjalan lancar.",
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
  footerBuilt: { en: "Built with Astro · No heavy frameworks", id: "Dibangun dengan Astro · Tanpa framework berat" } as Bi,
};
