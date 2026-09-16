# GetCheckLCP

## Example Usage

```typescript
import { GetCheckLCP } from "@vercel/sdk/models/getcheckop.js";

let value: GetCheckLCP = {
  source: "web-vitals",
  value: 9049.45,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `previousValue`                                                                  | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `source`                                                                         | [models.GetCheckChecksResponseSource](../models/getcheckchecksresponsesource.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `value`                                                                          | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |