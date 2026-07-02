# VcrImageLayer4

## Example Usage

```typescript
import { VcrImageLayer4 } from "@vercel/sdk/models/vcrimagelayer.js";

let value: VcrImageLayer4 = {
  createdBy: "<value>",
  digest: "<value>",
  operation: "ADD",
  sizeBytes: 8869.97,
  type: "LABEL",
  value: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `createdBy`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `digest`                                                               | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `operation`                                                            | [models.VcrImageLayer4Operation](../models/vcrimagelayer4operation.md) | :heavy_check_mark:                                                     | Docker/OCI build instruction associated with an image layer.           |
| `sizeBytes`                                                            | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `type`                                                                 | [models.VcrImageLayer4Type](../models/vcrimagelayer4type.md)           | :heavy_check_mark:                                                     | N/A                                                                    |
| `value`                                                                | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |