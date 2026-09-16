# GetAllChecksLCP

## Example Usage

```typescript
import { GetAllChecksLCP } from "@vercel/sdk/models/getallchecksop.js";

let value: GetAllChecksLCP = {
  source: "web-vitals",
  value: 7600.78,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `previousValue`                                                                          | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `source`                                                                                 | [models.GetAllChecksChecksResponseSource](../models/getallcheckschecksresponsesource.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `value`                                                                                  | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |