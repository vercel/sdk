# GetDomainPriceRequest

## Example Usage

```typescript
import { GetDomainPriceRequest } from "@vercel/sdk/models/getdomainpriceop.js";

let value: GetDomainPriceRequest = {
  domain: "bogus-loyalty.info",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   | Example                       |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `domain`                      | *string*                      | :heavy_check_mark:            | N/A                           |                               |
| `years`                       | *string*                      | :heavy_minus_sign:            | N/A                           |                               |
| `teamId`                      | *string*                      | :heavy_minus_sign:            | N/A                           | team_1a2b3c4d5e6f7g8h9i0j1k2l |