'use client';

import { useState } from 'react';
import { Soal, SoalMeresponKaedah, JawabanHistoryItem } from '@/lib/types'; 
import HasilLatihan from './HasilLatihan';

// Type Guard
function isSoalMeresponKaedah(soal: Soal | SoalMeresponKaedah): soal is SoalMeresponKaedah {
    return (soal as SoalMeresponKaedah).dialog_x !== undefined;
}

interface LatihanStaticProps {
    soalList: (Soal | SoalMeresponKaedah)[];
}

interface SoalMeresponKaedahProps {
    soal: SoalMeresponKaedah;
    soalNum: number;
    jawaban: string | null;
    onJawabanChange: (jawaban: string) => void;
}

const SoalMeresponKaedahComponent: React.FC<SoalMeresponKaedahProps> = ({ 
    soal, 
    soalNum, 
    jawaban, 
    onJawabanChange 
}) => {
    // Fungsi untuk merender dialog dengan kata yang di-bold (tanpa **)
    const renderDialog = (text: string, keyword: string) => {
        // Hilangkan ** dari text
        const cleanText = text.replace(/\*\*/g, '');
        const parts = cleanText.split(new RegExp(`(${keyword})`, 'gi'));
        return (
            <p className="text-gray-800 mb-3 text-base">
                {parts.map((part, index) => 
                    part.toLowerCase() === keyword.toLowerCase() 
                        ? <strong key={index} className="font-black text-blue-600 underline decoration-2 decoration-blue-400">{part}</strong> 
                        : part
                )}
            </p>
        );
    };

    return (
        <div className="bg-white rounded-2xl border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6">
            <div className="flex items-start gap-3 mb-4">
                <div className="bg-blue-400 text-white font-black text-lg w-10 h-10 rounded-xl border-3 border-black flex items-center justify-center shadow-md flex-shrink-0">
                    {soalNum}
                </div>
                <div className="flex-1">
                    <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-lg font-bold text-xs mb-3">
                        {soal.seksi.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </div>
                    
                    {/* Dialog X */}
                    <div className="mb-4 bg-yellow-50 p-4 rounded-xl border-2 border-yellow-200">
                        <div className="font-bold text-sm text-gray-600 mb-2">👤 Dialog X:</div>
                        {renderDialog(soal.dialog_x, soal.kata_x)}
                        <div className="space-y-2 mt-3">
                            {soal.opsi_x.map((opsiText, index) => {
                                const label = index === 0 ? 'A' : 'B';
                                const isSelected = jawaban === label;
                                return (
                                    <label 
                                        key={label}
                                        className={`flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                                            isSelected 
                                                ? 'border-black bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' 
                                                : 'border-gray-300 bg-white hover:border-gray-400 hover:bg-gray-50'
                                        }`}
                                    >
                                        <input 
                                            type="radio"
                                            name={`soal-${soalNum}`}
                                            value={label}
                                            checked={isSelected}
                                            onChange={() => onJawabanChange(label)}
                                            className="mt-1 w-5 h-5 accent-blue-600"
                                        />
                                        <span className="flex-1 text-gray-800">
                                            <strong className="font-bold text-blue-600">({label})</strong> {opsiText}
                                        </span>
                                    </label>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex items-center justify-center my-3">
                        <div className="h-px bg-gray-300 flex-1"></div>
                        <span className="px-3 text-gray-400 text-sm font-bold">⬇️</span>
                        <div className="h-px bg-gray-300 flex-1"></div>
                    </div>
                    
                    {/* Dialog Y */}
                    <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
                        <div className="font-bold text-sm text-gray-600 mb-2">👤 Dialog Y:</div>
                        {renderDialog(soal.dialog_y, soal.kata_y)}
                        <div className="space-y-2 mt-3">
                            {soal.opsi_y.map((opsiText, index) => {
                                const label = index === 0 ? 'C' : 'D';
                                const isSelected = jawaban === label;
                                return (
                                    <label 
                                        key={label}
                                        className={`flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                                            isSelected 
                                                ? 'border-black bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' 
                                                : 'border-gray-300 bg-white hover:border-gray-400 hover:bg-gray-50'
                                        }`}
                                    >
                                        <input 
                                            type="radio"
                                            name={`soal-${soalNum}`}
                                            value={label}
                                            checked={isSelected}
                                            onChange={() => onJawabanChange(label)}
                                            className="mt-1 w-5 h-5 accent-green-600"
                                        />
                                        <span className="flex-1 text-gray-800">
                                            <strong className="font-bold text-green-600">({label})</strong> {opsiText}
                                        </span>
                                    </label>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface SoalUmumProps {
    soal: Soal;
    soalNum: number;
    jawaban: string | null;
    onJawabanChange: (jawaban: string) => void;
}

const SoalUmumComponent: React.FC<SoalUmumProps> = ({ 
    soal, 
    soalNum, 
    jawaban, 
    onJawabanChange 
}) => {
    return (
        <div className="bg-white rounded-2xl border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-6">
            <div className="flex items-start gap-3 mb-4">
                <div className="bg-green-400 text-white font-black text-lg w-10 h-10 rounded-xl border-3 border-black flex items-center justify-center shadow-md flex-shrink-0">
                    {soalNum}
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">{soal.pertanyaan}</h3>
                    <div className="space-y-2">
                        {soal.opsi.map((opsi, index) => {
                            const opsiLabel = opsi.split('.')[0].trim();
                            const isSelected = jawaban === opsiLabel;
                            return (
                                <label 
                                    key={index}
                                    className={`flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                                        isSelected 
                                            ? 'border-black bg-yellow-100 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' 
                                            : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                                    }`}
                                >
                                    <input 
                                        type="radio"
                                        name={`soal-${soalNum}`}
                                        value={opsiLabel}
                                        checked={isSelected}
                                        onChange={() => onJawabanChange(opsiLabel)}
                                        className="mt-1 w-5 h-5 accent-green-600"
                                    />
                                    <span className="flex-1 text-gray-800">{opsi}</span>
                                </label>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function LatihanStatic({ soalList }: LatihanStaticProps) {
    const SOAL_PER_PAGE = 5;
    const [currentPage, setCurrentPage] = useState(0);
    const [jawabanTemp, setJawabanTemp] = useState<Record<number, string>>({});
    const [jawabanHistory, setJawabanHistory] = useState<JawabanHistoryItem[]>([]);
    const [isFinished, setIsFinished] = useState(false);

    const totalPages = Math.ceil(soalList.length / SOAL_PER_PAGE);
    const startIndex = currentPage * SOAL_PER_PAGE;
    const endIndex = Math.min(startIndex + SOAL_PER_PAGE, soalList.length);
    const currentSoalList = soalList.slice(startIndex, endIndex);

    const handleJawabanChange = (soalIndex: number, jawaban: string) => {
        setJawabanTemp(prev => ({
            ...prev,
            [soalIndex]: jawaban
        }));
    };

    const allCurrentSoalAnswered = () => {
        for (let i = startIndex; i < endIndex; i++) {
            if (!jawabanTemp[i]) return false;
        }
        return true;
    };

    const handleNextPage = () => {
        // Simpan jawaban untuk soal di halaman ini
        const newHistory: JawabanHistoryItem[] = [];
        for (let i = startIndex; i < endIndex; i++) {
            const soal = soalList[i];
            const jawabanUser = jawabanTemp[i];
            const isCorrect = jawabanUser === soal.jawaban_benar;
            newHistory.push({
                soal,
                jawabanUser,
                isCorrect
            });
        }
        
        setJawabanHistory(prev => [...prev, ...newHistory]);

        // Cek apakah ini halaman terakhir
        if (currentPage === totalPages - 1) {
            setIsFinished(true);
        } else {
            setCurrentPage(currentPage + 1);
            // Scroll ke atas saat pindah halaman
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    if (isFinished) {
        return <HasilLatihan history={jawabanHistory} />;
    }

    const progress = ((currentPage + 1) / totalPages) * 100;
    const soalAnswered = Object.keys(jawabanTemp).filter(key => 
        parseInt(key) >= startIndex && parseInt(key) < endIndex
    ).length;

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50 p-4 md:p-6 pb-32">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                            <div className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full font-bold text-xs mb-2">
                                LATIHAN UKBI
                            </div>
                            <h1 className="text-2xl md:text-3xl font-black text-gray-900">
                                Halaman {currentPage + 1} dari {totalPages}
                            </h1>
                            <p className="text-gray-600 font-semibold mt-1 text-sm md:text-base">
                                Soal {startIndex + 1} - {endIndex} dari {soalList.length}
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <div className="bg-white rounded-2xl border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <div className="text-2xl md:text-3xl font-black text-blue-600">{soalAnswered}/{currentSoalList.length}</div>
                                <div className="text-xs font-bold text-gray-600">Terjawab</div>
                            </div>
                            <div className="bg-white rounded-2xl border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <div className="text-2xl md:text-3xl font-black text-green-600">{currentPage + 1}/{totalPages}</div>
                                <div className="text-xs font-bold text-gray-600">Halaman</div>
                            </div>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="bg-gray-200 h-4 rounded-full border-3 border-black overflow-hidden">
                        <div 
                            className="bg-gradient-to-r from-green-400 to-blue-500 h-full transition-all duration-500 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <p className="text-center text-sm font-bold text-gray-600 mt-2">
                        Progress: {Math.round(progress)}%
                    </p>
                </div>

                {/* Soal List */}
                <div className="mb-6">
                    {currentSoalList.map((soal, index) => {
                        const globalIndex = startIndex + index;
                        const soalNum = globalIndex + 1;
                        
                        if (isSoalMeresponKaedah(soal)) {
                            return (
                                <SoalMeresponKaedahComponent
                                    key={globalIndex}
                                    soal={soal}
                                    soalNum={soalNum}
                                    jawaban={jawabanTemp[globalIndex] || null}
                                    onJawabanChange={(jawaban) => handleJawabanChange(globalIndex, jawaban)}
                                />
                            );
                        }
                        
                        return (
                            <SoalUmumComponent
                                key={globalIndex}
                                soal={soal}
                                soalNum={soalNum}
                                jawaban={jawabanTemp[globalIndex] || null}
                                onJawabanChange={(jawaban) => handleJawabanChange(globalIndex, jawaban)}
                            />
                        );
                    })}
                </div>

                {/* Info Box */}
                <div className="mb-6 bg-blue-100 rounded-2xl border-3 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <p className="text-sm text-gray-700 text-center">
                        💡 <strong className="font-bold">Tips:</strong> Pastikan semua jawaban sudah dipilih sebelum melanjutkan ke halaman berikutnya
                    </p>
                </div>
            </div>

            {/* Fixed Navigation Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-black p-4 md:p-6 shadow-[0_-8px_0px_0px_rgba(0,0,0,0.1)]">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="text-sm font-bold text-gray-600 text-center md:text-left">
                            {allCurrentSoalAnswered() 
                                ? '✅ Semua soal di halaman ini sudah terjawab!' 
                                : `⚠️ Masih ada ${currentSoalList.length - soalAnswered} soal yang belum dijawab`
                            }
                        </div>
                        <button
                            onClick={handleNextPage}
                            disabled={!allCurrentSoalAnswered()}
                            className={`w-full md:w-auto px-8 py-4 rounded-2xl border-3 border-black font-black text-base md:text-lg transition-all ${
                                allCurrentSoalAnswered()
                                    ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-2 active:translate-y-2 active:shadow-none'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]'
                            }`}
                        >
                            {currentPage === totalPages - 1 ? '🎯 Selesai & Lihat Hasil!' : 'Lanjut ke Halaman Berikutnya ➜'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}