import type { users } from "../generated/prisma/index.js";
export declare const SITE_CONFIG: Record<string, {
    label: string;
    getUsername: (u: users) => string | null;
    buildUrl: (username: string) => string;
}>;
//# sourceMappingURL=siteConfig.d.ts.map