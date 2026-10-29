# OneHundredAndSeventySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventySeven } from "@vercel/sdk/models/usereventjobpayload125githashtagvercel.js";

let value: OneHundredAndSeventySeven = {
  envId: "<id>",
  envKey: "<value>",
  organizationId: "<id>",
  provider: "<value>",
  repository: "<value>",
  target: [
    "production",
  ],
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
| `target`                                                                     | [models.UserEventPayload177Target](../models/usereventpayload177target.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |