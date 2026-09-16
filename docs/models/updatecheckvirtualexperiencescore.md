# UpdateCheckVirtualExperienceScore

## Example Usage

```typescript
import { UpdateCheckVirtualExperienceScore } from "@vercel/sdk/models/updatecheckop.js";

let value: UpdateCheckVirtualExperienceScore = {
  source: "web-vitals",
  value: 3021.49,
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `previousValue`                                                                                                                                                | *number*                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                             | N/A                                                                                                                                                            |
| `source`                                                                                                                                                       | [models.UpdateCheckChecksResponse200ApplicationJSONResponseBodyOutputSource](../models/updatecheckchecksresponse200applicationjsonresponsebodyoutputsource.md) | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `value`                                                                                                                                                        | *number*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |