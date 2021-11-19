require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food shoulder riot machine hole coral light army gift'; 
let testAccounts = [
"0xff12b2926671ff42c16b936623e8a32238dc91741ce2e95ca0109221bd61ee3e",
"0xc1e986c02882e673d169b2f6ef0b631f5ca0cb3063a0ad365d55d101d773d8ab",
"0x8ef9d94bc02dff418748bfd48886785dcd367824b1d6283523f463e6293186da",
"0x5374d56d5f506673239b253991a61efd782e84725d52bfd42aa95de1f58c2b62",
"0x9d2f074590242caf144d31763cdc582e8c88faac3956f50249c55130d228e8cd",
"0x8921d400387155066df833dfbaa3c9243bce42bbb953da5fea30c9e6049033c5",
"0x8c72e35138a0e0519ef33470e3ed3a79aa1587f0dddb6a0e6d08640b1faf1631",
"0x01838249bd1b25c301cf957f739e88a49ce53ec3e43a3ff1186b9fb61d4a546e",
"0xaeb4463e1b2a6763dde9060c7ca5ab39f2317e42ed824060e07c0397a45ebed3",
"0x5cfe2bf0d9fb30fd00a42452125ff13cc041ece7a86fa380a70501c06834b8b0"
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


