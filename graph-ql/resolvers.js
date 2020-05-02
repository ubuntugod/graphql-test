import { people } from '../data'

const resolvers = {
    Query: {
        people: () => people,
        person: (_, {id}) => (people.filter((person) => person.id === id))[0]
    },
    Mutation: {
        addPerson: (_, {name, age}) => {
            const person = {
                id: people.length + 1,
                name,
                age
            }
            people.push(person)
            return person
        }
    }
}

export default resolvers