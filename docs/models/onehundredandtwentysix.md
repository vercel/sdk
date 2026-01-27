# OneHundredAndTwentySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentySix } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndTwentySix = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultTimeout: 2741.35,
  },
  next: {
    functionDefaultTimeout: 5217.02,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload126Previous](../models/usereventpayload126previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload126Next](../models/usereventpayload126next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |