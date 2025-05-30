/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { edgeConfigCreateEdgeConfigToken } from "../../funcs/edgeConfigCreateEdgeConfigToken.js";
import { CreateEdgeConfigTokenRequest$inboundSchema } from "../../models/createedgeconfigtokenop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: CreateEdgeConfigTokenRequest$inboundSchema,
};

export const tool$edgeConfigCreateEdgeConfigToken: ToolDefinition<typeof args> =
  {
    name: "edge-config-create-edge-config-token",
    description: `Create an Edge Config token

Adds a token to an existing Edge Config.`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await edgeConfigCreateEdgeConfigToken(
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
