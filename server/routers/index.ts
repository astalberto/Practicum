import { t } from "../trpc"
import { userRouter } from "./user";
import { authRouter } from "./auth";
import { jobRouter } from "./job";
import { ratingsRouter } from "./rating";
import { workerRouter } from "./worker";
console.log("Server/router");

export const appRouter = t.router({
    users: userRouter,
    auth: authRouter,
    job: jobRouter,
    rating: ratingsRouter,
    worker: workerRouter
});

export const mergedRouter = t.mergeRouters(userRouter,authRouter,jobRouter,ratingsRouter,workerRouter,appRouter)
