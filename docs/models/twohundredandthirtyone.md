# TwoHundredAndThirtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyOne } from "@vercel/sdk/models/usereventpayloadnext.js";

let value: TwoHundredAndThirtyOne = {
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