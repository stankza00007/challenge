const book1 = {
    title: 'Book 1',
    pages: 100,
    authors: 'First Name 1, Last Name 1',
    cover: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=Book 1&w=250&h=350'
}

const Books = require('../lib/Books')

describe('Nested Callback Approach', () => {
    test('should return book 1 details', async () => {
        let result = await Books.testCallback(1)
        expect(result).toHaveProperty('title')
        expect(result).toHaveProperty('cover')
        expect(result).toHaveProperty('pages')
        expect(result).toHaveProperty('authors')

        expect(result.title).toBe(book1.title)
        expect(result.cover).toBe(book1.cover)
        expect(result.pages).toBe(book1.pages)


    }, 30000)
})

describe('Promise Approach', () => {
    test('should return book 1 details', async () => {
        let result = await Books.testPromise(1)
        expect(result).toHaveProperty('title')
        expect(result).toHaveProperty('cover')
        expect(result).toHaveProperty('pages')
        expect(result).toHaveProperty('authors')

        expect(result.title).toBe(book1.title)
        expect(result.cover).toBe(book1.cover)
        expect(result.pages).toBe(book1.pages)

    }, 30000)
})

describe('Async Approach', () => {
    test('should return book 1 details', async () => {
        let result = await Books.testAsync(1)
        expect(result).toHaveProperty('title')
        expect(result).toHaveProperty('cover')
        expect(result).toHaveProperty('pages')
        expect(result).toHaveProperty('authors')

        expect(result.title).toBe(book1.title)
        expect(result.cover).toBe(book1.cover)
        expect(result.pages).toBe(book1.pages)

    }, 30000)
})
