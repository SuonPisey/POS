interface Category {
    id: string
    name: string
    image_url: string
}

// Create mock data
const categories: Category[] = [
    {
        id: '1',
        name: 'Burgers',
        image_url: 'https://cdn.auth0.com/blog/whatabyte/burger-sm.png'
    },
    {
        id: '2',
        name: 'Pizza',
        image_url: 'https://cdn.auth0.com/blog/whatabyte/pizza-sm.png'
    },
    {
        id: '3',
        name: 'Tacos',
        image_url: 'https://cdn.auth0.com/blog/whatabyte/tacos-sm.png'
    },
    {
        id: '4',
        name: 'Sandwiches',
        image_url: 'https://cdn.auth0.com/blog/whatabyte/sandwich-sm.png'
    }, {
        id: '1',
        name: 'Burgers',
        image_url: 'https://cdn.auth0.com/blog/whatabyte/burger-sm.png'
    },
    {
        id: '2',
        name: 'Pizza',
        image_url: 'https://cdn.auth0.com/blog/whatabyte/pizza-sm.png'
    },
    {
        id: '3',
        name: 'Tacos',
        image_url: 'https://cdn.auth0.com/blog/whatabyte/tacos-sm.png'
    },
    {
        id: '4',
        name: 'Sandwiches',
        image_url: 'https://cdn.auth0.com/blog/whatabyte/sandwich-sm.png'
    }

]

export const CategoryAPI = {
    async getAll(): Promise<Category[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(categories), 1000)
        })
    }
}