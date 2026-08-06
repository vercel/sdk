# TwoHundredAndFortySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortySix } from "@vercel/sdk/models/twohundredandforty.js";

let value: TwoHundredAndFortySix = {
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
| `previous`                                                                     | [models.UserEventPayload246Previous](../models/usereventpayload246previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload246Next](../models/usereventpayload246next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |