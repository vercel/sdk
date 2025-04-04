/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { marketplaceImportResource } from "../../funcs/marketplaceImportResource.js";
import { ImportResourceRequest$inboundSchema } from "../../models/importresourceop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: ImportResourceRequest$inboundSchema,
};

export const tool$marketplaceImportResource: ToolDefinition<typeof args> = {
  name: "marketplace-import-resource",
  description: `Import Resource

This endpoint imports (upserts) a resource to Vercel's installation. This may be needed if resources can be independently created on the partner's side and need to be synchronized to Vercel.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await marketplaceImportResource(
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
