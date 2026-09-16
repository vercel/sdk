# UpdateCheckFCP

## Example Usage

```typescript
import { UpdateCheckFCP } from "@vercel/sdk/models/updatecheckop.js";

let value: UpdateCheckFCP = {
  source: "web-vitals",
  value: 5881.2,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `previousValue`                                                                              | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `source`                                                                                     | [models.UpdateCheckChecksResponse200Source](../models/updatecheckchecksresponse200source.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `value`                                                                                      | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |