# CreatedBy2

Principal that originally created the connector — either a Vercel user (interactive dashboard / CLI flow) or a Vercel deployment (OIDC-authenticated project, used by runtime auto-provisioning). See {@link ConnexPrincipal}. Optional: pre-existing rows from before this shape was introduced may carry no attribution at all.

## Example Usage

```typescript
import { CreatedBy2 } from "@vercel/sdk/models/connectconnector.js";

let value: CreatedBy2 = {
  environment: "<value>",
  id: "<id>",
  type: "project",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `environment`                                    | *models.Environment*                             | :heavy_check_mark:                               | Deployment environment of the project principal. |
| `id`                                             | *string*                                         | :heavy_check_mark:                               | Vercel project ID.                               |
| `type`                                           | *"project"*                                      | :heavy_check_mark:                               | Principal kind.                                  |