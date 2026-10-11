# Principal2

Metadata for {@link principalId}.

## Example Usage

```typescript
import { Principal2 } from "@vercel/sdk/models/userevent.js";

let value: Principal2 = {
  clientId: "<id>",
  name: "<value>",
  type: "app",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `clientId`                                                           | *string*                                                             | :heavy_check_mark:                                                   | The OAuth 2.0 client ID, which may be a CIMD URL.                    |
| `id`                                                                 | *string*                                                             | :heavy_minus_sign:                                                   | The backing Vercel App ID. When absent, defaults to `clientId`.      |
| `name`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `type`                                                               | [models.UserEventPrincipalType](../models/usereventprincipaltype.md) | :heavy_check_mark:                                                   | N/A                                                                  |