/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { marketplaceGetAccountInfo } from "../../funcs/marketplaceGetAccountInfo.js";
import { GetAccountInfoRequest$inboundSchema } from "../../models/getaccountinfoop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: GetAccountInfoRequest$inboundSchema,
};

export const tool$marketplaceGetAccountInfo: ToolDefinition<typeof args> = {
  name: "marketplace-get-account-info",
  description: `Get Account Information

Fetches the best account or user’s contact info`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await marketplaceGetAccountInfo(
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
