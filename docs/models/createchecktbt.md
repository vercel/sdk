# CreateCheckTBT

## Example Usage

```typescript
import { CreateCheckTBT } from "@vercel/sdk/models/createcheckop.js";

let value: CreateCheckTBT = {
  source: "web-vitals",
  value: 2438.6,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `previousValue`                                                                              | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `source`                                                                                     | [models.CreateCheckChecksResponse200Source](../models/createcheckchecksresponse200source.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `value`                                                                                      | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |