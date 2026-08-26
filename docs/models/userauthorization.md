# UserAuthorization

User authorization grant settings.

## Example Usage

```typescript
import { UserAuthorization } from "@vercel/sdk/models/connectconnectorcreatedata.js";

let value: UserAuthorization = {
  enabled: true,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `enabled`                                                            | *boolean*                                                            | :heavy_check_mark:                                                   | Whether this OAuth grant is enabled.                                 |
| `scopes`                                                             | *string*[]                                                           | :heavy_minus_sign:                                                   | Default scopes to request when token params specify scopes: [\"*\"]. |