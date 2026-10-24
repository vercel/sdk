# ThreeHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndOne } from "@vercel/sdk/models/usereventpayload257next.js";

let value: ThreeHundredAndOne = {
  next: {
    functionZeroConfigFailover: false,
  },
  previous: {
    functionZeroConfigFailover: false,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload301Next](../models/usereventpayload301next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload301Previous](../models/usereventpayload301previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |