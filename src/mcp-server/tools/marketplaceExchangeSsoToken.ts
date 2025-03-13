/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { marketplaceExchangeSsoToken } from "../../funcs/marketplaceExchangeSsoToken.js";
import { ExchangeSsoTokenRequestBody$inboundSchema } from "../../models/exchangessotokenop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: ExchangeSsoTokenRequestBody$inboundSchema,
};

export const tool$marketplaceExchangeSsoToken: ToolDefinition<typeof args> = {
  name: "marketplace-exchange-sso-token",
  description: `SSO Token Exchange

During the autorization process, Vercel sends the user to the provider [redirectLoginUrl](https://vercel.com/docs/integrations/create-integration/submit-integration#redirect-login-url), that includes the OAuth authorization \`code\` parameter. The provider then calls the SSO Token Exchange endpoint with the sent code and receives the OIDC token. They log the user in based on this token and redirects the user back to the Vercel account using deep-link parameters included the redirectLoginUrl. This is used to verify the identity of the user during the [**Open in Provider** flow](https://vercel.com/docs/integrations/marketplace-flows#open-in-provider-button-flow). Providers should not persist the returned \`id_token\` in a database since the token will expire.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await marketplaceExchangeSsoToken(
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
