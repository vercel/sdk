# OneHundredAndSixtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyOne } from "@vercel/sdk/models/onehundredandsixty.js";

let value: OneHundredAndSixtyOne = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionZeroConfigFailover: true,
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
| `previous`                                                                     | [models.UserEventPayload161Previous](../models/usereventpayload161previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload161Next](../models/usereventpayload161next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |