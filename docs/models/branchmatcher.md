# BranchMatcher

## Example Usage

```typescript
import { BranchMatcher } from "@vercel/sdk/models/twohundredandsixteen.js";

let value: BranchMatcher = {
  pattern: "<value>",
  type: "startsWith",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `pattern`                                                              | *string*                                                               | :heavy_check_mark:                                                     | The pattern to match against branch names                              |
| `type`                                                                 | [models.UserEventPayload268Type](../models/usereventpayload268type.md) | :heavy_check_mark:                                                     | The type of matching to perform                                        |