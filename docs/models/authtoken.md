# AuthToken

Authentication token metadata.

## Example Usage

```typescript
import { AuthToken } from "@vercel/sdk/models/authtoken.js";

let value: AuthToken = {
  activeAt: 1632816536002,
  createdAt: 1632816536002,
  expiresAt: 1632816536002,
  id: "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391",
  leakedAt: 1632816536002,
  name: "<value>",
  origin: "github",
  prefix: "vcp_",
  revokedAt: 1632816536002,
  suffix: "abc123",
  type: "oauth2-token",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `activeAt`                                                            | *number*                                                              | :heavy_check_mark:                                                    | Timestamp (in milliseconds) of when the token was most recently used. | 1632816536002                                                         |
| `createdAt`                                                           | *number*                                                              | :heavy_check_mark:                                                    | Timestamp (in milliseconds) of when the token was created.            | 1632816536002                                                         |
| `expiresAt`                                                           | *number*                                                              | :heavy_minus_sign:                                                    | Timestamp (in milliseconds) of when the token expires.                | 1632816536002                                                         |
| `id`                                                                  | *string*                                                              | :heavy_check_mark:                                                    | The unique identifier of the token.                                   | 5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391      |
| `leakedAt`                                                            | *number*                                                              | :heavy_minus_sign:                                                    | Timestamp (in milliseconds) of when the token was marked as leaked.   | 1632816536002                                                         |
| `leakedUrl`                                                           | *string*                                                              | :heavy_minus_sign:                                                    | URL where the token was discovered as leaked.                         |                                                                       |
| `name`                                                                | *string*                                                              | :heavy_check_mark:                                                    | The human-readable name of the token.                                 |                                                                       |
| `origin`                                                              | *string*                                                              | :heavy_minus_sign:                                                    | The origin of how the token was created.                              | github                                                                |
| `prefix`                                                              | *string*                                                              | :heavy_minus_sign:                                                    | The token's prefix, for identification purposes.                      | vcp_                                                                  |
| `revokedAt`                                                           | *number*                                                              | :heavy_minus_sign:                                                    | Timestamp (in milliseconds) of when the token was revoked.            | 1632816536002                                                         |
| `scopes`                                                              | *models.Scopes*[]                                                     | :heavy_minus_sign:                                                    | The access scopes granted to the token.                               |                                                                       |
| `suffix`                                                              | *string*                                                              | :heavy_minus_sign:                                                    | The last few characters of the token, for identification purposes.    | abc123                                                                |
| `type`                                                                | *string*                                                              | :heavy_check_mark:                                                    | The type of the token.                                                | oauth2-token                                                          |