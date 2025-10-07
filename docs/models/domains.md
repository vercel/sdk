# Domains

## Example Usage

```typescript
import { Domains } from "@vercel/sdk/models/buydomainsop.js";

let value: Domains = {
  domainName: "concerned-bell.name",
  autoRenew: true,
  years: 101.03,
  expectedPrice: 3273.83,
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `domainName`                                | *string*                                    | :heavy_check_mark:                          | N/A                                         |
| `autoRenew`                                 | *boolean*                                   | :heavy_check_mark:                          | N/A                                         |
| `years`                                     | *number*                                    | :heavy_check_mark:                          | N/A                                         |
| `expectedPrice`                             | *number*                                    | :heavy_check_mark:                          | Represents a monetary amount in USD dollars |