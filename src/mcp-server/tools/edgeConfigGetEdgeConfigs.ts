/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { edgeConfigGetEdgeConfigs } from "../../funcs/edgeConfigGetEdgeConfigs.js";
import { GetEdgeConfigsRequest$inboundSchema } from "../../models/getedgeconfigsop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: GetEdgeConfigsRequest$inboundSchema,
};

export const tool$edgeConfigGetEdgeConfigs: ToolDefinition<typeof args> = {
  name: "edge-config_get-edge-configs",
  description: `Get Edge Configs

Returns all Edge Configs.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await edgeConfigGetEdgeConfigs(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
