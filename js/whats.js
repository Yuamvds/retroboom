const whatsButton = document.querySelectorAll('.whats');

whatsButton.forEach(button => {
    button.addEventListener('click', function(){
        const product = this.getAttribute('data-product');
        const whatsappLink = `https://api.whatsapp.com/send?phone=55705760&text=Hola, estoy interesado en ${encodeURIComponent(product)}`;

        window.open(whatsappLink, '_blank');
    });
})