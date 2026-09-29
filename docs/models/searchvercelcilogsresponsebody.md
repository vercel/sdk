# SearchVercelCiLogsResponseBody

Successfully searched task logs.

## Example Usage

```typescript
import { SearchVercelCiLogsResponseBody } from "@vercel/sdk/models/searchvercelcilogsop.js";

let value: SearchVercelCiLogsResponseBody = {
  invocations: [],
  hasMore: false,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `invocations`                                                                        | [models.SearchVercelCiLogsInvocations](../models/searchvercelcilogsinvocations.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `hasMore`                                                                            | *boolean*                                                                            | :heavy_check_mark:                                                                   | Whether more than 1000 lines matched. The newest lines are returned.                 |