const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  const dividendNum = Number(dividend); 
  const dividerNum = Number(divider);

  // Validation: Check for missing values
  if (!dividend || !divider) { 
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
    return;
  }

  // Validation: Ensure values are numbers
  if (isNaN(dividendNum) || isNaN(dividerNum)) {
    document.body.innerHTML = 
      "<h1 style='text-align:center; margin-top:20%; font-family:sans-serif;'>Something critical went wrong. Please reload the page</h1>";
    console.error(new Error("An error occurred. Only numbers are valid inputs."));
    return;
  }

  // Validation: Prevent division by zero
  if (dividerNum === 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again.";
    console.error(new Error("An error occurred. Division by zero attempted."));
    return;
  }

  // Perform the division safely - only once all checks pass do we do the division //
  result.innerText = Math.floor(dividendNum / dividerNum); // the result is rounded down //
});