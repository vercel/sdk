# GetBulkAvailabilityResponseBody

Success

## Example Usage

```typescript
import { GetBulkAvailabilityResponseBody } from "@vercel/sdk/models/getbulkavailabilityop.js";

let value: GetBulkAvailabilityResponseBody = {
  results: [
    {
      domain: "wrathful-puppet.net",
      available: true,
    },
  ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `results`                                | [models.Results](../models/results.md)[] | :heavy_check_mark:                       | N/A                                      |