# FourHundredAndNinetyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetyFive } from "@vercel/sdk/models/fourhundredandfifty.js";

let value: FourHundredAndNinetyFive = {
  next: {
    enabled: false,
    issuerUrls: [],
  },
  previous: {
    enabled: false,
    issuerUrls: [
      "<value 1>",
      "<value 2>",
    ],
  },
  scope: "organization",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload495Next](../models/usereventpayload495next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload495Previous](../models/usereventpayload495previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `scope`                                                                        | [models.UserEventPayload495Scope](../models/usereventpayload495scope.md)       | :heavy_check_mark:                                                             | N/A                                                                            |