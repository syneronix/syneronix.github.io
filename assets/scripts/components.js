class MediaCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .card-layout {
                    display: flex;
                    align-items: flex-start;
                    gap: 20px;
                    padding: 20px;
                    background-color: #000000ff; 
                    color: white;
                    border-radius: 8px;
                    max-width: 900px;
                    margin-bottom: 30px;
                }
                .image-column {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    flex-shrink: 0; 
                    width: 200px;
                }
                .image-column img {
                    width: 100%;
                    height: auto;
                    border-radius: 4px;
                }
                .image-description {
                    margin-top: 10px;
                    font-size: 0.85em;
                    color: #ccc;
                    text-align: center;
                }
                .text-column {
                    flex-grow: 1;
                    line-height: 1.6;
                }
                .text-column h3 {
                    margin-top: 0;
                    color: #EEB82E;
                }
            </style>
            
            <div class="card-layout">
                <div class="image-column">
                    <img id="card-image" src="" alt="Component Image">
                    <p class="image-description" id="card-description"></p>
                </div>
                <div class="text-column">
                    <h3 id="card-title"></h3>
                    <slot></slot> </div>
            </div>
        `;
    }

    connectedCallback() {
        const imagePath = this.getAttribute('image-path');
        const title = this.getAttribute('title');
        const description = this.getAttribute('description');
        
        this.shadowRoot.getElementById('card-image').src = imagePath || '';
        this.shadowRoot.getElementById('card-title').textContent = title || 'Default Title';
        this.shadowRoot.getElementById('card-description').textContent = description || '';
    }
}

customElements.define('media-card', MediaCard);


class PrivacySectionCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .section-card-container {
                    max-width: 900px;
                    margin: 10px auto; 
                    padding: 30px;
                    color: #e0e0e0; /* Светлый текст */
                    background-color: #1a1a1a; /* Темный фон */
                    border-radius: 8px;
                    line-height: 1.3;
                    font-family: Arial, sans-serif;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4); 
                }
                
                /* Главный заголовок (для первой карточки) */
                ::slotted(.main-title) {
                    color: var(--yellow_main, #EEB82E);
                    text-align: center;
                    margin-bottom: 5px;
                    font-size: 2.2em;
                    display: block;
                    font-weight: bold;
                }

                /* Заголовки разделов (h2) */
                ::slotted(h2) {
                    color: #EEB82E; /* Акцентный цвет */
                    margin-bottom: 5px;
                    padding-bottom: 5px;
                    border-bottom: 1px solid #333;
                    font-size: 1.6em;
                    display: block; 
                }

                /* Подразделы (h3) */
                ::slotted(h3) {
                    color: #EEB82E; 
                    margin-top: 5px;
                    margin-bottom: 5px;
                    font-size: 1.2em;
                    display: block; 
                }
                
                /* Абзацы и списки */
                ::slotted(p), ::slotted(ul) {
                    margin-bottom: 5px;
                    display: block;
                }

                /* Ссылки */
                ::slotted(a),
                ::slotted(a:link),
                ::slotted(a:visited),
                ::slotted(a:hover),
                ::slotted(a:active) {
                    color: #EEB82E !important; 
                    text-decoration: none;
                }

            </style>

            <div class="section-card-container">
                <slot></slot> 
            </div>
        `;
    }
}

customElements.define('privacy-section-card', PrivacySectionCard);