export default async function resetState(ctx) {
    delete ctx.session.awaitingAdminPass
    delete ctx.session.awaitingMessage
}