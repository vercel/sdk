# TwoHundredAndFiftyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyFive } from "@vercel/sdk/models/siftroute.js";

let value: TwoHundredAndFiftyFive = {
  endpoint: {
    awsServiceName: "<value>",
    id: "<id>",
    name: "<value>",
    projectId: "<id>",
    vercelRegion: "<value>",
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `endpoint`                               | [models.Endpoint](../models/endpoint.md) | :heavy_check_mark:                       | N/A                                      |
| `projectName`                            | *string*                                 | :heavy_minus_sign:                       | N/A                                      |