# Three1

## Example Usage

```typescript
import { Three1 } from "@vercel/sdk/models/getdeploymenteventsop.js";

let value: Three1 = {
  created: 1385.38,
  payload: {
    date: 4034.37,
    deploymentId: "<id>",
    id: "<id>",
    serial: "<value>",
  },
  type: "metric",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `created`                                        | *number*                                         | :heavy_check_mark:                               | N/A                                              |
| `payload`                                        | [models.ThreePayload](../models/threepayload.md) | :heavy_check_mark:                               | N/A                                              |
| `type`                                           | [models.ThreeType](../models/threetype.md)       | :heavy_check_mark:                               | N/A                                              |