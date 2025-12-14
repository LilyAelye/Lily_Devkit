/**
 * Bottom right notification function.
 * Displays a notification at the bottom right of the screen with optional duration and redirect functionality.
 * @example
 *  BRNPF({ Text: "This is a notification!", Duration: 5000, Redirect: true });
 *  // summary: Displays a notification with the specified text for 5 seconds, then redirects the page.
 *  // Just creates a notification based on the following arguments
 * @returns {void}
 * @warning 
 *  This function directly changes the Document to add notification elements. Use with caution to avoid unintended errors.
 * @param {Object} params - Configuration object for the notification.
 * @param {string} params.Text - The text content of the notification.
 * @param {number} [params.Duration=3000] - The duration (in milliseconds) the notification is displayed before fading out.
 * @param {boolean} [params.Redirect=false] - If true, redirects the page after the notification fades out.
 * @info
 *   Made by Aely (Lily)
 *   This is apart of a larger library for VIALY bot website.
 */
//** 

function BRNPF(params) {
    
    const note = document.createElement("div");
    note.innerText = params.Text;
            note.style.position = "fixed";
            note.style.bottom = "20px";
            note.style.right = "20px";
            note.style.background = "rgba(0,0,0,0.7)";
            note.style.color = "white";
            note.style.padding = "12px 16px";
            note.style.borderRadius = "8px";
            note.style.fontFamily = "sans-serif";
            note.style.boxShadow = "0 0 10px rgba(0,0,0,0.4)";
            note.style.opacity = "0";
            note.style.transition = "opacity 0.8s ease, right 1.2s ease";
            note.classList.add("Not");

            var totalLifetime = 3000; // ms before it fades out
            if (params.Duration) {
                totalLifetime = params.Duration
            }
            const startTime = performance.now();
            let frameCount = 0;

            var hmn = document.body.getElementsByClassName('Not').length+1;
            const offset = (hmn - 1) * 60;  
            note.style.bottom = `${20 + offset}px`;
            document.body.appendChild(note);
            console.log(hmn)
            const bar = document.createElement("div")
            var bwd = note.offsetWidth;
            console.log('BWD: ', bwd)
            bar.style.backgroundColor = "#fff";
            bar.style.height = "5px";
            bar.style.position = "fixed";
            bar.style.bottom =  `${20 + offset}px`;
            bar.style.width = `${bwd}px`;

            function updateBar(now) {
                frameCount++;

                // Only update every 5 frames
                if (frameCount % 1 === 0) {
                    const elapsed = now - startTime;
                    const remaining = Math.max(totalLifetime - elapsed, 0);
                    const pct = remaining / totalLifetime;
                    bar.style.width = `${pct * bwd}px`;
                }

                if (now - startTime < totalLifetime) {
                    requestAnimationFrame(updateBar);
                }
            }
            requestAnimationFrame(updateBar);

            
            note.appendChild(bar);

                            // fade in
            setTimeout(() => {
                                note.style.opacity = "1";
                            }, 10);

                            // fade out after 3 seconds, then remove
            setTimeout(() => {
                                note.style.opacity = "0";
                                note.style.right = '-420px';
                                setTimeout(() => {
                                    note.remove();
                                    if (params.Redirect) {
                                        window.location.href = window.location.href;
                                    }
                                }, 1000);
                            }, totalLifetime);

};

/**
 * Top (centered) notification function.
 * Displays a notification at the bottom right of the screen with optional duration and redirect functionality.
 * @example
 *  TCNPF({ Text: "This is a notification!", Duration: 5000});
 *  // summary: Displays a notification with the specified text for 5 seconds.
 *  // Just creates a notification based on the following arguments
 * @returns {void}
 * @warning 
 *  This function directly changes the Document to add notification elements. Use with caution to avoid unintended errors.
 * @param {Object} params - Configuration object for the notification.
 * @param {string} params.Text - The text content of the notification.
 * @param {number} [params.Duration=3000] - The duration (in milliseconds) the notification is displayed before fading out.
 * @info
 *   Made by Aely (Lily)
 *   This is apart of a larger library for VIALY bot website.
 */
//** 

function TCNPF(params) {
    
    const note = document.createElement("div");
    note.innerText = params.Text;
            note.style.position = "fixed";
            note.style.top = "20px";
            note.style.right = "50vw";
            note.style.background = "rgba(0,0,0,0.7)";
            note.style.color = "white";
            note.style.padding = "12px 16px";
            note.style.borderRadius = "8px";
            note.style.fontFamily = "sans-serif";
            note.style.boxShadow = "0 0 10px rgba(0,0,0,0.4)";
            note.style.opacity = "0";
            note.style.transition = "opacity 0.8s ease, top 1.2s ease";
            note.classList.add("Not");

            var totalLifetime = 3000; // ms before it fades out
            if (params.Duration) {
                totalLifetime = params.Duration
            }
            const startTime = performance.now();
            let frameCount = 0;

            var hmn = document.body.getElementsByClassName('Not').length+1;
            const offset = (hmn - 1) * 50;  
            note.style.top = `${20 + offset}px`;
            document.body.appendChild(note);
            console.log(hmn)
            const bar = document.createElement("div")
            var bwd = note.offsetWidth;
            console.log('BWD: ', bwd)
            bar.style.backgroundColor = "#fff";
            bar.style.height = "5px";
            bar.style.position = "fixed";
            bar.style.top =  `${20 + offset}px`;
            bar.style.width = `${5+bwd}px`;
            bar.style.left = 'calc(50vw - ' + (bwd/1) + 'px)';
            bar.style.borderRadius = '20px';

            function updateBar(now) {
                frameCount++;

                // Only update every 5 frames
                if (frameCount % 1 === 0) {
                    const elapsed = now - startTime;
                    const remaining = Math.max(totalLifetime - elapsed, 0);
                    const pct = remaining / totalLifetime;
                    bar.style.width = `${pct * bwd}px`;
                }

                if (now - startTime < totalLifetime) {
                    requestAnimationFrame(updateBar);
                }
            }
            requestAnimationFrame(updateBar);

            
            note.appendChild(bar);

                            // fade in
            setTimeout(() => {
                                note.style.opacity = "1";
                            }, 10);

                            // fade out after 3 seconds, then remove
            setTimeout(() => {
                                note.style.opacity = "0";
                                note.style.top = '-150px';
                                setTimeout(() => {
                                    note.remove();
                                }, 1000);
                            }, totalLifetime);

};

