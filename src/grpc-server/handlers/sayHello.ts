export const sayHello = (ctx) => {
    return ctx.res = { message: 'Hello ' + ctx.req.name }
}
