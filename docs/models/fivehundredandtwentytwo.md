# FiveHundredAndTwentyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTwentyTwo } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndTwentyTwo = {
  alertType: "<value>",
  groupId: "<id>",
  projectId: "<id>",
  destinations: {},
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `alertType`                                      | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `groupId`                                        | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `projectId`                                      | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `severity`                                       | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `destinations`                                   | [models.Destinations](../models/destinations.md) | :heavy_check_mark:                               | N/A                                              |