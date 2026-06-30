# ResponseBodyOidcProviders

## Example Usage

```typescript
import { ResponseBodyOidcProviders } from "@vercel/sdk/models/getprojectsresponsebody.js";

let value: ResponseBodyOidcProviders = {
  to: {
    slugs: [
      "<value 1>",
    ],
  },
  claims: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `to`                       | *models.ResponseBodyTo*    | :heavy_check_mark:         | N/A                        |
| `label`                    | *string*                   | :heavy_minus_sign:         | N/A                        |
| `claims`                   | Record<string, *string*[]> | :heavy_check_mark:         | N/A                        |