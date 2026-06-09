# TypeJwtBearer

## Example Usage

```typescript
import { TypeJwtBearer } from "@vercel/sdk/models/getconnectortokenop.js";

let value: TypeJwtBearer = {
  type: "jwt-bearer",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [models.GetConnectorTokenSubjectConnectRequestType](../models/getconnectortokensubjectconnectrequesttype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `sub`                                                                                                        | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `iss`                                                                                                        | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `aud`                                                                                                        | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `additionalClaims`                                                                                           | Record<string, *any*>                                                                                        | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `additionalProperties`                                                                                       | Record<string, *any*>                                                                                        | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |