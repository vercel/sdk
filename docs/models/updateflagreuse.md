# UpdateFlagReuse

Allows linking this environment to another environment so this flag will be evaluated with the other flag's configuration

## Example Usage

```typescript
import { UpdateFlagReuse } from "@vercel/sdk/models/updateflagop.js";

let value: UpdateFlagReuse = {
  active: true,
  environment: "<value>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `active`                           | *boolean*                          | :heavy_check_mark:                 | Whether the reuse is active or not |
| `environment`                      | *string*                           | :heavy_check_mark:                 | The environment to link to         |