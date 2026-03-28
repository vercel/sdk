# Providers

## Example Usage

```typescript
import { Providers } from "@vercel/sdk/models/updateprojectprojectsresponse200applicationjsonresponsebodyaction.js";

let value: Providers = {
  issuer: "jcb",
  claims: [
    {
      name: "<value>",
      values: [],
    },
  ],
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `issuer`                                      | *string*                                      | :heavy_check_mark:                            | The issuer URL of the OIDC Provider           |
| `label`                                       | *string*                                      | :heavy_minus_sign:                            | The label or description of the OIDC Provider |
| `claims`                                      | [models.Claims](../models/claims.md)[]        | :heavy_check_mark:                            | N/A                                           |