# FourHundredAndFortyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortyFive } from "@vercel/sdk/models/fourhundredandthirtyfive.js";

let value: FourHundredAndFortyFive = {
  enabled: true,
  environment: "preview",
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `enabled`                                                    | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `environment`                                                | [models.PayloadEnvironment](../models/payloadenvironment.md) | :heavy_check_mark:                                           | N/A                                                          |
| `projectId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `projectName`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |