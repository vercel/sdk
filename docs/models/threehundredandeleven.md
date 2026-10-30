# ThreeHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEleven } from "@vercel/sdk/models/usereventpayload261origin.js";

let value: ThreeHundredAndEleven = {
  createDeployments: "enabled",
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