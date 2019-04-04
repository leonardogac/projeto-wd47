const preset = [
    ['@babel/env',{
        targets: {
            chrome:'58',
            ie:'11'
        },
        useBuiltIns: 'usage'
    }]
];

module.export = {preset};