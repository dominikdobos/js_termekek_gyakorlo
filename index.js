import { GYUMOLCSOK } from "./adatok.js";

const vasarolt = [];

// 1. feladat
const ELSO_FELADAT = document.querySelector("#feladat_1");
function letrehozTablazat() {
  let txt = "<table>";
  for (let index = 0; index < GYUMOLCSOK.length; index++) {
    txt += `<tr>
                <td>${GYUMOLCSOK[index].nev}</td>
                <td>${GYUMOLCSOK[index].tomeg}</td>
                <td>${GYUMOLCSOK[index].ar}</td>
            </tr>`;
  }
  txt += "</table>";
  ELSO_FELADAT.innerHTML += txt;
}
letrehozTablazat();

// 2. feladat
const MASODIK_FELADAT = document.querySelector("#feladat_2");
function osszesit() {
  let osszAr = 0;
  let osszTomeg = 0;
  for (let index = 0; index < GYUMOLCSOK.length; index++) {
    osszAr += GYUMOLCSOK[index].ar;
    osszTomeg += GYUMOLCSOK[index].tomeg;
  }
  MASODIK_FELADAT.innerHTML = `<p>A gyümölcsök súlya összesen: ${osszTomeg}g</p>
                                <p>A gyümölcsök ára összesen: ${osszAr} Ft`;
}
osszesit();

// 3. feladat
const TERMEK_LISTA = document.querySelectorAll("tr");
const HARMADIK_FELADAT = document.querySelector("#feladat_3");
function vasarol() {
  for (let index = 0; index < TERMEK_LISTA.length; index++) {
    TERMEK_LISTA[index].addEventListener("click", function () {
      if (vasarolt.indexOf(GYUMOLCSOK[index].nev) < 0) {
        const TORLES_ELEM = document.querySelector("#torles");
        vasarolt.push(GYUMOLCSOK[index].nev);
        HARMADIK_FELADAT.innerHTML += `<p>${vasarolt[vasarolt.length - 1]}</p>`;
        TORLES_ELEM.classList.add("rejtett");
      }
    });
  }
}
vasarol();

// 4. feladat
const NEGYEDIK_FELADAT = document.querySelector("#feladat_4");

NEGYEDIK_FELADAT.innerHTML += "<button>Töröl</button>";
const TORLES_GOMB = document.querySelector("button");
function torolEsemeny() {
  const TORLES_ELEM = document.querySelector("#torles");
  TORLES_GOMB.addEventListener("click", function () {
    console.log(vasarolt);
    for (let index = vasarolt.length; index > 0; index--) {
      vasarolt.pop();
    }
    HARMADIK_FELADAT.innerHTML = "";
    TORLES_ELEM.classList.remove("rejtett");
    console.log(vasarolt);
  });
}

torolEsemeny();
