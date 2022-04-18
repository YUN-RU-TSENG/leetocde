import getMaxArea from './q11'

describe('function getMaxArea(height)', () => {
    describe('should throw Error, when height is not correct type', () => {
        it('getMaxArea(1) should throw Error', () =>
            expect(() => getMaxArea(1)).toThrow('height is not correct type'))

        it('getMaxArea(true) should throw Error', () =>
            expect(() => getMaxArea(true)).toThrow('height is not correct type'))

        it('getMaxArea({}) should throw Error', () =>
            expect(() => getMaxArea({})).toThrow('height is not correct type'))
    })

    describe('should return maxArea of a given array', () => {
        it('getMaxArea([]) should return 0', () => {
            expect(getMaxArea([])).toBe(0)
        })

        it('getMaxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) should return 49', () => {
            expect(getMaxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49)
        })

        it('getMaxArea([1,1,3]) should return 3', () => {
            expect(getMaxArea([1, 1, 3])).toBe(2)
        })
    })
})
