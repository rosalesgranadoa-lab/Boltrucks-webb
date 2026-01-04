export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: 'Arial', background: '#eeeeee' }}>
        <header style={{ background: '#b30000', color: 'white', padding: '1rem' }}>
          <h1>Boltrucks</h1>
          <p>Repuestos de camiones multimarca</p>
        </header>
        <main style={{ padding: '1rem' }}>{children}</main>
      </body>
    </html>
  )
}
