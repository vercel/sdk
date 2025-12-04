# GetTldPriceRequest

## Example Usage

```typescript
import { GetTldPriceRequest } from "@vercel/sdk/models/gettldpriceop.js";

let value: GetTldPriceRequest = {
  tld: "<value>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `tld`                                                                                                            | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |
| `years`                                                                                                          | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The number of years to get the price for. If not provided, the minimum number of years for the TLD will be used. |                                                                                                                  |
| `teamId`                                                                                                         | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                                                    |