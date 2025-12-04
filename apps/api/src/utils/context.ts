import type { Bindings, Vars } from "@decocms/sdk/mcp";
import type { Context } from "hono";
import type { TimingVariables } from "hono/timing";
export * from "@decocms/sdk/mcp";
export type { Bindings };
export type AppEnv = {
  Variables: Vars & TimingVariables;
  Bindings: Bindings;
};

export type HonoAppContext = Context<AppEnv>;
