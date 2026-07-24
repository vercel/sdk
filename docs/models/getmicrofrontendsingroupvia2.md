# GetMicrofrontendsInGroupVia2

Set when a Vercel App or Integration acts on behalf of a {@link User}. Captures user-consented OAuth delegation that the ACL layer may inspect to evaluate scope restrictions. This is NOT for impersonation or token-exchange provenance — those live on `auth.token`, not on the principal.

## Example Usage

```typescript
import { GetMicrofrontendsInGroupVia2 } from "@vercel/sdk/models/getmicrofrontendsingroupaliasassigned.js";

let value: GetMicrofrontendsInGroupVia2 = {
  type: "integration",
  integration: {
    integrationId: "<id>",
    configurationId: "<id>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | *"integration"*                                                                                      | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `integration`                                                                                        | [models.GetMicrofrontendsInGroupViaIntegration](../models/getmicrofrontendsingroupviaintegration.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |