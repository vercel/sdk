# ListSessionsResponseBody2

## Example Usage

```typescript
import { ListSessionsResponseBody2 } from "@vercel/sdk/models/listsessionsop.js";

let value: ListSessionsResponseBody2 = {
  sessions: [],
  pagination: {
    count: 4708.44,
    next: "<value>",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `sessions`                                                                                   | [models.Session](../models/session.md)[]                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `pagination`                                                                                 | [models.ListSessionsResponseBodyPagination](../models/listsessionsresponsebodypagination.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |