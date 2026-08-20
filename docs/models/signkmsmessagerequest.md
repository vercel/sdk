# SignKmsMessageRequest

## Example Usage

```typescript
import { SignKmsMessageRequest } from "@vercel/sdk/models/signkmsmessageop.js";

let value: SignKmsMessageRequest = {
  issuerId: "<id>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `issuerId`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | The ID of the issuer.                                                      |
| `requestBody`                                                              | [models.SignKmsMessageRequestBody](../models/signkmsmessagerequestbody.md) | :heavy_minus_sign:                                                         | N/A                                                                        |