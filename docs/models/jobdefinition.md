# JobDefinition

## Example Usage

```typescript
import { JobDefinition } from "@vercel/sdk/models/getvercelcijobdefinitionop.js";

let value: JobDefinition = {
  invocationId: "<id>",
  invocationAttempt: 2511.15,
  jobDefinitionId: "<id>",
  kind: "turbo",
  name: "<value>",
  command: "<value>",
  createdAt: 2143.72,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `invocationId`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `invocationAttempt`                                                              | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `jobDefinitionId`                                                                | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `kind`                                                                           | [models.GetVercelCiJobDefinitionKind](../models/getvercelcijobdefinitionkind.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `name`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `command`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `createdAt`                                                                      | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |