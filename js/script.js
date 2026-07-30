document.addEventListener('DOMContentLoaded', function() {
    const botones = document.querySelectorAll('.btn-pedir');
    botones.forEach(btn => {
        btn.addEventListener('click', function() {
            const plato = this.getAttribute('data-plato');
            alert(`🛒 ${plato} agregado al pedido. Gracias.`);
        });
    });

    const form = document.getElementById('formContacto');
    const feedback = document.getElementById('feedback');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        if (!nombre || !email || !mensaje) {
            feedback.innerHTML = '<p style="color:red;">Complete todos los campos</p>';
            return;
        }
        if (!email.includes('@')) {
            feedback.innerHTML = '<p style="color:red;">Email inválido</p>';
            return;
        }
        feedback.innerHTML = '<p style="color:green;">Mensaje enviado. Le contactaremos</p>';
        form.reset();
        setTimeout(() => feedback.innerHTML = '', 4000);
    });
});