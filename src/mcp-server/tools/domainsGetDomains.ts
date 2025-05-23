/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { domainsGetDomains } from "../../funcs/domainsGetDomains.js";
import { GetDomainsRequest$inboundSchema } from "../../models/getdomainsop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: GetDomainsRequest$inboundSchema,
};

export const tool$domainsGetDomains: ToolDefinition<typeof args> = {
  name: "domains-get-domains",
  description: `List all the domains

Retrieves a list of domains registered for the authenticated user or team. By default it returns the last 20 domains if no limit is provided.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await domainsGetDomains(
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
