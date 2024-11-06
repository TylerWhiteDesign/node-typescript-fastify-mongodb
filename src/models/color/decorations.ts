import { Schema } from 'mongoose'

export default function decorate(schema: Schema) {
    schema.methods.printFriendlyString = function () {
        console.log(`Color: ${this.value}`)
    }
}
