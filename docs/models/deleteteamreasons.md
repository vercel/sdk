# DeleteTeamReasons

An object describing the reason why the team is being deleted.

## Example Usage

```typescript
import { DeleteTeamReasons } from "@vercel/sdk/models/deleteteamop.js";

let value: DeleteTeamReasons = {
  slug: "<value>",
  description: "how failing integer",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `slug`                                                        | *string*                                                      | :heavy_check_mark:                                            | Idenitifier slug of the reason why the team is being deleted. |
| `description`                                                 | *string*                                                      | :heavy_check_mark:                                            | Description of the reason why the team is being deleted.      |