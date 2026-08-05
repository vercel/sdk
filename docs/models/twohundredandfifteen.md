# TwoHundredAndFifteen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFifteen } from "@vercel/sdk/models/onehundredandseventyone.js";

let value: TwoHundredAndFifteen = {
  prev: {
    id: "<id>",
    name: "<value>",
    projectId: "<id>",
    vercelRegion: "<value>",
    awsServiceName: "<value>",
  },
  current: {
    id: "<id>",
    name: "<value>",
    projectId: "<id>",
    vercelRegion: "<value>",
    awsServiceName: "<value>",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `prev`                                                           | [models.UserEventPayloadPrev](../models/usereventpayloadprev.md) | :heavy_check_mark:                                               | N/A                                                              |
| `current`                                                        | [models.Current](../models/current.md)                           | :heavy_check_mark:                                               | N/A                                                              |