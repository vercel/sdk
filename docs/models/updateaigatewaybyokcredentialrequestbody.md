# UpdateAiGatewayByokCredentialRequestBody

## Example Usage

```typescript
import { UpdateAiGatewayByokCredentialRequestBody } from "@vercel/sdk/models/updateaigatewaybyokcredentialop.js";

let value: UpdateAiGatewayByokCredentialRequestBody = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `name`                                                                                  | *string*                                                                                | :heavy_minus_sign:                                                                      | The new name for the credential                                                         |
| `active`                                                                                | *boolean*                                                                               | :heavy_minus_sign:                                                                      | Whether the credential should be active                                                 |
| `zeroDataRetention`                                                                     | *boolean*                                                                               | :heavy_minus_sign:                                                                      | Whether the customer attested this external credential has a zero data retention policy |
| `userId`                                                                                | *string*                                                                                | :heavy_minus_sign:                                                                      | The ID of the user performing this action, used for Activity-log attribution.           |