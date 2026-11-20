# OneHundredAndNinetyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyNine } from "@vercel/sdk/models/newprojects.js";

let value: OneHundredAndNinetyNine = {
  active: true,
  projectId: "<id>",
  rulesetName: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `action`                                                                   | [models.UserEventPayload199Action](../models/usereventpayload199action.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `active`                                                                   | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `rulesetName`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |