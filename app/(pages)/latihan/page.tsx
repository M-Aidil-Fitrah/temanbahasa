// app/latihan/page.js
import Link from 'next/link';

export default function LatihanHome() {
  const seksi = ['seksi-satu-mendengarkan', 'seksi-dua-meresponkaedah', 'membaca'];
  const kesulitan = ['mudah', 'menengah', 'sulit', 'adaptif'];

  return (
    <div>
      <h1>Pilih Seksi dan Tingkat Kesulitan</h1>
      {seksi.map(s => (
        <div key={s}>
          <h2>{s.toUpperCase()}</h2>
          <ul>
            {kesulitan.map(k => (
              <li key={k}>
                <Link href={`/latihan/${s}/${k}`}>
                  Mulai {k.charAt(0).toUpperCase() + k.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}