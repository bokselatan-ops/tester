import { db } from "./firebase.js";
import { collection, addDoc, getDocs }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.simpanSPPD = async () => {
  try {
    await addDoc(collection(db, "sppd"), {
      nama: document.getElementById("nama").value,
      tujuan: document.getElementById("tujuan").value,
      tanggal: document.getElementById("tanggal").value,
      biaya: document.getElementById("biaya").value,
      dibuat: new Date()
    });
    alert("DATA BERHASIL DISIMPAN");
  } catch (e) {
    alert(e.message);
    console.error(e);
  }
};

window.loadRekap = async () => {
  const q = await getDocs(collection(db, "sppd"));
  document.getElementById("rekap").innerHTML = "";
  q.forEach(d => {
    const x = d.data();
    document.getElementById("rekap").innerHTML += `
      <tr>
        <td>${x.nama}</td>
        <td>${x.tujuan}</td>
        <td>${x.tanggal}</td>
        <td>${x.biaya}</td>
      </tr>`;
  });
};
