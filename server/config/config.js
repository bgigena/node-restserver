// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ===========================================
// Entorno
// ===========================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===========================================
// Vencimiento del token
// ===========================================

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ===========================================
// Seed de autenticación
// ===========================================

process.env.SEED = process.env.SEED || '123qwe'

// ===========================================
// Base de datos
// ===========================================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

// ===========================================
// Google Client ID
// ===========================================
process.env.CLIENT_ID = process.env.CLIENT_ID || '827576644683-kbr9u9jtho3a5k4v058fkcojccub5met.apps.googleusercontent.com';