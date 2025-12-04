export { AIAgent, Trigger };
import { AIAgent as _AIAgent, Trigger as _Trigger } from "@deco/ai/actors";
import { instrumentDO } from "@decocms/sdk/observability";

const AIAgent = instrumentDO(_AIAgent);
const Trigger = instrumentDO(_Trigger);
