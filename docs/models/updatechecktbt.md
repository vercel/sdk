# UpdateCheckTBT

## Example Usage

```typescript
import { UpdateCheckTBT } from "@vercel/sdk/models/updatecheckop.js";

let value: UpdateCheckTBT = {
  source: "web-vitals",
  value: 9931.58,
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `previousValue`                                                                                                                                    | *number*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `source`                                                                                                                                           | [models.UpdateCheckChecksResponse200ApplicationJSONResponseBodySource](../models/updatecheckchecksresponse200applicationjsonresponsebodysource.md) | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `value`                                                                                                                                            | *number*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |