const hash = (string) => {
    let hash = 0;
    let stringLength = string.length;
    for (let i = 0; i < stringLength; i++) {
        hash = 37 * hash + string.charCodeAt(i);
    }
    return hash;
};