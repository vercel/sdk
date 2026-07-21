# UpdatedBy2

Principal that most recently mutated the connector. Same shape as {@link createdBy} but tracks the most recent updater, not the original creator. At create time the two fields point at the same principal; they diverge on the first subsequent update.

## Example Usage

```typescript
import { UpdatedBy2 } from "@vercel/sdk/models/createconnectorop.js";

let value: UpdatedBy2 = {
  type: "project",
  id: "<id>",
  environment: "development",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `type`                                                           | *"project"*                                                      | :heavy_check_mark:                                               | N/A                                                              |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `environment`                                                    | [models.UpdatedByEnvironment](../models/updatedbyenvironment.md) | :heavy_check_mark:                                               | Built-in environment name or stable custom environment ID.       |
