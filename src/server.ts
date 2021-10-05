import { createServer, Model } from 'miragejs';

export function run () {
    return createServer({

        models: {
            movie: Model, //Consente di utilizzare il DB in memory che rende dinamici gli handler delle route.
          },

        routes() {
            this.get("/movies", (schema, request) => {
                // @ts-ignore
                return schema.movies.all()
              });

              this.get("/movies/:id", (schema, request) => { //posso chiamare la get per id e restituire il singolo film
                let id = request.params.id
                // @ts-ignore
                return schema.movies.find(id)
              })

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
            },
            {timing: 4000},
            )
        },
        seeds(server) { //riempiamo il nostro db con seeds
            //server.create mi aggiugne automaticamente un id ed effettua un autoincrement
            // @ts-ignore
            server.create("movie", { title: "Inception", year: 2010 })
            // @ts-ignore
            server.create("movie", { title: "Interstellar", year: 2014 })
            // @ts-ignore
            server.create("movie", { title: "Dunkirk", year: 2017 })
          },
    })
}