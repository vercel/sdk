# Three1

## Example Usage

```typescript
import { Three1 } from "@vercel/sdk/models/getdeploymenteventsop.js";

let value: Three1 = {
  type: "delimiter",
  created: 4034.37,
  payload: {
    deploymentId: "<id>",
    id: "<id>",
    date: 5232.2,
    serial: "<value>",
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `type`                                           | [models.ThreeType](../models/threetype.md)       | :heavy_check_mark:                               | N/A                                              |
| `created`                                        | *number*                                         | :heavy_check_mark:                               | N/A                                              |
| `payload`                                        | [models.ThreePayload](../models/threepayload.md) | :heavy_check_mark:                               | N/A                                              |