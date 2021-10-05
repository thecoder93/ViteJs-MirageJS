import { createServer } from 'miragejs';

export function run () {
    return createServer({
        routes() {
            this.get('/movies', () => {
                return {
                    movies: [
                        {
                            id: 1,
                            title: 'The lord of Rings 1',
                            year: 2001
                        },
                        {
                            id: 2,
                            title: 'The lord of Rings 2',
                            year: 2002
                        },
                        {
                            id: 3,
                            title: 'The lord of Rings 3',
                            year: 2003
                        }
                    ],
                    total: 3
                }
            })
        }
    })
}