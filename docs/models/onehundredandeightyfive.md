# OneHundredAndEightyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyFive } from "@vercel/sdk/models/onehundredandeightythree.js";

let value: OneHundredAndEightyFive = {
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