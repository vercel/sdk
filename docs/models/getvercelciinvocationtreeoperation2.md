# GetVercelCiInvocationTreeOperation2

## Example Usage

```typescript
import { GetVercelCiInvocationTreeOperation2 } from "@vercel/sdk/models/getvercelciinvocationtreeop.js";

let value: GetVercelCiInvocationTreeOperation2 = {
  kind: "deployment",
  projectId: "<id>",
  target: "preview",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                   | *"deployment"*                                                                                           | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `projectId`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `target`                                                                                                 | [models.GetVercelCiInvocationTreeOperationTarget](../models/getvercelciinvocationtreeoperationtarget.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |