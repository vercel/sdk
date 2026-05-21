# OneHundredAndTwenty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwenty } from "@vercel/sdk/models/usereventpayload80deployment.js";

let value: OneHundredAndTwenty = {
  projectId: "<id>",
  rulesetName: "<value>",
  active: true,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `projectId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `rulesetName`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `active`                                                                   | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `action`                                                                   | [models.UserEventPayload120Action](../models/usereventpayload120action.md) | :heavy_minus_sign:                                                         | N/A                                                                        |