# TwoHundredAndFortyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyOne } from "@vercel/sdk/models/envid.js";

let value: TwoHundredAndFortyOne = {
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
| `previous`                                                                     | [models.UserEventPayload241Previous](../models/usereventpayload241previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload241Next](../models/usereventpayload241next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |