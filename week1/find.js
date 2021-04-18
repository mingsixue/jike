
// o/n 算法
// 不使用状态机 在一个字符串中找到字符 a
function match(str) {
    for (let c of str) {
        if (c === 'a') {
            return true;
        }
    }
    return false;
}
match('I am vic');

// 不使用状态机 在一个字符串中找到字符 ab
function match(str) {
    let foundA = false;
    for (let c of str) {
        if (c === 'a') {
            foundA = true;
        } else if (foundA && c === 'b') {
            return true;
        } else {
            foundA = false;
        }
    }
    return false;
}
console.log( match('I acbm vic') );

// 不使用状态机 在一个字符串中找到字符 abcdef
function match(str) {
    let foundA = false;
    let foundB = false;
    let foundC = false;
    let foundD = false;
    let foundE = false;

    for (let c of str) {
        if (c === 'a') {
            foundA = true;
        } else if (foundA && c === 'b') {
            foundB = true;
        } else if (foundB && c === 'c') {
            foundC = true;
        } else if (foundC && c === 'd') {
            foundD = true;
        } else if (foundD && c === 'e') {
            foundE = true;
        } else {
            foundA = false;
            foundB = false;
            foundC = false;
            foundD = false;
            foundE = false;
        }
    }
    return false;
}

// 使用状态机，在一个字符串中找到abcdef
function match(str) {
    let state = start;
    for (let c of str) {
        state = state(c);
    }
    return state === end;
}
function start(c) {
    if (c === 'a') {
        return foundA;
    } else {
        return start;
    }
}
function end(c) {
    return end;
}
function foundA(c) {
    if (c === 'b') {
        return foundB;
    } else {
        return start;
    }
}
function foundB(c) {
    if (c === 'c') {
        return foundC;
    } else {
        return start;
    }
}
function foundC(c) {
    if (c === 'd') {
        return foundD;
    } else {
        return start;
    }
}
function foundD(c) {
    if (c === 'e') {
        return foundE;
    } else {
        return start(c);
    }
}
function foundE(c) {
    if (c === 'f') {
        return end;
    } else {
        return start(c);
    }
}
console.log( match('I mabcdefgroot') );


// 用状态机 处理abcabcabx
function match(str) {
    let state = start;
    for (let c of str) {
        state = state(c);
    }
    return state === end;
}
function start(c) {
    if (c === 'a') {
        return foundA;
    } else {
        return start;
    }
}
function end(c) {
    return end;
}
function foundA(c) {
    if (c === 'b') {
        return foundB;
    } else {
        return start;
    }
}
function foundB(c) {
    if (c === 'c') {
        return foundC;
    } else {
        return start(c);
    }
}
function foundC(c) {
    if (c === 'd') {
        return foundA2;
    } else {
        return start(c);
    }
}
function foundA2(c) {
    if (c === 'b') {
        return foundB2;
    } else {
        return start(c);
    }
}
function foundB2(c) {
    if (c === 'x') {
        return end;
    } else {
        return foundB(c);
    }
}
console.log( match('abcabcabx') );

// 用状态机 处理abababx