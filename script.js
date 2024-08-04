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
            messageBox.classList.remove('hidden');
            return;
        }
        outputText.value = encrypt(text);
        inputText.value = ''; // Ocultar el texto en el campo de entrada
        encryptButton.classList.add('hidden');
        decryptButton.classList.remove('hidden');
        clearButton.classList.remove('hidden');
        messageBox.classList.add('hidden'); // Ocultar el cuadro de mensajes
    });

    // Evento para el botón de desencriptar
    decryptButton.addEventListener('click', () => {
        const text = outputText.value.trim();
        outputText.value = decrypt(text);
        decryptButton.classList.add('hidden');
        encryptButton.classList.add('hidden');
        clearButton.classList.remove('hidden');
        decryptButton.disabled = true; // Deshabilita el botón "Desencriptar"
    });

    // Evento para el botón de limpiar
    clearButton.addEventListener('click', () => {
        inputText.value = '';
        outputText.value = '';
        clearButton.classList.add('hidden');
        encryptButton.classList.remove('hidden');
        decryptButton.classList.add('hidden');
        decryptButton.disabled = false; // Habilita el botón "Desencriptar"
        messageBox.classList.add('hidden'); // Ocultar el cuadro de mensajes
    });

    // Inicializar la visibilidad de los botones y el cuadro de mensajes
    clearButton.classList.add('hidden'); // Inicialmente oculto
    decryptButton.classList.add('hidden'); // Inicialmente oculto
    messageBox.classList.add('hidden'); // Inicialmente oculto
});
