# SignKmsTokenRequest

## Example Usage

```typescript
import { SignKmsTokenRequest } from "@vercel/sdk/models/signkmstokenop.js";

let value: SignKmsTokenRequest = {
  issuerId: "<id>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `issuerId`                                                             | *string*                                                               | :heavy_check_mark:                                                     | The ID of the issuer.                                                  |
| `requestBody`                                                          | [models.SignKmsTokenRequestBody](../models/signkmstokenrequestbody.md) | :heavy_minus_sign:                                                     | N/A                                                                    |