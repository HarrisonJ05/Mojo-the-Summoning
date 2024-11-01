const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { User } = require('.')
const db = require('../db/config')

let deck;

beforeAll(async () => {
    await db.sync({force: true}),
    deck = await deck.create({name: 'Deck1', xp: 100})
});

afterAll(async () => {
    await db.close()
});

describe('Deck', () => {
    it('Has an id', () => {
        expect(deck).toHaveProperty('id')
    });
    it('Name is deck1', () => {
        expect(deck.name).toBe('Deck1')
    });
    it('Xp is 100', () => {
        expect(deck.xp).toBe(100)
    });
})

