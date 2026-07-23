# CreatedBy2

Principal that originally created the connector — either a Vercel user (interactive dashboard / CLI flow) or a Vercel deployment (OIDC-authenticated project, used by runtime auto-provisioning). See {@link ConnexPrincipal}. Optional: pre-existing rows from before this shape was introduced may carry no attribution at all.

## Example Usage

```typescript
import { CreatedBy2 } from "@vercel/sdk/models/createconnectorop.js";

let value: CreatedBy2 = {
  type: "project",
  id: "<id>",
  environment: "<value>",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `type`                        | *"project"*                   | :heavy_check_mark:            | N/A                           |
| `id`                          | *string*                      | :heavy_check_mark:            | N/A                           |
| `environment`                 | *models.CreatedByEnvironment* | :heavy_check_mark:            | N/A                           |