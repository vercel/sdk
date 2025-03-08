# Period

Period for the billing cycle. The period end date cannot be older than 24 hours earlier than our current server's time.

## Example Usage

```typescript
import { Period } from "@vercel/sdk/models/submitbillingdataop.js";

let value: Period = {
  start: new Date("2025-02-04T03:15:11.328Z"),
  end: new Date("2023-07-13T06:15:38.872Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `start`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `end`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |