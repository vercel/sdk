# ResponseBodyProviders

## Example Usage

```typescript
import { ResponseBodyProviders } from "@vercel/sdk/models/getprojectsresponsebodyprojectsaction.js";

let value: ResponseBodyProviders = {
  claims: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `label`                    | *string*                   | :heavy_minus_sign:         | N/A                        |
| `claims`                   | Record<string, *string*[]> | :heavy_check_mark:         | N/A                        |