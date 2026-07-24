# OneHundredAndFortyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyEight } from "@vercel/sdk/models/onehundredandfortyfour.js";

let value: OneHundredAndFortyEight = {
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
| `action`                                                                   | [models.UserEventPayload148Action](../models/usereventpayload148action.md) | :heavy_minus_sign:                                                         | N/A                                                                        |