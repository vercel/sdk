# GetBulkPriceRequest

## Example Usage

```typescript
import { GetBulkPriceRequest } from "@vercel/sdk/models/getbulkpriceop.js";

let value: GetBulkPriceRequest = {
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  requestBody: {
    domains: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `teamId`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    | team_1a2b3c4d5e6f7g8h9i0j1k2l                                          |
| `requestBody`                                                          | [models.GetBulkPriceRequestBody](../models/getbulkpricerequestbody.md) | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |