const {shuffleArray} = require('./utils')
let array = [2,5,6,4,2,4,7]

describe('shuffleArray should', () => {
    test('return an array', () => {
        expect(typeof shuffleArray(array)).toBe('object')
    })

    test('return a shuffled array', () => {
        expect(shuffleArray(array)).not.toEqual(array)
    })

    test('return all values', () => {
        for(let i = 0; i < array.length; i++) {
            expect(shuffleArray(array).includes(array[i])).toBe(true)
        }
    })

    test('return the same length', () => {
        expect(shuffleArray(array).length).toEqual(array.length)
    })
})