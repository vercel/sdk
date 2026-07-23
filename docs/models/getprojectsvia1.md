# GetProjectsVia1

Set when a Vercel App or Integration acts on behalf of a {@link User}. Captures user-consented OAuth delegation that the ACL layer may inspect to evaluate scope restrictions. This is NOT for impersonation or token-exchange provenance — those live on `auth.token`, not on the principal.

## Example Usage

```typescript
import { GetProjectsVia1 } from "@vercel/sdk/models/getprojectscontenthint3.js";

let value: GetProjectsVia1 = {
  type: "app",
  app: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `type`                                                     | *"app"*                                                    | :heavy_check_mark:                                         | N/A                                                        |
| `app`                                                      | [models.GetProjectsViaApp](../models/getprojectsviaapp.md) | :heavy_check_mark:                                         | N/A                                                        |