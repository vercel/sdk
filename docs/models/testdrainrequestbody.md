# TestDrainRequestBody

## Example Usage

```typescript
import { TestDrainRequestBody } from "@vercel/sdk/models/testdrainop.js";

let value: TestDrainRequestBody = {
  schemas: {},
  delivery: {
    type: "<value>",
    endpoint: {
      traces: "<value>",
    },
    encoding: "proto",
    headers: {},
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `schemas`                                                                | Record<string, [models.TestDrainSchemas](../models/testdrainschemas.md)> | :heavy_check_mark:                                                       | N/A                                                                      |
| `delivery`                                                               | *models.TestDrainDelivery*                                               | :heavy_check_mark:                                                       | N/A                                                                      |