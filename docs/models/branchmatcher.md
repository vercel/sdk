# BranchMatcher

## Example Usage

```typescript
import { BranchMatcher } from "@vercel/sdk/models/usereventpayloadnext.js";

let value: BranchMatcher = {
  pattern: "<value>",
  type: "startsWith",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `pattern`                                                              | *string*                                                               | :heavy_check_mark:                                                     | The pattern to match against branch names                              |
| `type`                                                                 | [models.UserEventPayload284Type](../models/usereventpayload284type.md) | :heavy_check_mark:                                                     | The type of matching to perform                                        |