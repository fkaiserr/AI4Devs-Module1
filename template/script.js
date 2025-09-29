// Safe reverse using Array.from to handle surrogate pairs
function reverseString(str) {
  return Array.from(str).reverse().join('');
}

// Basic validation: not empty/whitespace-only and no emojis
function validateInput(input) {
  if (!input || input.trim().length === 0) {
    return "Error: Input cannot be empty or whitespace only.";
  }
  // Reject emojis (covers most emoji code points)
  const emojiRegex = /[\p{Extended_Pictographic}]/u;
  if (emojiRegex.test(input)) {
    return "Error: Emojis are not allowed.";
  }
  return null;
}

// Word count helper: counts non-empty tokens split by whitespace
function countWords(str) {
  const tokens = str.trim().split(/\s+/).filter(Boolean);
  return tokens.length;
}

// UI elements
const inputEl = document.getElementById("userInput");
const resultEl = document.getElementById("result");
const errorEl = document.getElementById("error");
const buttonsEl = document.getElementById("buttons");
const okBtn = document.getElementById("okButton");
const reverseBtn = document.getElementById("reverseButton");
const copyBtn = document.getElementById("copyButton");

// Live update: validate and show reversed string as user types
function updateLive() {
  const value = inputEl.value;
  const err = validateInput(value);

  // Toggle buttons only if > 3 words AND no validation error
  const showButtons = countWords(value) > 3 && !err;
  buttonsEl.style.display = showButtons ? "flex" : "none";

  if (err) {
    errorEl.textContent = err;
    resultEl.textContent = ""; // no result on error
    return;
  }

  errorEl.textContent = "";
  resultEl.textContent = `Reversed (live): ${reverseString(value)}`;
}

// Button actions
function finalizeReverse() {
  const value = inputEl.value;
  const err = validateInput(value);
  if (err) {
    errorEl.textContent = err;
    return;
  }
  errorEl.textContent = "";
  resultEl.textContent = `Reversed: ${reverseString(value)}`;
}

function copyReversed() {
  const current = resultEl.textContent.replace(/^Reversed(?: \(live\))?:\s*/, "");
  if (!current) {
    errorEl.textContent = "Nothing to copy yet.";
    return;
  }
  navigator.clipboard?.writeText(current)
    .then(() => { errorEl.textContent = "Copied!"; })
    .catch(() => { errorEl.textContent = "Copy failed. Please try again."; });
}

// Event listeners
inputEl.addEventListener("input", updateLive);
okBtn.addEventListener("click", finalizeReverse);
reverseBtn.addEventListener("click", finalizeReverse);
copyBtn.addEventListener("click", copyReversed);

// Initial state
updateLive();

/*
  Test Cases (manual, expected results):

  Input: "hello123"
  Output: "321olleh"

  Input: "world"
  Output: "dlrow"
*/
