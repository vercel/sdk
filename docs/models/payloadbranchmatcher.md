# PayloadBranchMatcher

## Example Usage

```typescript
import { PayloadBranchMatcher } from "@vercel/sdk/models/twohundredandsixtyseven.js";

let value: PayloadBranchMatcher = {
  pattern: "<value>",
  type: "endsWith",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `pattern`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | The pattern to match against branch names                                              |
| `type`                                                                                 | [models.UserEventPayload323PreviousType](../models/usereventpayload323previoustype.md) | :heavy_check_mark:                                                                     | The type of matching to perform                                                        |