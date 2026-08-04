# TwoHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyTwo } from "@vercel/sdk/models/envid2.js";

let value: TwoHundredAndFortyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultTimeout: 8694.38,
  },
  next: {
    functionDefaultTimeout: 4250.76,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload242Previous](../models/usereventpayload242previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload242Next](../models/usereventpayload242next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |