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
