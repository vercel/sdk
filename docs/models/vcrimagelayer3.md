# VcrImageLayer3

## Example Usage

```typescript
import { VcrImageLayer3 } from "@vercel/sdk/models/vcrimagelayer.js";

let value: VcrImageLayer3 = {
  createdBy: "<value>",
  digest: "<value>",
  operation: "RUN",
  sizeBytes: 7274.03,
  type: "ENV",
  env: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `createdBy`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `digest`                                                               | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `operation`                                                            | [models.VcrImageLayer3Operation](../models/vcrimagelayer3operation.md) | :heavy_check_mark:                                                     | Docker/OCI build instruction associated with an image layer.           |
| `sizeBytes`                                                            | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `type`                                                                 | *"ENV"*                                                                | :heavy_check_mark:                                                     | N/A                                                                    |
| `env`                                                                  | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |