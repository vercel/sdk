# OneHundredAndFiftyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyFour } from "@vercel/sdk/models/onehundredandthirtyone.js";

let value: OneHundredAndFiftyFour = {
  projectId: "<id>",
  rulesetName: "<value>",
  active: false,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `projectId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `rulesetName`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `active`                                                                   | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `action`                                                                   | [models.UserEventPayload154Action](../models/usereventpayload154action.md) | :heavy_minus_sign:                                                         | N/A                                                                        |