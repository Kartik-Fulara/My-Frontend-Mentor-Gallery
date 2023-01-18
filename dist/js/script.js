const cards_wrapper = document.getElementById("cards-wrapper");

const displayCards = () => {

    data.forEach((card) => {
        cards_wrapper.innerHTML += `<a href="${card.link}" class="card-container">
        <div id=${card.id} class="card-image-wrapper">
            <img
            class="card-image" 
            src="${card.image}"
                alt="${card.name}" />
        </div>
        <div class="card-info">
            <h3>${card.name}</h3>
            <div class="tags-and-level">
                <div class="tags">
                    ${card.tags.map((tag) => {
            return (
                `<span class="${tag.cssClass}">
                        ${tag.name}
                        </span>`
            );
        }).join('')
            }
                </div>
                <div class="level ${card.levelCss}">
                    
                    ${card.levelInfo.map((tag) => {
                return (
                    `<span class="${tag.cssClass}">
                        ${tag.text}
                        </span>`
                );
            }).join('')
            }
                </div>
            </div>
            <p class="card-desc">
                ${card.description}
            </p>
        </div>
    </a>`;
    });
};


window.onload = function () {
    displayCards();
};