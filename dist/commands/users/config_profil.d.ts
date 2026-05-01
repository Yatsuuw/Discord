import type { Command } from "../../types/index.js";
import type { users } from "../../generated/prisma/index.js";
export declare const SITE_CONFIG: Record<string, {
    label: string;
    getUsername: (u: users) => string | null;
    buildUrl: (username: string) => string;
}>;
declare const command: Command;
export default command;
//# sourceMappingURL=config_profil.d.ts.map