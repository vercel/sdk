# TwoHundredAndThirtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtySix } from "@vercel/sdk/models/twohundredandeleven.js";

let value: TwoHundredAndThirtySix = {
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
| `previous`                                                                     | [models.UserEventPayload236Previous](../models/usereventpayload236previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload236Next](../models/usereventpayload236next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |