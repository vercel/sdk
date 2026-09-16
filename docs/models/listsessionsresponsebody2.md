# ListSessionsResponseBody2

## Example Usage

```typescript
import { ListSessionsResponseBody2 } from "@vercel/sdk/models/listsessionsop.js";

let value: ListSessionsResponseBody2 = {
  pagination: {
    count: 4334.62,
    next: "<value>",
  },
  sessions: [],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `pagination`                                                                                 | [models.ListSessionsResponseBodyPagination](../models/listsessionsresponsebodypagination.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `sessions`                                                                                   | [models.Session](../models/session.md)[]                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |