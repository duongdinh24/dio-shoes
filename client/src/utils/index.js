// eslint-disable-next-line 
function formatCash(str) {
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
    })
}

/**
 * @param {any}  ex: 100000
 * @returns {new string + VND} ex: 100,000 VND
 */
function formatToVND(str) {
    return str.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}

export { formatToVND, formatCash };
