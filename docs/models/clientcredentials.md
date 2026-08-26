# ClientCredentials

Client credentials grant settings.

## Example Usage

```typescript
import { ClientCredentials } from "@vercel/sdk/models/connectconnectorcreatedata.js";

let value: ClientCredentials = {
  enabled: true,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `enabled`                                                            | *boolean*                                                            | :heavy_check_mark:                                                   | Whether this OAuth grant is enabled.                                 |
| `scopes`                                                             | *string*[]                                                           | :heavy_minus_sign:                                                   | Default scopes to request when token params specify scopes: [\"*\"]. |