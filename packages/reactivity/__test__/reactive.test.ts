import { reactive, effect } from "../src";
import { describe, it, expect } from "vitest";

describe('reactive test suite', () => {
    it('test reactive and effect', () => {
       
        let obj = reactive({
            name: 'yuchuan'
        })

        let dummy
        effect(() => {
            dummy = obj.name
        })

        expect(dummy).toBe('yuchuan')

        obj.name = 'peter'
        expect(dummy).toBe('peter')

        obj.name = 'caro'
        expect(dummy).toBe('caro')
    })
})