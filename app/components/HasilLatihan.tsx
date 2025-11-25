'use client'

import { JawabanHistoryItem, Soal, SoalMeresponKaedah } from '@/lib/types';

function isSoalMeresponKaedah(soal: Soal | SoalMeresponKaedah): soal is SoalMeresponKaedah {
  return (soal as SoalMeresponKaedah).dialog_x !== undefined;
}

interface HasilLatihanProps {
  history: JawabanHistoryItem[];
}

const renderDialogWithHighlight = (text: string, keyword: string) => {
  const parts = text.split(new RegExp(`(${keyword})`, 'gi'));
  return (
    <p>
      {parts.map((part, index) =>
        part.toLowerCase() === keyword.toLowerCase() ? <strong key={index}>{part}</strong> : part
      )}
    </p>
  );
};

const ReviewSoalItem: React.FC<{ item: JawabanHistoryItem; index: number }> = ({ item, index }) => {
  const soal = item.soal;
  const soalNum = index + 1;

  if (isSoalMeresponKaedah(soal)) {
    return (
      <div className="mb-4">
        <h3 className="font-black text-lg mb-2">
          {soalNum}. Review Soal Merespon Kaidah
        </h3>
        <div className="mb-1">{renderDialogWithHighlight(soal.dialog_x, soal.kata_x)}</div>
        <div className="mb-2">{renderDialogWithHighlight(soal.dialog_y, soal.kata_y)}</div>
        <p className="text-sm mb-1">Opsi A/B: {soal.opsi_x.join(' | ')}</p>
        <p className="text-sm">Opsi C/D: {soal.opsi_y.join(' | ')}</p>
      </div>
    );
  }

  return (
    <div className="mb-4">
      <h3 className="font-black text-lg mb-2">
        {soalNum}. {soal.pertanyaan}
      </h3>
      <ul className="list-disc list-inside space-y-1">
        {soal.opsi.map((opsi, i) => {
          const isCorrectAnswer = opsi.startsWith(soal.jawaban_benar);
          const isUserAnswer = opsi.startsWith(item.jawabanUser);

          return (
            <li
              key={i}
              className={`${isCorrectAnswer ? 'font-bold text-green-700' : ''} ${
                isUserAnswer && !item.isCorrect ? 'text-red-600' : ''
              }`}
            >
              {opsi} {isCorrectAnswer && '(Jawaban Benar)'}
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
    <div className="p-6 lg:p-8 space-y-6 text-gray-700">
      <div className="bg-white border-4 border-black rounded-3xl p-6 lg:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
        <h1 className="text-4xl font-black mb-4">🎉 Hasil Latihan Anda</h1>
        <p className="font-bold text-lg mb-4">
          Total Benar: <span className="text-green-700">{totalBenar}</span> dari <span>{totalSoal}</span>
        </p>
        <hr className="border-black mb-6" />

        {history.length === 0 && (
          <p className="text-center font-bold text-gray-600">Belum ada hasil latihan.</p>
        )}

        {history.map((item, index) => (
          <div
            key={index}
            className={`p-6 border-4 rounded-2xl shadow-[6px_6px_0_0_rgba(0,0,0,1)] mb-6 ${
              item.isCorrect ? 'border-green-700 bg-green-50' : 'border-red-700 bg-red-50'
            }`}
          >
            <ReviewSoalItem item={item} index={index} />

            <p className="font-bold mb-1">
              Jawaban Anda:{" "}
              <span className={item.isCorrect ? "text-green-700" : "text-red-700"}>
                {item.jawabanUser} {item.isCorrect ? "(BENAR)" : "(SALAH)"}
              </span>
            </p>
            <p className="font-bold mb-3">
              Jawaban yang Benar:{" "}
              <span className="text-green-700 font-black">{item.soal.jawaban_benar}</span>
            </p>
            <h4 className="font-black mb-1">📝 Pembahasan:</h4>
            <p className="whitespace-pre-wrap">{item.soal.pembahasan}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
