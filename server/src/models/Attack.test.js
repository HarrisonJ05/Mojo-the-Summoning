const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { User } = require('.')
const db = require('../db/config')

beforeAll(async () => {
    await db.sync({force: true})
    let attack = await Attack.create({
        title: 'Fireball',
        mojoCost: 20,
        staminaCost: 2
    });
});

afterAll(async () => await db.close());

describe('Attack', () => {
    it('Has an id', async () => {
        expect(attack).toHaveProperty('id')
    });
    it('Has title of Fireball', async () => {
        expect(attack.title).toBe('Fireball')
    });
    it('Has a mojoCost of 20', async () => {
        expect(attack.mojoCost).toBe(20)
    });
    it('Has a staminaCost of 2', async () => {
        expect(attack.staminaCost).toBe(2)
    });
});