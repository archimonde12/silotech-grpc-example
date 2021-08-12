import * as path from "path"
import * as Mali from "mali"
import { sayHello, sayHi } from "./handlers"



const PROTO_PATH = path.resolve(__dirname, './protobuf/example.proto')

export function initGrpcServer() {
    const app = new Mali(PROTO_PATH, 'Greeter')
    app.use({ sayHello, sayHi })
    app.start('0.0.0.0:5000') 
    console.log(`Server running at 5000`)
    
}
