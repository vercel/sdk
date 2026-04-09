# OneHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEleven } from "@vercel/sdk/models/onehundredandone.js";

let value: OneHundredAndEleven = {
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
| `action`                                                                   | [models.UserEventPayload111Action](../models/usereventpayload111action.md) | :heavy_minus_sign:                                                         | N/A                                                                        |