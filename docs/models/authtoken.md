# AuthToken

Authentication token metadata.

## Example Usage

```typescript
import { AuthToken } from "@vercel/sdk/models/authtoken.js";

let value: AuthToken = {
  id: "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391",
  name: "<value>",
  type: "oauth2-token",
  prefix: "vcp_",
  suffix: "abc123",
  origin: "github",
  createdAt: 1632816536002,
  activeAt: 1632816536002,
  expiresAt: 1632816536002,
  leakedAt: 1632816536002,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `id`                                                                  | *string*                                                              | :heavy_check_mark:                                                    | The unique identifier of the token.                                   | 5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391      |
| `name`                                                                | *string*                                                              | :heavy_check_mark:                                                    | The human-readable name of the token.                                 |                                                                       |
| `type`                                                                | *string*                                                              | :heavy_check_mark:                                                    | The type of the token.                                                | oauth2-token                                                          |
| `prefix`                                                              | *string*                                                              | :heavy_minus_sign:                                                    | The token's prefix, for identification purposes.                      | vcp_                                                                  |
| `suffix`                                                              | *string*                                                              | :heavy_minus_sign:                                                    | The last few characters of the token, for identification purposes.    | abc123                                                                |
| `origin`                                                              | *string*                                                              | :heavy_minus_sign:                                                    | The origin of how the token was created.                              | github                                                                |
| `scopes`                                                              | *models.Scopes*[]                                                     | :heavy_minus_sign:                                                    | The access scopes granted to the token.                               |                                                                       |
| `createdAt`                                                           | *number*                                                              | :heavy_check_mark:                                                    | Timestamp (in milliseconds) of when the token was created.            | 1632816536002                                                         |
| `activeAt`                                                            | *number*                                                              | :heavy_check_mark:                                                    | Timestamp (in milliseconds) of when the token was most recently used. | 1632816536002                                                         |
| `expiresAt`                                                           | *number*                                                              | :heavy_minus_sign:                                                    | Timestamp (in milliseconds) of when the token expires.                | 1632816536002                                                         |
| `leakedAt`                                                            | *number*                                                              | :heavy_minus_sign:                                                    | Timestamp (in milliseconds) of when the token was marked as leaked.   | 1632816536002                                                         |
| `leakedUrl`                                                           | *string*                                                              | :heavy_minus_sign:                                                    | URL where the token was discovered as leaked.                         |                                                                       |