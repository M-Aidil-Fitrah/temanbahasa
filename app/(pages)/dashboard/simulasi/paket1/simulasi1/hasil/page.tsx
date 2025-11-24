"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

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
      <div className="min-h-screen bg-[#FFF8F0] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="font-black text-gray-900">Memuat hasil...</p>
        </div>
      </div>
    );
  }

  const score = calculateScore();

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Header */}
      <div className="bg-white border-b-4 border-black sticky top-0 z-40 shadow-[0px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-black text-gray-900">
            Hasil Simulasi UKBI - Paket 1
          </h1>
          <p className="text-sm font-bold text-gray-600">
            Pembahasan dan Penilaian
          </p>
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

        {/* Questions Review */}
        <div className="space-y-6">
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

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4 sticky bottom-6">
          <button
            onClick={() => router.push("/dashboard/simulasi/paket1")}
            className="flex-1 px-6 py-4 bg-[#FF6B6B] border-4 border-black text-white rounded-2xl font-black text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
          >
            ← Kembali ke Pilihan Simulasi
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("simulasi1_questions");
              localStorage.removeItem("simulasi1_answers");
              router.push("/dashboard/simulasi/paket1/simulasi1/persiapan");
            }}
            className="flex-1 px-6 py-4 bg-white border-4 border-black text-gray-900 rounded-2xl font-black text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
          >
            🔄 Coba Lagi
          </button>
        </div>
      </div>
    </div>
  );
}
