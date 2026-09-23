# Entities

A list of "entities" within the event `text`. Useful for enhancing the displayed text with additional styling and links.

## Example Usage

```typescript
import { Entities } from "@vercel/sdk/models/fourhundredandeleven.js";

let value: Entities = {
  end: 3,
  start: 0,
  type: "author",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `end`                                                                 | *number*                                                              | :heavy_check_mark:                                                    | The index of where the entity ends within the `text` (non-inclusive). | 3                                                                     |
| `start`                                                               | *number*                                                              | :heavy_check_mark:                                                    | The index of where the entity begins within the `text` (inclusive).   | 0                                                                     |
| `type`                                                                | [models.UserEventEntitiesType](../models/userevententitiestype.md)    | :heavy_check_mark:                                                    | The type of entity.                                                   | author                                                                |