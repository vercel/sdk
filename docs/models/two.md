# Two

Principal that originally created the connector — either a Vercel user (interactive dashboard / CLI flow) or a Vercel deployment (OIDC-authenticated project, used by runtime auto-provisioning). See {@link ConnexPrincipal}. Optional: pre-existing rows from before this shape was introduced may carry no attribution at all.

## Example Usage

```typescript
import { Two } from "@vercel/sdk/models/connectconnector.js";

let value: Two = {
  type: "project",
  id: "<id>",
  environment: "development",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `type`                                           | *"project"*                                      | :heavy_check_mark:                               | Principal kind.                                  |
| `id`                                             | *string*                                         | :heavy_check_mark:                               | Vercel project ID.                               |
| `environment`                                    | *models.Environment*                             | :heavy_check_mark:                               | Deployment environment of the project principal. |