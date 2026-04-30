import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/index.js";
export declare const db: PrismaClient<{
    adapter: PrismaMariaDb;
}, never, import("../generated/prisma/runtime/client.js").DefaultArgs>;
export declare function connectDB(): Promise<void>;
//# sourceMappingURL=database.d.ts.map