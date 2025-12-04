/**
 * This file re-exports broadcast utilities from the SDK for backwards compatibility.
 * New code should import directly from @decocms/sdk instead.
 */
export {
  addIntegrationUpdateListener,
  notifyResourceUpdate,
  type IntegrationMessage,
  type ResourceMessage,
} from "@decocms/sdk";
