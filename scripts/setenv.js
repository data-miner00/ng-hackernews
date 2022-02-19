const { writeFile } = require('fs');
const { argv } = require('yargs');

require('dotenv').config();

const environment = argv.environment;

const isProduction = environment === 'prod';

const projectId = process.env.FIREBASE_PROJECT_ID;
const appId = process.env.FIREBASE_PROJECT_APP_ID;
const storageBucket = process.env.FIREBASE_STORAGE_BUCKET;
const locationId = process.env.FIREBASE_LOCATION_ID;
const apiKey = process.env.FIREBASE_API_KEY;
const authDomain = process.env.FIREBASE_AUTH_DOMAIN;
const messagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID;
const measurementId = process.env.FIREBASE_MEASUREMENT_ID;

if (
    !projectId ||
    !appId ||
    !storageBucket ||
    !locationId ||
    !apiKey ||
    !authDomain ||
    !messagingSenderId ||
    !measurementId
) {
    console.error('All the required environment variables were not provided!');
    process.exit(-1);
}

const targetPath = isProduction
    ? `./src/environments/environment.prod.ts`
    : `./src/environments/environment.ts`;

const environmentFileContent = `
export const environment = {
    firebase: {
        projectId: '${projectId}',
        appId: '${appId}',
        storageBucket: '${storageBucket}',
        locationId: '${locationId}',
        apiKey: '${apiKey}',
        authDomain: '${authDomain}',
        messagingSenderId: '${messagingSenderId}',
        measurementId: '${measurementId}',
    },
    production: ${isProduction},
};
`;

writeFile(targetPath, environmentFileContent, function (err) {
    if (err) {
        console.log(err);
    }
    console.log(`Wrote variables to ${targetPath}`);
});
