function solution(emergency) {
    const s = so(emergency)
    const d = m(s)
    return d
}

function so(p) {
    for (let i = 0; i < p.length; i++) {
        for (let j = 0; j < p.length - i - 1; j++) {
            if (p[j] < p[j + 1]) {
                let a = p[j]
                p[j] = p[j + 1]
                p[j + 1] = a
            }
        }
    }
    return p
}

function m(s) {
    const list = []
    for (let i = 0; i < s.length; i++) {
        list.push(s.indexOf(s[i]) + 1)
    }
    return list
}

function solution2(emergency) {
    let indices = [];
    for (let i = 0; i < emergency.length; i++) {
        indices.push(i);
    }
    console.log(indices)

    indices.sort((a, b) => emergency[b] - emergency[a])
    console.log(indices)

    let result = [];
    for (let i = 0; i < indices.length; i++) {
        result.push(indices.indexOf(i) + 1);
    }

    return result;
}

let emergency = [30, 10, 23, 6, 100];
console.log(solution2(emergency));

function asd(p) {
    const list = []
    for (let i = 0; i < p.length; i++) {
        list.push(p[i] + p[i])
    }
    return list
}