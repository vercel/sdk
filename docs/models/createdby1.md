# CreatedBy1

Principal that originally created the connector — either a Vercel user (interactive dashboard / CLI flow) or a Vercel deployment (OIDC-authenticated project, used by runtime auto-provisioning). See {@link ConnexPrincipal}. Optional: pre-existing rows from before this shape was introduced may carry no attribution at all.

## Example Usage

```typescript
import { CreatedBy1 } from "@vercel/sdk/models/createconnectorop.js";

let value: CreatedBy1 = {
  type: "user",
  id: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *"user"*           | :heavy_check_mark: | N/A                |
| `id`               | *string*           | :heavy_check_mark: | N/A                |