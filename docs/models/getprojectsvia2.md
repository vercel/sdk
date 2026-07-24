# GetProjectsVia2

Set when a Vercel App or Integration acts on behalf of a {@link User}. Captures user-consented OAuth delegation that the ACL layer may inspect to evaluate scope restrictions. This is NOT for impersonation or token-exchange provenance — those live on `auth.token`, not on the principal.

## Example Usage

```typescript
import { GetProjectsVia2 } from "@vercel/sdk/models/getprojectscontenthint3.js";

let value: GetProjectsVia2 = {
  type: "integration",
  integration: {
    integrationId: "<id>",
    configurationId: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | *"integration"*                                                            | :heavy_check_mark:                                                         | N/A                                                                        |
| `integration`                                                              | [models.GetProjectsViaIntegration](../models/getprojectsviaintegration.md) | :heavy_check_mark:                                                         | N/A                                                                        |