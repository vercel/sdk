# FiveHundredAndTwentyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTwentyOne } from "@vercel/sdk/models/fourhundredandeightyseven.js";

let value: FiveHundredAndTwentyOne = {
  next: {
    enabled: true,
    issuerUrls: [],
  },
  previous: {
    enabled: true,
    issuerUrls: [
      "<value 1>",
    ],
  },
  scope: "team",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload521Next](../models/usereventpayload521next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload521Previous](../models/usereventpayload521previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `scope`                                                                        | [models.UserEventPayload521Scope](../models/usereventpayload521scope.md)       | :heavy_check_mark:                                                             | N/A                                                                            |