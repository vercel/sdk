# TwoHundredAndThirtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyThree } from "@vercel/sdk/models/payloaddefault.js";

let value: TwoHundredAndThirtyThree = {
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