# FourHundredAndEightyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightyNine } from "@vercel/sdk/models/fourhundredandfortyfour.js";

let value: FourHundredAndEightyNine = {
  next: {
    enabled: false,
    issuerUrls: [
      "<value 1>",
      "<value 2>",
    ],
  },
  previous: {
    enabled: false,
    issuerUrls: [],
  },
  scope: "team",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload489Next](../models/usereventpayload489next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload489Previous](../models/usereventpayload489previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `scope`                                                                        | [models.UserEventPayload489Scope](../models/usereventpayload489scope.md)       | :heavy_check_mark:                                                             | N/A                                                                            |