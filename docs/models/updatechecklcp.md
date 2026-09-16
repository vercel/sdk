# UpdateCheckLCP

## Example Usage

```typescript
import { UpdateCheckLCP } from "@vercel/sdk/models/updatecheckop.js";

let value: UpdateCheckLCP = {
  source: "web-vitals",
  value: null,
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `previousValue`                                                                                                            | *number*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `source`                                                                                                                   | [models.UpdateCheckChecksResponse200ApplicationJSONSource](../models/updatecheckchecksresponse200applicationjsonsource.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `value`                                                                                                                    | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |