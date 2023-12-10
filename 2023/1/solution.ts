const { input } = require('./input');

const solution = (input: string[]) => {
    let total = 0;

    input.forEach((line) => {
        const lineLetters = line.match(/\d/g);

        if (!lineLetters || lineLetters.length === 0) {
            return;
        }

        const first = lineLetters[0];
        const last = lineLetters.pop();

        total += parseInt(`${first}${last}`, 10);
    });

    console.log(total);
};

solution(input);
