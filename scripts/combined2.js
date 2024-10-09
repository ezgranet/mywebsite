document.addEventListener("DOMContentLoaded", function () {
    const sidenotesContainer = document.getElementById("sidenotes");

    if (!sidenotesContainer) {
        console.error("No <div> with ID 'sidenotes' found.");
        return;
    }

    // Create a container for all sidenotes
    const footnoteSpans = document.querySelectorAll("span[id^='fn-']");
    footnoteSpans.forEach((span, index) => {
        const sidenoteDiv = document.createElement("div");
        sidenoteDiv.classList.add("sidenote");
        sidenoteDiv.id = `sidenote-${index + 1}`;
        
        // Create a strong element for the sidenote number and add a class
        const sidenoteNumber = document.createElement("strong");
        sidenoteNumber.classList.add("sidenote-number"); // Add a class for styling
        sidenoteNumber.textContent = `${index + 1}. `; // Add the number followed by a space
        
        // Append an em space after the number
        sidenoteNumber.innerHTML += '&emsp;'; // Add &emsp; after the number

        // Use innerHTML to set the formatted content of the span
        sidenoteDiv.innerHTML = span.innerHTML; // This keeps the original formatting

        // Prepend the strong element to the sidenoteDiv
        sidenoteDiv.prepend(sidenoteNumber);
        
        // Append the sidenote to the sidenotes container
        sidenotesContainer.appendChild(sidenoteDiv);
        
        // Position the sidenote next to its corresponding footnote label
        const footnoteLabel = document.querySelector(`label[for='fn-${index + 1}']`);
        if (footnoteLabel) {
            // Get position of the footnote label
            const labelRect = footnoteLabel.getBoundingClientRect();
            const containerRect = document.querySelector(".content-wrapper").getBoundingClientRect();
            
            // Calculate the position of the sidenote
            sidenoteDiv.style.position = "absolute";
            sidenoteDiv.style.top = `${labelRect.top - containerRect.top}px`; // Aligns to the top of the label
            sidenoteDiv.style.left = `${labelRect.right - containerRect.left + 10}px`; // Places to the right of the label
        }
    });
});
