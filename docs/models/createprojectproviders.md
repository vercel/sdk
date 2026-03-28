# CreateProjectProviders

## Example Usage

```typescript
import { CreateProjectProviders } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectProviders = {
  claims: {
    "key": [],
    "key1": [],
    "key2": [
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