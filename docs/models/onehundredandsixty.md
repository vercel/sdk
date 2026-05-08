# OneHundredAndSixty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixty } from "@vercel/sdk/models/payloadgituserid.js";

let value: OneHundredAndSixty = {
  projectId: "<id>",
  projectName: "<value>",
  action: "regenerated",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `projectId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectName`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `action`                                                                   | [models.UserEventPayload160Action](../models/usereventpayload160action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `isEnvVar`                                                                 | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `note`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |