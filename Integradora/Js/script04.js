window.onload = function() {
    const text1Input = document.getElementById('text1');
    const text2Input = document.getElementById('text2');
    const image = document.getElementById('image');

    text1Input.addEventListener('input', function() {
        const text = text1Input.value;
        document.querySelector('.edb:nth-child(1)').textContent = text;
    });

    text2Input.addEventListener('input', function() {
        const text = text2Input.value;
        document.querySelector('.edb:nth-child(2)').textContent = text;
    });

    image.addEventListener('click', function() {
        const newImageUrl = prompt('Introduce la URL de la nueva imagen:');
        if (newImageUrl) {
            image.setAttribute('src', newImageUrl);
        }
    });
};
