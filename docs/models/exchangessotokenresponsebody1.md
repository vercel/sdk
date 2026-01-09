# ExchangeSsoTokenResponseBody1

## Example Usage

```typescript
import { ExchangeSsoTokenResponseBody1 } from "@vercel/sdk/models/exchangessotokenop.js";

let value: ExchangeSsoTokenResponseBody1 = {
  idToken: "<value>",
  tokenType: "<value>",
  accessToken: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `idToken`          | *string*           | :heavy_check_mark: | N/A                |
| `tokenType`        | *string*           | :heavy_check_mark: | N/A                |
| `expiresIn`        | *number*           | :heavy_minus_sign: | N/A                |
| `accessToken`      | *string*           | :heavy_check_mark: | N/A                |
| `refreshToken`     | *string*           | :heavy_minus_sign: | N/A                |