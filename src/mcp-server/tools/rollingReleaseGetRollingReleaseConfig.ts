/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { rollingReleaseGetRollingReleaseConfig } from "../../funcs/rollingReleaseGetRollingReleaseConfig.js";
import { GetRollingReleaseConfigRequest$inboundSchema } from "../../models/getrollingreleaseconfigop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: GetRollingReleaseConfigRequest$inboundSchema,
};

export const tool$rollingReleaseGetRollingReleaseConfig: ToolDefinition<
  typeof args
> = {
  name: "rolling-release-get-rolling-release-config",
  description: `Get rolling release configuration

Get the Rolling Releases configuration for a project. The project-level config is simply a template that will be used for any future rolling release, and not the configuration for any active rolling release.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await rollingReleaseGetRollingReleaseConfig(
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
