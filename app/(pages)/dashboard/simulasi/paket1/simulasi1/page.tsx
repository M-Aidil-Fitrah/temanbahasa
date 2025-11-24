"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

interface Question {
  id: string | number;
  section: "mendengarkan" | "kaidah" | "membaca";
  audioPath?: string;
  readingImagePath?: string;
  statementX?: string;
  optionsX?: string[];
  statementY?: string;
  optionsY?: string[];
  question?: string;
  options: string[];
  correct: number;
  explanation: string;
}

export default function Simulasi1Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [currentSection, setCurrentSection] = useState<
    "mendengarkan" | "kaidah" | "membaca"
  >("mendengarkan");
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showPreparation, setShowPreparation] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Load questions
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const response = await fetch("/api/simulasi/paket1/simulasi1");
        if (!response.ok) {
          throw new Error('Failed to load questions');
        }
        const data = await response.json();
        setQuestions(data);
        setAnswers(new Array(data.length).fill(null));
        
        // Check if coming from a specific section
        const sectionParam = searchParams.get("section");
        if (sectionParam && (sectionParam === "mendengarkan" || sectionParam === "kaidah" || sectionParam === "membaca")) {
          setCurrentSection(sectionParam);
          const sectionQuestions = data.filter((q: Question) => q.section === sectionParam);
          const sectionStartIndex = data.findIndex((q: Question) => q.section === sectionParam);
          setCurrentQuestionIndex(sectionStartIndex);
        }
      } catch (error) {
        console.error("Error loading questions:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadQuestions();
  }, [searchParams]);

  // Timer
  useEffect(() => {
    if (showResults || questions.length === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSectionComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentSection, showResults, questions.length]);

  // Update timer when section changes
  useEffect(() => {
    if (currentSection === "mendengarkan") {
      setTimeLeft(30 * 60); // 30 minutes
    } else if (currentSection === "kaidah") {
      setTimeLeft(25 * 60); // 25 minutes
    } else if (currentSection === "membaca") {
      setTimeLeft(45 * 60); // 45 minutes
    }
  }, [currentSection]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    const currentSectionQuestions = questions.filter(
      (q) => q.section === currentSection
    );
    const currentSectionStartIndex = questions.indexOf(
      currentSectionQuestions[0]
    );
    const currentSectionEndIndex = questions.indexOf(
      currentSectionQuestions[currentSectionQuestions.length - 1]
    );
    
    // Only move to next if still within current section
    if (currentQuestionIndex < currentSectionEndIndex) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    const currentSectionQuestions = questions.filter(
      (q) => q.section === currentSection
    );
    const currentSectionStartIndex = questions.indexOf(
      currentSectionQuestions[0]
    );
    
    // Only move to previous if still within current section
    if (currentQuestionIndex > currentSectionStartIndex) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSectionComplete = () => {
    const currentSectionQuestions = questions.filter(
      (q) => q.section === currentSection
    );
    const lastQuestionOfSection =
      questions.indexOf(
        currentSectionQuestions[currentSectionQuestions.length - 1]
      );

    if (currentSection === "mendengarkan") {
      // Redirect to preparation page for Seksi 2
      router.push("/dashboard/simulasi/paket1/simulasi1/persiapan?section=kaidah");
    } else if (currentSection === "kaidah") {
      // Redirect to preparation page for Seksi 3
      router.push("/dashboard/simulasi/paket1/simulasi1/persiapan?section=membaca");
    } else {
      setShowResults(true);
    }
  };

  const handleJumpToQuestion = (index: number) => {
    const targetQuestion = questions[index];
    // Only allow jumping within the same section or completed sections
    const sectionOrder = ["mendengarkan", "kaidah", "membaca"];
    const currentSectionIndex = sectionOrder.indexOf(currentSection);
    const targetSectionIndex = sectionOrder.indexOf(targetQuestion.section);

    if (targetSectionIndex <= currentSectionIndex) {
      setCurrentQuestionIndex(index);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correct) {
        correct++;
      }
    });
    return {
      correct,
      total: questions.length,
      percentage: ((correct / questions.length) * 100).toFixed(2),
    };
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF8F0]">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-black rounded-full border-t-[#FFD93D] animate-spin mx-auto mb-4"></div>
          <p className="font-black text-xl text-gray-900">Memuat soal...</p>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF8F0]">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-black rounded-full border-t-[#FFD93D] animate-spin mx-auto mb-4"></div>
          <p className="font-black text-xl text-gray-900">Memuat soal...</p>
        </div>
      </div>
    );
  }

  if (showResults) {
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
              onClick={() => window.location.reload()}
              className="flex-1 px-6 py-4 bg-white border-4 border-black text-gray-900 rounded-2xl font-black text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
            >
              🔄 Coba Lagi
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const currentSectionQuestions = questions.filter(
    (q) => q.section === currentSection
  );
  const currentSectionStartIndex = questions.indexOf(
    currentSectionQuestions[0]
  );
  
  // Get question number within current section (1-based)
  const questionNumberInSection = currentQuestionIndex - currentSectionStartIndex + 1;
  
  // Get section info
  const getSectionInfo = (section: string) => {
    const sectionQuestions = questions.filter((q) => q.section === section);
    const startIndex = questions.indexOf(sectionQuestions[0]);
    const endIndex = questions.indexOf(sectionQuestions[sectionQuestions.length - 1]);
    return { 
      questions: sectionQuestions, 
      startIndex, 
      endIndex,
      count: sectionQuestions.length 
    };
  };
  
  const mendengarkanInfo = getSectionInfo("mendengarkan");
  const kaidahInfo = getSectionInfo("kaidah");
  const membacaInfo = getSectionInfo("membaca");

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Header */}
      <div className="bg-white border-b-4 border-black sticky top-0 z-40 shadow-[0px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-gray-900">
              Simulasi UKBI - Paket 1
            </h1>
            <p className="text-sm font-bold text-gray-600">
              Seksi {currentSection === "mendengarkan" ? "I" : currentSection === "kaidah" ? "II" : "III"} - {currentSection.charAt(0).toUpperCase() + currentSection.slice(1)}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right bg-[#FFD93D] border-4 border-black rounded-2xl px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-xs font-bold text-gray-700">Waktu Tersisa</p>
              <p
                className={`text-3xl font-black ${
                  timeLeft < 300 ? "text-[#FF6B6B]" : "text-gray-900"
                }`}
              >
                {formatTime(timeLeft)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
        {/* Left Sidebar - Section Navigator */}
        <div className="w-64 shrink-0 space-y-4">
          {/* Section 1 - Mendengarkan */}
          <div className="bg-[#C7E9FF] border-4 border-black rounded-2xl p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-black text-gray-900">Seksi I</h3>
              <span className="text-xs bg-white border-2 border-black font-black px-2 py-1 rounded-full">
                {mendengarkanInfo.count} soal
              </span>
            </div>
            <p className="text-sm font-bold text-gray-700 mb-3">Mendengarkan</p>
            <div className="w-full bg-white border-2 border-black rounded-full h-3 mb-2">
              <div
                className={`h-full rounded-full transition-all border-r-2 border-black ${
                  currentSection === "mendengarkan"
                    ? "bg-gray-900"
                    : "bg-[#B5F0C8]"
                }`}
                style={{
                  width: `${
                    (answers.slice(mendengarkanInfo.startIndex, mendengarkanInfo.endIndex + 1).filter((a) => a !== null).length /
                      mendengarkanInfo.count) *
                    100
                  }%`,
                }}
              ></div>
            </div>
            <p className="text-xs font-bold text-gray-700">
              {answers.slice(mendengarkanInfo.startIndex, mendengarkanInfo.endIndex + 1).filter((a) => a !== null).length}/{mendengarkanInfo.count} terjawab
            </p>
          </div>

          {/* Section 2 - Kaidah */}
          <div className={`bg-[#FFD93D] border-4 border-black rounded-2xl p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${
            mendengarkanInfo.endIndex < currentQuestionIndex ? "" : "opacity-50"
          }`}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-black text-gray-900">Seksi II</h3>
              <span className="text-xs bg-white border-2 border-black font-black px-2 py-1 rounded-full">
                {kaidahInfo.count} soal
              </span>
            </div>
            <p className="text-sm font-bold text-gray-700 mb-3">Merespons Kaidah</p>
            <div className="w-full bg-white border-2 border-black rounded-full h-3 mb-2">
              <div
                className={`h-full rounded-full transition-all border-r-2 border-black ${
                  currentSection === "kaidah"
                    ? "bg-gray-900"
                    : "bg-[#B5F0C8]"
                }`}
                style={{
                  width: `${
                    (answers.slice(kaidahInfo.startIndex, kaidahInfo.endIndex + 1).filter((a) => a !== null).length /
                      kaidahInfo.count) *
                    100
                  }%`,
                }}
              ></div>
            </div>
            <p className="text-xs font-bold text-gray-700">
              {answers.slice(kaidahInfo.startIndex, kaidahInfo.endIndex + 1).filter((a) => a !== null).length}/{kaidahInfo.count} terjawab
            </p>
          </div>

          {/* Section 3 - Membaca */}
          <div className={`bg-[#B5F0C8] border-4 border-black rounded-2xl p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${
            kaidahInfo.endIndex < currentQuestionIndex ? "" : "opacity-50"
          }`}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-black text-gray-900">Seksi III</h3>
              <span className="text-xs bg-white border-2 border-black font-black px-2 py-1 rounded-full">
                {membacaInfo.count} soal
              </span>
            </div>
            <p className="text-sm font-bold text-gray-700 mb-3">Membaca</p>
            <div className="w-full bg-white border-2 border-black rounded-full h-3 mb-2">
              <div
                className="bg-gray-900 h-full rounded-full transition-all border-r-2 border-black"
                style={{
                  width: `${
                    (answers.slice(membacaInfo.startIndex, membacaInfo.endIndex + 1).filter((a) => a !== null).length /
                      membacaInfo.count) *
                    100
                  }%`,
                }}
              ></div>
            </div>
            <p className="text-xs font-bold text-gray-700">
              {answers.slice(membacaInfo.startIndex, membacaInfo.endIndex + 1).filter((a) => a !== null).length}/{membacaInfo.count} terjawab
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white border-4 border-black rounded-3xl p-6 lg:p-8 mb-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="mb-6 flex items-center justify-between">
              <span className="inline-block px-4 py-2 bg-[#FFD93D] border-2 border-black text-gray-900 rounded-full text-sm font-black">
                Soal {questionNumberInSection} dari {currentSectionQuestions.length}
              </span>
              <span className="text-sm font-bold text-gray-600">
                Total: {currentQuestionIndex + 1}/{questions.length}
              </span>
            </div>

            {/* Audio Player for Seksi 1 */}
            {currentQuestion.section === "mendengarkan" &&
              currentQuestion.audioPath && (
                <div className="mb-6 bg-purple-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Audio Listening
                  </h3>
                  <audio
                    ref={audioRef}
                    controls
                    className="w-full"
                    src={currentQuestion.audioPath}
                    key={currentQuestion.audioPath}
                  >
                    Browser Anda tidak mendukung audio player.
                  </audio>
                  <p className="text-sm text-gray-600 mt-2">
                    Dengarkan audio dengan seksama sebelum menjawab pertanyaan.
                  </p>
                </div>
              )}

            {/* Image for Seksi 3 */}
            {currentQuestion.section === "membaca" &&
              currentQuestion.readingImagePath && (
                <div className="mb-6">
                  <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={currentQuestion.readingImagePath}
                      alt={`Gambar soal ${currentQuestionIndex + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              )}

            {/* Question */}
            <div className="mb-6">
              {currentQuestion.section === "kaidah" ? (
                <div className="space-y-4">
                  <div className="border-l-4 border-[#C7E9FF] pl-4 bg-[#C7E9FF]/10 p-4 rounded-r-xl">
                    <p className="font-black text-gray-900 mb-2">
                      Pernyataan X:
                    </p>
                    <p className="text-gray-700 font-bold mb-3">
                      {currentQuestion.statementX}
                    </p>
                    {currentQuestion.optionsX && (
                      <div className="space-y-1 ml-4">
                        {currentQuestion.optionsX.map((option, index) => (
                          <p key={index} className="text-gray-600 font-bold text-sm">
                            ({String.fromCharCode(65 + index)}) {option}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="border-l-4 border-[#FFD93D] pl-4 bg-[#FFD93D]/10 p-4 rounded-r-xl">
                    <p className="font-black text-gray-900 mb-2">
                      Pernyataan Y:
                    </p>
                    <p className="text-gray-700 font-bold mb-3">
                      {currentQuestion.statementY}
                    </p>
                    {currentQuestion.optionsY && (
                      <div className="space-y-1 ml-4">
                        {currentQuestion.optionsY.map((option, index) => (
                          <p key={index} className="text-gray-600 font-bold text-sm">
                            ({String.fromCharCode(65 + index)}) {option}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <p className="text-xl text-gray-900 font-black">
                  {currentQuestion.question}
                </p>
              )}
            </div>

            {/* Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`w-full text-left p-4 rounded-xl border-4 border-black transition-all font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 ${
                    answers[currentQuestionIndex] === index
                      ? "bg-[#FFD93D]"
                      : "bg-white"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`shrink-0 w-10 h-10 rounded-full border-2 border-black flex items-center justify-center font-black ${
                        answers[currentQuestionIndex] === index
                          ? "bg-gray-900 text-white"
                          : "bg-white text-gray-900"
                      }`}
                    >
                      {String.fromCharCode(65 + index)}
                    </div>
                    <p className="flex-1 text-gray-900 pt-1.5">{option}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === currentSectionStartIndex}
              className="px-6 py-3 bg-white border-4 border-black text-gray-900 rounded-xl font-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              ← Sebelumnya
            </button>

            {currentQuestionIndex ===
            currentSectionStartIndex + currentSectionQuestions.length - 1 ? (
              <button
                onClick={handleSectionComplete}
                className="px-6 py-3 bg-[#B5F0C8] border-4 border-black text-gray-900 rounded-xl font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
              >
                {currentSection === "membaca"
                  ? "Selesai"
                  : "Lanjut ke Seksi Berikutnya →"}
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={currentQuestionIndex === currentSectionStartIndex + currentSectionQuestions.length - 1}
                className="px-6 py-3 bg-[#FF6B6B] border-4 border-black text-white rounded-xl font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Selanjutnya →
              </button>
            )}
          </div>
        </div>

        {/* Right Sidebar - Question Numbers */}
        <div className="w-72 shrink-0">
          <div className="bg-white border-4 border-black rounded-3xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sticky top-24">
            <h3 className="font-black text-gray-900 mb-4 text-lg">Navigasi Soal</h3>
            <div className="grid grid-cols-4 gap-2">
              {currentSectionQuestions.map((q, idx) => {
                const absoluteIndex = currentSectionStartIndex + idx;
                const isAnswered = answers[absoluteIndex] !== null;
                const isCurrent = absoluteIndex === currentQuestionIndex;
                const displayNumber = idx + 1; // Reset numbering per section

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestionIndex(absoluteIndex)}
                    className={`aspect-square rounded-xl border-2 border-black text-sm font-black transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 ${
                      isCurrent
                        ? "bg-[#FFD93D] text-gray-900"
                        : isAnswered
                        ? "bg-[#B5F0C8] text-gray-900"
                        : "bg-white text-gray-900"
                    }`}
                  >
                    {displayNumber}
                </button>
              );
            })}
          </div>
          <div className="mt-6 space-y-3 text-sm font-bold">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#FFD93D] border-2 border-black rounded-lg"></div>
              <span>Aktif</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#B5F0C8] border-2 border-black rounded-lg"></div>
              <span>Terjawab</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white border-2 border-black rounded-lg"></div>
              <span>Belum</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
