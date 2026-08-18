# TwoHundredAndTwentyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyNine } from "@vercel/sdk/models/onehundredandninetythree.js";

let value: TwoHundredAndTwentyNine = {
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
| `action`                                                                   | [models.UserEventPayload229Action](../models/usereventpayload229action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `isEnvVar`                                                                 | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `note`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |