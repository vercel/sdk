/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { artifactsUploadArtifact } from "../../funcs/artifactsUploadArtifact.js";
import { UploadArtifactRequest$inboundSchema } from "../../models/uploadartifactop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: UploadArtifactRequest$inboundSchema,
};

export const tool$artifactsUploadArtifact: ToolDefinition<typeof args> = {
  name: "artifacts-upload-artifact",
  description: `Upload a cache artifact

Uploads a cache artifact identified by the \`hash\` specified on the path. The cache artifact can then be downloaded with the provided \`hash\`.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await artifactsUploadArtifact(
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
