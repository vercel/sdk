/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { securityRemoveBypassIp } from "../../funcs/securityRemoveBypassIp.js";
import { RemoveBypassIpRequest$inboundSchema } from "../../models/removebypassipop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: RemoveBypassIpRequest$inboundSchema,
};

export const tool$securityRemoveBypassIp: ToolDefinition<typeof args> = {
  name: "security-remove-bypass-ip",
  description: `Remove System Bypass Rule

Remove system bypass rules`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await securityRemoveBypassIp(
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
