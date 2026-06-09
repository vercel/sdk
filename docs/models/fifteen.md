# Fifteen

The payload of the event, if requested.

## Example Usage

```typescript
import { Fifteen } from "@vercel/sdk/models/userevent.js";

let value: Fifteen = {
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