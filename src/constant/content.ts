import { Clock, Database, Eye, Search, Send, TrendingUp } from "lucide-react";

export const phoneLinks =
  process.env.NEXT_PUBLIC_PHONE_LINKS || "https://wa.link/ddpnpc";

export const dataUsageItems = [
  {
    icon: Database,
    title: "Penyimpanan Pesan",
    description:
      "Pesan WhatsApp Anda disimpan sementara untuk proses analisis AI dan akan dihapus otomatis setelah analisis selesai.",
  },
  {
    icon: Eye,
    title: "Akses Terbatas",
    description:
      "Akses terhadap database tidak dapat dilakukan oleh developer maupun administrasi",
  },
  {
    icon: Clock,
    title: "Penggunaan Data",
    description:
      "Data tidak digunakan selain keperluan context dan sentiment analysis ",
  },
];

export const detailedSteps = [
  {
    icon: Send,
    step: "1",
    title: "Kirim Pesan",
    subtitle: "Input & Data Collection",
    description:
      "Forward pesan mencurigakan ke nomor WhatsApp AmanAja atau screenshot dan kirim gambarnya.",
    technicalDetails: [
      "Mensupport analisis fraud ataupun pengecekan nomer telpon dan rekening",
      "OCR untuk screenshot pesan",
      "Multi-format input processing",
      "Real-time data validation",
      "Secure data transmission",
    ],
    process: [
      "User mengirim pesan ke WhatsApp AmanAja",
      "Sistem menerima dan memvalidasi input",
      "Data diubah menjadi bentuk Vector",
      "Data melalui OCR disimpan pada masing masing QDrant",
    ],
    image: "/step1.png",
  },
  {
    icon: Search,
    step: "2",
    title: "AI Analisis",
    subtitle: "Machine Learning Processing",
    description:
      "Sistem AI menganalisis konten, pola, dan membandingkan dengan database penipuan terbaru.",
    technicalDetails: [
      "Multi-layer neural network analysis",
      "NLP untuk pemahaman konteks",
      "Pattern matching dengan 10M+ dataset",
      "Real-time threat intelligence",
      "Ensemble model untuk akurasi maksimal",
    ],
    process: [
      "Text preprocessing dan tokenization",
      "Feature extraction dari konten",
      "Menggunakan Model Gemini Fine tune untuk hasil",
      "Sentiment Analysis",
      "Menyimpan pada RAG sebagai token",
    ],
    image: "/step2.png",
  },
  {
    icon: TrendingUp,
    step: "3",
    title: "Terima Hasil",
    subtitle: "Result & Recommendation",
    description:
      "Dapatkan hasil analisis lengkap dengan tingkat risiko dan rekomendasi tindakan dalam hitungan detik.",
    technicalDetails: [
      "Comprehensive risk assessment",
      "Actionable recommendations",
      "Evidence-based explanation",
      "Follow-up guidance",
      "Report generation",
    ],
    process: [
      "Hasil Dikirimkan pada Pengguna",
      "Pengguna akan diberikan data tingkat kepercayaan",
      "Pengguna akan diberikan pula kesimpulan",
      "Mengulang kembali input diawal",
    ],
    image: "/step3.png",
  },
];
