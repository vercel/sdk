# FortyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyNine } from "@vercel/sdk/models/rule.js";

let value: FortyNine = {
  virtualModelConfig: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `virtualModelConfig`                                         | [models.VirtualModelConfig](../models/virtualmodelconfig.md) | :heavy_check_mark:                                           | N/A                                                          |