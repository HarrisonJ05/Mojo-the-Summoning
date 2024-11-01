const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { User } = require('.')
const db = require('../db/config')


beforeAll(async () => {
    await db.sync({force: true})
    let card = await Card.create({
        name: 'Arcturus Spellweaver',
        mojo: 100,
        stamina: 10,
        imageUrl: 'server/src/static/img/arcturus-spellweaver.jpg'
    })
});

afterAll(async () => {await db.close()});

describe('Card', () => {
    it('Has an id', async() => {
        expect(card).toHaveProperty('id')
    });
    it('Has name of Arcturus Spellweaver', async() => {
        expect(card.name).toBe('Arcturus Spellweaver')
    });
    it('Has mojo of 100', async() => {
        expect(card.mojo).toBe(100)
    });
    it('Has stamina to be 10', async() => {
        expect(card.stamina).toBe(10)
    });
    it('Has image url', async() => {
        expect(card.imageUrl).toBe('server/src/static/img/arcturus-spellweaver.jpg')
    });
})