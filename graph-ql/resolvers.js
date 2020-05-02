import { people } from '../data'

const resolvers = {
    Query: {
        people: () => people,
        person: (_, {id}) => (people.filter((person) => person.id === id))[0]
    }
}

export default resolvers