const shuffle = require('../lib/shuffle')

describe('The \'shuffle\' function', () => {
    test('should return an array', () => {
        expect(Array.isArray(shuffle([]))).toBe(true)
    })

    function range(start, end) {
        var ans = [];
        for (let i = start; i <= end; i++) {
            ans.push(i);
        }
        return ans;
    }
    test('should sort an array randomly', () => {
        let array = range(1,100)
        let shuffled = shuffle(array)
        expect(Array.isArray(shuffled) && shuffled.length > 0).toBe(true)
        expect(shuffled).toHaveLength(array.length)
        expect(shuffled).not.toStrictEqual(array)
    })
})

