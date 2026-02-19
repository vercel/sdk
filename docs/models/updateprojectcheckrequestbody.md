# UpdateProjectCheckRequestBody

## Example Usage

```typescript
import { UpdateProjectCheckRequestBody } from "@vercel/sdk/models/updateprojectcheckop.js";

let value: UpdateProjectCheckRequestBody = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `isRerequestable`                                                            | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `requires`                                                                   | [models.UpdateProjectCheckRequires](../models/updateprojectcheckrequires.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `targets`                                                                    | *string*[]                                                                   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `blocks`                                                                     | [models.UpdateProjectCheckBlocks](../models/updateprojectcheckblocks.md)     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `timeout`                                                                    | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |