# ThreeHundredAndEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEight } from "@vercel/sdk/models/usereventpayload256next.js";

let value: ThreeHundredAndEight = {
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