# FiftySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftySix } from "@vercel/sdk/models/payloadaction.js";

let value: FiftySix = {
  virtualModelConfig: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `virtualModelConfig`                                         | [models.VirtualModelConfig](../models/virtualmodelconfig.md) | :heavy_check_mark:                                           | N/A                                                          |