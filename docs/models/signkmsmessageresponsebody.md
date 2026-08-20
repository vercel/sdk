# SignKmsMessageResponseBody

## Example Usage

```typescript
import { SignKmsMessageResponseBody } from "@vercel/sdk/models/signkmsmessageop.js";

let value: SignKmsMessageResponseBody = {
  signature: {
    payload: "<value>",
    signature: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `signature`                                                                                                                                                                        | [models.Signature](../models/signature.md)                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                 | Flattened JWS JSON Serialization Syntax token. Payload is returned as an empty string when JWS Unencoded Payload ({@link https://www.rfc-editor.org/rfc/rfc7797 RFC7797}) is used. |