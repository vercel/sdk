# Results1

## Example Usage

```typescript
import { Results1 } from "@vercel/sdk/models/searchdomainsop.js";

let value: Results1 = {
  domain: "idolized-transom.info",
  available: false,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `domain`                                                                            | *string*                                                                            | :heavy_check_mark:                                                                  | A valid domain name                                                                 |
| `available`                                                                         | *false*                                                                             | :heavy_check_mark:                                                                  | `false` means the domain is unavailable or its availability could not be confirmed. |