# TwoHundredAndTwentySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentySix } from "@vercel/sdk/models/siftroute.js";

let value: TwoHundredAndTwentySix = {
  endpoint: {
    id: "<id>",
    name: "<value>",
    projectId: "<id>",
    vercelRegion: "<value>",
    awsServiceName: "<value>",
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `projectName`                            | *string*                                 | :heavy_minus_sign:                       | N/A                                      |
| `endpoint`                               | [models.Endpoint](../models/endpoint.md) | :heavy_check_mark:                       | N/A                                      |