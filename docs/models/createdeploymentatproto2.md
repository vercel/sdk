# CreateDeploymentAtproto2

## Example Usage

```typescript
import { CreateDeploymentAtproto2 } from "@vercel/sdk/models/createdeploymentvaluedeploymentseq.js";

let value: CreateDeploymentAtproto2 = {
  enabled: true,
  subscription: {
    collections: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    path: "/home",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `enabled`                                                      | *true*                                                         | :heavy_check_mark:                                             | N/A                                                            |
| `subscription`                                                 | [models.AtprotoSubscription](../models/atprotosubscription.md) | :heavy_check_mark:                                             | N/A                                                            |