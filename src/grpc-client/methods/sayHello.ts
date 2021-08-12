import { maxRetries, serverURI } from ".."
import { sleep } from "../../ulti"
import client from "../client"
export const sayHello = async (name: string) => {
    try {
        let count = 0
        while (true) {
            try {
                count++
                const data: any = await new Promise((resolve, reject) => client(serverURI).sayHello({ name }, (err, response) => {
                    if (err) return reject(err)

                    return resolve(response)
                }))
                return data
            } catch (error) {
                if (error.message === 14 && count < maxRetries) {
                    await sleep(1)
                } else {
                    if (typeof (error) === 'string') throw new Error(error)
                    throw error
                }
            }
        }
    } catch (error) {
        throw error
    }
}