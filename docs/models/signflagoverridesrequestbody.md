# SignFlagOverridesRequestBody

## Example Usage

```typescript
import { SignFlagOverridesRequestBody } from "@vercel/sdk/models/signflagoverridesop.js";

let value: SignFlagOverridesRequestBody = {
  overrides: {},
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `overrides`                                                                                                               | [models.Overrides](../models/overrides.md)                                                                                | :heavy_check_mark:                                                                                                        | The value of each overridden flag, by flag key                                                                            |
| `environment`                                                                                                             | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | production, preview, development or the slug of a custom environment. Defaults to the environment of a Vercel OIDC token. |
| `ttl`                                                                                                                     | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Seconds until the overrides expire. Defaults to one hour, at most one day.                                                |