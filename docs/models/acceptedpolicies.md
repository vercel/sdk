# AcceptedPolicies

## Example Usage

```typescript
import { AcceptedPolicies } from "@vercel/sdk/models/acceptprojecttransferrequestop.js";

let value: AcceptedPolicies = {
  eula: new Date("2024-03-17T08:03:51.448Z"),
  privacy: new Date("2025-01-02T10:20:13.120Z"),
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `eula`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `privacy`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `additionalProperties`                                                                                        | Record<string, [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)> | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |