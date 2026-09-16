# GetBulkAvailabilityResponseBody

Success

## Example Usage

```typescript
import { GetBulkAvailabilityResponseBody } from "@vercel/sdk/models/getbulkavailabilityop.js";

let value: GetBulkAvailabilityResponseBody = {
  results: [
    {
      domain: "male-schedule.org",
      available: false,
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `results`                                                                      | [models.GetBulkAvailabilityResults](../models/getbulkavailabilityresults.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |