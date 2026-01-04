'use client'

import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { useEffect, useState } from 'react'

export default function Home() {
  const [parts, setParts] = useState<any[]>([])

  useEffect(() => {
    const load = async () => {
      const snap = await getDocs(collection(db, 'parts'))
      setParts(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    }
    load()
  }, [])

  const reservar = (nombre: string, precio: number) => {
    const msg = `Hola Boltrucks, deseo reservar el repuesto: ${nombre} (Bs ${precio})`
    window.open(`https://wa.me/591XXXXXXXX?text=${encodeURIComponent(msg)}`)
  }

  return (
    <div>
      <h2>Catálogo de repuestos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '1rem' }}>
        {parts.map(p => (
          <div key={p.id} style={{ background: 'white', padding: '1rem', borderRadius: 10 }}>
            <h3>{p.nombre}</h3>
            <p><b>Marca:</b> {p.marca_repuesto}</p>
            <p><b>Condición:</b> {p.condicion}</p>
            <p><b>Precio:</b> Bs {p.precio}</p>
            <button
              onClick={() => reservar(p.nombre, p.precio)}
              style={{ background: '#b30000', color: 'white', border: 'none', padding: '0.6rem', borderRadius: 6 }}
            >
              Reservar / Contactar
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
