const { PocketAAT } = require('@pokt-network/aat-js');

const pocketClientPublicKey = '';
const pocketApplicationPublicKey = '';
const pocketApplicationPrivatevKey = '';

module.exports.generateAAT = (event, context, lambdaCallback) => {
    try {
        const pocketAAT = PocketAAT.from('0.0.1', pocketClientPublicKey, pocketApplicationPublicKey, pocketApplicationPrivatevKey);
        console.log('AAT generated for', pocketAAT.clientPublicKey);

        lambdaCallback(null, { 
            ok: true, 
            version: pocketAAT.version,
            clientPublicKey: pocketAAT.clientPublicKey,
            applicationPublicKey: pocketAAT.applicationPublicKey,
            applicationSignature: pocketAAT.applicationSignature
        });
    }
    catch(e) {
        console.log(e.message);
    }
}