// PantryClean - Recipe Normalizer App (Optimized)

// Unit Conversions
const UNIT_CONVERSIONS = {
  cup: { toMl: 236.588, type: "volume" },
  cups: { toMl: 236.588, type: "volume" },
  tablespoon: { toMl: 14.787, type: "volume" },
  tablespoons: { toMl: 14.787, type: "volume" },
  tbsp: { toMl: 14.787, type: "volume" },
  tbs: { toMl: 14.787, type: "volume" },
  teaspoon: { toMl: 4.929, type: "volume" },
  teaspoons: { toMl: 4.929, type: "volume" },
  tsp: { toMl: 4.929, type: "volume" },
  ml: { toMl: 1, type: "volume" },
  milliliter: { toMl: 1, type: "volume" },
  milliliters: { toMl: 1, type: "volume" },
  l: { toMl: 1000, type: "volume" },
  liter: { toMl: 1000, type: "volume" },
  liters: { toMl: 1000, type: "volume" },
  "fl oz": { toMl: 29.574, type: "volume" },
  g: { toG: 1, type: "weight" },
  gram: { toG: 1, type: "weight" },
  grams: { toG: 1, type: "weight" },
  kg: { toG: 1000, type: "weight" },
  kilogram: { toG: 1000, type: "weight" },
  oz: { toG: 28.3495, type: "weight" },
  ounce: { toG: 28.3495, type: "weight" },
  ounces: { toG: 28.3495, type: "weight" },
  lb: { toG: 453.592, type: "weight" },
  lbs: { toG: 453.592, type: "weight" },
  pound: { toG: 453.592, type: "weight" },
  piece: { type: "count" },
  pieces: { type: "count" },
  bunch: { type: "count" },
  clove: { type: "count" },
  cloves: { type: "count" },
  pinch: { type: "count" },
  dash: { type: "count" },
  slice: { type: "count" },
  slices: { type: "count" },
  sprig: { type: "count" },
  handful: { type: "count" },
};

const UNIT_SYNONYMS = {
  tbsp: "tablespoon",
  tbs: "tablespoon",
  tablespoon: "tablespoon",
  tablespoons: "tablespoon",
  T: "tablespoon",
  tsp: "teaspoon",
  teaspoon: "teaspoon",
  teaspoons: "teaspoon",
  t: "teaspoon",
  cup: "cup",
  cups: "cup",
  c: "cup",
  g: "g",
  gr: "g",
  gram: "g",
  grams: "g",
  gm: "g",
  ml: "ml",
  milliliter: "ml",
  milliliters: "ml",
  mL: "ml",
  l: "liter",
  L: "liter",
  liter: "liter",
  liters: "liter",
  oz: "oz",
  ounce: "oz",
  ounces: "oz",
  kg: "kg",
  kilogram: "kg",
  lb: "lb",
  lbs: "lb",
  pound: "lb",
  pounds: "lb",
  piece: "piece",
  pieces: "piece",
  pcs: "piece",
  bunch: "bunch",
  clove: "clove",
  cloves: "clove",
  pinch: "pinch",
  dash: "dash",
  slice: "slice",
  slices: "slice",
  sprig: "sprig",
  handful: "handful",
};

const INGREDIENT_SYNONYMS = {
  cilantro: "coriander",
  coriander: "coriander",
  dhania: "coriander",
  "all-purpose flour": "flour",
  maida: "flour",
  "plain flour": "flour",
  "garlic clove": "garlic",
  "garlic cloves": "garlic",
  egg: "egg",
  eggs: "egg",
  onion: "onion",
  onions: "onion",
  tomato: "tomato",
  tomatoes: "tomato",
  potato: "potato",
  potatoes: "potato",
  paneer: "paneer",
  "cottage cheese": "paneer",
  capsicum: "bell pepper",
  chili: "chili",
  chilli: "chili",
  "green chili": "green chili",
  "green chilli": "green chili",
};

const PREPARATION_WORDS = [
  "chopped",
  "finely chopped",
  "diced",
  "minced",
  "sliced",
  "cubed",
  "grated",
  "shredded",
  "crushed",
  "ground",
  "powdered",
  "fresh",
  "dried",
  "frozen",
  "canned",
  "cooked",
  "raw",
  "peeled",
  "melted",
  "toasted",
  "roasted",
  "boiled",
];
const SIZE_WORDS = ["small", "medium", "large", "big", "tiny", "huge"];
const IMPRECISE_WORDS = [
  "pinch",
  "dash",
  "splash",
  "drizzle",
  "handful",
  "some",
  "few",
];
const QUALITATIVE_PHRASES = [
  "to taste",
  "as needed",
  "as required",
  "optional",
  "or more",
];
const NUMBER_WORDS = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  a: 1,
  an: 1,
  half: 0.5,
};
const UNICODE_FRACTIONS = {
  "½": 0.5,
  "⅓": 1 / 3,
  "⅔": 2 / 3,
  "¼": 0.25,
  "¾": 0.75,
  "⅛": 0.125,
};

const SAMPLE_RECIPES = {
  pancakes:
    "2 cups all-purpose flour\n1 tablespoon sugar\n2 teaspoons baking powder\n1/2 teaspoon salt\n2 eggs\n1 3/4 cups milk\n1/4 cup melted butter",
  "coriander-chutney":
    "2 cups fresh coriander leaves\n1/2 cup mint leaves\n2 green chilies\n1 small onion, roughly chopped\n3-4 garlic cloves\nSalt to taste\n2 tbsp lemon juice",
  "masala-egg-curry":
    "4 eggs, hard boiled\n2 medium onions, finely chopped\n2 tomatoes, pureed\n1 tbsp ginger-garlic paste\n1/2 tsp turmeric powder\n1 tsp red chili powder\nA pinch of salt\n2 tbsp oil",
  "test-cases":
    "2 tbsp chopped fresh coriander\n1 small onion, finely chopped\n½ cup milk\n3–4 garlic cloves\nA pinch of salt\n2 eggs\n200 g paneer, cubed\n1 1/2 cups all-purpose flour\n2 tsp sugar or to taste\nOne bunch cilantro\n250ml water",
};

const DEFAULT_SETTINGS = {
  unitSystem: "metric",
  preferredVolumeUnit: "ml",
  preferredWeightUnit: "g",
  decimalPrecision: 2,
  smallQuantityUnit: "teaspoon",
};
const state = {
  parsedIngredients: [],
  unitSystem: "metric",
  corrections: {},
  currentEditIndex: -1,
  settings: { ...DEFAULT_SETTINGS },
};

// Storage Functions
function loadCorrections() {
  try {
    state.corrections = JSON.parse(
      localStorage.getItem("pantryClean_corrections") || "{}"
    );
  } catch (e) {
    state.corrections = {};
  }
}
function saveCorrections() {
  try {
    localStorage.setItem(
      "pantryClean_corrections",
      JSON.stringify(state.corrections)
    );
  } catch (e) {}
}
function loadSettings() {
  try {
    const s = localStorage.getItem("pantryClean_settings");
    state.settings = s
      ? { ...DEFAULT_SETTINGS, ...JSON.parse(s) }
      : { ...DEFAULT_SETTINGS };
    state.unitSystem = state.settings.unitSystem;
  } catch (e) {
    state.settings = { ...DEFAULT_SETTINGS };
  }
}
function saveSettings() {
  try {
    localStorage.setItem(
      "pantryClean_settings",
      JSON.stringify(state.settings)
    );
    state.unitSystem = state.settings.unitSystem;
  } catch (e) {}
}

function showToast(message, type = "success") {
  const toast = document.getElementById("toast"),
    toastMsg = document.getElementById("toastMessage"),
    icon = toast.querySelector(".toast-icon");
  toastMsg.textContent = message;
  icon.textContent = type === "success" ? "✓" : type === "error" ? "✗" : "ℹ";
  icon.style.background =
    type === "success"
      ? "var(--color-success)"
      : type === "error"
      ? "var(--color-danger)"
      : "var(--color-teal)";
  toast.hidden = false;
  setTimeout(() => {
    toast.hidden = true;
  }, 3000);
}

function parseQuantity(text) {
  if (!text) return null;
  let t = text.trim();
  for (const [frac, val] of Object.entries(UNICODE_FRACTIONS)) {
    if (t.includes(frac)) {
      const m = t.match(new RegExp(`(\\d+)\\s*${frac}`));
      if (m)
        return { value: parseInt(m[1]) + val, original: m[0], isRange: false };
      return { value: val, original: frac, isRange: false };
    }
  }
  let m = t.match(/(\d+(?:\.\d+)?)\s*[-–—]\s*(\d+(?:\.\d+)?)/);
  if (m)
    return {
      value: (parseFloat(m[1]) + parseFloat(m[2])) / 2,
      original: m[0],
      isRange: true,
      min: parseFloat(m[1]),
      max: parseFloat(m[2]),
    };
  m = t.match(/(\d+)\s+(\d+)\/(\d+)/);
  if (m)
    return {
      value: parseInt(m[1]) + parseInt(m[2]) / parseInt(m[3]),
      original: m[0],
      isRange: false,
    };
  m = t.match(/(\d+)\/(\d+)/);
  if (m)
    return {
      value: parseInt(m[1]) / parseInt(m[2]),
      original: m[0],
      isRange: false,
    };
  m = t.match(/(\d+(?:\.\d+)?)/);
  if (m) return { value: parseFloat(m[1]), original: m[0], isRange: false };
  const words = t.toLowerCase().split(/\s+/);
  if (words[0] && NUMBER_WORDS[words[0]] !== undefined)
    return {
      value: NUMBER_WORDS[words[0]],
      original: words[0],
      isRange: false,
    };
  return null;
}
function extractUnit(text) {
  if (!text) return null;
  const lt = text.toLowerCase();
  const keys = Object.keys(UNIT_SYNONYMS).sort((a, b) => b.length - a.length);
  for (const k of keys) {
    const m = lt.match(new RegExp(`\\b${k}\\b`, "i"));
    if (m)
      return {
        unit: m[0],
        canonical: UNIT_SYNONYMS[k.toLowerCase()],
        original: m[0],
      };
  }
  return null;
}

function extractIngredient(text, qtyStr, unitStr) {
  let r = text;
  if (qtyStr) r = r.replace(qtyStr, "").trim();
  if (unitStr) r = r.replace(new RegExp(`\\b${unitStr}\\b`, "gi"), "").trim();
  const notes = [];
  r = r
    .replace(/\(([^)]+)\)/g, (_, c) => {
      notes.push(c.trim());
      return "";
    })
    .trim();
  r = r.replace(/^[,\-–—:;]+|[,\-–—:;]+$/g, "").trim();
  const words = r.split(/\s+/);
  const parts = [];
  for (const w of words) {
    const cw = w.toLowerCase().replace(/,/g, "");
    if (SIZE_WORDS.includes(cw)) {
      notes.push(cw);
      continue;
    }
    if (["of", "or", "and", "for"].includes(cw)) continue;
    if (!PREPARATION_WORDS.includes(cw)) parts.push(w.replace(/,/g, ""));
  }
  for (const p of QUALITATIVE_PHRASES)
    if (text.toLowerCase().includes(p) && !notes.includes(p)) notes.push(p);
  let ing = parts.join(" ").trim();
  for (const p of PREPARATION_WORDS)
    ing = ing.replace(new RegExp(`\\b${p}\\b`, "gi"), "").trim();
  ing = ing.replace(/\s+/g, " ").trim();
  for (const [k, v] of Object.entries(INGREDIENT_SYNONYMS))
    if (ing.toLowerCase().includes(k)) {
      ing = v;
      break;
    }
  return { ingredient: ing || "unknown", notes: notes.filter((n) => n) };
}

function checkAmbiguity(parsed, original) {
  const reasons = [],
    lo = original.toLowerCase();
  if (parsed.quantity === null || isNaN(parsed.quantity))
    reasons.push("No numeric quantity");
  if (parsed.isRange)
    reasons.push(`Range: ${parsed.quantityMin}-${parsed.quantityMax}`);
  for (const s of SIZE_WORDS)
    if (lo.includes(s)) {
      reasons.push(`Size word "${s}"`);
      break;
    }
  for (const i of IMPRECISE_WORDS)
    if (lo.includes(i)) {
      reasons.push(`Imprecise "${i}"`);
      break;
    }
  for (const p of QUALITATIVE_PHRASES)
    if (lo.includes(p)) {
      reasons.push(`"${p}"`);
      break;
    }
  if (!parsed.unit && parsed.quantity !== null)
    reasons.push("No unit - treating as count");
  return reasons;
}

