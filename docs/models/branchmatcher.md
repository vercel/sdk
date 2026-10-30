# BranchMatcher

## Example Usage

```typescript
import { BranchMatcher } from "@vercel/sdk/models/usereventpayload261origin.js";

let value: BranchMatcher = {
  pattern: "<value>",
  type: "startsWith",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `pattern`                                                              | *string*                                                               | :heavy_check_mark:                                                     | The pattern to match against branch names                              |
| `type`                                                                 | [models.UserEventPayload295Type](../models/usereventpayload295type.md) | :heavy_check_mark:                                                     | The type of matching to perform                                        |