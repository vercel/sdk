# OneHundredAndSixtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyFour } from "@vercel/sdk/models/usereventpayload163previous.js";

let value: OneHundredAndSixtyFour = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionZeroConfigFailover: false,
  },
  next: {
    functionZeroConfigFailover: true,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload164Previous](../models/usereventpayload164previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload164Next](../models/usereventpayload164next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |