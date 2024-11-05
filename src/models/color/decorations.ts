import { Schema } from 'mongoose'

export default function (schema: Schema) {
    schema.methods.printFriendlyString = function () {
        console.log(`Color: ${this.value}`)
    }
}
