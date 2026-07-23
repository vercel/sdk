# ClientCredentials

## Example Usage

```typescript
import { ClientCredentials } from "@vercel/sdk/models/createconnectorop.js";

let value: ClientCredentials = {
  enabled: true,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `enabled`                                                            | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `scopes`                                                             | *string*[]                                                           | :heavy_minus_sign:                                                   | Default scopes to request when token params specify scopes: [\"*\"]. |