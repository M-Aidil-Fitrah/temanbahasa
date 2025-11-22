// components/HasilLatihan.tsx ('use client')
'use client'

import { JawabanHistoryItem } from '@/lib/types';

interface HasilLatihanProps {
  history: JawabanHistoryItem[]; // Menerima riwayat jawaban dengan tipe JawabanHistoryItem[]
}

export default function HasilLatihan({ history }: HasilLatihanProps) {
  const totalSoal = history.length;
  const totalBenar = history.filter(item => item.isCorrect).length;

  return (
    <div className="hasil-latihan-container">
      <h1>🎉 Hasil Latihan Anda</h1>
      <p>Total Benar: **{totalBenar}** dari **{totalSoal}**</p>
      <hr/>

      {history.map((item, index) => (
        <div key={index} className="review-soal" style={{
          // ... style yang sudah ada
        }}>
          <h3>{index + 1}. {item.soal.pertanyaan}</h3>
          
          {/* Opsi Jawaban */}
          <ul>
            {item.soal.opsi.map((opsi, i) => {
              const isCorrectAnswer = opsi.startsWith(item.soal.jawaban_benar);
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
          
          {/* Detail Jawaban dan Pembahasan */}
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