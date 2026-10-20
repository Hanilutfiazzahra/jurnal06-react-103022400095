import LabelHarga from "./LabelHarga";
import { useState } from "react";

function KartuNama({ nama, harga, kategori = "makanan" }) {
  const [jumlah, setJumlah] = useState(0);
  return (
    <div className="kartu">
      <h3>{nama}</h3>
      <p>{kategori}</p>
      <LabelHarga nilai={harga} />
      <div className="kontrol">
        <button onClick={() => setJumlah(jumlah + 1)}>+</button>
        <p>{jumlah}</p>
        <button onClick={() => setJumlah(jumlah - 1)}>-</button>
        <p> {jumlah == 0 ? "Belum dipesan" : "Subtotal:"(harga * jumlah) }</p>
      </div>
      
    </div>
  );
}

export default KartuNama;
