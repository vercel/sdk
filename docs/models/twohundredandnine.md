# TwoHundredAndNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNine } from "@vercel/sdk/models/onehundredandsixtyfour.js";

let value: TwoHundredAndNine = {
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