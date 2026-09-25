# Operation2

## Example Usage

```typescript
import { Operation2 } from "@vercel/sdk/models/listvercelcitaskdefinitionsop.js";

let value: Operation2 = {
  kind: "deployment",
  projectId: "<id>",
  target: "preview",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `kind`                                                 | *"deployment"*                                         | :heavy_check_mark:                                     | N/A                                                    |
| `projectId`                                            | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `target`                                               | [models.OperationTarget](../models/operationtarget.md) | :heavy_check_mark:                                     | N/A                                                    |