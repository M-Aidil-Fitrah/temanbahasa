export interface Soal {
    id: number;
    pertanyaan: string;
    seksi: 'membaca';
    tingkat_kesulitan: 'mudah';
    opsi: string[];
    jawaban_benar: string;
    pembahasan: string;
}

export const soalData: Soal[] = [
    {
        id: 1,
        pertanyaan: "tes",
        seksi: "membaca",
        tingkat_kesulitan: "mudah",
        opsi: ["A. Sangat lambat", "B. Sangat cepat", "C. Cukup stabil", "D.Tidak ada informasi"],
        jawaban_benar: "B",
        pembahasan: "tes"
    }
]

export default soalData;