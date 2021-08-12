export const maxRetries = 14
export const serverURI = `localhost:5000`
import  { sayHello } from "./methods/sayHello"
import  { sayHi } from "./methods/sayHi"


export const grpcClient = {
    sayHello,
    sayHi
}