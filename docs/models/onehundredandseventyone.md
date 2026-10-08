# OneHundredAndSeventyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventyOne } from "@vercel/sdk/models/lasteditedbyprincipal2.js";

let value: OneHundredAndSeventyOne = {
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
| `target`                                                                     | [models.UserEventPayload171Target](../models/usereventpayload171target.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |