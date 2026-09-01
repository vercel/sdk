# GetDeploymentAtproto2

## Example Usage

```typescript
import { GetDeploymentAtproto2 } from "@vercel/sdk/models/getdeploymentservicesmissing.js";

let value: GetDeploymentAtproto2 = {
  enabled: true,
  subscription: {
    collections: [
      "<value 1>",
      "<value 2>",
    ],
    path: "/Library",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `enabled`                                                                                | *true*                                                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `subscription`                                                                           | [models.GetDeploymentAtprotoSubscription](../models/getdeploymentatprotosubscription.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |