# UpdateProjectVia1

Set when a Vercel App or Integration acts on behalf of a {@link User}. Captures user-consented OAuth delegation that the ACL layer may inspect to evaluate scope restrictions. This is NOT for impersonation or token-exchange provenance — those live on `auth.token`, not on the principal.

## Example Usage

```typescript
import { UpdateProjectVia1 } from "@vercel/sdk/models/updateprojectdefinitions.js";

let value: UpdateProjectVia1 = {
  app: {
    id: "<id>",
  },
  type: "app",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `app`                                                          | [models.UpdateProjectViaApp](../models/updateprojectviaapp.md) | :heavy_check_mark:                                             | N/A                                                            |
| `type`                                                         | *"app"*                                                        | :heavy_check_mark:                                             | N/A                                                            |