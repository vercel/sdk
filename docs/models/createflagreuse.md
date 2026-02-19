# CreateFlagReuse

Allows linking this environment to another environment so this flag will be evaluated with the other flag's configuration

## Example Usage

```typescript
import { CreateFlagReuse } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagReuse = {
  active: false,
  environment: "<value>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `active`                           | *boolean*                          | :heavy_check_mark:                 | Whether the reuse is active or not |
| `environment`                      | *string*                           | :heavy_check_mark:                 | The environment to link to         |