# TwoHundredAndEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEight } from "@vercel/sdk/models/querytype.js";

let value: TwoHundredAndEight = {
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
| `endpoint`                               | [models.Endpoint](../models/endpoint.md) | :heavy_check_mark:                       | N/A                                      |