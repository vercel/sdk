# Seven

The payload of the event, if requested.

## Example Usage

```typescript
import { Seven } from "@vercel/sdk/models/userevent.js";

let value: Seven = {};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `alias`                                      | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `deployment`                                 | [models.Deployment](../models/deployment.md) | :heavy_minus_sign:                           | N/A                                          |
| `ruleCount`                                  | *number*                                     | :heavy_minus_sign:                           | N/A                                          |
| `deploymentUrl`                              | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `aliasId`                                    | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `deploymentId`                               | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `oldDeploymentId`                            | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `redirect`                                   | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `redirectStatusCode`                         | *number*                                     | :heavy_minus_sign:                           | N/A                                          |
| `target`                                     | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `system`                                     | *boolean*                                    | :heavy_minus_sign:                           | N/A                                          |
| `aliasUpdatedAt`                             | *number*                                     | :heavy_minus_sign:                           | N/A                                          |