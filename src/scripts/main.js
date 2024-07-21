document.addEventListener('DOMContentLoaded', function(){
    const button = document.querySelectorAll('[data-tab-button]');
    

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function(e){
            const target = e.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${target}]`);
            hideAllTabs();
            tab.classList.add('movies__list--is-active');
            removeActiveButton();
            e.target.classList.add('movies__tabs__button--is-active');
            
        })
    }
    
})

function removeActiveButton() {
    const button = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i < button.length; i++) {
        button[i].classList.remove('movies__tabs__button--is-active');
    }
}

function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('movies__list--is-active');
    }
}