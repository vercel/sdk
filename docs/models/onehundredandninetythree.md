# OneHundredAndNinetyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyThree } from "@vercel/sdk/models/jobproject.js";

let value: OneHundredAndNinetyThree = {
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
| `target`                                                                     | [models.UserEventPayload193Target](../models/usereventpayload193target.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |