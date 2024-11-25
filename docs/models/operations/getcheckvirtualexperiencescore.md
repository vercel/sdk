# GetCheckVirtualExperienceScore

## Example Usage

```typescript
import { GetCheckVirtualExperienceScore } from "@vercel/sdk/models/operations/getcheck.js";

let value: GetCheckVirtualExperienceScore = {
  value: 5865.13,
  source: "web-vitals",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `value`                                                                                                                                | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `previousValue`                                                                                                                        | *number*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `source`                                                                                                                               | [operations.GetCheckChecksResponse200ApplicationJSONSource](../../models/operations/getcheckchecksresponse200applicationjsonsource.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |