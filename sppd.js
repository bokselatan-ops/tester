<script type="module">
import { db } from "./firebase.js";
import {
  collection, addDoc, getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.simpanSPPD = async () => {
  await addDoc(collection(db, "sppd"), {
    nama: nama.value,
    tujuan: tujuan.value,
    tanggal: tanggal.value,
    biaya: biaya.value,
    waktu: new Date()
  });
  alert("Data tersimpan");
};

window.loadRekap = async () => {
  const q = await getDocs(collection(db, "sppd"));
  let html = "";
  q.forEach(d => {
    const x = d.data();
    html += `<tr>
      <td>${x.nama}</td>
      <td>${x.tujuan}</td>
      <td>${x.tanggal}</td>
      <td>${x.biaya}</td>
    </tr>`;
  });
  document.getElementById("rekap").innerHTML = html;
};
</script>
