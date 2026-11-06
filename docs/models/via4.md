# Via4

Metadata for {@link viaIds}.

## Example Usage

```typescript
import { Via4 } from "@vercel/sdk/models/userevent.js";

let value: Via4 = {
  id: "<id>",
  name: "<value>",
  type: "external",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `email`                                                    | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `id`                                                       | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `type`                                                     | [models.UserEventVia4Type](../models/usereventvia4type.md) | :heavy_check_mark:                                         | N/A                                                        |