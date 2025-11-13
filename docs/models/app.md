# App

Note that not all historical events have this field.

## Example Usage

```typescript
import { App } from "@vercel/sdk/models/userevent.js";

let value: App = {
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | The App's ID.                                                                          |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | The App's name at the moment this even was published (it may have changed since then). |