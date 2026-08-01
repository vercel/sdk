# TwoHundredAndThirtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyEight } from "@vercel/sdk/models/envid.js";

let value: TwoHundredAndThirtyEight = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultTimeout: 5212.63,
  },
  next: {
    functionDefaultTimeout: 5092.01,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload238Previous](../models/usereventpayload238previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload238Next](../models/usereventpayload238next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |