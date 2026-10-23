# FourHundredAndNinetyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetyFour } from "@vercel/sdk/models/fourhundredandfortynine.js";

let value: FourHundredAndNinetyFour = {
  next: {
    enabled: false,
    issuerUrls: [
      "<value 1>",
    ],
  },
  previous: {
    enabled: false,
    issuerUrls: [],
  },
  scope: "organization",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload494Next](../models/usereventpayload494next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload494Previous](../models/usereventpayload494previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `scope`                                                                        | [models.UserEventPayload494Scope](../models/usereventpayload494scope.md)       | :heavy_check_mark:                                                             | N/A                                                                            |