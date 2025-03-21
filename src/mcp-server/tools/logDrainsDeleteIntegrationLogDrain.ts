/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { logDrainsDeleteIntegrationLogDrain } from "../../funcs/logDrainsDeleteIntegrationLogDrain.js";
import { DeleteIntegrationLogDrainRequest$inboundSchema } from "../../models/deleteintegrationlogdrainop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: DeleteIntegrationLogDrainRequest$inboundSchema,
};

export const tool$logDrainsDeleteIntegrationLogDrain: ToolDefinition<
  typeof args
> = {
  name: "log-drains-delete-integration-log-drain",
  description: `Deletes the Integration log drain with the provided \`id\`

Deletes the Integration log drain with the provided \`id\`. When using an OAuth2 Token, the log drain can be deleted only if the integration owns it.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await logDrainsDeleteIntegrationLogDrain(
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

    return formatResult(void 0, apiCall);
  },
};
