import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'

var PROTO_PATH = __dirname + '/protobuf/example.proto';
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: false,
        oneofs: true
    });
const service:any = grpc.loadPackageDefinition(packageDefinition);
export default (URI) => {
    return new service.Greeter(URI, grpc.credentials.createInsecure())
}
