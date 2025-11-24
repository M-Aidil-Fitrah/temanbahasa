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
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-50 to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat soal...</p>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-50 to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat soal...</p>
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="min-h-screen bg-linear-to-br from-purple-50 to-blue-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-12 h-12 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Tes Selesai!
              </h1>
              <p className="text-gray-600">
                Berikut adalah hasil simulasi Anda
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-purple-50 rounded-xl p-6 text-center">
                <p className="text-sm text-gray-600 mb-2">Benar</p>
                <p className="text-4xl font-bold text-purple-600">
                  {score.correct}
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <p className="text-sm text-gray-600 mb-2">Total Soal</p>
                <p className="text-4xl font-bold text-blue-600">
                  {score.total}
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <p className="text-sm text-gray-600 mb-2">Persentase</p>
                <p className="text-4xl font-bold text-green-600">
                  {score.percentage}%
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Pembahasan Soal
              </h2>
              {questions.map((q, index) => (
                <div
                  key={q.id}
                  className={`border-l-4 p-4 rounded ${
                    answers[index] === q.correct
                      ? "border-green-500 bg-green-50"
                      : "border-red-500 bg-red-50"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <p className="font-semibold text-gray-800">
                      Soal {index + 1} - {q.section}
                    </p>
                    <span
                      className={`text-sm font-medium ${
                        answers[index] === q.correct
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {answers[index] === q.correct ? "✓ Benar" : "✗ Salah"}
                    </span>
                  </div>
                  {q.question && (
                    <p className="text-sm text-gray-700 mb-2">{q.question}</p>
                  )}
                  {q.statementX && (
                    <div className="text-sm text-gray-700 mb-2">
                      <p className="font-medium">Pernyataan X:</p>
                      <p>{q.statementX}</p>
                      {q.optionsX && (
                        <ul className="ml-4 mt-1">
                          {q.optionsX.map((opt, i) => (
                            <li key={i}>({String.fromCharCode(65 + i)}) {opt}</li>
                          ))}
                        </ul>
                      )}
                      <p className="font-medium mt-2">Pernyataan Y:</p>
                      <p>{q.statementY}</p>
                      {q.optionsY && (
                        <ul className="ml-4 mt-1">
                          {q.optionsY.map((opt, i) => (
                            <li key={i}>({String.fromCharCode(65 + i)}) {opt}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                  <div className="text-sm text-gray-600 mb-2">
                    <p>
                      Jawaban Anda:{" "}
                      <span className="font-medium">
                        {answers[index] !== null
                          ? String.fromCharCode(65 + answers[index]!)
                          : "Tidak dijawab"}
                      </span>
                    </p>
                    <p>
                      Jawaban Benar:{" "}
                      <span className="font-medium text-green-600">
                        {String.fromCharCode(65 + q.correct)}
                      </span>
                    </p>
                  </div>
                  <div className="text-sm text-gray-700 bg-white p-3 rounded">
                    <p className="font-medium mb-1">Pembahasan:</p>
                    <p>{q.explanation}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <button
                onClick={() => router.push("/dashboard/simulasi/paket1")}
                className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Kembali ke Pilihan Simulasi
              </button>
              <button
                onClick={() => window.location.reload()}
                className="flex-1 px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                Coba Lagi
              </button>
            </div>
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">
              Simulasi UKBI - Paket 1
            </h1>
            <p className="text-sm text-gray-600">
              Seksi {currentSection === "mendengarkan" ? "I" : currentSection === "kaidah" ? "II" : "III"} - {currentSection.charAt(0).toUpperCase() + currentSection.slice(1)}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">Waktu Tersisa</p>
              <p
                className={`text-2xl font-bold ${
                  timeLeft < 300 ? "text-red-600" : "text-purple-600"
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
        <div className="w-64 space-y-4">
          {/* Section 1 - Mendengarkan */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800">Seksi I</h3>
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                {mendengarkanInfo.count} soal
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">Mendengarkan</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div
                className={`h-2 rounded-full transition-all ${
                  currentSection === "mendengarkan"
                    ? "bg-purple-600"
                    : "bg-green-500"
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
            <p className="text-xs text-gray-500">
              {answers.slice(mendengarkanInfo.startIndex, mendengarkanInfo.endIndex + 1).filter((a) => a !== null).length}/{mendengarkanInfo.count} terjawab
            </p>
          </div>

          {/* Section 2 - Kaidah */}
          <div className={`bg-white rounded-lg shadow-md p-4 ${
            mendengarkanInfo.endIndex < currentQuestionIndex ? "" : "opacity-50"
          }`}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800">Seksi II</h3>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                {kaidahInfo.count} soal
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">Merespons Kaidah</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div
                className={`h-2 rounded-full transition-all ${
                  currentSection === "kaidah"
                    ? "bg-blue-600"
                    : "bg-green-500"
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
            <p className="text-xs text-gray-500">
              {answers.slice(kaidahInfo.startIndex, kaidahInfo.endIndex + 1).filter((a) => a !== null).length}/{kaidahInfo.count} terjawab
            </p>
          </div>

          {/* Section 3 - Membaca */}
          <div className={`bg-white rounded-lg shadow-md p-4 ${
            kaidahInfo.endIndex < currentQuestionIndex ? "" : "opacity-50"
          }`}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800">Seksi III</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                {membacaInfo.count} soal
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">Membaca</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div
                className="bg-green-600 h-2 rounded-full transition-all"
                style={{
                  width: `${
                    (answers.slice(membacaInfo.startIndex, membacaInfo.endIndex + 1).filter((a) => a !== null).length /
                      membacaInfo.count) *
                    100
                  }%`,
                }}
              ></div>
            </div>
            <p className="text-xs text-gray-500">
              {answers.slice(membacaInfo.startIndex, membacaInfo.endIndex + 1).filter((a) => a !== null).length}/{membacaInfo.count} terjawab
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                Soal {questionNumberInSection} dari {currentSectionQuestions.length}
              </span>
              <span className="text-sm text-gray-500">
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
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="font-semibold text-gray-800 mb-2">
                      Pernyataan X:
                    </p>
                    <p className="text-gray-700 mb-3">
                      {currentQuestion.statementX}
                    </p>
                    {currentQuestion.optionsX && (
                      <div className="space-y-1 ml-4">
                        {currentQuestion.optionsX.map((option, index) => (
                          <p key={index} className="text-gray-600 text-sm">
                            ({String.fromCharCode(65 + index)}) {option}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="font-semibold text-gray-800 mb-2">
                      Pernyataan Y:
                    </p>
                    <p className="text-gray-700 mb-3">
                      {currentQuestion.statementY}
                    </p>
                    {currentQuestion.optionsY && (
                      <div className="space-y-1 ml-4">
                        {currentQuestion.optionsY.map((option, index) => (
                          <p key={index} className="text-gray-600 text-sm">
                            ({String.fromCharCode(65 + index)}) {option}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <p className="text-lg text-gray-800 font-medium">
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
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    answers[currentQuestionIndex] === index
                      ? "border-purple-600 bg-purple-50"
                      : "border-gray-200 hover:border-purple-300 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                        answers[currentQuestionIndex] === index
                          ? "bg-purple-600 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {String.fromCharCode(65 + index)}
                    </div>
                    <p className="flex-1 text-gray-700 pt-1">{option}</p>
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
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              ← Sebelumnya
            </button>

            {currentQuestionIndex ===
            currentSectionStartIndex + currentSectionQuestions.length - 1 ? (
              <button
                onClick={handleSectionComplete}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                {currentSection === "membaca"
                  ? "Selesai"
                  : "Lanjut ke Seksi Berikutnya →"}
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={currentQuestionIndex === currentSectionStartIndex + currentSectionQuestions.length - 1}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Selanjutnya →
              </button>
            )}
          </div>
        </div>

        {/* Right Sidebar - Question Numbers */}
        <div className="w-48 bg-white rounded-lg shadow-md p-4 h-fit sticky top-24">
          <h3 className="font-semibold text-gray-800 mb-3 text-sm">Navigasi Soal</h3>
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
                  className={`aspect-square rounded-lg text-sm font-medium transition-colors ${
                    isCurrent
                      ? "bg-purple-600 text-white"
                      : isAnswered
                      ? "bg-green-100 text-green-700 hover:bg-green-200"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {displayNumber}
                </button>
              );
            })}
          </div>
          <div className="mt-4 space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-600 rounded"></div>
              <span>Aktif</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-100 border border-green-700 rounded"></div>
              <span>Terjawab</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-100 border border-gray-700 rounded"></div>
              <span>Belum</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
