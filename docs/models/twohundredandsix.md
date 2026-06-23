# TwoHundredAndSix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSix } from "@vercel/sdk/models/removedusers.js";

let value: TwoHundredAndSix = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultTimeout: 2772.81,
  },
  next: {
    functionDefaultTimeout: 9351.18,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload206Previous](../models/usereventpayload206previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload206Next](../models/usereventpayload206next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |