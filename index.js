function angkaTitik(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function angkaKoma(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

console.log(angkaTitik(100000));
