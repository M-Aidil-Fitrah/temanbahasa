"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import DashboardLayout from "@/app/components/DashboardLayout";

interface Question {
  id: number;
  section: string;
  question?: string;
  statementX?: string;
  statementY?: string;
  optionsX?: string[];
  optionsY?: string[];
  options: string[];
  correct: number;
  explanation: string;
  audio?: string;
  image?: string;
}

export default function HasilSimulasiPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [loading, setLoading] = useState(true);
  const [openSection, setOpenSection] = useState<number | null>(0);

  useEffect(() => {
    // Ambil data dari localStorage
    const storedQuestions = localStorage.getItem("simulasi1_questions");
    const storedAnswers = localStorage.getItem("simulasi1_answers");

    if (storedQuestions && storedAnswers) {
      setQuestions(JSON.parse(storedQuestions));
      setAnswers(JSON.parse(storedAnswers));
    } else {
      // Jika tidak ada data, redirect ke halaman simulasi
      router.push("/dashboard/simulasi/paket1/simulasi1");
    }
    setLoading(false);
  }, [router]);

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correct) {
        correct++;
      }
    });
    const percentage = Math.round((correct / questions.length) * 100);
    return { correct, total: questions.length, percentage };
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="min-h-screen bg-[#FFF8F0] flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="font-black text-gray-900">Memuat hasil...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  const score = calculateScore();

  const getSectionInfo = (section: string) => {
    switch (section) {
      case "mendengarkan":
        return { name: "Seksi I - Mendengarkan", color: "bg-[#C7E9FF]", icon: "🎧" };
      case "kaidah":
        return { name: "Seksi II - Merespons Kaidah", color: "bg-[#FFD93D]", icon: "📝" };
      case "membaca":
        return { name: "Seksi III - Membaca", color: "bg-[#B5F0C8]", icon: "📖" };
      default:
        return { name: "", color: "bg-white", icon: "" };
    }
  };

  // Group questions by section
  const sections = [
    {
      name: "Seksi I - Mendengarkan",
      color: "bg-[#C7E9FF]",
      icon: "🎧",
      questions: questions.filter((q) => q.section === "mendengarkan"),
    },
    {
      name: "Seksi II - Merespons Kaidah",
      color: "bg-[#FFD93D]",
      icon: "📝",
      questions: questions.filter((q) => q.section === "kaidah"),
    },
    {
      name: "Seksi III - Membaca",
      color: "bg-[#B5F0C8]",
      icon: "📖",
      questions: questions.filter((q) => q.section === "membaca"),
    },
  ];

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#FFF8F0]">
      {/* Header */}
      <div className="bg-white border-b-4 border-black sticky top-0 z-40 shadow-[0px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black text-gray-900">
                Hasil Simulasi UKBI - Paket 1
              </h1>
              <p className="text-sm font-bold text-gray-600">
                Pembahasan dan Penilaian
              </p>
            </div>
            <button
              onClick={() => router.push("/dashboard/simulasi/paket1")}
              className="px-6 py-3 bg-[#FF6B6B] border-4 border-black text-white rounded-xl font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              ← Kembali ke Pilihan Simulasi
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Score Summary */}
        <div className="mb-6 bg-white border-4 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="text-center mb-6">
            <div className="w-24 h-24 bg-[#B5F0C8] border-4 border-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-5xl">🎉</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-2">
              Tes Selesai!
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#C7E9FF] border-4 border-black rounded-2xl p-6 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-sm font-bold text-gray-700 mb-2">Jawaban Benar</p>
              <p className="text-5xl font-black text-gray-900">
                {score.correct}
              </p>
            </div>
            <div className="bg-[#FFD93D] border-4 border-black rounded-2xl p-6 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-sm font-bold text-gray-700 mb-2">Total Soal</p>
              <p className="text-5xl font-black text-gray-900">
                {score.total}
              </p>
            </div>
            <div className="bg-[#B5F0C8] border-4 border-black rounded-2xl p-6 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-sm font-bold text-gray-700 mb-2">Persentase</p>
              <p className="text-5xl font-black text-gray-900">
                {score.percentage}%
              </p>
            </div>
          </div>
        </div>

        {/* Main Content with Sidebar */}
        <div className="flex gap-6">
          {/* Questions Review */}
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-black text-gray-900 flex items-center gap-2">
              <span>📝</span>
              Pembahasan Soal
            </h2>
          
          {questions.map((q, index) => {
            const isCorrect = answers[index] === q.correct;
            const userAnswer = answers[index];
            
            return (
              <div
                key={q.id}
                id={`question-${index}`}
                className="bg-white border-4 border-black rounded-3xl p-6 lg:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              >
                {/* Question Header */}
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <span className="inline-block px-4 py-2 bg-[#FFD93D] border-2 border-black text-gray-900 rounded-full text-sm font-black mb-3">
                      Soal {index + 1}
                    </span>
                    <p className="text-sm font-bold text-gray-600">
                      Seksi: {q.section === "mendengarkan" ? "I - Mendengarkan" : q.section === "kaidah" ? "II - Merespons Kaidah" : "III - Membaca"}
                    </p>
                  </div>
                  <span
                    className={`px-4 py-2 rounded-xl border-4 border-black font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                      isCorrect
                        ? "bg-[#B5F0C8] text-green-700"
                        : "bg-[#FFB3D9] text-red-700"
                    }`}
                  >
                    {isCorrect ? "✓ Benar" : "✗ Salah"}
                  </span>
                </div>

                {/* Question Content */}
                <div className="mb-6">
                  {q.section === "kaidah" && q.statementX ? (
                    <div className="space-y-4">
                      <div className="border-l-4 border-[#C7E9FF] pl-4 bg-[#C7E9FF]/10 p-4 rounded-r-xl">
                        <p className="font-black text-gray-900 mb-2">Pernyataan X:</p>
                        <p className="text-gray-700 font-bold mb-3">{q.statementX}</p>
                        {q.optionsX && (
                          <div className="space-y-1 ml-4">
                            {q.optionsX.map((option, i) => (
                              <p key={i} className="text-gray-600 font-bold text-sm">
                                ({String.fromCharCode(65 + i)}) {option}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="border-l-4 border-[#FFD93D] pl-4 bg-[#FFD93D]/10 p-4 rounded-r-xl">
                        <p className="font-black text-gray-900 mb-2">Pernyataan Y:</p>
                        <p className="text-gray-700 font-bold mb-3">{q.statementY}</p>
                        {q.optionsY && (
                          <div className="space-y-1 ml-4">
                            {q.optionsY.map((option, i) => (
                              <p key={i} className="text-gray-600 font-bold text-sm">
                                ({String.fromCharCode(65 + i)}) {option}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <p className="text-xl text-gray-900 font-black">{q.question}</p>
                  )}
                </div>

                {/* Answer Options */}
                <div className="space-y-3 mb-6">
                  {q.options.map((option, optIndex) => {
                    const isUserAnswer = userAnswer === optIndex;
                    const isCorrectAnswer = q.correct === optIndex;
                    
                    return (
                      <div
                        key={optIndex}
                        className={`p-4 rounded-xl border-4 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                          isCorrectAnswer
                            ? "bg-[#B5F0C8] border-green-700"
                            : isUserAnswer && !isCorrectAnswer
                            ? "bg-[#FF6B6B] border-red-700"
                            : "bg-white border-black"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center font-black ${
                              isCorrectAnswer
                                ? "bg-green-700 text-white border-green-900"
                                : isUserAnswer && !isCorrectAnswer
                                ? "bg-red-700 text-white border-red-900"
                                : "bg-white text-gray-900 border-black"
                            }`}
                          >
                            {String.fromCharCode(65 + optIndex)}
                          </div>
                          <div className="flex-1">
                            <p className={`pt-1.5 ${
                              isUserAnswer && !isCorrectAnswer
                                ? "text-white"
                                : "text-gray-900"
                            }`}>{option}</p>
                            {isCorrectAnswer && (
                              <p className="text-sm font-black text-green-700 mt-2 flex items-center gap-1">
                                <span className="text-lg">✓</span>
                                Jawaban yang benar
                              </p>
                            )}
                            {isUserAnswer && !isCorrectAnswer && (
                              <p className="text-sm font-black text-white mt-2 flex items-center gap-1">
                                <span className="text-lg">✗</span>
                                Jawaban Anda (SALAH)
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Explanation */}
                <div className="bg-[#FFD93D]/20 border-4 border-black rounded-2xl p-5">
                  <p className="font-black text-gray-900 mb-3 flex items-center gap-2">
                    <span>💡</span>
                    Pembahasan:
                  </p>
                  <p className="font-bold text-gray-700">{q.explanation}</p>
                </div>
              </div>
            );
          })}
          </div>

          {/* Right Sidebar - Question Navigator */}
          <aside className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-24 bg-white border-4 border-black rounded-3xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-2">
                <span>🎯</span>
                Navigasi Soal
              </h3>

              <div className="space-y-3">
                {sections.map((section, sectionIdx) => {
                  const isOpen = openSection === sectionIdx;

                  return (
                    <div key={sectionIdx} className="border-4 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      {/* Section Header - Clickable */}
                      <button
                        onClick={() => setOpenSection(isOpen ? null : sectionIdx)}
                        className={`w-full ${section.color} p-4 flex items-center justify-between hover:opacity-90 transition-opacity`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{section.icon}</span>
                          <div className="text-left">
                            <p className="font-black text-gray-900 text-sm">
                              {section.name}
                            </p>
                            <p className="text-xs font-bold text-gray-700">
                              {section.questions.length} soal
                            </p>
                          </div>
                        </div>
                        <span className={`text-xl font-black transition-transform ${isOpen ? 'rotate-90' : ''}`}>
                          ›
                        </span>
                      </button>

                      {/* Dropdown Content */}
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="bg-white p-4 border-t-4 border-black">
                          <div className="grid grid-cols-5 gap-2">
                            {section.questions.map((q, idx) => {
                              const globalIndex = questions.indexOf(q);
                              const isCorrect = answers[globalIndex] === q.correct;
                              const sectionQuestionNumber = idx + 1; // Reset nomor per seksi

                              return (
                                <button
                                  key={idx}
                                  onClick={() => {
                                    const element = document.getElementById(`question-${globalIndex}`);
                                    element?.scrollIntoView({ behavior: "smooth", block: "center" });
                                  }}
                                  className={`w-full aspect-square rounded-lg border-2 border-black font-black text-sm transition-all hover:scale-110 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                                    isCorrect
                                      ? "bg-[#B5F0C8] text-green-700"
                                      : "bg-[#FF6B6B] text-white"
                                  }`}
                                >
                                  {sectionQuestionNumber}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="mt-6 pt-4 border-t-2 border-black">
                <p className="text-xs font-bold text-gray-600 mb-3">Keterangan:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-[#B5F0C8] border-2 border-black"></div>
                    <span className="text-xs font-bold text-gray-700">Benar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-[#FF6B6B] border-2 border-black"></div>
                    <span className="text-xs font-bold text-gray-700">Salah</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      </div>
    </DashboardLayout>
  );
}
