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