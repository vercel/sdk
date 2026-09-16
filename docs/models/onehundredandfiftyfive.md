# OneHundredAndFiftyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyFive } from "@vercel/sdk/models/onehundredandfortyeight.js";

let value: OneHundredAndFiftyFive = {
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
| `target`                                                                     | [models.UserEventPayload155Target](../models/usereventpayload155target.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |