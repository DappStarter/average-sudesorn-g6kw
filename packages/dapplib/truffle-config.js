require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note soccer prosper grace opinion symptom symbol'; 
let testAccounts = [
"0x83e4ffc0feaa146d65f625d2cf9f2726e0a16cd9be6b5ef8d9c520e38f944dce",
"0xec0133f03325e67392237d1cf8424a928916675deae7a68421f9df3247c5785f",
"0x9d4b19d7e26fd3a7da2ded9d902afe26ad9455bbcdf5a3bce54f5c43422b4b40",
"0xc4c8aa7c422d82bc287d2abd7ab8381d22111dad9eb09855c5a63f2fd41e3e2c",
"0xe76bae04bc1bbbd4739bdc991e934cf76cedf56e83d6b0f96bf846d996e1e30f",
"0x357b08a43a7c565e682ba0c484e44b5301245ed71c331a7b62990e8ecd6b48fd",
"0x586cc0cc068092fcb5571c00640b229b9180f380cf50cea44e627f3efab2f762",
"0xfd7a37f8701c3b57038b75a6f4f364b33159bd5a25fb34d26bbe6bd071c1528c",
"0xdd24000a4a5cfcac3e5627fb8e7722a22454b58e92a04a5cd1ae08e91f4ee97f",
"0x74152a57b7ea5448cc94bdf0ff12324c94cb0097a98a17c7b2da4b527f5b0a16"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


