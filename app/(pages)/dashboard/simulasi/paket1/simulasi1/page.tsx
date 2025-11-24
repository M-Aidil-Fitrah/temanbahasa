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
  const [markedQuestions, setMarkedQuestions] = useState<boolean[]>([]);
  const [currentSection, setCurrentSection] = useState<
    "mendengarkan" | "kaidah" | "membaca"
  >("mendengarkan");
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [isLoading, setIsLoading] = useState(true);
  const [showPreparation, setShowPreparation] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playedAudios, setPlayedAudios] = useState<Set<string>>(new Set());
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Prevent copy, select, and context menu
  const preventCopy = (e: React.MouseEvent | React.KeyboardEvent | React.ClipboardEvent) => {
    e.preventDefault();
    return false;
  };

  // Prevent keyboard shortcuts (Ctrl+C, Ctrl+A, Ctrl+X, etc.)
  const preventKeyboardShortcuts = (e: React.KeyboardEvent) => {
    if (
      (e.ctrlKey || e.metaKey) &&
      (e.key === 'c' || e.key === 'C' || 
       e.key === 'x' || e.key === 'X' || 
       e.key === 'a' || e.key === 'A' ||
       e.key === 'u' || e.key === 'U' ||
       e.key === 's' || e.key === 'S')
    ) {
      e.preventDefault();
      return false;
    }
    // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (
      e.key === 'F12' ||
      ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))
    ) {
      e.preventDefault();
      return false;
    }
  };

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
        setMarkedQuestions(new Array(data.length).fill(false));
        
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

  // Add global keyboard event listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === 'c' || e.key === 'C' || 
         e.key === 'x' || e.key === 'X' || 
         e.key === 'a' || e.key === 'A' ||
         e.key === 'u' || e.key === 'U' ||
         e.key === 's' || e.key === 'S')
      ) {
        e.preventDefault();
        return false;
      }
      if (
        e.key === 'F12' ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))
      ) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Timer
  useEffect(() => {
    if (questions.length === 0) return;

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
  }, [currentSection, questions.length]);

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

  const handleToggleMark = () => {
    const newMarked = [...markedQuestions];
    newMarked[currentQuestionIndex] = !newMarked[currentQuestionIndex];
    setMarkedQuestions(newMarked);
  };

  const handlePlayAudio = (audioPath: string) => {
    if (playedAudios.has(audioPath)) {
      // Audio sudah pernah diputar, tidak bisa diputar lagi
      return;
    }

    if (audioRef.current) {
      audioRef.current.src = audioPath;
      audioRef.current.play();
      setCurrentlyPlaying(audioPath);
      
      // Mark audio as played when it ends
      audioRef.current.onended = () => {
        setPlayedAudios(prev => new Set(prev).add(audioPath));
        setCurrentlyPlaying(null);
      };
    }
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
    
    // Check if all questions in current section are answered
    const currentSectionStartIndex = questions.indexOf(currentSectionQuestions[0]);
    const currentSectionEndIndex = questions.indexOf(
      currentSectionQuestions[currentSectionQuestions.length - 1]
    );
    
    const unansweredInSection = answers
      .slice(currentSectionStartIndex, currentSectionEndIndex + 1)
      .filter((a) => a === null).length;
    
    if (unansweredInSection > 0) {
      alert(`Masih ada ${unansweredInSection} soal yang belum dijawab di seksi ini. Silakan jawab semua soal sebelum melanjutkan.`);
      return;
    }
    
    // Show confirmation modal
    setShowConfirmModal(true);
  };

  const confirmSectionComplete = () => {
    setShowConfirmModal(false);
    
    if (currentSection === "mendengarkan") {
      // Redirect to preparation page for Seksi 2
      router.push("/dashboard/simulasi/paket1/simulasi1/persiapan?section=kaidah");
    } else if (currentSection === "kaidah") {
      // Redirect to preparation page for Seksi 3
      router.push("/dashboard/simulasi/paket1/simulasi1/persiapan?section=membaca");
    } else {
      // Simpan data ke localStorage dan redirect ke halaman hasil
      localStorage.setItem("simulasi1_questions", JSON.stringify(questions));
      localStorage.setItem("simulasi1_answers", JSON.stringify(answers));
      router.push("/dashboard/simulasi/paket1/simulasi1/hasil");
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

  if (isLoading || questions.length === 0) {
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

  const currentQuestion = questions[currentQuestionIndex];
  const currentSectionQuestions = questions.filter(
    (q) => q.section === currentSection
  );
  const currentSectionStartIndex = questions.indexOf(
    currentSectionQuestions[0]
  );
  
  // Get question number within current section (1-based)
  const questionNumberInSection = currentQuestionIndex - currentSectionStartIndex + 1;
  
  // Check if all questions in current section are answered
  const currentSectionEndIndex = questions.indexOf(
    currentSectionQuestions[currentSectionQuestions.length - 1]
  );
  const allAnsweredInSection = answers
    .slice(currentSectionStartIndex, currentSectionEndIndex + 1)
    .every((a) => a !== null);
  
  const unansweredCountInSection = answers
    .slice(currentSectionStartIndex, currentSectionEndIndex + 1)
    .filter((a) => a === null).length;
  
  // Check if current question is the first in its audio group (for mendengarkan section)
  const isFirstInAudioGroup = () => {
    if (currentQuestion.section !== "mendengarkan" || !currentQuestion.audioPath) {
      return false;
    }
    // Find the first question with the same audio path in current section
    const firstWithSameAudio = currentSectionQuestions.findIndex(
      q => q.audioPath === currentQuestion.audioPath
    );
    return questionNumberInSection === firstWithSameAudio + 1;
  };
  
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
    <div 
      className="min-h-screen bg-[#FFF8F0] select-none"
      onContextMenu={preventCopy}
      onCopy={preventCopy}
      onCut={preventCopy}
      onDragStart={preventCopy}
      onKeyDown={preventKeyboardShortcuts}
    >
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
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-gray-600">
                  Total: {currentQuestionIndex + 1}/{questions.length}
                </span>
                <button
                  onClick={handleToggleMark}
                  className={`px-4 py-2 border-3 border-black rounded-xl font-black transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 ${
                    markedQuestions[currentQuestionIndex]
                      ? "bg-[#FFB3D9] text-gray-900"
                      : "bg-white text-gray-600"
                  }`}
                >
                  {markedQuestions[currentQuestionIndex] ? "🚩 Ditandai" : "🏴 Tandai"}
                </button>
              </div>
            </div>

            {/* Audio Player for Seksi 1 - Ditampilkan untuk semua soal dalam grup yang sama */}
            {currentQuestion.section === "mendengarkan" &&
              currentQuestion.audioPath && (
                <div className="mb-6 bg-[#C7E9FF]/30 border-4 border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#C7E9FF] border-3 border-black rounded-full flex items-center justify-center">
                        <span className="text-2xl">🎧</span>
                      </div>
                      <div>
                        <h3 className="font-black text-gray-900">Audio Dialog/Monolog</h3>
                        <p className="text-sm font-bold text-gray-600">
                          {(() => {
                            const sameAudioQuestions = currentSectionQuestions.filter(
                              q => q.audioPath === currentQuestion.audioPath
                            );
                            const firstIndex = currentSectionQuestions.findIndex(
                              q => q.audioPath === currentQuestion.audioPath
                            ) + 1;
                            const lastIndex = firstIndex + sameAudioQuestions.length - 1;
                            return `Untuk soal ${firstIndex} - ${lastIndex}`;
                          })()}
                        </p>
                      </div>
                    </div>
                    {playedAudios.has(currentQuestion.audioPath) && (
                      <span className="px-3 py-1 bg-green-100 border-2 border-green-700 text-green-700 rounded-full text-xs font-black">
                        ✓ Sudah Diputar
                      </span>
                    )}
                  </div>

                  {/* Hidden Audio Element */}
                  <audio
                    ref={audioRef}
                    className="hidden"
                    onContextMenu={preventCopy}
                  >
                    Browser Anda tidak mendukung audio player.
                  </audio>

                  {/* Custom Play Button */}
                  <div className="flex flex-col items-center gap-4">
                    <button
                      onClick={() => handlePlayAudio(currentQuestion.audioPath!)}
                      disabled={playedAudios.has(currentQuestion.audioPath) || currentlyPlaying === currentQuestion.audioPath}
                      className={`px-8 py-4 rounded-2xl border-4 border-black font-black text-lg transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:hover:translate-y-0 ${
                        currentlyPlaying === currentQuestion.audioPath
                          ? "bg-[#FFD93D] text-gray-900"
                          : playedAudios.has(currentQuestion.audioPath)
                          ? "bg-gray-300 text-gray-600"
                          : "bg-[#B5F0C8] text-gray-900"
                      }`}
                    >
                      {currentlyPlaying === currentQuestion.audioPath ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-pulse">🔊</span> Sedang Diputar...
                        </span>
                      ) : playedAudios.has(currentQuestion.audioPath) ? (
                        <span className="flex items-center gap-2">
                          🔒 Audio Sudah Diputar
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          ▶️ Putar Audio
                        </span>
                      )}
                    </button>
                    <p className="text-sm font-bold text-gray-700 text-center max-w-md">
                      {playedAudios.has(currentQuestion.audioPath) 
                        ? "Audio hanya dapat diputar sekali. Silakan jawab semua pertanyaan terkait audio ini."
                        : "⚠️ Audio hanya dapat diputar SATU KALI. Pastikan Anda siap mendengarkan sebelum menekan tombol putar."
                      }
                    </p>
                  </div>
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
            <div 
              className="mb-6 select-none"
              onCopy={preventCopy}
              onCut={preventCopy}
              onContextMenu={preventCopy}
              onDragStart={preventCopy}
            >
              {currentQuestion.section === "kaidah" ? (
                <div className="space-y-4 select-none">
                  <div className="border-l-4 border-[#C7E9FF] pl-4 bg-[#C7E9FF]/10 p-4 rounded-r-xl select-none">
                    <p className="font-black text-gray-900 mb-2 select-none">
                      Pernyataan X:
                    </p>
                    <p className="text-gray-700 font-bold mb-3 select-none">
                      {currentQuestion.statementX}
                    </p>
                    {currentQuestion.optionsX && (
                      <div className="space-y-1 ml-4 select-none">
                        {currentQuestion.optionsX.map((option, index) => (
                          <p key={index} className="text-gray-600 font-bold text-sm select-none">
                            ({String.fromCharCode(65 + index)}) {option}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="border-l-4 border-[#FFD93D] pl-4 bg-[#FFD93D]/10 p-4 rounded-r-xl select-none">
                    <p className="font-black text-gray-900 mb-2 select-none">
                      Pernyataan Y:
                    </p>
                    <p className="text-gray-700 font-bold mb-3 select-none">
                      {currentQuestion.statementY}
                    </p>
                    {currentQuestion.optionsY && (
                      <div className="space-y-1 ml-4 select-none">
                        {currentQuestion.optionsY.map((option, index) => (
                          <p key={index} className="text-gray-600 font-bold text-sm select-none">
                            ({String.fromCharCode(67 + index)}) {option}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <p className="text-xl text-gray-900 font-black select-none">
                  {currentQuestion.question}
                </p>
              )}
            </div>

            {/* Options */}
            <div className="space-y-3 select-none">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  onContextMenu={preventCopy}
                  onCopy={preventCopy}
                  onCut={preventCopy}
                  onDragStart={preventCopy}
                  className={`w-full text-left p-4 rounded-xl border-4 border-black transition-all font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 select-none ${
                    answers[currentQuestionIndex] === index
                      ? "bg-[#FFD93D]"
                      : "bg-white"
                  }`}
                >
                  <div className="flex items-start gap-3 select-none">
                    <div
                      className={`shrink-0 w-10 h-10 rounded-full border-2 border-black flex items-center justify-center font-black select-none ${
                        answers[currentQuestionIndex] === index
                          ? "bg-gray-900 text-white"
                          : "bg-white text-gray-900"
                      }`}
                    >
                      {String.fromCharCode(65 + index)}
                    </div>
                    <p className="flex-1 text-gray-900 pt-1.5 select-none">{option}</p>
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
              <div className="flex flex-col items-end gap-2">
                {!allAnsweredInSection && (
                  <p className="text-sm font-bold text-red-600">
                    ⚠️ {unansweredCountInSection} soal belum dijawab
                  </p>
                )}
                <button
                  onClick={handleSectionComplete}
                  disabled={!allAnsweredInSection}
                  className="px-6 py-3 bg-[#B5F0C8] border-4 border-black text-gray-900 rounded-xl font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:hover:translate-y-0 transition-all"
                >
                  {currentSection === "membaca"
                    ? "Selesai Simulasi"
                    : "Lanjut ke Seksi Berikutnya →"}
                </button>
              </div>
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
                const isMarked = markedQuestions[absoluteIndex];
                const displayNumber = idx + 1; // Reset numbering per section

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestionIndex(absoluteIndex)}
                    className={`aspect-square rounded-xl border-2 border-black text-sm font-black transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 relative ${
                      isCurrent
                        ? "bg-[#FFD93D] text-gray-900"
                        : isMarked
                        ? "bg-[#FFB3D9] text-gray-900"
                        : isAnswered
                        ? "bg-[#B5F0C8] text-gray-900"
                        : "bg-white text-gray-900"
                    }`}
                  >
                    {displayNumber}
                    {isMarked && !isCurrent && (
                      <span className="absolute -top-1 -right-1 text-xs">🚩</span>
                    )}
                </button>
              );
            })}
          </div>
          <div className="mt-6 space-y-3 text-sm font-bold text-gray-900">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#FFD93D] border-2 border-black rounded-lg"></div>
              <span className="text-gray-900">Aktif</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#FFB3D9] border-2 border-black rounded-lg"></div>
              <span className="text-gray-900">Ditandai </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#B5F0C8] border-2 border-black rounded-lg"></div>
              <span className="text-gray-900">Terjawab</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white border-2 border-black rounded-lg"></div>
              <span className="text-gray-900">Belum</span>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white border-6 border-black rounded-3xl p-8 max-w-md w-full shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] animate-scale-up">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-[#FFD93D] border-4 border-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-4xl">⚠️</span>
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">
                Konfirmasi Lanjut Seksi
              </h2>
              <p className="text-sm font-bold text-gray-600">
                Pastikan semua jawaban sudah benar
              </p>
            </div>

            {/* Content */}
            <div className="space-y-4 mb-6">
              {/* Waktu Sisa */}
              <div className="bg-[#C7E9FF] border-4 border-black rounded-2xl p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-sm font-bold text-gray-700 mb-2">Waktu Tersisa Seksi Ini:</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-3xl">⏰</span>
                  <span className="text-4xl font-black text-gray-900">
                    {formatTime(timeLeft)}
                  </span>
                </div>
              </div>

              {/* Info Section */}
              <div className="bg-[#FFD93D]/20 border-4 border-black rounded-2xl p-4">
                <p className="font-bold text-gray-900 text-center">
                  {currentSection === "mendengarkan" 
                    ? "Anda akan melanjutkan ke Seksi II - Merespons Kaidah"
                    : currentSection === "kaidah"
                    ? "Anda akan melanjutkan ke Seksi III - Membaca"
                    : "Anda akan menyelesaikan simulasi ini"
                  }
                </p>
              </div>

              {/* Warning */}
              <div className="bg-red-50 border-4 border-red-500 rounded-2xl p-4">
                <p className="text-sm font-black text-red-700 text-center">
                  ⚠️ Anda tidak dapat kembali ke seksi ini setelah melanjutkan!
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="flex-1 px-6 py-3 bg-white border-4 border-black text-gray-900 rounded-xl font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
              >
                Batal
              </button>
              <button
                onClick={confirmSectionComplete}
                className="flex-1 px-6 py-3 bg-[#B5F0C8] border-4 border-black text-gray-900 rounded-xl font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
              >
                Ya, Lanjutkan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
