# TwentyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyFour } from "@vercel/sdk/models/nineteen.js";

let value: TwentyFour = {
  virtualModelConfig: {
    id: "<id>",
    modelSlug: "<value>",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `virtualModelConfig`                                         | [models.VirtualModelConfig](../models/virtualmodelconfig.md) | :heavy_check_mark:                                           | N/A                                                          |