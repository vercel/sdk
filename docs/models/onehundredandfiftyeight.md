# OneHundredAndFiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyEight } from "@vercel/sdk/models/payloadtarget.js";

let value: OneHundredAndFiftyEight = {
  envId: "<id>",
  envKey: "<value>",
  organizationId: "<id>",
  provider: "<value>",
  repository: "<value>",
  target: [],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `envId`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `envKey`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `organizationId`                                                             | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `provider`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `repository`                                                                 | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `target`                                                                     | [models.UserEventPayload158Target](../models/usereventpayload158target.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |