# PayloadBranchMatcher

## Example Usage

```typescript
import { PayloadBranchMatcher } from "@vercel/sdk/models/payloaddefaultpurchasetype.js";

let value: PayloadBranchMatcher = {
  type: "endsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | [models.UserEventPayload161NextType](../models/usereventpayload161nexttype.md) | :heavy_check_mark:                                                             | The type of matching to perform                                                |
| `pattern`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | The pattern to match against branch names                                      |