# VcrImageLayer1

## Example Usage

```typescript
import { VcrImageLayer1 } from "@vercel/sdk/models/vcrimagelayer.js";

let value: VcrImageLayer1 = {
  createdBy: "<value>",
  digest: "<value>",
  operation: "UNKNOWN",
  sizeBytes: 3930.23,
  type: "FROM",
  baseImage: "<value>",
  collapsedDigests: [
    "<value 1>",
  ],
  collapsedLayerCount: 1241.24,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `createdBy`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `digest`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `operation`                                                  | [models.Operation](../models/operation.md)                   | :heavy_check_mark:                                           | Docker/OCI build instruction associated with an image layer. |
| `sizeBytes`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `type`                                                       | *"FROM"*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `baseImage`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `collapsedDigests`                                           | *string*[]                                                   | :heavy_check_mark:                                           | N/A                                                          |
| `collapsedLayerCount`                                        | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |