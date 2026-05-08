# GetMicrofrontendsInGroupOidcProviders

## Example Usage

```typescript
import { GetMicrofrontendsInGroupOidcProviders } from "@vercel/sdk/models/getmicrofrontendsingroupresponsebody.js";

let value: GetMicrofrontendsInGroupOidcProviders = {
  to: {
    slugs: [],
  },
  claims: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `to`                                | *models.GetMicrofrontendsInGroupTo* | :heavy_check_mark:                  | N/A                                 |
| `label`                             | *string*                            | :heavy_minus_sign:                  | N/A                                 |
| `claims`                            | Record<string, *string*[]>          | :heavy_check_mark:                  | N/A                                 |