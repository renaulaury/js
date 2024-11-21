const square = document.querySelector('.carre');

square.addEventListener("click", function() {
    const styles = window.getComputedStyle(square); //récupére les syles calculés
    
    const cssCode = ` 
        class: ${elementclass};
        background-color: ${styles.backgroundColor};
        width: ${styles.width};
        height: ${styles.height};
        cursor: ${styles.cursor};
        font-family: ${styles.fontFamily};
        font-size: ${styles.fontSize};
        `;

    alert(cssCode);
});

