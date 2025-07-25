/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { rollingReleaseCompleteRollingRelease } from "../../funcs/rollingReleaseCompleteRollingRelease.js";
import { CompleteRollingReleaseRequest$inboundSchema } from "../../models/completerollingreleaseop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: CompleteRollingReleaseRequest$inboundSchema,
};

export const tool$rollingReleaseCompleteRollingRelease: ToolDefinition<
  typeof args
> = {
  name: "rolling-release-complete-rolling-release",
  description: `Complete the rolling release for the project

Force-complete a Rolling Release. The canary deployment will begin serving 100% of the traffic.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await rollingReleaseCompleteRollingRelease(
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
