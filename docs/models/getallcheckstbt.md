# GetAllChecksTBT

## Example Usage

```typescript
import { GetAllChecksTBT } from "@vercel/sdk/models/getallchecksop.js";

let value: GetAllChecksTBT = {
  source: "web-vitals",
  value: 5509.14,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `previousValue`                                                                                | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `source`                                                                                       | [models.GetAllChecksChecksResponse200Source](../models/getallcheckschecksresponse200source.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `value`                                                                                        | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |