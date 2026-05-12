# UpdateMicrofrontendsOidcProviders

## Example Usage

```typescript
import { UpdateMicrofrontendsOidcProviders } from "@vercel/sdk/models/updatemicrofrontendsmanagedrules.js";

let value: UpdateMicrofrontendsOidcProviders = {
  to: {
    preset: "all-custom",
  },
  claims: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `to`                            | *models.UpdateMicrofrontendsTo* | :heavy_check_mark:              | N/A                             |
| `label`                         | *string*                        | :heavy_minus_sign:              | N/A                             |
| `claims`                        | Record<string, *string*[]>      | :heavy_check_mark:              | N/A                             |