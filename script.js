document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const encryptButton = document.getElementById('encryptButton');
    const decryptButton = document.getElementById('decryptButton');
    const clearButton = document.getElementById('clearButton');
    const messageBox = document.getElementById('messageBox');

    // Función para encriptar texto
    function encrypt(text) {
        return text
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    }

    // Función para desencriptar texto
    function decrypt(text) {
        return text
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }

    // Evento para el botón de encriptar
    encryptButton.addEventListener('click', () => {
        const text = inputText.value.trim();
        if (!text) {
            messageBox.classList.remove('hidden'); // Mostrar mensaje si no hay texto
            return;
        }
        outputText.value = encrypt(text);
        outputText.classList.add('no-bg'); // Elimina la imagen de fondo

        // Cambiar visibilidad de los botones
        encryptButton.style.display = 'none';
        decryptButton.style.display = 'inline-block';
        clearButton.style.display = 'inline-block';
        messageBox.classList.add('hidden'); // Ocultar el cuadro de mensajes
        inputText.value = ''; // Limpia el campo de entrada
    });

    // Evento para el botón de desencriptar
    decryptButton.addEventListener('click', () => {
        const text = outputText.value.trim();
        if (!text) {
            messageBox.classList.remove('hidden'); // Mostrar mensaje si no hay texto
            return;
        }
        outputText.value = decrypt(text);
        outputText.classList.add('no-bg'); // Elimina la imagen de fondo

        // Cambiar visibilidad de los botones
        encryptButton.style.display = 'none';
        clearButton.style.display = 'inline-block';
        decryptButton.disabled = true; // Deshabilita el botón "Desencriptar"
    });

    // Evento para el botón de limpiar
    clearButton.addEventListener('click', () => {
        inputText.value = '';
        outputText.value = '';
        outputText.classList.remove('no-bg'); // Restablece la imagen de fondo

        // Cambiar visibilidad de los botones
        encryptButton.style.display = 'inline-block';
        decryptButton.style.display = 'none';
        clearButton.style.display = 'none';
        messageBox.classList.add('hidden'); // Ocultar el cuadro de mensajes
    });

    // Ocultar el cuadro de mensajes por defecto
    messageBox.classList.add('hidden');
});