function roundToPrecision(n) {
  if (n == null || isNaN(n)) return n;
  const m = Math.pow(10, state.settings.decimalPrecision);
  return Math.round(n * m) / m;
}

function convertVolumeToPreferred(ml, s) {
  const pu = s.preferredVolumeUnit,
    su = s.smallQuantityUnit;
  if (ml < 15 && su !== "ml")
    return su === "teaspoon"
      ? { quantity: roundToPrecision(ml / 4.929), unit: "teaspoon" }
      : { quantity: roundToPrecision(ml / 14.787), unit: "tablespoon" };
  switch (pu) {
    case "ml":
      return { quantity: roundToPrecision(ml), unit: "ml" };
    case "liter":
      return ml >= 100
        ? { quantity: roundToPrecision(ml / 1000), unit: "liter" }
        : { quantity: roundToPrecision(ml), unit: "ml" };
    case "cup":
      return ml >= 59
        ? { quantity: roundToPrecision(ml / 236.588), unit: "cup" }
        : ml >= 14
        ? { quantity: roundToPrecision(ml / 14.787), unit: "tablespoon" }
        : { quantity: roundToPrecision(ml / 4.929), unit: "teaspoon" };
    case "tablespoon":
      return ml >= 14
        ? { quantity: roundToPrecision(ml / 14.787), unit: "tablespoon" }
        : { quantity: roundToPrecision(ml / 4.929), unit: "teaspoon" };
    case "teaspoon":
      return { quantity: roundToPrecision(ml / 4.929), unit: "teaspoon" };
    default:
      return { quantity: roundToPrecision(ml), unit: "ml" };
  }
}

function convertWeightToPreferred(g, s) {
  switch (s.preferredWeightUnit) {
    case "g":
      return { quantity: roundToPrecision(g), unit: "g" };
    case "kg":
      return g >= 100
        ? { quantity: roundToPrecision(g / 1000), unit: "kg" }
        : { quantity: roundToPrecision(g), unit: "g" };
    case "oz":
      return { quantity: roundToPrecision(g / 28.3495), unit: "oz" };
    case "lb":
      return g >= 227
        ? { quantity: roundToPrecision(g / 453.592), unit: "lb" }
        : { quantity: roundToPrecision(g / 28.3495), unit: "oz" };
    default:
      return { quantity: roundToPrecision(g), unit: "g" };
  }
}

function convertToSystem(qty, unit) {
  if (!unit || !UNIT_CONVERSIONS[unit])
    return { quantity: roundToPrecision(qty), unit };
  const ui = UNIT_CONVERSIONS[unit];
  if (ui.type === "count") return { quantity: roundToPrecision(qty), unit };
  if (ui.type === "volume" && ui.toMl)
    return convertVolumeToPreferred(qty * ui.toMl, state.settings);
  if (ui.type === "weight" && ui.toG)
    return convertWeightToPreferred(qty * ui.toG, state.settings);
  return { quantity: roundToPrecision(qty), unit };
}
function parseIngredientLine(line) {
  const t = line.trim();
  if (!t) return null;
  const ck = t.toLowerCase();
  if (state.corrections[ck]) {
    const c = state.corrections[ck];
    let dq = c.quantity,
      du = c.unit;
    if (c.quantity !== null && c.unit) {
      const cv = convertToSystem(c.quantity, c.unit);
      dq = cv.quantity;
      du = cv.unit;
    }
    return {
      original: t,
      quantity: c.quantity,
      quantityMin: null,
      quantityMax: null,
      unit: c.unit,
      ingredient: c.ingredient || extractIngredient(t, "", "").ingredient,
      notes: c.notes ? [c.notes] : [],
      isRange: false,
      ambiguous: false,
      ambiguityReasons: [],
      corrected: true,
      correctionNote: c.note || "User correction",
      displayQuantity: dq,
      displayUnit: du,
    };
  }
  const qr = parseQuantity(t),
    ur = extractUnit(t);
  const { ingredient, notes } = extractIngredient(
    t,
    qr?.original || "",
    ur?.original || ""
  );
  const p = {
    original: t,
    quantity: qr?.value ?? null,
    quantityMin: qr?.min ?? null,
    quantityMax: qr?.max ?? null,
    unit: ur?.canonical || (qr && !ur ? "piece" : ""),
    ingredient,
    notes,
    isRange: qr?.isRange || false,
    ambiguous: false,
    ambiguityReasons: [],
    corrected: false,
    correctionNote: "",
  };
  const ar = checkAmbiguity(p, t);
  p.ambiguous = ar.length > 0;
  p.ambiguityReasons = ar;
  if (p.quantity !== null && p.unit) {
    const cv = convertToSystem(p.quantity, p.unit);
    p.displayQuantity = cv.quantity;
    p.displayUnit = cv.unit;
  } else {
    p.displayQuantity = p.quantity;
    p.displayUnit = p.unit;
  }
  return p;
}

function parseAllIngredients(text) {
  return text
    .split("\n")
    .map(parseIngredientLine)
    .filter((p) => p);
}

function formatNumber(n) {
  if (n == null || isNaN(n)) return "-";
  return Number.isInteger(n)
    ? n.toString()
    : n.toFixed(2).replace(/\.?0+$/, "");
}
function escapeHtml(t) {
  if (!t) return "";
  const d = document.createElement("div");
  d.textContent = t;
  return d.innerHTML;
}

function renderResults() {
  const c = document.getElementById("resultsContainer");
  if (!state.parsedIngredients.length) {
    c.innerHTML =
      '<div class="empty-state"><svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect x="8" y="8" width="48" height="48" rx="8" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4"/><path d="M24 32h16M32 24v16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><p>Paste recipe text and click "Parse Ingredients"</p></div>';
    return;
  }
  c.innerHTML = `<table class="results-table"><thead><tr><th>Original</th><th>Qty</th><th>Unit</th><th>Ingredient</th><th>Notes</th><th>Status</th></tr></thead><tbody>${state.parsedIngredients
    .map(
      (i, idx) =>
        `<tr><td class="original-cell" title="${escapeHtml(
          i.original
        )}">${escapeHtml(i.original)}</td><td class="qty-cell">${
          i.displayQuantity !== null ? formatNumber(i.displayQuantity) : "-"
        }</td><td class="unit-cell">${
          i.displayUnit || "-"
        }</td><td>${escapeHtml(i.ingredient)}</td><td class="notes-cell">${
          escapeHtml(i.notes.join(", ")) || "-"
        }</td><td class="status-cell">${
          i.corrected
            ? `<span class="status-icon clickable" data-index="${idx}">🔁<span class="tooltip">${escapeHtml(
                i.correctionNote
              )}</span></span>`
            : i.ambiguous
            ? `<span class="status-icon clickable" data-index="${idx}">⚠️<span class="tooltip">${escapeHtml(
                i.ambiguityReasons.join("; ")
              )}</span></span>`
            : '<span class="status-icon">✓</span>'
        }</td></tr>`
    )
    .join("")}</tbody></table>`;
  c.querySelectorAll(".status-icon.clickable").forEach((ic) => {
    ic.addEventListener("click", () =>
      openEditorModal(parseInt(ic.dataset.index))
    );
  });
  document.getElementById("exportJsonBtn").disabled = false;
  document.getElementById("exportCsvBtn").disabled = false;
  document.getElementById("copyClipboardBtn").disabled = false;
}

function renderCorrectionsList() {
  const c = document.getElementById("correctionsList"),
    keys = Object.keys(state.corrections);
  if (!keys.length) {
    c.innerHTML =
      '<div class="corrections-empty"><p>No saved corrections yet.</p></div>';
    return;
  }
  c.innerHTML = keys
    .map(
      (k) =>
        `<div class="correction-item"><div><div class="correction-key">"${escapeHtml(
          k
        )}"</div><div class="correction-value">→ ${
          state.corrections[k].quantity
        } ${
          state.corrections[k].unit
        }</div></div><div class="correction-actions"><button class="delete-correction-btn" data-key="${escapeHtml(
          k
        )}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="2"/></svg></button></div></div>`
    )
    .join("");
  c.querySelectorAll(".delete-correction-btn").forEach((b) => {
    b.addEventListener("click", () => {
      delete state.corrections[b.dataset.key];
      saveCorrections();
      renderCorrectionsList();
      showToast("Deleted");
      const inp = document.getElementById("recipeInput").value;
      if (inp.trim()) {
        state.parsedIngredients = parseAllIngredients(inp);
        renderResults();
      }
    });
  });
}

function generateSuggestions(ing) {
  const s = [],
    lo = ing.original.toLowerCase();
  if (lo.includes("onion"))
    s.push(
      lo.includes("small")
        ? { quantity: 60, unit: "g", note: "Small onion ≈ 60g" }
        : lo.includes("large")
        ? { quantity: 150, unit: "g", note: "Large onion ≈ 150g" }
        : { quantity: 100, unit: "g", note: "Medium onion ≈ 100g" }
    );
  if (lo.includes("garlic"))
    s.push({ quantity: 4, unit: "g", note: "1 clove ≈ 4g" });
  if (lo.includes("egg")) {
    s.push({ quantity: 50, unit: "g", note: "1 egg ≈ 50g" });
    if (ing.quantity)
      s.push({
        quantity: ing.quantity * 50,
        unit: "g",
        note: `${ing.quantity} eggs`,
      });
  }
if (lo.includes("pinch")) {
    s.push({ quantity: 0.5, unit: "g", note: "Pinch ≈ 0.5g" });
    s.push({ quantity: 1, unit: "g", note: "Generous pinch ≈ 1g" });
  }
  if (lo.includes("to taste")) {
    s.push({ quantity: 1, unit: "teaspoon", note: "Typical amount" });
    s.push({ quantity: 0.5, unit: "teaspoon", note: "Conservative" });
  }
  if (lo.includes("bunch"))
    s.push({ quantity: 30, unit: "g", note: "1 bunch ≈ 30g" });
  if (ing.isRange) {
    const mid = (ing.quantityMin + ing.quantityMax) / 2;
    s.push({
      quantity: mid,
      unit: ing.unit || "piece",
      note: `Midpoint ${ing.quantityMin}-${ing.quantityMax}`,
    });
  }
  return s;
}

function openEditorModal(idx) {
  const ing = state.parsedIngredients[idx];
  if (!ing) return;
  state.currentEditIndex = idx;
  document.getElementById("editorOriginalText").textContent = ing.original;
  document.getElementById(
    "editorParsedPreview"
  ).innerHTML = `<span class="qty">${
    ing.displayQuantity !== null ? formatNumber(ing.displayQuantity) : "?"
  }</span><span class="unit">${
    ing.displayUnit || "no unit"
  }</span><span class="ing">${ing.ingredient}</span>`;
  const re = document.getElementById("editorAmbiguityReason");
  if (ing.ambiguous) {
    re.textContent = ing.ambiguityReasons.join("; ");
    re.parentElement.style.display = "block";
  } else if (ing.corrected) {
    re.textContent = "Using correction: " + ing.correctionNote;
    re.parentElement.style.display = "block";
  } else re.parentElement.style.display = "none";
  const sl = document.getElementById("suggestionList"),
    sug = generateSuggestions(ing);
  if (sug.length) {
    sl.innerHTML = sug
      .map(
        (s, i) =>
          `<div class="suggestion-item"><input type="radio" name="suggestion" id="sug-${i}" data-qty="${
            s.quantity
          }" data-unit="${s.unit}" data-note="${escapeHtml(
            s.note
          )}"><label for="sug-${i}">${s.quantity} ${s.unit} - ${
            s.note
          }</label></div>`
      )
      .join("");
    document.getElementById("editorSuggestions").style.display = "block";
  } else {
    sl.innerHTML = "";
    document.getElementById("editorSuggestions").style.display = "none";
  }
  const qi = document.getElementById("customQuantity"),
    us = document.getElementById("customUnit");
  qi.value = ing.displayQuantity ?? ing.quantity ?? "";
  const vu = [
    "g",
    "kg",
    "oz",
    "lb",
    "ml",
    "liter",
    "cup",
    "tablespoon",
    "teaspoon",
    "piece",
    "clove",
    "bunch",
    "pinch",
    "dash",
    "slice",
    "sprig",
  ];
  us.value = vu.includes(ing.displayUnit || ing.unit || "")
    ? ing.displayUnit || ing.unit
    : "";
  document.getElementById("customNote").value = "";
  document
    .querySelectorAll('input[name="suggestion"]')
    .forEach((r) => (r.checked = false));
  document.getElementById("editorModal").hidden = false;
  setTimeout(() => qi.focus(), 100);
}

function closeEditorModal() {
  document.getElementById("editorModal").hidden = true;
  state.currentEditIndex = -1;
}
function openCorrectionsModal() {
  renderCorrectionsList();
  document.getElementById("correctionsModal").hidden = false;
}
function closeCorrectionsModal() {
  document.getElementById("correctionsModal").hidden = true;
}
function openSettingsModal() {
  populateSettingsModal();
  document.getElementById("settingsModal").hidden = false;
}
function closeSettingsModal() {
  document.getElementById("settingsModal").hidden = true;
}

function populateSettingsModal() {
  document
    .querySelectorAll('input[name="defaultSystem"]')
    .forEach((r) => (r.checked = r.value === state.settings.unitSystem));
  document.getElementById("preferredVolumeUnit").value =
    state.settings.preferredVolumeUnit;
  document.getElementById("preferredWeightUnit").value =
    state.settings.preferredWeightUnit;
  document.getElementById("decimalPrecision").value =
    state.settings.decimalPrecision;
  document.getElementById("smallQuantityUnit").value =
    state.settings.smallQuantityUnit;
}

function saveSettingsFromModal() {
  const sr = document.querySelector('input[name="defaultSystem"]:checked');
  state.settings = {
    unitSystem: sr?.value || "metric",
    preferredVolumeUnit: document.getElementById("preferredVolumeUnit").value,
    preferredWeightUnit: document.getElementById("preferredWeightUnit").value,
    decimalPrecision: parseInt(
      document.getElementById("decimalPrecision").value
    ),
    smallQuantityUnit: document.getElementById("smallQuantityUnit").value,
  };
  saveSettings();
  const inp = document.getElementById("recipeInput").value;
  if (inp.trim()) {
    state.parsedIngredients = parseAllIngredients(inp);
    renderResults();
  }
  closeSettingsModal();
  showToast("Settings saved!");
}

function resetSettingsToDefaults() {
  if (confirm("Reset all settings to defaults?")) {
    state.settings = { ...DEFAULT_SETTINGS };
    saveSettings();
    populateSettingsModal();
    showToast("Settings reset");
  }
}
function saveCorrection() {
  const idx = state.currentEditIndex;
  if (idx < 0 || idx >= state.parsedIngredients.length) {
    showToast("No ingredient selected", "error");
    return;
  }
  const ing = state.parsedIngredients[idx];
  const sel = document.querySelector('input[name="suggestion"]:checked');
  let qty, unit, note;
  if (sel) {
    qty = parseFloat(sel.dataset.qty);
    unit = sel.dataset.unit || "";
    note = sel.dataset.note || "Suggestion";
  } else {
    qty = parseFloat(document.getElementById("customQuantity").value);
    unit = document.getElementById("customUnit").value || "";
    note = document.getElementById("customNote").value || "Custom";
    if (isNaN(qty) || qty <= 0) {
      showToast("Enter valid quantity", "error");
      return;
    }
  }
  state.corrections[ing.original.toLowerCase().trim()] = {
    quantity: qty,
    unit,
    note,
    ingredient: ing.ingredient,
  };
  saveCorrections();
  const inp = document.getElementById("recipeInput").value;
  if (inp.trim()) {
    state.parsedIngredients = parseAllIngredients(inp);
    renderResults();
  }
  closeEditorModal();
  showToast("Correction saved!");
}

function exportJSON() {
  const notes = document.getElementById("recipeNotes")?.value || "";
  const data = {
    ingredients: state.parsedIngredients.map((i) => ({
      original: i.original,
      quantity: i.displayQuantity,
      unit: i.displayUnit,
      ingredient: i.ingredient,
      notes: i.notes.join(", "),
      ambiguous: i.ambiguous,
    })),
    recipeNotes: notes,
  };
  downloadFile(
    JSON.stringify(data, null, 2),
    "ingredients.json",
    "application/json"
  );
  showToast("JSON exported!");
}

