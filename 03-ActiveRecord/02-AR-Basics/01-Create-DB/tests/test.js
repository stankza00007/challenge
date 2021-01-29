const {
    db
} = require('../lib/index')

const {
    createUserTable,
    createPostTable,
    createCommentTable,
    dropTables,
} = require('../lib/createTables')


const expectedUserTable = {
    id: {
        type: 'integer',
        maxLength: null,
        nullable: false,
        defaultValue: null
    },
    username: {
        type: 'varchar',
        maxLength: '255',
        nullable: false,
        defaultValue: null
    },
    gender: {
        type: 'varchar',
        maxLength: '255',
        nullable: false,
        defaultValue: null
    },
    dob: {
        type: 'date',
        maxLength: null,
        nullable: false,
        defaultValue: null
    }
}

const expectedPostTable = {
    id: {
        type: 'integer',
        maxLength: null,
        nullable: false,
        defaultValue: null
    },
    title: {
        type: 'varchar',
        maxLength: '255',
        nullable: false,
        defaultValue: null
    },
    content: {
        type: 'varchar',
        maxLength: '255',
        nullable: false,
        defaultValue: null
    },
    likes: {
        type: 'integer',
        maxLength: null,
        nullable: false,
        defaultValue: '\'0\''
    },
    user_id: {
        type: 'integer',
        maxLength: null,
        nullable: false,
        defaultValue: null
    },
    created_at: {
        type: 'datetime',
        maxLength: null,
        nullable: true,
        defaultValue: null
    },
    updated_at: {
        type: 'datetime',
        maxLength: null,
        nullable: true,
        defaultValue: null
    }
}

const expectedCommentTable = {
    id: {
        type: 'integer',
        maxLength: null,
        nullable: false,
        defaultValue: null
    },
    comment: {
        type: 'varchar',
        maxLength: '255',
        nullable: false,
        defaultValue: null
    },
    date: {
        type: 'datetime',
        maxLength: null,
        nullable: false,
        defaultValue: null
    },
    user_id: {
        type: 'integer',
        maxLength: null,
        nullable: false,
        defaultValue: null
    },
    post_id: {
        type: 'integer',
        maxLength: null,
        nullable: false,
        defaultValue: null
    },
    created_at: {
        type: 'datetime',
        maxLength: null,
        nullable: true,
        defaultValue: null
    },
    updated_at: {
        type: 'datetime',
        maxLength: null,
        nullable: true,
        defaultValue: null
    }
}

describe('Create table', () => {

    beforeAll(() => {
        dropTables()
    })

    describe('User Table', () => {

        test('should create a user table', async () => {
            await createUserTable()
            let hasTable = await db.schema.hasTable('users')
            expect(hasTable).toBeTruthy()
        })

        test('should has column id', async () => {
            let columnInfo = await db.table('users').columnInfo()
            expect(columnInfo).toHaveProperty('id', expectedUserTable["id"])
        })

        test('should has column username', async () => {
            let columnInfo = await db.table('users').columnInfo()
            expect(columnInfo).toHaveProperty('username', expectedUserTable["username"])
        })

        test('should has column gender', async () => {
            let columnInfo = await db.table('users').columnInfo()
            expect(columnInfo).toHaveProperty('gender', expectedUserTable["gender"])
        })

        test('should has column dob', async () => {
            let columnInfo = await db.table('users').columnInfo()
            expect(columnInfo).toHaveProperty('dob', expectedUserTable["dob"])
        })

    })

    describe('Post Table', () => {
        test('should create a post table', async () => {
            await createPostTable()
            let hasTable = await db.schema.hasTable('posts')
            expect(hasTable).toBeTruthy()
        })

        test('should has column id', async () => {
            let columnInfo = await db.table('posts').columnInfo()
            expect(columnInfo).toHaveProperty('id', expectedPostTable["id"])
        })

        test('should has column title', async () => {
            let columnInfo = await db.table('posts').columnInfo()
            expect(columnInfo).toHaveProperty('title', expectedPostTable["title"])
        })

        test('should has column likes', async () => {
            let columnInfo = await db.table('posts').columnInfo()
            expect(columnInfo).toHaveProperty('likes', expectedPostTable["likes"])
        })

        test('should has column content', async () => {
            let columnInfo = await db.table('posts').columnInfo()
            expect(columnInfo).toHaveProperty('content', expectedPostTable["content"])
        })

        test('should has column user_id', async () => {
            let columnInfo = await db.table('posts').columnInfo()
            expect(columnInfo).toHaveProperty('user_id', expectedPostTable["user_id"])
        })

    })

    describe('Comment Table', () => {

        test('should create a commetn table', async () => {
            await createCommentTable()
            let hasTable = await db.schema.hasTable('comments')
            expect(hasTable).toBeTruthy()
        })

        test('should has column id', async () => {
            let columnInfo = await db.table('comments').columnInfo()
            expect(columnInfo).toHaveProperty('id', expectedCommentTable["id"])
        })

        test('should has column comment', async () => {
            let columnInfo = await db.table('comments').columnInfo()
            expect(columnInfo).toHaveProperty('comment', expectedCommentTable["comment"])
        })

        test('should has column date', async () => {
            let columnInfo = await db.table('comments').columnInfo()
            expect(columnInfo).toHaveProperty('date', expectedCommentTable["date"])
        })

        test('should has column post_id', async () => {
            let columnInfo = await db.table('comments').columnInfo()
            expect(columnInfo).toHaveProperty('post_id', expectedCommentTable["post_id"])
        })

        test('should has column user_id', async () => {
            let columnInfo = await db.table('comments').columnInfo()
            expect(columnInfo).toHaveProperty('user_id', expectedCommentTable["user_id"])
        })

    })
})