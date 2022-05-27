import { reactive, effect } from "../src";
import { describe, it, expect } from "vitest";

describe('reactive test suite', () => {
    it('test reactive and effect', () => {
       
        let obj = reactive({
            name: 'yuchuan',
            age: 20
        })

        let dummy
        let dummyAge
        effect(() => {
            dummy = obj.name
        })

        expect(dummy).toBe('yuchuan')

        obj.name = 'peter'
        expect(dummy).toBe('peter')

        obj.name = 'caro'
        expect(dummy).toBe('caro')

        effect(() => {
            dummyAge = obj.age
        })

        obj.age = 40
        expect(dummyAge).toBe(40)
    })
})