function exportCSV() {
  const notes = document.getElementById("recipeNotes")?.value || "";
  const h = "original,quantity,unit,ingredient,notes,ambiguous";
  const r = state.parsedIngredients.map(
    (i) =>
      `"${i.original.replace(/"/g, '""')}",${i.displayQuantity ?? ""},${
        i.displayUnit || ""
      },"${i.ingredient.replace(/"/g, '""')}","${i.notes
        .join(", ")
        .replace(/"/g, '""')}",${i.ambiguous}`
  );
  // Add recipe notes at the end
  const notesSection = notes
    ? `\n\n"RECIPE NOTES"\n"${notes.replace(/"/g, '""')}"`
    : "";
  downloadFile(
    [h, ...r].join("\n") + notesSection,
    "ingredients.csv",
    "text/csv"
  );
  showToast("CSV exported!");
}

async function copyToClipboard() {
  const notes = document.getElementById("recipeNotes")?.value || "";
  let t = state.parsedIngredients
    .map(
      (i) =>
        `${i.displayQuantity ?? ""} ${i.displayUnit || ""} ${i.ingredient}${
          i.notes.length ? ` (${i.notes.join(", ")})` : ""
        }`
    )
    .join("\n");
  if (notes) t += `\n\n--- Notes ---\n${notes}`;
  try {
    await navigator.clipboard.writeText(t);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = t;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  }
  showToast("Copied!");
}

function downloadFile(content, filename, type) {
  const b = new Blob([content], { type }),
    u = URL.createObjectURL(b),
    a = document.createElement("a");
  a.href = u;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(u);
}

// ============================================
// BAR CHART & ALTERNATIVES (No AI)
// ============================================

// Static healthier alternatives database
const ALTERNATIVES_DB = {
  butter: { alt: "Olive oil or Ghee", reason: "Healthier unsaturated fats" },
  sugar: {
    alt: "Honey or Jaggery",
    reason: "Natural sweeteners with minerals",
  },
  cream: { alt: "Greek Yogurt", reason: "More protein, less fat" },
  flour: { alt: "Whole Wheat Flour", reason: "More fiber & nutrients" },
  maida: { alt: "Whole Wheat Flour", reason: "Higher fiber content" },
  oil: { alt: "Olive Oil or Coconut Oil", reason: "Heart-healthy fats" },
  salt: { alt: "Pink Himalayan Salt", reason: "Contains trace minerals" },
  rice: { alt: "Brown Rice or Quinoa", reason: "More fiber & protein" },
  milk: {
    alt: "Almond or Oat Milk",
    reason: "Lower calories, dairy-free option",
  },
  cheese: {
    alt: "Cottage Cheese (Paneer)",
    reason: "Higher protein, lower fat",
  },
  potato: { alt: "Sweet Potato", reason: "More vitamins & fiber" },
  pasta: { alt: "Whole Grain Pasta", reason: "Higher fiber content" },
  bread: { alt: "Whole Grain Bread", reason: "More nutrients & fiber" },
  egg: { alt: "Egg Whites", reason: "Lower cholesterol" },
  mayonnaise: { alt: "Greek Yogurt", reason: "Less fat, more protein" },
  soda: { alt: "Sparkling Water", reason: "Zero calories" },
};

function renderAlternatives() {
  const container = document.getElementById("alternativesList");
  if (!container) return;

  if (!state.parsedIngredients.length) {
    container.innerHTML =
      '<div class="alt-empty">Parse ingredients to see healthier alternatives</div>';
    return;
  }

  // Find matching alternatives
  const alternatives = [];
  state.parsedIngredients.forEach((ing) => {
    const name = ing.ingredient.toLowerCase();
    for (const [key, value] of Object.entries(ALTERNATIVES_DB)) {
      if (name.includes(key) && !alternatives.find((a) => a.original === key)) {
        alternatives.push({
          original: ing.ingredient,
          alternative: value.alt,
          reason: value.reason,
        });
        break;
      }
    }
  });

  if (!alternatives.length) {
    container.innerHTML =
      '<div class="alt-empty">No alternatives found for these ingredients</div>';
    return;
  }

  container.innerHTML = alternatives
    .slice(0, 5)
    .map(
      (alt) => `
    <div class="alt-item">
      <div class="alt-item-header">${escapeHtml(alt.original)} → ${escapeHtml(
        alt.alternative
      )}</div>
      <div class="alt-item-sub">${escapeHtml(alt.reason)}</div>
    </div>
  `
    )
    .join("");
}
