import KartuNama from "./components/KartuNama";
import Panel from "./components/Panel";

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

    <Panel judul="Menu Hari Ini" >
      <KartuNama nama="Nasi Ayam Geprek" harga={10000 + (N * 100)}/>
      <KartuNama nama="Es Teh Lemon" harga={6000} kategori="minuman"/>
      <KartuNama nama="Mie Goreng" harga={120000}/>
    </Panel>
    </>
  );
}

export default App;