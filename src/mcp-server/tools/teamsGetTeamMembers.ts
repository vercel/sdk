/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { teamsGetTeamMembers } from "../../funcs/teamsGetTeamMembers.js";
import { GetTeamMembersRequest$inboundSchema } from "../../models/getteammembersop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: GetTeamMembersRequest$inboundSchema,
};

export const tool$teamsGetTeamMembers: ToolDefinition<typeof args> = {
  name: "teams-get-team-members",
  description: `List team members

Get a paginated list of team members for the provided team.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await teamsGetTeamMembers(
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
