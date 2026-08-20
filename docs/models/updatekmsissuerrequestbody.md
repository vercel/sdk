# UpdateKmsIssuerRequestBody

## Example Usage

```typescript
import { UpdateKmsIssuerRequestBody } from "@vercel/sdk/models/updatekmsissuerop.js";

let value: UpdateKmsIssuerRequestBody = {};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | The name of the issuer.                                                                                               |
| `claimsSchema`                                                                                                        | Record<string, *any*>                                                                                                 | :heavy_minus_sign:                                                                                                    | A JSON Schema used to validate the resolved token claims when signing tokens for this issuer. Pass null to remove it. |