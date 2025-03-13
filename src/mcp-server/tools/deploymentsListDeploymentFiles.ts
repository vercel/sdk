/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { deploymentsListDeploymentFiles } from "../../funcs/deploymentsListDeploymentFiles.js";
import { ListDeploymentFilesRequest$inboundSchema } from "../../models/listdeploymentfilesop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: ListDeploymentFilesRequest$inboundSchema,
};

export const tool$deploymentsListDeploymentFiles: ToolDefinition<typeof args> =
  {
    name: "deployments-list-deployment-files",
    description: `List Deployment Files

Allows to retrieve the file structure of the source code of a deployment by supplying the deployment unique identifier. If the deployment was created with the Vercel CLI or the API directly with the \`files\` key, it will have a file tree that can be retrievable.`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await deploymentsListDeploymentFiles(
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
