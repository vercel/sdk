# FiveHundredAndTwentyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTwentyOne } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndTwentyOne = {
  alertType: "<value>",
  groupId: "<id>",
  projectId: "<id>",
  destinations: {},
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `alertType`                                                    | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `groupId`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `projectId`                                                    | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `severity`                                                     | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `destinations`                                                 | [models.PayloadDestinations](../models/payloaddestinations.md) | :heavy_check_mark:                                             | N/A                                                            |
| `title`                                                        | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |