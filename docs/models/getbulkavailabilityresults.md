# GetBulkAvailabilityResults

## Example Usage

```typescript
import { GetBulkAvailabilityResults } from "@vercel/sdk/models/getbulkavailabilityop.js";

let value: GetBulkAvailabilityResults = {
  domain: "unhealthy-flint.biz",
  available: false,
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `domain`            | *string*            | :heavy_check_mark:  | A valid domain name |
| `available`         | *boolean*           | :heavy_check_mark:  | N/A                 |