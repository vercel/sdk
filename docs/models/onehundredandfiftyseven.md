# OneHundredAndFiftySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftySeven } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFiftySeven = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionZeroConfigFailover: true,
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
| `previous`                                                                     | [models.UserEventPayload157Previous](../models/usereventpayload157previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload157Next](../models/usereventpayload157next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |