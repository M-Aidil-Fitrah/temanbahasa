import { Soal, JawabanHistoryItem, KesulitanType, SeksiType } from '@/lib/types';
import LatihanStatic from '@/app/components/LatihanStatic';
// import CatLatihan from '@/components/CatLatihan';

interface LatihanPageProps {
    params: {
        seksi: string;
        kesulitan: KesulitanType | string;
    }
}

async function getSoalData(seksiSlug: string, kesulitanSlug: Exclude<KesulitanType, 'adaptif'>): Promise<Soal[]> {

    try {
        const filePath = `@/lib/latihan/${seksiSlug}/${kesulitanSlug}/latihan1.ts`;
        
        const dataModule = await import(filePath);

        return dataModule.default as Soal[];
    } catch (error) {
        console.error(`Gagal memuat soal dari path: ${seksiSlug}/${kesulitanSlug}`, error);
        return [];
    }
}

export default async function LatihanPage({ params }: LatihanPageProps){
    const { seksi, kesulitan } = await params;

    if (kesulitan === 'adaptif'){
        return <div>cat</div>
    }

    const kesulitanStatik = kesulitan as Exclude<KesulitanType, 'adaptif'>;
    const soalList: Soal[] = await getSoalData(seksi, kesulitanStatik);

    if (soalList.length === 0) {
    return <h1>Soal tidak ditemukan.</h1>;
  }

  return (
    <div>
      <h2 style={{textTransform: 'capitalize'}}>{seksi.replace(/-/g, ' ')} - {kesulitan}</h2>
      <LatihanStatic soalList={soalList} /> 
    </div>
  );
}