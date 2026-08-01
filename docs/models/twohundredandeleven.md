# TwoHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEleven } from "@vercel/sdk/models/onehundredandsixtyfour.js";

let value: TwoHundredAndEleven = {
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