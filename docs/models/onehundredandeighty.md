# OneHundredAndEighty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEighty } from "@vercel/sdk/models/lasteditedbyprincipal2.js";

let value: OneHundredAndEighty = {
  active: false,
  projectId: "<id>",
  rulesetName: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `action`                                                                   | [models.UserEventPayload180Action](../models/usereventpayload180action.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `active`                                                                   | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `rulesetName`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |