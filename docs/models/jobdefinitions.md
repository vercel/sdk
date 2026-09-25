# JobDefinitions

## Example Usage

```typescript
import { JobDefinitions } from "@vercel/sdk/models/listvercelcijobdefinitionsop.js";

let value: JobDefinitions = {
  invocationId: "<id>",
  invocationAttempt: 3515.47,
  jobDefinitionId: "<id>",
  kind: "turbo",
  name: "<value>",
  command: "<value>",
  createdAt: 2562.28,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `invocationId`                                                                       | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `invocationAttempt`                                                                  | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `jobDefinitionId`                                                                    | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `kind`                                                                               | [models.ListVercelCiJobDefinitionsKind](../models/listvercelcijobdefinitionskind.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `command`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `createdAt`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |