
'use client';
import { useState } from 'react';
import Image from 'next/image';
import logo from './logo-alsolved.png';

const bandi = [
  { id: 1, nome: 'Bando Innovazione', descrizione: 'Fino a 100.000€ a fondo perduto' },
  { id: 2, nome: 'Bando Digitalizzazione', descrizione: 'Voucher per consulenze e software' },
  { id: 3, nome: 'Bando Internazionalizzazione', descrizione: 'Fino al 50% per fiere e export' }
];

export default function Home() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-3xl">
        <div className="flex justify-center mb-6">
          <Image src={logo} alt="Logo Alsolved" width={180} height={60} />
        </div>
        <h1 className="text-2xl font-bold text-center text-[#0a3d62] mb-4">Scopri il bando giusto per te</h1>
        <div className="grid gap-4">
          {bandi.map((bando) => {
            const isSelected = selected === bando.id;
            return (
              <div
                key={bando.id}
                className={`transition-shadow hover:shadow-lg rounded-2xl border-2 p-5 ${isSelected ? "border-[#ec008c]" : "border-white"}`}
                onClick={() => setSelected(bando.id)}
              >
                <h2 className="text-lg font-semibold text-[#0a3d62]">{bando.nome}</h2>
                <p className="text-gray-700 text-sm mb-2">{bando.descrizione}</p>
                {isSelected && (
                  <p className="text-sm text-green-600 mt-2">Hai selezionato questo bando.</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
