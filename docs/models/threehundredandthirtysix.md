# ThreeHundredAndThirtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtySix } from "@vercel/sdk/models/threehundredandtwentyfour.js";

let value: ThreeHundredAndThirtySix = {
  createDeployments: "disabled",
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `createDeployments`                                        | [models.CreateDeployments](../models/createdeployments.md) | :heavy_check_mark:                                         | N/A                                                        |
| `projectId`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `projectName`                                              | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |