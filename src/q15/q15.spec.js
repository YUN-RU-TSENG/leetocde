import threeSum from './q15'

describe('function threeSum(numbers)', () => {
    describe('should throw Error, when numbers is not correct type', () => {
        it('threeSum({}) throw Error', () =>
            expect(() => threeSum({})).toThrow('numbers is not correct type'))

        it('threeSum(12) throw Error', () =>
            expect(() => threeSum(12)).toThrow('numbers is not correct type'))
    })

    describe('should return answer', () => {
        it('threeSum([-1,0,1,2,-1,-4]) return [[-1,-1,2],[-1,0,1]]', () =>
            expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
                [-1, -1, 2],
                [-1, 0, 1],
            ]))
        it('threeSum([0]) return []', () => expect(threeSum([0])).toEqual([]))
    })
})

