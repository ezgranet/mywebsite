document.addEventListener("DOMContentLoaded", function () {
    function positionSidenotes() {
        const sidenotesContainer = document.getElementById("sidenotes");
        if (sidenotesContainer) {
            // Clear existing sidenotes to prevent duplicates
            sidenotesContainer.innerHTML = '';
            sidenotesContainer.style.position = 'relative';
            
            const footnoteSpans = document.querySelectorAll("span[id^='fn-']");
            let previousBottom = 0; // Track the bottom position of the last sidenote

            footnoteSpans.forEach((span, index) => {
                const sidenoteDiv = document.createElement("div");
                sidenoteDiv.classList.add("sidenote");
                sidenoteDiv.id = `sidenote-${index + 1}`;

                const sidenoteNumber = document.createElement("strong");
                sidenoteNumber.classList.add("sidenote-number");
                sidenoteNumber.textContent = `${index + 1}`;
                sidenoteNumber.innerHTML += '&emsp;';

                sidenoteDiv.appendChild(sidenoteNumber);
                sidenoteDiv.innerHTML += span.innerHTML;

                sidenotesContainer.appendChild(sidenoteDiv);

                const footnoteLabel = document.querySelector(`label[for='fn-${index + 1}']`);
                if (footnoteLabel) {
                    // Use offsetTop to get more reliable positioning
                    const containerTop = sidenotesContainer.offsetTop;
                    const labelOffsetTop = footnoteLabel.offsetTop;

                    // Calculate the ideal top position
                    let topPosition = labelOffsetTop - containerTop;

                    // Ensure sufficient spacing from the previous sidenote
                    if (topPosition < previousBottom + 10) { // 10px as a minimum gap
                        topPosition = previousBottom + 10;
                    }

                    // Set the new position and update previousBottom
                    sidenoteDiv.style.position = "absolute";
                    sidenoteDiv.style.top = `${topPosition}px`;
                    
                    // Adjust horizontal positioning
                    const contentWrapper = document.querySelector(".content-wrapper");
                    if (contentWrapper) {
                        const wrapperRect = contentWrapper.getBoundingClientRect();
                        const labelRect = footnoteLabel.getBoundingClientRect();
                        sidenoteDiv.style.left = `${labelRect.right - wrapperRect.left + 10}px`;
                    }

                    previousBottom = topPosition + sidenoteDiv.offsetHeight;
                } else {
                    console.log(`Could not find footnote label for sidenote ${index + 1}`);
                }
            });
        } else {
            console.log("Sidenotes container not found");
        }
    }

    // Initial positioning
    positionSidenotes();

    // Add resize event listener with more robust debounce
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Ensure layout has settled
            requestAnimationFrame(positionSidenotes);
        }, 250);
    });
});