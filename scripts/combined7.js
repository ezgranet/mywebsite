console.log("combined5.js is loading");
console.log("combined5.js is loading");

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired");
    
    const sidenotesContainer = document.getElementById("sidenotes");
    if (sidenotesContainer) {
        console.log("Sidenotes container found");
    } else {
        console.log("Sidenotes container not found");
    }

    // Rest of your code...
});
document.addEventListener("DOMContentLoaded", function () {
    // Wait for CSS to load
    const links = document.getElementsByTagName('link');
    const cssPromises = Array.from(links)
        .filter(link => link.rel === 'stylesheet')
        .map(link => {
            return new Promise((resolve, reject) => {
                link.onload = resolve;
                link.onerror = reject;
            });
        });

    Promise.all(cssPromises).then(() => {
        // CSS has loaded, now run the script
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
            sidenoteNumber.classList.add("sidenote-number");
            sidenoteNumber.textContent = `${index + 1}`;
            
            // Append an em space after the number
            sidenoteNumber.innerHTML += '&emsp;';

            // Use innerHTML to set the formatted content of the span
            sidenoteDiv.innerHTML = span.innerHTML;

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
                sidenoteDiv.style.top = `${labelRect.top - containerRect.top}px`;
                sidenoteDiv.style.left = `${labelRect.right - containerRect.left + 10}px`;
            }
        });
    }).catch(error => {
        console.error("Error loading CSS:", error);
    });
});