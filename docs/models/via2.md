# Via2

Metadata for {@link viaIds}.

## Example Usage

```typescript
import { Via2 } from "@vercel/sdk/models/userevent.js";

let value: Via2 = {
  type: "app",
  clientId: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `type`                                                   | [models.UserEventViaType](../models/usereventviatype.md) | :heavy_check_mark:                                       | N/A                                                      |
| `clientId`                                               | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `name`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |