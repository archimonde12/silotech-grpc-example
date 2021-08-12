export const sayHi = (ctx) => {
    return ctx.res = { message: 'Hi ' + ctx.req.name }
}
