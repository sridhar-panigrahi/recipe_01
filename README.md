✔ Professional
✔ GitHub-friendly
✔ Includes screenshots placeholder
✔ Installation guide
✔ Features list
✔ Tech stack
✔ File structure
✔ Future roadmap
✔ License (MIT)

⸻

✅ Your Complete README.md

https://github.com/sridhar-panigrahi/recipe_01/blob/main/README.md

⸻


# 🧪 PantryClean — Recipe Ingredient Normalizer

PantryClean is a **client-side recipe parsing tool** that converts messy ingredient text into a structured format.  
It automatically detects **quantities, units, ingredient names, health alternatives, and ambiguity flags** — while keeping everything stored **locally in the browser**.

> ⚡ No backend. No database. No tracking. Everything happens locally.

---

## 🍽️ What PantryClean Does

| Feature | Status |
|--------|--------|
| Parse free-text recipe ingredients | ✅ |
| Unit normalization (ml/g/cups/oz/etc.) | ✅ |
| Detect ambiguous instructions (like "pinch", "to taste") | ✅ |
| Autofill common interpretations (eggs, onions, cloves, bunches) | ✅ |
| Editable ingredient corrections | ✅ |
| Export to CSV, JSON, clipboard | ✅ |
| Built-in sample recipes | ✅ |
| Settings for unit system & precision | ✅ |
| LocalStorage persistence (no server) | ✅ |
| Responsive UI with dark/light theme | ✅ |

---

## 🏗️ Tech Stack

| Layer | Technology |
|------|-----------|
| UI | HTML5 + CSS (custom styling, no framework) |
| Logic | Vanilla JavaScript |
| Storage | LocalStorage |
| UX | Tooltip parsing, modals, keyboard shortcuts |
| CSS Features | CSS variables, accessibility rules, responsive layout |

---

## 📁 Project Structure

PantryClean/
│
├── index.html        # Landing page
├── app.html          # Main recipe normalizing app
├── styles.css        # Full UI styling (~500 lines)
├── app.js            # Core parsing engine + UI logic
└── README.md         # You’re reading this 😄

---

## 🚀 Getting Started

### 1️⃣ Clone the repository:

```sh
git clone https://github.com/yourusername/PantryClean.git
cd PantryClean

2️⃣ Run locally:

No build step needed — just open:

index.html

in your browser.

3️⃣ (Optional) Run with a local server:

npx serve

or:

python3 -m http.server

Then visit:

http://localhost:8000


⸻

🧠 How Parsing Works

PantryClean uses multiple detection layers:
	•	Unicode fraction handling
	•	Regex quantity extraction
	•	Unit synonym mapping (e.g., tbsp, tablespoon, T → tablespoon)
	•	Ingredient cleanup
	•	Ambiguity scoring
	•	Conversion rules based on user settings
	•	Local corrections override future parsing

Example:

"2 tbsp chopped fresh coriander"
↓
Qty: 30 ml
Unit: ml
Ingredient: coriander
Flags: none


⸻

⚙️ Settings

Users can customize:
	•	Metric / Imperial formats
	•	Preferred volume unit (ml, cups, tablespoon, etc.)
	•	Preferred weight (g, oz, lb, etc.)
	•	Decimal precision
	•	Handling tiny measurements (pinch, <15ml, etc.)

All preferences are saved automatically.

⸻

💾 Data Persistence
	•	Saved parsing corrections are stored under:

localStorage.pantryClean_corrections

	•	Settings are stored under:

localStorage.pantryClean_settings

No backend is used — everything lives on the user’s device.

⸻

🧰 Keyboard Shortcuts

Shortcut	Action
Ctrl + Enter	Parse ingredients
Esc	Close active modal
S	Open Settings


⸻

📤 Export Options

Format	Example Use
CSV	Meal planning, spreadsheets
JSON	Grocery apps, automation
Clipboard text	Quick sharing or notes


⸻

🧩 Future Improvements (Roadmap)
	•	AI category tagging (vegetable, protein, spice, dairy, etc.)
	•	Shopping list grouping by aisle
	•	OCR support for printed recipes
	•	Multi-language ingredient dictionary
	•	Nutrition estimation API mode

⸻

📸 Screenshots

(Add images here after deployment)

![Landing Page](images/landing.png)
![Parsed Ingredients](images/results.png)
![Settings Panel](images/settings.png)


⸻

🧑‍💻 Contributing

Pull requests are welcome!
Open an issue for bugs, enhancements, or new feature proposals.

⸻

📜 License

MIT License — free to use, modify, and distribute.

⸻

🌟 Credits

Built by Shridhar Panigrahi
Designed for clean cooking workflows, automation, and digital recipe storage.

---

Deployed link 

> https://ojt-recipeunitnormalizer.vercel.app/
