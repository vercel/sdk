# Definition

## Example Usage

```typescript
import { Definition } from "@vercel/sdk/models/getvercelciinvocationtreeop.js";

let value: Definition = {
  invocationId: "<id>",
  invocationAttempt: 4314.89,
  jobDefinitionId: "<id>",
  kind: "command",
  name: "<value>",
  command: "<value>",
  createdAt: 729.17,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `invocationId`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `invocationAttempt`                                                                | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `jobDefinitionId`                                                                  | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `kind`                                                                             | [models.GetVercelCiInvocationTreeKind](../models/getvercelciinvocationtreekind.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `command`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `createdAt`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |