/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dnsUpdateRecord } from "../../funcs/dnsUpdateRecord.js";
import { UpdateRecordRequest$inboundSchema } from "../../models/updaterecordop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: UpdateRecordRequest$inboundSchema,
};

export const tool$dnsUpdateRecord: ToolDefinition<typeof args> = {
  name: "dns-update-record",
  description: `Update an existing DNS record

Updates an existing DNS record for a domain name.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await dnsUpdateRecord(
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
