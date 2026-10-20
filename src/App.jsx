function App() {
  const jam = 9;
  const N = 95;
  const styleJudul = {color : '#1f3a5f'}
  return (
    
    <>
    <h1 className = "judul" style = {styleJudul}>Kantin Rani</h1>
    
    <p> {jam < 12 ? 'Selamat pagi': 'Selamat siang'}</p>
    <p>Saldo awal kartu kantin: Rp {N * 1000}</p>
    <button disabled>Bayar</button>
    </>
  );
}

export default App;