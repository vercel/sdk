# FiveHundredAndFourteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFourteen } from "@vercel/sdk/models/usereventpayload471actortype.js";

let value: FiveHundredAndFourteen = {
  next: {
    enabled: true,
    issuerUrls: [
      "<value 1>",
      "<value 2>",
    ],
  },
  previous: {
    enabled: false,
    issuerUrls: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  scope: "team",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload514Next](../models/usereventpayload514next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload514Previous](../models/usereventpayload514previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `scope`                                                                        | [models.UserEventPayload514Scope](../models/usereventpayload514scope.md)       | :heavy_check_mark:                                                             | N/A                                                                            |