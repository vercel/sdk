# Via3

Metadata for {@link viaIds}.

## Example Usage

```typescript
import { Via3 } from "@vercel/sdk/models/userevent.js";

let value: Via3 = {
  id: "<id>",
  name: "<value>",
  type: "integration",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `avatar`                                                   | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `id`                                                       | *string*                                                   | :heavy_check_mark:                                         | The OAuth2 integration ID.                                 |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `slug`                                                     | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `type`                                                     | [models.UserEventVia3Type](../models/usereventvia3type.md) | :heavy_check_mark:                                         | N/A                                                        |