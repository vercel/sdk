# Principal3

Metadata for {@link principalId}.

## Example Usage

```typescript
import { Principal3 } from "@vercel/sdk/models/userevent.js";

let value: Principal3 = {
  id: "<id>",
  name: "<value>",
  type: "integration",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `avatar`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | The OAuth2 integration ID.                                             |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `slug`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `type`                                                                 | [models.UserEventPrincipal3Type](../models/usereventprincipal3type.md) | :heavy_check_mark:                                                     | N/A                                                                    |