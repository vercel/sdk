# TwoHundredAndNinetyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyEight } from "@vercel/sdk/models/usereventpayload257next.js";

let value: TwoHundredAndNinetyEight = {
  next: {
    functionDefaultTimeout: 261.58,
  },
  previous: {
    functionDefaultTimeout: 2171.77,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload298Next](../models/usereventpayload298next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload298Previous](../models/usereventpayload298previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |