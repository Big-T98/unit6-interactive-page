/* =====================================================
   Live Profile Card - Your Unit 6 Project
   =====================================================

   Your mission: Build an interactive web page that
   responds to the user in real time.

   The HTML and CSS are already done. Your job is to
   wire up the JavaScript so:
   - When user types their name, it shows on the card
   - When user types their hobby, it shows on the card
   - When user picks a mood, it updates the card
   - When user clicks the dark mode button, the page toggles dark mode

   You can also choose to BUILD YOUR OWN topic (not a profile
   card). Some ideas:
   - Theme customizer (multiple style options)
   - Joke / quote / compliment generator
   - Form feedback app
   - Mood switcher

   If you go your own way, just make sure your JS hits
   all the same requirements.

   Requirements:
   - Use addEventListener for AT LEAST 2 different events
   - Make AT LEAST 3 different DOM updates
     (.textContent, .style, .value, .classList, etc.)
   - The page should respond visibly to user actions
   ===================================================== */


// =====================================================
// STEP 1: Grab all the elements you need
// =====================================================
// Hint: Use getElementById to grab each element. It's
// usually easiest to grab them all at the top so they're
// ready to use later.
//
// You'll need to grab:
// - The name input (id "nameInput")
// - The hobby input (id "hobbyInput")
// - The mood select (id "moodSelect")
// - The theme button (id "themeBtn")
// - The card name display (id "cardName")
// - The card hobby display (id "cardHobby")
// - The card mood display (id "cardMood")
//
// Write your code here:

let nameInput = document.getElementById("nameInput");
let hobbyInput = document.getElementById("hobbyInput");
let moodSelect = document.getElementById("moodSelect");
let colorSelect = document.getElementById("colorSelect");
let themeBtn = document.getElementById("themeBtn");
let resetBtn = document.getElementById("reset");
let cardName = document.getElementById("cardName");
let cardHobby = document.getElementById("cardHobby");
let cardMood = document.getElementById("cardMood");
let moodEmoji = {
    default: "🎭 Choose Your Mood",
    happy: "😊 Happy",
    chill: "😎 Chill",
    excited: "🤩 Excited",
    sleepy: "😴 Sleepy"
};


// =====================================================
// STEP 2: Live update the name on the card
// =====================================================
// Hint: Add an "input" event listener to the name input.
// Inside the callback, update cardName.textContent with
// whatever the user typed.
//
// Use template literals if you want to add extra text!
// Like `Name: ${nameInput.value}` or just nameInput.value
//
// Write your code here:

nameInput.addEventListener("input", function() { 
  cardName.textContent = `Name: ${nameInput.value}`;
});


// =====================================================
// STEP 3: Live update the hobby on the card
// =====================================================
// Hint: Same pattern as Step 2. Add an "input" event
// listener to the hobby input. Update cardHobby.textContent
// with the value.
//
// Write your code here:
hobbyInput.addEventListener("input", function() {
  cardHobby.textContent = `${hobbyInput.value}`;
});



// =====================================================
// STEP 4: Update mood when the user picks one
// =====================================================
// Hint: Add a "change" event listener to the mood select.
// Inside the callback, update cardMood.textContent.
//
// Bonus: Use a small dictionary (object) to translate
// "happy" / "chill" / etc. into emoji versions, like:
//
//   let moodEmoji = {
//     happy: "😊 Happy",
//     chill: "😎 Chill",
//     excited: "🤩 Excited",
//     sleepy: "😴 Sleepy"
//   };
//
// Then use: moodEmoji[moodSelect.value]
//
// Write your code here:

moodSelect.addEventListener("change", function() {
  cardMood.textContent = moodEmoji[moodSelect.value];
});


// =====================================================
// STEP 5: Dark mode toggle button
// =====================================================
// Hint: Add a "click" event listener to themeBtn.
// Inside, use document.body.classList.toggle("dark")
// to switch dark mode on and off.
//
// The CSS already has dark mode styles ready, so this
// one line in your callback will do all the visual work!
//
// Write your code here:
themeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark");
});



// =====================================================
// BONUS CHALLENGES (Pick at least 1)
// =====================================================
//
// BONUS 1: Reset button
// Add a button to your HTML that clears all inputs and
// resets the card to defaults. Use input.value = "" to
// clear an input field.
resetBtn.addEventListener("click", function() {
  nameInput.value = "";
  hobbyInput.value = "";
  cardName.textContent = "Your Name";
  cardHobby.textContent = "Your hobby will appear here";
  cardMood.textContent = `🎭 Choose Your Mood`;
  document.getElementById("profileCard").style.backgroundColor = "";
});

// BONUS 2: Color picker
// Add an <input type="color"> and use its "input" event
// to update the card's backgroundColor in real time.
colorSelect.addEventListener("change", function() {
  let color = colorSelect.value;
  document.getElementById("profileCard").style.backgroundColor = color;
});



// BONUS 3: Mood-driven theme
// When the user picks a mood, ALSO change the card
// background color to match. Like sleepy = blue,
// excited = pink, etc.
//
//
// BONUS 4: Character counter
// Show a small "X / 20" counter next to the name input
// that updates as they type. Color it red if they go
// over 20 characters.



// =====================================================
// DONE! Save and open index.html. Test:
// - Typing in the name field updates the card live
// - Typing in the hobby field updates the card live
// - Picking a mood updates the card
// - Clicking the dark mode button flips the theme
// =====================================================
