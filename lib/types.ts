export type SeksiType = 'seksi-satu-mendengarkan' | 'seksi-dua-meresponkaedah' | 'seksi-tiga-membaca';
export type KesulitanType = 'mudah' | 'menengah' | 'sulit' | 'adaptif';

export interface Soal {
    id: number;
    seksi: SeksiType;
    tingkat_kesulitan: Exclude<KesulitanType, 'adaptif'>
    pertanyaan: string;
    audio_url?: string;
    opsi: string[];
    jawaban_benar: string;
    pembahasan: string;
}

export interface JawabanHistoryItem {
    soal: Soal;
    jawabanUser: string;
    isCorrect: boolean;
}