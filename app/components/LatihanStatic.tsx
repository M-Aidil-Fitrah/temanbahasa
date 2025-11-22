'use client';

import {useState} from 'react';
import { Soal, JawabanHistoryItem } from '@/lib/types';
import HasilLatihan from './HasilLatihan';

interface LatihanStaticProps {
    soalList: Soal[];
}

export default function LatihanStatic({ soalList }: LatihanStaticProps) {
    const [currentSoalIndex, setCurrentSoalIndex] = useState(0);
    const [jawabanHistory, setJawabanHistory] = useState<JawabanHistoryItem[]>([]);
    const [isFinished, setIsFinished] = useState(false);

    const currentSoal = soalList[currentSoalIndex];

    const handleSubmitAnswer = (jawabanUser: string) => {
        const isCorrect = jawabanUser === currentSoal.jawaban_benar;

        const newEntry: JawabanHistoryItem = {
            soal: currentSoal, 
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

    return (
      <div>
          <h3>Soal {currentSoalIndex + 1}: {currentSoal.pertanyaan}</h3>
          {currentSoal.opsi.map((opsi, index) => (
            <button key={index} onClick={() => handleSubmitAnswer(opsi.split('.')[0])}>
              {opsi}
            </button>
          ))}
      </div>
  );
}