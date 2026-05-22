# OneHundredAndSixtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyThree } from "@vercel/sdk/models/onehundredandfiftysix.js";

let value: OneHundredAndSixtyThree = {
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
| `action`                                                                   | [models.UserEventPayload163Action](../models/usereventpayload163action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `isEnvVar`                                                                 | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `note`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |