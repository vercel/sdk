# OneHundredAndEightySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightySix } from "@vercel/sdk/models/onehundredandfiftyfive.js";

let value: OneHundredAndEightySix = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultTimeout: 8783.46,
  },
  next: {
    functionDefaultTimeout: 305.41,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload186Previous](../models/usereventpayload186previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload186Next](../models/usereventpayload186next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |