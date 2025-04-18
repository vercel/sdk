/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { teamsRequestAccessToTeam } from "../../funcs/teamsRequestAccessToTeam.js";
import { RequestAccessToTeamRequest$inboundSchema } from "../../models/requestaccesstoteamop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: RequestAccessToTeamRequest$inboundSchema,
};

export const tool$teamsRequestAccessToTeam: ToolDefinition<typeof args> = {
  name: "teams-request-access-to-team",
  description: `Request access to a team

Request access to a team as a member. An owner has to approve the request. Only 10 users can request access to a team at the same time.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await teamsRequestAccessToTeam(
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
