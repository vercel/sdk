# UpdateProjectProviders

## Example Usage

```typescript
import { UpdateProjectProviders } from "@vercel/sdk/models/updateprojectprojectsresponse200applicationjsonresponsebodyaction.js";

let value: UpdateProjectProviders = {
  claims: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
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
| `label`                    | *string*                   | :heavy_minus_sign:         | N/A                        |
| `claims`                   | Record<string, *string*[]> | :heavy_check_mark:         | N/A                        |