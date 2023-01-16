// eslint-disable-next-line 
function formatCash(str) {
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + '.')) + prev
    })
}

/**
 * @param {num}  ex: 100000
 * @returns {string + VND} ex: 100,000 VND
 */
function formatToVND(num) {
    return num.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}

export { formatToVND, formatCash };
