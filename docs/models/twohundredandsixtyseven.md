# TwoHundredAndSixtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtySeven } from "@vercel/sdk/models/trigger.js";

let value: TwoHundredAndSixtySeven = {
  next: {
    functionDefaultTimeout: 8665.69,
  },
  previous: {
    functionDefaultTimeout: 3950.93,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload267Next](../models/usereventpayload267next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload267Previous](../models/usereventpayload267previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |