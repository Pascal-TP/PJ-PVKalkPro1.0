let currentUser = null;
let logoutTimer;
let remaining = 600;
let optimiererVerwendet = false;
let page40Promise = null;

// -----------------------------
// Flow "Komplett" (Session-State)
// -----------------------------
const FLOW_KEY = "flowMode";

function isKomplettFlow() {
  return sessionStorage.getItem(FLOW_KEY) === "komplett";
}
function setKomplettFlow() {
  sessionStorage.setItem(FLOW_KEY, "komplett");
}
function clearKomplettFlow() {
  sessionStorage.removeItem(FLOW_KEY);
}

function startKomplettFlow() {
  setKomplettFlow();
  showPage("page-15"); // Einstieg Komplett (Versicherung) – wie bisher
}

function applyFlowUI(pageId) {
  if (pageId === "page-8") {
    const normalBtn = document.getElementById("btnWeiter8Normal");
    const komplettBtn = document.getElementById("btnWeiter8Komplett");

    const k = isKomplettFlow();
    if (normalBtn) normalBtn.classList.toggle("hidden", k);
    if (komplettBtn) komplettBtn.classList.toggle("hidden", !k);
  }

if (pageId === "page-15") {
    const normalBtn = document.getElementById("btnWeiter15Normal");
    const komplettBtn = document.getElementById("btnWeiter15Komplett");

    const k = isKomplettFlow();
    if (normalBtn) normalBtn.classList.toggle("hidden", k);
    if (komplettBtn) komplettBtn.classList.toggle("hidden", !k);
  }
if (pageId === "page-23") {
    const normalBtn = document.getElementById("btnWeiter23Normal");
    const komplettBtn = document.getElementById("btnWeiter23Komplett");

    const k = isKomplettFlow();
    if (normalBtn) normalBtn.classList.toggle("hidden", k);
    if (komplettBtn) komplettBtn.classList.toggle("hidden", !k);
  }
if (pageId === "page-24") {
    const normalBtn = document.getElementById("btnWeiter24Normal");
    const komplettBtn = document.getElementById("btnWeiter24Komplett");

    const k = isKomplettFlow();
    if (normalBtn) normalBtn.classList.toggle("hidden", k);
    if (komplettBtn) komplettBtn.classList.toggle("hidden", !k);
  }
if (pageId === "page-9") {
    const normalBtn = document.getElementById("btnWeiter9Normal");
    const komplettBtn = document.getElementById("btnWeiter9Komplett");

    const k = isKomplettFlow();
    if (normalBtn) normalBtn.classList.toggle("hidden", k);
    if (komplettBtn) komplettBtn.classList.toggle("hidden", !k);
  }
if (pageId === "page-14") {
    const normalBtn = document.getElementById("btnWeiter14Normal");
    const komplettBtn = document.getElementById("btnWeiter14Komplett");

    const k = isKomplettFlow();
    if (normalBtn) normalBtn.classList.toggle("hidden", k);
    if (komplettBtn) komplettBtn.classList.toggle("hidden", !k);
  }
if (pageId === "page-14-2") {
    const normalBtn = document.getElementById("btnWeiter142Normal");
    const komplettBtn = document.getElementById("btnWeiter142Komplett");

    const k = isKomplettFlow();
    if (normalBtn) normalBtn.classList.toggle("hidden", k);
    if (komplettBtn) komplettBtn.classList.toggle("hidden", !k);
  }
if (pageId === "page-21") {
    const normalBtn = document.getElementById("btnWeiter21Normal");
    const komplettBtn = document.getElementById("btnWeiter21Komplett");

    const k = isKomplettFlow();
    if (normalBtn) normalBtn.classList.toggle("hidden", k);
    if (komplettBtn) komplettBtn.classList.toggle("hidden", !k);
  }
if (pageId === "page-10") {
    const normalBtn = document.getElementById("btnWeiter10Normal");
    const komplettBtn = document.getElementById("btnWeiter10Komplett");

    const k = isKomplettFlow();
    if (normalBtn) normalBtn.classList.toggle("hidden", k);
    if (komplettBtn) komplettBtn.classList.toggle("hidden", !k);
  }
if (pageId === "page-18") {
    const normalBtn = document.getElementById("btnWeiter18Normal");
    const komplettBtn = document.getElementById("btnWeiter18Komplett");

    const k = isKomplettFlow();
    if (normalBtn) normalBtn.classList.toggle("hidden", k);
    if (komplettBtn) komplettBtn.classList.toggle("hidden", !k);
  }
if (pageId === "page-20") {
    const normalBtn = document.getElementById("btnWeiter20Normal");
    const komplettBtn = document.getElementById("btnWeiter20Komplett");

    const k = isKomplettFlow();
    if (normalBtn) normalBtn.classList.toggle("hidden", k);
    if (komplettBtn) komplettBtn.classList.toggle("hidden", !k);
  }
if (pageId === "page-22") {
    const normalBtn = document.getElementById("btnWeiter22Normal");
    const komplettBtn = document.getElementById("btnWeiter22Komplett");

    const k = isKomplettFlow();
    if (normalBtn) normalBtn.classList.toggle("hidden", k);
    if (komplettBtn) komplettBtn.classList.toggle("hidden", !k);
  }

}

// -----------------------------
// Wechsel der Startseite nach 3 Sekunden
// -----------------------------

function startSplashScreen() {
  setTimeout(() => {
    showPage("page-login");
  }, 3000);
}

		// -----------------------------
		// PV-Module zählen für Emfpehlung
		// -----------------------------
//
//function getPvModuleCount() {
//  const d23 = JSON.parse(localStorage.getItem("page23Data") || "{}");
//  const d24 = JSON.parse(localStorage.getItem("page24Data") || "{}");
//
//  const sumObj = (obj) => Object.values(obj).reduce((acc, v) => {
//    const n = parseFloat(String(v).replace(",", ".")) || 0;
//    return acc + n;
//  }, 0);
//
//  const total = sumObj(d23) + sumObj(d24);
//  return Math.round(total); // falls irgendwo Dezimalwerte wären
//}
//
//function getWrRecommendationText(modules) {
//  if (modules <= 0) return null;
//
//  if (modules <= 7)  return "3.0";
//  if (modules <= 9)  return "4.0";
//  if (modules <= 11) return "5.0";
//  if (modules <= 14) return "6.0";
//  if (modules <= 18) return "8.0";
//  if (modules <= 23) return "10.0";
//  if (modules <= 28) return "12.0";
//  if (modules <= 33) return "15.0";
//  return "15.0"; // >33: konservativ (oder null, wenn du lieber warnen willst)
//}

		// -----------------------------
		// Wechselrichter-Empfhelung
		// -----------------------------
//
//function extractWrSizeFromRow(rowEl) {
//  const descRaw = (rowEl.querySelector(".col-b")?.innerText || "").trim();
//  if (!descRaw) return null;
//
//  // Normalisieren: 3,0 -> 3.0
//  const desc = descRaw.replace(",", ".");
//
//  // Match: 3.0 / 3 / 10.0 / 10 / 12.0 / 12 / 15.0 / 15
//  const m = desc.match(/(?:^|[^0-9])(3(?:\.0)?|4(?:\.0)?|5(?:\.0)?|6(?:\.0)?|8(?:\.0)?|10(?:\.0)?|12(?:\.0)?|15(?:\.0)?)(?![0-9])/);
//  if (!m) return null;
//
//  // Immer als "x.0" zurückgeben
//  const num = m[1];
//  return num.includes(".") ? num : `${num}.0`;
//}
//
//function applyWrRecommendation(pageId) {
//  const pageEl = document.getElementById(pageId);
//  if (!pageEl) return;
//
//  const modules = getPvModuleCount();
// const reco = getWrRecommendationText(modules);
//
//  // Box anlegen/finden
//  let box = pageEl.querySelector(".wr-reco-box");
//  if (!box) {
//    box = document.createElement("div");
//    box.className = "wr-reco-box";
//    // direkt unter die H2 setzen
//    const h2 = pageEl.querySelector("h2");
//    if (h2 && h2.parentNode) h2.parentNode.insertBefore(box, h2.nextSibling);
//  }
//
//  // Wenn keine Module gewählt: nichts machen
//  if (!reco) {
//    box.style.display = "none";
//    pageEl.querySelectorAll(".wr-dimmed").forEach(r => r.classList.remove("wr-dimmed"));
//    pageEl.querySelectorAll(".wr-warn").forEach(w => w.remove());
//    return;
//  }
//
//  box.style.display = "block";
//  box.innerHTML = `Empfehlung anhand der PV-Module (${modules} Stück): <strong>Wechselrichter ${reco}</strong>`;
//
//  // Alle Positions-Zeilen (mit Eingabefeld) durchgehen
//  const inputs = pageEl.querySelectorAll("input.menge-input");
//  let hasMismatch = false;
//  inputs.forEach(inp => {
//    const row = inp.closest(".row");
//    if (!row) return;
//
//    // Warntext entfernen (wird ggf. neu gesetzt)
//    const existingWarn = row.querySelector(".wr-warn");
//    if (existingWarn) existingWarn.remove();
//
//    const size = extractWrSizeFromRow(row);
//
//    // Nur ausgrauen, wenn wir eine WR-Größe überhaupt erkennen konnten
//    const shouldDim = (size && size !== reco);
//    hasMismatch = true;
//    row.classList.toggle("wr-dimmed", shouldDim);
//
//    // falls schon Wert > 0 eingetragen und dimmed -> Hinweis anzeigen
//    const val = parseFloat(String(inp.value).replace(",", ".")) || 0;
//    if (shouldDim && val > 0) {
//      const warn = document.createElement("div");
//      warn.className = "wr-warn";
//      warn.innerText = "Achtung: Wechselrichter nicht passend!";
//      row.appendChild(warn);
//    }
//// Ergebnis für Seite 40 merken
//if (hasMismatch) localStorage.setItem("wrMismatch", "1");
//else localStorage.removeItem("wrMismatch");
//
//// Optional: für Anzeige auf Seite 40 (empfohlen)
//localStorage.setItem("wrRecoSize", reco);
//localStorage.setItem("wrRecoModules", String(modules));
//  });
//
//  // Einmaliger Event-Listener je Seite: bei Eingabe Warnung setzen/entfernen
//  if (!pageEl.dataset.wrRecoListener) {
//    pageEl.addEventListener("input", (e) => {
//      const inp = e.target;
//      if (!inp || !inp.classList || !inp.classList.contains("menge-input")) return;
//
//      const row = inp.closest(".row");
//      if (!row) return;
//
//      const val = parseFloat(String(inp.value).replace(",", ".")) || 0;
//
//      // alten Warntext entfernen
//      const old = row.querySelector(".wr-warn");
//      if (old) old.remove();
//
//      if (row.classList.contains("wr-dimmed") && val > 0) {
//        const warn = document.createElement("div");
//        warn.className = "wr-warn";
//        warn.innerText = "Achtung: Wechselrichter nicht passend!";
//        row.appendChild(warn);
//      }
//    }, true);
//
//    pageEl.dataset.wrRecoListener = "1";
//  }
//}

// -----------------------------
// Reset bei reload (F5)
// -----------------------------

function resetStoredInputsOnReload() {
  // Reload erkennen (F5 / Browser-Reload)
  const nav = performance.getEntriesByType("navigation")[0];
  const isReload = nav && nav.type === "reload";

  if (!isReload) return;

    // Flow-State ebenfalls löschen
  clearKomplettFlow();

  // Nur deine Eingabe-/Angebotsdaten löschen (Auth bleibt erhalten!)
  const keysToRemove = [
    "page5Data",
    "angebotTyp",
    "angebotSummen",

    "page14Data",
    "page142Data",
    "page8Data",
    "page18Data",
    "page20Data",
    "page21Data",
    "page22Data",
    "page9Data",
    "page10Data",
    "page23Data",
    "page24Data",
    "page143Data",
    "page25Data",
    "page26Data",
    "page27Data",
    "page28Data",
    "page30Data",
    "page31Data",
    "page32Data",
    "page33Data",
    "page13Data",
    "page34Data",
    "page35Data",
    "page36Data",
  ];

  keysToRemove.forEach(k => localStorage.removeItem(k));
}

// SOFORT ausführen (möglichst früh)
resetStoredInputsOnReload();


// -----------------------------
// Firebase - E-Mail+Passwort
// -----------------------------

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updatePassword,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


import {
  getFirestore,
  addDoc,
  collection,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA1IlRiD3kEBiT8CDgqVBtg-s9phE4jdRE",
  authDomain: "pw-pj-tga-1e88c.firebaseapp.com",
  projectId: "pw-pj-tga-1e88c",
  storageBucket: "pw-pj-tga-1e88c.firebasestorage.app",
  messagingSenderId: "623523113789",
  appId: "1:623523113789:web:84b25b858d4ee7645b3354",
  measurementId: "G-KGW9JW04EH"
};

const fbApp = initializeApp(firebaseConfig);
const auth = getAuth(fbApp);
(async () => {
  // 1) Persistenz: nichts im Browser behalten
  await setPersistence(auth, browserSessionPersistence);

  // 2) EINMALIGER Cleanup: falls noch eine alte Session (local) rumliegt, abmelden
  // (nachdem du das einmal deployed hast, ist es danach dauerhaft sauber)
  // await signOut(auth);

  // 3) Listener erst DANACH
const app = document.getElementById("app");  
onAuthStateChanged(auth, user => {

  const actions = document.getElementById("user-actions");
  const info = document.getElementById("login-info");
  
  if (user) {
    // UI
    actions?.classList.remove("hidden");
    if (info) info.innerText = "Angemeldet als: " + user.email;
    updateAdminUI_();

    // direkt ins Tool (ohne Splash)
    const target = getInitialPage(); // oder dein lastPage-Mechanismus
    history.replaceState({ page: target }, "", "#" + target);
    showPage(target, true);

  } else {
    // UI
    actions?.classList.add("hidden");
    if (info) info.innerText = "";
    updateAdminUI_();

    // Splash zeigen und dann zum Login
    showPage("page-start", true);
    startSplashScreen();
  }

  // App sichtbar machen
  app?.classList.remove("hidden");
});
})();

const db = getFirestore(fbApp);


		// -----------------------------
		// Registrierung anlegen (mit Zufallspasswort)
		// -----------------------------

// function makeTempPassword(len = 18) {
//  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@$%*-_";
//  let out = "";
//  for (let i = 0; i < len; i++) out += chars[Math.floor(Math.random() * chars.length)];
//  return out;
//}

//async function registerRequest() {
//  const firma   = (document.getElementById("reg-firma")?.value || "").trim();
//  const name    = (document.getElementById("reg-name")?.value || "").trim();
//  const strasse = (document.getElementById("reg-strasse")?.value || "").trim();
//  const hausnr  = (document.getElementById("reg-hausnr")?.value || "").trim();
//  const plz     = (document.getElementById("reg-plz")?.value || "").trim();
//  const ort     = (document.getElementById("reg-ort")?.value || "").trim();
//  const email   = (document.getElementById("reg-email")?.value || "").trim().toLowerCase();
//  const tel     = (document.getElementById("reg-tel")?.value || "").trim();
//
//  const err = document.getElementById("reg-error");
//  const info = document.getElementById("reg-info");
//  if (err) err.innerText = "";
//  if (info) info.innerText = "";
//
//  const missing = [];
//  if (!firma) missing.push("Firmenname");
//  if (!name) missing.push("Name Ansprechpartner");
//  if (!strasse) missing.push("Straße");
//  if (!hausnr) missing.push("Hausnummer");
//  if (!plz) missing.push("PLZ");
//  if (!ort) missing.push("Ort");
//  if (!email) missing.push("E-Mail-Adresse");
//  if (!tel) missing.push("Telefonnummer");
//
//  if (missing.length) {
//    if (err) err.innerText = "Bitte ausfüllen: " + missing.join(", ");
//    return;
// }
//
// try {
//    const cred = await createUserWithEmailAndPassword(auth, email, makeTempPassword());
//
//    await setDoc(doc(db, "users", cred.user.uid), {
//      firma, name, strasse, hausnr, plz, ort, email, tel,
//      approved: false,
//      createdAt: serverTimestamp()
//    });
//
//    await addDoc(collection(db, "registrationRequests"), {
//      uid: cred.user.uid,
//      email,
//      firma,
//      name,
//      createdAt: serverTimestamp(),
//      status: "pending"
//    });
//
//    await signOut(auth);
//
//    if (info) info.innerText = "Registrierung eingegangen. Du erhältst Zugang nach Freigabe.";
//
//    // zurück zum Login
//    showPage("page-login");
//    const loginError = document.getElementById("loginError");
//    if (loginError) loginError.innerText = "Registrierung eingegangen. Bitte auf Freigabe warten.";
//
//  } catch (e) {
//   console.error(e);
//    if (err) {
//      if (String(e?.code || "").includes("auth/email-already-in-use")) {
//        err.innerText = "Diese E-Mail ist bereits registriert. Nutze 'Passwort vergessen' oder kontaktiere den Admin.";
//      } else {
//        err.innerText = "Registrierung fehlgeschlagen. Bitte prüfen und erneut versuchen.";
//      }
//    }
//  }
//}
//
//
//window.registerRequest = registerRequest;

// -----------------------------
// TableHeaderWithImage - Bild neben Spaltenüberschriften einfügen
// -----------------------------

function renderTableHeaderWithImage(imgSrc = "bild3.jpg") {
  return `
    <div class="row table-header">
      <div class="header-img-cell">
        <img src="${imgSrc}" class="header-img" alt="Bild">
      </div>
      <div>Beschreibung</div>
      <div>Einheit</div>
      <div style="text-align:center;">Menge</div>
      <div style="text-align:right;">Preis / Einheit</div>
      <div style="text-align:right;">Positionsergebnis</div>
    </div>
  `;
}

// -----------------------------
// showPage
// -----------------------------

async function showPage(id, fromHistory = false) {
  
// letzte Seite merken (nur für dieses Tab/Fenster)
  sessionStorage.setItem("lastPage", id);

// Browser-History nur setzen, wenn NICHT durch Zurück/Vor ausgelöst
  if (!fromHistory) {
    history.pushState({ page: id }, "", "#" + id);
  }

  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  const el = document.getElementById(id);
  if (!el) return;           // Sicherheitsnetz
  el.classList.add("active");  
  
// if (id === "page-14" || id === "page-14-2") {
//  // wichtig: erst laden, dann anwenden
//  // (falls loadPage14/page142 den Content erst füllt)
//  setTimeout(() => applyWrRecommendation(id), 0);
//}

  if (id === "page-14") loadPage14();
  if (id === "page-14-3") loadPage143();
  if (id === "page-14-2") loadPage142();
  if (id === "page-8") loadPage8();
  if (id === "page-18") loadPage18();
  if (id === "page-20") loadPage20();
  if (id === "page-21") loadPage21();
  if (id === "page-22") loadPage22();
  if (id === "page-9") loadPage9();
  if (id === "page-10") loadPage10();
  if (id === "page-23") loadPage23();
  if (id === "page-24") loadPage24();
  if (id === "page-25") loadPage25();
  if (id === "page-27") loadPage27();
  if (id === "page-28") loadPage28();
  if (id === "page-30") loadPage30();
  if (id === "page-31") loadPage31();
  if (id === "page-32") loadPage32();
  if (id === "page-33") loadPage33();
  if (id === "page-13") loadPage13();
  if (id === "page-34") loadPage34();
  if (id === "page-35") loadPage35();
  if (id === "page-36") loadPage36();
  if (id === "page-26") loadPage26();
  
 //   if (id === "page-admin") loadAdminPage();

  applyFlowUI(id);
  
  if (id === "page-40") {
    showLoader40(true);
    try {
      page40Promise = loadPage40();
      await page40Promise;
    } finally {
      showLoader40(false);
    }
  }
}

// -----------------------------
// LOGIN - LOGOUT - PASSWORD
// -----------------------------

				// Wenn keine Registrierung, dann ist dieser Bereich nötig!
				const loginUser  = document.getElementById("loginUser");
				const loginPass  = document.getElementById("loginPass");
				const loginError = document.getElementById("loginError");

				const newPass1   = document.getElementById("newPass1");
				const newPass2   = document.getElementById("newPass2");
				const changeError= document.getElementById("changeError");


async function login() {
  const email = loginUser.value.trim();
  const pw = loginPass.value;

  if (!email || !pw) {
    loginError.innerText = "Bitte E-Mail und Passwort eingeben.";
    return;
  }

  try {
    const cred = await signInWithEmailAndPassword(auth, email, pw);
    currentUser = cred.user;

    // zentral loggen
    await addDoc(collection(db, "loginLogs"), {
      uid: currentUser.uid,
      email: currentUser.email,
      event: "LOGIN_SUCCESS",
      time: serverTimestamp()
    });

				// Wenn Registrierung gewünscht...
				// const udoc = await getDoc(doc(db, "users", currentUser.uid));
				// const approved = udoc.exists() && udoc.data().approved === true;

				//  if (!approved) {
				//  await signOut(auth);
				//  currentUser = null;
				//  showPage("page-login");
				//  loginError.innerText = "Account ist noch nicht freigeschaltet. Bitte auf Freigabe warten.";
				//  return;
				//}

    updateAdminUI_();
    startTimer();
    showPage("page-3");
  } catch (e) {
  console.error("LOGIN ERROR:", e?.code, e?.message, e);
  loginError.innerText = `Login fehlgeschlagen: ${e?.code || "unknown"}\n${e?.message || ""}`;
}
}

async function logout() {
  try {
    await signOut(auth);

    currentUser = null;

    // Timer stoppen + Anzeige zurücksetzen
    clearInterval(logoutTimer);
    remaining = 600;
    const t = document.getElementById("timer");
    if (t) t.innerText = "Logout in: 10:00";

    // Admin-Button ausblenden
    updateAdminUI_();

    // optional: Login-Felder leeren
    loginPass.value = "";
    // loginUser.value = ""; // nur wenn du auch die Mail leeren willst

    const info = document.getElementById("login-info");
    if (info) info.innerText = "";

    showPage("page-login");
    loginError.innerText = "Erfolgreich abgemeldet.";
  } catch (e) {
    console.error(e);
    alert("Abmelden fehlgeschlagen");
  }
}

async function forgotPassword() {
  const email = loginUser.value.trim();
  if (!email) {
    loginError.innerText = "Bitte E-Mail eingeben.";
    return;
  }
  try {
    await sendPasswordResetEmail(auth, email);
    loginError.innerText = "Reset-Link wurde per E-Mail gesendet. Schauen Sie auch in Ihrem Spam-Ordner nach.";
  } catch (e) {
    loginError.innerText = "Reset-Mail konnte nicht gesendet werden.";
  }
}

function goToChange() {
  if (!auth.currentUser) {
    loginError.innerText = "Bitte erst anmelden.";
    return;
  }
  showPage("page-change");
}

function handleUserAction(val) {
  if (!val) return;
  
// ✅ Navigationseinträge
    if (val.startsWith("nav:")) {
    const pageId = val.replace("nav:", "");
    showPage(pageId);
    const sel = document.getElementById("user-action-select");
    if (sel) sel.value = "";
    return;
  }

  if (val === "clear") {const ok = confirm("Alle Eingaben wirklich löschen?");
  if (ok) clearInputs();
  }
  if (val === "changePw") goToChange();
  if (val === "logout") logout();

  const sel = document.getElementById("user-action-select");
  if (sel) sel.value = "";
}
window.handleUserAction = handleUserAction;

async function savePassword() {
  const n1 = newPass1.value;
  const n2 = newPass2.value;

  if (!n1 || !n2) {
    changeError.innerText = "Bitte alle Felder ausfüllen.";
    return;
  }
  if (n1 !== n2) {
    changeError.innerText = "Neue Passwörter stimmen nicht überein.";
    return;
  }
  if (!auth.currentUser) {
    changeError.innerText = "Nicht eingeloggt.";
    return;
  }

  try {
    await updatePassword(auth.currentUser, n1);
    changeError.innerText = "";
    alert("Passwort geändert.");
    showPage("page-3");
  } catch (e) {
    changeError.innerText = "Passwort konnte nicht geändert werden (ggf. neu einloggen).";
  }
}

async function exportLoginLog() {
  const adminEmail = "pascal.gasch@tpholding.de";
  const userEmail = auth.currentUser?.email || "";
  if (userEmail.toLowerCase() !== adminEmail.toLowerCase()) {
    alert("Keine Berechtigung.");
    return;
  }

  const { getDocs, query, orderBy } = await import(
    "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"
  );

  const q = query(collection(db, "loginLogs"), orderBy("time", "desc"));
  const snap = await getDocs(q);

  let csv = "time;email;event\n";
  snap.forEach(d => {
    const x = d.data();
    const time = x.time?.toDate ? x.time.toDate().toISOString() : "";
    csv += `${time};${x.email || ""};${x.event || ""}\n`;
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "login-log.csv";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

window.exportLoginLog = exportLoginLog;

  
		// -----------------------------
		// Admin-Freigabe + Mail auslösen (ohne Backend)
		// -----------------------------

//async function loadPendingUsers() {
//  const adminEmail = "pascal.gasch@tpholding.de";
//  if ((auth.currentUser?.email || "").toLowerCase() !== adminEmail.toLowerCase()) return [];
//
//  const q = query(collection(db, "users"), where("approved", "==", false));
//  const snap = await getDocs(q);
//
//  const list = [];
//  snap.forEach(d => list.push({ uid: d.id, ...d.data() }));
//  return list;
//}
//
//async function approveUser(uid, email) {
//  const adminEmail = "pascal.gasch@tpholding.de";
//  if ((auth.currentUser?.email || "").toLowerCase() !== adminEmail.toLowerCase()) {
//    alert("Keine Berechtigung.");
//    return;
//  }
//
// // ✅ udoc holen
//  const uref = doc(db, "users", uid);
//  const udoc = await getDoc(uref);
//
//  // ✅ schon freigegeben?
//  if (udoc.exists() && udoc.data().approved === true) {
//   alert("User ist bereits freigegeben.");
//   return;
// }
//
// await updateDoc(uref, {
//   approved: true,
//   approvedAt: serverTimestamp(),
//   approvedBy: auth.currentUser.email
// });
//
// await sendPasswordResetEmail(auth, email);
//
// alert("Freigegeben. Passwort-Reset-Mail wurde gesendet.");
// if (typeof loadAdminPage === "function") loadAdminPage();
//}
//
//window.loadPendingUsers = loadPendingUsers;
//window.approveUser = approveUser;


// -----------------------------
// LOGBUCH - NUR FÜR ADMIN
// -----------------------------

function updateAdminUI_() {
  const adminEmail = "pascal.gasch@tpholding.de";
  const isAdmin = (auth.currentUser?.email || "").toLowerCase() === adminEmail.toLowerCase();

  const btn = document.getElementById("btnExportLog");
  if (btn) btn.classList.toggle("hidden", !isAdmin);

  const btnAdmin = document.getElementById("btnAdmin");
  if (btnAdmin) btnAdmin.classList.toggle("hidden", !isAdmin);
}

		// -----------------------------
		// ADMIN-SEITE: offene Registrierungen anzeigen
		// -----------------------------
//
//async function loadAdminPage() {
//  const box = document.getElementById("admin-registrations");
//  if (!box) return;
//
//  // nur Admin
//  const adminEmail = "pascal.gasch@tpholding.de";
//  const isAdmin = (auth.currentUser?.email || "").toLowerCase() === adminEmail.toLowerCase();
//
//  if (!isAdmin) {
//    box.innerHTML = "<div>Keine Berechtigung.</div>";
//    return;
//  }
//
//  box.innerHTML = "<div>Lade…</div>";
//
//  try {
//   const q = query(collection(db, "users"), where("approved", "==", false));
//   const snap = await getDocs(q);
//
//   if (snap.empty) {
//     box.innerHTML = "<div>Keine offenen Registrierungen 🎉</div>";
//    return;
//  }
//
//  let html = "";
//  snap.forEach(d => {
//    const u = d.data();
//     html += `
//       <div style="border:1px solid #ddd; padding:10px; margin:10px 0; border-radius:8px;">
//        <div><strong>Firma:</strong> ${u.firma || ""}</div>
//        <div><strong>Ansprechpartner:</strong> ${u.name || u.ansprechpartner || ""}</div>
//        <div><strong>Adresse:</strong> ${u.strasse || ""} ${u.hausnr || ""}, ${u.plz || ""} ${u.ort || ""}</div>
//        <div><strong>E-Mail:</strong> ${u.email || ""}</div>
//        <div><strong>Telefon:</strong> ${u.tel || ""}</div>
//
//        <div style="margin-top:8px;">
//           <button onclick="approveUser('${d.id}','${(u.email || "").replace(/'/g, "\\'")}')">
//             Freigeben + Passwort-Link senden
//            </button>
//         </div>
//        </div>
//     `;
//   });
//
//   box.innerHTML = html;
//
//  } catch (e) {
//    console.error("loadAdminPage Fehler:", e);
//    box.innerHTML = "<div>Fehler beim Laden der Registrierungen.</div>";
//  }
//}
//
//window.loadAdminPage = loadAdminPage;

// -----------------------------
//  LOGOUT-TIMER
// -----------------------------

function startTimer() {
    remaining = 600;
    clearInterval(logoutTimer);
    logoutTimer = setInterval(() => {
        remaining--;
        let m = Math.floor(remaining / 60);
        let s = remaining % 60;
        timer.innerText = `Logout in: ${m}:${s.toString().padStart(2,"0")}`;
        if (remaining <= 0) {
            alert("Automatisch ausgeloggt.");
            location.reload();
        }
    }, 1000);
}

// -----------------------------
// Alle Zwischensummen aller Preis-Seiten speichern
// -----------------------------

let angebotSummen = JSON.parse(localStorage.getItem("angebotSummen") || "{}");

function saveSeitenSumme(seitenId, summe) {
  angebotSummen[seitenId] = summe;
  localStorage.setItem("angebotSummen", JSON.stringify(angebotSummen));

// NEU: Rabatt-Anzeigen automatisch nachziehen
  refreshRabattDisplays();
}

function getGesamtAngebotssumme() {
    let total = 0;
    for (let key in angebotSummen) {
        total += parseFloat(angebotSummen[key]) || 0;
    }
    return total;
}

// -----------------------------
// SHK-Rabatt (15%)
// -----------------------------

const SHK_RABATT = 0.15;

function formatEuro(n) {
  const x = Number(n) || 0;
  return x.toLocaleString("de-DE", { minimumFractionDigits: 2 }) + " €";
}

function getRabattSumme(total) {
  const t = Number(total) || 0;
  return t * (1 - SHK_RABATT); // = 85%
}

// Aktualisiert alle vorhandenen Rabatt-Zeilen (auf allen Seiten, die gerade gerendert sind)
function refreshRabattDisplays() {
  const total = getGesamtAngebotssumme();
  const after = getRabattSumme(total);

// alle dynamischen Seiten (14, 8, 18, ...) -> wir hängen data-rabatt="angebot" dran
  document.querySelectorAll('[data-rabatt="angebot"]').forEach(el => {
    el.innerText = `Gesamtsumme abzgl. SHK-Rabatt (15%): ${formatEuro(after)}`;
  });

// Seite 40 (statisch in HTML)
  const p40 = document.getElementById("angebotspreisRabatt");
  if (p40) p40.innerText = `Gesamtpreis abzgl. SHK-Rabatt (15%): ${formatEuro(after)}`;
}

// -----------------------------
// Funktion zur Prüfung der Pflichteingaben auf Seite 5 (Kopfdaten für Anfrage) + speichern
// -----------------------------

function submitPage5() {
    const fields = [
        {id: "pj-contact", name: "Ansprechpartner bei PJ"},
        {id: "pj-number", name: "SHK - PJ-Kunden-Nr."},
        {id: "shk-name", name: "SHK Name/Firma"},
        {id: "shk-contact", name: "SHK Ansprechpartner"},
        {id: "shk-email", name: "SHK E-Mail"},
        {id: "shk-phone", name: "SHK Telefon-Nr."},
        {id: "site-address", name: "Adresse Baustelle"},
        {id: "execution-date", name: "Gewünschter Ausführungstermin"},
        {id: "dachpfanne-ausfuehrung", name: "Ausführung - Dachpfanne"},
        {id: "zeichnung-plaene", name:"Zeichnung / Pläne"},
        {id: "zaehlerschrank", name:"Standort Zählerschrank"},       
        {id: "wechselrichter_speicher", name:"Standort Wechselrichter + Speicher"},
        {id: "jahresstrombedarf", name:"Jahresstrombedarf kWh"},
        {id: "waermepumpe_strombedarf", name:"Wärmepumpe Strombedarf kWh"},
        {id: "wallbox", name:"Wallbox"}
    ];

    let missing = [];

    fields.forEach(f => {
        const val = document.getElementById(f.id).value.trim();
        if (!val) missing.push(f.name);
    });

    const errorDiv = document.getElementById("page5-error");

    if (missing.length > 0) {
        errorDiv.innerText = "Bitte folgende Felder ausfüllen:\n" + missing.join(", ");
        return;
    }

    errorDiv.innerText = "";

    savePage5Data();
    
    showPage("page-4");
}

function savePage5Data() {
    const ids = [
        "bv-contact", "bv-strasse", "bv-ort", "shk-contact",
        "shk-email", "shk-phone", "execution-date", "dachpfanne-ausfuehrung", "zeichnung-plaene", "zaehlerschrank", "wechselrichter_speicher", "jahresstrombedarf", "waermepumpe_strombedarf", "wallbox"

    ];

    const obj = {};
    ids.forEach(id => obj[id] = (document.getElementById(id)?.value || "").trim());

    localStorage.setItem("page5Data", JSON.stringify(obj));
}

// -----------------------------
// SEITE 14 – Wechselrichter "strang" (tga4.csv)
// -----------------------------

function loadPage14() {

  const container = document.getElementById("content-14");
  if (!container) return;

  if (container.innerHTML.trim() !== "") return;

  fetch("tga4.csv")
    .then(response => response.text())
    .then(data => {

      const lines = data.split("\n").slice(1);
      let html = "";

      let headerInserted = false;

      const gespeicherteWerte =
        JSON.parse(localStorage.getItem("page14Data") || "{}");

      // Bild-Auflösung: 1..40 -> bildX.jpg (oder direkt Dateiname in CSV)
      function resolvePosImg(colImg) {
        const v = (colImg || "").trim();
        if (!v) return "";
        const n = parseInt(v, 10);
        if (!isNaN(n) && n > 0) return `bild${n}.jpg`;
        return v;
      }

      // Header (mit Bild links)
      function renderHeader14(imgSrc) {
        return `
          <div class="row table-header">
            <div class="header-img-cell">
              ${imgSrc ? `<img src="${imgSrc}" class="header-img" alt="Bild">` : ""}
            </div>
            <div>Beschreibung</div>
            <div>Einheit</div>
            <div style="text-align:center;">Menge</div>
            <div style="text-align:right;">Preis / Einheit</div>
            <div style="text-align:right;">Positionsergebnis</div>
          </div>
        `;
      }

      lines.forEach((line, index) => {
        if (!line.trim()) return;

        const cols = line.split(";");
        const colA = cols[0]?.trim();
        const colB = cols[1]?.trim();
        const colC = cols[2]?.trim();
        const colD = cols[3]?.trim();
        const colImg = cols[4]?.trim(); // <-- NEU: 5. Spalte Bild

        // ====== Abschnittstrenner: Header soll später wieder kommen ======
        if (colA === "Titel") {
          html += `<div class="title">${colB}</div>`;
          headerInserted = false;
          return;
        }
        if (colA === "Untertitel") {
          html += `<div class="subtitle">${colB}</div>`;
          headerInserted = false;
          return;
        }
        if (colA === "Zwischentitel") {
          html += `<div class="midtitle">${colB}</div>`;
          headerInserted = false;
          return;
        }

        // Beschreibung_fett (wie bei Seite 20 sauber auf Beschreibung-Spalte ausgerichtet)
        if (colA === "Beschreibung_fett") {
          html += `
            <div class="row beschreibung-fett-row">
              <div class="col-a"></div>
              <div class="col-b beschreibung-fett" style="grid-column: 2 / 7;">${colB}</div>
            </div>
          `;
          headerInserted = false;
          return;
        }

        const preis = parseFloat((colD || "").replace(",", "."));
        const preisVorhanden = !isNaN(preis);

        if (preisVorhanden) {

          // Bild aus 5. Spalte
          const imgSrc = resolvePosImg(colImg);

          // Header + Bild DIREKT vor dieser Position
          html += renderHeader14(imgSrc);
          headerInserted = true;

          const menge = gespeicherteWerte[index] || 0;

          html += `
            <div class="row">
              <div class="col-a">${colA}</div>
              <div class="col-b">${colB}</div>
              <div class="col-c">${colC}</div>

              <input class="menge-input"
                     type="number" min="0" step="any"
                     value="${menge}"
                     oninput="calcRow14(this, ${preis}, ${index})">

              <div class="col-d">
                ${preis.toLocaleString("de-DE", { minimumFractionDigits: 2 })} €
              </div>

              <div class="col-e">0,00 €</div>
            </div>
          `;
        } else {
          html += `
            <div class="row no-price">
              <div class="col-a">${colA}</div>
              <div class="col-b" style="grid-column: 2 / 7;">${colB}</div>
            </div>
          `;
          headerInserted = false;
        }
      });

      html += `<div id="gesamtSumme14" class="gesamt">Gesamtsumme: 0,00 €</div>`;
      html += `<div id="gesamtSumme14Rabatt" class="gesamt rabatt" data-rabatt="angebot">
        Gesamtsumme abzgl. SHK-Rabatt (15%): 0,00 €
      </div>`;

      container.innerHTML = html;
      berechneGesamt14();
    });
}

function calcRow14(input, preis, index) {

    const row = input.parentElement;
    const ergebnis = row.querySelector(".col-e");
    const menge = parseFloat(input.value.replace(",", ".")) || 0;

    const sum = menge * preis;
    ergebnis.innerText =
        sum.toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";

    let gespeicherteWerte =
        JSON.parse(localStorage.getItem("page14Data") || "{}");

    gespeicherteWerte[index] = menge;
    localStorage.setItem("page14Data", JSON.stringify(gespeicherteWerte));

    berechneGesamt14();
}

function berechneGesamt14() {

    let sum = 0;

    document.querySelectorAll("#page-14 .col-e").forEach(el => {
        const wert = parseFloat(
            el.innerText.replace("€","")
                       .replace(/\./g,"")
                       .replace(",",".")
                       .trim()
        ) || 0;
        sum += wert;
    });

    saveSeitenSumme("page-14", sum);

    const gesamtDiv = document.getElementById("gesamtSumme14");
    if (gesamtDiv) {
        gesamtDiv.innerText =
            "Gesamtsumme Angebot: " +
            getGesamtAngebotssumme().toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";
    }
}

// -----------------------------
// SEITE 40 – Ausgabeseite Kostenvoranschlag / Anfrage
// -----------------------------

function isPreisZeile(colD) {
  if (!colD) return false;
  const p = parseFloat(String(colD).replace(",", "."));
  return !isNaN(p);
}

function renderHinweisLine(colA, colB) {
  const text = (colB || "").trim();
  if (!text) return "";

  if (colA === "Titel") return `<div class="title">${text}</div>`;
  if (colA === "Untertitel") return `<div class="subtitle">${text}</div>`;
  if (colA === "Zwischentitel") return `<div class="midtitle">${text}</div>`;

  // “Beschreibungstext”-Zeilen (no-price)
  return `<div class="hinweis-row">${text}</div>`;
}

/**
 * Extrahiert Textblöcke (Titel/Untertitel/Zwischentitel + no-price-Beschreibungen)
 * so, dass ein Block NUR dann ausgegeben wird, wenn darunter (bis zum nächsten Block)
 * mindestens eine Artikelposition Menge > 0 hat.
 */
function extractTriggeredTextBlocks(lines, dataObj) {
  const out = [];

  let pendingHeaderParts = [];      // sammelt Textzeilen bis zur ersten Preiszeile (oder bis zum nächsten Block)
  let sectionHeaderHtml = "";       // “Header” für die aktuelle Preis-Sektion
  let inSection = false;
  let sectionHasQty = false;

  function flushSectionIfNeeded() {
    if (inSection && sectionHasQty && sectionHeaderHtml.trim()) {
      out.push(sectionHeaderHtml);
    }
  }

  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    if (!line || !line.trim()) continue;

    const cols = line.split(";");
    const colA = (cols[0] || "").trim();
    const colB = (cols[1] || "").trim();
    const colD = (cols[3] || "").trim();

    const istTitelZeile = (colA === "Titel" || colA === "Untertitel" || colA === "Zwischentitel");
    const preisVorhanden = isPreisZeile(colD);

    // TEXT-ZEILE (Titel/Untertitel/Zwischentitel oder "no-price"-Beschreibung)
    if (istTitelZeile || !preisVorhanden) {
      // Wenn wir gerade in einer Preis-Sektion waren und jetzt ein neuer Textblock beginnt:
      if (inSection) {
        flushSectionIfNeeded();
        inSection = false;
        sectionHasQty = false;
        sectionHeaderHtml = "";
        pendingHeaderParts = [];
      }

      const html = renderHinweisLine(colA, colB);
      if (html) pendingHeaderParts.push(html);
      continue;
    }

    // PREIS-ZEILE
    const menge = parseFloat((dataObj[index] ?? 0)) || 0;

    // Start einer neuen Preis-Sektion: der bis dahin gesammelte Textblock ist der “Header”
    if (!inSection) {
      inSection = true;
      sectionHasQty = false;
      sectionHeaderHtml = pendingHeaderParts.join("");
      pendingHeaderParts = [];
    }

    if (menge > 0) sectionHasQty = true;
  }

  // Letzte Sektion am Ende flushen
  flushSectionIfNeeded();

  return out.join("");
}

async function loadPage40() {

    const angebotTyp = localStorage.getItem("angebotTyp") || "kv";
    const titleEl = document.getElementById("page40-title");
    if (titleEl) {
        titleEl.innerText = (angebotTyp === "anfrage") ? "Anfrage" : "Kostenvoranschlag";
    }

// Anfrage-Daten anzeigen (nur wenn angebotTyp === "anfrage")
	const anfrageBox = document.getElementById("anfrage-daten");
	const anfrageContent = document.getElementById("anfrage-daten-content");

	if (angebotTyp === "anfrage") {
    		const p5 = JSON.parse(localStorage.getItem("page5Data") || "{}");

    const labels = {
        "bv-contact": "Ansprechpartner bei PJ",
        "bv-strasse": "SHK – PJ-Kunden-Nr.",
        "bv-ort": "SHK Name/Firma",
        "shk-contact": "SHK Ansprechpartner",
        "shk-email": "SHK E-Mail",
        "shk-phone": "SHK Telefon-Nr.",
        "execution-date": "Gewünschter Ausführungstermin",
        "dachpfanne-ausfuehrung": "Ausführung - Dachpfanne",
        "zeichnung-plaene":"Zeichnung / Pläne",
        "zaehlerschrank":"Standort Zählerschrank",       
        "wechselrichter_speicher":"Standort Wechselrichter + Speicher",
        "jahresstrombedarf":"Jahresstrombedarf kWh",
        "waermepumpe_strombedarf":"Wärmepumpe Strombedarf kWh",
        "wallbox":"Wallbox"
    };

    let html = "";
    Object.keys(labels).forEach(id => {
        const val = (p5[id] || "").trim();
        if (val) {
            html += `<div style="margin:6px 0;"><strong>${labels[id]}:</strong> ${val}</div>`;
        }
    });

    if (anfrageBox && anfrageContent) {
        anfrageContent.innerHTML = html || "<div>Keine Anfrage-Daten vorhanden.</div>";
        anfrageBox.style.display = "block";
    }
} else {
    if (anfrageBox) anfrageBox.style.display = "none";
}

    const container = document.getElementById("summary-content");
const seitenHinweiseContainer = document.getElementById("seitenhinweise-content");
const hinweiseContainer = document.getElementById("hinweise-content");
if (!container || !hinweiseContainer || !seitenHinweiseContainer) return;

container.innerHTML = "";
seitenHinweiseContainer.innerHTML = "";
hinweiseContainer.innerHTML = "";

container.innerHTML += `
  <div class="row table-header">
    <div></div>
    <div>Beschreibung</div>
    <div>Einheit</div>
    <div style="text-align:center;">Menge</div>
    <div style="text-align:right;">Preis / Einheit</div>
    <div style="text-align:right;">Positionsergebnis</div>
  </div>
`;

    let gesamt = 0;

    const seitenConfig = [
        { key: "page14Data",  csv: "tga4.csv" },
        { key: "page142Data", csv: "tga5.csv" },
        { key: "page8Data", csv: "tga10.csv" },
        { key: "page18Data", csv: "tga8.csv" },
        { key: "page20Data", csv: "tga9.csv" },
        { key: "page21Data", csv: "tga7.csv" },
        { key: "page22Data", csv: "tga11.csv" },
        { key: "page9Data", csv: "tga3.csv" },
        { key: "page10Data", csv: "tga6.csv" },
        { key: "page23Data", csv: "tga1.csv" },
        { key: "page24Data", csv: "tga2.csv" },
        { key: "page25Data", csv: "tga14.csv" },
        { key: "page27Data", csv: "tga16.csv" },
        { key: "page28Data", csv: "tga17.csv" },
        { key: "page30Data", csv: "tga19.csv" },
        { key: "page31Data", csv: "tga18.csv" },
        { key: "page32Data", csv: "tga20.csv" },
        { key: "page33Data", csv: "tga21.csv" },
        { key: "page13Data", csv: "tga22.csv" },
        { key: "page143Data", csv: "tga13.csv" },
        { key: "page26Data", csv: "tga15.csv" },
        { key: "page34Data", csv: "tga23.csv" },
        { key: "page35Data", csv: "tga24.csv" },
        { key: "page36Data", csv: "tga25.csv" }
    ];

let seitenHinweiseHtml = "";
let firstHinweisBlock = true;

    for (const seite of seitenConfig) {

        const data = JSON.parse(localStorage.getItem(seite.key) || "{}");

        const response = await fetch(seite.csv);
        const csvText = await response.text();
        const lines = csvText.split("\n").slice(1);

// 1) Seitenbezogene Textblöcke (nur wenn auf dieser Seite Mengen > 0 in der jeweiligen Sektion)
const blocksHtml = extractTriggeredTextBlocks(lines, data);
if (blocksHtml.trim()) {
  if (!firstHinweisBlock) seitenHinweiseHtml += `<hr class="seitenhinweis-sep">`;
  firstHinweisBlock = false;
  seitenHinweiseHtml += blocksHtml;
}

        lines.forEach((line, index) => {

            if (!line.trim()) return;

            const cols = line.split(";");
            const colA = cols[0]?.trim();
            const colB = cols[1]?.trim();
            const colC = cols[2]?.trim();
            const colD = cols[3]?.trim();

            const menge = parseFloat(data[index] || 0);
            const preis = parseFloat(colD?.replace(",", ".") || 0);

            if (
                colA !== "Titel" &&
                colA !== "Untertitel" &&
                colA !== "Zwischentitel" &&
                colA !== "Beschreibung_fett" &&
                menge > 0
            ) {

                const zeile = document.createElement("div");
                zeile.className = "row summary-row";
                zeile.innerHTML = `
                    <div class="col-a">${colA}</div>
                    <div class="col-b">${colB}</div>
                    <div class="col-c">${colC}</div>
                    <div class="col-d">${menge.toLocaleString("de-DE", { minimumFractionDigits: 0 })}</div>
                    <div class="col-e">${preis.toLocaleString("de-DE",{minimumFractionDigits:2})} €</div>
                    <div class="col-f">${(menge * preis).toLocaleString("de-DE",{minimumFractionDigits:2})} €</div>
                `;

                container.appendChild(zeile);
                gesamt += menge * preis;
            }
seitenHinweiseContainer.innerHTML = seitenHinweiseHtml;
        });
    }

		// ===== Optimierer-Hinweis nur unter bestimmten Bedingungen =====

// true, wenn in einem Page-Storage (page23Data/page24Data) irgendein Wert > 0 ist
function hasAnyPositiveInput(storageKey) {
  const data = JSON.parse(localStorage.getItem(storageKey) || "{}");
  return Object.values(data).some(v => (parseFloat(String(v).replace(",", ".")) || 0) > 0);
}
//// ===== Wechselrichter-Hinweis in Seite 40 =====
//const wrMismatch = localStorage.getItem("wrMismatch") === "1";
//const wrRecoSize = localStorage.getItem("wrRecoSize") || "";
//const wrRecoModules = localStorage.getItem("wrRecoModules") || "";
//
//let wrHinweis = document.getElementById("wr-hinweis-print");
//if (!wrHinweis) {
//  wrHinweis = document.createElement("div");
//  wrHinweis.id = "wr-hinweis-print";
//  wrHinweis.style.display = "none";
//  wrHinweis.style.marginTop = "20px";
//  wrHinweis.style.color = "darkred";
//  wrHinweis.style.fontWeight = "700";
//
//  // Platzierung: unter Optimierer-Hinweis (falls vorhanden), sonst unter Angebotspreis
//  const opt = document.getElementById("optimierer-hinweis-print");
//  if (opt && opt.parentNode) opt.parentNode.insertBefore(wrHinweis, opt.nextSibling);
//  else {
//    const preis = document.getElementById("angebotspreis");
//    if (preis && preis.parentNode) preis.parentNode.insertBefore(wrHinweis, preis.nextSibling);
//  }
//}
//
//if (wrMismatch && wrRecoSize && wrRecoModules) {
//  wrHinweis.innerHTML =
//    `Achtung!<br>` +
//    `Wechselrichter nicht passend!<br>` +
//    `Empfehlung bei ${wrRecoModules} PV-Modulen: Wechselrichter <strong>${wrRecoSize}</strong>`;
//  wrHinweis.style.display = "block";
//} else {
//  wrHinweis.style.display = "none";
//}
const optimiererSelected = isOptimiererSelected(); // Seite 8
const hasInput23 = hasAnyPositiveInput("page23Data"); // Schrägdach
const hasInput24 = hasAnyPositiveInput("page24Data"); // Flachdach

const shouldShowOptimiererHinweis = (!optimiererSelected) && (hasInput23 || hasInput24);

const optimiererHinweis = document.getElementById("optimierer-hinweis-print");
if (optimiererHinweis) {
  optimiererHinweis.style.display = shouldShowOptimiererHinweis ? "block" : "none";
}

    const angebotspreisEl = document.getElementById("angebotspreis");
    if (angebotspreisEl) {
        angebotspreisEl.innerText =
            "Gesamtpreis: " + gesamt.toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";
    }

 refreshRabattDisplays();

// Hinweise laden (tga12.csv)
    try {
        const hinweisRes = await fetch("tga12.csv");
        const hinweisText = await hinweisRes.text();
        const hinweisLines = hinweisText.split("\n").slice(1);

        let html = "";
        hinweisLines.forEach(line => {
            if (!line.trim()) return;

            const cols = line.split(";");
            const colA = cols[0]?.trim();
            const colB = cols[1]?.trim();

            if (colA === "Titel") html += `<div class="title">${colB}</div>`;
            else if (colA === "Untertitel") html += `<div class="subtitle">${colB}</div>`;
            else if (colA === "Zwischentitel") html += `<div class="midtitle">${colB}</div>`;
            else if (colA === "Beschreibung_fett") html += `<div class="beschreibung-fett">${colB}</div>`;
            else html += `<div class="hinweis-row">${colB}</div>`;
        });

        hinweiseContainer.innerHTML = html;

    } catch (e) {
        console.error("Fehler beim Laden der Hinweise (tga12.csv):", e);
    }
}

// -----------------------------
// direktZumAngebot (Button)
// -----------------------------

function direktZumAngebot() {

    const fields = [
        "bv-contact", "bv-strasse", "bv-ort", "shk-contact",
        "shk-email", "shk-phone", "execution-date", "dachpfanne-ausfuehrung", "zeichnung-plaene", "zaehlerschrank", "wechselrichter_speicher", "jahresstrombedarf", "waermepumpe_strombedarf", "wallbox"
    ];

    const alleAusgefüllt = fields.every(id => {
        const val = document.getElementById(id)?.value?.trim();
        return val && val.length > 0;
    });

    if (alleAusgefüllt) {
        savePage5Data();
        localStorage.setItem("angebotTyp", "anfrage");
        showPage("page-40");
    } else {
        localStorage.setItem("angebotTyp", "kv");
        showPage("page-41");
    }
}

// -----------------------------
// SEITE 40 – printPage - (Button "Drucken / als PDF speichern")
// -----------------------------

function printPage40() {
  window.print();
}

// -----------------------------
// SEITE 40 – sendMail - (Button "Als Text-Mail versenden")
// -----------------------------

function sendMailPage40() {

    const angebotTyp = localStorage.getItem("angebotTyp") || "kv";

    let subject = "";
    let mailAdresse = "";

    if (angebotTyp === "anfrage") {
        subject = "Anfrage";
        mailAdresse = "info@tga-nord.de";
    } else {
        subject = `Kostenvoranschlag - TGA - ${new Date().toLocaleDateString("de-DE")}`;
        mailAdresse = "";
    }

    const body = encodeURIComponent(document.getElementById("page-40").innerText);

    window.location.href =
        `mailto:${mailAdresse}?subject=${encodeURIComponent(subject)}&body=${body}`;
}

// -----------------------------
// SEITE 40 – Export als CSV - (Button "Export CsV")
// -----------------------------

function exportCsvPage40() {
  const rows = document.querySelectorAll("#summary-content .summary-row");
  if (!rows.length) {
    alert("Keine Tabelleninhalte zum Export vorhanden.");
    return;
  }

  const SEP = "-"; // Vorgabe

  // Excel-Hinweiszeile, damit es sicher in Spalten trennt (auch bei "-")
  const lines = [];
  lines.push(`sep=${SEP}`);

  // Kopfzeile
  lines.push(["Artikelnummer", "Menge"].join(SEP));

  // Werte "CSV-sicher" machen (ohne Anführungszeichen)
  function clean(val) {
    return String(val ?? "")
      .trim()
      .replace(/\r?\n/g, " "); // keine Zeilenumbrüche in Zellen
  }

  rows.forEach(r => {
    const artikel = clean(r.querySelector(".col-a")?.innerText);
    const menge   = clean(r.querySelector(".col-d")?.innerText);

    lines.push([artikel, menge].join(SEP));
  });

  const csv = lines.join("\n");

  const datum = new Date().toLocaleDateString("de-DE").replaceAll(".", "-");
  const filename = `PJ_KalkPro_CSV-Export_${datum}.csv`;

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();

  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

window.exportCsvPage40 = exportCsvPage40;

// -----------------------------
// clearInputs - Button "Eingaben löschen"
// -----------------------------

function clearInputs() {

optimiererVerwendet = false;
  clearKomplettFlow();


// localStorage komplett löschen
    localStorage.clear();

// Eingabefelder im DOM leeren
    document.querySelectorAll("input").forEach(inp => inp.value = "");

// Dynamische Inhalte leeren (damit nichts „stehen bleibt“)
    const idsToClear = [
        "content-14",
        "content-143",
        "content-142",
        "content-8",
        "content-18",
        "content-20",
        "content-21",
        "content-22",
	"content-9",
        "content-10",
        "content-23",
	"content-24",
        "content-25",
        "content-27",
        "content-28",
        "content-30",
	"content-31",
        "content-32",
        "content-33",
        "content-13",
        "content-34",
        "content-35",
        "content-36",
        "content-26",
        "summary-content",
        "hinweise-content",
        "seitenhinweise-content"
    ];
    idsToClear.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = "";
    });

// Summen-Anzeige zurücksetzen
    const angebotspreis = document.getElementById("angebotspreis");
    if (angebotspreis) angebotspreis.innerText = "Gesamtsumme: 0,00 €";

    const sum14 = document.getElementById("gesamtSumme14");
    if (sum14) sum14.innerText = "Gesamtsumme Angebot: 0,00 €";

    const sum143 = document.getElementById("gesamtSumme143");
    if (sum143) sum143.innerText = "Gesamtsumme Angebot: 0,00 €";

   const sum142 = document.getElementById("gesamtSumme142");
   if (sum142) sum142.innerText = "Gesamtsumme Angebot: 0,00 €";

    const sum8 = document.getElementById("gesamtSumme8");
    if (sum8) sum8.innerText = "Gesamtsumme Angebot: 0,00 €";

    const sum18 = document.getElementById("gesamtSumme18");
    if (sum18) sum18.innerText = "Gesamtsumme Angebot: 0,00 €";

    const sum20 = document.getElementById("gesamtSumme20");
    if (sum20) sum20.innerText = "Gesamtsumme Angebot: 0,00 €";

    const sum21 = document.getElementById("gesamtSumme21");
    if (sum21) sum21.innerText = "Gesamtsumme Angebot: 0,00 €";

    const sum22 = document.getElementById("gesamtSumme22");
    if (sum22) sum22.innerText = "Gesamtsumme Angebot: 0,00 €";

    const sum9 = document.getElementById("gesamtSumme9");
    if (sum9) sum9.innerText = "Gesamtsumme Angebot: 0,00 €";

    const sum10 = document.getElementById("gesamtSumme10");
    if (sum10) sum10.innerText = "Gesamtsumme Angebot: 0,00 €";

    const sum23 = document.getElementById("gesamtSumme23");
    if (sum23) sum23.innerText = "Gesamtsumme Angebot: 0,00 €";

    const sum24 = document.getElementById("gesamtSumme24");
    if (sum24) sum24.innerText = "Gesamtsumme Angebot: 0,00 €";

    const sum25 = document.getElementById("gesamtSumme25");
    if (sum25) sum25.innerText = "Gesamtsumme Angebot: 0,00 €";

    const sum27 = document.getElementById("gesamtSumme27");
    if (sum27) sum27.innerText = "Gesamtsumme Angebot: 0,00 €";

    const sum28 = document.getElementById("gesamtSumme28");
    if (sum28) sum28.innerText = "Gesamtsumme Angebot: 0,00 €";

    const sum30 = document.getElementById("gesamtSumme30");
    if (sum30) sum30.innerText = "Gesamtsumme Angebot: 0,00 €";

    const sum31 = document.getElementById("gesamtSumme31");
    if (sum31) sum31.innerText = "Gesamtsumme Angebot: 0,00 €";

    const sum32 = document.getElementById("gesamtSumme32");
    if (sum32) sum32.innerText = "Gesamtsumme Angebot: 0,00 €";

    const sum33 = document.getElementById("gesamtSumme33");
    if (sum33) sum33.innerText = "Gesamtsumme Angebot: 0,00 €";

    const sum13 = document.getElementById("gesamtSumme13");
    if (sum13) sum13.innerText = "Gesamtsumme Angebot: 0,00 €";

    const sum26 = document.getElementById("gesamtSumme26");
    if (sum26) sum26.innerText = "Gesamtsumme Angebot: 0,00 €";

    const sum34 = document.getElementById("gesamtSumme34");
    if (sum34) sum34.innerText = "Gesamtsumme Angebot: 0,00 €";

    const sum35 = document.getElementById("gesamtSumme35");
    if (sum35) sum35.innerText = "Gesamtsumme Angebot: 0,00 €";

    const sum36 = document.getElementById("gesamtSumme36");
    if (sum36) sum36.innerText = "Gesamtsumme Angebot: 0,00 €";

// Flags zurücksetzen, damit Seiten neu aus CSV geladen werden
    page14Loaded = false;

// Angebots-Summen Objekt zurücksetzen (falls du es im RAM nutzt)
    angebotSummen = {};

    currentUser = null;
    updateAdminUI_();

document.querySelectorAll('[data-rabatt="angebot"]').forEach(el => {
  el.innerText = "Gesamtsumme abzgl. SHK-Rabatt (15%): 0,00 €";
});

const p40r = document.getElementById("angebotspreisRabatt");
if (p40r) p40r.innerText = "Gesamtpreis abzgl. SHK-Rabatt (15%): 0,00 €";

// zurück zu "page-3"
    showPage("page-3");
}

// -----------------------------
// SEITE 14.2 – Wechselrichter "hybrid" (tga5.csv)
// -----------------------------

function loadPage142() {

  const container = document.getElementById("content-142");
  if (!container) return;

  if (container.innerHTML.trim() !== "") return;

  fetch("tga5.csv")
    .then(response => response.text())
    .then(data => {

      const lines = data.split("\n").slice(1);
      let html = "";

      let headerInserted = false;

      const gespeicherteWerte =
        JSON.parse(localStorage.getItem("page142Data") || "{}");

      // Bild-Auflösung: 1..40 -> bildX.jpg (oder direkt Dateiname in CSV)
      function resolvePosImg(colImg) {
        const v = (colImg || "").trim();
        if (!v) return "";
        const n = parseInt(v, 10);
        if (!isNaN(n) && n > 0) return `bild${n}.jpg`;
        return v;
      }

      // Header (mit Bild links)
      function renderHeader142(imgSrc) {
        return `
          <div class="row table-header">
            <div class="header-img-cell">
              ${imgSrc ? `<img src="${imgSrc}" class="header-img" alt="Bild">` : ""}
            </div>
            <div>Beschreibung</div>
            <div>Einheit</div>
            <div style="text-align:center;">Menge</div>
            <div style="text-align:right;">Preis / Einheit</div>
            <div style="text-align:right;">Positionsergebnis</div>
          </div>
        `;
      }

      lines.forEach((line, index) => {
        if (!line.trim()) return;

        const cols = line.split(";");
        const colA = cols[0]?.trim();
        const colB = cols[1]?.trim();
        const colC = cols[2]?.trim();
        const colD = cols[3]?.trim();
        const colImg = cols[4]?.trim(); // <-- NEU: 5. Spalte Bild

        // ====== Abschnittstrenner: Header soll später wieder kommen ======
        if (colA === "Titel") {
          html += `<div class="title">${colB}</div>`;
          headerInserted = false;
          return;
        }
        if (colA === "Untertitel") {
          html += `<div class="subtitle">${colB}</div>`;
          headerInserted = false;
          return;
        }
        if (colA === "Zwischentitel") {
          html += `<div class="midtitle">${colB}</div>`;
          headerInserted = false;
          return;
        }

        // Beschreibung_fett (wie bei Seite 20 sauber auf Beschreibung-Spalte ausgerichtet)
        if (colA === "Beschreibung_fett") {
          html += `
            <div class="row beschreibung-fett-row">
              <div class="col-a"></div>
              <div class="col-b beschreibung-fett" style="grid-column: 2 / 7;">${colB}</div>
            </div>
          `;
          headerInserted = false;
          return;
        }

        const preis = parseFloat((colD || "").replace(",", "."));
        const preisVorhanden = !isNaN(preis);

        if (preisVorhanden) {

          // Bild aus 5. Spalte
          const imgSrc = resolvePosImg(colImg);

          // Header + Bild DIREKT vor dieser Position
          html += renderHeader142(imgSrc);
          headerInserted = true;

          const menge = gespeicherteWerte[index] || 0;

          html += `
            <div class="row">
              <div class="col-a">${colA}</div>
              <div class="col-b">${colB}</div>
              <div class="col-c">${colC}</div>

              <input class="menge-input"
                     type="number" min="0" step="any"
                     value="${menge}"
                     oninput="calcRow142(this, ${preis}, ${index})">

              <div class="col-d">
                ${preis.toLocaleString("de-DE", { minimumFractionDigits: 2 })} €
              </div>

              <div class="col-e">0,00 €</div>
            </div>
          `;
        } else {
          html += `
            <div class="row no-price">
              <div class="col-a">${colA}</div>
              <div class="col-b" style="grid-column: 2 / 7;">${colB}</div>
            </div>
          `;
          headerInserted = false;
        }
      });

      html += `<div id="gesamtSumme142" class="gesamt">Gesamtsumme: 0,00 €</div>`;
      html += `<div id="gesamtSumme142Rabatt" class="gesamt rabatt" data-rabatt="angebot">
        Gesamtsumme abzgl. SHK-Rabatt (15%): 0,00 €
      </div>`;

      container.innerHTML = html;
      berechneGesamt142();
    });
}

function calcRow142(input, preis, index) {

    const row = input.parentElement;
    const ergebnis = row.querySelector(".col-e");
    const menge = parseFloat(input.value.replace(",", ".")) || 0;

    const sum = menge * preis;
    ergebnis.innerText =
        sum.toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";

    let gespeicherteWerte =
        JSON.parse(localStorage.getItem("page142Data") || "{}");

    gespeicherteWerte[index] = menge;
    localStorage.setItem("page142Data", JSON.stringify(gespeicherteWerte));

    berechneGesamt142();
}

function berechneGesamt142() {

    let sum = 0;

    document.querySelectorAll("#page-14-2 .col-e").forEach(el => {
        const wert = parseFloat(
            el.innerText.replace("€","")
                       .replace(/\./g,"")
                       .replace(",",".")
                       .trim()
        ) || 0;
        sum += wert;
    });

    saveSeitenSumme("page-14-2", sum);

    const gesamtDiv = document.getElementById("gesamtSumme142");
    if (gesamtDiv) {
        gesamtDiv.innerText =
            "Gesamtsumme Angebot: " +
            getGesamtAngebotssumme().toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";
    }
}

// -----------------------------
// SEITE 8 – Optimierer (tga10.csv)
// -----------------------------

function loadPage8() {

    const container = document.getElementById("content-8");
    if (!container) return;

    if (container.innerHTML.trim() !== "") return;

    fetch("tga10.csv")
        .then(response => response.text())
        .then(data => {

            const lines = data.split("\n").slice(1);
            let html = "";
 		let headerInserted = false;

            const gespeicherteWerte =
                JSON.parse(localStorage.getItem("page8Data") || "{}");

      // Bild-Auflösung: 1..40 -> bildX.jpg (oder direkt Dateiname in CSV)
      function resolvePosImg(colImg) {
        const v = (colImg || "").trim();
        if (!v) return "";
        const n = parseInt(v, 10);
        if (!isNaN(n) && n > 0) return `bild${n}.jpg`;
        return v;
      }

      // Header (mit Bild links)
      function renderHeader8(imgSrc) {
        return `
          <div class="row table-header">
            <div class="header-img-cell">
              ${imgSrc ? `<img src="${imgSrc}" class="header-img" alt="Bild">` : ""}
            </div>
            <div>Beschreibung</div>
            <div>Einheit</div>
            <div style="text-align:center;">Menge</div>
            <div style="text-align:right;">Preis / Einheit</div>
            <div style="text-align:right;">Positionsergebnis</div>
          </div>
        `;
      }

      lines.forEach((line, index) => {
        if (!line.trim()) return;

        const cols = line.split(";");
        const colA = cols[0]?.trim();
        const colB = cols[1]?.trim();
        const colC = cols[2]?.trim();
        const colD = cols[3]?.trim();
        const colImg = cols[4]?.trim(); // <-- NEU: 5. Spalte Bild

        // ====== Abschnittstrenner: Header soll später wieder kommen ======
        if (colA === "Titel") {
          html += `<div class="title">${colB}</div>`;
          headerInserted = false;
          return;
        }
        if (colA === "Untertitel") {
          html += `<div class="subtitle">${colB}</div>`;
          headerInserted = false;
          return;
        }
        if (colA === "Zwischentitel") {
          html += `<div class="midtitle">${colB}</div>`;
          headerInserted = false;
          return;
        }

        // Beschreibung_fett (wie bei Seite 20 sauber auf Beschreibung-Spalte ausgerichtet)
        if (colA === "Beschreibung_fett") {
          html += `
            <div class="row beschreibung-fett-row">
              <div class="col-a"></div>
              <div class="col-b beschreibung-fett" style="grid-column: 2 / 7;">${colB}</div>
            </div>
          `;
          headerInserted = false;
          return;
        }

        const preis = parseFloat((colD || "").replace(",", "."));
        const preisVorhanden = !isNaN(preis);

        if (preisVorhanden) {

          // Bild aus 5. Spalte
          const imgSrc = resolvePosImg(colImg);

          // Header + Bild DIREKT vor dieser Position
          html += renderHeader8(imgSrc);
          headerInserted = true;

          const menge = gespeicherteWerte[index] || 0;

          html += `
            <div class="row">
              <div class="col-a">${colA}</div>
              <div class="col-b">${colB}</div>
              <div class="col-c">${colC}</div>

              <input class="menge-input"
                     type="number" min="0" step="any"
                     value="${menge}"
                     oninput="calcRow8(this, ${preis}, ${index})">

              <div class="col-d">
                ${preis.toLocaleString("de-DE", { minimumFractionDigits: 2 })} €
              </div>

              <div class="col-e">0,00 €</div>
            </div>
          `;
        } else {
          html += `
            <div class="row no-price">
              <div class="col-a">${colA}</div>
              <div class="col-b" style="grid-column: 2 / 7;">${colB}</div>
            </div>
          `;
          headerInserted = false;
        }
      });

      html += `<div id="gesamtSumme8" class="gesamt">Gesamtsumme: 0,00 €</div>`;
      html += `<div id="gesamtSumme8Rabatt" class="gesamt rabatt" data-rabatt="angebot">
        Gesamtsumme abzgl. SHK-Rabatt (15%): 0,00 €
      </div>`;

      container.innerHTML = html;
      berechneGesamt8();
    });
}

function isOptimiererSelected() {
  const data = JSON.parse(localStorage.getItem("page8Data") || "{}");
  return Object.values(data).some(v => (parseFloat(String(v).replace(",", ".")) || 0) > 0);
}

function setupOptimiererHinweis() {
  const page8 = document.getElementById("page-8");
  if (!page8) return;

  page8.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const selected = isOptimiererSelected();

    // Flag für Seite 40 immer aktuell setzen
    optimiererVerwendet = selected;

    // IMMER anzeigen, wenn nichts gewählt oder 0
    if (!selected) {
      alert(
        "Achtung!\n\n" +
        "Sie haben keinen Optimierer ausgewählt!\n"
      );
    }
  }, true);
}

document.addEventListener("DOMContentLoaded", () => {
  setupOptimiererHinweis();
});


function calcRow8(input, preis, index) {

    const row = input.parentElement;
    const ergebnis = row.querySelector(".col-e");
    const menge = parseFloat(input.value.replace(",", ".")) || 0;

    const sum = menge * preis;
    ergebnis.innerText =
        sum.toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";

    let gespeicherteWerte =
        JSON.parse(localStorage.getItem("page8Data") || "{}");

    gespeicherteWerte[index] = menge;
    localStorage.setItem("page8Data", JSON.stringify(gespeicherteWerte));

    berechneGesamt8();
}

function berechneGesamt8() {

    let sum = 0;

    document.querySelectorAll("#page-8 .col-e").forEach(el => {
        const wert = parseFloat(
            el.innerText.replace("€","")
                       .replace(/\./g,"")
                       .replace(",",".")
                       .trim()
        ) || 0;
        sum += wert;
    });

    saveSeitenSumme("page-8", sum);

    const gesamtDiv = document.getElementById("gesamtSumme8");
    if (gesamtDiv) {
        gesamtDiv.innerText =
            "Gesamtsumme Angebot: " +
            getGesamtAngebotssumme().toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";
    }
}

// -----------------------------
// SEITE 18 – Wallbox (tga8.csv)
// -----------------------------

function loadPage18() {

    const container = document.getElementById("content-18");
    if (!container) return;

    if (container.innerHTML.trim() !== "") return;

    fetch("tga8.csv")
        .then(response => response.text())
        .then(data => {

            const lines = data.split("\n").slice(1);
            let html = "";
		let headerInserted = false;

            const gespeicherteWerte =
                JSON.parse(localStorage.getItem("page18Data") || "{}");

            lines.forEach((line, index) => {
                if (!line.trim()) return;

                const cols = line.split(";");
                const colA = cols[0]?.trim();
                const colB = cols[1]?.trim();
                const colC = cols[2]?.trim();
                const colD = cols[3]?.trim();

                if (colA === "Titel") {
                    html += `<div class="title">${colB}</div>`;
                    return;
                }
                if (colA === "Untertitel") {
                    html += `<div class="subtitle">${colB}</div>`;
                    return;
                }
                if (colA === "Zwischentitel") {
                    html += `<div class="midtitle">${colB}</div>`;
                    return;
                }
if (colA === "Beschreibung_fett") {
  html += `
    <div class="row beschreibung-fett-row">
      <div class="col-a"></div>
      <div class="col-b beschreibung-fett">${colB}</div>
      <div class="col-c"></div>
      <div class="col-d"></div>
      <div class="col-e"></div>
      <div class="col-f"></div>
    </div>
  `;
  return;
}

                const preis = parseFloat(colD?.replace(",", "."));
                if (!isNaN(preis)) {

if (!headerInserted) {
        html += `
          <div class="row table-header">
            <div class="header-img-cell">
          <img src="bild4.jpg" class="header-img" alt="Bild">
        </div>
            <div>Beschreibung</div>
            <div>Einheit</div>
            <div style="text-align:center;">Menge</div>
            <div style="text-align:right;">Preis / Einheit</div>
            <div style="text-align:right;">Positionsergebnis</div>
          </div>
        `;
        headerInserted = true;
}

                    const menge = gespeicherteWerte[index] || 0;

                    html += `
                        <div class="row">
                            <div class="col-a">${colA}</div>
                            <div class="col-b">${colB}</div>
                            <div class="col-c">${colC}</div>

                            <input class="menge-input"
                                   type="number" min="0" step="any"
                                   value="${menge}"
                                   oninput="calcRow18(this, ${preis}, ${index})">

                            <div class="col-d">
                                ${preis.toLocaleString("de-DE",{minimumFractionDigits:2})} €
                            </div>

                            <div class="col-e">0,00 €</div>
                        </div>`;
                } else {
                    html += `
                        <div class="row no-price">
                            <div class="col-a">${colA}</div>
                            <div class="col-b" style="grid-column: 2 / 7;">${colB}</div>
                        </div>`;
                }
            });

            html += `<div id="gesamtSumme18" class="gesamt">Gesamtsumme: 0,00 €</div>`;
            html += `<div id="gesamtSumme18Rabatt" class="gesamt rabatt" data-rabatt="angebot">
          Gesamtsumme abzgl. SHK-Rabatt (15%): 0,00 €
         </div>`;

            container.innerHTML = html;
            berechneGesamt18();
        });
}

function calcRow18(input, preis, index) {

    const row = input.parentElement;
    const ergebnis = row.querySelector(".col-e");
    const menge = parseFloat(input.value.replace(",", ".")) || 0;

    const sum = menge * preis;
    ergebnis.innerText =
        sum.toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";

    let gespeicherteWerte =
        JSON.parse(localStorage.getItem("page18Data") || "{}");

    gespeicherteWerte[index] = menge;
    localStorage.setItem("page18Data", JSON.stringify(gespeicherteWerte));

    berechneGesamt18();
}

function berechneGesamt18() {

    let sum = 0;

    document.querySelectorAll("#page-18 .col-e").forEach(el => {
        const wert = parseFloat(
            el.innerText.replace("€","")
                       .replace(/\./g,"")
                       .replace(",",".")
                       .trim()
        ) || 0;
        sum += wert;
    });

    saveSeitenSumme("page-18", sum);

    const gesamtDiv = document.getElementById("gesamtSumme18");
    if (gesamtDiv) {
        gesamtDiv.innerText =
            "Gesamtsumme Angebot: " +
            getGesamtAngebotssumme().toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";
    }
}

// -----------------------------
// SEITE 20 – Zählerschrank (tga9.csv)
// -----------------------------

function loadPage20() {

  const container = document.getElementById("content-20");
  if (!container) return;

  if (container.innerHTML.trim() !== "") return;

  fetch("tga9.csv")
    .then(response => response.text())
    .then(data => {

      const lines = data.split("\n").slice(1);
      let html = "";

      let headerInserted = false;

      const gespeicherteWerte =
        JSON.parse(localStorage.getItem("page20Data") || "{}");

      // Bild-Auflösung: 1..40 -> bildX.jpg
      function resolvePosImg(colImg) {
        const v = (colImg || "").trim();
        if (!v) return "";
        const n = parseInt(v, 10);
        if (!isNaN(n) && n > 0) return `bild${n}.jpg`;
        // optional: falls du direkt "meinbild.jpg" einträgst
        return v;
      }

      // Header-HTML (links nur leere Zelle für Bild-Spalte)
    function renderHeader20(imgSrc) {
  return `
    <div class="row table-header">
      <div class="header-img-cell">
        ${imgSrc ? `<img src="${imgSrc}" class="header-img" alt="Bild">` : ""}
      </div>
      <div>Beschreibung</div>
      <div>Einheit</div>
      <div style="text-align:center;">Menge</div>
      <div style="text-align:right;">Preis / Einheit</div>
      <div style="text-align:right;">Positionsergebnis</div>
    </div>
  `;
}

      lines.forEach((line, index) => {
        if (!line.trim()) return;

        const cols = line.split(";");
        const colA = cols[0]?.trim();
        const colB = cols[1]?.trim();
        const colC = cols[2]?.trim();
        const colD = cols[3]?.trim();
        const colImg = cols[4]?.trim(); // <-- NEU: 5. Spalte Bild

        // ====== Abschnittstrenner: Header soll später wieder kommen ======
        if (colA === "Titel") {
          html += `<div class="title">${colB}</div>`;
          headerInserted = false;
          return;
        }
        if (colA === "Untertitel") {
          html += `<div class="subtitle">${colB}</div>`;
          headerInserted = false;
          return;
        }
        if (colA === "Zwischentitel") {
          html += `<div class="midtitle">${colB}</div>`;
          headerInserted = false;
          return;
        }
        if (colA === "Beschreibung_fett") {
  html += `
    <div class="row beschreibung-fett-row">
      <div class="col-a"></div>
      <div class="col-b beschreibung-fett" style="grid-column: 2 / 7;">${colB}</div>
    </div>
  `;
  headerInserted = false;
  return;
}

        const preis = parseFloat((colD || "").replace(",", "."));
        const preisVorhanden = !isNaN(preis);

        if (preisVorhanden) {

  // Bild passend zur Position (z.B. über colA = Artikelnummer/Pos)
  const imgSrc = resolvePosImg(colImg);

  // Header + Bild DIREKT vor dieser Position
  html += renderHeader20(imgSrc);

  const menge = gespeicherteWerte[index] || 0;

  html += `
    <div class="row">
      <div class="col-a">${colA}</div>
      <div class="col-b">${colB}</div>
      <div class="col-c">${colC}</div>

      <input class="menge-input"
             type="number" min="0" step="any"
             value="${menge}"
             oninput="calcRow20(this, ${preis}, ${index})">

      <div class="col-d">
        ${preis.toLocaleString("de-DE",{minimumFractionDigits:2})} €
      </div>

      <div class="col-e">0,00 €</div>
    </div>
  `;
} else {
  html += `
    <div class="row no-price">
      <div class="col-a">${colA}</div>
      <div class="col-b" style="grid-column: 2 / 7;">${colB}</div>
    </div>
  `;
  headerInserted = false;
}
      });

      html += `<div id="gesamtSumme20" class="gesamt">Gesamtsumme: 0,00 €</div>`;
      html += `<div id="gesamtSumme20Rabatt" class="gesamt rabatt" data-rabatt="angebot">
        Gesamtsumme abzgl. SHK-Rabatt (15%): 0,00 €
      </div>`;

      container.innerHTML = html;
      berechneGesamt20();
    });
}

function calcRow20(input, preis, index) {

    const row = input.parentElement;
    const ergebnis = row.querySelector(".col-e");
    const menge = parseFloat(input.value.replace(",", ".")) || 0;

    const sum = menge * preis;
    ergebnis.innerText =
        sum.toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";

    let gespeicherteWerte =
        JSON.parse(localStorage.getItem("page20Data") || "{}");

    gespeicherteWerte[index] = menge;
    localStorage.setItem("page20Data", JSON.stringify(gespeicherteWerte));

    berechneGesamt20();
}

function berechneGesamt20() {

    let sum = 0;

    document.querySelectorAll("#page-20 .col-e").forEach(el => {
        const wert = parseFloat(
            el.innerText.replace("€","")
                       .replace(/\./g,"")
                       .replace(",",".")
                       .trim()
        ) || 0;
        sum += wert;
    });

    saveSeitenSumme("page-20", sum);

    const gesamtDiv = document.getElementById("gesamtSumme20");
    if (gesamtDiv) {
        gesamtDiv.innerText =
            "Gesamtsumme Angebot: " +
            getGesamtAngebotssumme().toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";
    }
}

// -----------------------------
// SEITE 21 – Zubehör (tga7.csv)
// -----------------------------

function loadPage21() {

  const container = document.getElementById("content-21");
  if (!container) return;

  if (container.innerHTML.trim() !== "") return;

  fetch("tga7.csv")
    .then(response => response.text())
    .then(data => {

      const lines = data.split("\n").slice(1);
      let html = "";

      let headerInserted = false;

      const gespeicherteWerte =
        JSON.parse(localStorage.getItem("page21Data") || "{}");

      // Bild-Auflösung: 1..40 -> bildX.jpg (oder direkt Dateiname in CSV)
      function resolvePosImg(colImg) {
        const v = (colImg || "").trim();
        if (!v) return "";
        const n = parseInt(v, 10);
        if (!isNaN(n) && n > 0) return `bild${n}.jpg`;
        return v;
      }

      // Header (mit Bild links)
      function renderHeader21(imgSrc) {
        return `
          <div class="row table-header">
            <div class="header-img-cell">
              ${imgSrc ? `<img src="${imgSrc}" class="header-img" alt="Bild">` : ""}
            </div>
            <div>Beschreibung</div>
            <div>Einheit</div>
            <div style="text-align:center;">Menge</div>
            <div style="text-align:right;">Preis / Einheit</div>
            <div style="text-align:right;">Positionsergebnis</div>
          </div>
        `;
      }

      lines.forEach((line, index) => {
        if (!line.trim()) return;

        const cols = line.split(";");
        const colA = cols[0]?.trim();
        const colB = cols[1]?.trim();
        const colC = cols[2]?.trim();
        const colD = cols[3]?.trim();
        const colImg = cols[4]?.trim(); // <-- NEU: 5. Spalte Bild

        // ====== Abschnittstrenner: Header soll später wieder kommen ======
        if (colA === "Titel") {
          html += `<div class="title">${colB}</div>`;
          headerInserted = false;
          return;
        }
        if (colA === "Untertitel") {
          html += `<div class="subtitle">${colB}</div>`;
          headerInserted = false;
          return;
        }
        if (colA === "Zwischentitel") {
          html += `<div class="midtitle">${colB}</div>`;
          headerInserted = false;
          return;
        }

        // Beschreibung_fett (wie bei Seite 20 sauber auf Beschreibung-Spalte ausgerichtet)
        if (colA === "Beschreibung_fett") {
          html += `
            <div class="row beschreibung-fett-row">
              <div class="col-a"></div>
              <div class="col-b beschreibung-fett" style="grid-column: 2 / 7;">${colB}</div>
            </div>
          `;
          headerInserted = false;
          return;
        }

        const preis = parseFloat((colD || "").replace(",", "."));
        const preisVorhanden = !isNaN(preis);

        if (preisVorhanden) {

          // Bild aus 5. Spalte
          const imgSrc = resolvePosImg(colImg);

          // Header + Bild DIREKT vor dieser Position
          html += renderHeader21(imgSrc);
          headerInserted = true;

          const menge = gespeicherteWerte[index] || 0;

          html += `
            <div class="row">
              <div class="col-a">${colA}</div>
              <div class="col-b">${colB}</div>
              <div class="col-c">${colC}</div>

              <input class="menge-input"
                     type="number" min="0" step="any"
                     value="${menge}"
                     oninput="calcRow21(this, ${preis}, ${index})">

              <div class="col-d">
                ${preis.toLocaleString("de-DE", { minimumFractionDigits: 2 })} €
              </div>

              <div class="col-e">0,00 €</div>
            </div>
          `;
        } else {
          html += `
            <div class="row no-price">
              <div class="col-a">${colA}</div>
              <div class="col-b" style="grid-column: 2 / 7;">${colB}</div>
            </div>
          `;
          headerInserted = false;
        }
      });

      html += `<div id="gesamtSumme21" class="gesamt">Gesamtsumme: 0,00 €</div>`;
      html += `<div id="gesamtSumme21Rabatt" class="gesamt rabatt" data-rabatt="angebot">
        Gesamtsumme abzgl. SHK-Rabatt (15%): 0,00 €
      </div>`;

      container.innerHTML = html;
      berechneGesamt21();
    });
}

function calcRow21(input, preis, index) {

    const row = input.parentElement;
    const ergebnis = row.querySelector(".col-e");
    const menge = parseFloat(input.value.replace(",", ".")) || 0;

    const sum = menge * preis;
    ergebnis.innerText =
        sum.toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";

    let gespeicherteWerte =
        JSON.parse(localStorage.getItem("page21Data") || "{}");

    gespeicherteWerte[index] = menge;
    localStorage.setItem("page21Data", JSON.stringify(gespeicherteWerte));

    berechneGesamt21();
}

function berechneGesamt21() {

    let sum = 0;

    document.querySelectorAll("#page-21 .col-e").forEach(el => {
        const wert = parseFloat(
            el.innerText.replace("€","")
                       .replace(/\./g,"")
                       .replace(",",".")
                       .trim()
        ) || 0;
        sum += wert;
    });

    saveSeitenSumme("page-21", sum);

    const gesamtDiv = document.getElementById("gesamtSumme21");
    if (gesamtDiv) {
        gesamtDiv.innerText =
            "Gesamtsumme Angebot: " +
            getGesamtAngebotssumme().toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";
    }
}

// -----------------------------
// SEITE 13 – Speicher Huawei (tga22.csv)
// -----------------------------

function loadPage13() {

  const container = document.getElementById("content-13");
  if (!container) return;

  if (container.innerHTML.trim() !== "") return;

  fetch("tga22.csv")
    .then(response => response.text())
    .then(data => {

      const lines = data.split("\n").slice(1);
      let html = "";

      let headerInserted = false;

      const gespeicherteWerte =
        JSON.parse(localStorage.getItem("page13Data") || "{}");

      // Bild-Auflösung: 1..40 -> bildX.jpg (oder direkt Dateiname in CSV)
      function resolvePosImg(colImg) {
        const v = (colImg || "").trim();
        if (!v) return "";
        const n = parseInt(v, 10);
        if (!isNaN(n) && n > 0) return `bild${n}.jpg`;
        return v;
      }

      // Header (mit Bild links)
      function renderHeader13(imgSrc) {
        return `
          <div class="row table-header">
            <div class="header-img-cell">
              ${imgSrc ? `<img src="${imgSrc}" class="header-img" alt="Bild">` : ""}
            </div>
            <div>Beschreibung</div>
            <div>Einheit</div>
            <div style="text-align:center;">Menge</div>
            <div style="text-align:right;">Preis / Einheit</div>
            <div style="text-align:right;">Positionsergebnis</div>
          </div>
        `;
      }

      lines.forEach((line, index) => {
        if (!line.trim()) return;

        const cols = line.split(";");
        const colA = cols[0]?.trim();
        const colB = cols[1]?.trim();
        const colC = cols[2]?.trim();
        const colD = cols[3]?.trim();
        const colImg = cols[4]?.trim(); // <-- NEU: 5. Spalte Bild

        // ====== Abschnittstrenner: Header soll später wieder kommen ======
        if (colA === "Titel") {
          html += `<div class="title">${colB}</div>`;
          headerInserted = false;
          return;
        }
        if (colA === "Untertitel") {
          html += `<div class="subtitle">${colB}</div>`;
          headerInserted = false;
          return;
        }
        if (colA === "Zwischentitel") {
          html += `<div class="midtitle">${colB}</div>`;
          headerInserted = false;
          return;
        }

        // Beschreibung_fett (wie bei Seite 20 sauber auf Beschreibung-Spalte ausgerichtet)
        if (colA === "Beschreibung_fett") {
          html += `
            <div class="row beschreibung-fett-row">
              <div class="col-a"></div>
              <div class="col-b beschreibung-fett" style="grid-column: 2 / 7;">${colB}</div>
            </div>
          `;
          headerInserted = false;
          return;
        }

        const preis = parseFloat((colD || "").replace(",", "."));
        const preisVorhanden = !isNaN(preis);

        if (preisVorhanden) {

          // Bild aus 5. Spalte
          const imgSrc = resolvePosImg(colImg);

          // Header + Bild DIREKT vor dieser Position
          html += renderHeader13(imgSrc);
          headerInserted = true;

          const menge = gespeicherteWerte[index] || 0;

          html += `
            <div class="row">
              <div class="col-a">${colA}</div>
              <div class="col-b">${colB}</div>
              <div class="col-c">${colC}</div>

              <input class="menge-input"
                     type="number" min="0" step="any"
                     value="${menge}"
                     oninput="calcRow13(this, ${preis}, ${index})">

              <div class="col-d">
                ${preis.toLocaleString("de-DE", { minimumFractionDigits: 2 })} €
              </div>

              <div class="col-e">0,00 €</div>
            </div>
          `;
        } else {
          html += `
            <div class="row no-price">
              <div class="col-a">${colA}</div>
              <div class="col-b" style="grid-column: 2 / 7;">${colB}</div>
            </div>
          `;
          headerInserted = false;
        }
      });

      html += `<div id="gesamtSumme13" class="gesamt">Gesamtsumme: 0,00 €</div>`;
      html += `<div id="gesamtSumme13Rabatt" class="gesamt rabatt" data-rabatt="angebot">
        Gesamtsumme abzgl. SHK-Rabatt (15%): 0,00 €
      </div>`;

      container.innerHTML = html;
      berechneGesamt13();
    });
}

function calcRow13(input, preis, index) {

    const row = input.parentElement;
    const ergebnis = row.querySelector(".col-e");
    const menge = parseFloat(input.value.replace(",", ".")) || 0;

    const sum = menge * preis;
    ergebnis.innerText =
        sum.toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";

    let gespeicherteWerte =
        JSON.parse(localStorage.getItem("page13Data") || "{}");

    gespeicherteWerte[index] = menge;
    localStorage.setItem("page13Data", JSON.stringify(gespeicherteWerte));

    berechneGesamt13();
}

function berechneGesamt13() {

    let sum = 0;

    document.querySelectorAll("#page-13 .col-e").forEach(el => {
        const wert = parseFloat(
            el.innerText.replace("€","")
                       .replace(/\./g,"")
                       .replace(",",".")
                       .trim()
        ) || 0;
        sum += wert;
    });

    saveSeitenSumme("page-13", sum);

    const gesamtDiv = document.getElementById("gesamtSumme13");
    if (gesamtDiv) {
        gesamtDiv.innerText =
            "Gesamtsumme Angebot: " +
            getGesamtAngebotssumme().toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";
    }
}

// -----------------------------
// SEITE 26 – Speicher Fronius (tga14.csv)
// -----------------------------

function loadPage26() {

  const container = document.getElementById("content-26");
  if (!container) return;

  if (container.innerHTML.trim() !== "") return;

  fetch("tga14.csv")
    .then(response => response.text())
    .then(data => {

      const lines = data.split("\n").slice(1);
      let html = "";

      let headerInserted = false;

      const gespeicherteWerte =
        JSON.parse(localStorage.getItem("page26Data") || "{}");

      // Bild-Auflösung: 1..40 -> bildX.jpg (oder direkt Dateiname in CSV)
      function resolvePosImg(colImg) {
        const v = (colImg || "").trim();
        if (!v) return "";
        const n = parseInt(v, 10);
        if (!isNaN(n) && n > 0) return `bild${n}.jpg`;
        return v;
      }

      // Header (mit Bild links)
      function renderHeader26(imgSrc) {
        return `
          <div class="row table-header">
            <div class="header-img-cell">
              ${imgSrc ? `<img src="${imgSrc}" class="header-img" alt="Bild">` : ""}
            </div>
            <div>Beschreibung</div>
            <div>Einheit</div>
            <div style="text-align:center;">Menge</div>
            <div style="text-align:right;">Preis / Einheit</div>
            <div style="text-align:right;">Positionsergebnis</div>
          </div>
        `;
      }

      lines.forEach((line, index) => {
        if (!line.trim()) return;

        const cols = line.split(";");
        const colA = cols[0]?.trim();
        const colB = cols[1]?.trim();
        const colC = cols[2]?.trim();
        const colD = cols[3]?.trim();
        const colImg = cols[4]?.trim(); // <-- NEU: 5. Spalte Bild

        // ====== Abschnittstrenner: Header soll später wieder kommen ======
        if (colA === "Titel") {
          html += `<div class="title">${colB}</div>`;
          headerInserted = false;
          return;
        }
        if (colA === "Untertitel") {
          html += `<div class="subtitle">${colB}</div>`;
          headerInserted = false;
          return;
        }
        if (colA === "Zwischentitel") {
          html += `<div class="midtitle">${colB}</div>`;
          headerInserted = false;
          return;
        }

        // Beschreibung_fett (wie bei Seite 20 sauber auf Beschreibung-Spalte ausgerichtet)
        if (colA === "Beschreibung_fett") {
          html += `
            <div class="row beschreibung-fett-row">
              <div class="col-a"></div>
              <div class="col-b beschreibung-fett" style="grid-column: 2 / 7;">${colB}</div>
            </div>
          `;
          headerInserted = false;
          return;
        }

        const preis = parseFloat((colD || "").replace(",", "."));
        const preisVorhanden = !isNaN(preis);

        if (preisVorhanden) {

          // Bild aus 5. Spalte
          const imgSrc = resolvePosImg(colImg);

          // Header + Bild DIREKT vor dieser Position
          html += renderHeader26(imgSrc);
          headerInserted = true;

          const menge = gespeicherteWerte[index] || 0;

          html += `
            <div class="row">
              <div class="col-a">${colA}</div>
              <div class="col-b">${colB}</div>
              <div class="col-c">${colC}</div>

              <input class="menge-input"
                     type="number" min="0" step="any"
                     value="${menge}"
                     oninput="calcRow26(this, ${preis}, ${index})">

              <div class="col-d">
                ${preis.toLocaleString("de-DE", { minimumFractionDigits: 2 })} €
              </div>

              <div class="col-e">0,00 €</div>
            </div>
          `;
        } else {
          html += `
            <div class="row no-price">
              <div class="col-a">${colA}</div>
              <div class="col-b" style="grid-column: 2 / 7;">${colB}</div>
            </div>
          `;
          headerInserted = false;
        }
      });

      html += `<div id="gesamtSumme26" class="gesamt">Gesamtsumme: 0,00 €</div>`;
      html += `<div id="gesamtSumme26Rabatt" class="gesamt rabatt" data-rabatt="angebot">
        Gesamtsumme abzgl. SHK-Rabatt (15%): 0,00 €
      </div>`;

      container.innerHTML = html;
      berechneGesamt26();
    });
}

function calcRow26(input, preis, index) {

    const row = input.parentElement;
    const ergebnis = row.querySelector(".col-e");
    const menge = parseFloat(input.value.replace(",", ".")) || 0;

    const sum = menge * preis;
    ergebnis.innerText =
        sum.toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";

    let gespeicherteWerte =
        JSON.parse(localStorage.getItem("page26Data") || "{}");

    gespeicherteWerte[index] = menge;
    localStorage.setItem("page26Data", JSON.stringify(gespeicherteWerte));

    berechneGesamt26();
}

function berechneGesamt26() {

    let sum = 0;

    document.querySelectorAll("#page-26 .col-e").forEach(el => {
        const wert = parseFloat(
            el.innerText.replace("€","")
                       .replace(/\./g,"")
                       .replace(",",".")
                       .trim()
        ) || 0;
        sum += wert;
    });

    saveSeitenSumme("page-26", sum);

    const gesamtDiv = document.getElementById("gesamtSumme26");
    if (gesamtDiv) {
        gesamtDiv.innerText =
            "Gesamtsumme Angebot: " +
            getGesamtAngebotssumme().toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";
    }
}

// -----------------------------
// SEITE 14.3 – Wechselrichter hybrid a-TroniX (tga13.csv)
// -----------------------------

function loadPage143() {

  const container = document.getElementById("content-143");
  if (!container) return;

  if (container.innerHTML.trim() !== "") return;

  fetch("tga13.csv")
    .then(response => response.text())
    .then(data => {

      const lines = data.split("\n").slice(1);
      let html = "";

      let headerInserted = false;

      const gespeicherteWerte =
        JSON.parse(localStorage.getItem("page143Data") || "{}");

      // Bild-Auflösung: 1..40 -> bildX.jpg (oder direkt Dateiname in CSV)
      function resolvePosImg(colImg) {
        const v = (colImg || "").trim();
        if (!v) return "";
        const n = parseInt(v, 10);
        if (!isNaN(n) && n > 0) return `bild${n}.jpg`;
        return v;
      }

      // Header (mit Bild links)
      function renderHeader143(imgSrc) {
        return `
          <div class="row table-header">
            <div class="header-img-cell">
              ${imgSrc ? `<img src="${imgSrc}" class="header-img" alt="Bild">` : ""}
            </div>
            <div>Beschreibung</div>
            <div>Einheit</div>
            <div style="text-align:center;">Menge</div>
            <div style="text-align:right;">Preis / Einheit</div>
            <div style="text-align:right;">Positionsergebnis</div>
          </div>
        `;
      }

      lines.forEach((line, index) => {
        if (!line.trim()) return;

        const cols = line.split(";");
        const colA = cols[0]?.trim();
        const colB = cols[1]?.trim();
        const colC = cols[2]?.trim();
        const colD = cols[3]?.trim();
        const colImg = cols[4]?.trim(); // <-- NEU: 5. Spalte Bild

        // ====== Abschnittstrenner: Header soll später wieder kommen ======
        if (colA === "Titel") {
          html += `<div class="title">${colB}</div>`;
          headerInserted = false;
          return;
        }
        if (colA === "Untertitel") {
          html += `<div class="subtitle">${colB}</div>`;
          headerInserted = false;
          return;
        }
        if (colA === "Zwischentitel") {
          html += `<div class="midtitle">${colB}</div>`;
          headerInserted = false;
          return;
        }

        // Beschreibung_fett (wie bei Seite 20 sauber auf Beschreibung-Spalte ausgerichtet)
        if (colA === "Beschreibung_fett") {
          html += `
            <div class="row beschreibung-fett-row">
              <div class="col-a"></div>
              <div class="col-b beschreibung-fett" style="grid-column: 2 / 7;">${colB}</div>
            </div>
          `;
          headerInserted = false;
          return;
        }

        const preis = parseFloat((colD || "").replace(",", "."));
        const preisVorhanden = !isNaN(preis);

        if (preisVorhanden) {

          // Bild aus 5. Spalte
          const imgSrc = resolvePosImg(colImg);

          // Header + Bild DIREKT vor dieser Position
          html += renderHeader143(imgSrc);
          headerInserted = true;

          const menge = gespeicherteWerte[index] || 0;

          html += `
            <div class="row">
              <div class="col-a">${colA}</div>
              <div class="col-b">${colB}</div>
              <div class="col-c">${colC}</div>

              <input class="menge-input"
                     type="number" min="0" step="any"
                     value="${menge}"
                     oninput="calcRow143(this, ${preis}, ${index})">

              <div class="col-d">
                ${preis.toLocaleString("de-DE", { minimumFractionDigits: 2 })} €
              </div>

              <div class="col-e">0,00 €</div>
            </div>
          `;
        } else {
          html += `
            <div class="row no-price">
              <div class="col-a">${colA}</div>
              <div class="col-b" style="grid-column: 2 / 7;">${colB}</div>
            </div>
          `;
          headerInserted = false;
        }
      });

      html += `<div id="gesamtSumme143" class="gesamt">Gesamtsumme: 0,00 €</div>`;
      html += `<div id="gesamtSumme143Rabatt" class="gesamt rabatt" data-rabatt="angebot">
        Gesamtsumme abzgl. SHK-Rabatt (15%): 0,00 €
      </div>`;

      container.innerHTML = html;
      berechneGesamt143();
    });
}

function calcRow143(input, preis, index) {

    const row = input.parentElement;
    const ergebnis = row.querySelector(".col-e");
    const menge = parseFloat(input.value.replace(",", ".")) || 0;

    const sum = menge * preis;
    ergebnis.innerText =
        sum.toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";

    let gespeicherteWerte =
        JSON.parse(localStorage.getItem("page143Data") || "{}");

    gespeicherteWerte[index] = menge;
    localStorage.setItem("page143Data", JSON.stringify(gespeicherteWerte));

    berechneGesamt143();
}

function berechneGesamt143() {

    let sum = 0;

    document.querySelectorAll("#page-14-3 .col-e").forEach(el => {
        const wert = parseFloat(
            el.innerText.replace("€","")
                       .replace(/\./g,"")
                       .replace(",",".")
                       .trim()
        ) || 0;
        sum += wert;
    });

    saveSeitenSumme("page-14-3", sum);

    const gesamtDiv = document.getElementById("gesamtSumme143");
    if (gesamtDiv) {
        gesamtDiv.innerText =
            "Gesamtsumme Angebot: " +
            getGesamtAngebotssumme().toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";
    }
}

// -----------------------------
// SEITE 22 – Extras (Zählerschrank) (tga11.csv)
// -----------------------------

function loadPage22() {

  const container = document.getElementById("content-22");
  if (!container) return;

  if (container.innerHTML.trim() !== "") return;

  fetch("tga11.csv")
    .then(response => response.text())
    .then(data => {

      const lines = data.split("\n").slice(1);
      let html = "";

      let headerInserted = false;

      const gespeicherteWerte =
        JSON.parse(localStorage.getItem("page22Data") || "{}");

      // Bild-Auflösung: 1..40 -> bildX.jpg (oder direkt Dateiname in CSV)
      function resolvePosImg(colImg) {
        const v = (colImg || "").trim();
        if (!v) return "";
        const n = parseInt(v, 10);
        if (!isNaN(n) && n > 0) return `bild${n}.jpg`;
        return v;
      }

      // Header (mit Bild links)
      function renderHeader22(imgSrc) {
        return `
          <div class="row table-header">
            <div class="header-img-cell">
              ${imgSrc ? `<img src="${imgSrc}" class="header-img" alt="Bild">` : ""}
            </div>
            <div>Beschreibung</div>
            <div>Einheit</div>
            <div style="text-align:center;">Menge</div>
            <div style="text-align:right;">Preis / Einheit</div>
            <div style="text-align:right;">Positionsergebnis</div>
          </div>
        `;
      }

      lines.forEach((line, index) => {
        if (!line.trim()) return;

        const cols = line.split(";");
        const colA = cols[0]?.trim();
        const colB = cols[1]?.trim();
        const colC = cols[2]?.trim();
        const colD = cols[3]?.trim();
        const colImg = cols[4]?.trim(); // <-- NEU: 5. Spalte Bild

        // ====== Abschnittstrenner: Header soll später wieder kommen ======
        if (colA === "Titel") {
          html += `<div class="title">${colB}</div>`;
          headerInserted = false;
          return;
        }
        if (colA === "Untertitel") {
          html += `<div class="subtitle">${colB}</div>`;
          headerInserted = false;
          return;
        }
        if (colA === "Zwischentitel") {
          html += `<div class="midtitle">${colB}</div>`;
          headerInserted = false;
          return;
        }

        // Beschreibung_fett sauber auf Beschreibung-Spalte ausgerichtet
        if (colA === "Beschreibung_fett") {
          html += `
            <div class="row beschreibung-fett-row">
              <div class="col-a"></div>
              <div class="col-b beschreibung-fett" style="grid-column: 2 / 7;">${colB}</div>
            </div>
          `;
          headerInserted = false;
          return;
        }

        const preis = parseFloat((colD || "").replace(",", "."));
        const preisVorhanden = !isNaN(preis);

        if (preisVorhanden) {

          const imgSrc = resolvePosImg(colImg);

          // Header + Bild DIREKT vor dieser Position
          html += renderHeader22(imgSrc);
          headerInserted = true;

          const menge = gespeicherteWerte[index] || 0;

          html += `
            <div class="row">
              <div class="col-a">${colA}</div>
              <div class="col-b">${colB}</div>
              <div class="col-c">${colC}</div>

              <input class="menge-input"
                     type="number" min="0" step="any"
                     value="${menge}"
                     oninput="calcRow22(this, ${preis}, ${index})">

              <div class="col-d">
                ${preis.toLocaleString("de-DE", { minimumFractionDigits: 2 })} €
              </div>

              <div class="col-e">0,00 €</div>
            </div>
          `;
        } else {
          html += `
            <div class="row no-price">
              <div class="col-a">${colA}</div>
              <div class="col-b" style="grid-column: 2 / 7;">${colB}</div>
            </div>
          `;
          headerInserted = false;
        }
      });

      html += `<div id="gesamtSumme22" class="gesamt">Gesamtsumme: 0,00 €</div>`;
      html += `<div id="gesamtSumme22Rabatt" class="gesamt rabatt" data-rabatt="angebot">
        Gesamtsumme abzgl. SHK-Rabatt (15%): 0,00 €
      </div>`;

      container.innerHTML = html;
      berechneGesamt22();
    });
}

function calcRow22(input, preis, index) {

    const row = input.parentElement;
    const ergebnis = row.querySelector(".col-e");
    const menge = parseFloat(input.value.replace(",", ".")) || 0;

    const sum = menge * preis;
    ergebnis.innerText =
        sum.toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";

    let gespeicherteWerte =
        JSON.parse(localStorage.getItem("page22Data") || "{}");

    gespeicherteWerte[index] = menge;
    localStorage.setItem("page22Data", JSON.stringify(gespeicherteWerte));

    berechneGesamt22();
}

function berechneGesamt22() {

    let sum = 0;

    document.querySelectorAll("#page-22 .col-e").forEach(el => {
        const wert = parseFloat(
            el.innerText.replace("€","")
                       .replace(/\./g,"")
                       .replace(",",".")
                       .trim()
        ) || 0;
        sum += wert;
    });

    saveSeitenSumme("page-22", sum);

    const gesamtDiv = document.getElementById("gesamtSumme22");
    if (gesamtDiv) {
        gesamtDiv.innerText =
            "Gesamtsumme Angebot: " +
            getGesamtAngebotssumme().toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";
    }
}

// -----------------------------
// SEITE 9 – Gerüst (tga3.csv)
// -----------------------------

function loadPage9() {

    const container = document.getElementById("content-9");
    if (!container) return;

    if (container.innerHTML.trim() !== "") return;

    fetch("tga3.csv")
        .then(response => response.text())
        .then(data => {

            const lines = data.split("\n").slice(1);
            let html = "";
		let headerInserted = false;

            const gespeicherteWerte =
                JSON.parse(localStorage.getItem("page9Data") || "{}");

            lines.forEach((line, index) => {
                if (!line.trim()) return;

                const cols = line.split(";");
                const colA = cols[0]?.trim();
                const colB = cols[1]?.trim();
                const colC = cols[2]?.trim();
                const colD = cols[3]?.trim();

                if (colA === "Titel") {
                    html += `<div class="title">${colB}</div>`;
                    return;
                }
                if (colA === "Untertitel") {
                    html += `<div class="subtitle">${colB}</div>`;
                    return;
                }
                if (colA === "Zwischentitel") {
                    html += `<div class="midtitle">${colB}</div>`;
                    return;
                }
if (colA === "Beschreibung_fett") {
  html += `
    <div class="row beschreibung-fett-row">
      <div class="col-a"></div>
      <div class="col-b beschreibung-fett">${colB}</div>
      <div class="col-c"></div>
      <div class="col-d"></div>
      <div class="col-e"></div>
      <div class="col-f"></div>
    </div>
  `;
  return;
}

                const preis = parseFloat(colD?.replace(",", "."));
                if (!isNaN(preis)) {

if (!headerInserted) {
        html += `
          <div class="row table-header">
            <div></div>
            <div>Beschreibung</div>
            <div>Einheit</div>
            <div style="text-align:center;">Menge</div>
            <div style="text-align:right;">Preis / Einheit</div>
            <div style="text-align:right;">Positionsergebnis</div>
          </div>
        `;
        headerInserted = true;
}

                    const menge = gespeicherteWerte[index] || 0;

                    html += `
                        <div class="row">
                            <div class="col-a">${colA}</div>
                            <div class="col-b">${colB}</div>
                            <div class="col-c">${colC}</div>

                            <input class="menge-input"
                                   type="number" min="0" step="any"
                                   value="${menge}"
                                   oninput="calcRow9(this, ${preis}, ${index})">

                            <div class="col-d">
                                ${preis.toLocaleString("de-DE",{minimumFractionDigits:2})} €
                            </div>

                            <div class="col-e">0,00 €</div>
                        </div>`;
                } else {
                    html += `
                        <div class="row no-price">
                            <div class="col-a">${colA}</div>
                            <div class="col-b" style="grid-column: 2 / 7;">${colB}</div>
                        </div>`;
                }
            });

            html += `<div id="gesamtSumme9" class="gesamt">Gesamtsumme: 0,00 €</div>`;
            html += `<div id="gesamtSumme9Rabatt" class="gesamt rabatt" data-rabatt="angebot">
          Gesamtsumme abzgl. SHK-Rabatt (15%): 0,00 €
         </div>`;

            container.innerHTML = html;
            berechneGesamt9();
        });
}

function calcRow9(input, preis, index) {

    const row = input.parentElement;
    const ergebnis = row.querySelector(".col-e");
    const menge = parseFloat(input.value.replace(",", ".")) || 0;

    const sum = menge * preis;
    ergebnis.innerText =
        sum.toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";

    let gespeicherteWerte =
        JSON.parse(localStorage.getItem("page9Data") || "{}");

    gespeicherteWerte[index] = menge;
    localStorage.setItem("page9Data", JSON.stringify(gespeicherteWerte));

    berechneGesamt9();
}

function berechneGesamt9() {

    let sum = 0;

    document.querySelectorAll("#page-9 .col-e").forEach(el => {
        const wert = parseFloat(
            el.innerText.replace("€","")
                       .replace(/\./g,"")
                       .replace(",",".")
                       .trim()
        ) || 0;
        sum += wert;
    });

    saveSeitenSumme("page-9", sum);

    const gesamtDiv = document.getElementById("gesamtSumme9");
    if (gesamtDiv) {
        gesamtDiv.innerText =
            "Gesamtsumme Angebot: " +
            getGesamtAngebotssumme().toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";
    }
}

// -----------------------------
// SEITE 10 – Speicher (tga6.csv)
// -----------------------------

function loadPage10() {

    const container = document.getElementById("content-10");
    if (!container) return;

    if (container.innerHTML.trim() !== "") return;

    fetch("tga6.csv")
        .then(response => response.text())
        .then(data => {

            const lines = data.split("\n").slice(1);
            let html = "";
		let headerInserted = false;

            const gespeicherteWerte =
                JSON.parse(localStorage.getItem("page10Data") || "{}");

      // Bild-Auflösung: 1..40 -> bildX.jpg (oder direkt Dateiname in CSV)
      function resolvePosImg(colImg) {
        const v = (colImg || "").trim();
        if (!v) return "";
        const n = parseInt(v, 10);
        if (!isNaN(n) && n > 0) return `bild${n}.jpg`;
        return v;
      }

      // Header (mit Bild links)
      function renderHeader10(imgSrc) {
        return `
          <div class="row table-header">
            <div class="header-img-cell">
              ${imgSrc ? `<img src="${imgSrc}" class="header-img" alt="Bild">` : ""}
            </div>
            <div>Beschreibung</div>
            <div>Einheit</div>
            <div style="text-align:center;">Menge</div>
            <div style="text-align:right;">Preis / Einheit</div>
            <div style="text-align:right;">Positionsergebnis</div>
          </div>
        `;
      }

      lines.forEach((line, index) => {
        if (!line.trim()) return;

        const cols = line.split(";");
        const colA = cols[0]?.trim();
        const colB = cols[1]?.trim();
        const colC = cols[2]?.trim();
        const colD = cols[3]?.trim();
        const colImg = cols[4]?.trim(); // <-- NEU: 5. Spalte Bild

        // ====== Abschnittstrenner: Header soll später wieder kommen ======
        if (colA === "Titel") {
          html += `<div class="title">${colB}</div>`;
          headerInserted = false;
          return;
        }
        if (colA === "Untertitel") {
          html += `<div class="subtitle">${colB}</div>`;
          headerInserted = false;
          return;
        }
        if (colA === "Zwischentitel") {
          html += `<div class="midtitle">${colB}</div>`;
          headerInserted = false;
          return;
        }

        // Beschreibung_fett (wie bei Seite 20 sauber auf Beschreibung-Spalte ausgerichtet)
        if (colA === "Beschreibung_fett") {
          html += `
            <div class="row beschreibung-fett-row">
              <div class="col-a"></div>
              <div class="col-b beschreibung-fett" style="grid-column: 2 / 7;">${colB}</div>
            </div>
          `;
          headerInserted = false;
          return;
        }

        const preis = parseFloat((colD || "").replace(",", "."));
        const preisVorhanden = !isNaN(preis);

        if (preisVorhanden) {

          // Bild aus 5. Spalte
          const imgSrc = resolvePosImg(colImg);

          // Header + Bild DIREKT vor dieser Position
          html += renderHeader10(imgSrc);
          headerInserted = true;

          const menge = gespeicherteWerte[index] || 0;

          html += `
            <div class="row">
              <div class="col-a">${colA}</div>
              <div class="col-b">${colB}</div>
              <div class="col-c">${colC}</div>

              <input class="menge-input"
                     type="number" min="0" step="any"
                     value="${menge}"
                     oninput="calcRow10(this, ${preis}, ${index})">

              <div class="col-d">
                ${preis.toLocaleString("de-DE", { minimumFractionDigits: 2 })} €
              </div>

              <div class="col-e">0,00 €</div>
            </div>
          `;
        } else {
          html += `
            <div class="row no-price">
              <div class="col-a">${colA}</div>
              <div class="col-b" style="grid-column: 2 / 7;">${colB}</div>
            </div>
          `;
          headerInserted = false;
        }
      });

      html += `<div id="gesamtSumme10" class="gesamt">Gesamtsumme: 0,00 €</div>`;
      html += `<div id="gesamtSumme10Rabatt" class="gesamt rabatt" data-rabatt="angebot">
        Gesamtsumme abzgl. SHK-Rabatt (15%): 0,00 €
      </div>`;

      container.innerHTML = html;
      berechneGesamt10();
    });
}

function calcRow10(input, preis, index) {

    const row = input.parentElement;
    const ergebnis = row.querySelector(".col-e");
    const menge = parseFloat(input.value.replace(",", ".")) || 0;

    const sum = menge * preis;
    ergebnis.innerText =
        sum.toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";

    let gespeicherteWerte =
        JSON.parse(localStorage.getItem("page10Data") || "{}");

    gespeicherteWerte[index] = menge;
    localStorage.setItem("page10Data", JSON.stringify(gespeicherteWerte));

    berechneGesamt10();
}

function berechneGesamt10() {

    let sum = 0;

    document.querySelectorAll("#page-10 .col-e").forEach(el => {
        const wert = parseFloat(
            el.innerText.replace("€","")
                       .replace(/\./g,"")
                       .replace(",",".")
                       .trim()
        ) || 0;
        sum += wert;
    });

    saveSeitenSumme("page-10", sum);

    const gesamtDiv = document.getElementById("gesamtSumme10");
    if (gesamtDiv) {
        gesamtDiv.innerText =
            "Gesamtsumme Angebot: " +
            getGesamtAngebotssumme().toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";
    }
}

// -----------------------------
// SEITE 23 – Schrägdach (tga1.csv)
// -----------------------------

function loadPage23() {

    const container = document.getElementById("content-23");
    if (!container) return;

    if (container.innerHTML.trim() !== "") return;

    fetch("tga1.csv")
        .then(response => response.text())
        .then(data => {

            const lines = data.split("\n").slice(1);
            let html = "";
		let headerInserted = false;

            const gespeicherteWerte =
                JSON.parse(localStorage.getItem("page23Data") || "{}");

            lines.forEach((line, index) => {
                if (!line.trim()) return;

                const cols = line.split(";");
                const colA = cols[0]?.trim();
                const colB = cols[1]?.trim();
                const colC = cols[2]?.trim();
                const colD = cols[3]?.trim();

                if (colA === "Titel") {
                    html += `<div class="title">${colB}</div>`;
                    return;
                }
                if (colA === "Untertitel") {
                    html += `<div class="subtitle">${colB}</div>`;
                    return;
                }
                if (colA === "Zwischentitel") {
                    html += `<div class="midtitle">${colB}</div>`;
                    return;
                }
if (colA === "Beschreibung_fett") {
  html += `
    <div class="row beschreibung-fett-row">
      <div class="col-a"></div>
      <div class="col-b beschreibung-fett">${colB}</div>
      <div class="col-c"></div>
      <div class="col-d"></div>
      <div class="col-e"></div>
      <div class="col-f"></div>
    </div>
  `;
  return;
}

                const preis = parseFloat(colD?.replace(",", "."));
                if (!isNaN(preis)) {

if (!headerInserted) {
        html += `
          <div class="row table-header">
            <div class="header-img-cell">
          <img src="bild1.jpg" class="header-img" alt="Bild">
        </div>
            <div>Beschreibung</div>
            <div>Einheit</div>
            <div style="text-align:center;">Menge</div>
            <div style="text-align:right;">Preis / Einheit</div>
            <div style="text-align:right;">Positionsergebnis</div>
          </div>
        `;
        headerInserted = true;
}


                    const menge = gespeicherteWerte[index] || 0;

                    html += `
                        <div class="row">
                            <div class="col-a">${colA}</div>
                            <div class="col-b">${colB}</div>
                            <div class="col-c">${colC}</div>

                            <input class="menge-input"
                                   type="number" min="0" step="any"
                                   value="${menge}"
                                   oninput="calcRow23(this, ${preis}, ${index})">

                            <div class="col-d">
                                ${preis.toLocaleString("de-DE",{minimumFractionDigits:2})} €
                            </div>

                            <div class="col-e">0,00 €</div>
                        </div>`;
                } else {
                    html += `
                        <div class="row no-price">
                            <div class="col-a">${colA}</div>
                            <div class="col-b" style="grid-column: 2 / 7;">${colB}</div>
                        </div>`;
                }
            });

            html += `<div id="gesamtSumme23" class="gesamt">Gesamtsumme: 0,00 €</div>`;
            html += `<div id="gesamtSumme23Rabatt" class="gesamt rabatt" data-rabatt="angebot">
          Gesamtsumme abzgl. SHK-Rabatt (15%): 0,00 €
         </div>`;

            container.innerHTML = html;
            berechneGesamt23();
        });
}

function calcRow23(input, preis, index) {

    const row = input.parentElement;
    const ergebnis = row.querySelector(".col-e");
    const menge = parseFloat(input.value.replace(",", ".")) || 0;

    const sum = menge * preis;
    ergebnis.innerText =
        sum.toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";

    let gespeicherteWerte =
        JSON.parse(localStorage.getItem("page23Data") || "{}");

    gespeicherteWerte[index] = menge;
    localStorage.setItem("page23Data", JSON.stringify(gespeicherteWerte));

    berechneGesamt23();
}

function berechneGesamt23() {

    let sum = 0;

    document.querySelectorAll("#page-23 .col-e").forEach(el => {
        const wert = parseFloat(
            el.innerText.replace("€","")
                       .replace(/\./g,"")
                       .replace(",",".")
                       .trim()
        ) || 0;
        sum += wert;
    });

    saveSeitenSumme("page-23", sum);

    const gesamtDiv = document.getElementById("gesamtSumme23");
    if (gesamtDiv) {
        gesamtDiv.innerText =
            "Gesamtsumme Angebot: " +
            getGesamtAngebotssumme().toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";
    }
}

// -----------------------------
// SEITE 24 – Flachdach (tga2.csv)
// -----------------------------

function loadPage24() {

    const container = document.getElementById("content-24");
    if (!container) return;

    if (container.innerHTML.trim() !== "") return;

    fetch("tga2.csv")
        .then(response => response.text())
        .then(data => {

            const lines = data.split("\n").slice(1);
            let html = "";
		let headerInserted = false;

            const gespeicherteWerte =
                JSON.parse(localStorage.getItem("page24Data") || "{}");

            lines.forEach((line, index) => {
                if (!line.trim()) return;

                const cols = line.split(";");
                const colA = cols[0]?.trim();
                const colB = cols[1]?.trim();
                const colC = cols[2]?.trim();
                const colD = cols[3]?.trim();

                if (colA === "Titel") {
                    html += `<div class="title">${colB}</div>`;
                    return;
                }
                if (colA === "Untertitel") {
                    html += `<div class="subtitle">${colB}</div>`;
                    return;
                }
                if (colA === "Zwischentitel") {
                    html += `<div class="midtitle">${colB}</div>`;
                    return;
                }
if (colA === "Beschreibung_fett") {
  html += `
    <div class="row beschreibung-fett-row">
      <div class="col-a"></div>
      <div class="col-b beschreibung-fett">${colB}</div>
      <div class="col-c"></div>
      <div class="col-d"></div>
      <div class="col-e"></div>
      <div class="col-f"></div>
    </div>
  `;
  return;
}

                const preis = parseFloat(colD?.replace(",", "."));
                if (!isNaN(preis)) {

if (!headerInserted) {
        html += `
          <div class="row table-header">
            <div class="header-img-cell">
          <img src="bild1.jpg" class="header-img" alt="Bild">
        </div>
            <div>Beschreibung</div>
            <div>Einheit</div>
            <div style="text-align:center;">Menge</div>
            <div style="text-align:right;">Preis / Einheit</div>
            <div style="text-align:right;">Positionsergebnis</div>
          </div>
        `;
        headerInserted = true;
}


                    const menge = gespeicherteWerte[index] || 0;

                    html += `
                        <div class="row">
                            <div class="col-a">${colA}</div>
                            <div class="col-b">${colB}</div>
                            <div class="col-c">${colC}</div>

                            <input class="menge-input"
                                   type="number" min="0" step="any"
                                   value="${menge}"
                                   oninput="calcRow24(this, ${preis}, ${index})">

                            <div class="col-d">
                                ${preis.toLocaleString("de-DE",{minimumFractionDigits:2})} €
                            </div>

                            <div class="col-e">0,00 €</div>
                        </div>`;
                } else {
                    html += `
                        <div class="row no-price">
                            <div class="col-a">${colA}</div>
                            <div class="col-b" style="grid-column: 2 / 7;">${colB}</div>
                        </div>`;
                }
            });

            html += `<div id="gesamtSumme24" class="gesamt">Gesamtsumme: 0,00 €</div>`;
            html += `<div id="gesamtSumme24Rabatt" class="gesamt rabatt" data-rabatt="angebot">
          Gesamtsumme abzgl. SHK-Rabatt (15%): 0,00 €
         </div>`;

            container.innerHTML = html;
            berechneGesamt24();
        });
}

function calcRow24(input, preis, index) {

    const row = input.parentElement;
    const ergebnis = row.querySelector(".col-e");
    const menge = parseFloat(input.value.replace(",", ".")) || 0;

    const sum = menge * preis;
    ergebnis.innerText =
        sum.toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";

    let gespeicherteWerte =
        JSON.parse(localStorage.getItem("page24Data") || "{}");

    gespeicherteWerte[index] = menge;
    localStorage.setItem("page24Data", JSON.stringify(gespeicherteWerte));

    berechneGesamt24();
}

function berechneGesamt24() {

    let sum = 0;

    document.querySelectorAll("#page-24 .col-e").forEach(el => {
        const wert = parseFloat(
            el.innerText.replace("€","")
                       .replace(/\./g,"")
                       .replace(",",".")
                       .trim()
        ) || 0;
        sum += wert;
    });

    saveSeitenSumme("page-24", sum);

    const gesamtDiv = document.getElementById("gesamtSumme24");
    if (gesamtDiv) {
        gesamtDiv.innerText =
            "Gesamtsumme Angebot: " +
            getGesamtAngebotssumme().toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";
    }
}

// -----------------------------
// SEITE 30 – Wallbox SMA (tga17.csv)
// -----------------------------

function loadPage30() {

    const container = document.getElementById("content-30");
    if (!container) return;

    if (container.innerHTML.trim() !== "") return;

    fetch("tga17.csv")
        .then(response => response.text())
        .then(data => {

            const lines = data.split("\n").slice(1);
            let html = "";
		let headerInserted = false;

            const gespeicherteWerte =
                JSON.parse(localStorage.getItem("page30Data") || "{}");

            lines.forEach((line, index) => {
                if (!line.trim()) return;

                const cols = line.split(";");
                const colA = cols[0]?.trim();
                const colB = cols[1]?.trim();
                const colC = cols[2]?.trim();
                const colD = cols[3]?.trim();

                if (colA === "Titel") {
                    html += `<div class="title">${colB}</div>`;
                    return;
                }
                if (colA === "Untertitel") {
                    html += `<div class="subtitle">${colB}</div>`;
                    return;
                }
                if (colA === "Zwischentitel") {
                    html += `<div class="midtitle">${colB}</div>`;
                    return;
                }
if (colA === "Beschreibung_fett") {
  html += `
    <div class="row beschreibung-fett-row">
      <div class="col-a"></div>
      <div class="col-b beschreibung-fett">${colB}</div>
      <div class="col-c"></div>
      <div class="col-d"></div>
      <div class="col-e"></div>
      <div class="col-f"></div>
    </div>
  `;
  return;
}

                const preis = parseFloat(colD?.replace(",", "."));
                if (!isNaN(preis)) {

if (!headerInserted) {
        html += `
          <div class="row table-header">
            <div class="header-img-cell">
          <img src="bild31.jpg" class="header-img" alt="Bild">
        </div>
            <div>Beschreibung</div>
            <div>Einheit</div>
            <div style="text-align:center;">Menge</div>
            <div style="text-align:right;">Preis / Einheit</div>
            <div style="text-align:right;">Positionsergebnis</div>
          </div>
        `;
        headerInserted = true;
}


                    const menge = gespeicherteWerte[index] || 0;

                    html += `
                        <div class="row">
                            <div class="col-a">${colA}</div>
                            <div class="col-b">${colB}</div>
                            <div class="col-c">${colC}</div>

                            <input class="menge-input"
                                   type="number" min="0" step="any"
                                   value="${menge}"
                                   oninput="calcRow30(this, ${preis}, ${index})">

                            <div class="col-d">
                                ${preis.toLocaleString("de-DE",{minimumFractionDigits:2})} €
                            </div>

                            <div class="col-e">0,00 €</div>
                        </div>`;
                } else {
                    html += `
                        <div class="row no-price">
                            <div class="col-a">${colA}</div>
                            <div class="col-b" style="grid-column: 2 / 7;">${colB}</div>
                        </div>`;
                }
            });

            html += `<div id="gesamtSumme30" class="gesamt">Gesamtsumme: 0,00 €</div>`;
            html += `<div id="gesamtSumme30Rabatt" class="gesamt rabatt" data-rabatt="angebot">
          Gesamtsumme abzgl. SHK-Rabatt (15%): 0,00 €
         </div>`;

            container.innerHTML = html;
            berechneGesamt30();
        });
}

function calcRow30(input, preis, index) {

    const row = input.parentElement;
    const ergebnis = row.querySelector(".col-e");
    const menge = parseFloat(input.value.replace(",", ".")) || 0;

    const sum = menge * preis;
    ergebnis.innerText =
        sum.toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";

    let gespeicherteWerte =
        JSON.parse(localStorage.getItem("page30Data") || "{}");

    gespeicherteWerte[index] = menge;
    localStorage.setItem("page30Data", JSON.stringify(gespeicherteWerte));

    berechneGesamt30();
}

function berechneGesamt30() {

    let sum = 0;

    document.querySelectorAll("#page-30 .col-e").forEach(el => {
        const wert = parseFloat(
            el.innerText.replace("€","")
                       .replace(/\./g,"")
                       .replace(",",".")
                       .trim()
        ) || 0;
        sum += wert;
    });

    saveSeitenSumme("page-30", sum);

    const gesamtDiv = document.getElementById("gesamtSumme30");
    if (gesamtDiv) {
        gesamtDiv.innerText =
            "Gesamtsumme Angebot: " +
            getGesamtAngebotssumme().toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";
    }
}

// -----------------------------
// SEITE 25 – Speicher a-TroniX (tga14.csv)
// -----------------------------

function loadPage25() {

    const container = document.getElementById("content-25");
    if (!container) return;

    if (container.innerHTML.trim() !== "") return;

    fetch("tga14.csv")
        .then(response => response.text())
        .then(data => {

            const lines = data.split("\n").slice(1);
            let html = "";
		let headerInserted = false;

            const gespeicherteWerte =
                JSON.parse(localStorage.getItem("page25Data") || "{}");

      // Bild-Auflösung: 1..40 -> bildX.jpg (oder direkt Dateiname in CSV)
      function resolvePosImg(colImg) {
        const v = (colImg || "").trim();
        if (!v) return "";
        const n = parseInt(v, 10);
        if (!isNaN(n) && n > 0) return `bild${n}.jpg`;
        return v;
      }

      // Header (mit Bild links)
      function renderHeader25(imgSrc) {
        return `
          <div class="row table-header">
            <div class="header-img-cell">
              ${imgSrc ? `<img src="${imgSrc}" class="header-img" alt="Bild">` : ""}
            </div>
            <div>Beschreibung</div>
            <div>Einheit</div>
            <div style="text-align:center;">Menge</div>
            <div style="text-align:right;">Preis / Einheit</div>
            <div style="text-align:right;">Positionsergebnis</div>
          </div>
        `;
      }

      lines.forEach((line, index) => {
        if (!line.trim()) return;

        const cols = line.split(";");
        const colA = cols[0]?.trim();
        const colB = cols[1]?.trim();
        const colC = cols[2]?.trim();
        const colD = cols[3]?.trim();
        const colImg = cols[4]?.trim(); // <-- NEU: 5. Spalte Bild

        // ====== Abschnittstrenner: Header soll später wieder kommen ======
        if (colA === "Titel") {
          html += `<div class="title">${colB}</div>`;
          headerInserted = false;
          return;
        }
        if (colA === "Untertitel") {
          html += `<div class="subtitle">${colB}</div>`;
          headerInserted = false;
          return;
        }
        if (colA === "Zwischentitel") {
          html += `<div class="midtitle">${colB}</div>`;
          headerInserted = false;
          return;
        }

        // Beschreibung_fett (wie bei Seite 20 sauber auf Beschreibung-Spalte ausgerichtet)
        if (colA === "Beschreibung_fett") {
          html += `
            <div class="row beschreibung-fett-row">
              <div class="col-a"></div>
              <div class="col-b beschreibung-fett" style="grid-column: 2 / 7;">${colB}</div>
            </div>
          `;
          headerInserted = false;
          return;
        }

        const preis = parseFloat((colD || "").replace(",", "."));
        const preisVorhanden = !isNaN(preis);

        if (preisVorhanden) {

          // Bild aus 5. Spalte
          const imgSrc = resolvePosImg(colImg);

          // Header + Bild DIREKT vor dieser Position
          html += renderHeader25(imgSrc);
          headerInserted = true;

          const menge = gespeicherteWerte[index] || 0;

          html += `
            <div class="row">
              <div class="col-a">${colA}</div>
              <div class="col-b">${colB}</div>
              <div class="col-c">${colC}</div>

              <input class="menge-input"
                     type="number" min="0" step="any"
                     value="${menge}"
                     oninput="calcRow25(this, ${preis}, ${index})">

              <div class="col-d">
                ${preis.toLocaleString("de-DE", { minimumFractionDigits: 2 })} €
              </div>

              <div class="col-e">0,00 €</div>
            </div>
          `;
        } else {
          html += `
            <div class="row no-price">
              <div class="col-a">${colA}</div>
              <div class="col-b" style="grid-column: 2 / 7;">${colB}</div>
            </div>
          `;
          headerInserted = false;
        }
      });

      html += `<div id="gesamtSumme25" class="gesamt">Gesamtsumme: 0,00 €</div>`;
      html += `<div id="gesamtSumme25Rabatt" class="gesamt rabatt" data-rabatt="angebot">
        Gesamtsumme abzgl. SHK-Rabatt (15%): 0,00 €
      </div>`;

      container.innerHTML = html;
      berechneGesamt25();
    });
}

function calcRow25(input, preis, index) {

    const row = input.parentElement;
    const ergebnis = row.querySelector(".col-e");
    const menge = parseFloat(input.value.replace(",", ".")) || 0;

    const sum = menge * preis;
    ergebnis.innerText =
        sum.toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";

    let gespeicherteWerte =
        JSON.parse(localStorage.getItem("page25Data") || "{}");

    gespeicherteWerte[index] = menge;
    localStorage.setItem("page25Data", JSON.stringify(gespeicherteWerte));

    berechneGesamt25();
}

function berechneGesamt25() {

   let sum = 0;

    document.querySelectorAll("#page-25 .col-e").forEach(el => {
        const wert = parseFloat(
            el.innerText.replace("€","")
                       .replace(/\./g,"")
                       .replace(",",".")
                       .trim()
        ) || 0;
       sum += wert;
   });

    saveSeitenSumme("page-25", sum);

    const gesamtDiv = document.getElementById("gesamtSumme25");
    if (gesamtDiv) {
        gesamtDiv.innerText =
            "Gesamtsumme Angebot: " +
            getGesamtAngebotssumme().toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";
    }
}

// -----------------------------
// SEITE 27 – Wallbox a-TroniX (tga16.csv)
// -----------------------------

function loadPage27() {

   const container = document.getElementById("content-27");
    if (!container) return;

    if (container.innerHTML.trim() !== "") return;

    fetch("tga16.csv")
        .then(response => response.text())
        .then(data => {

            const lines = data.split("\n").slice(1);
            let html = "";
let headerInserted = false;

           const gespeicherteWerte =
                JSON.parse(localStorage.getItem("page27Data") || "{}");

            lines.forEach((line, index) => {
                if (!line.trim()) return;

                const cols = line.split(";");
                const colA = cols[0]?.trim();
                const colB = cols[1]?.trim();
                const colC = cols[2]?.trim();
                const colD = cols[3]?.trim();

                if (colA === "Titel") {
                    html += `<div class="title">${colB}</div>`;
                    return;
                }
                if (colA === "Untertitel") {
                    html += `<div class="subtitle">${colB}</div>`;
                    return;
                }
                if (colA === "Zwischentitel") {
                    html += `<div class="midtitle">${colB}</div>`;
                    return;
                }
if (colA === "Beschreibung_fett") {
  html += `
    <div class="row beschreibung-fett-row">
      <div class="col-a"></div>
      <div class="col-b beschreibung-fett">${colB}</div>
      <div class="col-c"></div>
      <div class="col-d"></div>
      <div class="col-e"></div>
      <div class="col-f"></div>
    </div>
  `;
  return;
}
                const preis = parseFloat(colD?.replace(",", "."));
                if (!isNaN(preis)) {

if (!headerInserted) {
        html += `
          <div class="row table-header">
            <div class="header-img-cell">
        <img src="bild25.jpg" class="header-img" alt="Bild">
        </div>
            <div>Beschreibung</div>
            <div>Einheit</div>
            <div style="text-align:center;">Menge</div>
            <div style="text-align:right;">Preis / Einheit</div>
            <div style="text-align:right;">Positionsergebnis</div>
          </div>
        `;
        headerInserted = true;
}

                    const menge = gespeicherteWerte[index] || 0;

                    html += `
                       <div class="row">
                            <div class="col-a">${colA}</div>
                           <div class="col-b">${colB}</div>
                            <div class="col-c">${colC}</div>

                           <input class="menge-input"
                                   type="number" min="0" step="any"
                                   value="${menge}"
                                   oninput="calcRow27(this, ${preis}, ${index})">

                            <div class="col-d">
                                ${preis.toLocaleString("de-DE",{minimumFractionDigits:2})} €
                            </div>

                            <div class="col-e">0,00 €</div>
                        </div>`;
                } else {
                    html += `
                        <div class="row no-price">
                            <div class="col-a">${colA}</div>
                            <div class="col-b" style="grid-column: 2 / 7;">${colB}</div>
                        </div>`;
                }
            });

            html += `<div id="gesamtSumme27" class="gesamt">Gesamtsumme: 0,00 €</div>`;
            html += `<div id="gesamtSumme27Rabatt" class="gesamt rabatt" data-rabatt="angebot">
          Gesamtsumme abzgl. SHK-Rabatt (15%): 0,00 €
         </div>`;

            container.innerHTML = html;
            berechneGesamt27();
        });
}

function calcRow27(input, preis, index) {

    const row = input.parentElement;
    const ergebnis = row.querySelector(".col-e");
    const menge = parseFloat(input.value.replace(",", ".")) || 0;

    const sum = menge * preis;
    ergebnis.innerText =
        sum.toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";

    let gespeicherteWerte =
        JSON.parse(localStorage.getItem("page27Data") || "{}");

    gespeicherteWerte[index] = menge;
    localStorage.setItem("page27Data", JSON.stringify(gespeicherteWerte));

    berechneGesamt27();
}

function berechneGesamt27() {

    let sum = 0;

   document.querySelectorAll("#page-27 .col-e").forEach(el => {
        const wert = parseFloat(
            el.innerText.replace("€","")
                       .replace(/\./g,"")
                       .replace(",",".")
                       .trim()
        ) || 0;
        sum += wert;
    });

    saveSeitenSumme("page-27", sum);

    const gesamtDiv = document.getElementById("gesamtSumme27");
    if (gesamtDiv) {
        gesamtDiv.innerText =
            "Gesamtsumme Angebot: " +
            getGesamtAngebotssumme().toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";
    }
}

// -----------------------------
// SEITE 31 – Speicher SMA (tga18.csv)
// -----------------------------

function loadPage31() {

   const container = document.getElementById("content-31");
    if (!container) return;

    if (container.innerHTML.trim() !== "") return;

    fetch("tga18.csv")
        .then(response => response.text())
        .then(data => {

            const lines = data.split("\n").slice(1);
            let html = "";
let headerInserted = false;

           const gespeicherteWerte =
                JSON.parse(localStorage.getItem("page31Data") || "{}");

            lines.forEach((line, index) => {
                if (!line.trim()) return;

                const cols = line.split(";");
                const colA = cols[0]?.trim();
                const colB = cols[1]?.trim();
                const colC = cols[2]?.trim();
                const colD = cols[3]?.trim();

                if (colA === "Titel") {
                    html += `<div class="title">${colB}</div>`;
                    return;
                }
                if (colA === "Untertitel") {
                    html += `<div class="subtitle">${colB}</div>`;
                    return;
                }
                if (colA === "Zwischentitel") {
                    html += `<div class="midtitle">${colB}</div>`;
                    return;
                }
if (colA === "Beschreibung_fett") {
  html += `
    <div class="row beschreibung-fett-row">
      <div class="col-a"></div>
      <div class="col-b beschreibung-fett">${colB}</div>
      <div class="col-c"></div>
      <div class="col-d"></div>
      <div class="col-e"></div>
      <div class="col-f"></div>
    </div>
  `;
  return;
}
                const preis = parseFloat(colD?.replace(",", "."));
                if (!isNaN(preis)) {

if (!headerInserted) {
        html += `
          <div class="row table-header">
            <div class="header-img-cell">
        <img src="bild30.jpg" class="header-img" alt="Bild">
        </div>
            <div>Beschreibung</div>
            <div>Einheit</div>
            <div style="text-align:center;">Menge</div>
            <div style="text-align:right;">Preis / Einheit</div>
            <div style="text-align:right;">Positionsergebnis</div>
          </div>
        `;
        headerInserted = true;
}

                    const menge = gespeicherteWerte[index] || 0;

                    html += `
                       <div class="row">
                            <div class="col-a">${colA}</div>
                           <div class="col-b">${colB}</div>
                            <div class="col-c">${colC}</div>

                           <input class="menge-input"
                                   type="number" min="0" step="any"
                                   value="${menge}"
                                   oninput="calcRow31(this, ${preis}, ${index})">

                            <div class="col-d">
                                ${preis.toLocaleString("de-DE",{minimumFractionDigits:2})} €
                            </div>

                            <div class="col-e">0,00 €</div>
                        </div>`;
                } else {
                    html += `
                        <div class="row no-price">
                            <div class="col-a">${colA}</div>
                            <div class="col-b" style="grid-column: 2 / 7;">${colB}</div>
                        </div>`;
                }
            });

            html += `<div id="gesamtSumme31" class="gesamt">Gesamtsumme: 0,00 €</div>`;
            html += `<div id="gesamtSumme31Rabatt" class="gesamt rabatt" data-rabatt="angebot">
          Gesamtsumme abzgl. SHK-Rabatt (15%): 0,00 €
         </div>`;

            container.innerHTML = html;
            berechneGesamt31();
        });
}

function calcRow31(input, preis, index) {

    const row = input.parentElement;
    const ergebnis = row.querySelector(".col-e");
    const menge = parseFloat(input.value.replace(",", ".")) || 0;

    const sum = menge * preis;
    ergebnis.innerText =
        sum.toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";

    let gespeicherteWerte =
        JSON.parse(localStorage.getItem("page31Data") || "{}");

    gespeicherteWerte[index] = menge;
    localStorage.setItem("page31Data", JSON.stringify(gespeicherteWerte));

    berechneGesamt31();
}

function berechneGesamt31() {

    let sum = 0;

   document.querySelectorAll("#page-31 .col-e").forEach(el => {
        const wert = parseFloat(
            el.innerText.replace("€","")
                       .replace(/\./g,"")
                       .replace(",",".")
                       .trim()
        ) || 0;
        sum += wert;
    });

    saveSeitenSumme("page-31", sum);

    const gesamtDiv = document.getElementById("gesamtSumme31");
    if (gesamtDiv) {
        gesamtDiv.innerText =
            "Gesamtsumme Angebot: " +
            getGesamtAngebotssumme().toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";
    }
}

// -----------------------------
// SEITE 32 – Heizstäbe (tga20.csv)
// -----------------------------

function loadPage32() {

   const container = document.getElementById("content-32");
    if (!container) return;

    if (container.innerHTML.trim() !== "") return;

    fetch("tga20.csv")
        .then(response => response.text())
        .then(data => {

            const lines = data.split("\n").slice(1);
            let html = "";
let headerInserted = false;

           const gespeicherteWerte =
                JSON.parse(localStorage.getItem("page32Data") || "{}");

            lines.forEach((line, index) => {
                if (!line.trim()) return;

                const cols = line.split(";");
                const colA = cols[0]?.trim();
                const colB = cols[1]?.trim();
                const colC = cols[2]?.trim();
                const colD = cols[3]?.trim();

                if (colA === "Titel") {
                    html += `<div class="title">${colB}</div>`;
                    return;
                }
                if (colA === "Untertitel") {
                    html += `<div class="subtitle">${colB}</div>`;
                    return;
                }
                if (colA === "Zwischentitel") {
                    html += `<div class="midtitle">${colB}</div>`;
                    return;
                }
if (colA === "Beschreibung_fett") {
  html += `
    <div class="row beschreibung-fett-row">
      <div class="col-a"></div>
      <div class="col-b beschreibung-fett">${colB}</div>
      <div class="col-c"></div>
      <div class="col-d"></div>
      <div class="col-e"></div>
      <div class="col-f"></div>
    </div>
  `;
  return;
}
                const preis = parseFloat(colD?.replace(",", "."));
                if (!isNaN(preis)) {

if (!headerInserted) {
        html += `
          <div class="row table-header">
            <div class="header-img-cell">
        <img src="bild36.jpg" class="header-img" alt="Bild">
        </div>
            <div>Beschreibung</div>
            <div>Einheit</div>
            <div style="text-align:center;">Menge</div>
            <div style="text-align:right;">Preis / Einheit</div>
            <div style="text-align:right;">Positionsergebnis</div>
          </div>
        `;
        headerInserted = true;
}

                    const menge = gespeicherteWerte[index] || 0;

                    html += `
                       <div class="row">
                            <div class="col-a">${colA}</div>
                           <div class="col-b">${colB}</div>
                            <div class="col-c">${colC}</div>

                           <input class="menge-input"
                                   type="number" min="0" step="any"
                                   value="${menge}"
                                   oninput="calcRow32(this, ${preis}, ${index})">

                            <div class="col-d">
                                ${preis.toLocaleString("de-DE",{minimumFractionDigits:2})} €
                            </div>

                            <div class="col-e">0,00 €</div>
                        </div>`;
                } else {
                    html += `
                        <div class="row no-price">
                            <div class="col-a">${colA}</div>
                            <div class="col-b" style="grid-column: 2 / 7;">${colB}</div>
                        </div>`;
                }
            });

            html += `<div id="gesamtSumme32" class="gesamt">Gesamtsumme: 0,00 €</div>`;
            html += `<div id="gesamtSumme32Rabatt" class="gesamt rabatt" data-rabatt="angebot">
          Gesamtsumme abzgl. SHK-Rabatt (15%): 0,00 €
         </div>`;

            container.innerHTML = html;
            berechneGesamt32();
        });
}

function calcRow32(input, preis, index) {

    const row = input.parentElement;
    const ergebnis = row.querySelector(".col-e");
    const menge = parseFloat(input.value.replace(",", ".")) || 0;

    const sum = menge * preis;
    ergebnis.innerText =
        sum.toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";

    let gespeicherteWerte =
        JSON.parse(localStorage.getItem("page32Data") || "{}");

    gespeicherteWerte[index] = menge;
    localStorage.setItem("page32Data", JSON.stringify(gespeicherteWerte));

    berechneGesamt32();
}

function berechneGesamt32() {

    let sum = 0;

   document.querySelectorAll("#page-32 .col-e").forEach(el => {
        const wert = parseFloat(
            el.innerText.replace("€","")
                       .replace(/\./g,"")
                       .replace(",",".")
                       .trim()
        ) || 0;
        sum += wert;
    });

    saveSeitenSumme("page-32", sum);

    const gesamtDiv = document.getElementById("gesamtSumme32");
    if (gesamtDiv) {
        gesamtDiv.innerText =
            "Gesamtsumme Angebot: " +
            getGesamtAngebotssumme().toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";
    }
}

// -----------------------------
// SEITE 33 – Wechselrichter hybrid Huawei (tga21.csv)
// -----------------------------

function loadPage33() {

   const container = document.getElementById("content-33");
    if (!container) return;

    if (container.innerHTML.trim() !== "") return;

    fetch("tga21.csv")
        .then(response => response.text())
        .then(data => {

            const lines = data.split("\n").slice(1);
            let html = "";
let headerInserted = false;

           const gespeicherteWerte =
                JSON.parse(localStorage.getItem("page33Data") || "{}");

            lines.forEach((line, index) => {
                if (!line.trim()) return;

                const cols = line.split(";");
                const colA = cols[0]?.trim();
                const colB = cols[1]?.trim();
                const colC = cols[2]?.trim();
                const colD = cols[3]?.trim();

                if (colA === "Titel") {
                    html += `<div class="title">${colB}</div>`;
                    return;
                }
                if (colA === "Untertitel") {
                    html += `<div class="subtitle">${colB}</div>`;
                    return;
                }
                if (colA === "Zwischentitel") {
                    html += `<div class="midtitle">${colB}</div>`;
                    return;
                }
if (colA === "Beschreibung_fett") {
  html += `
    <div class="row beschreibung-fett-row">
      <div class="col-a"></div>
      <div class="col-b beschreibung-fett">${colB}</div>
      <div class="col-c"></div>
      <div class="col-d"></div>
      <div class="col-e"></div>
      <div class="col-f"></div>
    </div>
  `;
  return;
}
                const preis = parseFloat(colD?.replace(",", "."));
                if (!isNaN(preis)) {

if (!headerInserted) {
        html += `
          <div class="row table-header">
            <div class="header-img-cell">
        <img src="bild37.jpg" class="header-img" alt="Bild">
        </div>
            <div>Beschreibung</div>
            <div>Einheit</div>
            <div style="text-align:center;">Menge</div>
            <div style="text-align:right;">Preis / Einheit</div>
            <div style="text-align:right;">Positionsergebnis</div>
          </div>
        `;
        headerInserted = true;
}

                    const menge = gespeicherteWerte[index] || 0;

                    html += `
                       <div class="row">
                            <div class="col-a">${colA}</div>
                           <div class="col-b">${colB}</div>
                            <div class="col-c">${colC}</div>

                           <input class="menge-input"
                                   type="number" min="0" step="any"
                                   value="${menge}"
                                   oninput="calcRow33(this, ${preis}, ${index})">

                            <div class="col-d">
                                ${preis.toLocaleString("de-DE",{minimumFractionDigits:2})} €
                            </div>

                            <div class="col-e">0,00 €</div>
                        </div>`;
                } else {
                    html += `
                        <div class="row no-price">
                            <div class="col-a">${colA}</div>
                            <div class="col-b" style="grid-column: 2 / 7;">${colB}</div>
                        </div>`;
                }
            });

            html += `<div id="gesamtSumme33" class="gesamt">Gesamtsumme: 0,00 €</div>`;
            html += `<div id="gesamtSumme33Rabatt" class="gesamt rabatt" data-rabatt="angebot">
          Gesamtsumme abzgl. SHK-Rabatt (15%): 0,00 €
         </div>`;

            container.innerHTML = html;
            berechneGesamt33();
        });
}

function calcRow33(input, preis, index) {

    const row = input.parentElement;
    const ergebnis = row.querySelector(".col-e");
    const menge = parseFloat(input.value.replace(",", ".")) || 0;

    const sum = menge * preis;
    ergebnis.innerText =
        sum.toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";

    let gespeicherteWerte =
        JSON.parse(localStorage.getItem("page33Data") || "{}");

    gespeicherteWerte[index] = menge;
    localStorage.setItem("page33Data", JSON.stringify(gespeicherteWerte));

    berechneGesamt33();
}

function berechneGesamt33() {

    let sum = 0;

   document.querySelectorAll("#page-33 .col-e").forEach(el => {
        const wert = parseFloat(
            el.innerText.replace("€","")
                       .replace(/\./g,"")
                       .replace(",",".")
                       .trim()
        ) || 0;
        sum += wert;
    });

    saveSeitenSumme("page-33", sum);

    const gesamtDiv = document.getElementById("gesamtSumme33");
    if (gesamtDiv) {
        gesamtDiv.innerText =
            "Gesamtsumme Angebot: " +
            getGesamtAngebotssumme().toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";
    }
}

// -----------------------------
// SEITE 34 – Wallbox Huawei (tga23.csv)
// -----------------------------

function loadPage34() {

   const container = document.getElementById("content-34");
    if (!container) return;

    if (container.innerHTML.trim() !== "") return;

    fetch("tga23.csv")
        .then(response => response.text())
        .then(data => {

            const lines = data.split("\n").slice(1);
            let html = "";
let headerInserted = false;

           const gespeicherteWerte =
                JSON.parse(localStorage.getItem("page34Data") || "{}");

            lines.forEach((line, index) => {
                if (!line.trim()) return;

                const cols = line.split(";");
                const colA = cols[0]?.trim();
                const colB = cols[1]?.trim();
                const colC = cols[2]?.trim();
                const colD = cols[3]?.trim();

                if (colA === "Titel") {
                    html += `<div class="title">${colB}</div>`;
                    return;
                }
                if (colA === "Untertitel") {
                    html += `<div class="subtitle">${colB}</div>`;
                    return;
                }
                if (colA === "Zwischentitel") {
                    html += `<div class="midtitle">${colB}</div>`;
                    return;
                }
if (colA === "Beschreibung_fett") {
  html += `
    <div class="row beschreibung-fett-row">
      <div class="col-a"></div>
      <div class="col-b beschreibung-fett">${colB}</div>
      <div class="col-c"></div>
      <div class="col-d"></div>
      <div class="col-e"></div>
      <div class="col-f"></div>
    </div>
  `;
  return;
}
                const preis = parseFloat(colD?.replace(",", "."));
                if (!isNaN(preis)) {

if (!headerInserted) {
        html += `
          <div class="row table-header">
            <div class="header-img-cell">
        <img src="bild41.jpg" class="header-img" alt="Bild">
        </div>
            <div>Beschreibung</div>
            <div>Einheit</div>
            <div style="text-align:center;">Menge</div>
            <div style="text-align:right;">Preis / Einheit</div>
            <div style="text-align:right;">Positionsergebnis</div>
          </div>
        `;
        headerInserted = true;
}

                    const menge = gespeicherteWerte[index] || 0;

                    html += `
                       <div class="row">
                            <div class="col-a">${colA}</div>
                           <div class="col-b">${colB}</div>
                            <div class="col-c">${colC}</div>

                           <input class="menge-input"
                                   type="number" min="0" step="any"
                                   value="${menge}"
                                   oninput="calcRow34(this, ${preis}, ${index})">

                            <div class="col-d">
                                ${preis.toLocaleString("de-DE",{minimumFractionDigits:2})} €
                            </div>

                            <div class="col-e">0,00 €</div>
                        </div>`;
                } else {
                    html += `
                        <div class="row no-price">
                            <div class="col-a">${colA}</div>
                            <div class="col-b" style="grid-column: 2 / 7;">${colB}</div>
                        </div>`;
                }
            });

            html += `<div id="gesamtSumme34" class="gesamt">Gesamtsumme: 0,00 €</div>`;
            html += `<div id="gesamtSumme34Rabatt" class="gesamt rabatt" data-rabatt="angebot">
          Gesamtsumme abzgl. SHK-Rabatt (15%): 0,00 €
         </div>`;

            container.innerHTML = html;
            berechneGesamt34();
        });
}

function calcRow34(input, preis, index) {

    const row = input.parentElement;
    const ergebnis = row.querySelector(".col-e");
    const menge = parseFloat(input.value.replace(",", ".")) || 0;

    const sum = menge * preis;
    ergebnis.innerText =
        sum.toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";

    let gespeicherteWerte =
        JSON.parse(localStorage.getItem("page32Data") || "{}");

    gespeicherteWerte[index] = menge;
    localStorage.setItem("page34Data", JSON.stringify(gespeicherteWerte));

    berechneGesamt34();
}

function berechneGesamt34() {

    let sum = 0;

   document.querySelectorAll("#page-34 .col-e").forEach(el => {
        const wert = parseFloat(
            el.innerText.replace("€","")
                       .replace(/\./g,"")
                       .replace(",",".")
                       .trim()
        ) || 0;
        sum += wert;
    });

    saveSeitenSumme("page-34", sum);

    const gesamtDiv = document.getElementById("gesamtSumme34");
    if (gesamtDiv) {
        gesamtDiv.innerText =
            "Gesamtsumme Angebot: " +
            getGesamtAngebotssumme().toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";
    }
}

// -----------------------------
// SEITE 35 – Dienstleistungen (tga24.csv)
// -----------------------------

