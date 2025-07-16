import { t } from "../trpc"
import { userRouter } from "./user.router";
import { authRouter } from "./auth.router";
import { jobRouter } from "./job.router";
import { ratingsRouter } from "./rating.router";
import { workerRouter } from "./worker.router";
import { serviceRouter } from "./service.router";
import { locationRouter } from "./location.router";
console.log("Server/router");

export const appRouter = t.router({
    users: userRouter,
    auth: authRouter,
    job: jobRouter,
    rating: ratingsRouter,
    worker: workerRouter,
    service: serviceRouter,
    location: locationRouter
});

export const mergedRouter = t.mergeRouters(userRouter,authRouter,jobRouter,ratingsRouter,workerRouter,appRouter,serviceRouter,locationRouter)
