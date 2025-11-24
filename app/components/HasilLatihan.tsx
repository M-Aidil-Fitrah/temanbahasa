"use client"

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
      {parts.map((part, index) => (part.toLowerCase() === keyword.toLowerCase() ? <strong key={index}>{part}</strong> : part))}
    </p>
  );
};

function ReviewSoalItem({ item, index }: { item: JawabanHistoryItem; index: number }) {
  const soal = item.soal;
  const soalNum = index + 1;

  if (isSoalMeresponKaedah(soal)) {
    return (
      <div>
        <h3 className="text-lg font-black">{soalNum}. Review Soal Merespon Kaidah</h3>
        {renderDialogWithHighlight(soal.dialog_x, soal.kata_x)}
        {renderDialogWithHighlight(soal.dialog_y, soal.kata_y)}
        <div className="mt-2 text-sm">
          <div className="font-bold">Opsi A/B:</div>
          <div className="text-sm">{soal.opsi_x.join(' • ')}</div>
          <div className="font-bold mt-2">Opsi C/D:</div>
          <div className="text-sm">{soal.opsi_y.join(' • ')}</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-lg font-black">{soalNum}. {soal.pertanyaan}</h3>
      <ul className="mt-2 space-y-1">
        {soal.opsi.map((opsi, i) => {
          const isCorrectAnswer = opsi.startsWith(soal.jawaban_benar);
          const isUserAnswer = opsi.startsWith(item.jawabanUser);
          return (
            <li
              key={i}
              className={`px-3 py-1 rounded-md ${isCorrectAnswer ? 'bg-green-50 font-bold text-green-800' : isUserAnswer && !item.isCorrect ? 'bg-red-50 text-red-800' : 'bg-white'}`}
            >
              {opsi}
              {isCorrectAnswer && <span className="ml-2 text-sm font-bold">(Jawaban Benar)</span>}
              {isUserAnswer && !item.isCorrect && <span className="ml-2 text-sm">(Jawaban Anda)</span>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function HasilLatihan({ history }: HasilLatihanProps) {
  const totalSoal = history.length;
  const totalBenar = history.filter(item => item.isCorrect).length;

  return (
    <div className="p-6 lg:p-8 bg-[#FFF8F0] min-h-screen">
      <div className="bg-white border-4 border-black rounded-3xl p-6 lg:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="inline-block bg-[#FFD93D] border-3 border-black px-4 py-1 rounded-full font-black text-sm mb-4">
          HASIL LATIHAN
        </div>
        <h1 className="text-3xl lg:text-4xl font-black mb-2">🎉 Hasil Latihan Anda</h1>
        <p className="text-lg font-bold text-gray-700 mb-4">Total Benar: <span className="font-black text-gray-900">{totalBenar}</span> dari <span className="font-black text-gray-900">{totalSoal}</span></p>

        <div className="space-y-4">
          {history.map((item, index) => (
            <div key={index} className={`bg-white border-4 ${item.isCorrect ? 'border-green-600' : 'border-red-600'} rounded-2xl p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <ReviewSoalItem item={item} index={index} />
                </div>
                <div className="text-right flex-shrink-0">
                  <div className={`px-3 py-1 rounded-full font-black ${item.isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {item.isCorrect ? 'BENAR' : 'SALAH'}
                  </div>
                  <div className="text-sm font-bold mt-2">{item.jawabanUser}</div>
                </div>
              </div>

              <div className="mt-4">
                <div className="font-bold">Jawaban yang Benar</div>
                <div className="text-green-800 font-black">{item.soal.jawaban_benar}</div>
              </div>

              <div className="mt-4">
                <div className="font-bold">📝 Pembahasan</div>
                <div className="text-sm text-gray-700 mt-1">{item.soal.pembahasan}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}