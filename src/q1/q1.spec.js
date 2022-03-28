import twoSum from './q1'

describe('function twoSum(numbers, target)', () => {
    it('should throw Error, when argument is not correct type', () => {
        expect(() => twoSum(1, 2)).toThrow(Error)
        expect(() => twoSum('a', 2)).toThrow(Error)
        expect(() => twoSum([1, 2], 'a')).toThrow(Error)
        expect(() => twoSum([1, 2], [1, 2])).toThrow(Error)
    })

    it('should return index of element in array that equals target', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
        expect(twoSum([3, 3], 6)).toEqual([0, 1])
    })
})
