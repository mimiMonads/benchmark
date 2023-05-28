import { Router } from "@stricjs/router";

const opts = {
    headers: { "Content-Type": "application/json" }
};

export default new Router() 
    .get("/", () => new Response("Hi"))
    .post("/json", async req => new Response(
        JSON.stringify(await req.json()), opts
    ))
    .get("/id/:id", req => new Response(req.params.id))
    .use(404);