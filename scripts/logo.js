class IqLogo extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    line-height: 1; /* Normalize spacing */
                }

                .logo-wrapper {
                    display: inline-flex;
                    align-items: center;
                    gap: 16px;
                    padding: 10px 20px;
                    background: rgba(255, 255, 255, 0.02); /* Very subtle dark mode background */
                    border: 1px solid rgba(255, 255, 255, 0.05); /* Very subtle dark mode border */
                    border-radius: 12px;
                    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                }

                /* Container for the graphical icon */
                .logo-mark {
                    position: relative;
                    width: 48px;  /* Icon size */
                    height: 48px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                /* The technology sphere: A dashed outer shell indicating a network */
                .tech-sphere {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border: 1.5px dashed rgba(6, 182, 212, 0.4); /* Subtle teal dash */
                    border-radius: 50%; /* Perfect circle */
                    animation: subtleRotate 12s linear infinite; /* Slow rotation */
                }

                /* The neural network paths: A glowing, organic mesh in the background */
                .neural-network {
                    position: absolute;
                    width: 85%;
                    height: 85%;
                    opacity: 0.15; /* Transparent background texture */
                    /* Using an SVG background for the complex network texture */
                    background-image: url("data:image/svg+xml,%3Csvg width='44' height='44' viewBox='0 0 44 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='22' cy='22' r='1'/%3E%3Cpath d='M22 23c-1.105 0-2-1.343-2-3s.895-3 2-3 2 1.343 2 3-.895 3-2 3zM6 15.111C6 11.736 7.791 9 10 9s4 2.736 4 6.111S12.209 21.222 10 21.222s-4-2.736-4-6.111zM10 26c-1.105 0-2-1.343-2-3s.895-3 2-3 2 1.343 2 3-.895 3-2 3zm34-10.889c0-3.375-1.791-6.111-4-6.111s-4 2.736-4 6.111S38.209 21.222 40 21.222s4-2.736 4-6.111zM40 26c-1.105 0-2-1.343-2-3s.895-3 2-3 2 1.343 2 3-.895 3-2 3z'/%3E%3C/g%3E%3C/svg%3E");
                    background-size: contain;
                    mask-image: radial-gradient(white 40%, transparent 80%);
                }

                /* The core brain symbol: Glowing teal nodes in a neural formation */
                .neural-core {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 3px;
                    z-index: 1; /* Sit above the sphere/network */
                }

                /* Central pulsing node representing consciousness/intelligence */
                .core-node {
                    width: 14px;
                    height: 14px;
                    background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); /* Bright Teal Gradient */
                    border-radius: 50%;
                    box-shadow: 0 0 20px #06b6d4; /* Vibrant glow */
                    animation: pulse 3s infinite;
                }

                /* Peripheral nodes forming the 'IQ' neural cluster */
                .neural-core span:not(.core-node) {
                    width: 6px;
                    height: 6px;
                    background: #06b6d4;
                    opacity: 0.8;
                    border-radius: 50%;
                }

                /* Layout for the text portion */
                .logo-text {
                    display: flex;
                    flex-direction: column;
                }

                /* "IQ CLASSES" title styling */
                .main-title {
                    font-size: 24px;
                    font-weight: 800; /* Extra bold */
                    color: #ffffff; /* White text for contrast */
                    letter-spacing: -0.5px;
                }

                /* "IQ" specific highlighting */
                .main-title .iq-highlight {
                    background: linear-gradient(135deg, #06b6d4, #22d3ee); /* Brighter Teal Gradient */
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-weight: 900;
                }

                /* "CLASSES" styling (regular bold, slightly brighter than white) */
                .main-title .classes-text {
                    color: #f1f5f9;
                }

                /* Keyframe Animation: Subtle, slow rotation of the outer network */
                @keyframes subtleRotate {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                /* Keyframe Animation: Pulse effect for the central intelligence node */
                @keyframes pulse {
                    0% { transform: scale(1); box-shadow: 0 0 16px rgba(6, 182, 212, 0.7); }
                    50% { transform: scale(1.05); box-shadow: 0 0 24px rgba(34, 211, 238, 0.9); }
                    100% { transform: scale(1); box-shadow: 0 0 16px rgba(6, 182, 212, 0.7); }
                }
            </style>

            <div class="logo-wrapper">
                <div class="logo-mark" aria-hidden="true">
                    <div class="neural-network"></div> <div class="tech-sphere"></div>       <div class="neural-core">             <span class="core-node"></span>   <span></span>                     <span></span>                     </div>
                </div>

                <div class="logo-text">
                    <h1 class="main-title">
                        <span class="iq-highlight">IQ</span> <span class="classes-text">CLASSES</span>
                    </h1>
                </div>
            </div>
        `;
    }
}

// Define the new custom element 'iq-logo'
customElements.define('iq-logo', IqLogo);
