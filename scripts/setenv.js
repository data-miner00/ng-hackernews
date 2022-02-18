const { writeFile } = require('fs');
const { argv } = require('yargs');

require('dotenv').config();

const environment = argv.environment;

const isProduction = environment === 'prod';

const targetPath = isProduction
    ? `./src/environments/environment.prod.ts`
    : `./src/environments/environment.ts`;

const environmentFileContent = `
export const environment = {
    firebase: {
        projectId: '${process.env.FIREBASE_PROJECT_ID}',
        appId: '${process.env.FIREBASE_PROJECT_APP_ID}',
        storageBucket: '${process.env.FIREBASE_STORAGE_BUCKET}',
        locationId: '${process.env.FIREBASE_LOCATION_ID}',
        apiKey: '${process.env.FIREBASE_API_KEY}',
        authDomain: '${process.env.FIREBASE_AUTH_DOMAIN}',
        messagingSenderId: '${process.env.FIREBASE_MESSAGING_SENDER_ID}',
        measurementId: '${process.env.FIREBASE_MEASUREMENT_ID}',
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
