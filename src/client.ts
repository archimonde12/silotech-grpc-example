import { grpcClient } from "./grpc-client"

(async () => {
    const result = await grpcClient.sayHello("Tom")
    const result2 = await grpcClient.sayHi("Tom")
    console.log({ result, result2 })
})()