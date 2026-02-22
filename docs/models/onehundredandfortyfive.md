# OneHundredAndFortyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyFive } from "@vercel/sdk/models/projectanalytics.js";

let value: OneHundredAndFortyFive = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionZeroConfigFailover: false,
  },
  next: {
    functionZeroConfigFailover: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload145Previous](../models/usereventpayload145previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload145Next](../models/usereventpayload145next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |