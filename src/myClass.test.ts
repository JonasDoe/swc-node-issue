import * as assert from 'assert';
import {describe, it} from 'node:test';
import {MyClass} from "./myClass.js";

describe('MyClass', () => {
    it('should not return an error after the assertion', () => {
        new MyClass()
        assert.ok(true)
    })
})