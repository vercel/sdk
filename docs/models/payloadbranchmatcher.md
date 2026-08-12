# PayloadBranchMatcher

## Example Usage

```typescript
import { PayloadBranchMatcher } from "@vercel/sdk/models/usereventpayload242next.js";

let value: PayloadBranchMatcher = {
  type: "endsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | [models.UserEventPayload242NextType](../models/usereventpayload242nexttype.md) | :heavy_check_mark:                                                             | The type of matching to perform                                                |
| `pattern`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | The pattern to match against branch names                                      |