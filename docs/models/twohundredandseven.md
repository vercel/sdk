# TwoHundredAndSeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeven } from "@vercel/sdk/models/payloadgituserid.js";

let value: TwoHundredAndSeven = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultTimeout: 961.94,
  },
  next: {
    functionDefaultTimeout: 4911.9,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload207Previous](../models/usereventpayload207previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload207Next](../models/usereventpayload207next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |