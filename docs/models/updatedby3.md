# UpdatedBy3

Principal that most recently mutated the connector. Same shape as {@link createdBy} but tracks the most recent updater, not the original creator. At create time the two fields point at the same principal; they diverge on the first subsequent update.

## Example Usage

```typescript
import { UpdatedBy3 } from "@vercel/sdk/models/connectconnector.js";

let value: UpdatedBy3 = {
  environment: "development",
  id: "<id>",
  type: "project",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `environment`                 | *models.UpdatedByEnvironment* | :heavy_check_mark:            | N/A                           |
| `id`                          | *string*                      | :heavy_check_mark:            | Vercel project ID.            |
| `type`                        | *"project"*                   | :heavy_check_mark:            | Principal kind.               |