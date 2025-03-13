/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { deploymentsUploadFile } from "../../funcs/deploymentsUploadFile.js";
import { UploadFileRequest$inboundSchema } from "../../models/uploadfileop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: UploadFileRequest$inboundSchema,
};

export const tool$deploymentsUploadFile: ToolDefinition<typeof args> = {
  name: "deployments-upload-file",
  description: `Upload Deployment Files

Before you create a deployment you need to upload the required files for that deployment. To do it, you need to first upload each file to this endpoint. Once that's completed, you can create a new deployment with the uploaded files. The file content must be placed inside the body of the request. In the case of a successful response you'll receive a status code 200 with an empty body.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await deploymentsUploadFile(
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
