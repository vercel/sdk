# VcrImageLayer2

## Example Usage

```typescript
import { VcrImageLayer2 } from "@vercel/sdk/models/vcrimagelayer.js";

let value: VcrImageLayer2 = {
  createdBy: null,
  digest: "<value>",
  operation: "RUN",
  sizeBytes: 5870.36,
  type: "RUN",
  command: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `createdBy`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `digest`                                                             | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `operation`                                                          | [models.VcrImageLayerOperation](../models/vcrimagelayeroperation.md) | :heavy_check_mark:                                                   | Docker/OCI build instruction associated with an image layer.         |
| `sizeBytes`                                                          | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `type`                                                               | *"RUN"*                                                              | :heavy_check_mark:                                                   | N/A                                                                  |
| `command`                                                            | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |