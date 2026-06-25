# TestDrainRequestBody

## Example Usage

```typescript
import { TestDrainRequestBody } from "@vercel/sdk/models/testdrainop.js";

let value: TestDrainRequestBody = {
  schemas: {},
  delivery: {
    type: "<value>",
    endpoint: "<value>",
    encoding: "json",
    compression: "none",
    fileStructure: "hive",
    roleArn: "<value>",
    region: "<value>",
    serverSideEncryption: "AES256",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `schemas`                                                                | Record<string, [models.TestDrainSchemas](../models/testdrainschemas.md)> | :heavy_check_mark:                                                       | N/A                                                                      |
| `delivery`                                                               | *models.TestDrainDelivery*                                               | :heavy_check_mark:                                                       | N/A                                                                      |