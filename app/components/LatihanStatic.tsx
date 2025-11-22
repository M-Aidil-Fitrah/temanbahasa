'use client';

import {useState} from 'react';
// Pastikan Soal dan SoalMeresponKaedah sudah diimpor dari lib/types yang benar
import { Soal, SoalMeresponKaedah, JawabanHistoryItem } from '@/lib/types'; 
import HasilLatihan from './HasilLatihan';

// Type Guard
function isSoalMeresponKaedah(soal: Soal | SoalMeresponKaedah): soal is SoalMeresponKaedah {
    return (soal as SoalMeresponKaedah).dialog_x !== undefined;
}

// Interface baru untuk props
interface LatihanStaticProps {
    soalList: (Soal | SoalMeresponKaedah)[];
}

interface SoalMeresponKaedahProps {
    soal: SoalMeresponKaedah;
    onSubmit: (jawaban: string) => void;
    // Tambahkan nomor soal untuk tampilan
    soalNum: number; 
}

const SoalMeresponKaedahComponent: React.FC<SoalMeresponKaedahProps> = ({ soal, onSubmit, soalNum }) => {
    const [jawabanPilihan, setJawabanPilihan] = useState<'A' | 'B' | 'C' | 'D' | null>(null);

    // Fungsi helper untuk simulasi garis bawah (menggunakan <strong>)
    const renderDialog = (text: string, keyword: string) => {
        // Logika untuk menampilkan kata kunci dengan <strong>
        const parts = text.split(new RegExp(`(${keyword})`, 'gi'));
        return (
            <p>
                {parts.map((part, index) => 
                    part.toLowerCase() === keyword.toLowerCase() ? <strong key={index}>{part}</strong> : part
                )}
            </p>
        );
    };

    return (
        <div className="soal-merespon-kaedah">
            <h3>{soalNum}. {soal.seksi}</h3>
            
            {/* Dialog X dan Opsi A & B */}
            {renderDialog(soal.dialog_x, soal.kata_x)}
            <div className="opsi-x">
                {soal.opsi_x.map((opsiText, index) => {
                    const label = index === 0 ? 'A' : 'B';
                    return (
                        <div key={label}>
                            <input 
                                type="radio" id={`opsi-${label}`} name="jawaban" value={label} 
                                checked={jawabanPilihan === label}
                                onChange={() => setJawabanPilihan(label as 'A' | 'B')} 
                            />
                            <label htmlFor={`opsi-${label}`}>({label}) {opsiText}</label>
                        </div>
                    );
                })}
            </div>

            <hr/>
            
            {/* Dialog Y dan Opsi C & D */}
            {renderDialog(soal.dialog_y, soal.kata_y)}
            <div className="opsi-y">
                {soal.opsi_y.map((opsiText, index) => {
                    const label = index === 0 ? 'C' : 'D';
                    return (
                        <div key={label}>
                            <input 
                                type="radio" id={`opsi-${label}`} name="jawaban" value={label} 
                                checked={jawabanPilihan === label}
                                onChange={() => setJawabanPilihan(label as 'C' | 'D')} 
                            />
                            <label htmlFor={`opsi-${label}`}>({label}) {opsiText}</label>
                        </div>
                    );
                })}
            </div>
            
            <button 
                onClick={() => jawabanPilihan && onSubmit(jawabanPilihan)} 
                disabled={!jawabanPilihan}
            >
                Jawab
            </button>
        </div>
    );
};

export default function LatihanStatic({ soalList }: LatihanStaticProps) {
    const [currentSoalIndex, setCurrentSoalIndex] = useState(0);
    const [jawabanHistory, setJawabanHistory] = useState<JawabanHistoryItem[]>([]);
    const [isFinished, setIsFinished] = useState(false);

    const currentSoal = soalList[currentSoalIndex];
    
    // SoalMerseponKaedahComponent membutuhkan tipe soal yang sama (SoalMeresponKaedah)
    const isMeresponKaedah = isSoalMeresponKaedah(currentSoal); 
    
    // Menggunakan tipe JawabanHistoryItem yang generik (mencakup kedua tipe soal)
    const handleSubmitAnswer = (jawabanUser: string) => {
        // Karena SoalMeresponKaedah juga memiliki properti jawaban_benar, 
        // perbandingan ini tetap valid untuk kedua tipe.
        const isCorrect = jawabanUser === currentSoal.jawaban_benar; 

        const newEntry: JawabanHistoryItem = {
            soal: currentSoal, // Menyimpan seluruh objek soal
            jawabanUser,
            isCorrect,
        };

        setJawabanHistory(prev => [...prev, newEntry]);

        if (currentSoalIndex === soalList.length - 1){
            setIsFinished(true);
        } else {
            setCurrentSoalIndex(currentSoalIndex + 1);
        }
    };

    if (isFinished) {
        return <HasilLatihan history={jawabanHistory} />;
    }

    // --- Pemilihan Komponen Berdasarkan Tipe Soal ---
    
    if (isMeresponKaedah) {
        return (
            <SoalMeresponKaedahComponent 
                soal={currentSoal as SoalMeresponKaedah} // Cast ke tipe yang lebih spesifik
                onSubmit={handleSubmitAnswer}
                soalNum={currentSoalIndex + 1}
            />
        );
    }
    
    // Tampilan Soal Umum (Mendengarkan, Membaca, atau Kaidah dengan format standar)
    return (
      <div>
          <h3>Soal {currentSoalIndex + 1}: {currentSoal.pertanyaan}</h3>
          {currentSoal.opsi.map((opsi, index) => (
            <button 
                key={index} 
                onClick={() => handleSubmitAnswer(opsi.split('.')[0])}
            >
              {opsi}
            </button>
          ))}
      </div>
    );
}