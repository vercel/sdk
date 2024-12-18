# ListUserEventsResponseBody

Successful response.

## Example Usage

```typescript
import { ListUserEventsResponseBody } from "@vercel/sdk/models/listusereventsop.js";

let value: ListUserEventsResponseBody = {
  events: [
    {},
  ],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `events`                                     | [models.UserEvent](../models/userevent.md)[] | :heavy_check_mark:                           | Array of events generated by the User.       |