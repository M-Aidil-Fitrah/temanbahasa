export type SeksiType = 'seksi-satu-mendengarkan' | 'seksi-dua-meresponkaedah' | 'seksi-tiga-membaca';
export type KesulitanType = 'mudah' | 'menengah' | 'sulit' | 'adaptif';

export interface Soal {
    id: number;
    seksi: Exclude<SeksiType, 'seksi-dua-meresponkaedah'>;
    tingkat_kesulitan: Exclude<KesulitanType, 'adaptif'>
    pertanyaan: string;
    audio_url?: string | undefined | null;
    opsi: string[];
    jawaban_benar: string;
    pembahasan: string;
}

export interface SoalMeresponKaedah {
    id: number;
    seksi: 'seksi-dua-meresponkaedah';
    tingkat_kesulitan: Exclude<KesulitanType, 'adaptif'>;

    dialog_x: string;
    dialog_y: string;

    kata_x: string;
    kata_y: string;

    opsi_x: string[];
    opsi_y: string[];

    jawaban_benar: 'A' | 'B' | 'C' | 'D';
    pembahasan: string;
}

export interface JawabanHistoryItem {
    soal: Soal | SoalMeresponKaedah;
    jawabanUser: string;
    isCorrect: boolean;
}