function loadPage35() {

   const container = document.getElementById("content-35");
    if (!container) return;

    if (container.innerHTML.trim() !== "") return;

    fetch("tga24.csv")
        .then(response => response.text())
        .then(data => {

            const lines = data.split("\n").slice(1);
            let html = "";
let headerInserted = false;

           const gespeicherteWerte =
                JSON.parse(localStorage.getItem("page35Data") || "{}");

            lines.forEach((line, index) => {
                if (!line.trim()) return;

                const cols = line.split(";");
                const colA = cols[0]?.trim();
                const colB = cols[1]?.trim();
                const colC = cols[2]?.trim();
                const colD = cols[3]?.trim();

                if (colA === "Titel") {
                    html += `<div class="title">${colB}</div>`;
                    return;
                }
                if (colA === "Untertitel") {
                    html += `<div class="subtitle">${colB}</div>`;
                    return;
                }
                if (colA === "Zwischentitel") {
                    html += `<div class="midtitle">${colB}</div>`;
                    return;
                }
if (colA === "Beschreibung_fett") {
  html += `
    <div class="row beschreibung-fett-row">
      <div class="col-a"></div>
      <div class="col-b beschreibung-fett">${colB}</div>
      <div class="col-c"></div>
      <div class="col-d"></div>
      <div class="col-e"></div>
      <div class="col-f"></div>
    </div>
  `;
  return;
}
                const preis = parseFloat(colD?.replace(",", "."));
                if (!isNaN(preis)) {

//if (!headerInserted) {
//        html += `
//          <div class="row table-header">
//            <div class="header-img-cell">
//        <img src="xxx.jpg" class="header-img" alt="Bild">
//        </div>
//            <div>Beschreibung</div>
//            <div>Einheit</div>
//            <div style="text-align:center;">Menge</div>
//            <div style="text-align:right;">Preis / Einheit</div>
//            <div style="text-align:right;">Positionsergebnis</div>
//          </div>
//        `;
//        headerInserted = true;
//}

                    const menge = gespeicherteWerte[index] || 0;

                    html += `
                       <div class="row">
                            <div class="col-a">${colA}</div>
                           <div class="col-b">${colB}</div>
                            <div class="col-c">${colC}</div>

                           <input class="menge-input"
                                   type="number" min="0" step="any"
                                   value="${menge}"
                                   oninput="calcRow35(this, ${preis}, ${index})">

                            <div class="col-d">
                                ${preis.toLocaleString("de-DE",{minimumFractionDigits:2})} €
                            </div>

                            <div class="col-e">0,00 €</div>
                        </div>`;
                } else {
                    html += `
                        <div class="row no-price">
                            <div class="col-a">${colA}</div>
                            <div class="col-b" style="grid-column: 2 / 7;">${colB}</div>
                        </div>`;
                }
            });

            html += `<div id="gesamtSumme35" class="gesamt">Gesamtsumme: 0,00 €</div>`;
            html += `<div id="gesamtSumme35Rabatt" class="gesamt rabatt" data-rabatt="angebot">
          Gesamtsumme abzgl. SHK-Rabatt (15%): 0,00 €
         </div>`;

            container.innerHTML = html;
            berechneGesamt35();
        });
}

function calcRow35(input, preis, index) {

    const row = input.parentElement;
    const ergebnis = row.querySelector(".col-e");
    const menge = parseFloat(input.value.replace(",", ".")) || 0;

    const sum = menge * preis;
    ergebnis.innerText =
        sum.toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";

    let gespeicherteWerte =
        JSON.parse(localStorage.getItem("page35Data") || "{}");

    gespeicherteWerte[index] = menge;
    localStorage.setItem("page35Data", JSON.stringify(gespeicherteWerte));

    berechneGesamt35();
}

function berechneGesamt35() {

    let sum = 0;

   document.querySelectorAll("#page-35 .col-e").forEach(el => {
        const wert = parseFloat(
            el.innerText.replace("€","")
                       .replace(/\./g,"")
                       .replace(",",".")
                       .trim()
        ) || 0;
        sum += wert;
    });

    saveSeitenSumme("page-35", sum);

    const gesamtDiv = document.getElementById("gesamtSumme35");
    if (gesamtDiv) {
        gesamtDiv.innerText =
            "Gesamtsumme Angebot: " +
            getGesamtAngebotssumme().toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";
    }
}

// -----------------------------
// SEITE 36 – Zuschläge (tga25.csv)
// -----------------------------

function loadPage36() {

   const container = document.getElementById("content-36");
    if (!container) return;

    if (container.innerHTML.trim() !== "") return;

    fetch("tga25.csv")
        .then(response => response.text())
        .then(data => {

            const lines = data.split("\n").slice(1);
            let html = "";
let headerInserted = false;

           const gespeicherteWerte =
                JSON.parse(localStorage.getItem("page36Data") || "{}");

            lines.forEach((line, index) => {
                if (!line.trim()) return;

                const cols = line.split(";");
                const colA = cols[0]?.trim();
                const colB = cols[1]?.trim();
                const colC = cols[2]?.trim();
                const colD = cols[3]?.trim();

                if (colA === "Titel") {
                    html += `<div class="title">${colB}</div>`;
                    return;
                }
                if (colA === "Untertitel") {
                    html += `<div class="subtitle">${colB}</div>`;
                    return;
                }
                if (colA === "Zwischentitel") {
                    html += `<div class="midtitle">${colB}</div>`;
                    return;
                }
if (colA === "Beschreibung_fett") {
  html += `
    <div class="row beschreibung-fett-row">
      <div class="col-a"></div>
      <div class="col-b beschreibung-fett">${colB}</div>
      <div class="col-c"></div>
      <div class="col-d"></div>
      <div class="col-e"></div>
      <div class="col-f"></div>
    </div>
  `;
  return;
}
                const preis = parseFloat(colD?.replace(",", "."));
                if (!isNaN(preis)) {

//if (!headerInserted) {
//        html += `
//          <div class="row table-header">
//            <div class="header-img-cell">
//        <img src="xxx.jpg" class="header-img" alt="Bild">
//        </div>
//            <div>Beschreibung</div>
//            <div>Einheit</div>
//            <div style="text-align:center;">Menge</div>
//            <div style="text-align:right;">Preis / Einheit</div>
//            <div style="text-align:right;">Positionsergebnis</div>
//          </div>
//        `;
//        headerInserted = true;
//}

                    const menge = gespeicherteWerte[index] || 0;

                    html += `
                       <div class="row">
                            <div class="col-a">${colA}</div>
                           <div class="col-b">${colB}</div>
                            <div class="col-c">${colC}</div>

                           <input class="menge-input"
                                   type="number" min="0" step="any"
                                   value="${menge}"
                                   oninput="calcRow36(this, ${preis}, ${index})">

                            <div class="col-d">
                                ${preis.toLocaleString("de-DE",{minimumFractionDigits:2})} €
                            </div>

                            <div class="col-e">0,00 €</div>
                        </div>`;
                } else {
                    html += `
                        <div class="row no-price">
                            <div class="col-a">${colA}</div>
                            <div class="col-b" style="grid-column: 2 / 7;">${colB}</div>
                        </div>`;
                }
            });

            html += `<div id="gesamtSumme36" class="gesamt">Gesamtsumme: 0,00 €</div>`;
            html += `<div id="gesamtSumme36Rabatt" class="gesamt rabatt" data-rabatt="angebot">
          Gesamtsumme abzgl. SHK-Rabatt (15%): 0,00 €
         </div>`;

            container.innerHTML = html;
            berechneGesamt36();
        });
}

function calcRow36(input, preis, index) {

    const row = input.parentElement;
    const ergebnis = row.querySelector(".col-e");
    const menge = parseFloat(input.value.replace(",", ".")) || 0;

    const sum = menge * preis;
    ergebnis.innerText =
        sum.toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";

    let gespeicherteWerte =
        JSON.parse(localStorage.getItem("page36Data") || "{}");

    gespeicherteWerte[index] = menge;
    localStorage.setItem("page36Data", JSON.stringify(gespeicherteWerte));

    berechneGesamt36();
}

function berechneGesamt36() {

    let sum = 0;

   document.querySelectorAll("#page-36 .col-e").forEach(el => {
        const wert = parseFloat(
            el.innerText.replace("€","")
                       .replace(/\./g,"")
                       .replace(",",".")
                       .trim()
        ) || 0;
        sum += wert;
    });

    saveSeitenSumme("page-36", sum);

    const gesamtDiv = document.getElementById("gesamtSumme36");
    if (gesamtDiv) {
        gesamtDiv.innerText =
            "Gesamtsumme Angebot: " +
            getGesamtAngebotssumme().toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";
    }
}

// -----------------------------
// SEITE 28 – Wechselrichter SMA (tga17.csv)
// -----------------------------

function loadPage28() {

    const container = document.getElementById("content-28");
    if (!container) return;

    if (container.innerHTML.trim() !== "") return;

    fetch("tga17.csv")
        .then(response => response.text())
        .then(data => {

            const lines = data.split("\n").slice(1);
            let html = "";
		let headerInserted = false;

            const gespeicherteWerte =
                JSON.parse(localStorage.getItem("page28Data") || "{}");

            lines.forEach((line, index) => {
                if (!line.trim()) return;

                const cols = line.split(";");
                const colA = cols[0]?.trim();
                const colB = cols[1]?.trim();
                const colC = cols[2]?.trim();
                const colD = cols[3]?.trim();

                if (colA === "Titel") {
                    html += `<div class="title">${colB}</div>`;
                    return;
                }
                if (colA === "Untertitel") {
                    html += `<div class="subtitle">${colB}</div>`;
                    return;
                }
                if (colA === "Zwischentitel") {
                    html += `<div class="midtitle">${colB}</div>`;
                    return;
                }
if (colA === "Beschreibung_fett") {
  html += `
    <div class="row beschreibung-fett-row">
      <div class="col-a"></div>
     <div class="col-b beschreibung-fett">${colB}</div>
      <div class="col-c"></div>
      <div class="col-d"></div>
      <div class="col-e"></div>
      <div class="col-f"></div>
    </div>
  `;
  return;
}
                const preis = parseFloat(colD?.replace(",", "."));
                if (!isNaN(preis)) {

if (!headerInserted) {
        html += `
          <div class="row table-header">
            <div class="header-img-cell">
        <img src="bild29.jpg" class="header-img" alt="Bild">
        </div>
            <div>Beschreibung</div>
            <div>Einheit</div>
            <div style="text-align:center;">Menge</div>
            <div style="text-align:right;">Preis / Einheit</div>
            <div style="text-align:right;">Positionsergebnis</div>
          </div>
        `;
        headerInserted = true;
}

                   const menge = gespeicherteWerte[index] || 0;

                    html += `
                        <div class="row">
                            <div class="col-a">${colA}</div>
                            <div class="col-b">${colB}</div>
                            <div class="col-c">${colC}</div>

                           <input class="menge-input"
                                   type="number" min="0" step="any"
                                   value="${menge}"
                                   oninput="calcRow28(this, ${preis}, ${index})">

                            <div class="col-d">
                                ${preis.toLocaleString("de-DE",{minimumFractionDigits:2})} €
                            </div>

                           <div class="col-e">0,00 €</div>
                        </div>`;
                } else {
                    html += `
                        <div class="row no-price">
                            <div class="col-a">${colA}</div>
                            <div class="col-b" style="grid-column: 2 / 7;">${colB}</div>
                        </div>`;
                }
            });

            html += `<div id="gesamtSumme28" class="gesamt">Gesamtsumme: 0,00 €</div>`;
            html += `<div id="gesamtSumme28Rabatt" class="gesamt rabatt" data-rabatt="angebot">
          Gesamtsumme abzgl. SHK-Rabatt (15%): 0,00 €
         </div>`;

            container.innerHTML = html;
            berechneGesamt28();
        });
}

function calcRow28(input, preis, index) {

    const row = input.parentElement;
    const ergebnis = row.querySelector(".col-e");
    const menge = parseFloat(input.value.replace(",", ".")) || 0;

    const sum = menge * preis;
    ergebnis.innerText =
        sum.toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";

    let gespeicherteWerte =
        JSON.parse(localStorage.getItem("page28Data") || "{}");

    gespeicherteWerte[index] = menge;
    localStorage.setItem("page28Data", JSON.stringify(gespeicherteWerte));

    berechneGesamt28();
}

function berechneGesamt28() {

    let sum = 0;

    document.querySelectorAll("#page-28 .col-e").forEach(el => {
        const wert = parseFloat(
            el.innerText.replace("€","")
                       .replace(/\./g,"")
                       .replace(",",".")
                       .trim()
        ) || 0;
        sum += wert;
    });

    saveSeitenSumme("page-28", sum);

    const gesamtDiv = document.getElementById("gesamtSumme28");
   if (gesamtDiv) {
        gesamtDiv.innerText =
            "Gesamtsumme Angebot: " +
            getGesamtAngebotssumme().toLocaleString("de-DE",{minimumFractionDigits:2}) + " €";
    }
}

// -----------------------------
// Eingabefelder - 0 entfernen bei Eingabe
// -----------------------------

     function setupAutoClearZeroInputs() {
       document.addEventListener("focusin", (e) => {
         const el = e.target;
         if (el && el.classList && el.classList.contains("menge-input")) {
           if (el.value === "0") el.value = "";
         }
       });

// Optional: falls man mit Wheel/Arrow Keys aus Versehen wieder 0 reinbekommt
      document.addEventListener("input", (e) => {
        const el = e.target;
        if (el && el.classList && el.classList.contains("menge-input")) {
          if (el.value === "0") {
// wenn wirklich 0 eingegeben wurde, lassen wir es drin -> daher NICHT löschen
          }
        }
      });
    }

    setupAutoClearZeroInputs();

// -----------------------------
// Spaltenüberschriften
// -----------------------------

function renderTableHeader() {
  return `
    <div class="row table-header">
      <div></div>
      <div>Beschreibung</div>
      <div>Einheit</div>
      <div style="text-align:center;">Menge</div>
      <div style="text-align:right;">Preis / Einheit</div>
      <div style="text-align:right;">Positionsergebnis</div>
    </div>
  `;
}

// -----------------------------
// Blob - Button - PDF download / teilen 
// -----------------------------

async function sharePdf() {
// ---- Mobile-Fix: html2canvas rendert sonst gerne "aus der Mitte" ----
  const oldScrollX = window.scrollX || 0;
  const oldScrollY = window.scrollY || 0;

// Seite nach ganz oben, damit Canvas sauber rendert
  window.scrollTo(0, 0);
  await new Promise(r => requestAnimationFrame(r));

  const h2p = window.html2pdf;
  if (!h2p) {
    alert("html2pdf ist nicht geladen. Prüfe: Script-Tag in index.html muss VOR app.js stehen und darf nicht geblockt werden.");
    window.scrollTo(oldScrollX, oldScrollY);
    return;
  }

  const el = document.getElementById("page-40");

// Warten bis Seite 40 komplett aufgebaut ist (wichtig fürs Smartphone!)
  if (typeof page40Promise !== "undefined" && page40Promise) {
    await page40Promise;
// kurzer Render-Puffer
    await new Promise(r => setTimeout(r, 150));
  }

  if (!el) {
    alert("Seite 40 nicht gefunden.");
    window.scrollTo(oldScrollX, oldScrollY);
    return;
  }

  const angebotTyp = localStorage.getItem("angebotTyp") || "kv";
  const datum = new Date().toLocaleDateString("de-DE").replaceAll(".", "-");
  const filename = (angebotTyp === "anfrage")
    ? `Anfrage_${datum}.pdf`
    : `Kostenvoranschlag_${datum}.pdf`;

  document.body.classList.add("pdf-mode");

// Logo nur fürs PDF in Seite 40 klonen
  let tempLogo = null;
  const existingLogo = document.querySelector("img.logo");
  if (existingLogo) {
    tempLogo = existingLogo.cloneNode(true);
    tempLogo.classList.add("temp-pdf-logo");
    el.insertBefore(tempLogo, el.firstChild);
  }

  await new Promise(r => requestAnimationFrame(r));

// Desktop-Erkennung: hier KEIN navigator.share() verwenden
  const isMobile =
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
    (navigator.maxTouchPoints > 1 && window.matchMedia("(max-width: 1024px)").matches);

  try {
    const opt = {
      margin: 10,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        scrollX: 0,
        scrollY: 0,
        windowWidth: document.documentElement.scrollWidth,
        windowHeight: document.documentElement.scrollHeight
      },
      pagebreak: { mode: ["css", "legacy"] },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };

    const worker = h2p().set(opt).from(el).toPdf();
    const pdf = await worker.get("pdf");
    if (!pdf) throw new Error("PDF-Objekt ist null.");

    const blob = pdf.output("blob");
    const file = new File([blob], filename, { type: "application/pdf" });

 // 1) NUR AUF MOBILE teilen versuchen (damit auf Windows nicht dieses Share-Fenster aufgeht)
    if (isMobile && navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({ title: filename, text: "PDF", files: [file] });
        return;
      } catch (e) {
        console.warn("Mobile Share blockiert/abgebrochen, Fallback:", e);
        // Fallback unten
      }
    }

 // 2) Fallback: Öffnen + Download (Desktop immer, Mobile wenn Share nicht geht)
    const url = URL.createObjectURL(blob);

 // Öffnen ist oft der bequemste Weg, um danach in Outlook/WhatsApp manuell anzuhängen
    window.open(url, "_blank", "noopener");

 // Download als verlässlicher Pfad (vor allem für Outlook)
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();

    setTimeout(() => URL.revokeObjectURL(url), 30000);

  } catch (err) {
    console.error("sharePdf Fehler:", err);
    alert("PDF konnte nicht erstellt/geteilt werden:\n" + (err?.message || err));
  } finally {
    if (tempLogo) tempLogo.remove();
    document.body.classList.remove("pdf-mode");
    window.scrollTo(oldScrollX, oldScrollY);
  }
}

window.sharePdf = sharePdf;

// -----------------------------
// showLoader40 - EIERUHR 
// -----------------------------

function showLoader40(show) {
  const l = document.getElementById("loader40");
  if (!l) return;
  l.classList.toggle("hidden", !show);
}

// -----------------------------

window.addEventListener("popstate", (e) => {
  const page = e.state?.page || location.hash.replace("#", "");

  if (!page) return;

  // Login-Seite blockieren, wenn eingeloggt
  if (page === "page-login" && auth.currentUser) {
    showPage("page-3", true);
    return;
  }

  showPage(page, true);
});

function getInitialPage() {
  const hash = location.hash.replace("#", "");
  return hash || "page-3";
}

// -----------------------------

document.body.addEventListener("mousemove", () => remaining = 600);
document.body.addEventListener("keydown", () => remaining = 600);
		
// -----------------------------
// Funktionen für HTML global verfügbar machen
// -----------------------------

window.login = login;
window.forgotPassword = forgotPassword;
window.savePassword = savePassword;
window.exportLoginLog = exportLoginLog;
window.showPage = showPage;
window.clearInputs = clearInputs;
window.goToChange = goToChange;
window.logout = logout;
window.submitPage5 = submitPage5;
window.direktZumAngebot = direktZumAngebot;
window.calcRow8 = calcRow8;
window.printPage40 = printPage40;
window.sendMailPage40 = sendMailPage40;
window.calcRow14 = calcRow14;
window.saveSeitenSumme = saveSeitenSumme;
window.getGesamtAngebotssumme = getGesamtAngebotssumme;
window.loadPage14 = loadPage14;
window.berechneGesamt14 = berechneGesamt14;
window.loadPage143 = loadPage143;
window.calcRow143 = calcRow143;
window.berechneGesamt143 = berechneGesamt143;
window.savePage5Data = savePage5Data;
window.loadPage40 = loadPage40;
window.clearInputs = clearInputs;
window.loadPage142 = loadPage142;
window.calcRow142 = calcRow142;
window.berechneGesamt142 = berechneGesamt142;
window.loadPage8 = loadPage8;
window.berechneGesamt8 = berechneGesamt8;
window.loadPage18 = loadPage18;
window.calcRow18 = calcRow18;
window.berechneGesamt18 = berechneGesamt18;
window.loadPage20 = loadPage20;
window.calcRow20 = calcRow20;
window.berechneGesamt20 = berechneGesamt20;
window.loadPage21 = loadPage21;
window.calcRow21 = calcRow21;
window.berechneGesamt21 = berechneGesamt21;
window.loadPage22 = loadPage22;
window.calcRow22 = calcRow22;
window.berechneGesamt22 = berechneGesamt22;
window.loadPage9 = loadPage9;
window.calcRow9 = calcRow9;
window.berechneGesamt9 = berechneGesamt9;
window.loadPage10 = loadPage10;
window.calcRow10 = calcRow10;
window.berechneGesamt10 = berechneGesamt10;
window.loadPage23 = loadPage23;
window.calcRow23 = calcRow23;
window.berechneGesamt23 = berechneGesamt23;
window.loadPage24 = loadPage24;
window.calcRow24 = calcRow24;
window.berechneGesamt24 = berechneGesamt24;
window.loadPage25 = loadPage25;
window.calcRow25 = calcRow25;
window.berechneGesamt25 = berechneGesamt25;
window.loadPage27 = loadPage27;
window.calcRow27 = calcRow27;
window.berechneGesamt27 = berechneGesamt27;
window.loadPage28 = loadPage28;
window.calcRow28 = calcRow28;
window.berechneGesamt28 = berechneGesamt28;
window.loadPage30 = loadPage30;
window.calcRow30 = calcRow30;
window.berechneGesamt30 = berechneGesamt30;
window.loadPage31 = loadPage31;
window.calcRow31 = calcRow31;
window.berechneGesamt31 = berechneGesamt31;
window.loadPage32 = loadPage32;
window.calcRow32 = calcRow32;
window.berechneGesamt32 = berechneGesamt32;
window.loadPage33 = loadPage33;
window.calcRow33 = calcRow33;
window.berechneGesamt33 = berechneGesamt33;
window.loadPage13 = loadPage13;
window.calcRow13 = calcRow13;
window.berechneGesamt13 = berechneGesamt13;
window.loadPage34 = loadPage34;
window.calcRow34 = calcRow34;
window.berechneGesamt34 = berechneGesamt34;
window.loadPage35 = loadPage35;
window.calcRow35 = calcRow35;
window.berechneGesamt35 = berechneGesamt35;
window.loadPage36 = loadPage36;
window.calcRow36 = calcRow36;
window.berechneGesamt36 = berechneGesamt36;
window.loadPage26 = loadPage26;
window.calcRow26 = calcRow26;
window.berechneGesamt26 = berechneGesamt26;
window.startKomplettFlow = startKomplettFlow;
