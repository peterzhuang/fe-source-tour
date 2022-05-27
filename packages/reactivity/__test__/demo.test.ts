import { describe, it, expect } from "vitest";

function add(a, b) {
    return Number(a) + Number(b)
}

describe('learn vitest', () => {
    it('test add func', () => {
        expect(add(1,2)).toBe(3)
    })
    it('test add func passing string as param', () => {
        expect(add('1','2')).toBe(3)
    })
})