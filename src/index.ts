import {initGrpcServer} from "./grpc-server"

(async ()=>{
    try{
        initGrpcServer()
    } catch(e){
        throw e
    }
})()