import insert from './index'

describe('function insert(intervals, newInterval)', () => {
    it('should return 合併的陣列', () => {
        const intervals = [
            [1, 3],
            [6, 9],
        ]
        const newInterval = [2, 5]
        const result = [
            [1, 5],
            [6, 9],
        ]

        expect(insert(intervals, newInterval)).toEqual(result)
    })

    it('should return 合併的陣列', () => {
        const intervals = [
            [1, 2],
            [3, 5],
            [6, 7],
            [8, 10],
            [12, 16],
        ]
        const newInterval = [4, 8]
        const result = [
            [1, 2],
            [3, 10],
            [12, 16],
        ]

        expect(insert(intervals, newInterval)).toEqual(result)
    })
})
