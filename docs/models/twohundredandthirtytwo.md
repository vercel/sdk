# TwoHundredAndThirtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyTwo } from "@vercel/sdk/models/siftroute.js";

let value: TwoHundredAndThirtyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  action: "updated",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `projectId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectName`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `action`                                                                   | [models.UserEventPayload232Action](../models/usereventpayload232action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `isEnvVar`                                                                 | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `note`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |