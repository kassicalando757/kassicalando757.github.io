class IQLogo extends HTMLElement {
  constructor() {
    super();
    // Attach a shadow DOM for encapsulation
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          width: var(--logo-size, 120px);
          height: var(--logo-size, 120px);
          font-family: 'Poppins', system-ui, -apple-system, sans-serif;
          cursor: pointer;
          user-select: none;
        }

        .logo-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
        }

        /* Animated glowing background rings simulating synaptic/brain activity */
        .ring {
          position: absolute;
          border: 2px solid transparent;
          border-radius: 50%;
          animation: spin linear infinite;
        }

        .ring-outer {
          width: 95%;
          height: 95%;
          border-top-color: #3b82f6; /* Modern Blue */
          border-bottom-color: #8b5cf6; /* Modern Purple */
          animation-duration: 4s;
          opacity: 0.8;
        }

        .ring-inner {
          width: 80%;
          height: 80%;
          border-left-color: #06b6d4; /* Bright Cyan */
          border-right-color: #ec4899; /* Vibrant Pink */
          animation-duration: 3s;
          animation-direction: reverse;
          opacity: 0.6;
        }

        /* Core Orb representing intelligence/focus */
        .core-orb {
          position: absolute;
          width: 55%;
          height: 55%;
          background: radial-gradient(circle, #2563eb, #1d4ed8);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(37, 99, 235, 0.6);
          transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s;
          z-index: 2;
        }

        /* Text Styling */
        .text-iq {
          color: #ffffff;
          font-weight: 800;
          font-size: calc(var(--logo-size, 120px) * 0.22);
          line-height: 1;
          letter-spacing: 1px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        .text-classes {
          color: #93c5fd;
          font-weight: 600;
          font-size: calc(var(--logo-size, 120px) * 0.08);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-top: 2px;
        }

        /* Interactive Hover Effects */
        .logo-container:hover .core-orb {
          transform: scale(1.12) rotateY(10deg);
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.8);
          background: radial-gradient(circle, #4f46e5, #3730a3);
        }

        .logo-container:hover .ring-outer {
          animation-duration: 1.5s;
          filter: drop-shadow(0 0 8px #8b5cf6);
        }

        .logo-container:hover .ring-inner {
          animation-duration: 1s;
          filter: drop-shadow(0 0 8px #06b6d4);
        }

        /* Floating spark animations for cognitive spark theme */
        .spark {
          position: absolute;
          width: 4px;
          height: 4px;
          background-color: #fff;
          border-radius: 50%;
          opacity: 0;
          pointer-events: none;
        }

        /* Keyframe Animations */
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>

      <div class="logo-container">
        <div class="ring ring-outer"></div>
        <div class="ring ring-inner"></div>
        <div class="core-orb">
          <span class="text-iq">IQ</span>
          <span class="text-classes">Classes</span>
        </div>
      </div>
    `;

    this.setupInteractivity();
  }

  // Interactive JavaScript Sparkle Effect on Click
  setupInteractivity() {
    const container = this.shadowRoot.querySelector('.logo-container');
    
    container.addEventListener('click', (e) => {
      this.createSparks();
    });
  }

  createSparks() {
    const container = this.shadowRoot.querySelector('.logo-container');
    const sparkCount = 8;

    for (let i = 0; i < sparkCount; i++) {
      const spark = document.createElement('div');
      spark.classList.add('spark');
      container.appendChild(spark);

      const angle = (i / sparkCount) * 2 * Math.PI;
      const velocity = 30 + Math.random() * 30; // Distance to travel
      const destinationX = Math.cos(angle) * velocity;
      const destinationY = Math.sin(angle) * velocity;

      // Set initial position at center
      spark.style.left = '50%';
      spark.style.top = '50%';
      spark.style.transform = 'translate(-50%, -50%)';

      const animation = spark.animate([
        { 
          transform: 'translate(-50%, -50%) scale(1)', 
          opacity: 1,
          backgroundColor: '#06b6d4'
        },
        { 
          transform: `translate(calc(-50% + ${destinationX}px), calc(-50% + ${destinationY}px)) scale(0)`, 
          opacity: 0,
          backgroundColor: '#8b5cf6'
        }
      ], {
        duration: 800,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)'
      });

      animation.onfinish = () => spark.remove();
    }
  }
}

// Define the custom element so the browser recognizes <iq-logo>
customElements.define('iq-logo', IQLogo);
