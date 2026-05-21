# BranchMatcher

## Example Usage

```typescript
import { BranchMatcher } from "@vercel/sdk/models/onehundredandfiftysix.js";

let value: BranchMatcher = {
  type: "equals",
  pattern: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `type`                                                                 | [models.UserEventPayload181Type](../models/usereventpayload181type.md) | :heavy_check_mark:                                                     | The type of matching to perform                                        |
| `pattern`                                                              | *string*                                                               | :heavy_check_mark:                                                     | The pattern to match against branch names                              |