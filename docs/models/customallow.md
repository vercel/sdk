# CustomAllow

## Example Usage

```typescript
import { CustomAllow } from "@vercel/sdk/models/updateprojectlastaliasrequest.js";

let value: CustomAllow = {
  to: {
    preset: "all-custom",
  },
  from: {
    preset: "all-custom",
  },
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `to`                                                                                                                          | *models.To*                                                                                                                   | :heavy_check_mark:                                                                                                            | A set of environments, expressed as explicit slugs, a named preset, or both. At least one of `slugs` or `preset` must be set. |
| `from`                                                                                                                        | *models.From*                                                                                                                 | :heavy_check_mark:                                                                                                            | A set of environments, expressed as explicit slugs, a named preset, or both. At least one of `slugs` or `preset` must be set. |