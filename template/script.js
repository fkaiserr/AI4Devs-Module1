// Reverse a string safely (handles surrogate pairs)
function reverseString(str) {
  return Array.from(str).reverse().join('');
}

// Validate input: not empty, no whitespace-only, no emojis
function validateInput(input) {
  if (!input || input.trim().length === 0) {
    return "Error: Input cannot be empty or whitespace only.";
  }

  // Regex matches most emoji ranges (basic filter)
  const emojiRegex = /[\p{Extended_Pictographic}]/u;
  if (emojiRegex.test(input)) {
    return "Error: Emojis are not allowed.";
  }

  return null; // valid
}

document.getElementById("okButton").addEventListener("click", () => {
  const input = document.getElementById("userInput").value;
  const error = validateInput(input);

  const resultDiv = document.getElementById("result");
  if (error) {
    resultDiv.textContent = error;
    resultDiv.style.color = "red";
  } else {
    const reversed = reverseString(input);
    resultDiv.textContent = `Reversed: ${reversed}`;
    resultDiv.style.color = "black";
  }
});

/*
  Test Cases (manual, expected results):

  Input: "hello123"
  Output: "321olleh"

  Input: "world"
  Output: "dlrow"
*/
