/*Q.7
Create a nested array object called operatingSystem and add below key and values
Name - Ubuntu , version - 18.4 , license - open source

Ans:*/

const operatingSystem = {
    name: 'Ubuntu',
    version: 18.04,
    license: 'Open Source'
};

const entries = Object.entries(operatingSystem);

console.log(entries);

/*output:
[
    ["name", "Ubuntu"]
    ["version", 18.04]
    ["license", "Open Source"]
]*/