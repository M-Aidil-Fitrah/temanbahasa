// components/HasilLatihan.tsx ('use client')
'use client'

import { JawabanHistoryItem, Soal, SoalMeresponKaedah } from '@/lib/types';

function isSoalMeresponKaedah(soal: Soal | SoalMeresponKaedah): soal is SoalMeresponKaedah {
    return (soal as SoalMeresponKaedah).dialog_x !== undefined;
}

interface HasilLatihanProps {
  history: JawabanHistoryItem[]; // Menerima riwayat jawaban dengan tipe JawabanHistoryItem[]
}

const renderDialogWithHighlight = (text: string, keyword: string) => {
    // Fungsi yang sama dari LatihanStatic untuk mensimulasikan garis bawah
    const parts = text.split(new RegExp(`(${keyword})`, 'gi'));
    return (
        <p>
            {parts.map((part, index) => 
                part.toLowerCase() === keyword.toLowerCase() ? <strong key={index}>{part}</strong> : part
            )}
        </p>
    );
};

const ReviewSoalItem: React.FC<{ item: JawabanHistoryItem, index: number }> = ({ item, index }) => {
    const soal = item.soal; // Tipe: Soal | SoalMeresponKaedah
    const soalNum = index + 1;

    if (isSoalMeresponKaedah(soal)) {
        // --- RENDERING SOAL MERESPON KAEDAH ---
        return (
            <div className="review-soal-merespon">
                <h3>{soalNum}. Review Soal Merespon Kaidah</h3>
                
                {/* Dialog X */}
                {renderDialogWithHighlight(soal.dialog_x, soal.kata_x)}
                
                {/* Dialog Y */}
                {renderDialogWithHighlight(soal.dialog_y, soal.kata_y)}
                
                {/* Opsi gabungan untuk review */}
                <p>Opsi A/B: {soal.opsi_x.join(' | ')}</p>
                <p>Opsi C/D: {soal.opsi_y.join(' | ')}</p>
            </div>
        );
    } 
    
    // --- RENDERING SOAL UMUM (Soal) ---
    // TypeScript sekarang tahu bahwa jika bukan SoalMeresponKaedah, maka pasti Soal
    return (
        <div className="review-soal-umum">
            <h3>{soalNum}. {soal.pertanyaan}</h3> 
            
            {/* Opsi Jawaban Umum */}
            <ul>
              {soal.opsi.map((opsi, i) => { // 💡 Sekarang 'opsi' dan 'i' memiliki tipe implisit string dan number
                const isCorrectAnswer = opsi.startsWith(soal.jawaban_benar);
                const isUserAnswer = opsi.startsWith(item.jawabanUser);

                return (
                  <li key={i} style={{
                    fontWeight: isCorrectAnswer ? 'bold' : 'normal',
                    color: isCorrectAnswer ? 'green' : (isUserAnswer && !item.isCorrect) ? 'red' : 'inherit'
                  }}>
                    {opsi}
                    {isCorrectAnswer && ' (Jawaban Benar)'}
                    {isUserAnswer && !item.isCorrect && ' (Jawaban Anda Salah)'}
                  </li>
                );
              })}
            </ul>
        </div>
    );
};

export default function HasilLatihan({ history }: HasilLatihanProps) {
  const totalSoal = history.length;
  const totalBenar = history.filter(item => item.isCorrect).length;

  return (
    <div className="hasil-latihan-container">
      <h1>🎉 Hasil Latihan Anda</h1>
      <p>Total Benar: **{totalBenar}** dari **{totalSoal}**</p>
      <hr/>

      {history.map((item, index) => (
        <div key={index} className="review-container" style={{
          border: `1px solid ${item.isCorrect ? 'green' : 'red'}`,
          padding: '15px',
          margin: '20px 0'
        }}>
          
          {/* 🚀 Menggunakan komponen ReviewSoalItem untuk menangani rendering berdasarkan tipe */}
          <ReviewSoalItem item={item} index={index} /> 
          
          {/* Detail Jawaban dan Pembahasan (Ini tetap sama karena properti ini dimiliki oleh kedua tipe soal) */}
          <p>
            **Jawaban Anda:** <span style={{ color: item.isCorrect ? 'green' : 'red' }}>
              {item.jawabanUser} {item.isCorrect ? '(BENAR)' : '(SALAH)'}
            </span>
          </p>
          <p>
            **Jawaban yang Benar:** <span style={{ color: 'green', fontWeight: 'bold' }}>
              {item.soal.jawaban_benar}
            </span>
          </p>
          <h4>📝 Pembahasan:</h4>
          <p>{item.soal.pembahasan}</p>
        </div>
      ))}
    </div>
  );
}