/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { certsUploadCert } from "../../funcs/certsUploadCert.js";
import { UploadCertRequest$inboundSchema } from "../../models/uploadcertop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: UploadCertRequest$inboundSchema,
};

export const tool$certsUploadCert: ToolDefinition<typeof args> = {
  name: "certs-upload-cert",
  description: `Upload a cert

Upload a cert`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await certsUploadCert(
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
