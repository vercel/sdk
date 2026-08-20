# PayloadBranchMatcher

## Example Usage

```typescript
import { PayloadBranchMatcher } from "@vercel/sdk/models/onehundredandninetyfour.js";

let value: PayloadBranchMatcher = {
  type: "endsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | [models.UserEventPayload248NextType](../models/usereventpayload248nexttype.md) | :heavy_check_mark:                                                             | The type of matching to perform                                                |
| `pattern`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | The pattern to match against branch names                                      |