// Get the HTML elements
const colorButton = document.getElementById("colorbutton");
const rgbDisplay = document.getElementById("rgb");
const hexDisplay = document.getElementById("hex");
const copyHexButton = document.getElementById("copyhex");
const copyRgbButton = document.getElementById("copyrgb");

// Store the latest color values
let currentRgb = "";
let currentHex = "";

function generateRandomColor() {

    // Generate random RGB values
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const rgbColor = `rgb(${red}, ${green}, ${blue})`;

    // Update the background color
    document.body.style.background = rgbColor;

    // Choose a readable text color
    const brightness = (red * 0.299 + green * 0.587 + blue * 0.114);
    document.body.style.color = brightness > 186 ? "#000000" : "#FFFFFF";

    // Save and display the RGB value
    currentRgb = rgbColor;
    console.log(rgbColor);
    rgbDisplay.textContent = `RGB: ${rgbColor}`;

    // Convert RGB values to HEX
    const redHex = red.toString(16).toUpperCase().padStart(2, '0');
    const greenHex = green.toString(16).toUpperCase().padStart(2, '0');
    const blueHex = blue.toString(16).toUpperCase().padStart(2, '0');

    const hexColor = `#${redHex}${greenHex}${blueHex}`;

    // Save and display the HEX value
    currentHex = hexColor;
    console.log(hexColor);
    hexDisplay.textContent = `HEX: ${hexColor}`;
}

// Change the background when clicked
colorButton.addEventListener("click", generateRandomColor);

// Copy the RGB value
copyRgbButton.addEventListener("click", async () => {
    if (!currentRgb) {
        alert("Please generate a random background first!");
        return;
    }

    try {
        await navigator.clipboard.writeText(currentRgb);
        alert("Copied RGB: " + currentRgb);
    } catch (error) {
        console.error("Failed to copy RGB:", error);
    }
});

// Copy the HEX value
copyHexButton.addEventListener("click", async () => {
    if (!currentHex) {
        alert("Please generate a random background first!");
        return;
    }

    try {
        await navigator.clipboard.writeText(currentHex);
        alert("Copied HEX: " + currentHex);
    } catch (error) {
        console.error("Failed to copy HEX:", error);
    }
});