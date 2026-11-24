# FiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyEight } from "@vercel/sdk/models/usereventpayload25provider.js";

let value: FiftyEight = {
  virtualModelConfig: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `virtualModelConfig`                                         | [models.VirtualModelConfig](../models/virtualmodelconfig.md) | :heavy_check_mark:                                           | N/A                                                          |