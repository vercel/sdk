# OneHundredAndFourteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFourteen } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFourteen = {
  projectId: "<id>",
  projectName: "<value>",
  createDeployments: "enabled",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `projectId`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `projectName`                                              | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `createDeployments`                                        | [models.CreateDeployments](../models/createdeployments.md) | :heavy_check_mark:                                         | N/A                                                        |