# OneHundredAndNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNine } from "@vercel/sdk/models/seventyeight.js";

let value: OneHundredAndNine = {
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
| `action`                                                                   | [models.UserEventPayload109Action](../models/usereventpayload109action.md) | :heavy_minus_sign:                                                         | N/A                                                                        |